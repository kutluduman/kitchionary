
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

export default useLogin