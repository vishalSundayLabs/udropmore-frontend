import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InternetCheck = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const checkInternetConnectivity = () => {
      setIsOnline(navigator.onLine);
    };

    const timer = setInterval(checkInternetConnectivity, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      {!isOnline && (
        <>
            {toast.warning('Internet is not connected. Please check your connection.', { position: toast.POSITION.TOP_RIGHT })}
        </>
      )}
    </div>
  );
};

export default InternetCheck;
