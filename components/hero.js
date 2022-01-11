import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function HeroBox() {
  return (
    <>
      <div className="grid justify-center h-[80vh] w-screen bg-neutral-800 bg-[url('/hero.jpg')] bg-no-repeat bg-cover">
        <div className="grid row-span-6 items-center">
          <div>
            <h1 className="font-sans font-thin tracking-tighter text-6xl sm:text-7xl md:text-8xl text-[#fffdf9]">
              something
            </h1>
            <h1 className="font-black text-7xl sm:text-8xl md:text-9xl text-[#fffdf9]">
              really
            </h1>
            <h1 className="font-sans font-black text-7xl sm:text-8xl md:text-9xl text-[#fffdf9]">
              good
            </h1>
            <h1 className="font-sans font-thin tracking-tighter text-6xl sm:text-7xl md:text-8xl text-[#fffdf9]">
              is coming
            </h1>
            <h1 className="font-sans font-black text-7xl sm:text-8xl md:text-9xl text-[#fffdf9]">
              soon
            </h1>
          </div>
        </div>
        <div className="grid justify-center items-end text-6xl text-[#fffdf9]">
          <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
        </div>
      </div>
    </>
  );
}
