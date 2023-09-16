const logg =(req,res,next )=>{
    const method = req.method;
    const time = new Date().getDate();
     next();
     };
     module.exports =logg;

