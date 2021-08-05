const GasIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.746"
        y=".75"
        width="10.95"
        height="19.913"
        rx="1.25"
        stroke="#48494D"
        strokeWidth="1.5"
      />
      <mask id="a" fill="#fff">
        <rect x="3.097" y="3.097" width="8.258" height="7.226" rx="1" />
      </mask>
      <rect
        x="3.097"
        y="3.097"
        width="8.258"
        height="7.226"
        rx="1"
        stroke="#48494D"
        strokeWidth="3"
        mask="url(#a)"
      />
      <path
        d="M12.947 10.834v0c1.184 0 2.143.96 2.143 2.142v2.663c0 1.346.535 3.49 2.499 3.268 1.964-.222 2.32-2.225 2.32-3.652s-.713-4.613-.535-7.304c.179-2.691 1.785-4.998 3.035-5.96"
        stroke="#48494D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x=".498"
        y="20.506"
        width="13.445"
        height=".996"
        rx=".498"
        fill="#48494D"
        stroke="#48494D"
        strokeWidth=".996"
      />
      <path
        d="M20.418 5.478v0A1.893 1.893 0 0121.853 7.5l-.085.874A1.756 1.756 0 0120.02 9.96v0"
        stroke="#48494D"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default GasIcon;
