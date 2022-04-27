const express = require('express')
const router = express.Router()

router.get("/",(req,res)=>{
    const urls = [
        {origin:"www.chancorp.com/bluuweb1", shortURL:"kjasdjkas1"},
        {origin:"www.chancorp.com/bluuweb2", shortURL:"kjasdjkas2"},
        {origin:"www.chancorp.com/bluuweb3", shortURL:"kjasdjkas2"}
    ]
    res.render("home",{urls:urls})
})

module.exports = router