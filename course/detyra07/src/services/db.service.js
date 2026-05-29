import { MongoClient, ServerApiVersion } from 'mongodb';
import  mongoose from 'mongoose';
const uri = "mongodb+srv://root:9X7yvX2g1WFVbaMp@course.rkuenmf.mongodb.net/test?appName=course";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function connect() {
    try {
        await mongoose.connect(uri); 
        console.log("connected")
    } catch(e) {
        console.log(e.message);
    }
}


export default connect;