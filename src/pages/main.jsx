import metadata from "../metadata.json";
import List from "../components/list";
import Web3 from "web3";
import { useState } from "react";

const Main = () => {
  const [account, setAccount] = useState();

  const rotateImage = () => {
    const ranNum = Math.floor(Math.random() * 4) + 1;
    return `${process.env.PUBLIC_URL}/images/${ranNum}.jpg`;
  };

  const web3 = new Web3(window.ethereum);

  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };
  const onClickLogOut = () => {
    setAccount("");
  };

  return (
    <div className="min-h-screen flex justify-between mx-auto min-w-[1500px] bg-gradient-to-r from-violet-500 to-fuchsia-400">
      <div className="p-12 w-1/4  text-gray-50 flex flex-col">
        <div>
          <div className="text-5xl font-bold tracking-widest">TECHIT</div>
          <div className="mt-8 text-4xl">블록체인 스쿨 3기</div>
        </div>
        <div className="mt-20">
          <img src={rotateImage()} className="h-96 w-96 rounded-2xl" />
        </div>
        <div className="mt-20">
          <div>
            Velog 주소는 블록체인스쿨 3기 Notion에 작성하신 주소를 참고했습니다.
          </div>
          <div>작성하지 않으신 분은 표시되지 않습니다.</div>
          <div className="mt-10">이후 등록은 디스코드 DM 보내주세요😀</div>
          <div className="mt-10">
            <div className="text-center">Update</div>
            <div className="text-sm">
              <p>2023. 05. 06</p>
              <ul className="text-xs">
                <li>1. Main Page 추가</li>
                <li>2. Github 잔디 시각화 (최근 5개월만)</li>
                <li>3. UI 개선</li>
                <li>4. title & favicon 변경</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 p-10">
        <div className="flex justify-end">
          {account ? (
            <button
              onClick={onClickLogOut}
              className="border border-gray-600 text-gray600 px-4 py-2 rounded-xl"
            >
              {account.substring(0, 4)}...
              {account.substring(account.length - 4)}
            </button>
          ) : (
            <button
              onClick={onClickAccount}
              className="border border-gray-600 text-gray600 px-4 py-2 rounded-xl"
            >
              Wallet Connect
            </button>
          )}
        </div>
        <div className="mb-16 border-b-2">
          <div className="text-2xl font-bold pb-2 text-black">회고 1팀</div>
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
        <div className="mb-16 border-b-2">
          <div className="text-2xl font-bold pb-2 text-black">회고 2팀</div>
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
        <div className="mb-16 border-b-2">
          <div className="text-2xl font-bold pb-2 text-black">회고 3팀</div>
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
        <div className="mb-16 border-b-2">
          <div className="text-2xl font-bold pb-2 text-black">회고 4팀</div>
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
        <div className="mb-16 border-b-2">
          <div className="text-2xl font-bold pb-2 text-black">회고 5팀</div>
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
        <div className="mb-16 border-b-2">
          <div className="text-2xl font-bold pb-2 text-black">회고 6팀</div>
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
        <div className="mb-16 border-b-2">
          <div className="text-2xl font-bold pb-2 text-black">회고 7팀</div>
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
        <div className="mb-16 border-b-2">
          <div className="text-2xl font-bold pb-2 text-black">회고 8팀</div>
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
        <div className="mb-16 border-b-2">
          <div className="text-2xl font-bold pb-2 text-black">회고 9팀</div>
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
        <div className="mb-16 border-b-2">
          <div className="text-2xl font-bold pb-2 text-black">회고 10팀</div>
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
        <div className="mb-16 border-b-2">
          <div className="text-2xl font-bold pb-2 text-black">회고 11팀</div>
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
        <div className="mb-16 border-b-2">
          <div className="text-2xl font-bold pb-2 text-black">회고 12팀</div>
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
