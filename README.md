# SCRATCHING NEST

## Walkthrough
Make sure youre using the correct dependency versions. For further info check the _package.json_

### Steps
* Install Deps
* Set up TypeScript compiler settings. (tsconfig.json) =>  make sure to check if _experimentalDecorators and emitDecoratorMetadata are set to true_
* Create a Nest Module and Controller
* Start the App! uiuiui

### A little explanation 
* Nestjs/Common
_contains vast majority of funcitons, classes, etc, that we need from Nest_

* Platform-Express
_Nest Express, use for handling HTTP requests, you know what I'm talking about_

* Reflect-metadata
_Helps make decorators work_

* TypeScript
_Nest applications are mostly written in TS_

### Nest Arch 
Nest is divided in 8 parts. 
_Modules and Cotrollers are the NEST Core, You must have these two lads to run your code_
* Controllers
_Handles incoming requests_
* Services 
_Handles data access and business logic_
* Modules
_Groups together code_
* Pipes
_Validates incoming data_
* Filters
_Handles errors that occur during request handling_
* Guards
_Handles authentication_
* Interceptors
_Ad extra logic to incoming requests or outgoing responses_
* Repositories 
_Handles data stored in a DB_
