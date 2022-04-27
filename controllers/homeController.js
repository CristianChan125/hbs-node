const Url = require('../models/Url')
const leerUrls = async(req,res)=>{
    try {
        const urls= await Url.find().lean()
        res.render("home",{urls:urls})
    } catch (error) {
        console.log(error)
        res.send('algo fallo..')
    }
}

const agregarUrl=async (req,res) =>{
    const {origin} = req.body
    try {
        const url = new Url({origin:origin})
        await url.save()
        res.redirect('/')
    } catch (error) {
        console.log(error)
        res.send('error algo fallo')
    }
}

const eliminarUrl= async(req,res)=>{
    const {id} = req.params
    try {
        await Url.findOneAndDelete(id)
        res.redirect('/');
    } catch (error) {
        console.log(error)
        res.send('error algo fallo')
    }
}

const editarUrlForm = async(req,res)=>{
    const {id} = req.params
    try {
        const url= await Url.findById(id).lean()
        res.render('home',{url})
    } catch (erro) {
        console.log(error)
        res.send('error algo fallo')
    }
}

const editarUrl = async(req,res)=>{
    const {id} = req.params
    const {origin} = req.body
    try {
        await Url.findOneAndUpdate(id,{origin})
        res.redirect('/')
    } catch (error) {
        console.log(error)
        res.send('error algo fallo')
    }
}
const redireccionamiento = async(req,res)=>{
    const {shortURL} = req.params
    try {
        const urlDB = await Url.findOne({shortURL:shortURL})
        res.redirect(urlDB.origin)
    } catch (error) {
        
    }
}

module.exports={
    leerUrls,
    agregarUrl,
    eliminarUrl,
    editarUrlForm,
    editarUrl,
    redireccionamiento
}