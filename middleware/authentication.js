const passport = require('passport');
const passportJwt =  require('passport-jwt');
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;
const secret = "Secret_key";

passport.use(
    new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey:secret,
    },(jwtPayload, done) => {
        if(jwtPayload.user === 'admin'){
            const usuario = jwtPayload;
            done(null,jwtPayload)
        }else{
            return done(null,false ,{message:"El usuario no es valido"})
        }
    }
    ));