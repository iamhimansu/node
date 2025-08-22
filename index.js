//import express from express; 
const express = require('express'); // imports the class defination
const app = express(); // creates the object

app.use((req, res, next) => {
  console.log('next');
  next();
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  return res.send(`<pre>${err.stack}</pre>`);
});


app.get('/', (req, res) => {
  console.log('hello world');
  // const queryParams = req.query;
  // const {klop} = queryParams;
  // if (klop) {
  //     res.set('Refresh', 1);
  // }

  // const pathVariable = req.params;

  // console.log(pathVariable);
  return res.status(200).send('<h2>hello world</h1>');
});


app.get('/err', (req, res) => {
  throw new Error('test error');
});


app.get('/users', (req, res) => {
  console.log('in users module');
  res.send('in users module');
});

// app.use((req, res, next) => {
//   console.log(req.url);
//   return res.send(req.url);
// });


app.listen(8080, () => {
  console.log('running...');
});