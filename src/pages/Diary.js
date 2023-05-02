import Inha from "./Inha";

import { Routes, Route } from "react-router-dom";
const Diary = () => {
  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 Diary, 일기 상세 입니다.</p>
      <Routes>
        <Route path="/inha" element={<Inha></Inha>}></Route>
      </Routes>
    </div>
  );
};

export default Diary;
