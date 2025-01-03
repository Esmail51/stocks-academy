import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Cookies from 'js-cookie';
import googleLogo from '../../assets/images/googleLogo.png';
import { auth } from '../../firebase/firebaseConfig';
// import FacebookLogin from '@greatsumini/react-facebook-login';

interface LoginMainProps {
  show: boolean;
  onClose: () => void;
}

const LoginMain = ({ show, onClose }: LoginMainProps) => {

  const handleGoogleLogin = async () => {
    console.log('auth', auth);
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/calendar');
    try {
      const result: any = await signInWithPopup(auth, provider);
      Cookies.set('accessToken', result._tokenResponse.oauthAccessToken, { expires: 1 });
      Cookies.set('refreshToken', result.user.stsTokenManager.refreshToken, { expires: 1 });
      Cookies.set('userDetails', JSON.stringify(result.user.reloadUserInfo), { expires: 1 });
      onClose();
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  if (!show) {
    return null;
  }

  // const handleFacebookCallback = (response: any) => {
  //   if (response?.status === "unknown") {
  //       console.error('Sorry!', 'Something went wrong with facebook Login.');
  //    return;
  //   }
  //   console.log(response);
      // console will print following object for you.
    //     {
    //       "name": "Syed M Ahmad",
    //       "email": "ssgcommando90@yahoo.com",
    //       "picture": {
    //           "data": {
    //               "height": 50,
    //               "is_silhouette": false,
    //               "url": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=7138203302951151&height=50&width=50&ext=1714730459&hash=AfplSQ-UxV9LeHd5wYnaKbeKEIfUjMN-pHFGZJaWwC-00g",
    //               "width": 50
    //           }
    //       },
    //       "id": "7138203302951151",
    //       "userID": "7138203302951151",
    //       "expiresIn": 7142,
    //       "accessToken": "EAANdCvUejTUBO3C5uZCp0n6i9H31bCdW6bZBUcOET2aTbWlZCJA7kQoQ1jxDCsnFctxZBAQPl2kSUSqb4N6KDLM8wROXn4fZCBj1Pmgq5peKkmPv7YJWHKXLb9mOIwcBbJJGj5EaXwLURktOGSv7HeNsiGxZBPBr1jewzZAL7FxbITljSsBq6LYnhKO6xT9D5FbFZB1JWdjii63xAeU36wZDZD",
    //       "signedRequest": "r3tHehW5aounQcMzalAtmiHR_lCmRHy0GSmrlD4w3zM.eyJ1c2VyX2lkIjoiNzEzODIwMzMwMjk1MTE1MSIsImNvZGUiOiJBUURUaEItZ3Z6RjViN09yV3VyM2tOai1FdDNQM1NGSHpheWVsMEYxSXc1NTNlTHBoZUs3M2RtTENFbVZTVjgySEZlUUFCQ0dPR19zME94RjU4LS14MFYxUWZIYkhCdDFTVl9FNG1scnh6Y2Z5RTVFNVozUy03SllRWUI2MEh1bW15b19mN3FKc3pLZENSbWFBbkE2c3JXenBCYnRfLXZIVTZjRTNYSjZnN19Db2xXNjk0Z1JDODd5eVVjT2R4NEszMHY4LXdrVlpVQWNvMXBkZGR1eTVqbFN4Yld0RkhGVlNpS282OGZxc09YdndYSXlDR0NOTjJrZEhDUDJSZElkT3VmSmRhbGs0dEo1TTRFUU9nWXJ3QllkeVlyUlY1ZlRuS3RvdGJyMF9ROHpQT21PTzQ2eXNBZmtJdGdjblFjOG5VaHQ5U0RMRlAzRVBhS0Q0dV9mY0YwbyIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNzEyMTM4NDU4fQ",
    //       "graphDomain": "facebook",
    //       "data_access_expiration_time": 1719914458
    //   }
  //  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      {/* Modal Content */}
      <div className="bg-white rounded-lg shadow-lg p-4 md:p-5 max-w-[350px] w-full relative mx-5">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-3xl font-semibold text-start">
          Sign In
        </h2>
        <div className="flex justify-between items-center mb-8">
           Welcome Back!
          
        </div>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full rounded-full py-2 px-2 bg-googleBlue-500 text-white hover:bg-blue-300 hover:text-black"
        >
          <div className="flex items-center">
          <img
            src={googleLogo}
            alt="Google Logo"
            className="h-6 w-6 mr-2 bg-white rounded-full "
          />
          <span>Sign in with Google</span>
          </div>
        </button>
        {/* <FacebookLogin
          appId="579287064855317" // Replace with your actual app ID
          onSuccess={handleFacebookCallback}
          onFail={(error) => console.error('Facebook Login Failed:', error)}
          onProfileSuccess={(response) => console.log('Profile:', response)}
          className="flex items-center justify-center w-full rounded-full py-2 px-2 mt-4 bg-googleBlue-500 text-white hover:bg-blue-300 hover:text-black"
          render={({ onClick }) => (
            <button
              onClick={onClick}
              className="flex items-center justify-center w-full rounded-full py-2 px-2 mt-4 bg-googleBlue-500 text-white hover:bg-blue-300 hover:text-black"
            >
              <div className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook Logo"
                className="h-6 w-6 mr-2 border-2 border-white bg-white rounded-full"
              />
              <span>Sign in with Facebook</span>
              </div>
            </button>
          )}
        /> */}
      </div>
    </div>
  );
};

export default LoginMain;
