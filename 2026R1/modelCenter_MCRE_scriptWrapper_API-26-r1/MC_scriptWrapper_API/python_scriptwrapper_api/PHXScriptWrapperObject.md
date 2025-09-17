# PHXScriptWrapperObject

## @PHXClassDecorator(PHXTException_Decorator)

### class PHXScriptWrapperObject

This object is passed to scriptWrapper scripts and provides the "wrapper" global object which provides runtime services for the wrapper.

#### `def __init__(self, varName)`
- `@param varName`: the name of the variable already declared in the wrapper to reference
- `@type varName`: string
- `@rtype`: void

```python
  varName = checkIsInstance(varName, str)
  self.mcName = varName
```

#### `def addMethod(self, methodName, fullName='', downloadInputs=False)`

Publicizes a method to our clients.

- `@param methodName`: The name of the method to publicize.
- `@type methodName`: string
- `@param fullName`: A human readable name to show in GUI programs for this method. For example, ModelCenter will show this in the right-click menu of a component.
- `@type fullName`: string
- `@param downloadInputs`: Hint passed to the client on whether the inputs should be downloaded after the method is run.
- `@type downloadInputs`: boolean
- `@rtype`: void

```python
  methodName = checkIsInstance(methodName, str)
  fullName = checkIsInstance(fullName, str)
  downloadInputs = checkIsInstance(downloadInputs, bool)

  if fullName == '':
     fullName = methodName
  phxPython.wrapperAddMethod(methodName, fullName, downloadInputs)
```

#### `def addVariable(self, varName, varType, isInput)`

Adds a variable to this component. Returns a reference to the new variable. Valid types are: boolean, double, long, string, file.

All types except file may be made into arrays by adding `[]` at the end of the type string.

- `@param varName`: The full name of the new variable. May include group specification with '.'.
- `@type varName`: string
- `@param varType`: The type of variable to create. Use the same type strings as for the variable`: statemensts at the top of the ScriptWrapper.
- `@type varType`: string
- `@param isInput`: If true, the variable will be an input, if false, it will be an output.
- `@type isInput`: boolean
- `@rtype`: PHXSimpleType

```python
  varName = checkIsInstance(varName, str)
  varType = checkIsInstance(varType, str)
  isInput = checkIsInstance(isInput, bool)

  phxPython.wrapperAddVariable(varName, varType, isInput)
  return self.getVariable(varName)
```

#### `def getDirectory(self)`

Returns the directory where this component was loaded from.

- `@rtype`: string

```python
  return phxPython.wrapperGetDirectory()
```

#### `def getRunDirectory(self)`

Returns the current "run" directory, which is the same as `getDirectory()` unless run sharing is being used.

- `@rtype`: string

```python
  return phxPython.wrapperGetRunDirectory()
```

#### `def getRunShare(self)`

Returns the `PHXRunShareContext` object used for process control and monitoring with this component.

- `@rtype`: `PHXRunShareContext`

```python
  return PHXRunShareContext()
```

#### `def getVariable(self, varName)`

Returns a reference to the named variable.

- `@param varName`: The full name of the variable to retrieve. May include group specification with '.'.
- `@type varName`: string
- `@rtype`: `PHXSimpleType`

```python
  varName = checkIsInstance(varName, str)

  varName = str(varName)
  className = self.__getVarType(varName)
  if className == 'boolean':
     return PHXBoolean(varName)
  elif className == 'boolean[]':
     return PHXBooleanArray(varName)
  elif className == 'double':
     return PHXDouble(varName)
  elif className == 'double[]':
     return PHXDoubleArray(varName)
  elif className == 'long':
     return PHXLong(varName)
  elif className == 'long[]':
     return PHXLongArray(varName)
  elif className == 'file':
     return PHXRawFile(varName)
  elif className == 'file[]':
     return PHXRawFileArray(varName)
  elif className == 'string':
     return PHXString(varName)
  elif className == 'string[]':
     return PHXStringArray(varName)
  elif className == 'object':
     return PHXScriptObject(varName)
  return PHXSimpleType(varName)
```

#### `def removeVariable(self, varName)`

Dynamically removes a variable from this component

- `@param varName`: The full name of the variable to remove. May include group specification with '.'.
- `@type varName`: string
- `@rtype`: void

```python
  varName = checkIsInstance(varName, str)
  phxPython.wrapperRemoveVariable(varName)
```

#### `def sleep(self, milliSeconds)`

sleeps for a period of time

- `@param milliSeconds`: the amount of time to sleep (in milliseconds).
- `@type milliSeconds`: long
- `@rtype`: void

```python
  milliSeconds = checkIsInstance(milliSeconds, int)
  phxPython.wrapperSleep(milliSeconds)
```

#### `def __getVarType(self, varName)`

```python
  varName = checkIsInstance(varName, str)
  return phxPython.wrapperGetVarType(str(varName))
```

#### `def getDictionary(self)`

```python
  dictionary = {}
  key = ""
  value = ""
  numKeys = phxPython.wrapperGetDictNumEntries()
  for i in range(numKeys)
     key = phxPython.wrapperGetDictKey(i)
     value = phxPython.wrapperGetDictValue(i)
     dictionary[key] = value
  return dictionary
```
