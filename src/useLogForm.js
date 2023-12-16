import { useState } from "react";

function useLogForm(initailInput) {
  const [value, setInputValue] = useState(initailInput);

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const resetInput = () => {
    setInputValue(initailInput);
  };
  return {
    value,
    onChange: handleChangeInput,
    reset: resetInput,
  };
}

export default useLogForm;
