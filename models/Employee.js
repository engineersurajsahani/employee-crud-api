const mongoose=require('mongoose');

const employeeSchema={
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["Full Stack Developer","Front End Developer","Back End Developer","Database Administrator"],
        required:true
    },
    salary:{
        type:String,
        required:true
    }
}

const Employee=new mongoose.model('Employee',employeeSchema);
module.exports=Employee;