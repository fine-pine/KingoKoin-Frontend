import React from "react";

function Page1(props) {
  return (
    <div>
      <div className="CoinNum">
        <h2>c</h2>
      </div>
 
      <div className="History">
        <div className="text-4xl font-bold pl-5 pb-5">코인 내역</div>
          <div className="flex justify-center w-full h-20 table-auto overflow-y-scroll">
          <table className="text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="text-center border-b dark:bg-gray-800 dark:border-gray-700">
                <th className="px-6 py-3">날짜</th>
                <th className="px-6 py-3">내용</th>
                <th className="px-6 py-3">획득한 코인</th>
                <th className="px-6 py-3">사용한 코인</th>
                <th className="px-6 py-3">누계</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="px-6 py-4">0000.00.00</td>
                <td className="px-6 py-4">AWS 이용</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">10</td>
                <td className="px-6 py-4">40</td>
              </tr>
              <tr className="text-center">
                <td className="px-6 py-4">0000.00.00</td>
                <td className="px-6 py-4">IT 화상강연 참여</td>
                <td className="px-6 py-4">10</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">50</td>
              </tr>
              <tr className="text-center">
                <td className="px-6 py-4">0000.00.00</td>
                <td className="px-6 py-4">온라인 명륜당 회원가입</td>
                <td className="px-6 py-4">30</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">40</td>
              </tr>
              <tr className="text-center">
                <td className="px-6 py-4">0000.00.00</td>
                <td className="px-6 py-4">세미나실 추가 이용 - 2시간</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">20</td>
                <td className="px-6 py-4">10</td>
              </tr>
              <tr className="text-center">
                <td className="px-6 py-4">0000.00.00</td>
                <td className="px-6 py-4">오픈소스 플랫폼 레벨업</td>
                <td className="px-6 py-4">30</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">30</td>
              </tr>
            </tbody>
        </table>
          </div>
      </div>

      <div className="text-xl font-bold pl-8">
        자주 묻는 질문
      </div>

      <div className="text-2l font-bold">
        코인을 더 모으고 싶다면
      </div>
    </div>
  );
}

export default Page1;
