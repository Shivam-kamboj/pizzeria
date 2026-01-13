const mongoose=require('mongoose');
const app=require('./app');
const PORT=5000;
 const mongoURL="mongodb://localhost:27017/pizzaDB";
mongoose.connect(mongoURL).then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
})
}).catch(err=>{
    console.log("Failed to build connection with MonogoDB");
})





