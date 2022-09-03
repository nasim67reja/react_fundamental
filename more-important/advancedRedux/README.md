# Advanced Redux

- Understand the basic redux project
- now we will store the cart data into our database so we need to sent a http

For doing this , ne have to restriced ourselves with some rules

- first, Reducers must be pur,side-effect free, synchronous functions
  that's mean we can't sent http request inside our reducer function

- so we have two place for execute our async code
  first one is our Components(e.g.useEffect())
  second, Inside the action creators
