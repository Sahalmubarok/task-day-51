const express = require('express')
const path = require('path')
const app = express()
const port = 5000

app.set("view engine", "hbs")
app.set("views", path.join(__dirname, 'src/views'))

app.use("/assets", express.static('src/assets'))
app.use(express.urlencoded({extended: false}))

app.get('/', home)
app.get('/contact', contact)
app.get('/addproject', addprojectview)
app.post('/addproject', addproject)
app.get('/myprojectdetail/:id', myprojectdetail)

function home(req, res){
    res.render('bootstrap-index')
}

function contact(req, res){
    res.render('bootstrap-contact')
}

function addprojectview(req, res){
    res.render('bootstrap-addproject')
}

function addproject(req, res){
    const inputProject = req.body.inputProject
    const inputDesc = req.body.inputDesc

    console.log("namaProject :", inputProject)
    console.log("Description :", inputDesc)
    res.redirect('addproject')
}

function myprojectdetail(req, res){
    const { id } = req.params //destructuring
    const project = "LMS HIGH SCHOOL"
    const desc = "Pembuatan aplikasi LMS HIGH SCHOOL "

    console.log("Id nya adalah", id)

    const dataMP = {
        id,
        project,
        desc
    }

    res.render('myproject-detail', { dataMP })
}

app.listen(port, () => {
    console.log(`server berjalan di port ${port}`)
})