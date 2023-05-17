/**
 * The Server Can be configured and created here...
 * 
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const data      = require('./data');
const port      = 3035;

const express = require('express')
var cors = require('cors')

const app = express()

app.use(cors())

app.get('/cart', function (req, res) {
  const { name } = req.query

  console.log('name', name)
  
  const filterArray = data.filter( item =>  {
    const itemName = item.name.toLowerCase()
    console.log('ite',itemName)
    return itemName.includes(name)
  })

  res.json(filterArray)
})

app.listen(port)



