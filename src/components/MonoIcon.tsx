import React from "react";

export type MonoIconName = "Email" | "Phone" | "LinkedIn" | "GitHub" | "Tistory" | "Velog";

interface MonoIconProps {
  name: MonoIconName;
  size?: number;
}

const MonoIcon: React.FC<MonoIconProps> = ({ name, size = 16 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor" as const,
    xmlns: "http://www.w3.org/2000/svg",
  };

  switch (name) {
    case "Email":
      return (
        <svg {...common}>
          <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2 .5v.2l8 5 8-5v-.2H4zm16 2.7-8 5-8-5V18h16V9.2z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...common}>
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zm7 0h3.83v1.98h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.15V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.7-2.5 3.43V23h-4V8.5z" />
        </svg>
      );
    case "GitHub":
      return (
        <svg {...common}>
          <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.38-3.88-1.38-.53-1.35-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.73 1.26 3.39.96.11-.76.41-1.26.75-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.12-3.17 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.64 1.65.24 2.87.12 3.17.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.41-5.25 5.69.42.37.8 1.1.8 2.22v3.29c0 .31.21.66.8.55A11.5 11.5 0 0 0 12 .5z" />
        </svg>
      );
    case "Tistory":
      return (
        <svg {...common}>
          <path d="M4 4h16v3H13v13h-2V7H4z" />
        </svg>
      );
    case "Velog":
      return (
        <svg {...common}>
          <path d="M7 6h2l3 9 3-9h2l-4 12h-2L7 6z" />
        </svg>
      );
    case "Phone":
      return (
        <svg {...common}>
          <path d="M6.6 2h10.8A1.6 1.6 0 0 1 19 3.6v16.8A1.6 1.6 0 0 1 17.4 22H6.6A1.6 1.6 0 0 1 5 20.4V3.6A1.6 1.6 0 0 1 6.6 2zm0 2v12.8h10.8V4H6.6zm5.4 15.6a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" />
        </svg>
      );
    default:
      return null;
  }
};

export default MonoIcon;
