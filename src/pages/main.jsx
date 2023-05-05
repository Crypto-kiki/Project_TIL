import metadata from "../metadata.json";
import List from "../components/list";

const Main = () => {
  const rotateImage = () => {
    const ranNum = Math.floor(Math.random() * 4) + 1;
    return `${process.env.PUBLIC_URL}/images/${ranNum}.jpg`;
  };

  return (
    <div className="min-h-screen flex justify-between mx-auto min-w-[1500px]">
      <div className="p-12 w-1/3 bg-[#aa54fc] text-gray-50 flex flex-col justify-between">
        <div className="text-4xl font-bold ">
          BlockChain School 3기
          <div className="mt-8">TIL Link</div>
        </div>
        <div className="flex justify-center">
          <img src={rotateImage()} className="h-96 w-96" />
        </div>
        <div>
          <div>TIL 주소는 Notion 회고팀 별 작성해주신 주소입니다.</div>
          <div>TIL 주소를 작성해주시지 않은 분은 표시되지 않습니다.</div>
          <div className="mt-10">
            공유를 원하시거나, 원하시지 않은 분은 DM 보내주세요😀
          </div>
        </div>
      </div>
      <div className="w-2/3 grid grid-cols-2 p-10">
        <div>
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 1팀</div>
          <div className="flex my-4 ">
            {metadata.map((v, i) =>
              v.team === 1 ? (
                <List key={i} team={v.team} name={v.name} url={v.url} />
              ) : null
            )}
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 2팀</div>
          <div className="flex my-4 ">
            {metadata.map((v, i) =>
              v.team === 2 ? (
                <List key={i} team={v.team} name={v.name} url={v.url} />
              ) : null
            )}
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 3팀</div>
          <div className="flex my-4 ">
            {metadata.map((v, i) =>
              v.team === 3 ? (
                <List key={i} team={v.team} name={v.name} url={v.url} />
              ) : null
            )}
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 4팀</div>
          <div className="flex my-4 ">
            {metadata.map((v, i) =>
              v.team === 4 ? (
                <List key={i} team={v.team} name={v.name} url={v.url} />
              ) : null
            )}
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 5팀</div>
          <div className="flex my-4 ">
            {metadata.map((v, i) =>
              v.team === 5 ? (
                <List key={i} team={v.team} name={v.name} url={v.url} />
              ) : null
            )}
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 6팀</div>
          <div className="flex my-4 ">
            {metadata.map((v, i) =>
              v.team === 6 ? (
                <List key={i} team={v.team} name={v.name} url={v.url} />
              ) : null
            )}
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 7팀</div>
          <div className="flex my-4 ">
            {metadata.map((v, i) =>
              v.team === 7 ? (
                <List key={i} team={v.team} name={v.name} url={v.url} />
              ) : null
            )}
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 8팀</div>
          <div className="flex my-4 ">
            {metadata.map((v, i) =>
              v.team === 8 ? (
                <List key={i} team={v.team} name={v.name} url={v.url} />
              ) : null
            )}
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 9팀</div>
          <div className="flex my-4 ">
            {metadata.map((v, i) =>
              v.team === 9 ? (
                <List key={i} team={v.team} name={v.name} url={v.url} />
              ) : null
            )}
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 10팀</div>
          <div className="flex my-4 ">
            {metadata.map((v, i) =>
              v.team === 10 ? (
                <List key={i} team={v.team} name={v.name} url={v.url} />
              ) : null
            )}
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 11팀</div>
          <div className="flex my-4 ">
            {metadata.map((v, i) =>
              v.team === 11 ? (
                <List key={i} team={v.team} name={v.name} url={v.url} />
              ) : null
            )}
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 12팀</div>
          <div className="flex my-4 ">
            {metadata.map((v, i) =>
              v.team === 12 ? (
                <List key={i} team={v.team} name={v.name} url={v.url} />
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
