import {useEffect, useState} from 'react';

interface IDebounce {
  debounceValue: string;
  time: number;
}

const useDebounce = ({debounceValue, time}: IDebounce) => {
  const [value, setValue] = useState<string>(debounceValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(debounceValue);
    }, time);

    return () => {
      clearTimeout(handler);
    };
  }, [time, debounceValue]);
  return value;
};

export default useDebounce;
