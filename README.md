### Server authentication with JWT

Packages included:
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

#### Authorization
-----------

1. Use Postman and GET request to root `localhost:3090` route of your server. Expected response should be `unauthorized`, because root route is protected.
2. * Create new user by making POST request to `localhost:3090/signup` endpoint with body `{"email": "user@email.com", "password": "examplePassword"}`. Expected response of successfully singed up user is JWT token, copy it.
	* If user was created before, make POST request to `localhost:3090/singin` endpoint with body of email and password. Expected respnse of successfuly provided email and password should be JWT, copy it.
3. Make GET request to root `localhost:3090` endpoint providing HEADERS with authorization key and JWT token as a value, and you should get 'Hola!' message if correct token was provided.