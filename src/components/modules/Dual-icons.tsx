const DualIcon = () => {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/rafał-ziółkowski-23159b210/"
        className="rounded-full w-14 h-14 flex items-center justify-center bg-secondary transition-colors duration-300 hover:bg-primary group"
      >
        <svg
          width="28"
          height="31"
          viewBox="0 0 28 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1_782)">
            <path
              d="M6.39825 7.79676C7.70735 7.79676 8.76858 6.73552 8.76858 5.42642C8.76858 4.11733 7.70735 3.05609 6.39825 3.05609C5.08915 3.05609 4.02792 4.11733 4.02792 5.42642C4.02792 6.73552 5.08915 7.79676 6.39825 7.79676Z"
              fill="#E2B33D"
              className="transition-colors duration-300 group-hover:fill-[#1A1A1A]"
            />
            <path
              d="M11.0068 9.59291V22.7435H15.0898V16.2402C15.0898 14.5242 15.4127 12.8624 17.5403 12.8624C19.6388 12.8624 19.6648 14.8243 19.6648 16.3486V22.7446H23.75V15.5328C23.75 11.9903 22.9873 9.26791 18.8468 9.26791C16.8589 9.26791 15.5264 10.3588 14.9815 11.3912H14.9263V9.59291H11.0068ZM4.35292 9.59291H8.4425V22.7435H4.35292V9.59291Z"
              fill="#E2B33D"
              className="transition-colors duration-300 group-hover:fill-[#1A1A1A]"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_782"
              x="-3"
              y="0"
              width="34"
              height="34"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_782"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_782"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </a>

      <a
        href="https://github.com/Eternista/Portfolio"
        className="rounded-full w-14 h-14 flex items-center justify-center bg-secondary transition-colors duration-300 hover:bg-primary group"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0282 2.16666C7.06009 2.16666 2.22301 7.00374 2.22301 12.9718C2.22301 17.745 5.31809 21.7956 9.61242 23.2256C10.153 23.3231 10.348 22.9905 10.348 22.7045C10.348 22.4477 10.3393 21.7674 10.3361 20.8672C7.32984 21.5193 6.69501 19.4177 6.69501 19.4177C6.20534 18.1697 5.49576 17.8371 5.49576 17.8371C4.51534 17.1665 5.57051 17.1817 5.57051 17.1817C6.65601 17.2575 7.22476 18.2953 7.22476 18.2953C8.18892 19.9463 9.75542 19.4697 10.3686 19.1934C10.4672 18.4947 10.7488 18.018 11.0565 17.7482C8.65801 17.4763 6.13601 16.549 6.13601 12.4074C6.13601 11.2298 6.55742 10.2635 7.24534 9.50949C7.13592 9.23541 6.76217 8.13582 7.35259 6.64949C7.35259 6.64949 8.25934 6.35807 10.3231 7.75557C11.2045 7.5158 12.1137 7.39341 13.0271 7.39157C13.9405 7.39306 14.8498 7.51545 15.7311 7.75557C17.7959 6.35699 18.7016 6.64949 18.7016 6.64949C19.292 8.13582 18.9215 9.23541 18.8088 9.50949C19.5022 10.2635 19.9182 11.2287 19.9182 12.4074C19.9182 16.5598 17.394 17.472 14.9868 17.7396C15.3714 18.0732 15.7181 18.7319 15.7181 19.7394C15.7181 21.1846 15.7051 22.3502 15.7051 22.7045C15.7051 22.9937 15.8979 23.3296 16.4493 23.2234C20.7415 21.7912 23.8333 17.7439 23.8333 12.9718C23.8333 7.00374 18.9963 2.16666 13.0282 2.16666Z"
            fill="#E2B33D"
            className="transition-colors duration-300 group-hover:fill-[#1A1A1A]"
          />
        </svg>
      </a>
    </>
  );
};

export default DualIcon;
