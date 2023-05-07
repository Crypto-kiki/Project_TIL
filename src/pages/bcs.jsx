import { Link } from "react-router-dom";

const BCS = () => {
  return (
    <div className="container flex flex-col justify-center items-center min-h-screen min-w-full">
      <div className="text-7xl text-gray-50 tracking-widest">
        TECHIT 블록체인 스쿨 3기
      </div>
      <Link to={`/main`}>
        <button className="mt-12 border border-gray-50 py-4 px-8 text-xl rounded-3xl text-white font-bold ">
          구경하러 가기
        </button>
      </Link>
    </div>
  );
};

export default BCS;
