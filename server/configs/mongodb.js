import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log('Connected Successfully !');
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/bg-remover`);
}

export default connectDB;