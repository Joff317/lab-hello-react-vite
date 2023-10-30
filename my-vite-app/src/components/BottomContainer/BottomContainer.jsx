import "./bottomContainer.css";
import declarative from "../../assets/icon1.png";
import components from "../../assets/icon2.png";
import singleWay from "../../assets/icon3.png";
import last from "../../assets/icon4.png";
export default function BottomContainer() {
  return (
    <div className="bottom-container">
      <ul>
        <li className="list-item">
          <img src={declarative} alt="" />
          <h3>Declarative</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li className="list-item">
          <img src={components} alt="" />
          <h3>Components</h3>
          <p>Lorem ipsum dolor sit amet.
          </p>
        </li>
        <li className="list-item">
          <img src={singleWay} alt="" />
          <h3>Single Way</h3>
          <p>Lorem ipsum dolor sit amet.
          </p>
        </li>
        <li className="list-item">
          <img src={last} alt="" />
          <h3>JSX</h3>
          <p>Lorem ipsum dolor sit amet.
          </p>
        </li>
      </ul>
    </div>
  );
}
