'use strict';

module.exports=(req,res,next)=>{
    console.log(`method: ${req.method}`)
    console.log(`path: ${req.path}`)
    next()
}