import metadata from "../metadata.json";
import List from "../components/list";

const Main = () => {
  const rotateImage = () => {
    const ranNum = Math.floor(Math.random() * 4) + 1;
    return `${process.env.PUBLIC_URL}/images/${ranNum}.jpg`;
  };

  return (
    <div className="min-h-screen flex justify-between mx-auto min-w-[1500px]">
      <div className="p-12 w-1/4 bg-[#aa54fc] text-gray-50 flex flex-col">
        <div className="text-4xl font-bold ">
          블록체인 스쿨 3기
          <div className="mt-8">TIL Link</div>
        </div>
        <div className="mt-20">
          <img src={rotateImage()} className="h-96 w-96" />
        </div>
        <div className="mt-20">
          <div>
            Velog 주소는 블록체인스쿨 3기 Notion에 작성하신 주소를 참고했습니다.
          </div>
          <div>작성하지 않으신 분은 표시되지 않습니다.</div>
          <div className="mt-10">
            공유를 원하시거나, 원하시지 않은 분은 DM 보내주세요😀
          </div>
        </div>
      </div>
      <div className="w-3/4 p-10">
        <div className="mb-16 border-b-4">
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 1팀</div>
          <div className="mb-4 grid grid-cols-3 gap-10">
            {metadata.map((v, i) =>
              v.team === 1 ? (
                <List
                  key={i}
                  team={v.team}
                  name={v.name}
                  url={v.url}
                  git={v.git}
                  gitName={v.git.substring(19, v.git.length)}
                />
              ) : null
            )}
          </div>
        </div>
        <div className="mb-16 border-b-4">
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 2팀</div>
          <div className="mb-4 grid grid-cols-3 gap-10">
            {metadata.map((v, i) =>
              v.team === 2 ? (
                <List
                  key={i}
                  team={v.team}
                  name={v.name}
                  url={v.url}
                  git={v.git}
                  gitName={v.git.substring(19, v.git.length)}
                />
              ) : null
            )}
          </div>
        </div>
        <div className="mb-16 border-b-4">
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 3팀</div>
          <div className="mb-4 grid grid-cols-3 gap-10">
            {metadata.map((v, i) =>
              v.team === 3 ? (
                <List
                  key={i}
                  team={v.team}
                  name={v.name}
                  url={v.url}
                  git={v.git}
                  gitName={v.git.substring(19, v.git.length)}
                />
              ) : null
            )}
          </div>
        </div>
        <div className="mb-16 border-b-4">
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 4팀</div>
          <div className="mb-4 grid grid-cols-3 gap-10">
            {metadata.map((v, i) =>
              v.team === 4 ? (
                <List
                  key={i}
                  team={v.team}
                  name={v.name}
                  url={v.url}
                  git={v.git}
                  gitName={v.git.substring(19, v.git.length)}
                />
              ) : null
            )}
          </div>
        </div>
        <div className="mb-16 border-b-4">
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 5팀</div>
          <div className="mb-4 grid grid-cols-3 gap-10">
            {metadata.map((v, i) =>
              v.team === 5 ? (
                <List
                  key={i}
                  team={v.team}
                  name={v.name}
                  url={v.url}
                  git={v.git}
                  gitName={v.git.substring(19, v.git.length)}
                />
              ) : null
            )}
          </div>
        </div>
        <div className="mb-16 border-b-4">
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 6팀</div>
          <div className="mb-4 grid grid-cols-3 gap-10">
            {metadata.map((v, i) =>
              v.team === 6 ? (
                <List
                  key={i}
                  team={v.team}
                  name={v.name}
                  url={v.url}
                  git={v.git}
                  gitName={v.git.substring(19, v.git.length)}
                />
              ) : null
            )}
          </div>
        </div>
        <div className="mb-16 border-b-4">
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 7팀</div>
          <div className="mb-4 grid grid-cols-3 gap-10">
            {metadata.map((v, i) =>
              v.team === 7 ? (
                <List
                  key={i}
                  team={v.team}
                  name={v.name}
                  url={v.url}
                  git={v.git}
                  gitName={v.git.substring(19, v.git.length)}
                />
              ) : null
            )}
          </div>
        </div>
        <div className="mb-16 border-b-4">
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 8팀</div>
          <div className="mb-4 grid grid-cols-3 gap-10">
            {metadata.map((v, i) =>
              v.team === 8 ? (
                <List
                  key={i}
                  team={v.team}
                  name={v.name}
                  url={v.url}
                  git={v.git}
                  gitName={v.git.substring(19, v.git.length)}
                />
              ) : null
            )}
          </div>
        </div>
        <div className="mb-16 border-b-4">
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 9팀</div>
          <div className="mb-4 grid grid-cols-3 gap-10">
            {metadata.map((v, i) =>
              v.team === 9 ? (
                <List
                  key={i}
                  team={v.team}
                  name={v.name}
                  url={v.url}
                  git={v.git}
                  gitName={v.git.substring(19, v.git.length)}
                />
              ) : null
            )}
          </div>
        </div>
        <div className="mb-16 border-b-4">
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 10팀</div>
          <div className="mb-4 grid grid-cols-3 gap-10">
            {metadata.map((v, i) =>
              v.team === 10 ? (
                <List
                  key={i}
                  team={v.team}
                  name={v.name}
                  url={v.url}
                  git={v.git}
                  gitName={v.git.substring(19, v.git.length)}
                />
              ) : null
            )}
          </div>
        </div>
        <div className="mb-16 border-b-4">
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 11팀</div>
          <div className="mb-4 grid grid-cols-3 gap-10">
            {metadata.map((v, i) =>
              v.team === 11 ? (
                <List
                  key={i}
                  team={v.team}
                  name={v.name}
                  url={v.url}
                  git={v.git}
                  gitName={v.git.substring(19, v.git.length)}
                />
              ) : null
            )}
          </div>
        </div>
        <div className="mb-16 border-b-4">
          <div className="text-2xl font-bold pb-2 text-gray-500">회고 12팀</div>
          <div className="mb-4 grid grid-cols-3 gap-10">
            {metadata.map((v, i) =>
              v.team === 12 ? (
                <List
                  key={i}
                  team={v.team}
                  name={v.name}
                  url={v.url}
                  git={v.git}
                  gitName={v.git.substring(19, v.git.length)}
                />
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
