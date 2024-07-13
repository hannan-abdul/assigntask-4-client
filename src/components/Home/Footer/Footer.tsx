import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import FooterColum from "./FooterColum";

const Footer = () => {
  const ourAddress = [
    { name: "California - 14222 Dallas", link: "//google.com/map" },
    { name: "Buffalo", link: "//google.com/map" },
  ];
  const portfolio = [
    { name: "Business", link: "/business" },
    { name: "Entertainment", link: "/entertainment" },
    { name: "Politics", link: "/politics" },
    { name: "Sports", link: "/sports" },
    { name: "International", link: "/international" },
    { name: "Other", link: "/other" },
  ];
  const services = [
    { name: "Business", link: "/business" },
    { name: "Entertainment", link: "/entertainment" },
    { name: "Politics", link: "/politics" },
    { name: "Sports", link: "/sports" },
    { name: "International", link: "/international" },
    { name: "Other", link: "/other" },
  ];
  return (
    <footer className="footer-area clear-both">
      <div className="container">
        <div className="row pt-5">
          <FooterColum key={1} menuTitle="Services" menuItems={services} />
          <FooterColum key={2} menuTitle="Portfolio" menuItems={portfolio} />
          <FooterColum key={3} menuTitle="Contact Us" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className="mt-3 text-white">
              <h6>Call now</h6>
              <span>+8801700000001</span>
            </div>
          </FooterColum>
        </div>
        <div className="copyRight text-center pb-3 text-white">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
      {/* <ScrollTop/> */}
    </footer>
  );
};

export default Footer;
