# PHXRawFileArray

## @PHXClassDecorator(PHXTException_Decorator)

### class PHXRawFileArray(PHXSimpleArray)

The ModelCenter type for File Array. 

This class has the following properties:
- `name`: String

 
#### `def __init__(self, varName)`

- `@param varName`: the name of the variable already declared in the wrapper to reference
- `@type varName`: string
- `@rtype`: void

```python
  varName = checkIsInstance(varName, str)
  self.mcName = varName
```
 
#### `def fromFile(self, index, fileName="")`

Sets the filename and then reads from disk. It is preferred that you use `setName()` when you create a PHXRawFileArray and then use `readFile()` without passing a filename to it. This allows progress monitoring to work correctly in all cases.

- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@param fileName`: the name of the file to read from (default is blank string)
- `@rtype`: fileName`: string
- `@rtype`: void

```python
  fileName = checkIsInstance(fileName, str)
  phxPython.fileArrayFromFile(self.mcName, indexListToCSV(index), fileName)
```
 
#### `def fromString(self, value)`

converts a String representation to the internal value

- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@param value`: the value to convert
- `@type value`: string
- `@rtype`: void

```python
  value = checkIsInstance(value, str)
  phxPython.fileArrayFromString(self.mcName, indexListToCSV(index), value)
```
 
#### `def getBaseName(self)`

gets the base name of the file

- `@rtype`: string

```python
  return phxPython.fileArrayGetBaseName(self.mcName)
```
 
#### `def getContents(self, index)`

retrieves the contents of the file

- `@rtype`: string
- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int

```python
  return phxPython.fileArrayGetContents(self.mcName, indexListToCSV(index))
```
 
#### `def getFileExtension(self, index)`

Returns the extension of the file that this object represents

- `@rtype`: string
- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int

```python
  return phxPython.fileArrayGetFileExtension(self.mcName, indexListToCSV(index))
```
 
#### `def getIsBinary(self)`

Tells whether or not the the file array contains binary files. Simply switches on whether or not the mime type starts with text.

- `@rtype`: boolean

```python
  return phxPython.fileArrayGetIsBinary(self.mcName)
```
 
#### `def getMimeType(self)`

retrieves the mime type associated with the file array

- `@rtype`: string

```python
  return phxPython.fileArrayGetMimeType(self.mcName)
```
 
#### `def getName(self, index)`

retrieves the name of the file

- `@rtype`: string
- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int

```python
  return phxPython.fileArrayGetName(self.mcName, indexListToCSV(index))
```
 
#### `def getNameCoded(self, index)`

retrieves the name of the file in coded form (without `$variables` replaced)

- `@rtype`: string
- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int

```python
  return phxPython.fileArrayGetNameCoded(self.mcName, indexListToCSV(index))
```
 
#### `def hasChanged(self, index)`

checks to see if the file has changed since the last time `getContents()` was called

- `@rtype`: boolean
- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int

```python
  return phxPython.fileArrayHasChanged(self.mcName, indexListToCSV(index))
```
 
#### `def markAsRead(self, index)`

call this function after you manually get the contents of the file. The function records its name and timestamp for use with the `hasChanged()` function

- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@rtype`: void

```python
  phxPython.fileArrayMarkAsRead(self.mcName, indexListToCSV(index))
```
 
#### `def readFile(self, index, fileName="")`

Sets the filename and then reads from disk. It is preferred that you use `setName()` when you create a `PHXRawFile` and then use `readFile()` without passing a filename to it. This allows progress monitoring to work correctly in all cases.

- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@param fileName`: the name of the file
- `@rtype`: fileName`: string
- `@rtype`: void

```python
  fileName = checkIsInstance(fileName, str)
  self.fromFile(indexListToCSV(index), fileName)
```
 
#### `def setBaseName(self, name)`

sets the base name of the file

- `@param name`: the name
- `@type name`: string
- `@rtype`: void

```python
  name = checkIsInstance(name, str)
  phxPython.fileArraySetBaseName(self.mcName, name)
```
 
#### `def setContents(self, index, contents)`

sets the contents of the file. The actual file is not modified until the `writeFile()` method is issued.

- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@param contents`: the contents of the file
- `@type contents`: string
- `@rtype`: void

```python
  contents = checkIsInstance(contents, str)
  phxPython.fileArraySetContents(
  self.mcName, indexListToCSV(index), contents)
```
 
#### `def setFileExtension(self, index, extension)`

Sets the extension of the file that this object represents.

It is preferred that you use `setName()` and let the system automatically figure out the extension based on what you pass in. Then, you can use `readFile()` and `writeFile()` without passing filenames to those calls. This allows for progress monitoring to work correctly in all cases.

- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@param extension`: the new file extension for the file
- `@type extension`: string
- `@rtype`: void

```python
  extension = checkIsInstance(extension, str)
  phxPython.fileArraySetFileExtension(
  self.mcName, indexListToCSV(index), extension)
```
 
#### `def setIsBinary(self, flag)`

Forces this file to be binary or not. If this causes the mode to change, will set the mime type to `text/plain` or `application/octet-stream` as appropriate.

- `@type flag`: boolean
- `@rtype`: void

```python
  flag = checkIsInstance(flag, bool)
  phxPython.fileArraySetIsBinary(self.mcName, bool(flag))
```
 
#### `def setMimeType(self, mimeType)`

sets the mime type associated with the file variable

- `@param mimeType`: the mime type
- `@type mimeType`: string
- `@rtype`: void

```python
  mimeType = checkIsInstance(mimeType, str)
  phxPython.fileArraySetMimeType(self.mcName, mimeType)
```
 
#### `def setName(self, index, name)`

sets the name of the file

- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@param name`: the name
- `@type name`: string
- `@rtype`: void

```python
  name = checkIsInstance(name, str)
  phxPython.fileArraySetName(self.mcName, indexListToCSV(index), name)
```
 
#### `def toFile(self, index, fileName="")`

Sets the filename and then writes the file to disk. It is preferred that you use `setName()` when you create a `PHXRawFile` and then use `writeFile()` without passing a filename to it. This allows progress monitoring to work correctly in all cases.

- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@param fileName`: the name of the file to read from (default is blank string)
- `@rtype`: fileName`: string
- `@rtype`: void

```python
  fileName = checkIsInstance(fileName, str)
  phxPython.fileArrayToFile(self.mcName, indexListToCSV(index), fileName)
```
 
#### `def toString(self, index)`

converts the variable to a string

- `@rtype`: string
- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int

```python
  return phxPython.fileArrayToString(self.mcName, indexListToCSV(index))
```
 
#### `def writeFile(self, index, fileName="")`

sets the filename and then writes the file to disk. It is preferred that you use `setName()` when you create a `PHXRawFile` and then use `writeFile()` without passing a filename to it. This allows progress monitoring to work correctly in all cases.

- `@param index`: Index to which element to set.
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@param fileName`: the name of the file to read from (default is blank string)
- `@rtype`: fileName`: string
- `@rtype`: void

```python
  fileName = checkIsInstance(fileName, str)
  self.toFile(indexListToCSV(index), fileName)
```
