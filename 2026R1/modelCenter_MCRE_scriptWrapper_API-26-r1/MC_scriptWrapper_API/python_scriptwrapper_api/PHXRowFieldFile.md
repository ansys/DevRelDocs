# PHXRowFieldFile

## @PHXClassDecorator(PHXTException_Decorator)
### class PHXRowFieldFile:

Class implements the parsing capabilities of the `RowField` type files from the FileWrapper facility. Typical use would be to write a function which creates an instance of this class and implements the parsing using the `transferVar()` function. Then, a mode can be passed in which specifies whether the function should read the template file, generate an input file, or parse an output file.

You will want to read the documentation on the FileWrapper utility for more specifics on how exactly the file parsing and options work.

Example usage from a python ScriptWrapper. (Comments show FileWrapper equivalents):

```python
//RowFieldInputFile freqIN
def rowFieldFreqIN(mode)`
    PHXRowFieldFile file = new PHXRowFieldFile(wrapper, mode)
    //templateFile: freq.txt.template
    file.setTemplateFile('freq.txt.template')
    //fileToGenerate: freq.txt
    file.setFileToGenerateOrParse('freq.txt')

    //variable: W1 double 1 2
    file.transferVar(W1, 1, 2)
    //variable: W2 double 2 2
    file.transferVar(W2, 2, 2)
    //variable: u1 double 3 2
    file.transferVar(u1, 3, 2)
    //variable: u2 double 4 2
    file.transferVar(u2, 4, 2)

    //Actually generate a file if we are told to
    if ( mode == PHXRowFieldFile.GENERATE )
    file.generate()
```

GENERATE = 4

PARSE = 5

READ_TEMPLATE = 6


#### `def __init__(self, wrapper, mode)`

- `@type wrapper`: PHXScriptWrapperObject
- `@param mode`: valid mode types are:
    - `GENERATE` - This mode makes the row field file prepare to generate the output file by reading the template file, then replacing the specified values passed to `transferVar()`
    - `PARSE` - This mode makes the row field file read in values from the `fileToParse` when `transferVar()` is called.
    - `READ_TEMPLATE` - This mode makes the row field file read in values from the template file when `transferVar()` is called.
- `@type mode`: int
- `@rtype`: void

```python
  wrapper = checkIsInstance(wrapper, PHXScriptWrapperObject)
  mode = checkIsInstance(mode, int)

  self.key = phxPython.newPHXRowFieldFile(mode)
```
 
#### `def __del__(self)`

- `@rtype`: void

```python
  phxPython.rffDelete(self.key)
```
 
#### `def clearMarks(self)`

Removes effects of any previous `markAsBeginning()` or `markAsEnd()` calls

- `@rtype`: void

```python
  phxPython.rffClearMarks(self.key)
```
 
#### `def close(self)`

Closes the input file and frees up resources associated w/ this `RowFieldFile`.

- `@rtype`: void

```python
  phxPython.rffClose(self.key)
```
 
#### `def generate(self)`

If mode is `GENERATE`, this function actually writes the output file to disk.

- `@rtype`: void

```python
  phxPython.rffGenerate(self.key)
```
 
#### `def markAsBeginning(self, find, occurrence=1, offset=0, regex=False)`

Searches for the specified string, starting from the end of the file and working towards the beginning, and makes the row where the string was found act as row 1 for all subsequent calls until another `markAsBeginning` or `clearMarks` call.

- `@param find`: The string to search for.
- `@type find`: string
- `@param occurrence`: Search for the Nth occurrence of string (default 1)
- `@type occurrence`: int
- `@param offset`: After finding string, move down offset rows. May be negative to move up. (default 0)
- `@type offset`: int
- `@param regex`: If true, the find parameter is a regular expression. (default false)
- `@type regex`: boolean
- `@rtype`: void

```python
  find= checkIsInstance(find, str)
  occurrence = checkIsInstance(occurrence, int)
  offset = checkIsInstance(offset, int)
  regex = checkIsInstance(regex, bool)

  phxPython.rffMarkAsBeginning(self.key, find, occurrence, offset, regex)
```
 
#### `def markAsEnd(self, find, occurrence=1, offset=0, regex=False)`

Searches for the specified string and makes the row where the string was found act as row -1 (end of file) for all subsequent calls until another `markAsEnd` or `clearMarks` call.

- `@param find`: The string to search for.
- `@type find`: string
- `@param occurrence`: Search for the Nth occurrence of string (default 1)
- `@type occurrence`: int
- `@param offset`: After finding string, move down offset rows. May be negative to move up. (default 0)
- `@type offset`: int
- `@param regex`: If true, the find parameter is a regular expression. (default false)
- `@type regex`: boolean
- `@rtype`: void

```python
  find = checkIsInstance(find, str)
  occurrence = checkIsInstance(occurrence, int)
  offset = checkIsInstance(offset, int)
  regex = checkIsInstance(regex, bool)

  phxPython.rffMarkAsEnd(self.key, find, occurrence, offset, regex)
```
 
#### `def readDouble(self, row, field)`

Reads a value out of the input file. If mode is `PARSE`, the input file is the `fileToParse`, otherwise it is the template file. Returns it as a double value.

- `@param row`: The row of the file to read from
- `@type row`: int
- `@param field`: The field of the file to read from.
- `@type field`: int
- `@rtype`: double

```python
  row = checkIsInstance(row, int)
  field = checkIsInstance(field, int)

  return phxPython.rffReadDouble(self.key, row, field)
```
 
#### `def readLong(self, row, field)`

Reads a value out of the input file. If mode is `PARSE`, the input file is the `fileToParse`, otherwise it is the template file. Returns it as a long value.

- `@param row`: The row of the file to read from
- `@type row`: int
- `@param field`: The field of the file to read from.
- `@type field`: int
- `@rtype`: long

```python
  row = checkIsInstance(row, int)
  field = checkIsInstance(field, int)

  return phxPython.rffReadLong(self.key, row, field)
```
 
#### `def readValue(self, row, field)`

Reads a value out of the input file. If mode is `PARSE`, the input file is the `fileToParse`, otherwise it is the template file.

- `@param row`: The row of the file to read from
- `@type row`: int
- `@param field`: The field of the file to read from.
- `@type field`: int
- `@rtype`: string

```python
  row = checkIsInstance(row, int)
  field = checkIsInstance(field, int)

  return phxPython.rffReadValue(self.key, row, field)
```
 
#### `def setDelimiters(self, delimiters)`

Sets the delimiters which should be used for parsing lines into fields. 

- Acceptable values:
    - "columns" - Fortran style column based fields.
    - null - default delimiters (whitespace)
    - "whitespace" - default delimiters (whitespace)
    - "default" - default delimiters (whitespace)
    - "" - default delimiters (whitespace)
    - "none" - No delimiters (entire line as single field)
    - Any other string is taken as a list of character delimiters
- `@type delimiters`: string
- `@rtype`: void

```python
  delimiters = checkIsInstance(delimiters, str)

  phxPython.rffSetDelimiters(self.key, delimiters)
```
 
#### `def setFileToGenerate(self, fileName)`

Alias for `setFileToGenerateOrParse()`

- `@type fileName`: string
- `@rtype`: void

```python
  fileName = checkIsInstance(fileName, str)
  phxPython.rffSetFileToGenerateOrParse(self.key, fileName)
```
 
#### `def setFileToGenerateOrParse(self, fileName)`

Specified the file which will be generated or parsed depending on the mode.

- `@type fileName`: string
- `@rtype`: void

```python
  fileName = checkIsInstance(fileName, str)
  phxPython.rffSetFileToGenerateOrParse(self.key, fileName)
```
 
#### `def setFileToParse(self, fileName)`

Alias for `setFileToGenerateOrParse()`

- `@type fileName`: string
- `@rtype`: void

```python
  fileName = checkIsInstance(fileName, str)
  phxPython.rffSetFileToGenerateOrParse(self.key, fileName)
```
 
#### `def setTemplateFile(self, fileName)`

Specified the template file to read. If the template file is not specified, it defaults to either the `fileToParse` or `fileToGenerate`.

- `@type fileName`: string
- `@rtype`: void

```python
  fileName = checkIsInstance(fileName, str)
  phxPython.rffSetTemplateFile(self.key, fileName)
```
 
#### `def transferArray(self, var, rowStart, rowEnd, fieldStart, fieldEnd, resizable=False, fformat='', numDimensions=1)`

Transfers the data for a particular array. If mode is `GENERATE`, data is read from the var and put into the file, otherwise data is read from the file into the variable.

- `@param var`: The array to read or write
- `@type var`: `PHXSimpleArray`
- `@param rowStart`: the starting row of the array
- `@type rowStart`: int
- `@param rowEnd`: the last row of the array
- `@type rowEnd`: int
- `@param fieldStart`: the starting field of the array
- `@type fieldStart`: int
- `@param fieldEnd`: the last field of the array
- `@type fieldEnd`: int
- `@param resizable`: whether the array is resizable or not
- `@type resizable`: boolean
- `@param fformat`: The fortran style format string to apply. Pass `null` for standard formatting.
- `@type fformat`: string
- `@param numDimensions`: The number of dimensions to read the array as. Must be 1 or 2.
- `@type numDimensions`: int
- `@rtype`: void

```python
  var = checkIsInstance(var, PHXSimpleArray)
  rowStart = checkIsInstance(rowStart, int)
  rowEnd = checkIsInstance(rowEnd, int)
  fieldStart = checkIsInstance(fieldStart, int)
  fieldEnd = checkIsInstance(fieldEnd, int)
  resizable = checkIsInstance(resizable, bool)
  fformat = checkIsInstance(fformat, str)
  numDimensions = checkIsInstance(numDimensions, int)

  phxPython.rffTransferArray(self.key, var.mcName, rowStart, rowEnd,
                            fieldStart, fieldEnd, resizable, fformat, 
                            numDimensions)
```
 
#### `def transferKeyVar(self, var, key, occurrence=1, rowOffset=0, field=1, fformat='')`

Transfers the data for a particular variable. If mode is `GENERATE` data is read from the var and put into the file, otherwise data is read from the file into the variable.

- `@param var`: The variable to read or write
- `@type var`: PHXSimpleType
- `@param key`: The string to search for that identifies the variable in the file.
- `@type key`: string
- `@param occurrence`: (default 1). Which occurrence of string to find.
- `@type occurrence`: int
- `@param rowOffset`: (default 0). Once the string is found, offset by this many rows
- `@type rowOffset`: int
- `@param field`: (default 1). Once the string is found, offset by this many fields.
- `@type field`: int
- `@param fformat`: The fortran style format string to apply. Pass null for standard formatting.
- `@type fformat`: string
- `@rtype`: void

```python
  var = checkIsInstance(var, PHXSimpleType)
  key = checkIsInstance(key, str)
  occurrence = checkIsInstance(occurrence, int)
  rowOffset = checkIsInstance(rowOffset, int)
  field = checkIsInstance(field, int)
  fformat = checkIsInstance(fformat, str)
  
  phxPython.rffTransferKeyVar(self.key, var.mcName, key, occurrence, 
                              rowOffset, field, fformat)
```
 
#### `def transferVar(self, var, row, field, fformat='')`

Transfers the data for a particular variable. If mode is `GENERATE` data is read from the var and put into the file, otherwise data is read from the file into the variable.

- `@param var`: The variable to read or write
- `@type var`: `PHXSimpleType`
- `@param row`: The row in the file to read/write from/to.
- `@type row`: int
- `@param field`: The field within the row to read/write from/to.
- `@type field`: int
- `@param fformat`: The fortran style format string to apply. Pass `null` for standard formatting.
- `@type fformat`: string
- `@rtype`: void

```python
  var = checkIsInstance(var, PHXSimpleType)
  row = checkIsInstance(row, int)
  field = checkIsInstance(field, int)
  fformat = checkIsInstance(fformat, str)

  phxPython.rffTransferVar(self.key, var.mcName, row, field, fformat)
```
 
#### `def writeValue(self, row, field, val)`

Writes a token out to the output file. This is only useful if mode is `GENERATE`.

- `@param row`: The row of the file to read from
- `@type row`: int
- `@param field`: The field of the file to read from.
- `@type field`: int
- `@param val`: The string to write
- `@type val`: string
- `@rtype`: void

```python
  row = checkIsInstance(row, int)
  field = checkIsInstance(field, int)
  val = checkIsInstance(val, str)

  phxPython.rffWriteValue(self.key, row, field, val)
```
