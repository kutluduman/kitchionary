
import { useState } from 'react';
// import  setRegisterShowing from './useRegister';

const useLogin = () => {
  const [loginShowing, setLoginShowing] = useState(false);

  

  function toggleLogin() {
    if (loginShowing) {
      setLoginShowing(false);
    
    } else {
      setLoginShowing(true);
    }
  }

  // function toggle () {
  //   if (loginShowing) {
  //     toggleLogin()
  //     setRegisterShowing(true)
  //   }
  // };

  return {
    loginShowing,
    toggleLogin
  }
};

export default useLogin