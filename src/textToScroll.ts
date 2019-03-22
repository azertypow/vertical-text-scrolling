import {cssStyle} from "./cssStyle"

const ELEMENT_TO_SCROLL_CLASSNAME = "vts__text-to-scroll"

/**
 * @param element element to vertical scroll
 * @param speed scroll for element, in px/s
 * */
export default function(element: HTMLElement, speed: number) {

  addAnimationStyleOnDocument()

  element.classList.add(ELEMENT_TO_SCROLL_CLASSNAME)

  const d = element.getBoundingClientRect().width

  element.style.animationDuration = `${d / speed}s`
}


function addAnimationStyleOnDocument() {
  const styleElement = document.createElement("style")
  styleElement.innerText = cssStyle;

  document.body.appendChild(styleElement)
}