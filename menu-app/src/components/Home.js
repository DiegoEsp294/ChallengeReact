import FilterScreen from "../Presentationals/Home/FilterScreen";
import HomeScreen from "../Presentationals/Home/HomeScreen";

const Home = (props) => {

  return(
    <>
      <div className="row">
        <h1>Menu</h1>
        <div className="col-lg-2">
          <FilterScreen />
        </div>
        <div className="col-lg-10">
          <HomeScreen />
        </div>
      </div>
    </>
  )
}

export default Home;
