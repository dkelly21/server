const router = require("express").Router(); // crestes router 

router.get("/test", (req, res) => { // sets up end points 
    res.send("Router test");
});

module.exports = router; //exports it to index.js  