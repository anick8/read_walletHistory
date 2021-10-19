# Hashx User Read Microservice
Microservice to implement User Table Read operations.

Run using -

npm install

npm start (OR) node index.js

# Change Guide
Make changes

git add .

git commit -m "Message"

git push hashx read_user_API

# Routes

## /readUser

Reads a User : 
Request Body -   
 - req.body.email

 
 Response Body -  
 res.data  =  "UserUUID","Email"

Query -  
'select "UserUUID","Email" from "UserInfo" where "Email" = $1' 


## /readAllUsers

Request Body -
    req.body.UserUUID : Unique Identifier  
    req.body.email : email address of User  
    req.body.modifiedAt :  LastModified , ignore UserUUID with ModifiedAt < parameter, Default 0  
    req.body.createdAt :  CreatedAt , ignore UserUUID with createdAt < parameter, Default 0  
    req.body.limit : Number of rows returned , Default 10  
    req.body.offset : Offset of rows returned, Default 0  
    req.body.orderby : Column to OrderBy, Default "ModifiedAt";  
    req.body.orderdir : Order Direction ASC/DESC, Default "DESC";  

Response Body -  
 res.data  =  `VoteUUID`  `VoteDescription`  `VoteDescriptorURL`  `ModifiedAt`  `VoteAuthorUUID`  `CreatedAt` 


Query -   
'SELECT * FROM "UserInfo" WHERE "UserUUID" = $1 AND "CreatedAt" > $2 AND "ModifiedAt" > $3 OR "Email" like $4 ORDER BY $5 DESC LIMIT $6 OFFSET $7 '

# Response Format

[err,data,msg]

 - err : Error message from SQL try block
 - data : Data returned by SQL query
 - msg : Custom message defined in API
