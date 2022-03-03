const {count} =require("console")
const publisherModel= require("../models/publisherModel")

const createAuthor= async function (req, res) {
    let data = req.body
    let publisherCreated = await publisherModel.create(data)
    res.send({data: publisherCreated})
}

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

module.exports.createPublisher= createAuthor

// module.exports.getAuthorsData= getAuthorsData