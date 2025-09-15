# PHXSimpleArray

## @PHXClassDecorator(PHXTException_Decorator)

### class PHXSimpleArray(PHXSimpleType)

This class enables components to create resizeable arrays where the number of dimensions is variable as well as the size of each dimension.

Typically you don't use this class directly but one of its sub-classes that are created and passed to you automatically.


#### `def __init__(self, varName)`

- `@param varName`: the name of the variable already declared in the wrapper to reference
- `@type varName`: string
- `@rtype`: void

```python
  varName = checkIsInstance(varName, str)
  self.mcName = varName
```
 
#### `def toString(self)`

Returns the string form of this array. Puts each element in quotes, even if it is a number and backslashes any quote or backslash characters (" and \\).

- `@rtype`: string

```python
  return phxPython.arrayToString(self.mcName)
```
 
#### `def fromString(self, value)`

reads in the entire array in string form.  An example 2D array specification would be:

```python
 bounds[3,2] { 1,2,3,4,5,6 }
```

- `@param value`: the value of the array
- `@type value`: string
- `@rtype`: void

```python
  phxPython.arrayFromString(self.mcName, value)
```
 
#### `def getDimensions(self)`

gets the dimensions of the array

- `@rtype`: int[]

```python
  dims = phxPython.arrayGetDimensions(self.mcName).split(', ')
  try:
     for i in range(len(dims))`
        dims[i] = int(dims[i])
  except RuntimeError:
     pass
  return dims
```
 
#### `def setDimensions(self, dim)`

Sets the dimensions of the array. Will preserve as many element values as possible.

- `@param dim`: the new dimensions for the array
- `@type dim`: int[]
- `@rtype`: void

```python
  phxPython.arraySetDimensions(self.mcName, indexListToCSV(dim))
```
 
#### `def getNumDimensions(self)`

Gets the number of dimensions of the array

- `@rtype`: int

```python
  return phxPython.arrayGetNumDimensions(self.mcName)
```
 
#### `def resize(self, newSize)`

Resize the nD array to the new size specified. Preserve elements if the # of dimensions stays the same, else initialize the array with default values.

- `@param newSize`: the new dimensions for the array
- `@type newSize`: int[]
- `@rtype`: void

```python
  self.setDimensions(newSize)
```
 
#### `def getLockResize(self)`

Determine whether the array can current be resized or not.

- `@rtype`: boolean

```python
  return phxPython.arrayGetLockResize(self.mcName)
```
 
#### `def setLockResize(self, lockResize)`

Tells this array that it cannot be resized. Implies `lockDimensions`.

- `@type lockResize`: boolean
- `@rtype`: void

```python
  lockResize = checkIsInstance(lockResize, bool)
  phxPython.arraySetLockResize(self.mcName, lockResize)
```
 
#### `def getLength(self, dim=0)`

Gets the length of the first dimension of the array.

- `@param dim`: the dimension of interest (default is 0)
- `@type dim`: int
- `@rtype`: int

```python
  dim = checkIsInstance(dim, int)
  return phxPython.arrayGetLength(self.mcName, dim)
```
 
#### `def setLength(self, length, dim=0)`

Sets the length of the first dimension of the array. Will preserve as many element values as possible.

- `@param length`: the new length of the 1D array
- `@type length`: int
- `@param dim`: the dimension of interest (default is 0)
- `@type dim`: int
- `@rtype`: void

```python
  length = checkIsInstance(length, int)
  dim = checkIsInstance(dim, int)
  phxPython.arraySetLength(self.mcName, length, dim)
```
 
#### `def lockDimensions(self)`

Tells this array that the number of dimensions cannot be changed from what they are right now.

- `@rtype`: void

```python
  phxPython.arrayLockDimensions(self.mcName)
```
