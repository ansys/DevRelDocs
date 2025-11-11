# PHXLongArray

## @PHXClassDecorator(PHXTException_Decorator)
### class PHXLongArray(PHXSimpleArray)

Class wraps an array of [`PHXLong`](PHXLong.md) variables for the ScriptWrapper utility.

 
#### `def __init__(self, varName)`

- `@param varName`: the name of the variable already declared in the wrapper to reference
- `@type varName`: string
- `@rtype`: void

```python
  checkIsInstance(varName, str)
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
  phxPython.longArrayFromString(self.mcName, index, value)
```
 
#### `def toString(self, index="-1")`
```python
  retDict = {
    "'": "",
    "\"": "",
  }
  return multiple_replace(phxPython.longArrayToString(self.mcName, indexListToCSV(index)), retDict)
```
 
#### `def getValue(self, index)`

Gets the value of an element as a long

- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@rtype`: long

```python
  return phxPython.longArrayGetValue(self.mcName, indexListToCSV(index))
```
 
#### `def setValue(self, index, val)`

Sets the value of an element as a long

- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@param val`: value to set
- `@type val`: long
- `@rtype`: void

```python
  val = checkIsInstance(val, int)
  phxPython.longArraySetValue(self.mcName, indexListToCSV(index), val)
```
 
#### `def getLongValue(self, index)`

Gets the value of an element as a long

- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@rtype`: long

```python
  return self.getValue(index)
```
 
#### `def getEnumAliases(self)`

Gets the enumeration aliases list

- `@rtype`: string[]

```python
  enumAliases = phxPython.longArrayGetEnumAliases(self.mcName).strip()
  if enumAliases != '':
     return enumAliases.split(', ')
  else:
     return []
```
 
#### `def setEnumAliases(self, aliases)`

Sets the enumeration aliases list

- `@param aliases`: An array of strings
- `@type aliases`: string (as a comma-separated list) or string[]
- `@rtype`: void

```python
  adict = {
    "[": "",
    "]": "",
    "'": "",
  }
  aliases = multiple_replace(str(aliases), adict)
  phxPython.longArraySetEnumAliases(self.mcName, aliases)
```
 
#### `def getEnumValues(self)`

Gets the enumeration values list

- `@rtype`: long[]

```python
  enumList = phxPython.longArrayGetEnumValues(self.mcName).strip()
  if enumList != '':
     enumList = phxPython.longArrayGetEnumValues(self.mcName).split(', ')
     length = len(enumList)
     for i in range(length)`
         enumList[i] = int(enumList[i])
     return enumList
  else:
     return []
```
 
#### `def setEnumValues(self, values)`

Sets the enumeration values list

- `@param values`: Either a comma-separated list of values or an array of values
- `@type values`: string (as a comma-separated list) or long[]
- `@rtype`: void

```python
  adict = {
    "[": "",
    "]": "",
  }
  values = multiple_replace(str(values), adict)

  # make sure that all elements are integers
  if values != '':
     strList = values.split(',')
     length = len(strList)
     for i in range(length)`
         strList[i] = int(strList[i])
         values = multiple_replace(str(strList), adict)

  phxPython.longArraySetEnumValues(self.mcName, values)
```
 
#### `def getFormat(self)`

retrieves the format of the variable

- `@rtype`: string

```python
  return phxPython.longArrayGetFormat(self.mcName)
```
 
#### `def setFormat(self, format)`

sets the format options

- `@param format`: the new format
- `@type format`: string
- `@rtype`: void

```python
  format = checkIsInstance(format, str)
  phxPython.longArraySetFormat(self.mcName, format)
```
 
#### `def getHasLowerBound(self)`

retrieves the `hasLowerBound` flag

- `@rtype`: boolean

```python
  return phxPython.longArrayGetHasLowerBound(self.mcName)
```
 
#### `def setHasLowerBound(self, value)`

sets the `hasLowerBound` flag

- `@type value`: boolean
- `@rtype`: void

```python
  value = checkIsInstance(value, bool)
  phxPython.longArraySetHasLowerBound(self.mcName, value)
```
 
#### `def getHasUpperBound(self)`

retrieves the `hasUpperBound` flag

- `@rtype`: boolean

```python
  return phxPython.longArrayGetHasUpperBound(self.mcName)
```
 
#### `def setHasUpperBound(self, value)`

sets the `hasUpperBound` flag

- `@type value`: boolean
- `@rtype`: void

```python
  value = checkIsInstance(value, bool)
  phxPython.longArraySetHasUpperBound(self.mcName, value)
```
 
#### `def getLowerBound(self)`

retrieves the current lower bound value

- `@rtype`: long

```python
  return phxPython.longArrayGetLowerBound(self.mcName)
```
 
#### `def setLowerBound(self, value)`

sets the lower bound. The `hasLowerBound` value is set to `true`

- `@param value`: the lower bound
- `@type value`: long
- `@rtype`: void

```python
  value = checkIsInstance(value, int)
  phxPython.longArraySetLowerBound(self.mcName, value)
```
 
#### `def getUpperBound(self)`

retrieves the current upper bound

- `@rtype`: long

```python
  return phxPython.longArrayGetUpperBound(self.mcName)
```
 
#### `def setUpperBound(self, value)`

sets the upper bound. The `hasUpperBound` value is set to `true`

- `@param value`: the upper bound
- `@type value`: long
- `@rtype`: void

```python
  value = checkIsInstance(value, int)
  phxPython.longArraySetUpperBound(self.mcName, value)
```
