// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array







// create a bookSchema with bookName,authorName,category and year
// create same 2 api's for book i.e:1 api to create a new book and another api get the kist of all books


const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {

bookName: String,
    authorName: String,
        type: String,
    
    year: Number
},{timestamps:true});
   
   
module.exports = mongoose.model('User', bookSchema) //users















// for example in string

 // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]