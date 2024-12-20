const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)       // copy paste this file to connect to database with mongoose 
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
