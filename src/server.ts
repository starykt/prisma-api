import Express from 'express';
import UserController from './controllers/UserController';
import PostController from './controllers/PostController';

const app = Express();
app.use(Express.json());

const PORT = 8000;

app.get('/', (request, response) => {
  return response.send({ message: 'Hello'});
});

app.post('/createUser', UserController.createUser);
app.get('/listPost/:id', PostController.listPost);
app.post('/createPost', PostController.createPost);

app.listen(PORT, () => {
  console.log('Server started!')
});