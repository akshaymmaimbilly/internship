const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://akshaymmaimbilly:9074538276@cluster0.sjt1ysd.mongodb.net/?retryWrites=true&w=majority")

// schema creation
let Schema = mongoose.Schema;

const StudentSchema = new Schema({
    sname:String,
    sgrade:Number
});

var studentmodel=mongoose.model("students",StudentSchema);

module.exports=studentmodel;