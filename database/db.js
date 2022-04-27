const mongoose = require('mongoose')

mongoose.connect(process.env.URI)
    .then(()=>console.log('conectado!!'))
    .catch(e=>console.log('error'+e))