const express=require('express');
const encryptor=require('simple-encryptor');
const Port=process.env.Port || 5000;
const mongo =require('mongodb')
const app=express();
const{ MongoClient }=mongo;
let collection;
const  getmessage=async ()=>{
    const client= new MongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01');
    await client.connect();
    const db=client.db('homework01');
    collection=db.collection('data');

    const result=await collection.findOne({},{ key:1 ,message:1,_id:0});

    const decrypt=encryptor(result.key);
    return decrypt.decrypt(result.message);

}
getmessage().catch(console.log).then(console.log);