import { useEffect } from "react";
import moleImg from "../mole.png";

const Mole = (props) => {
  // useEffect for timer random
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 10000);
    let timer = setTimeout(() => {
      props.toggle(false);
    }, randSeconds);
    return () => clearTimeout(timer);
  }, [props]);

  return (
    <div>
      <img
        style={{ width: "30vw" }}
        src={moleImg}
        alt="A mole"
        onClick={props.handleClick}
      />
    </div>
  );
};

export default Mole;
