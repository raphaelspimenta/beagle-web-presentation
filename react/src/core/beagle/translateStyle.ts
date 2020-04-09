import { BeagleUIElement } from '@zup-it/beagle-web'
import { reduce, camelCase, forEach } from 'lodash'

function translateStyle(uiTree: BeagleUIElement<any>) {
  if (uiTree.style) 
    reduce(uiTree.style, (result, value, key) => {
      delete uiTree.style[key]
      return uiTree.style[camelCase(key)] = value
    }, {})
  
  return uiTree
}

function translate(uiTree: BeagleUIElement<any>) {
  translateStyle(uiTree)
  forEach(uiTree.children, translate)

  return uiTree
}

export default translate
