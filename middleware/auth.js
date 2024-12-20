module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {   // idk predefined big meaty chunk of code 
        return next()
      } else {
        res.redirect('/')
      }
    },
    ensureGuest: function (req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      } else {
        res.redirect('/dashboard');
      }
    },
  }
  