const server=require('http').createServer();
const url=require('url');
const {fork}=require('child_process');

server.on('request',(req,res)=>{

    const myUrl=url.parse(req.url,true);
    const filepath=myUrl.query.url;
    if(filepath){
        const reader=fork('fReader.js');
        reader.send(filepath);
        reader.on('message',msg=>res.end(msg));


    }
}).listen(4000);
console.log("Server is listening to port 4000...");
