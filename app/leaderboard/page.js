import React from 'react';

const LeaderboardPage = () => {
  // Dummy data for leaderboard
  const leaderboardData = [
    { name: 'Alice', score: 5, date: '2024-05-10' },
    { name: 'Bob', score: 3, date: '2024-05-09' },
    { name: 'Charlie', score: 4, date: '2024-05-08' },
    // More entries can be added here
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-6">Leaderboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Score</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {leaderboardData.map((entry, index) => (
              <tr key={index} className="border-b">
                <td className="border px-4 py-2">{entry.name}</td>
                <td className="border px-4 py-2">{entry.score}</td>
                <td className="border px-4 py-2">{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardPage;
