import { useEffect, useRef } from "react";
import TypedJS from "typed.js";

export default function Typed({
  data = ["No data passed as args"],
  customClass = "",
}) {
  const el = useRef(null);
  useEffect(() => {
    const typed = new TypedJS(el.current, {
      strings: data,
      typeSpeed: 70,
      backDelay: 700,
      smartBackspace: true,
      backSpeed: 20,
      loop: true,
      loopCount: Infinity,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return <span className={customClass} ref={el}></span>;
}
