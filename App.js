import "./App.css";
import img1 from "./images/pik5.jpg";
import img2 from "./images/pik2.png";

function App() {
  return (
    <div className="container">
      <nav>
        <img src={img1} className="logo" alt="imaged123" />
        <ul id="A100">
          <li id="A101" >
            <a href="www.ziontutorial.com" id="A102" ><p>Traval Guide</p></a>
          </li>
          <li id="A101">
            <a href="www.ziontutorial.com" id="A102" >Famous Places</a>
          </li>
          <li id="A101">
            <a href="www.ziontutorial.com"  id="A102" >Contact Us</a>
          </li>
        </ul>
        <button className="btn">
          <img  classname="btn_booking" src={img2} alt="icon" /> Bookings
        </button>
      </nav>
      <div className="content">
        <h1>
          Beautiful
          <br />
          Places to explore
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <form>
          <input type="text" placeholder="Country Name" />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
      <p></p>
    </div>
  );
}
 
export default App;