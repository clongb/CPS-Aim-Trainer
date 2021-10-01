import { Col } from 'react-bootstrap';
import { Result } from '../interfaces/result';
import Redis from 'ioredis';
import { Leaderboard, PeriodicLeaderboard, LeaderboardMatrix } from 'redis-rank';

/*
export function PrintLeaderboard({leaderboard}: {leaderboard: Result[]}): JSX.Element {
    const client = new Redis({
        host: "127.0.0.1",
        port: 6379
    });
    const lb = new Leaderboard(client, 'lb:example', {
        sortPolicy: 'high-to-low',
        updatePolicy: 'best'
    });

}*/