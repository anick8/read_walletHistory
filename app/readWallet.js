const e = require('express');
var pgsql = require('../lib/pgsql')

exports.readAllIdentityTransactions = async (req) => {

    var IdentityUUID = req.body.IdentityUUID;
    var qname = 'SELECT * FROM "WalletHistory" WHERE  "IdentityUUID" = $1 ';
    var qarg =  [IdentityUUID]
	try{
            result =await pgsql.getpgcontran(qname,qarg)
            console.log(result.rows)
            data = result.rows
            if (result.rowCount > 0)
                return [null,data,"Successfully fetched data"]
            else
            {
                return[null,null,"No transactions for this Identity"]
            }
        }
        catch(err)
        {
            return [err,null,"Error Fetching from data base"]
        }
	
	};
exports.readallWalletTransactions = async (req) => {

    var IdentityUUID = req.body.IdentityUUID;
    var qname = 'SELECT * FROM "WalletHistory" WHERE  "FromWalletUUID" = $1 ';
    var qarg =  [IdentityUUID]
    try{
            result =await pgsql.getpgcontran(qname,qarg)
            console.log(result.rows)
            data = result.rows
            if (result.rowCount > 0)
                return [null,data,"Successfully fetched data"]
            else
            {
                return[null,null,"No transactions for this Identity"]
            }
        }
        catch(err)
        {
            return [err,null,"Error Fetching from data base"]
        }
    
    };
exports.readTransaction = async (req) => {

    var IdentityUUID = req.body.IdentityUUID;
    var qname = 'SELECT * FROM "WalletHistory" WHERE  "TransactionUUID" = $1 ';
    var qarg =  [IdentityUUID]
    try{
            result =await pgsql.getpgcontran(qname,qarg)
            console.log(result.rows)
            data = result.rows
            if (result.rowCount > 0)
                return [null,data,"Successfully fetched data"]
            else
            {
                return[null,null,"No transactions for this Identity"]
            }
        }
        catch(err)
        {
            return [err,null,"Error Fetching from data base"]
        }
    
    };

/*
    var usn = req.body.usname;
    let result
    qname='select "Username" from "UserInfo" where "Username" like $1 limit 10 ' 
    qarg=[usn]
    
    try{
        result =await pgsql.conquery(qname,[`${qarg}%`])
        console.log(result)
        data = result.rows
        return [null,data,"Successfully fetched data"]
    }
    catch(err)
    {
        return [err,null,"Error Fetching from data base"]
    }
*/
