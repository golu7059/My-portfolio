import React, { useState, useEffect } from "react";

const NotFound = () => {
  const [score, setScore] = useState(0);
  const [ballPosition, setBallPosition] = useState({ top: 50, left: 50 });

  // Randomize ball position
  const moveBall = () => {
    const top = Math.random() * 80; // Within 80% of the container height
    const left = Math.random() * 80; // Within 80% of the container width
    setBallPosition({ top, left });
  };

  // Increment score and move the ball
  const handleBallClick = () => {
    setScore(score + 1);
    moveBall();
  };

  useEffect(() => {
    moveBall(); // Initialize ball position
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-700">
        Oops! The page you’re looking for doesn’t exist. But why not play a game while you're here? 🎮
      </p>
      <div className="relative mt-8 w-80 h-80 border-2 border-dashed border-gray-500 rounded-md bg-gray-50">
        <div
          className="absolute w-10 h-10 bg-red-500 rounded-full shadow-md cursor-pointer transition-all"
          style={{ top: `${ballPosition.top}%`, left: `${ballPosition.left}%` }}
          onClick={handleBallClick}
        ></div>
        <p className="absolute bottom-2 left-2 text-lg font-bold text-gray-600">
          Score: {score}
        </p>
      </div>
      <a
        href="/"
        className="mt-6 px-4 py-2 text-white bg-red-500 rounded-md shadow hover:bg-red-600 transition"
      >
        Back to Home
      </a>
    </div>
  );
};

export default NotFound;
