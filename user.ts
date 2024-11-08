
type Tprofile = {
    id:number;
    name:string;
    address:string;
    codemelli?:number;  
}


type Tuser = {
id:number;
name:string;
mobile:string;
age:number;
profile:Tprofile[];
}

const user:Tuser = {
    id:1,
    age:33,
    mobile:"09360646981",
    name:"neda_rastegar",
   profile:[
    {
        id:1,
        name:"neda",
        codemelli:2280654466,
        address:"shiraz"
    }
   ]
}