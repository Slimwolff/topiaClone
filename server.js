import express from 
'express'
import Noise from './src/noise.js'

let n = Noise(33,11, {
    amplitude: 1.1,
    frequency: 0.25,
    octaves: 3,
    persistence: 0.8
})

const app = express()

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req,res) => {
    res.render('index', { noise: n })
})

app.listen(5000, () => {
    console.log(`Server Running on ${5000} port.`);
    
})