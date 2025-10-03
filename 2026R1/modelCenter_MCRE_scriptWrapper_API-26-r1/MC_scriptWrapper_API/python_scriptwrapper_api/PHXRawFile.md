# PHXRawFile

## @PHXClassDecorator(PHXTException_Decorator)

### class PHXRawFile(PHXSimpleType)

The ModelCenter type for Files. 

This class has the following properties:
- `name`: String
- `contents`: String

 
#### `def __init__(self, varName)`

- `@param varName`: the name of the variable already declared in the wrapper to reference
- `@type varName`: string
- `@rtype`: void

```python
  varName = checkIsInstance(varName, str)
  self.mcName = varName
```
 
#### `def fromFile(self, fileName="")`

Sets the filename and then reads from disk. It is preferred that you use `setName()` when you create a `PHXRawFile` and then use `readFile()` without passing a filename to it. This allows progress monitoring to work correctly in all cases.

- `@param fileName`: the name of the file to read from (default is blank string)
- `@rtype`: fileName`: string
- `@rtype`: void

```python
  fileName = checkIsInstance(fileName, str)
  phxPython.fileFromFile(self.mcName, fileName)
```
 
#### `def fromString(self, value)`

converts a String representation to the internal value

- `@param value`: the value to convert
- `@type value`: string
- `@rtype`: void

```python
  value = checkIsInstance(value, str)
  phxPython.fileFromString(self.mcName, value)
```
 
#### `def getBaseName(self)`

gets the base name of the file

- `@rtype`: string

```python
  return phxPython.fileGetBaseName(self.mcName)
```
 
#### `def getContents(self)`

retrieves the contents of the file

- `@rtype`: string

```python
  return phxPython.fileGetContents(self.mcName)
```
 
#### `def getFileExtension(self)`

Returns the extension of the file that this object represents

- `@rtype`: string

```python
  return phxPython.fileGetFileExtension(self.mcName)
```
 
#### `def getIsBinary(self)`

Tells whether or not the the file is binary. Simply switches on whether or not the mime type starts with text.

- `@rtype`: boolean

```python
  return phxPython.fileGetIsBinary(self.mcName)
```
 
#### `def getMimeType(self)`

retrieves the mime type associated with the file variable

- `@rtype`: string

```python
  return phxPython.fileGetMimeType(self.mcName)
```
 
#### `def getName(self)`

retrieves the name of the file

- `@rtype`: string

```python
  return phxPython.fileGetName(self.mcName)
```
 
#### `def getNameCoded(self)`


retrieves the name of the file in coded form (without `$variables` replaced)
- `@rtype`: string

```python
  return phxPython.fileGetNameCoded(self.mcName)
```
 
#### `def hasChanged(self)`

checks to see if the file has changed since the last time `getContents()` was called

- `@rtype`: boolean

```python
  return phxPython.fileHasChanged(self.mcName)
```
 
#### `def markAsRead(self)`

call this function after you manually get the contents of the file. The function records its name and timestamp for use with the `hasChanged()` function

- `@rtype`: void

```python
  phxPython.fileMarkAsRead(self.mcName)
```
 
#### `def readFile(self, fileName="")`

Sets the filename and then reads from disk. It is preferred that you use `setName()` when you create a `PHXRawFile` and then use `readFile()` without passing a filename to it. This allows progress monitoring to work correctly in all cases.

- `@param fileName`: the name of the file
- `@rtype`: fileName`: string
- `@rtype`: void

```python
  fileName = checkIsInstance(fileName, str)
  self.fromFile(fileName)
```
 
#### `def setBaseName(self, name)`

sets the base name of the file

- `@param name`: the name
- `@type name`: string
- `@rtype`: void

```python
  name = checkIsInstance(name, str)
  phxPython.fileSetBaseName(self.mcName, name)
```
 
#### `def setContents(self, contents)`

sets the contents of the file. The actual file is not modified until the `writeFile()` method is issued.

- `@param contents`: the contents of the file
- `@type contents`: string
- `@rtype`: void

```python
  contents = checkIsInstance(contents, str)
  phxPython.fileSetContents(self.mcName, contents)
```
 
#### `def setFileExtension(self, extension)`

Sets the extension of the file that this object represents.

It is preferred that you use `setName()` and let the system automatically figure out the extension based on what you pass in. Then, you can use `readFile()` and `writeFile()` without passing filenames to those calls. This allows for progress monitoring to work correctly in all cases.

- `@param extension`: the new file extension for the file
- `@type extension`: string
- `@rtype`: void

```python
  extension = checkIsInstance(extension, str)
  phxPython.fileSetFileExtension(self.mcName, extension)
```
 
#### `def setIsBinary(self, flag)`

Forces this file to be binary or not. If this causes the mode to change, will set the mime type to `text/plain` or `application/octet-stream` as appropriate.

- `@type flag`: boolean
- `@rtype`: void

```python
  flag = checkIsInstance(flag, bool)
  phxPython.fileSetIsBinary(self.mcName, bool(flag))
```
 
#### `def setMimeType(self, mimeType)`

sets the mime type associated with the file variable

- `@param mimeType`: the mime type
- `@type mimeType`: string
- `@rtype`: void

```python
  mimeType = checkIsInstance(mimeType, str)
  phxPython.fileSetMimeType(self.mcName, mimeType)
```
 
#### `def setName(self, name)`

sets the name of the file

- `@param name`: the name
- `@type name`: string
- `@rtype`: void

```python
  name = checkIsInstance(name, str)
  phxPython.fileSetName(self.mcName, name)
```
 
#### `def toFile(self, fileName="")`

Sets the filename and then writes the file to disk. It is preferred that you use `setName()` when you create a `PHXRawFile` and then use `writeFile()` without passing a filename to it. This allows progress monitoring to work correctly in all cases.

- `@param fileName`: the name of the file to read from (default is blank string)
- `@rtype`: fileName`: string
- `@rtype`: void

```python
  fileName = checkIsInstance(fileName, str)
  phxPython.fileToFile(self.mcName, fileName)
```
 
#### `def toString(self)`

converts the variable to a string

- `@rtype`: string

```python
  return phxPython.fileToString(self.mcName)
```
 
#### `def writeFile(self, fileName="")`

sets the filename and then writes the file to disk. It is preferred that you use `setName()` when you create a `PHXRawFile` and then use `writeFile()` without passing a filename to it. This allows progress monitoring to work correctly in all cases.

- `@param fileName`: the name of the file to read from (default is blank string)
- `@rtype`: fileName`: string
- `@rtype`: void

```python
  fileName = checkIsInstance(fileName, str)
  self.toFile(fileName)
```
