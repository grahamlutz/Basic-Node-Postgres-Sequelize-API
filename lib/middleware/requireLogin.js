module.exports = (req, res, next) => {
  if (!req.user) {
    console.log('not logged in!')
  } else {
    next();
  }
};