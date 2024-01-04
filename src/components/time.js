import React, { useState, useEffect } from 'react';

function ZuluTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <>{time.getUTCHours()}:{time.getUTCMinutes()}:{time.getUTCSeconds()}z</>;
}
export default ZuluTime;

//