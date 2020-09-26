
import { useState } from 'react';

const useLogin = () => {
  const [loginShowing, setLoginShowing] = useState(false);

  function toggleLogin() {
    setLoginShowing(!loginShowing);
  }

  return {
    loginShowing,
    toggleLogin,
  }
};


const useRegister = () => {
  const [registerShowing, setRegisterShowing] = useState(false);

  function toggleRegister() {
    setRegisterShowing(!registerShowing);
  }

  return {
    registerShowing,
    toggleRegister,
  }
};


export default useLogin