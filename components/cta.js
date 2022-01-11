import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function CalltoAction(props) {
  return (
    <>
      <div className='bg-cream relative h-screen'>
        <div className='place-content-evenly bg-cream flex flex-col h-screen'>
          <div className='flex justify-center p-10'>
            <img src='/forage.svg' alt='Forage Gourmet Platter Co' className='w-[700px]' />
          </div>

          <div className='h-fit flex justify-center object-contain'>
            <div className='sm:text-8xl text-dark gap-7 flex flex-row text-6xl'>
              <a href='https://facebook.com/foragegourmetplatterco'>
                <FontAwesomeIcon icon={faFacebookSquare} alt='Facebook' />
              </a>
              <a href='https://instagram.com/forage.gourmetplatterco'>
                <FontAwesomeIcon icon={faInstagram} alt='Instagram' />
              </a>
            </div>
          </div>
          <div className='bottom-5 absolute w-full'>
            <div className='text-paper flex justify-center'>
              <p>©2022 Forage Gourmet Platter Co</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
