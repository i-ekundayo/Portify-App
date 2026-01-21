const ProfileCompletion = ({ percentage = 48 }) => {
  const size = 150;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  

  // Dash pattern (controls segment look)
  // const dashArray = `${circumference / 12} ${circumference / 24}`;

  const progressOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-[150px] h-[150px]">
      <svg width={size} height={size} className="-rotate-90">
        {/* Background dashed ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1ABCFE"
          strokeWidth={strokeWidth}
          strokeDasharray="24 24"
          strokeLinecap="round"
        />

        {/* Progress dashed ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1ABCFE"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>

      {/* Center percentage */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-3xl font-semibold font-inter">{percentage}%</span>
      </div>
    </div>
  );
};

export default ProfileCompletion;
