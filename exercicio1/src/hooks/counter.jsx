import { useEffect, useState } from "react";

const useCounter = (init) => {
  const [value, setValue] = useState(init);
  useEffect(() => {
    setValue(init);
  }, [init]);

  const add = () => {
    setValue(value + 1);
  };
  const substract = () => {
    setValue(value - 1);
  };
  const message = `O valor actual do contador é ${value}`;
  if (isNaN(value) || value < 0) {
    setValue(0);
  }

  if (0 < value) {
    return {
      value,
      add,
      substract,
      message,
    };
  } else {
    return {
      value,
      add,
      message,
    };
  }
};

export default useCounter;
