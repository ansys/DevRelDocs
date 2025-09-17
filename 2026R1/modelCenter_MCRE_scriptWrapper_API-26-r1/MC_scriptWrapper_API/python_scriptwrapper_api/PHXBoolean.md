# PHXBoolean

## @PHXClassDecorator(PHXTException_Decorator)

### class PHXBoolean(PHXSimpleType)

The ModelCenter type for booleans. This class adds the following features to the [`PHXSimpleType`](PHXSimpleType.md):

- `value`: boolean
- `valueStr`: the source string for the value, useful for error checking when the value is NaN


#### `def __init__(self, varName)`

initializes value to false

- `@param varName`: the name of the variable already declared in the wrapper to reference
- `@type varName`: string
- `@rtype`: void

```python
  varName = checkIsInstance(varName, str)
  self.mcName = varName
```
 
#### `def fromString(self, value)`

converts a String representation to the internal value

- `@param value`: the value to convert
- `@type value`: string
- `@rtype`: void

```python
  value = checkIsInstance(value, str)

  boolVal = bool(value)
  phxPython.boolSetValue(self.mcName, boolVal)
```
 
#### `def getValue(self)`

retrieves the current value of the variable

- `@rtype`: boolean

```python
  return phxPython.boolGetValue(self.mcName)
```
 
#### `def getValueStr(self)`

retrieves the current value of the variable (in string form)

- `@rtype`: string

```python
  return fromString()
```
 
#### `def setValue(self, value)`

sets the value for the variable

- `@param value`: the value
- `@type value`: boolean
- `@rtype`: void

```python
  value = checkIsInstance(value, bool)
  phxPython.boolSetValue(self.mcName, value)
```
 
#### `def toString(self)`

converts the variable to a string

- `@rtype`: string

```python
  return str(bool(phxPython.boolToString(self.mcName)))
```
