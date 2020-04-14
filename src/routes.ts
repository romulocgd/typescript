import { Request, Response } from 'express';
import createUser from './services/CreateUser'

//string, number, boolean, object, Array
//Interface: forma de definir tipagem conjunto de dados (principalmente objetos no javascript)

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email:'romulocgd@hotmail.com',
    password: '123456',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      { title: 'Javascript', experience: 100 },
    ],
  });

  return response.json({ messege: 'Hello World' });
}