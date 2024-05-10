import React from 'react';

const Leaderboard = () => {
  // Dummy data for the leaderboard
  const leaderboardData = [
    { name: 'Alice', score: 5, date: '2022-05-10' },
    { name: 'Bob', score: 3, date: '2022-05-09' },
    { name: 'Charlie', score: 4, date: '2022-05-08' },
    // ... more data
  ];

  return (
    <div>
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
              <td>{entry.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
