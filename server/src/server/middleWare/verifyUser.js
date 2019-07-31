const { User } = require('../models/index');
const bcrypt = require('bcrypt');

module.exports.verify = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body,"USER step1 ");
  try {
    console.log(user,"USER step1 ");
    const user = await User.findOne({
      where: { email: email },
      //attributes: { exclude: ['secretColumn'] }
    });

    if (user===null) {
      console.log(req.body,'User not founds' );
      next({ status: 404, message: 'User not founds' });
    }
    req.user = user.dataValues;

    const match = await bcrypt.compare(password, user.dataValues.password);
    if (match) {console.log(req.body,'match',match );
      next();
    } else {
      console.log(req.body,'err1' );
      next({ status: 404, message: 'User not founds' });

    }
  } catch (e) {
    console.log(req.body,'err2' );
    next({ status: 404, message: 'User not founds' });
  }
};

