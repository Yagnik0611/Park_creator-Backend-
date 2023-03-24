// // importing router from express for api
// const router = require('express').Router()
// // importing model
// let HomePage = require('../models/homeModel.js')


// const jwt = require("jsonwebtoken");
// const { verifytoken } = require("./func");
// const multer = require("multer")

// const path = require('path');
// const fs = require('fs');
// const uuid = require('uuid')
// // Location where you want to store the profile Pic 
// const storage = multer.diskStorage({

//   destination:(req,file,callback)=>{
//     callback(null,'./images/')
//   },
  
//     filename: function(req, file, cb) {
//       const uniqueFileName = `${Date.now()}-${uuid.v4()}-${file.originalname}`;
//       cb(null, uniqueFileName);
//   }


// })

// const upload = multer({storage:storage})

// router.route('/').get((req,res)=>{
//     HomePage.find()
//     .then(HomePages => res.status(200).json(HomePages))
//     .catch(err => res.status(400).json('Error: ' + err))
// })

// //--------------
// router.get("/:id", verifytoken, (req, res) => {
//   try {
//     const clientId = req.params.id;

//     HomePage.findOne({ clientId: clientId }).then((HomePage) => {
//       if (HomePage) {
//         res.status(200).send(HomePage);
//       } else {
//         res.status(500).send({ message: "Can not find HomePage with given cLIENT id." });
//       }
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send({ message: err.message });
//   }
// });

// // delete HomePage

// // router.route("/:id").delete((req, res) => {
// //   const id = req.params.id;

// //   HomePage.findByIdAndDelete(id)
// //     .then(() => res.status(200).json("HomePage deleted"))
// //     .catch((error) => {
// //       res.status(500).send({ message: "Can not find HomePage with given id." });
// //     });
// // });
// // update HomePage with id

// router.route("/update/:id").put((req, res) => {
//   const clientId = req.params.id;
//   const newHomePage = req.body;

//   HomePage.findOne({ clientId: clientId })
//     .then((HomePage) => {
//       HomePage.updateOne(newHomePage)
//         .then(() => res.json("HomePage updated!"))
//         .catch((error) => {
//           const erro = handleErrors(error);
//           res.status(500).json({ erro });
//         });
//     })
//     .catch((error) => {
//       res.status(500).send({ message: "Can not find HomePage with given client id." });
//     });
// });


// //----------------------
// router.route('/add').post(upload.single("backgroundImg"),(req,res)=>{
//  const adm = req.body
//   const newHomePage= new  HomePage({
//     HomePage : adm
//   })

// newHomePage.save()
//   .then(() => res.json('HomePage added!'))
//   .catch(error => 
//    { const errors = handleErrors(error);
//     res.status(500).json({errors})});
// });
   

// /// all methods needed for HomePage
// // const handleErrors = (err) => {
// //     // screating json error for all the fields 
  
// //       let errors = { first_name: '', last_name: '' ,email: '' };
    
// //   // catching the unique error msg for emails
// //       if (err.code === 11000) {
// //         errors.email = 'This email is already registered';
// //         return errors;
// //       }
  
// //     else if (err.message.includes('HomePage validation failed')) {
// //       // looking for errors genereated from validation script 
  
// //       Object.values(err.errors).forEach(({ properties }) => {
        
// //         errors[properties.path] = properties.message;
       
// //       });
  
// //        } 
// //        else{
// //           // for any other errors we run into 
// //           errors={message:"Error while instering New HomePage"}
// //        }
// //     return errors;
    
// //   }
//   module.exports = router;