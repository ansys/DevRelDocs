# PHXDoubleArray

## @PHXClassDecorator(PHXTException_Decorator)
### class PHXDoubleArray(PHXSimpleArray)

Class wraps an array of [`PHXDouble`](PHXDouble.md) variables for the ScriptWrapper utility.

 
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
  phxPython.dblArrayFromString(self.mcName, index, value)
```
 
#### `def toString(self, index="-1")`

```python
  retDict = {
    "'": "",
    "\"": "",
  }
  return multiple_replace(phxPython.dblArrayToString(self.mcName, indexListToCSV(index)), retDict)
```
 
#### `def getValue(self, index)`

Gets an element as a double

- `@param index`: The array index
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@rtype`: double

```python
  return phxPython.dblArrayGetValue(self.mcName, indexListToCSV(index))
```
 
#### `def setValue(self, index, val)`

sets an element as a double

- `@param index`: The array index
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@param val`: value to set
- `@type val`: double
- `@rtype`: void

```python
  val = checkIsInstance(val, float)
  phxPython.dblArraySetValue(self.mcName, indexListToCSV(index), val)
```
 
#### `def getDoubleValue(self, index)`

Gets an element as a double

- `@param index`: The array index
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@rtype`: double

```python
  return self.getValue(index)
```
 
#### `def getEnumAliases(self)`

Gets the enumeration aliases list

- `@rtype`: string[]

```python
  enumAliases = phxPython.dblArrayGetEnumAliases(self.mcName).strip()
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
  phxPython.dblArraySetEnumAliases(self.mcName, aliases)
```
 
#### `def getEnumValues(self)`

Gets the enumeration values list

- `@rtype`: double[]

```python
  enumList = phxPython.dblArrayGetEnumValues(self.mcName).strip()
  if enumList != '':
     enumList = enumList.split(', ')
     length = len(enumList)
     for i in range(length)`
         enumList[i] = float(enumList[i])
     return enumList
  else:
     return []
```
 
#### `def setEnumValues(self, values)`

Sets the enumeration values list

- `@param values`: Either a comma-separated list of values or an array of values
- `@type values`: string (as a comma-separated list) or double[]
- `@rtype`: void

```python
  adict = {
    "[": "",
    "]": "",
    "'": "",
  }
  values = multiple_replace(str(values), adict).strip()

  # make sure that all elements are numbers
  if values != '':
     strList = values.split(',')
     length = len(strList)
     for i in range(length)`
         strList[i] = float(strList[i])
     values = multiple_replace(str(strList), adict)

  phxPython.dblArraySetEnumValues(self.mcName, values)
```
 
#### `def getFormat(self)`

retrieves the format of the variable

- `@rtype`: string

```python
  return phxPython.dblArrayGetFormat(self.mcName)
```
 
#### `def setFormat(self, format)`

sets the format options

- `@param format`: the new format
- `@type format`: string
- `@rtype`: void

```python
  format = checkIsInstance(format, str)
  phxPython.dblArraySetFormat(self.mcName, format)
```
 
#### `def getHasLowerBound(self)`

retrieves the `hasLowerBound` flag

- `@rtype`: boolean

```python
  return phxPython.dblArrayGetHasLowerBound(self.mcName)
```
 
#### `def setHasLowerBound(self, value)`

sets the lower bound. The `hasLowerBound` value is set to `true`

- `@type value`: boolean
- `@rtype`: void

```python
  value = checkIsInstance(value, bool)
  phxPython.dblArraySetHasLowerBound(self.mcName, value)
```
 
#### `def getHasUpperBound(self)`

retrieves the `hasUpperBound` flag

- `@rtype`: boolean

```python
  return phxPython.dblArrayGetHasUpperBound(self.mcName)
```
 
#### `def setHasUpperBound(self, value)`

sets the `hasUpperBound` flag

- `@type value`: boolean
- `@rtype`: void

```python
  value = checkIsInstance(value, bool)
  phxPython.dblArraySetHasUpperBound(self.mcName, value)
```
 
#### `def getLowerBound(self)`

retrieves the current lower bound value

- `@rtype`: double

```python
  return phxPython.dblArrayGetLowerBound(self.mcName)
```
 
#### `def setLowerBound(self, value)`

sets the lower bound. The `hasLowerBound` value is set to `true`

- `@param value`: the lower bound
- `@type value`: double
- `@rtype`: void

```python
  value = checkIsInstance(value, float)
  phxPython.dblArraySetLowerBound(self.mcName, value)
```
 
#### `def getUpperBound(self)`

retrieves the current upper bound value

- `@rtype`: double

```python
  return phxPython.dblArrayGetUpperBound(self.mcName)
```
 
#### `def setUpperBound(self, value)`

sets the upper bound. The `hasUpperBound` value is set to `true`

- `@param value`: the upper bound
- `@type value`: double
- `@rtype`: void

```python
  value = checkIsInstance(value, float)
  phxPython.dblArraySetUpperBound(self.mcName, value)
```
