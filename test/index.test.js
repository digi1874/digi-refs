import refs, { allotId } from '../src/main'

test('测试 propertiy 值为 ref', () => {
  expect(refs.propertiy).toBe('ref')
})

test('测试分配id', () => {
  for (let i = 0; i < 10; i ++) {
    expect(allotId()).toBe(i)
  }
})

test('测试指向', () => {
  const id = allotId()
  const element = document.createElement('div')
  refs.fun(element, id)

  expect(refs[id].outerHTML).toBe(element.outerHTML)
})

test('测试指向多个', () => {
  const id = allotId()
  const element1 = document.createElement('div')
  const element2 = document.createElement('p')
  const element3 = document.createElement('a')
  refs.fun(element1, id)
  refs.fun(element2, id)
  refs.fun(element3, id)

  expect(refs[id][0].outerHTML).toBe(element1.outerHTML)
  expect(refs[id][1].outerHTML).toBe(element2.outerHTML)
  expect(refs[id][2].outerHTML).toBe(element3.outerHTML)
})

test('测试元素移除时也删除指向（单个）', () => {
  const id = allotId()
  const element = document.createElement('div')
  refs.fun(element, id)
  element.remove()

  expect(refs[id]).toBe(undefined)
})

test('测试元素移除时也删除指向（多个）', () => {
  const id = allotId()
  const element1 = document.createElement('div')
  const element2 = document.createElement('p')
  refs.fun(element1, id)
  refs.fun(element2, id)

  element1.remove()
  expect(refs[id][0].outerHTML).toBe(element2.outerHTML)

  element2.remove()
  expect(refs[id]).toBe(undefined)
})
