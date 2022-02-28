`use strict`;

module.exports= (error,req,res,next)=>{
    res.status(505).json({code:505, message:"Server error"})
}