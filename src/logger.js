var logger = {
	log : function (message, log_level) {
		"use strict";
		function populateDB(tx) {
			tx.exectureSql('CREATE TABLE IF NOT EXISTS LOG (id INTEGER PRIMARY KEY AUTOINCREMENT, time TIMESTAMP DEFAULT CURRENT_TIMESTAMP, message TEXT, log_level TEXT)');
			tx.exectureSql('INSERT INTO LOG (message, log_level) VALUES ("' + message + '", "' + log_level + '")');
		}
		function errorCB(err) { }
		function successCB() { }
		var db = window.openDatabase(name, version, display_name, size);
		db.transaction(populateDB, errorCB, successCB);
	},
	log_level : {
		ERROR : "ERROR",
		DEBUG : "DEBUG",
		INFO : "INFO",
		AUDIT : "AUDIT"
	}
};