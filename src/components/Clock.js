import { useEffect, useState } from "react";

export default function Clock(props) {
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  return <div>It is {date.toLocaleTimeString()}</div>;
}

// useEffect is like componentWillMount(), and the
// return statement within it is like componentWillUnmount() (it is
// triggered just before the component unmounts).
