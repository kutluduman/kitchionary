
import { useState } from 'react';

const useRegister = () => {
  const [registerShowing, setRegisterShowing] = useState(false);

  function toggleRegister() {
    if (registerShowing) {
      setRegisterShowing(false);
    } else {
      setRegisterShowing(true);
    }
  }

  return {
    registerShowing,
    // setRegisterShowing,
    toggleRegister,
  }
};


export default useRegister