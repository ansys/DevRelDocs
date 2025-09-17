# PHXLong

## @PHXClassDecorator(PHXTException_Decorator)
### class PHXLong(PHXSimpleType)

The ModelCenter type for longs. This class adds the following features to the [`PHXSimpleType`](PHXSimpleType.md):

- `value`: long
- `valueStr`: the source string for the value, useful for error checking when the value is NaN
- `hasUpperValue`: boolean
- `upperValue`: long
- `hasLowerValue`: boolean
- `lowerValue`: long
- `enumValues`: long[]
- `enumAliases`: String[]

If the variable has an upper or lower bound and an attempt is made to store an invalid value, then an exception will be thrown.

 
#### `def __init__(self, varName)`

- `@param varName`: the name of the variable already declared in the wrapper to reference
- `@type varName`: string
- `@rtype`: void

```python
  varName = checkIsInstance(varName, str)
  self.mcName = varName
```
 
#### `def getValue(self)`

retrieves the current value of the variable

- `@rtype`: long

```python
  return phxPython.longGetValue(self.mcName)
```
 
#### `def setValue(self, val)`

sets the value for the variable

- `@param val`: the value
- `@type val`: long
- `@rtype`: void

```python
  val = checkIsInstance(val, int)
  phxPython.longSetValue(self.mcName, int(val))
```
 
#### `def toString(self)`

converts the variable to a string

- `@rtype`: string

```python
  return phxPython.longToString(self.mcName)
```
 
#### `def fromString(self, val)`

converts a String representation to the internal value

- `@param val`: the value to convert
- `@type val`: string
- `@rtype`: void

```python
  val = checkIsInstance(val, str)
  phxPython.longFromString(self.mcName, val)
```
 
#### `def getEnumAliases(self)`

Gets the enumeration aliases list

- `@rtype`: string[]

```python
  enumAliases = phxPython.longGetEnumAliases(self.mcName).strip()
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
  strVals = multiple_replace(str(aliases), adict)
  phxPython.longSetEnumAliases(self.mcName, strVals)
```
 
#### `def getEnumValues(self)`

Gets the enumeration values list

- `@rtype`: long[]

```python
  enumList = phxPython.longGetEnumValues(self.mcName).strip()
  if enumList != '':
     enumList = phxPython.longGetEnumValues(self.mcName).split(', ')
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

  phxPython.longSetEnumValues(self.mcName, values)
```
 
#### `def getFormat(self)`

retrieves the format of the variable

- `@rtype`: string

```python
  return phxPython.longGetFormat(self.mcName)
```
 
#### `def setFormat(self, format)`

sets the format options

- `@param format`: the new format
- `@type format`: string
- `@rtype`: void

```python
  format = checkIsInstance(format, str)
  phxPython.longSetFormat(self.mcName, format)
```
 
#### `def getHasLowerBound(self)`

retrieves the `hasLowerBound` flag

- `@rtype`: boolean

```python
  return phxPython.longGetHasLowerBound(self.mcName)
```
 
#### `def setHasLowerBound(self, value)`

sets the `hasLowerBound` flag

- `@type value`: boolean
- `@rtype`: void

```python
  value = checkIsInstance(value, bool)
  phxPython.longSetHasLowerBound(self.mcName, value)
```
 
#### `def getHasUpperBound(self)`

retrieves the `hasUpperBound` flag

- `@rtype`: boolean

```python
  return phxPython.longGetHasUpperBound(self.mcName)
```
 
#### `def setHasUpperBound(self, value)`

sets the `hasUpperBound` flag

- `@type value`: boolean
- `@rtype`: void

```python
  value = checkIsInstance(value, bool)
  phxPython.longSetHasUpperBound(self.mcName, value)
```
 
#### `def getLowerBound(self)`

retrieves the current lower bound value

- `@rtype`: long

```python
  return phxPython.longGetLowerBound(self.mcName)
```
 
#### `def setLowerBound(self, value)`

sets the lower bound. The `hasLowerBound` value is set to `true`

- `@param value`: the lower bound
- `@type value`: long
- `@rtype`: void

```python
  value = checkIsInstance(value, int)
  phxPython.longSetLowerBound(self.mcName, value)
```
 
#### `def getUpperBound(self)`

retrieves the current upper bound

- `@rtype`: long

```python
  return phxPython.longGetUpperBound(self.mcName)
```
 
#### `def setUpperBound(self, value)`

sets the upper bound. The `hasUpperBound` value is set to `true`

- `@param value`: the upper bound
- `@type value`: long
- `@rtype`: void

```python
  value = checkIsInstance(value, int)
  phxPython.longSetUpperBound(self.mcName, value)
```
 
#### `def getValueStr(self)`

retrieves the current value of the variable (in string form)

- `@rtype`: string

```python
  return phxPython.longToString(self.mcName)
```
