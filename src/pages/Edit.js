import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 Edit 일기-수정페이지 입니다.</p>
    </div>
  );
};

export default Edit;
