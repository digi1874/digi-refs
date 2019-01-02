/**
 * 用来指向元素
 */
const refs = {}
// 可用于指向名，避免命名冲突
let id = 0
let arrayTag = toString.call([])
Object.defineProperties(refs, {
  propertiy: { value: 'ref' },
  fun: { value: (element, id) => {
    // 设置指向
    if (refs[id]) {
      // 指向多个
      if (toString.call(refs[id]) !== arrayTag) {
        refs[id] = [refs[id]]
      }
      refs[id].push(element)
    } else {
      refs[id] = element
    }
    element.oldRemove = element.remove
    element.remove = () => {
      // 元素移除时，删除指向
      if (toString.call(refs[id]) !== arrayTag) {
        delete refs[id]
      } else {
        refs[id].splice(refs[id].indexOf(element), 1)
        if (refs[id].length === 0) {
          delete refs[id]
        }
      }
      element.oldRemove()
    }
  } },
  allotId: { value: () => id ++ }
})

export const allotId = refs.allotId

export default refs
