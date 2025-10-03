# PHXStringArray

## @PHXClassDecorator(PHXTException_Decorator)

### class PHXStringArray(PHXSimpleArray)

Class wraps an array of [`PHXString`](PHXString.md) variables for the scriptWrapper utility.

 
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
  phxPython.strArrayFromString(self.mcName, index, value)
```
 
#### `def toString(self, index="-1")`

 ```python
  retDict = {
    "'": "",
    "\"": "",
  }
  return multiple_replace(phxPython.strArrayToString(self.mcName, indexListToCSV(index)), retDict)
```
 
#### `def getValue(self, index)`

Gets a particular element as a String

- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@rtype`: string

```python
  return phxPython.strArrayGetValue(self.mcName, indexListToCSV(index))
```
 
#### `def setValue(self, index, val)`

Sets the value of an element as a long

- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@param val`: value to set
- `@type val`: string
- `@rtype`: void

```python
  val = checkIsInstance(val, str)
  phxPython.strArraySetValue(self.mcName, indexListToCSV(index), str(val))
```
 
#### `def getStringValue(self, index)`

Gets a particular element as a String

- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@rtype`: string

```python
  return self.getValue(index)
```
 
#### `def getEnumAliases(self)`

Gets the enumeration aliases list

- `@rtype`: string[]

```python
  enumAliases = phxPython.strArrayGetEnumAliases(self.mcName).strip()
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
  strAliases = multiple_replace(str(aliases), adict)
  phxPython.strArraySetEnumAliases(self.mcName, strAliases)
```
 
#### `def getEnumValues(self)`

Gets the enumeration values list

- `@rtype`: string[]

```python
  enumValues = phxPython.strArrayGetEnumValues(self.mcName).strip()
  if enumValues != '':
     return enumValues.split(', ')
  else:
     return []
```
 
#### `def setEnumValues(self, values)`

Sets the enumeration values list

- `@param values`: Either a comma-separated list of values or an array of values
- `@type values`: string (as a comma-separated list) or string[]
- `@rtype`: void

```python
  adict = {
  "[": "",
  "]": "",
  "'": "",
  }
  strVals = multiple_replace(str(values), adict)
  phxPython.strArraySetEnumValues(self.mcName, strVals)
```
