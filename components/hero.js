import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import herobg from "../public/hero.webp";
// import Image from "next/image";

const Background = () => (
  <div>
    <div className='bg-cream -z-10 w-full h-full overflow-hidden'>
      {/* <Image
        alt='A table filled with food'
        src={herobg}
        layout='fill'
        objectFit='cover'
        quality={50}
        priority='true'
      /> */}
    </div>
  </div>
);

export default function HeroBox() {
  return (
    <>
      <div className="grid h-[90vh] w-full bg-cream bg-cover bg-[url('../public/hero.webp')]">
        <Background />
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
