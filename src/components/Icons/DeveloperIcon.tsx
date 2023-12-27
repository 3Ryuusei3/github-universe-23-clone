interface IconProps {
  fill?: string;
}

const DeveloperIcon = ({ fill }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill={fill}
    /* {...props} */
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="m16.746 7.17 5.591-5.591a.583.583 0 0 1 .996.412v11.184c0 .52-.628.78-.996.412l-5.591-5.591a.583.583 0 0 1 0-.825ZM7.583 5.834a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Zm-5.25 1.75a5.25 5.25 0 1 1 7 4.951V24.8a5.25 5.25 0 1 1-3.5 0V12.535a5.252 5.252 0 0 1-3.5-4.952Zm23.334-1.75h-2.334v3.5h2.334A2.333 2.333 0 0 1 28 11.667v13.132a5.252 5.252 0 0 0 1.75 10.2 5.25 5.25 0 0 0 1.75-10.2V11.667a5.833 5.833 0 0 0-5.833-5.834ZM5.833 29.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Zm22.167 0a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Z"
      clipRule="evenodd"
    />
  </svg>
)
export default DeveloperIcon
