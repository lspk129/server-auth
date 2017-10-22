### Apollo server with express and GraphQL

Packages included:
* Apollo-server-express
* GrapghQL
* Graphql-tools

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

#### Usage
-----------

To fetch data go to `localhost:4000/graphiql` and enter query to graphiql:
```javascript
{
  channels {
    id
    name
  }
}
```

Data lives in `resolvers.js` file.