# front

## Project setup
```
npm install
```

### Axios setup (optional)
```
Go to "src/services/Api.js" and modify baseUrl. 
By default is "http://localhost:8000/api"
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


## Validations

### Phone Number
For validate phone number use simple regex
```javascript
    var regex = "/^\+?\d{4,12}(-)?\d+?$/";
```
1. _examples success:_
* 0123-4567896
* 1234567890
* +1234567890
* +1234567890 <Enter>
2. _example fail:_
* (0123)4567890
