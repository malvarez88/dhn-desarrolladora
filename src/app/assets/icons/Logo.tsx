const Logo: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = ({
  className,
  width = 500,
  height = 200,
  ...rest
}) => (
  <svg
    id="Layer_2"
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 333.95 264.86"
    width={width}
    height={height}
    {...rest}
  >
    <path
      d="M191.98,10.03v50.6c0,3.58-1.91,6.91-5.03,8.68-10.2,5.79-19.52,13.34-27.48,22.41-6.42,7.31-11.8,15.4-16.04,24.05h-1.45V10.03c0-5.54,4.49-10.03,10.03-10.03h29.94c5.54,0,10.03,4.49,10.03,10.03Z"
      fill="#3f68b8"
      strokeWidth="0"
    />
    <path
      d="M333.95,165.31v89.52c0,5.54-4.49,10.03-10.03,10.03h-29.94c-5.54,0-10.03-4.49-10.03-10.03v-89.52c0-27.32-20.63-49.54-45.99-49.54s-45.98,22.22-45.98,49.54c0,25.81-9.47,49.32-25,67-2.21,2.52-4.54,4.92-6.99,7.19-5.47,5.09-11.51,9.53-18.01,13.21-13.66,7.75-29.33,12.15-45.99,12.15C42.98,264.86,0,220.29,0,165.31s42.98-99.54,95.99-99.54h45.99v50h-45.99c-25.36,0-45.99,22.22-45.99,49.54s20.63,49.55,45.99,49.55c16.46,0,30.93-9.36,39.05-23.41,4.4-7.59,6.94-16.55,6.94-26.14,0-18.04,4.62-34.96,12.73-49.54,3.47-6.28,7.59-12.13,12.27-17.45,7.15-8.15,15.6-15.07,25-20.41,13.65-7.74,29.32-12.14,45.98-12.14,53.02,0,95.99,44.57,95.99,99.54Z"
      fill="#223863"
      strokeWidth="0"
    />
    <polygon
      points="141.98 115.77 131.26 65.77 141.98 65.77 141.98 115.77"
      fill="rgba(5, 8, 14, .5)"
      strokeWidth="0"
    />
  </svg>
);
export default Logo;