// language=CSS
export const cssStyle = `
  .vts.vts--is-repeat {
      display: flex;
  }
  
  .vts__text-to-scroll {
      animation: vts__text-scroll-animation 30s infinite linear;
  }
  
  .vts--is-repeat .vts__text-to-scroll {
      animation: vts__text-scroll-animation--repeat-first 30s infinite linear;
  }

  .vts__new-container {
      white-space: nowrap;
  }
  
  .vts__new-container > * {
      white-space: normal;
  }

  .vts__new-container.vts__text-to-scroll {
      display: flex;
  }

  .vts--is-repeat .vts__new-container {
      flex-shrink: 0;
  }

  /* simple text scrolling animation*/
  @keyframes vts__text-scroll-animation {
      0% {
          transform: translateX(100%);
      }

      100% {
          transform: translateX(-100%);
      }
  }
  
  /* repeat text scrolling animation */
  @keyframes vts__text-scroll-animation--repeat-first {
      0% {
          transform: translateX(0%);
      }
      
      100% {
          transform: translateX(-100%);
      }
  }
`