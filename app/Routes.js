var utils = require('../common/utils')
var readWallet = require('./readWallet');
module.exports = (app, console) => {   

    app.post('/readIdentityTransactions',async (req, res) => {
        result  = await readWallet.readAllIdentityTransactions(req)
	    console.log(req.body);
        utils.handleresult(res,result)
        }
    )   
    app.post('/readWalletTransactions',async (req, res) => {
        result =await readWallet.readallWalletTransactions(req)
        utils.handleresult(res,result)
        }
    )
    app.post('/readTransaction',async (req, res) => {
        result =await readWallet.readTransaction(req)
        utils.handleresult(res,result)
        }
    )

    console.log("Installing TOKEN Routes")
};
