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

mongoose.set('useFindAndModify', false)
// https://www.mongodb.com/cloud/atlas;
```