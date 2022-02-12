const  { body, validationResult} = require('express-validator');



exports.RegisterValidation =[

    body ("email", 'not a valid email' ).isEmail(),
    body ('password', 'should be at least 6 caracters' ).isLength({min:6})
    
    ]
    
    
    
     exports.Validator= (req,res,next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
    next()
    }
    