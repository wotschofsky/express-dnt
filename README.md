[![npm](https://img.shields.io/npm/v/express-dnt)](https://www.npmjs.com/package/express-dnt)

# express-dnt

A simple middleware that adds a convenience property for the users Do-Not-Track preference.

## Basic example

```javascript
   const express = require('express')
   const expressDnt = require('express-dnt')

   const app = express()

   app.use(expressDnt())

   app.get('/', (req, res) => {
      res.end(`Do not track enabled: ${req.dnt}`)
      // req.dnt is either true or false
   })
```

## Custom attribute name

```javascript
   const express = require('express')
   const expressDnt = require('express-dnt')

   const app = express()

   app.use(expressDnt('doNotTrack')) // Pass a string with the custom property name

   app.get('/', (req, res) => {
      res.end(`Do not track enabled: ${req.doNotTrack}`)
   })
```
