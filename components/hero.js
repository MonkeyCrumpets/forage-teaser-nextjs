import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function HeroBox() {
  return (
    <>
      <div className="m-0 grid justify-center h-[80vh] w-full bg-neutral-800 bg-[url('/hero.jpg')] bg-no-repeat bg-cover">
        <div className="grid items-center row-span-6">
          <img
            className="max-w-[90vw] h-[50vh]"
            src="herotext.svg"
            alt="something really good is coming soon"
          />
        </div>
        <div
          className="grid justify-center items-end text-6xl text-[#fffdf9]"
          alt="scroll down"
        >
          <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
        </div>
      </div>
    </>
  );
}
