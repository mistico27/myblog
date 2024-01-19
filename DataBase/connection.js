const mongoose = require('mongoose');

const connection = async()=>{
    const databaseURL='mongodb+srv://crisfris27:EeiM4LQYg5BTka1q@cluster0.iwmzlp8.mongodb.net/my_blog'
    mongoose.connect(databaseURL)
    .then(() => {
    console.log("estamos conectados a mongo jajaj!!!!");
    })
    .catch((err) => {
    console.log("We have an error, we could not connected to my_blog database", err);
    });
    
}

///exports
module.exports= {
    connection  
};