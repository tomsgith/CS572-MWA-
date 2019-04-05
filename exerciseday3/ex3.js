const http=require('http');
const fs=require('fs');
const path=require('path');



http.createServer(function(req,res){
    fs.readFile(path.join(__dirname,'v.mp4'),function(err,data){
       if(err) throw err;
        res.end(data);
   })  
       
   }).listen(6000,()=>console.log('listening to 4000'));
 

http.createServer(function(req,res){
     const html= fs.readFileSync(path.join(__dirname,'v.mp4'));
     res.end(html);  
   }).listen(4000,()=>console.log('listening to 4000'));

   http.createServer(function(req,res){
    fs.createReadStream(__dirname + '/v.mp4').pipe(res);
  }).listen(2000,()=>console.log('listening to 4000'));