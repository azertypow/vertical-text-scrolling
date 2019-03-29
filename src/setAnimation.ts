/**
 * @param element HTMLElement to scroll
 * @param speed speed for scrolling text, in ms unit
 * @param scrollElementClassName class name for scrolling HTMLElement
 * @param textRepeat, repeat text scrolling option
 *
 * */

export default function (element: HTMLElement, speed: number, scrollElementClassName: string, textRepeat = false) {
  element.classList.add(scrollElementClassName)

  const d = element.getBoundingClientRect().width

  if(textRepeat) speed = speed * 2
  element.style.animationDuration = `${d / speed}s`

  if(textRepeat) {
    const parentContainer = element.parentElement as HTMLElement
    const copyOfElementToAnimate = element.cloneNode(true) as HTMLElement

    parentContainer.appendChild(copyOfElementToAnimate)

    copyOfElementToAnimate.classList.add("copy")
  }
}
