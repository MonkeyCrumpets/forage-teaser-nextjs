import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import herobg from "../public/hero.jpg";
import Image from "next/image";

const Background = () => (
  <div>
    <div className='-z-10 w-full h-full overflow-hidden'>
      <Image
        alt='A table filled with food'
        src={herobg}
        layout='fill'
        objectFit='cover'
        quality={75}
      />
    </div>
  </div>
);

export default function HeroBox() {
  return (
    <>
      <div className='h-[90vh] w-full p-5' bg-cream>
        <Background />
        <div className='flex justify-center'>
          <img className='flex w-[400px] z-10' src='herotext.svg' />
        </div>
        <div className='flex justify-center z-10 text-6xl text-[#fbf7f0]' alt='scroll down'>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </>
  );
}
