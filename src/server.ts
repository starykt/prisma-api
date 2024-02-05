import Express from 'express';

const app = Express();
app.use(Express.json());

const PORT = 8000;

app.get('/', (request, response) => {
  return response.send({ message: 'Hello'});
});

app.listen(PORT, () => {
  console.log('Server started!')
});