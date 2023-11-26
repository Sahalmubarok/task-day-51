const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello semuanya!!')
})

app.get('/about', (req, res) => {
    res.send('Hello my name is sahal!')
})

app.get('/testimonial', (req, res) => {
    res.json([
        {
            Author: "Sahal",
            Content: "Kokoh Spritual, Mapan Intelektual",
            Image: "https://images.pexels.com/photos/17681915/pexels-photo-17681915/free-photo-of-pemandangan-pegunungan-alam-air.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            Rating: 5
        },
        {
            Author: "Dawn Klark",
            Content: "Tidak ada kata terlambat untuk mulai menciptakan kehidupan yg kamu inginkan",
            Image: "https://images.pexels.com/photos/5215886/pexels-photo-5215886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            Rating: 3
        },
    
        {
            Author: "Albert Einstein",
            Content: "Jauhi orang-orang negatif, mereka punya masalah untuk setiap solusi ",
            Image: "https://images.pexels.com/photos/1453076/pexels-photo-1453076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            Rating: 5
        }
    ]
        
    )
})

app.listen(port, () => {
    console.log(`server berjalan di port ${port}`)
})