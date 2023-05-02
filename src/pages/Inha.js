import { useSearchParams } from "react-router-dom";

const Inha = () => {
  const [serachParams, setSearchParams] = useSearchParams();

  const id = serachParams.get("id");
  console.log(id);
  const mode = serachParams.get("mode");
  console.log(mode);

  return (
    <div>
      <h2>인하대학교에서 공부중입니다.</h2>
      <button onClick={() => setSearchParams({ id: "jihwan" })}>버튼</button>
    </div>
  );
};

export default Inha;
