const  {MongoClient, ServerApiVersion } = require('mongodb')
const uri = "mongodb+srv://estiven:didier321@cluster0.mf8ucsz.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});


module.exports = client 