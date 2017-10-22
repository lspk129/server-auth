import { signin, signup } from './authentication';
import passportService from './passport';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

export default (app) => {
  app.get('/', requireAuth, function(req, res) {
    res.send({ message: 'Hola!' });
  });
  app.post('/signin', requireSignin, signin);
  app.post('/signup', signup);
}
