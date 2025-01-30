import React from "react";

export default function Loader() {
  return (
    <div className="loader-container">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="loader-dot"
          style={{
            animation: `jump 1s ease-in-out calc(1s * -${(4 - index) * 0.15}) infinite`,
          }}
        ></div>
      ))}

      <style jsx>{`
        .loader-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          width: 47px;
          height: 23.5px;
        }

        .loader-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: black;
        }

        /* Dark mode styles */
        @media (prefers-color-scheme: dark) {
          .loader-dot {
            background-color: white;
          }
        }

        @keyframes jump {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-200%);
          }
        }
      `}</style>
    </div>
  );
}
