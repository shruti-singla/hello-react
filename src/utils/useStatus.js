import { useState, useEffect } from "react";

const useStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setStatus(true);
    });

    window.addEventListener("offline", () => {
      setStatus(false);
    });
  }, []);

  return status;
};

export default useStatus;
