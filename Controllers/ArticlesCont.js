const validator = require("validator");
const Articulo= require("../Models/Articulo");

const test =(req,res)=>{
    return res.status(200).json({
        mensaje:"Aqui estoy desde test hi how are ya"
    });
}

const articlesapp =(req,res)=>{
    console.log("The endpoint probando is working");
    return res.status(200).json({
        
        curso:"javascript React",
        cursoII:"java Hibernate",
        cursoIII:"java Spring",
    });
};


const create =async (req,res)=>{
    let params = req.body;
    ///validator
    try{
        let validateTitle = !validator.isEmpty(params.title) 
                && validator.isLength(params.title,{min:5,max:20});
        
        let validateContent= !validator.isEmpty(params.content);

        if(!validateTitle || !validateContent){
            throw new Error("information is not validate!!");
        }
    }catch(error){
        return res.status(400).json({
            status:"error",
            mensaje:"data is missing to complete sending"
        }); 
    }    
    ///create object
    const articles = new Articulo(params);
    try{
        const savedArticles= await articles.save();
        res.status(200).json(
            {status:"success",
            article:savedArticles,
            message:"articles saved successFully"
            });
    }catch(err){
        res.status(500).json({
            status:"error",
            message:"Article could not be saved in data base"
        })
    }   
}

const getArticles = async (req,res) =>{
    try{
        let articleQuery= await Articulo.find({})
                        .sort({date:-1}).limit(1);
                    
        if(articleQuery){
        res.status(200).json(
            {status:"success",
            url_param:req.params.last,
            articleQuery
            });
        }else{
            return res.status(404).json({
                status:"error",
                mensaje:"articles can not be find"
            });
        }    
    }catch(err){
        res.status(500).json({
            status:"error",
            message:"Articles are not available in data base"
        })
    }      
}

///get just one Article
const one = async(req,res)=>{
  /*  try{

    }catch(){

    };
   */ 
}



module.exports ={
    test,articlesapp,create,getArticles,one
}