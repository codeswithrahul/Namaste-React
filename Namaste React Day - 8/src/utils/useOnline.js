import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      return setOnline(true);
    });
    window.addEventListener("offline", () => {
      return setOnline(false);
    });

    // you should remove  addEventListener here
  }, []);

  return isOnline; //retun only boolean values
};
export default useOnline;
