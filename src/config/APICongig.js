const url = "https://";
const user = "https://"

// const url = "http://172.16.6.52:3055";
// const user = "http://172.16.6.52:3055/api/v1/user"


const ApiConfig = {
  //auth
  signup: `${url}/api/v1/user/register`,
  verifyOTP: `${url}/api/v1/user/verify`,
  resendOTP: `${url}/api/v1/user/resend`,
  login: `${url}/api/v1/user/login`,
  forgotPassword: `${url}/api/v1/user/forgot`,
  resetPassword: `${url}/api/v1/user/resetPassword`,
  userNameExist:`${url}/api/v1/user/userNameExist`,
  
//Top Bar

 
};
export default ApiConfig;
