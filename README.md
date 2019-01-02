[![Build Status](https://travis-ci.org/digi1874/digi-refs.svg?branch=master)](https://travis-ci.org)
[![codecov](https://codecov.io/gh/digi1874/digi-refs/branch/master/graph/badge.svg)](https://codecov.io/gh/digi1874/digi-refs)

# digi-refs

## 使用
```
yarn add -D digi digi-refs
```
```
import digi from 'digi'
import refs, { allotId } from 'digi-refs'

digi.plugins([ refs ])

const elementRefId = allotId()
digi({
  ref: elementRefId
})

console.log(refs[elementRefId].outerHTML)
// => "<div></div>"

```


#
- [digi](https://github.com/digi1874/digi)
#
