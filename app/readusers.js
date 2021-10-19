var pgsql = require('../lib/pgsql')

exports.readuser = async (req) => { 

        var email = req.body.email;
        console.log("Started!!! Email - " + email)
        let result
        qname='select "UserUUID","Email" from "UserInfo" where "Email" = $1' 
        qarg=email
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

    var userid = req.body.UserUUID || "0";
    var email = req.body.email || "";
    var created = req.body.createdAt || "0";
    var modified = req.body.modifiedAt || "0";
    var limit = req.body.limit || "10";
    var offset = req.body.offset || "0";
    var orderby = req.body.orderby || "CreatedAt";
    //var orderdir = req.body.orderdir || "DESC";

	
    const readusersquery = {
        name: 'fetch-users',
        text: 'SELECT * FROM "UserInfo" WHERE "UserUUID" = $1 AND "CreatedAt" > $2 AND "ModifiedAt" > $3 OR "Email" like $4 ORDER BY $5 DESC LIMIT $6 OFFSET $7 ',
        values: [userid,created,modified,`${usname}%`,orderby,limit,offset]
    }
	try{
            result =await pgsql.namedquery(readusersquery)
            console.log(result.rows)
            data = result.rows
            return [null,data,"Successfully fetched data"]
        }
        catch(err)
        {
            return [err,null,"Error Fetching from data base"]
        }
	pgsql.namedquery(readusersquery, (err, res) => {
	  if (err) {
	    console.log(err.stack)
	  } else {
	    console.log(res)
	  }
	})

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
};
