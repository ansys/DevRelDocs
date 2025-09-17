# PHXString

## @PHXClassDecorator(PHXTException_Decorator)
### class PHXString(PHXSimpleType)

The ModelCenter type for Strings. 

This class adds the following features to the [`PHXSimpleType`](PHXSimpleType.md):
- `value`: String
- `enumValues`: String[]
- `enumAliases`: String[]

 
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

- `@rtype`: string

```python
  return phxPython.strGetValue(self.mcName)
```
 
#### `def setValue(self, val)`

sets the value for the variable

- `@param val`: the value
- `@type val`: string

```python
  val = checkIsInstance(val, str)
  phxPython.strSetValue(self.mcName, val)
```
 
#### `def toString(self)`

converts the variable to a string

- `@rtype`: string

```python
  return phxPython.strGetValue(self.mcName)
```
 
#### `def fromString(self, val)`

converts a String representation to the internal value

- `@param val`: the value to convert
- `@type val`: string
- `@rtype`: void

```python
  val = checkIsInstance(val, str)
  phxPython.strSetValue(self.mcName, val)
```
 
#### `def getEnumAliases(self)`

Gets the enumeration aliases list

- `@rtype`: string[]

```python
  enumAliases = phxPython.strGetEnumAliases(self.mcName).strip()
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
  phxPython.strSetEnumAliases(self.mcName, strAliases)
```
 
#### `def getEnumValues(self)`

Gets the enumeration values list

- `@rtype`: string[]

```python
  enumValues = phxPython.strGetEnumValues(self.mcName).strip()
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
  phxPython.strSetEnumValues(self.mcName, strVals)
```
