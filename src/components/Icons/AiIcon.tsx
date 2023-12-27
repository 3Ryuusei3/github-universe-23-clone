interface IconProps {
  fill?: string;
}

const AiIcon = ({ fill }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill={fill}
  >
    <g fill={fill} clipPath="url(#a)">
      <path
        fillRule="evenodd"
        d="M18.662 35.081c10.853 0 18.671-7.068 18.671-8.854v-4.37c-.162-1.455-1.555-3.987-3.713-4.886-.03-.164-.057-.333-.084-.51a10.9 10.9 0 0 0-.296-1.428c.47-1.186.593-2.528.593-3.862 0-2.032-.297-4.129-1.616-5.798-1.351-1.71-3.487-2.623-6.357-2.942-2.814-.312-5.277.08-6.869 1.785a5.407 5.407 0 0 0-.333.384 5.25 5.25 0 0 0-.325-.384c-1.591-1.705-4.055-2.097-6.868-1.785-2.87.32-5.006 1.232-6.357 2.942-1.32 1.67-1.617 3.766-1.617 5.798 0 1.334.124 2.676.593 3.862-.155.534-.228 1.002-.295 1.428a17.34 17.34 0 0 1-.085.51c-2.157.899-3.55 3.43-3.713 4.887v4.369c0 1.787 7.819 8.854 18.671 8.854ZM25.473 5.91c-2.436-.27-3.472.212-3.923.694-.476.51-.836 1.583-.564 3.766.212 1.694.706 2.87 1.442 3.622.698.712 1.83 1.262 3.822 1.262 2.152 0 2.986-.464 3.364-.886.418-.466.72-1.349.72-3.197 0-1.787-.287-2.898-.863-3.629-.545-.69-1.618-1.368-3.998-1.632Zm-9.695.694c-.45-.482-1.487-.965-3.924-.694-2.38.264-3.452.943-3.997 1.632-.577.73-.863 1.842-.863 3.629 0 1.848.302 2.732.72 3.197.378.422 1.212.886 3.364.886 1.992 0 3.124-.55 3.822-1.262.736-.751 1.23-1.928 1.441-3.622.273-2.183-.088-3.256-.563-3.766Zm2.884 25.013c5.32 0 10.695-2.59 11.671-3.344v-9.929l-.054-.27c-1.143.49-2.507.68-4.029.68-2.675 0-4.805-.764-6.323-2.313a7.519 7.519 0 0 1-1.26-1.733 7.557 7.557 0 0 1-1.27 1.733c-1.517 1.549-3.647 2.313-6.322 2.313-1.522 0-2.886-.19-4.03-.68l-.054.27v9.93c.976.753 6.352 3.343 11.671 3.343Z"
        clipRule="evenodd"
      />
      <path d="M14.583 21.087c.967 0 1.75.784 1.75 1.75v3.5a1.75 1.75 0 1 1-3.5 0v-3.5c0-.966.784-1.75 1.75-1.75ZM24.5 22.837a1.75 1.75 0 1 0-3.5 0v3.5a1.75 1.75 0 1 0 3.5 0v-3.5Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill={fill} d="M0 0h37.333v37.333H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default AiIcon
