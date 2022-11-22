export const ArrowRight = () => {
  return (
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity=".498">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.503 1.513a2.118 2.118 0 0 1 2.994 0l5.99 5.99a2.118 2.118 0 0 1 0 2.994l-5.99 5.99a2.118 2.118 0 0 1-2.994-2.995L11.995 9 7.503 4.508a2.118 2.118 0 0 1 0-2.995Z"
          fill="#3A4562"
        />
        <mask
          id="a"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="6"
          y="0"
          width="12"
          height="18"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.503 1.513a2.118 2.118 0 0 1 2.994 0l5.99 5.99a2.118 2.118 0 0 1 0 2.994l-5.99 5.99a2.118 2.118 0 0 1-2.994-2.995L11.995 9 7.503 4.508a2.118 2.118 0 0 1 0-2.995Z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#a)">
          <path fill="#7D859C" />
        </g>
      </g>
    </svg>
  );
};
