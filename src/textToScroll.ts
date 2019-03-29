import {cssStyle} from "./cssStyle"
import setAnimation from "./setAnimation"

const PARENT_CONTAINER_CLASSNAME            = "vts"
const PARENT_CONTAINER_IS_REPEAT_CLASSNAME  = "vts--is-repeat"
const ELEMENT_TO_SCROLL_CLASSNAME           = "vts__text-to-scroll"
const REPEAT_CONTAINER_CLASSNAME            = "vts__new-container"

/**
 * @param element element to vertical scroll
 * @param speed scroll for element, in px/s
 * @param textRepeat at the text when it comes out on one side
 * */
export default function(element: HTMLElement, speed: number, textRepeat = false) {

  addAnimationStyleOnDocument()

  let elementToAnimated = element

  const parent = element.parentElement

  if(parent instanceof HTMLElement) {
    parent.classList.add(PARENT_CONTAINER_CLASSNAME)

    if(textRepeat) {
      if(parent.tagName !== "HTML") {

        parent.classList.add(PARENT_CONTAINER_IS_REPEAT_CLASSNAME)

        const elementWidth  = element.getBoundingClientRect().width
        const parentWidth   = parent.getBoundingClientRect().width

        const numberOfElementCanPutInParent = Math.floor(parentWidth / elementWidth)

        console.log("numberOfElementCanPutInParent: ", numberOfElementCanPutInParent)

        const newContainerForRepeatElement = document.createElement("div")
        newContainerForRepeatElement.className = REPEAT_CONTAINER_CLASSNAME

        parent.removeChild(element)

        for(let i = 0; i < numberOfElementCanPutInParent; i++) {
          newContainerForRepeatElement.appendChild(element.cloneNode(true))
        }

        parent.appendChild(newContainerForRepeatElement)

        elementToAnimated = newContainerForRepeatElement
      } else { textRepeat = false}
    } else { textRepeat = false}
  }

  setAnimation(elementToAnimated, speed, ELEMENT_TO_SCROLL_CLASSNAME, textRepeat)
}

function addAnimationStyleOnDocument() {
  const styleElement = document.createElement("style")
  styleElement.innerText = cssStyle;

  document.body.appendChild(styleElement)
}
