# MERN  
### step by step journy  
step 1
```
client and server two folder  
$$client
npx create-react-app ./
$$ server 
index.js>npm init -y>npm install body-parser cors express nodemon 
type module
start nodemon index.js

```
step 2  
```
$$client
set up src folder then go server
```

step 3 
```
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();

app.use(bodyParser.json({limit: "30mb", extended : true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended : true}))
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://hasanullah123:hasanullah123@cluster0.gtyxm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT, ()=> console.log(`server running in port:${PORT}`)))
.catch((error)=> console.log(error.message))

// useFindAndModify it's i can't understand
mongoose.set('useFindAndModify', false)
// https://www.mongodb.com/cloud/atlas;
```
step 4  
```
create routes folder and make express.Route() >
then import in index.js then write middle were >
make controller folder and export it then emport it from routes >
then create model folder  >
and write there mongoose schema>
then make controler logic access to  module logic 
then test it > then go to client, there u have more work to create post req from client 


```
step 5 
```
install @material icon ui
then import container, appnab, grid, grow form @material icon at app.js

appnab by material ui
then create component form and post then import it to app.js
then impotr material style 
then set material style for every component apply that 
then make api that make connect fron-end and backend
```
step 6
```
make action and reducer and api folder ,,fold thes at root file index.js and provide store to app.js then work at action folder to get requies from db  

then work form folder to meke post req
then make post api at api folder then make createPost at action folder then import  dispatch at form then import createPost from '../../actions/Posts.js and put in const handleSubmit=(e)=>{
        e.preventDefault();

        dispatch(createPost(postData))
            }
          here  postData is useState's initial value which will be chanege by handle submit
          then go to reduce folder and set action CREATE [...posts, action.payload] ,,Ya HUU! 
          now i can send my data from client to database ,,this is a historycal day!

```
