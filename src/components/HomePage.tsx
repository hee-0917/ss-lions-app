import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

interface Game {
  id: number;
  date: Date;
  opponent: string;
  time: string;
  stadium: string;
  preSaleDate: Date;
}

const HomePage: React.FC = () => {
  const games: Game[] = [
    {
      id: 1,
      date: new Date(2025, 3, 1),
      opponent: '키움 히어로즈',
      time: '18:30',
      stadium: '대구삼성라이온즈파크',
      preSaleDate: new Date(2025, 2, 25, 14, 0),
    },
    {
      id: 2,
      date: new Date(2025, 3, 2),
      opponent: '키움 히어로즈',
      time: '18:30',
      stadium: '대구삼성라이온즈파크',
      preSaleDate: new Date(2025, 2, 26, 14, 0),
    },
    {
      id: 3,
      date: new Date(2025, 3, 4),
      opponent: 'KIA 타이거즈',
      time: '18:30',
      stadium: '대구삼성라이온즈파크',
      preSaleDate: new Date(2025, 2, 28, 14, 0),
    },
    {
      id: 4,
      date: new Date(2025, 3, 5),
      opponent: 'KIA 타이거즈',
      time: '18:30',
      stadium: '대구삼성라이온즈파크',
      preSaleDate: new Date(2025, 2, 29, 14, 0),
    },
    {
      id: 5,
      date: new Date(2025, 3, 6),
      opponent: 'KIA 타이거즈',
      time: '14:00',
      stadium: '대구삼성라이온즈파크',
      preSaleDate: new Date(2025, 2, 30, 14, 0),
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        2025년 4월 삼성 라이온즈 홈경기 일정
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {games.map((game) => (
          <Card key={game.id}>
            <CardContent>
              <Typography variant="h6" component="div">
                {format(game.date, 'yyyy년 MM월 dd일 (E)', { locale: ko })}
              </Typography>
              <Typography color="text.secondary">
                {game.time} | {game.stadium}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                vs {game.opponent}
              </Typography>
              <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                선예매일: {format(game.preSaleDate, 'yyyy년 MM월 dd일 (E) HH:mm', { locale: ko })}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default HomePage; 