import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import herobg from "../public/hero.jpg";
import Image from "next/image";

const Background = () => (
  <div>
    <div className='bg-cream overflow-hidden w-full h-full -z-10'>
      <Image
        alt='A table filled with food'
        src={herobg}
        layout='fill'
        objectFit='cover'
        quality={50}
      />
    </div>
  </div>
);

export default function HeroBox() {
  return (
    <>
      <div className='grid h-[90vh] w-full bg-cream'>
        <Background />
        <div className='grid justify-center'>
          <img className='grid self-center w-[550px] p-10 z-10' src='herotext.svg' />
        </div>
        <div className='grid self-end justify-center z-10 text-6xl text-[#fbf7f0]' alt='scroll down'>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </>
  );
}
