import mongoose from 'mongoose';


const connectToDataBase = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL);
        if(connection) console.log(`Connected to Database : ${connection.host}`);
    }
    catch(e){
        console.log("Error connecting to Database ->",e.message);
    }
}

export default connectToDataBase;