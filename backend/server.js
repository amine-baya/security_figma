
import express from 'express';
import path from 'path'
import morgan from 'morgan'
import dotenv from 'dotenv';
import sendEmail from './routes/sendEmail.js'

dotenv.config()

const app = express()

app.use(morgan('dev'))

app.use(express.json())


app.use('/api/email', sendEmail)

const  __dirname = path.resolve()

console.log(path.resolve(), "heloo");

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....')
    })
  }

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server runing in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`))