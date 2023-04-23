// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Q from "q";
import * as CONFIG_KEYS from "../../src/config/config";
import db from "../../src/config/dbConnection";
import crypto from "crypto";
export default function handler(req, res) {
  if (req.method !== "POST") {
    console.log(req);
    return;
  }
  var deferred = Q.defer();
  var select = "Select * FROM User WHERE Email_Address= ? and status='Active'";
  var params = [req.body.emailId];
  const secret = CONFIG_KEYS.Config.encryption.jwt_secret;
  let access_Token = crypto.createHmac("sha256", secret).update(req.body.password).digest("hex");
  //   req.body.emailId,
  //   req.body.deviceId,
  //   req.body.password
  db.query(select, params).then(
    function (dbResult) {
      console.log(dbResult, access_Token);
      res.status(200).json(dbResult);
      deferred.resolve(dbResult);
    },
    function (err) {
      console.log(err);
      res.status(400).json(err);
      deferred.reject(err);
    }
  );
}
