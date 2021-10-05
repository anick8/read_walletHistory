var pgsql = require('../lib/pgsql')

exports.readuser = async (req) => {
        var usn = req.body.usname;
        let result
        qname='select "UserUUID","Username" from "UserInfo" where "Username" = $1' 
        qarg=usn
        try{
            result =await pgsql.conquery(qname,[qarg])
            console.log(result.rows)
            data = result.rows
            return [null,data,"Successfully fetched data"]
        }
        catch(err)
        {
            return [err,null,"Error Fetching from data base"]
        }

};

exports.readAllusers = async (req) => {
    var usn = req.body.usname;
    let result
    qname='select "Username" from "UserInfo" where "Username" like $1 limit 10 ' 
    qarg=usn
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

};
