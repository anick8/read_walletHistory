#readuser
 This Microservice contains APIs to :
 1)readuser: gets the username,UserUUID from the database given the Username
 2)readAllusers: gets all the usernames that match a given string from the start given the Username.
 
 
 URL Root: /readUser 
##Inputs:
 Headers : {'Content-type': 'application/json'}
 request JSON : {"usname":"Enetr the username"}
 
##Outputs:
  Output format: {'err':"error",'data':[{'username':"matchedusername"}],'message':"Status of the type of output"}

URL Root: /readAllUsers 
##Inputs:
 Headers : {'Content-type': 'application/json'}
 request JSON : {"usname":"Enetr the username"}
 
##Outputs:
  Output format: {'err':"error",'data':[{'username':"matchedusername1",'username':"matchedusername2"}],'message':"Status of the type of output"}
  

 
