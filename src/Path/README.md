# Path

A helper to get the Type of the value in an object by path.
It will error if there are some nonexistent properties.

## Usage

```js
import type {Path} from 'flown'

;({hoh: 'hoh'}: Path<{hey: {hoh: 'hoh'}}, ['hey']>)
;('hoh': Path<{hey: {hoh: 'hoh'}}, ['hey', 'hoh']>)

// error
;(null: Path<{hey: {hoh: 'hoh'}}, ['hey', 'hoh', 'hah']>)
```
