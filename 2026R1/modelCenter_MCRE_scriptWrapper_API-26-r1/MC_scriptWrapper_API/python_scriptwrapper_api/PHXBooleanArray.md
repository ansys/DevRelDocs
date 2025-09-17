# PHXBooleanArray

## @PHXClassDecorator(PHXTException_Decorator)

### class PHXBooleanArray(PHXSimpleArray)

Class wraps an array of [`PHXBoolean`](PHXBoolean.md) variables for the ScriptWrapper utility.
 
#### `def __init__(self, varName)`

- `@param varName`: the name of the variable already declared in the wrapper to reference
- `@type varName`: string
- `@rtype`: void

```python
  varName = checkIsInstance(varName, str)
  self.mcName = varName
```
 
#### `def fromString(self, arg1, arg2=False)`

Sets the value of a single element based on string input. Data is converted as appropriate.

- **NOTE**: if only one argument is provided, then the `fromString()` from [`PHXSimpleArray`](PHXSimpleArray.md) is used.
- `@param arg1`: Index to which element to set.
- `@type arg1`: string (as a comma-separated list of indices), int[], or int
- `@param arg2`: The new value.
- `@type arg2`: string
- `@rtype`: void

```python
  index = arg1
  value = arg2
  if isinstance(arg2, str)`
     index = indexListToCSV(arg1)
  else:
     index = str(-1)
     value = str(arg1)
  phxPython.boolArrayFromString(self.mcName, index, value)
```
 
#### `def getValue(self, index)`

Gets the value of an element as a [`PHXBoolean`](PHXBoolean.md) object

- `@param index`: The array index
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@rtype`: boolean

```python
  return phxPython.boolArrayGetValue(self.mcName, indexListToCSV(index))
```
 
#### `def getBooleanValue(self, index)`

Gets the value of an element as a boolean

- `@param index`: The array index
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@rtype`: boolean

```python
  index = checkIsInstance(index, (int, list, str))
  return self.getValue(index)
```
 
#### `def getValueStr(self, index)`

Gets the value of an element as a string

- `@param index`: The array index
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@rtype`: string

```python
  index = checkIsInstance(index, (int, list, str))
  return phxPython.boolArrayGetValueStr(self.mcName, index)
```
 
#### `def setValue(self, index, value)`

sets an element as a double

- `@param index`: The array index
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@param value`: value to set
- `@type value`: boolean
- `@rtype`: void

```python
  value = checkIsInstance(value, bool)
  phxPython.boolArraySetValue(self.mcName, indexListToCSV(index), value)
```
 
#### `def toString(self, index="-1")`

Returns the array as a string.

- `@param index`: The array index
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@rtype`: string

```python
  retDict = {
    "'": "",
    "t": "T",
    "f": "F",
    "\"": "",
  }
  return multiple_replace(phxPython.boolArrayToString(self.mcName, indexListToCSV(index)), retDict)
```
