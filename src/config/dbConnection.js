(function (db) {
    var Q = require("q");
    var fs = require("fs");
    var mysql = require("mysql");
    var con, config, pool;
  
    db.init = function (configParam) {
      config = configParam;
  
      pool = mysql.createPool({
        host: "database-1.c2ib2kngvoot.us-west-2.rds.amazonaws.com",
        user: "Sanket_Box_Beta",
        password: "thebox@Sanket",
        database: "theBoxDev_Beta",
      });
    };
  
    db.init();
  
    db.query = function (
      queryStatement,
      params,
      resultantFunction,
      largeConnectionStatus
    ) {
      var deferred = Q.defer();
      var parameters = [];
      pool.getConnection(function (err, con) {
        parameters = params;
        if (params && params.length > 0) {
          if (
            typeof queryStatement == "string" &&
            typeof resultantFunction == "function"
          ) {
            con.query(queryStatement, parameters, function (err, result) {
              if (err) {
                console.error(
                  new Date() +
                    ": While running the query " +
                    queryStatement +
                    " Error in database",
                  err
                );
  
                deferred.reject(err);
                return;
              }
              resultantFunction(result, err, con);
              con.release();
            });
          } else if (typeof queryStatement == "string") {
            con.query(queryStatement, parameters, function (err, result1) {
              if (err) {
                console.error(new Date() + ": Error in database", err);
                deferred.reject(err);
                return;
              }
              deferred.resolve(result1);
              con.release();
            });
          }
        } else {
          if (
            typeof queryStatement == "string" &&
            typeof resultantFunction == "function"
          ) {
            con.query(queryStatement, function (err, result) {
              if (err) {
                console.error(
                  new Date() +
                    ": While running the query " +
                    queryStatement +
                    " Error in database",
                  err
                );
  
                deferred.reject(err);
                return;
              }
              resultantFunction(result, err, con);
              con.release();
            });
          } else if (typeof queryStatement == "string") {
            con.query(queryStatement, function (err, result1) {
              if (err) {
                console.error(new Date() + ": Error in database", err);
                deferred.reject(err);
                return;
              }
              deferred.resolve(result1);
              con.release();
            });
          }
        }
      });
      return deferred.promise;
    };
  })(module.exports);
  