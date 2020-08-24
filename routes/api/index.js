const router = require("express").Router();
const shopprController = require("../../controllers/controller");
const passport = require("passport");
const upload = require("../../config/upload");
// var multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })


router.post("/login", passport.authenticate("local"), function(req, res) {


  res.json(req.user);

});


router.get("/logout", function(req, res) {
  console.log("LOGGING OUT...");
  req.logout();
  res.end("Logged out");
});

router.route("/signup")

    .get(shopprController.getHello)
    .post(shopprController.create);

router.route("/extractUrl") 
    .post(shopprController.extractFromUrl);

router.route("/searchforfriend")
    .post(shopprController.findFriend);

router.route("/addfriend")
    .post(shopprController.addFriend);




module.exports = router;

