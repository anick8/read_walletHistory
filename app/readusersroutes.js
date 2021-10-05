var pgsql = require('../lib/pgsql')
var utils = require('../common/utils')
module.exports = (app, console) => {
    var readuser = require('./readusers');
//    var utils = require('../common/utils');

    app.post('/readuser',async (req, res) => {
         result  = await readuser.readuser(req);
         utils.handleresult(res,result)
        }
    )
        
    app.post('/readAllusers',async (req, res) => {
        result =await readuser.readAllusers(req);
        utils.handleresult(res,result)
        }
    )

    console.log("Installing TOKEN Routes")
};
