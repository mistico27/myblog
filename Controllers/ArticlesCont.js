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
        });
    }      
}

///get just one Article
const findOne = async(req,res)=>{
    let id = req.params.id;

    try{
       
        Articulo.findById(id,(articulo,error)   =>{
                if(error|| !articulo){
                    res.status(500).json({
                        status:"error",
                        message:"Article was not found" 
                     });
                }

            return res.status(200).json({
                status:"success",
                articulo,
            })    


        });

    }catch(error){
        res.status(500).json({
           status:"error",
           message:"Article was not found" 
        });
    };
   
}


const deleteArticle= async (req,res) =>{

 try{
    let articleTofind = req.params.id;
    const myArticle = Articulo.findById(articleTofind);
    await myArticle.deleteOne();
    return res.status(200).json({
        status:"success",
        message:"article was deleted successfully"
    })    
 }catch(error){
    res.status(400).json({
        status:"error",
        message:"Article was not found" 
     });
 }
};


const updateArticle = async(req,res)=>{
    try {
        const myUpdateArticle = await Articulo.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updateArticle){
            return res.status(400).json({
                status:"error",
                message:"Article was not found" 
            });
        }
        
        return res.status(200).json({
            status:"success",
            myUpdateArticle,
            message:"article was updated successfully",
        });    
      
    }catch (err) {
        res.status(500).json({
            status:"error",
            message:"Error in the system please contact IT support..." 
        });
      }

}






module.exports ={
    test,articlesapp,create,getArticles,findOne,deleteArticle,updateArticle
}