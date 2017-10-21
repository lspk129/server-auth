### Server authentication with JWT

Packages included:
* Apollo server
* GraphQL
* Express
* Mongoose
* Passport

#### Instalation
----------

Instal dependencies
```javascript
yarn
```

Start local server with `nodemon`

```
yarn start
```

Run GraphiQL
```
http://localhost:3090/graphiql
```

#### Authorization
-----------

1. App is using MongoDB so make sure `mongod` is running in your terminal
2. Use Postman and GET request to root `/` route of your server. Expected responce should be `unauthorized`, because root route is protected.
3. * Crate new user by making POST request to `/signup` endpoint with body `{"email": "user@email.com", "password": "examplePassword"}`. Expected responce of successfully singed up user is JWT token, copy it.
	* If user was created before, make POST request to `/singin` endpoint with body of email and password. Expected respnse of successfuly provided email and password should be JWT, copy it.
4. Make GET request to root `/` endpoint providing HEADERS with authorization key and JWT token as a value, and you should get 'Hola!' message if correct token was provided.