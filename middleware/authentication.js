const passport = require('passport');
const passportJwt =  require('passport-jwt');
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;
const secret = "Secret_key";

passport.use(
    new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey:secret,
    },(jwtPayload, done) => { //callback que se ejecuta al desencriptar
        const user = jwtPayload;
        done(null,user);
    }
    ));

const validToken = passport.authenticate("jwt",{session:false});

const adminToken = (req, res, next) => { //funcion de middleware para admin
    return passport.authenticate("jwt", { session: false }, 
    (err, user, info) => {    // callback de authenticate 
      if (err) {
        console.err(err);
        return next(err);
      }
  
      if (user.role === "Admin") {
        req.user = user;
        return next();
      }
  
      res.json({ error: "El usuario no es ADMIN" });
    })(req, res, next); //parametros que se pasan a la funcion admin token para que se utilicen en la callback 
  };

module.exports = {secret, validToken,adminToken}