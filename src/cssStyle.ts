// language=CSS
export const cssStyle = `
  .vts__text-to-scroll {
      animation: vts__text-scroll-animation 30s infinite linear;
  }
  
  @keyframes vts__text-scroll-animation {
      0% {
          transform: translateX(100%);
      }
  
      100% {
          transform: translateX(-100%);
      }
  }
`