# PHXSimpleType

## @PHXClassDecorator(PHXTException_Decorator)
### class PHXSimpleType

A base class for most ModelCenter data types. The class defines the following properties:

- `description`: String
- `units`: String
- `hasChanged`: boolean

This class will fire a property change event when `hasChanged(true)` is called. The property event will always have the property name be "value" and the old and new values of `null`. Use `toString` or `getValue` functions to get the actual new value from the variable.


#### `def __init__(self, varName)`

- `@param varName`: the name of the variable already declared in the wrapper to reference
- `@type varName`: string
- `@rtype`: void

```python
  varName = checkIsInstance(varName, str)
  self.mcName = varName
```

#### `def getUnits(self)`

retrieves the units for the variable

- `@rtype`: string

```python
  return phxPython.simpleGetUnits(self.mcName)
```

#### `def setUnits(self, u)`

sets the units for the variable

- `@param u`: the units value
- `@type u`: string
- `@rtype`: void

```python
  u = checkIsInstance(u, str)
  phxPython.simpleSetUnits(self.mcName, u)
```

#### `def getDescription(self)`

retrieves the description of the variable

- `@rtype`: a description geometry data

```python
  return phxPython.simpleGetDescription(self.mcName)
```

#### `def setDescription(self, d)`

sets the description for the variable. This should be a short, one-line description.

- `@param d`: the description
- `@type d`: string
- `@rtype`: void

```python
  d = checkIsInstance(d, str)
  phxPython.simpleSetDescription(self.mcName, d)
```

#### `def getHasChanged(self)`

retrieves the `hasChanged` flag

- `@rtype`: boolean

```python
  return phxPython.simpleGetHasChanged(self.mcName)
```

#### `def setHasChanged(self, v)`

sets the `hasChanged` flag

- `@param v`: whether the variable has changed
- `@type v`: boolean
- `@rtype`: void

```python
  v = checkIsInstance(v, bool)
  return phxPython.simpleSetHasChanged(self.mcName, v)
```
