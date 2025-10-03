# PHXDouble

## @PHXClassDecorator(PHXTException_Decorator)

### class PHXDouble(PHXSimpleType)

The ModelCenter type for doubles. This class adds the following features to the [`PHXSimpleType`](PHXSimpleType.md):

- `value`: double
- `valueStr`: the source string for the value, useful for error checking when the value is NaN
- `hasUpperValue`: boolean
- `upperValue`: double
- `hasLowerValue`: boolean
- `lowerValue`: double
- `enumValues`: double[]
- `enumValues`: string[]

If the variable has an upper or lower bound and an attempt is made to store an invalid value, then an exception will be thrown.

 
#### `def __init__(self, varName)`

initializes value to zero without upper or lower bounds

- `@param varName`: the name of the variable already declared in the wrapper to reference
- `@type varName`: string
- `@rtype`: void

```python
  varName = checkIsInstance(varName, str)
  self.mcName = varName
```
 
#### `def getValue(self)`

retrieves the current value of the variable

- `@rtype`: double

```python
  return phxPython.dblGetValue(self.mcName)
```
 
#### `def setValue(self, val)`

sets the value for the variable

- `@param val`: the value
- `@type val`: double
- `@rtype`: void

```python
  val = checkIsInstance(val, float)
  phxPython.dblSetValue(self.mcName, val)
```
 
#### `def toString(self)`

converts the variable to a string

- `@rtype`: string

```python
  return phxPython.dblToString(self.mcName)
```
 
#### `def fromString(self, val)`

converts a String representation to the internal value

- `@param val`: the value to convert
- `@type val`: string
- `@rtype`: void

```python
  val = checkIsInstance(val, str)
  phxPython.dblFromString(self.mcName, val)
```
 
#### `def getEnumAliases(self)`

Gets the enumeration aliases list

- `@rtype`: string[]

```python
  enumAliases = phxPython.dblGetEnumAliases(self.mcName).strip()
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
  phxPython.dblSetEnumAliases(self.mcName, aliases)
```
 
#### `def getEnumValues(self)`

Gets the enumeration values list

- `@rtype`: double[]

```python
  enumList = phxPython.dblGetEnumValues(self.mcName).strip()
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
  }
  values = multiple_replace(str(values), adict)

  # make sure that all elements are integers
  if values != '':
     strList = values.split(',')
     length = len(strList)
     for i in range(length)`
         strList[i] = float(strList[i])
     values = multiple_replace(str(strList), adict)

  phxPython.dblSetEnumValues(self.mcName, values)
```
 
#### `def getFormat(self)`

retrieves the format of the variable

- `@rtype`: string

```python
  return phxPython.dblGetFormat(self.mcName)
```
 
#### `def setFormat(self, format)`

sets the format options

- `@param format`: the new format
- `@type format`: string
- `@rtype`: void

```python
  format = checkIsInstance(format, str)
  phxPython.dblSetFormat(self.mcName, format)
```
 
#### `def getHasLowerBound(self)`

retrieves the `hasLowerBound` flag

- `@rtype`: boolean

```python
  return phxPython.dblGetHasLowerBound(self.mcName)
```
 
#### `def setHasLowerBound(self, value)`

sets the lower bound. The `hasLowerBound` value is set to `true`

- `@type value`: boolean
- `@rtype`: void

```python
  value = checkIsInstance(value, bool)
  phxPython.dblSetHasLowerBound(self.mcName, value)
```
 
#### `def getHasUpperBound(self)`

retrieves the `hasUpperBound` flag

- `@rtype`: boolean

```python
  return phxPython.dblGetHasUpperBound(self.mcName)
```
 
#### `def setHasUpperBound(self, value)`

sets the `hasUpperBound` flag

- `@type value`: boolean
- `@rtype`: void

```python
  value = checkIsInstance(value, bool)
  phxPython.dblSetHasUpperBound(self.mcName, value)
```
 
#### `def getLowerBound(self)`

retrieves the current lower bound value

- `@rtype`: double

```python
  return phxPython.dblGetLowerBound(self.mcName)
```
 
#### `def setLowerBound(self, value)`

sets the lower bound. The `hasLowerBound` value is set to `true`

- `@param value`: the lower bound
- `@type value`: double
- `@rtype`: void

```python
  value = checkIsInstance(value, float)
  phxPython.dblSetLowerBound(self.mcName, value)
```
 
#### `def getUpperBound(self)`

retrieves the current upper bound value

- `@rtype`: double

```python
  return phxPython.dblGetUpperBound(self.mcName)
```
 
#### `def setUpperBound(self, value)`

sets the upper bound. The `hasUpperBound` value is set to `true`

- `@param value`: the upper bound
- `@type value`: double
- `@rtype`: void

```python
  value = checkIsInstance(value, float)
  phxPython.dblSetUpperBound(self.mcName, value)
```
 
#### `def getValueStr(self)`

retrieves the current value of the variable (in string form)

- `@rtype`: string

```python
  return phxPython.dblToString(self.mcName)
```
