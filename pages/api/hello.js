// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Q from "q";
import async from "async";
import * as CONFIG_KEYS from "../../src/config/config";
import db from "../../src/config/dbConnection";
export default function handler(req, res) {
  var deferred = Q.defer();
  var select = `SELECT *  from Proposal where Proposal_ID=?`;
  var params = [2221];

  db.query(select, params).then(
    function (dbResult) {
      // console.log("dbResult", dbResult);
      res.status(200).json(dbResult);
      deferred.resolve(dbResult);
    },
    function (err) {
      console.log(err);
      deferred.reject(err);
    }
  );
  const results = deferred.promise.then((response) => {
    return response;
  });

  // console.log(results);
}
