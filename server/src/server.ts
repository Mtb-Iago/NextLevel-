import express, { response, request, query } from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';
 
const app = express();
app.use(express.json()); // para receber formato json no bdy

app.use(cors());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));


//params = faz uma listagem de um identificador id ou outro

//request body = para criar informação

//request query = recebe uma busca; const search = String(request.query.search);
//const filterUserSearch = search ? users.filter(user => user.includes(search)) : users;

//usando knex para o bd com sqlite, notasse que pode usar a propria liguagem js
// SELECT * from tabelas WHERE name = "Iago"
//knex('users).where('name', 'Iago').select('*');




app.listen(3333);