/**
 * Para criar: name, email, password
 */

 //Interface: forma de definir tipagem conjunto de dados (principalmente objetos no javascript)
 interface TechObject {
   title: string;
   experience: number;
 }

 interface CreateUserData {
   name?: string;
   email: string;
   password: string;
   techs: Array<string | TechObject>; //formato de variável(string e number) se só string usar: techs: string[]
 }

 export default function createUser({ name, email, password }: CreateUserData) {
   const user = {
     name,
     email,
     password,
   }

   return user;
 }