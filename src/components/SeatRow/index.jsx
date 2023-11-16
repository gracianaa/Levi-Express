export const SeatRow = ({ row }) => {
  return (
    <div className="seat-row">
      {row.map((r) => (
        <svg
          key={r.number}
          className={r.isOccupied === false ? 'seat' : 'seat seat--occupied'}
          viewBox="0 0 100 100"
          role="button"
        >
          <rect
            className="seat__rect"
            width="80"
            height="80"
            x="14"
            y="10"
            rx="15"
            ry="15"
          ></rect>
          <path
            className="seat__path"
            d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
          ></path>
          <text className="seat__text" x="55" y="65">
            {r.number}
          </text>
        </svg>
      ))}
    </div>
  );
};
