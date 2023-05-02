import { Outlet } from "react-router-dom";

const New = () => {
  return (
    <div>
      <h1>New</h1>
      <p>이곳은 New페이지 일기-추가-작성 입니다.</p>
      <Outlet></Outlet>
    </div>
  );
};

export default New;
