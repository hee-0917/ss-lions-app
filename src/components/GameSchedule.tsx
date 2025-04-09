import React from 'react';

interface Game {
  date: string;
  opponent: string;
  time: string;
  stadium: string;
  preSaleDate: string;
}

const GameSchedule: React.FC = () => {
  const calculatePreSaleDate = (date: string): string => {
    const gameDate = new Date(date);
    const dayOfWeek = gameDate.getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일
    
    // 경기일로부터 1주 전 날짜 계산
    const oneWeekBefore = new Date(gameDate);
    oneWeekBefore.setDate(gameDate.getDate() - 7);
    
    // 요일에 따라 선예매일 결정
    // 일요일 경기는 전주 수요일, 그 외는 전주 일요일
    if (dayOfWeek === 0) { // 일요일 경기
      oneWeekBefore.setDate(oneWeekBefore.getDate() - 4); // 수요일로 조정
    } else {
      oneWeekBefore.setDate(oneWeekBefore.getDate() - dayOfWeek); // 일요일로 조정
    }
    
    // 오후 2시로 시간 설정
    oneWeekBefore.setHours(14, 0, 0, 0);
    
    return oneWeekBefore.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const games: Game[] = [
    {
      date: '2025-04-01',
      opponent: '키움 히어로즈',
      time: '18:30',
      stadium: '대구삼성라이온즈파크',
      preSaleDate: ''
    },
    {
      date: '2025-04-02',
      opponent: '키움 히어로즈',
      time: '18:30',
      stadium: '대구삼성라이온즈파크',
      preSaleDate: ''
    },
    {
      date: '2025-04-04',
      opponent: 'KIA 타이거즈',
      time: '18:30',
      stadium: '대구삼성라이온즈파크',
      preSaleDate: ''
    },
    {
      date: '2025-04-05',
      opponent: 'KIA 타이거즈',
      time: '18:30',
      stadium: '대구삼성라이온즈파크',
      preSaleDate: ''
    },
    {
      date: '2025-04-06',
      opponent: 'KIA 타이거즈',
      time: '14:00',
      stadium: '대구삼성라이온즈파크',
      preSaleDate: ''
    }
  ].map(game => ({
    ...game,
    preSaleDate: calculatePreSaleDate(game.date)
  }));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>날짜</th>
            <th>상대팀</th>
            <th>시간</th>
            <th>구장</th>
            <th>선예매일</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => (
            <tr key={index}>
              <td>{new Date(game.date).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
              })}</td>
              <td>{game.opponent}</td>
              <td>{game.time}</td>
              <td>{game.stadium}</td>
              <td>{game.preSaleDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameSchedule; 