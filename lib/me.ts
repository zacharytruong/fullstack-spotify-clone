import { validateRoute } from './validate';

export default validateRoute((req, res, user) => {
  res.json(user);
});
