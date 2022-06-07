import Card from "./component/card";
import Grid from "./component/grid";
import NumberCom from "./component/useState/usestate";

const App = () => {
  return (
    <div>
      <div className="container">
        <NumberCom></NumberCom>
        <Card className="pad-lr">
          <h1 className="heading-primary">We have Cooked 250+ food for you</h1>
          <Grid />
        </Card>
      </div>
    </div>
  );
};

export default App;
