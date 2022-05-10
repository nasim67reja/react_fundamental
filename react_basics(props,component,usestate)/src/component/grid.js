import "./grid.css";
import Card from "./card";
import NumberCom from "./useState/usestate";
/////////////////
const MainCard = (props) => {
  return (
    <Card>
      <div className="main-card">
        <div className="img-box">
          <img src={props.imgSrc} alt="" />
        </div>
        <span>vegan</span>
        <p className="card-text">
          Lorem ipsum dolor sit amet elit. Modi quisquam, rem ipsum dolore,
          animi officia a voluptatum non quia
        </p>
        <div className="card-footer">
          <NumberCom></NumberCom>
          <button className="btn">Add to Cart</button>
        </div>
      </div>
    </Card>
  );
};

const Grid = () => {
  const Image = {
    img1: "./images/pic1.jpg",
    img2: "./images/pic2.jpg",
    img3: "./images/pic3.jpg",
  };
  return (
    <div className="grid grid-4-cols">
      <MainCard imgSrc={Image.img1} />
      <MainCard imgSrc={Image.img2} />
      <MainCard imgSrc={Image.img3} />
      <MainCard imgSrc={Image.img1} />
      <MainCard imgSrc={Image.img2} />
      <MainCard imgSrc={Image.img3} />
    </div>
  );
};

export default Grid;
