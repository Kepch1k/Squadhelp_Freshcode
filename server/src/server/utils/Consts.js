const SECRETS_ACCESS = 'secretForAccess';
const SECRETS_REFRESH = 'secretForRefresh';
const LIVE_TIME_ACCESS =  '30000';//'30m';
const LIVE_TIME_REFRESH ='300000'; //'15d';
const ALGORITHM = 'HS256';

const OTHER_FIELDS=['id','password','createdAt','updatedAt','isBaned'];

//,'role'

module.exports = {
  SECRETS_ACCESS,
  SECRETS_REFRESH,
  LIVE_TIME_ACCESS,
  LIVE_TIME_REFRESH,
  ALGORITHM,
  OTHER_FIELDS
};
