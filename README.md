# JJ VINYLS
## Note to Self..
Anytime you are creating code that will modify the database think from the server side first. A good application is lite and most of the work should be done by the server.


## Server Status System
```
* "executed: false" --> Unexpected Error
* "status: false" --> Expected Error
``` 

## When Designing Server
* Routes check params if they are ascii ( ex. validator.isAscii(param) )
* Collection functions check params if they are specific type ( Ex. validator.isEmail(param) )


## TODO List For Deployment
* Set up base URL in ENV
* Set up secret in ENV
* Disable creating an admin account
* MongoDB password change
* Prepare mongoDB for more data
* Uncomment Expiration on tokens
* Set encryption key for secrey key in env
