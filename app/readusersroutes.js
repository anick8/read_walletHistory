var pgsql = require('../lib/pgsql')
var utils = require('../common/utils')
module.exports = (app, console) => {
    var readuser = require('./readusers');
//    var utils = require('../common/utils');

    app.post('/readUser',async (req, res) => {
         result  = await readuser.readuser(req);
	 console.log(req.body);
         utils.handleresult(res,result)
        }
    )
        
    app.post('/readAllUsers',async (req, res) => {
        result =await readuser.readAllusers(req);
        utils.handleresult(res,result)
        }
    )

    console.log("Installing TOKEN Routes")
};
