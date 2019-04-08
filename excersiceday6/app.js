const express=require ('express');
const grades=require('./gradedb');
var morgan = require('morgan')
const cors=require('cors');
const app=express();
const Port=process.env.POrt || 5000;

// fails if json is invalid
app.use(express.json());
app.use(morgan('tiny'))
app.use(cors());

app.get('/grades',(req,res)=>{
    res.send(grades);
    console.log(grades)
    res.end();
})
app.post('/grades',(req,res)=>{
    const bo=req.body;
    grades.push(bo);  
    res.send(bo)
})
app.get('/grades/:id',(req,res)=>{
    const found =grades.some(fr=>fr.id===parseInt(req.params.id)) ;
   if(found){

    res.send(grades.filter(fr=>fr.id===parseInt(req.params.id))); 
   }
   else{
       res.status(400).send({msg:`student wit id ${req.param.id} not found`});
   }
   
});

app.put('/grades/:id',(req,res)=>{
    const found =grades.some(fr=>fr.id===parseInt(req.params.id)) ;
   if(found){
   const updMember=req.body;
   grades.forEach(p=>{
       if(p.id===parseInt(req.params.id)){
           p.name=updMember.name ? updMember.name:p.name;
           p.course=updMember.course ? updMember.course:p.course;
           p.grade=updMember.grade ? updMember.grade:p.grade;
       }
   }); 
    res.send(grades.filter(fr=>fr.id===parseInt(req.params.id))); 
   }
   else{
       res.status(400).send({msg:`student wit id ${req.params.id} not found`});
   }
   
});

app.delete('/grades/:id',(req,res)=>{
    const found =grades.some(fr=>fr.id===parseInt(req.params.id)) ;
   if(found){
    res.send({
        msg:"member deleted", grades:grades.filter(fr=>fr.id!==parseInt(req.params.id))});
         
   }
   else{
       res.status(400).send({msg:`student wit id ${req.params.id} not found`});
   }
   
});

app.listen(Port,()=>console.log("lsitening on port 5000"))