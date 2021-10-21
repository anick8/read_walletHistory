var pgsql = require('../lib/pgsql')

exports.readUser = async (req) => { 

        var Email = req.body.Email;
        console.log("Started!!! Email - " + Email)
        let result
        qname='select "UserUUID","Email" from "UserInfo" where "Email" = $1' 
        qarg=Email
        try{
            result =await pgsql.conquery(qname,[qarg])
            console.log(result.rows)
            if(result.rowCount == 1)
	    	data = result.rows
	    else
		data = "Email Not Found!"
	
            return [null,data,"Successfully fetched data"]
        }
        catch(err)
        {
            return [err,null,"Error Fetching from data base"]
        }

};

exports.readAllUsers = async (req) => {

    var created = req.body.createdAt || "0";
    var modified = req.body.modifiedAt || "0";
    var limit = req.body.limit || "10";
    var offset = req.body.offset || "0";
    var orderby = req.body.orderby || "CreatedAt";
    var orderdir = req.body.orderdir || "DESC";

	
    const readusersquery = {
        name: 'fetch-users',
        text: 'SELECT * FROM "UserInfo" WHERE AND "CreatedAt" > $1 AND "ModifiedAt" > $2 ORDER BY $3 '+orderdir+' DESC LIMIT $4 OFFSET $5 ',
        values: [created,modified,orderby,limit,offset]
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
