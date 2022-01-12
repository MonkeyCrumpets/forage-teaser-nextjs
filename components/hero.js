import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import herobg from "../public/hero.webp";
// import Image from "next/image";

export default function HeroBox() {
  return (
    <>
      <div className="grid h-[90vh] bg-cream -z-10 w-full overflow-hidden bg-cover bg-[url('../public/hero.webp')]">
        <div className='grid justify-center'>
          <img
            className='grid self-center w-[600px] p-10 z-10'
            src='herotext.svg'
            alt='Something really good is happening soon'
          />
        </div>
        <div
          className='grid self-end justify-center z-10 text-6xl text-[#fbf7f0]'
          alt='scroll down'>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </>
  );
}
