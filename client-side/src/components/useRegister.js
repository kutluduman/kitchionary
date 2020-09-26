
import { useState } from 'react';

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


export default useRegister