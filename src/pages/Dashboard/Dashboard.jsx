import React, { useState } from "react";

function Koin(props) {
  return (
    <div className="pl-16 pr-16 whitespace-nowrap">
      <p className="text-center p-1 font-semibold text-[44px] text-[#2b6653]">
        {props.koinnum}
      </p>
      <p className="text-center font-medium text-[24px]">{props.name}</p>
    </div>
  );
}

function Koins(props) {
  return (
    <div className="max-w-sm mx-auto flex justify-evenly p-8">
      <Koin koinnum={180} name="보유중인 코인" />
      <Koin koinnum={240} name="획득한 코인" />
      <Koin koinnum={60} name="사용한 코인" />
    </div>
  );
}

function History(props) {
  const { list } = props;

  return (
    <div className="p-8">
      <h1 className="pb-2 font-bold text-[30px]">코인 내역</h1>
      <div className="mt-2 overflow-auto max-h-[300px] rounded-xl">
        <table className="p-8 w-full bg-[#ffffff] rounded-xl">
          <thead>
            <tr>
              <th className="pt-4 text-center">날짜</th>
              <th className="pt-4 text-left pl-8">내용</th>
              <th className="pt-4 text-left">사이트</th>
              <th className="pt-4 text-center">획득한 코인</th>
              <th className="pt-4 text-center">사용한 코인</th>
              <th className="pt-4 text-center">총 보유 코인</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index} className="h-12">
                <td className="text-center w-[15%]">{item.date}</td>
                <td className="text-left pl-8 w-[30%]">{item.his}</td>
                <td className="text-left w-[10%]">{item.site}</td>
                <td className="text-center w-[10%]">{item.collected_point}</td>
                <td className="text-center w-[10%]">{item.used_point}</td>
                <td className="text-center w-[10%]">{item.total_point}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FAQ() {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <div className="bg-white ml-8 p-1 m-4 rounded-xl">
      <h1 className="flex items-center justify-between p-2 text-[20px] font-demilight">
        {" "}
        휴학생도 킹고코인을 사용하고 모을 수 있나요?
        <button onClick={toggleContent}>
          {" "}
          {isContentVisible ? "▴" : "▾"}{" "}
        </button>
      </h1>
      {isContentVisible && (
        <div className="w-[100%]">
          <p className="p-2 text-[16px] font-thin">
            킹고코인 포인트는 AWS, GPU 개인사용 크레딧, IT 기기대여, 세미나실
            사용등에 사용될 수 있으며, 코리아 챌린지와 글로벌 챌린지를 비롯한
            각종 학과내 행사에 있어서 선발 기준에 적용될 수 있습니다.
          </p>
        </div>
      )}
    </div>
  );
}

function MoreKoin() {
  return (
    <div className="p-8">
      <h1 className="font-medium text-[28px] ">코인을 더 모으고 싶다면?</h1>
      <ul className="flex justify-between mt-4">
        <li className="bg-white w-[20%] p-4 rounded-2xl shadow-lg font-gugi font-regular text-center">
          <a href="https://mrdang.cs.skku.edu/" target="_blank">
            온라인명륜당
          </a>
        </li>
        <li className="bg-white w-[20%] p-4 rounded-2xl shadow-lg text-center">
          <a
            href="https://sw.skku.edu/sw/notice.do?mode=list&srCategoryId1=1587&srSearchKey=&srSearchVal="
            target="_blank"
          >
            화상강연
          </a>
        </li>
        <li className="bg-white w-[20%] p-4 rounded-2xl shadow-lg text-center">
          <a href="https://sosd.skku.edu/community/" target="_blank">
            오픈소스
          </a>
        </li>
        <li className="bg-white w-[20%] p-4 rounded-2xl shadow-lg text-center">
          <a href="https://mrdang.cs.skku.edu/" target="_blank">
            킹고인과의 만남
          </a>
        </li>
      </ul>
    </div>
  );
}

function Page2(props) {
  const list = [
    {
      date: "2023.06.16",
      his: "online myeongryundang",
      site: "Kingo",
      used_point: "0",
      collected_point: " 5",
      total_point: "5",
    },
    {
      date: "2023.06.20",
      his: "meeting with kingo",
      site: "Kingo",
      used_point: "0",
      collected_point: "10",
      total_point: "15",
    },
    {
      date: "2023.08.10",
      his: "booking seminar room ",
      site: "Kingo",
      used_point: "-5",
      collected_point: "0",
      total_point: "10",
    },
    {
      date: "2023.09.20",
      his: "online myeongryundang",
      site: "Kingo",
      used_point: "0",
      collected_point: "5",
      total_point: "15",
    },
    {
      date: "2023.10.11",
      his: "open source",
      site: "Kingo",
      used_point: "0",
      collected_point: "10",
      total_point: "25",
    },
    {
      date: "2023.10.16",
      his: "online myeongryundang",
      site: "Kingo",
      used_point: "0",
      collected_point: "5",
      total_point: "30",
    },
    {
      date: "2023.10.20",
      his: "meeting with kingo",
      site: "Kingo",
      used_point: "0",
      collected_point: "10",
      total_point: "40",
    },
    {
      date: "2023.11.10",
      his: "booking seminar room ",
      site: "Kingo",
      used_point: "5",
      collected_point: "0",
      total_point: "35",
    },
    {
      date: "2023.11.20",
      his: "online myeongryundang",
      site: "Kingo",
      used_point: "0",
      collected_point: "5",
      total_point: "40",
    },
    {
      date: "2023.12.11",
      his: "open source",
      site: "Kingo",
      used_point: "0",
      collected_point: "10",
      total_point: "50",
    },
  ];

  return (
    <div className="font-noto-sans-kr bg-secondary">
      <Koins></Koins>
      <History list={list} />
      <h1 className="pl-8 font-medium text-[28px]">자주 물어보는 질문</h1>
      <FAQ> </FAQ>
      <FAQ></FAQ>
      <MoreKoin></MoreKoin>
    </div>
  );
}
export default Page2;
