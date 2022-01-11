import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function CalltoAction(props) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <img className="logo" src="forage.svg" />
        <div className="h-fit flex justify-center">
          <div className="social-button">
            <FontAwesomeIcon icon={faFacebookSquare} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>{" "}
        <div className="flex justify-center">
          <p>©2022 Forage Gourmet Platter Co</p>
        </div>
      </div>
    </>
  );
}
