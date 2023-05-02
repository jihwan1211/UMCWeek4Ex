import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <br></br>
      <Link to={"/diary"}>Diary</Link>
      <br></br>
      <Link to={"/edit"}>Edit</Link>
      <br></br>
      <Link to={"/new"}>New</Link>
    </div>
  );
};

export default RouteTest;
