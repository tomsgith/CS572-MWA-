const {Subject}=require('rxjs');
const os = require('os');

const arr=os.cpus();
const numberOfCpu=arr.length;
const numberOfRaminGB=os.totalmem()/1024/1024/1024;



const observable$=new Subject();
function checkSystem(){
    observable$.next("started checkng");

if(numberOfRaminGB<4){
    observable$.next("This app needs at least 4 GB of RAM");
}
else if(numberOfCpu<10){
    observable$.next("Processor is not supported");
}
else{
    observable$.next("ended checking");
}
       
}
observable$.subscribe(data=>console.log(data));
checkSystem();

