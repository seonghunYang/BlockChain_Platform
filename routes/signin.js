module.exports = (app, passport) => {
  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/authLayout?title=login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  app.get('/signout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};