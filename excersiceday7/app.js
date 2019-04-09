const express=require('express');
const Port=process.env.Port || 5000;
const mongo =require('mongodb')
const app=express();
const{ MongoClient }=mongo;
let collection;
const connectToMongo=async ()=>{
    const client= new MongoClient('mongodb://localhost:27017');
    await client.connect();
    const db=client.db('homework07');
    collection=db.collection('lectures')
}
connectToMongo();

app.use(express.json());

app.get('/grades',async (req,res)=>{
    try{
        const cursor=await collection.find({});
        const data =await cursor.toArray();
        res.send(data);
    }catch(e){
        console.log(e);
        res.send("erorot occured");
    }
})
app.get('/grades/:id',async (req,res)=>{
    try{
        const lecture=await collection.findOne({_id:
        mongo.ObjectID(req.params.id)});
        res.send(lecture);
    }catch(e){
        console.log(e);
        res.send("erorot occured");
    }
})
app.post('/grades',async (req,res)=>{
    const newItem=await collection.insert(req.body);
    res.send(newItem);
});

app.put('/grades/:id',async (req,res)=>{
    try{
        const updatedItem=await collection.updateOne({_id:
        mongo.ObjectID(req.params.id)},{$set:req.body});
        res.send(updatedItem);
    }catch(e){
        console.log(e);
        res.send("erorot occured");
    }
})

app.delete('/grades/:id',async (req,res)=>{
    try{
        const updatedItem=await collection.deleteOne({_id:
        mongo.ObjectID(req.params.id)});
        res.send(true);
    }catch(e){
        console.log(e);
        res.send("erorot occured");
    }
})

app.get('/search',async (req,res)=>{
    try{
        const searchresultCursor=await collection.find({name:
        {$regex: req.query.q}});
        const serchResult=await searchresultCursor.toArray();
        res.send(serchResult);
    }catch(e){
        console.log(e);
        res.send("erorot occured");
    }
})



app.listen(Port,()=>console.log(`lisetening on port ${Port}` ))