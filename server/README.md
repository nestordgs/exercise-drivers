# Server

## Project setup
```
npm install
```

### Config braintree

Copy config-env.js file and set your braintree keys.


### Database
Go to config.json and set your DB values for development, test and production.

# IMPORTANT
If you do not have sequelize-cli installed in your system, please read [Sequelize-cli documentation](https://github.com/sequelize/cli)

## Scripts


### Compiles and hot-reloads for development
```
npm run start
```

### Compiles 
```
npm run build
npm run serve
```


## Validations

### Credit Card
Here you can get many [Valid card numbers](https://developers.braintreepayments.com/guides/credit-cards/testing-go-live/node)

### Zip Code
For validate zip code use regex, based in US zip codes
```javascript
    var regex = "/(^\d{5}$)|(^\d{5}-\d{4}$)/";
```
