// #!/bin/dart
// */////////////////////////////////////////////////////*
// *    Inspired by https://github.com/jsoma/tabletop    *
// */////////////////////////////////////////////////////*

library tabletop;

import 'package:logging/logging.dart';
import 'package:http/http.dart' as http;
import 'dart:convert'; //JSON
import 'dart:async';


const CORSProxy = "http://www.corsproxy.com/"; // trailing slash required
const debug = false;
const googleSpreadsheetsDomain = "spreadsheets.google.com";
final Logger _log = new Logger('GoogleTable');

class GoogleTable {
	bool useProxy;
	String key, endpoint, proxy, proxyParameterize;
	Map _sheets = {};
	Completer _ready = new Completer();

	GoogleTable ( this.key,
			{   this.endpoint: googleSpreadsheetsDomain,
				this.useProxy: false,
				this.proxy: CORSProxy,
				this.proxyParameterize }
	) {
		if (key == null) {
			_log.warning("You need to pass GoogleTable a key!");
			return;
		}
		_log.info("Initializing with key " + key);
		_fetchSheetsList();
	}

	Future ready() {
		return _ready.future;
	}

	Future _fetchSheetsList() {
		String url = useProxy ? proxy : "https://";
		url += endpoint + "/feeds/worksheets/" + key + "/public/values?alt=json";
		_log.fine( "Fetchng sheets list from " + url);

		_log.fine(url);
		http.read(url).then( (response) {
					_log.finest(response);
					Map data = JSON.decode(response);
					_sheets = {};
					for ( int i = 0, ilen = data["feed"]["entry"].length; i < ilen; i++ )
						_sheets[ data["feed"]["entry"][i]["title"]["\$t"] ] = i +1;
					_log.finest(JSON.encode(_sheets));
					_ready.complete();
				});
		return _ready.future;
	}

	/**
	   Load data from the worksheet, turning each into a Tabletop Model.
	   If sheetName is not defined, return, return the first sheet
	*/
	Future<List> getTable ( {String sheetName: "", String query, String orderBy, bool reverse: false} ) {
		Completer completer = new Completer();

		/// If the instance is being queried before the data's been fetched then return undefined.
		int sheetIdx = _indexOfSheet( sheetName );
		if (sheetIdx == -1) {
			_log.warning('No sheet named "'+sheetName+'" found');
			return completer.future;
		}
		if (sheetName == "" && _sheets.length > 1)
			_log.warning("You have more than one sheet but are using simple sheet mode!");

		String url = useProxy ? proxy : "https://";
		url += endpoint + "/feeds/list/" + key + '/' + sheetIdx.toString() + "/public/values?alt=json";
		if (query != null) url += "&sq=" + query;
		if (orderBy != null) url += "&orderby=column:" + orderBy.toLowerCase();
		if (reverse) url += "&reverse=true";

		_log.fine("Fetching data for \"$sheetName\" from $url...");
		http.read(url).then( (response) {
					// Map data = JSON.decode(response.replaceAll("\\n", ""));
					Map data = JSON.decode(response);
					completer.complete( new TabletopModel(data).data );
				});

		return completer.future;
	}

	Future <List> getTables ( List tables ) {
		return Future.wait( tables.map( (table) => getTable(sheetName: table) ), eagerError: true );
	}
	/**
	   Returns index of the worksheet with the given name. The first one is 1.
	*/
	int _indexOfSheet( String sheetName ) {
		if (sheetName == "" && _sheets.length > 0) return 1;
		if (_sheets[sheetName] != null) return _sheets[sheetName];
		return -1;
	}
}


/*
  Tabletop.Model stores the attribute names and parses the worksheet data
  to turn it into something worthwhile
  Options should be in the format { feed: XXX }, with XXX being the list-based worksheet
*/
class TabletopModel {
	List _columnNames;
	List _data = [];
	List get data => _data; // Returns all of the data (rows) of the worksheet as objects

	TabletopModel (Map options) {
		_columnNames = [];
		String name = options['feed']['title']["\$t"];

		if (options['feed']['entry'] == null) {
			_log.warning("Missing data for " + name + ", make sure you didn't forget column headers");
			return;
		}

		options['feed']['entry'][0].forEach((key, value) {
			if ( key.startsWith("gsx\$") )
				_columnNames.add( key.replaceFirst("gsx\$", "") );
		});
		_log.finest( JSON.encode(_columnNames) );

		for ( int i = 0, ilen =  options['feed']['entry'].length ; i < ilen; i++) {
			Map source = options['feed']['entry'][i];
			Map row = {};
			for(int j = 0, jlen = _columnNames.length; j < jlen ; j++) {
				var cell = source[ "gsx\$" + _columnNames[j] ];
				if (cell != null)
					row[ _columnNames[j] ] = cell['\$t'];
			}
			_data.add( row );
		}
	}

}
