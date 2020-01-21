module.exports = loggedin = (req, res, next) => {
    //console.log("In middleware");
    //console.log(req.isAuthenticated());
    if (req.isAuthenticated())
    {
        next();
    }
    else
    {
        res.redirect('/jsonfail');    
    }
}