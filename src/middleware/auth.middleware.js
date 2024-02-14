// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
// daf5f7a5f11db2699792b8cc545b35c622c0f3442a40b388129abe1117d7948a
JWT_SECRET = daf5f7a5f11db2699792b8cc545b35c622c0f3442a40b388129abe1117d7948a;

const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Authentification Failed"
    });
  }
};
