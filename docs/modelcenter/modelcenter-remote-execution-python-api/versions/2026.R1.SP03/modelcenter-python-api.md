# ModelCenter Python API

## PHXScriptWrapperObject

### @PHXClassDecorator(PHXTException_Decorator)
#### class PHXScriptWrapperObject
This object is passed to Script Wrapper scripts and provides the "wrapper" global object which provides runtime services for the wrapper.
- `def __init__(self, varName)`
    - `@param varName`: the name of the variable already declared in the wrapper to reference
    - `@type varName`: string
    - `@rtype`: void
    ```
      varName = checkIsInstance(varName, str)
      self.mcName = varName
    ```
- `def addMethod(self, methodName, fullName='', downloadInputs=False)`
    
    Publicizes a method to our clients.
    - `@param methodName`: The name of the method to publicize.
    - `@type methodName`: string
    - `@param fullName`: A human readable name to show in GUI programs for this method. For example, ModelCenter will show this in the right-click menu of a component.
    - `@type fullName`: string
    - `@param downloadInputs`: Hint passed to the client on whether the inputs should be downloaded after the method is run.
    - `@type downloadInputs`: boolean
    - `@rtype`: void
    ```
      methodName = checkIsInstance(methodName, str)
      fullName = checkIsInstance(fullName, str)
      downloadInputs = checkIsInstance(downloadInputs, bool)

      if fullName == '':
         fullName = methodName
      phxPython.wrapperAddMethod(methodName, fullName, downloadInputs)
    ```
- `def addVariable(self, varName, varType, isInput)`
    
    Adds a variable to this component. Returns a reference to the new variable. Valid types are: boolean, double, long, string, file.
    
    All types except file may be made into arrays by adding `[]` at the end of the type string.
    - `@param varName`: The full name of the new variable. May include group specification with '.'.
    - `@type varName`: string
    - `@param varType`: The type of variable to create. Use the same type strings as for the variable`: statemensts at the top of the ScriptWrapper.
    - `@type varType`: string
    - `@param isInput`: If true, the variable will be an input, if false, it will be an output.
    - `@type isInput`: boolean
    - `@rtype`: PHXSimpleType
    ```
      varName = checkIsInstance(varName, str)
      varType = checkIsInstance(varType, str)
      isInput = checkIsInstance(isInput, bool)

      phxPython.wrapperAddVariable(varName, varType, isInput)
      return self.getVariable(varName)
    ```
- `def getDirectory(self)`
    
    Returns the directory where this component was loaded from.
    - `@rtype`: string
    ```
      return phxPython.wrapperGetDirectory()
    ```
- `def getRunDirectory(self)`
    
    Returns the current "run" directory, which is the same as `getDirectory()` unless run sharing is being used.
    - `@rtype`: string
    ```
      return phxPython.wrapperGetRunDirectory()
    ```
- `def getRunShare(self)`
    
    Returns the `PHXRunShareContext` object used for process control and monitoring with this component.
    - `@rtype`: `PHXRunShareContext`
    ```
      return PHXRunShareContext()
    ```
- `def getVariable(self, varName)`
    
    Returns a reference to the named variable.
    - `@param varName`: The full name of the variable to retrieve. May include group specification with '.'.
    - `@type varName`: string
    - `@rtype`: `PHXSimpleType`
    ```
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
- `def removeVariable(self, varName)`
    
    Dynamically removes a variable from this component
    - `@param varName`: The full name of the variable to remove. May include group specification with '.'.
    - `@type varName`: string
    - `@rtype`: void
    ```
      varName = checkIsInstance(varName, str)
      phxPython.wrapperRemoveVariable(varName)
    ```
- `def sleep(self, milliSeconds)`
    
    sleeps for a period of time
    - `@param milliSeconds`: the amount of time to sleep (in milliseconds).
    - `@type milliSeconds`: long
    - `@rtype`: void
    ```
      milliSeconds = checkIsInstance(milliSeconds, int)
      phxPython.wrapperSleep(milliSeconds)
    ```
- `def __getVarType(self, varName)`
    ```
      varName = checkIsInstance(varName, str)
      return phxPython.wrapperGetVarType(str(varName))
    ```
- `def getDictionary(self)`
    ```
      dictionary = {}
      key = ""
      value = ""
      numKeys = phxPython.wrapperGetDictNumEntries()
      for i in range(numKeys)`
         key = phxPython.wrapperGetDictKey(i)
         value = phxPython.wrapperGetDictValue(i)
         dictionary[key] = value
      return dictionary
    ```

## PHXRunShareObject

### @PHXClassDecorator(PHXTException_Decorator)
#### class PHXRunShareContext:
   This class handles runshare capabilities for any component which needs it.
   It can create temp directorys, deal w/ auto-copy and auto-delete of important
   files, return errors and block until it is safe to run. It also handles
   providing monitors for stdout and stderr as well as for monitoring started
   processes.

   This class can only handle one single process running at a time. If you
   need to run multiple processes, use multiple instances of this class.
   You can use this same object over and over by calling `lock()` and `unlock()`
   multiple times.
```
   DEL_AUTO = 14
   DEL_FALSE = 15
   DEL_TRUE = 16
   MODE_NONE = 0
   MODE_ERROR = 1
   MODE_WAIT = 2
   MODE_SHARE = 3
```
- `def __init__(self)`
    - `@rtype`: void
    ```
      self.data = 0
    ```
- `def cleanTempDir(self)`
    
    cleans up the temporary run directory if one has been created.
    - `@rtype`: void
    ```
      phxPython.runShareCleanTempDir()
    ```
- `def getBaseDirectory(self)`
    
    Gets the base dir which was passed in to the constructor.
    - `@rtype`: string
    ```
      return phxPython.runShareGetBaseDirectory()
    ```
- `def getDirectory(self)`
    
    Returns the current directory being used by the runshare system.
      This may be the base directory, or it may be a temp directory
      created underneath there to implement run sharing.
    - `@rtype`: string
    ```
      return phxPython.runShareGetDirectory()
    ```
- `def halt(self)`
    
    halts any running process
    - `@rtype`: void
    ```
      phxPython.runShareHalt()
    ```
- `def lock(self)`
    
    Causes the run-share mode to be implemented. This creates sub-dirs, waits, or errors as appropriate.
    
    Once in "locked" mode, calling `lock()` again has no effect.
    - `@rtype`: void
    ```
      phxPython.runShareLock()
    ```
- `def run(self, cmd, ignoreErrors=False, autoChangeDir=True, shell='sh')`
    
    Runs a command. Command may be relative to the run directory, see `getDirectory()`.
    
    This function will not return until the sub-process has finished. It will collect
      `stdout` and `stderr` and provide progress monitors.
    - `@param cmd`: The command to run.
    - `@type cmd`: string
    - `@param ignoreErrors`: By default this code will throw an exception if the spawned process returns a non-zero `errorlevel`. Occasionally a program will return an `errorlevel` even if it succeeds. This option allows you to igore the `errorlevel`.
    - `@type ignoreErrors`: boolean
    - `@param autoChangeDir`: Whether to change the current working directory to the run
         directory (see `getDirectory`) before running the code. "True" by default.
    - `@type autoChangeDir`: boolean
    - `@param shell`: On UNIX you can specify which shell to use to launch the program. By default "sh" is used.
    - `@type shell`: string
    - `@rtype`: void
    ```
      cmd = checkIsInstance(cmd, str)
      ignoreErrors = checkIsInstance(ignoreErrors, bool)
      autoChangeDir = checkIsInstance(autoChangeDir, bool)
      shell = checkIsInstance(shell, str)

      phxPython.runShareRun(cmd, ignoreErrors, autoChangeDir, shell)
    ```
- `def setAutoDelete(self, flag)`
    
    Sets the auto-delete mode for runshare mode `MODE_SHARE`. If `DEL_TRUE`, the created
      sub-dir is always deleted. If `DEL_FALSE`, it is never deleted. If `DEL_AUTO`, it is
      only deleted when no errors occur during the run.
    - `@type flag`: int
    - `@rtype`: void
    ```
      flag = checkIsInstance(flag, int)
      phxPython.runShareSetAutoDelete(flag)
    ```
- `def setFilesToCopy(self, files)`
    
    Sets the files which need to be copied when runshare mode is `MODE_SHARE`.
    - `@type files`: string
    - `@rtype`: void
    ```
      files = checkIsInstance(files, str)
      phxPython.runShareSetFilesToCopy(files)
    ```
- `def setMode(self, mode)`
    
    Sets the runshare mode.
    - `@type mode`: int
    - `@rtype`: void
    ```
      mode = checkIsInstance(mode, int)
      phxPython.runShareSetMode(mode)
    ```
- `def unlock(self)`
    
    Unlocks the runshare mechanisms. This will unblock other components which are waiting for us to finish.
    
    Calling `unlock()` when not in "locked" mode has no effect.
    - `@rtype`: void
    ```
      phxPython.runShareUnlock()
    ```

## PHXRowFieldFile

### @PHXClassDecorator(PHXTException_Decorator)
#### class PHXRowFieldFile:
Class implements the parsing capabilities of the RowField type files from the fileWrapper facility. Typical use would be to write a function which creates an instance of this class and implements the parsing using the `transferVar()` function. Then, a mode can be passed in which specifies whether the function should read the template file, generate an input file, or parse an output file.

You will want to read the documentation on the fileWrapper utility for more specifics on how exactly the file parsing and options work.

Example usage from a python scriptwrapper (Comments show fileWrapper equivalents):
```
//RowFieldInputFile freqIN
def rowFieldFreqIN(mode)`
    PHXRowFieldFile file = new PHXRowFieldFile(wrapper, mode)
    //templateFile`: freq.txt.template
    file.setTemplateFile('freq.txt.template')
    //fileToGenerate`: freq.txt
    file.setFileToGenerateOrParse('freq.txt')

    //variable`: W1 double 1 2
    file.transferVar(W1, 1, 2)
    //variable`: W2 double 2 2
    file.transferVar(W2, 2, 2)
    //variable`: u1 double 3 2
    file.transferVar(u1, 3, 2)
    //variable`: u2 double 4 2
    file.transferVar(u2, 4, 2)

    //Actually generate a file if we are told to
    if ( mode == PHXRowFieldFile.GENERATE )
    file.generate()
```
GENERATE = 4

PARSE = 5

READ_TEMPLATE = 6

- `def __init__(self, wrapper, mode)`
    - `@type wrapper`: PHXScriptWrapperObject
    - `@param mode`: valid mode types are:
        - `GENERATE` - This mode makes the row field file prepare to generate the output file by reading the template file, then replacing the specified values passed to `transferVar()`
        - `PARSE` - This mode makes the row field file read in values from the `fileToParse` when `transferVar()` is called.
        - `READ_TEMPLATE` - This mode makes the row field file read in values from the template file when `transferVar()` is called.
    - `@type mode`: int
    - `@rtype`: void
    ```
      wrapper = checkIsInstance(wrapper, PHXScriptWrapperObject)
      mode = checkIsInstance(mode, int)

      self.key = phxPython.newPHXRowFieldFile(mode)
    ```
 - `def __del__(self)`
    - `@rtype`: void
    ```
      phxPython.rffDelete(self.key)
    ```
 - `def clearMarks(self)`
    
    Removes effects of any previous `markAsBeginning()` or `markAsEnd()` calls
    - `@rtype`: void
    ```
      phxPython.rffClearMarks(self.key)
    ```
 - `def close(self)`
    
    Closes the input file and frees up resources associated w/ this `RowFieldFile`.
    - `@rtype`: void
    ```
      phxPython.rffClose(self.key)
    ```
 - `def generate(self)`
    
    If mode is `GENERATE`, this function actually writes the output file to disk.
    - `@rtype`: void
    ```
      phxPython.rffGenerate(self.key)
    ```
 - `def markAsBeginning(self, find, occurrence=1, offset=0, regex=False)`
    
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
    ```
      find= checkIsInstance(find, str)
      occurrence = checkIsInstance(occurrence, int)
      offset = checkIsInstance(offset, int)
      regex = checkIsInstance(regex, bool)

      phxPython.rffMarkAsBeginning(self.key, find, occurrence, offset, regex)
    ```
 - `def markAsEnd(self, find, occurrence=1, offset=0, regex=False)`
    
    Searches for the specified string and makes the row where the string was found
      act as row -1 (end of file) for all subsequent calls until another `markAsEnd` or
      `clearMarks` call.
    - `@param find`: The string to search for.
    - `@type find`: string
    - `@param occurrence`: Search for the Nth occurrence of string (default 1)
    - `@type occurrence`: int
    - `@param offset`: After finding string, move down offset rows. May be negative to move up. (default 0)
    - `@type offset`: int
    - `@param regex`: If true, the find parameter is a regular expression. (default false)
    - `@type regex`: boolean
    - `@rtype`: void
    ```
      find = checkIsInstance(find, str)
      occurrence = checkIsInstance(occurrence, int)
      offset = checkIsInstance(offset, int)
      regex = checkIsInstance(regex, bool)

      phxPython.rffMarkAsEnd(self.key, find, occurrence, offset, regex)
    ```
 - `def readDouble(self, row, field)`
    
    Reads a value out of the input file. If mode is `PARSE`, the input file is the `fileToParse`, otherwise it is the template file. Returns it as a double value.
    - `@param row`: The row of the file to read from
    - `@type row`: int
    - `@param field`: The field of the file to read from.
    - `@type field`: int
    - `@rtype`: double
    ```
      row = checkIsInstance(row, int)
      field = checkIsInstance(field, int)

      return phxPython.rffReadDouble(self.key, row, field)
    ```
 - `def readLong(self, row, field)`
    
    Reads a value out of the input file. If mode is `PARSE`, the input file is the `fileToParse`, otherwise it is the template file. Returns it as a long value.
    - `@param row`: The row of the file to read from
    - `@type row`: int
    - `@param field`: The field of the file to read from.
    - `@type field`: int
    - `@rtype`: long
    ```
      row = checkIsInstance(row, int)
      field = checkIsInstance(field, int)

      return phxPython.rffReadLong(self.key, row, field)
    ```
 - `def readValue(self, row, field)`
    
    Reads a value out of the input file. If mode is `PARSE`, the input file is the `fileToParse`, otherwise it is the template file.
    - `@param row`: The row of the file to read from
    - `@type row`: int
    - `@param field`: The field of the file to read from.
    - `@type field`: int
    - `@rtype`: string
    ```
      row = checkIsInstance(row, int)
      field = checkIsInstance(field, int)

      return phxPython.rffReadValue(self.key, row, field)
    ```
 - `def setDelimiters(self, delimiters)`
    
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
    ```
      delimiters = checkIsInstance(delimiters, str)

      phxPython.rffSetDelimiters(self.key, delimiters)
    ```
 - `def setFileToGenerate(self, fileName)`
    
    Alias for `setFileToGenerateOrParse()`
    - `@type fileName`: string
    - `@rtype`: void
    ```
      fileName = checkIsInstance(fileName, str)
      phxPython.rffSetFileToGenerateOrParse(self.key, fileName)
    ```
 - `def setFileToGenerateOrParse(self, fileName)`
    
    Specified the file which will be generated or parsed depending on the mode.
    - `@type fileName`: string
    - `@rtype`: void
    ```
      fileName = checkIsInstance(fileName, str)
      phxPython.rffSetFileToGenerateOrParse(self.key, fileName)
    ```
 - `def setFileToParse(self, fileName)`
    
    Alias for `setFileToGenerateOrParse()`
    - `@type fileName`: string
    - `@rtype`: void
    ```
      fileName = checkIsInstance(fileName, str)
      phxPython.rffSetFileToGenerateOrParse(self.key, fileName)
    ```
 - `def setTemplateFile(self, fileName)`
    
    Specified the template file to read. If the template file is not specified,
      it defaults to either the `fileToParse` or `fileToGenerate`.
    - `@type fileName`: string
    - `@rtype`: void
    ```
      fileName = checkIsInstance(fileName, str)
      phxPython.rffSetTemplateFile(self.key, fileName)
    ```
 - `def transferArray(self, var, rowStart, rowEnd, fieldStart, fieldEnd, resizable=False, fformat='', numDimensions=1)`
    
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
    ```
      var = checkIsInstance(var, PHXSimpleArray)
      rowStart = checkIsInstance(rowStart, int)
      rowEnd = checkIsInstance(rowEnd, int)
      fieldStart = checkIsInstance(fieldStart, int)
      fieldEnd = checkIsInstance(fieldEnd, int)
      resizable = checkIsInstance(resizable, bool)
      fformat = checkIsInstance(fformat, str)
      numDimensions = checkIsInstance(numDimensions, int)

      phxPython.rffTransferArray(self.key, var.mcName, rowStart, rowEnd,
                                 fieldStart, fieldEnd, resizable, fformat, numDimensions)
    ```
 - `def transferKeyVar(self, var, key, occurrence=1, rowOffset=0, field=1, fformat='')`
    
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
    ```
      var = checkIsInstance(var, PHXSimpleType)
      key = checkIsInstance(key, str)
      occurrence = checkIsInstance(occurrence, int)
      rowOffset = checkIsInstance(rowOffset, int)
      field = checkIsInstance(field, int)
      fformat = checkIsInstance(fformat, str)
      
      phxPython.rffTransferKeyVar(
          self.key, var.mcName, key, occurrence, rowOffset, field, fformat)
    ```
 - `def transferVar(self, var, row, field, fformat='')`
    
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
    ```
      var = checkIsInstance(var, PHXSimpleType)
      row = checkIsInstance(row, int)
      field = checkIsInstance(field, int)
      fformat = checkIsInstance(fformat, str)

      phxPython.rffTransferVar(self.key, var.mcName, row, field, fformat)
    ```
 - `def writeValue(self, row, field, val)`
    
    Writes a token out to the output file. This is only useful if mode is `GENERATE`.
    - `@param row`: The row of the file to read from
    - `@type row`: int
    - `@param field`: The field of the file to read from.
    - `@type field`: int
    - `@param val`: The string to write
    - `@type val`: string
    - `@rtype`: void
    ```
      row = checkIsInstance(row, int)
      field = checkIsInstance(field, int)
      val = checkIsInstance(val, str)

      phxPython.rffWriteValue(self.key, row, field, val)
    ```

## PHXSimpleType

### @PHXClassDecorator(PHXTException_Decorator)
#### class PHXSimpleType:
A base class for most ModelCenter data types. The class defines the following properties:

- `description`: String
- `units`: String
- `hasChanged`: boolean

This class will fire a property change event when `hasChanged(true)` is called. The property event will always have the property name be "value" and the old and new values of `null`. Use `toString` or `getValue` functions to get the actual new value from the variable.

- `def __init__(self, varName)`
    - `@param varName`: the name of the variable already declared in the wrapper to reference
    - `@type varName`: string
    - `@rtype`: void
    ```
      varName = checkIsInstance(varName, str)
      self.mcName = varName
    ```
- `def getUnits(self)`
    
    retrieves the units for the variable
    - `@rtype`: string
    ```
      return phxPython.simpleGetUnits(self.mcName)
    ```
- `def setUnits(self, u)`
    
    sets the units for the variable
    - `@param u`: the units value
    - `@type u`: string
    - `@rtype`: void
    ```
      u = checkIsInstance(u, str)
      phxPython.simpleSetUnits(self.mcName, u)
    ```
- `def getDescription(self)`
    
    retrieves the description of the variable
    - `@rtype`: a description geometry data
    ```
      return phxPython.simpleGetDescription(self.mcName)
    ```
- `def setDescription(self, d)`
    
    sets the description for the variable. This should be a short, one-line description.
    - `@param d`: the description
    - `@type d`: string
    - `@rtype`: void
    ```
      d = checkIsInstance(d, str)
      phxPython.simpleSetDescription(self.mcName, d)
    ```
- `def getHasChanged(self)`
    
    retrieves the `hasChanged` flag
    - `@rtype`: boolean
    ```
      return phxPython.simpleGetHasChanged(self.mcName)
    ```
- `def setHasChanged(self, v)`
    
    sets the `hasChanged` flag
    - `@param v`: whether the variable has changed
    - `@type v`: boolean
    - `@rtype`: void
    ```
      v = checkIsInstance(v, bool)
      return phxPython.simpleSetHasChanged(self.mcName, v)
    ```

## PHXSimpleArray

### @PHXClassDecorator(PHXTException_Decorator)
#### class PHXSimpleArray(PHXSimpleType)
This class enables components to create resizeable arrays where the number of dimensions is variable as well as the size of each dimension.

Typically you don't use this class directly but one of its sub-classes that are created and passed to you automatically.

- `def __init__(self, varName)`
    - `@param varName`: the name of the variable already declared in the wrapper to reference
    - `@type varName`: string
    - `@rtype`: void
    ```
      varName = checkIsInstance(varName, str)
      self.mcName = varName
    ```
 - `def toString(self)`
    
    Returns the string form of this array. Puts each element in quotes, even if it is a number and backslashes any quote or backslash characters (" and \\).
    - `@rtype`: string
    ```
      return phxPython.arrayToString(self.mcName)
    ```
 - `def fromString(self, value)`
    
    reads in the entire array in string form.  An example 2D array specification would be::
    ```
         bounds[3,2] { 1,2,3,4,5,6 }
    ```
    - `@param value`: the value of the array
    - `@type value`: string
    - `@rtype`: void
    ```
      phxPython.arrayFromString(self.mcName, value)
    ```
 - `def getDimensions(self)`
    
    gets the dimensions of the array
    - `@rtype`: int[]
    ```
      dims = phxPython.arrayGetDimensions(self.mcName).split(', ')
      try:
         for i in range(len(dims))`
            dims[i] = int(dims[i])
      except RuntimeError:
         pass
      return dims
    ```
 - `def setDimensions(self, dim)`
    
    Sets the dimensions of the array. Will preserve as many element values as possible.
    - `@param dim`: the new dimensions for the array
    - `@type dim`: int[]
    - `@rtype`: void
    ```
      phxPython.arraySetDimensions(self.mcName, indexListToCSV(dim))
    ```
 - `def getNumDimensions(self)`
    
    Gets the number of dimensions of the array
    - `@rtype`: int
    ```
      return phxPython.arrayGetNumDimensions(self.mcName)
    ```
 - `def resize(self, newSize)`
    
    Resize the nD array to the new size specified. Preserve elements if the # of dimensions stays the same, else initialize the array with default values.
    - `@param newSize`: the new dimensions for the array
    - `@type newSize`: int[]
    - `@rtype`: void
    ```
      self.setDimensions(newSize)
    ```
 - `def getLockResize(self)`
    
    Determine whether the array can current be resized or not.
    - `@rtype`: boolean
    ```
      return phxPython.arrayGetLockResize(self.mcName)
    ```
 - `def setLockResize(self, lockResize)`
    
    Tells this array that it cannot be resized. Implies `lockDimensions`.
    - `@type lockResize`: boolean
    - `@rtype`: void
    ```
      lockResize = checkIsInstance(lockResize, bool)
      phxPython.arraySetLockResize(self.mcName, lockResize)
    ```
 - `def getLength(self, dim=0)`
    
    Gets the length of the first dimension of the array.
    - `@param dim`: the dimension of interest (default is 0)
    - `@type dim`: int
    - `@rtype`: int
    ```
      dim = checkIsInstance(dim, int)
      return phxPython.arrayGetLength(self.mcName, dim)
    ```
 - `def setLength(self, length, dim=0)`
    
    Sets the length of the first dimension of the array. Will preserve as many element values as possible.
    - `@param length`: the new length of the 1D array
    - `@type length`: int
    - `@param dim`: the dimension of interest (default is 0)
    - `@type dim`: int
    - `@rtype`: void
    ```
      length = checkIsInstance(length, int)
      dim = checkIsInstance(dim, int)
      phxPython.arraySetLength(self.mcName, length, dim)
    ```
 - `def lockDimensions(self)`
    
    Tells this array that the number of dimensions cannot be changed from what they are right now.
    - `@rtype`: void
    ```
      phxPython.arrayLockDimensions(self.mcName)
    ```

## PHXBoolean

### @PHXClassDecorator(PHXTException_Decorator)
#### class PHXBoolean(PHXSimpleType)
The ModelCenter type for booleans. This class adds the following features to the `PHXSimpleType`:

- `value`: boolean
- `valueStr`: the source string for the value, useful for error checking when the value is NaN

- `def __init__(self, varName)`
    
    initializes value to false
    - `@param varName`: the name of the variable already declared in the wrapper to reference
    - `@type varName`: string
    - `@rtype`: void
    ```
      varName = checkIsInstance(varName, str)
      self.mcName = varName
    ```
 - `def fromString(self, value)`
    
    converts a String representation to the internal value
    - `@param value`: the value to convert
    - `@type value`: string
    - `@rtype`: void
    ```
      value = checkIsInstance(value, str)

      boolVal = bool(value)
      phxPython.boolSetValue(self.mcName, boolVal)
    ```
 - `def getValue(self)`
    
    retrieves the current value of the variable
    - `@rtype`: boolean
    ```
      return phxPython.boolGetValue(self.mcName)
    ```
 - `def getValueStr(self)`
    
    retrieves the current value of the variable (in string form)
    - `@rtype`: string
    ```
      return fromString()
    ```
 - `def setValue(self, value)`
    
    sets the value for the variable
    - `@param value`: the value
    - `@type value`: boolean
    - `@rtype`: void
    ```
      value = checkIsInstance(value, bool)
      phxPython.boolSetValue(self.mcName, value)
    ```
 - `def toString(self)`
    
    converts the variable to a string
    - `@rtype`: string
    ```
      return str(bool(phxPython.boolToString(self.mcName)))
    ```

## PHXBooleanArray

### @PHXClassDecorator(PHXTException_Decorator)
#### class PHXBooleanArray(PHXSimpleArray)
Class wraps an array of `PHXBoolean` variables for the ScriptWrapper utility.


 - `def __init__(self, varName)`
    - `@param varName`: the name of the variable already declared in the wrapper to reference
    - `@type varName`: string
    - `@rtype`: void
    ```
      varName = checkIsInstance(varName, str)
      self.mcName = varName
    ```
 - `def fromString(self, arg1, arg2=False)`
    
    Sets the value of a single element based on string input. Data is converted as appropriate.
    
    **NOTE**: if only one argument is provided, then the `fromString()` from `PHXSimpleArray` is used.
    - `@param arg1`: Index to which element to set.
    - `@type arg1`: string (as a comma-separated list of indices), int[], or int
    - `@param arg2`: The new value.
    - `@type arg2`: string
    - `@rtype`: void
    ```
      index = arg1
      value = arg2
      if isinstance(arg2, str)`
         index = indexListToCSV(arg1)
      else:
         index = str(-1)
         value = str(arg1)
      phxPython.boolArrayFromString(self.mcName, index, value)
    ```
 - `def getValue(self, index)`
    
    Gets the value of an element as a `PHXBoolean` object
    - `@param index`: The array index
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@rtype`: boolean
    ```
      return phxPython.boolArrayGetValue(self.mcName, indexListToCSV(index))
    ```
 - `def getBooleanValue(self, index)`
    
    Gets the value of an element as a boolean
    - `@param index`: The array index
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@rtype`: boolean
    ```
      index = checkIsInstance(index, (int, list, str))
      return self.getValue(index)
    ```
 - `def getValueStr(self, index)`
    
    Gets the value of an element as a string
    - `@param index`: The array index
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@rtype`: string
    ```
      index = checkIsInstance(index, (int, list, str))
      return phxPython.boolArrayGetValueStr(self.mcName, index)
    ```
 - `def setValue(self, index, value)`
    
    sets an element as a double
    - `@param index`: The array index
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@param value`: value to set
    - `@type value`: boolean
    - `@rtype`: void
    ```
      value = checkIsInstance(value, bool)
      phxPython.boolArraySetValue(self.mcName, indexListToCSV(index), value)
    ```
 - `def toString(self, index="-1")`
    
    Returns the array as a string.
    - `@param index`: The array index
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@rtype`: string
    ```
      retDict = {
          "'"`: "",
          "t"`: "T",
          "f"`: "F",
          "\""`: "",
      }
      return multiple_replace(phxPython.boolArrayToString(self.mcName, indexListToCSV(index)), retDict)
    ```

## PHXDouble

### @PHXClassDecorator(PHXTException_Decorator)
#### class PHXDouble(PHXSimpleType)
The ModelCenter type for doubles. This class adds the following features to the `PHXSimpleType`:

- `value`: double
- `valueStr`: the source string for the value, useful for error checking when the value is NaN
- `hasUpperValue`: boolean
- `upperValue`: double
- `hasLowerValue`: boolean
- `lowerValue`: double
- `enumValues`: double[]
- `enumValues`: string[]

If the variable has an upper or lower bound and an attempt is made to store an invalid value, then an exception will be thrown.

 - `def __init__(self, varName)`
    
    initializes value to zero without upper or lower bounds
    - `@param varName`: the name of the variable already declared in the wrapper to reference
    - `@type varName`: string
    - `@rtype`: void
    ```
      varName = checkIsInstance(varName, str)
      self.mcName = varName
    ```
 - `def getValue(self)`
    
    retrieves the current value of the variable
    - `@rtype`: double
    ```
      return phxPython.dblGetValue(self.mcName)
    ```
 - `def setValue(self, val)`
    
    sets the value for the variable
    - `@param val`: the value
    - `@type val`: double
    - `@rtype`: void
    ```
      val = checkIsInstance(val, float)
      phxPython.dblSetValue(self.mcName, val)
    ```
 - `def toString(self)`
    
    converts the variable to a string
    - `@rtype`: string
    ```
      return phxPython.dblToString(self.mcName)
    ```
 - `def fromString(self, val)`
    
    converts a String representation to the internal value
    - `@param val`: the value to convert
    - `@type val`: string
    - `@rtype`: void
    ```
      val = checkIsInstance(val, str)
      phxPython.dblFromString(self.mcName, val)
    ```
 - `def getEnumAliases(self)`
    
    Gets the enumeration aliases list
    - `@rtype`: string[]
    ```
      enumAliases = phxPython.dblGetEnumAliases(self.mcName).strip()
      if enumAliases != '':
         return enumAliases.split(', ')
      else:
         return []
    ```
 - `def setEnumAliases(self, aliases)`
    
    Sets the enumeration aliases list
    - `@param aliases`: An array of strings
    - `@type aliases`: string (as a comma-separated list) or string[]
    - `@rtype`: void
    ```
      adict = {
          "["`: "",
          "]"`: "",
          "'"`: "",
      }
      aliases = multiple_replace(str(aliases), adict)
      phxPython.dblSetEnumAliases(self.mcName, aliases)
    ```
 - `def getEnumValues(self)`
    
    Gets the enumeration values list
    - `@rtype`: double[]
    ```
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
 - `def setEnumValues(self, values)`
    
    Sets the enumeration values list
    - `@param values`: Either a comma-separated list of values or an array of values
    - `@type values`: string (as a comma-separated list) or double[]
    - `@rtype`: void
    ```
      adict = {
          "["`: "",
          "]"`: "",
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
 - `def getFormat(self)`
    
    retrieves the format of the variable
    - `@rtype`: string
    ```
      return phxPython.dblGetFormat(self.mcName)
    ```
 - `def setFormat(self, format)`
    
    sets the format options
    - `@param format`: the new format
    - `@type format`: string
    - `@rtype`: void
    ```
      format = checkIsInstance(format, str)
      phxPython.dblSetFormat(self.mcName, format)
    ```
 - `def getHasLowerBound(self)`
    
    retrieves the `hasLowerBound` flag
    - `@rtype`: boolean
    ```
      return phxPython.dblGetHasLowerBound(self.mcName)
    ```
 - `def setHasLowerBound(self, value)`
    
    sets the lower bound. The `hasLowerBound` value is set to `true`
    - `@type value`: boolean
    - `@rtype`: void
    ```
      value = checkIsInstance(value, bool)
      phxPython.dblSetHasLowerBound(self.mcName, value)
    ```
 - `def getHasUpperBound(self)`
    
    retrieves the `hasUpperBound` flag
    - `@rtype`: boolean
    ```
      return phxPython.dblGetHasUpperBound(self.mcName)
    ```
 - `def setHasUpperBound(self, value)`
    
    sets the `hasUpperBound` flag
    - `@type value`: boolean
    - `@rtype`: void
    ```
      value = checkIsInstance(value, bool)
      phxPython.dblSetHasUpperBound(self.mcName, value)
    ```
 - `def getLowerBound(self)`
    
    retrieves the current lower bound value
    - `@rtype`: double
    ```
      return phxPython.dblGetLowerBound(self.mcName)
    ```
 - `def setLowerBound(self, value)`
    
    sets the lower bound. The `hasLowerBound` value is set to `true`
    - `@param value`: the lower bound
    - `@type value`: double
    - `@rtype`: void
    ```
      value = checkIsInstance(value, float)
      phxPython.dblSetLowerBound(self.mcName, value)
    ```
 - `def getUpperBound(self)`
    
    retrieves the current upper bound value
    - `@rtype`: double
    ```
      return phxPython.dblGetUpperBound(self.mcName)
    ```
 - `def setUpperBound(self, value)`
    
    sets the upper bound. The `hasUpperBound` value is set to `true`
    - `@param value`: the upper bound
    - `@type value`: double
    - `@rtype`: void
    ```
      value = checkIsInstance(value, float)
      phxPython.dblSetUpperBound(self.mcName, value)
    ```
 - `def getValueStr(self)`
    
    retrieves the current value of the variable (in string form)
    - `@rtype`: string
    ```
      return phxPython.dblToString(self.mcName)
    ```

## PHXDoubleArray

### @PHXClassDecorator(PHXTException_Decorator)
#### class PHXDoubleArray(PHXSimpleArray)
Class wraps an array of `PHXDouble` variables for the ScriptWrapper utility.

 - `def __init__(self, varName)`
    - `@param varName`: the name of the variable already declared in the wrapper to reference
    - `@type varName`: string
    - `@rtype`: void
    ```
      varName = checkIsInstance(varName, str)
      self.mcName = varName
    ```
 - `def fromString(self, arg1, arg2=False)`
    
    Sets the value of a single element based on string input. Data is converted as appropriate.
    - **NOTE**: if only one argument is provided, then the `fromString()` from `PHXSimpleArray` is used.
    - `@param arg1`: Index to which element to set.
    - `@type arg1`: string (as a comma-separated list of indices), int[], or int
    - `@param arg2`: The new value.
    - `@type arg2`: string
    - `@rtype`: void
    ```
      index = arg1
      value = arg2
      if isinstance(arg2, str)`
         index = indexListToCSV(arg1)
      else:
         index = str(-1)
         value = str(arg1)
      phxPython.dblArrayFromString(self.mcName, index, value)
    ```
 - `def toString(self, index="-1")`
    ```
      retDict = {
          "'"`: "",
          "\""`: "",
      }
      return multiple_replace(phxPython.dblArrayToString(self.mcName, indexListToCSV(index)), retDict)
    ```
 - `def getValue(self, index)`
    
    Gets an element as a double
    - `@param index`: The array index
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@rtype`: double
    ```
      return phxPython.dblArrayGetValue(self.mcName, indexListToCSV(index))
    ```
 - `def setValue(self, index, val)`
    
    sets an element as a double
    - `@param index`: The array index
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@param val`: value to set
    - `@type val`: double
    - `@rtype`: void
    ```
      val = checkIsInstance(val, float)
      phxPython.dblArraySetValue(self.mcName, indexListToCSV(index), val)
    ```
 - `def getDoubleValue(self, index)`
    
    Gets an element as a double
    - `@param index`: The array index
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@rtype`: double
    ```
      return self.getValue(index)
    ```
 - `def getEnumAliases(self)`
    
    Gets the enumeration aliases list
    - `@rtype`: string[]
    ```
      enumAliases = phxPython.dblArrayGetEnumAliases(self.mcName).strip()
      if enumAliases != '':
         return enumAliases.split(', ')
      else:
         return []
    ```
 - `def setEnumAliases(self, aliases)`
    
    Sets the enumeration aliases list
    - `@param aliases`: An array of strings
    - `@type aliases`: string (as a comma-separated list) or string[]
    - `@rtype`: void
    ```
      adict = {
          "["`: "",
          "]"`: "",
          "'"`: "",
      }
      aliases = multiple_replace(str(aliases), adict)
      phxPython.dblArraySetEnumAliases(self.mcName, aliases)
    ```
 - `def getEnumValues(self)`
    
    Gets the enumeration values list
    - `@rtype`: double[]
    ```
      enumList = phxPython.dblArrayGetEnumValues(self.mcName).strip()
      if enumList != '':
         enumList = enumList.split(', ')
         length = len(enumList)
         for i in range(length)`
            enumList[i] = float(enumList[i])
         return enumList
      else:
         return []
    ```
 - `def setEnumValues(self, values)`
    
    Sets the enumeration values list
    - `@param values`: Either a comma-separated list of values or an array of values
    - `@type values`: string (as a comma-separated list) or double[]
    - `@rtype`: void
    ```
      adict = {
          "["`: "",
          "]"`: "",
          "'"`: "",
      }
      values = multiple_replace(str(values), adict).strip()

      # make sure that all elements are numbers
      if values != '':
         strList = values.split(',')
         length = len(strList)
         for i in range(length)`
            strList[i] = float(strList[i])
         values = multiple_replace(str(strList), adict)

      phxPython.dblArraySetEnumValues(self.mcName, values)
    ```
 - `def getFormat(self)`
    
    retrieves the format of the variable
    - `@rtype`: string
    ```
      return phxPython.dblArrayGetFormat(self.mcName)
    ```
 - `def setFormat(self, format)`
    
    sets the format options
    - `@param format`: the new format
    - `@type format`: string
    - `@rtype`: void
    ```
      format = checkIsInstance(format, str)
      phxPython.dblArraySetFormat(self.mcName, format)
    ```
 - `def getHasLowerBound(self)`
    
    retrieves the `hasLowerBound` flag
    - `@rtype`: boolean
    ```
      return phxPython.dblArrayGetHasLowerBound(self.mcName)
    ```
 - `def setHasLowerBound(self, value)`
    
    sets the lower bound. The `hasLowerBound` value is set to `true`
    - `@type value`: boolean
    - `@rtype`: void
    ```
      value = checkIsInstance(value, bool)
      phxPython.dblArraySetHasLowerBound(self.mcName, value)
    ```
 - `def getHasUpperBound(self)`
    
    retrieves the `hasUpperBound` flag
    - `@rtype`: boolean
    ```
      return phxPython.dblArrayGetHasUpperBound(self.mcName)
    ```
 - `def setHasUpperBound(self, value)`
    
    sets the `hasUpperBound` flag
    - `@type value`: boolean
    - `@rtype`: void
    ```
      value = checkIsInstance(value, bool)
      phxPython.dblArraySetHasUpperBound(self.mcName, value)
    ```
 - `def getLowerBound(self)`
    
    retrieves the current lower bound value
    - `@rtype`: double
    ```
      return phxPython.dblArrayGetLowerBound(self.mcName)
    ```
 - `def setLowerBound(self, value)`
    
    sets the lower bound. The `hasLowerBound` value is set to `true`
    - `@param value`: the lower bound
    - `@type value`: double
    - `@rtype`: void
    ```
      value = checkIsInstance(value, float)
      phxPython.dblArraySetLowerBound(self.mcName, value)
    ```
 - `def getUpperBound(self)`
    retrieves the current upper bound value
    - `@rtype`: double
    ```
      return phxPython.dblArrayGetUpperBound(self.mcName)
    ```
 - `def setUpperBound(self, value)`
    
    sets the upper bound. The `hasUpperBound` value is set to `true`
    - `@param value`: the upper bound
    - `@type value`: double
    - `@rtype`: void
    ```
      value = checkIsInstance(value, float)
      phxPython.dblArraySetUpperBound(self.mcName, value)
    ```

## PHXRawFile

### @PHXClassDecorator(PHXTException_Decorator)
#### class PHXRawFile(PHXSimpleType)
The ModelCenter type for Files. 
- This class has the following properties:
    - `name`: String
    - `contents`: String

 - `def __init__(self, varName)`
    - `@param varName`: the name of the variable already declared in the wrapper to reference
    - `@type varName`: string
    - `@rtype`: void
    ```
      varName = checkIsInstance(varName, str)
      self.mcName = varName
    ```
 - `def fromFile(self, fileName="")`
    
    Sets the filename and then reads from disk. It is preferred that you use `setName()`
      when you create a `PHXRawFile` and then use `readFile()` without passing a filename to
      it. This allows progress monitoring to work correctly in all cases.
    - `@param fileName`: the name of the file to read from (default is blank string)
    - `@rtype`: fileName`: string
    - `@rtype`: void
    ```
      fileName = checkIsInstance(fileName, str)
      phxPython.fileFromFile(self.mcName, fileName)
    ```
 - `def fromString(self, value)`
    
    converts a String representation to the internal value
    - `@param value`: the value to convert
    - `@type value`: string
    - `@rtype`: void
    ```
      value = checkIsInstance(value, str)
      phxPython.fileFromString(self.mcName, value)
    ```
 - `def getBaseName(self)`
    
    gets the base name of the file
    - `@rtype`: string
    ```
      return phxPython.fileGetBaseName(self.mcName)
    ```
 - `def getContents(self)`
    
    retrieves the contents of the file
    - `@rtype`: string
    ```
      return phxPython.fileGetContents(self.mcName)
    ```
 - `def getFileExtension(self)`
    
    Returns the extension of the file that this object represents
    - `@rtype`: string
    ```
      return phxPython.fileGetFileExtension(self.mcName)
    ```
 - `def getIsBinary(self)`
    
    Tells whether or not the the file is binary. Simply switches on whether or not the mime type starts with text.
    - `@rtype`: boolean
    ```
      return phxPython.fileGetIsBinary(self.mcName)
    ```
 - `def getMimeType(self)`
    
    retrieves the mime type associated with the file variable
    - `@rtype`: string
    ```
      return phxPython.fileGetMimeType(self.mcName)
    ```
 - `def getName(self)`
    
    retrieves the name of the file
    - `@rtype`: string
    ```
      return phxPython.fileGetName(self.mcName)
    ```
 - `def getNameCoded(self)`
    
    retrieves the name of the file in coded form (without `$variables` replaced)
    - `@rtype`: string
    ```
      return phxPython.fileGetNameCoded(self.mcName)
    ```
 - `def hasChanged(self)`
    
    checks to see if the file has changed since the last time `getContents()` was called
    - `@rtype`: boolean
    ```
      return phxPython.fileHasChanged(self.mcName)
    ```
 - `def markAsRead(self)`
    
    call this function after you manually get the contents of the file. The function
      records its name and timestamp for use with the `hasChanged()` function
    - `@rtype`: void
    ```
      phxPython.fileMarkAsRead(self.mcName)
    ```
 - `def readFile(self, fileName="")`
    
    Sets the filename and then reads from disk. It is preferred that you use `setName()`
      when you create a `PHXRawFile` and then use `readFile()` without passing a filename to
      it. This allows progress monitoring to work correctly in all cases.
    - `@param fileName`: the name of the file
    - `@rtype`: fileName`: string
    - `@rtype`: void
    ```
      fileName = checkIsInstance(fileName, str)
      self.fromFile(fileName)
    ```
 - `def setBaseName(self, name)`
    
    sets the base name of the file
    - `@param name`: the name
    - `@type name`: string
    - `@rtype`: void
    ```
      name = checkIsInstance(name, str)
      phxPython.fileSetBaseName(self.mcName, name)
    ```
 - `def setContents(self, contents)`
    
    sets the contents of the file. The actual file is not modified until the `writeFile()`
      method is issued.
    - `@param contents`: the contents of the file
    - `@type contents`: string
    - `@rtype`: void
    ```
      contents = checkIsInstance(contents, str)
      phxPython.fileSetContents(self.mcName, contents)
    ```
 - `def setFileExtension(self, extension)`
    
    Sets the extension of the file that this object represents.
    
    It is preferred that you use `setName()` and let the system automatically figure out
      the extension based on what you pass in. Then, you can use `readFile()` and `writeFile()`
      without passing filenames to those calls. This allows for progress monitoring to work
      correctly in all cases.
    - `@param extension`: the new file extension for the file
    - `@type extension`: string
    - `@rtype`: void
    ```
      extension = checkIsInstance(extension, str)
      phxPython.fileSetFileExtension(self.mcName, extension)
    ```
 - `def setIsBinary(self, flag)`
    
    Forces this file to be binary or not. If this causes the mode to change, will set the
      mime type to `text/plain` or `application/octet-stream` as appropriate.
    - `@type flag`: boolean
    - `@rtype`: void
    ```
      flag = checkIsInstance(flag, bool)
      phxPython.fileSetIsBinary(self.mcName, bool(flag))
    ```
 - `def setMimeType(self, mimeType)`
    
    sets the mime type associated with the file variable
    - `@param mimeType`: the mime type
    - `@type mimeType`: string
    - `@rtype`: void
    ```
      mimeType = checkIsInstance(mimeType, str)
      phxPython.fileSetMimeType(self.mcName, mimeType)
    ```
 - `def setName(self, name)`
    
    sets the name of the file
    - `@param name`: the name
    - `@type name`: string
    - `@rtype`: void
    ```
      name = checkIsInstance(name, str)
      phxPython.fileSetName(self.mcName, name)
    ```
 - `def toFile(self, fileName="")`
    
    Sets the filename and then writes the file to disk. It is preferred that
      you use `setName()` when you create a `PHXRawFile` and then use `writeFile()`
      without passing a filename to it. This allows progress monitoring to work
      correctly in all cases.
    - `@param fileName`: the name of the file to read from (default is blank string)
    - `@rtype`: fileName`: string
    - `@rtype`: void
    ```
      fileName = checkIsInstance(fileName, str)
      phxPython.fileToFile(self.mcName, fileName)
    ```
 - `def toString(self)`
    
    converts the variable to a string
    - `@rtype`: string
    ```
      return phxPython.fileToString(self.mcName)
    ```
 - `def writeFile(self, fileName="")`
    
    sets the filename and then writes the file to disk. It is preferred that
      you use `setName()` when you create a `PHXRawFile` and then use `writeFile()`
      without passing a filename to it. This allows progress monitoring to work
      correctly in all cases.
    - `@param fileName`: the name of the file to read from (default is blank string)
    - `@rtype`: fileName`: string
    - `@rtype`: void
    ```
      fileName = checkIsInstance(fileName, str)
      self.toFile(fileName)
    ```

## PHXRawFileArray

### @PHXClassDecorator(PHXTException_Decorator)
#### class PHXRawFileArray(PHXSimpleArray)
The ModelCenter type for File Array. 
- This class has the following properties:
    - `name`: String

 - `def __init__(self, varName)`
    - `@param varName`: the name of the variable already declared in the wrapper to reference
    - `@type varName`: string
    - `@rtype`: void
    ```
      varName = checkIsInstance(varName, str)
      self.mcName = varName
    ```
 - `def fromFile(self, index, fileName="")`
    
    Sets the filename and then reads from disk. It is preferred that you use `setName()`
      when you create a PHXRawFileArray and then use `readFile()` without passing a filename to
      it. This allows progress monitoring to work correctly in all cases.
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@param fileName`: the name of the file to read from (default is blank string)
    - `@rtype`: fileName`: string
    - `@rtype`: void
    ```
      fileName = checkIsInstance(fileName, str)
      phxPython.fileArrayFromFile(self.mcName, indexListToCSV(index), fileName)
    ```
 - `def fromString(self, value)`
    
    converts a String representation to the internal value
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@param value`: the value to convert
    - `@type value`: string
    - `@rtype`: void
    ```
      value = checkIsInstance(value, str)
      phxPython.fileArrayFromString(self.mcName, indexListToCSV(index), value)
    ```
 - `def getBaseName(self)`
    
    gets the base name of the file
    - `@rtype`: string
    ```
      return phxPython.fileArrayGetBaseName(self.mcName)
    ```
 - `def getContents(self, index)`
    
    retrieves the contents of the file
    - `@rtype`: string
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    ```
      return phxPython.fileArrayGetContents(self.mcName, indexListToCSV(index))
    ```
 - `def getFileExtension(self, index)`
    
    Returns the extension of the file that this object represents
    - `@rtype`: string
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    ```
      return phxPython.fileArrayGetFileExtension(self.mcName, indexListToCSV(index))
    ```
 - `def getIsBinary(self)`
    
    Tells whether or not the the file array contains binary files. Simply switches on whether
      or not the mime type starts with text.
    - `@rtype`: boolean
    ```
      return phxPython.fileArrayGetIsBinary(self.mcName)
    ```
 - `def getMimeType(self)`
    
    retrieves the mime type associated with the file array
    - `@rtype`: string
    ```
      return phxPython.fileArrayGetMimeType(self.mcName)
    ```
 - `def getName(self, index)`
    
    retrieves the name of the file
    - `@rtype`: string
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    ```
      return phxPython.fileArrayGetName(self.mcName, indexListToCSV(index))
    ```
 - `def getNameCoded(self, index)`
    
    retrieves the name of the file in coded form (without `$variables` replaced)
    - `@rtype`: string
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    ```
      return phxPython.fileArrayGetNameCoded(self.mcName, indexListToCSV(index))
    ```
 - `def hasChanged(self, index)`
    
    checks to see if the file has changed since the last time `getContents()` was called
    - `@rtype`: boolean
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    ```
      return phxPython.fileArrayHasChanged(self.mcName, indexListToCSV(index))
    ```
 - `def markAsRead(self, index)`
    
    call this function after you manually get the contents of the file. The function
      records its name and timestamp for use with the `hasChanged()` function
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@rtype`: void
    ```
      phxPython.fileArrayMarkAsRead(self.mcName, indexListToCSV(index))
    ```
 - `def readFile(self, index, fileName="")`
    
    Sets the filename and then reads from disk. It is preferred that you use `setName()`
      when you create a `PHXRawFile` and then use `readFile()` without passing a filename to
      it. This allows progress monitoring to work correctly in all cases.
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@param fileName`: the name of the file
    - `@rtype`: fileName`: string
    - `@rtype`: void
    ```
      fileName = checkIsInstance(fileName, str)
      self.fromFile(indexListToCSV(index), fileName)
    ```
 - `def setBaseName(self, name)`
    
    sets the base name of the file
    - `@param name`: the name
    - `@type name`: string
    - `@rtype`: void
    ```
      name = checkIsInstance(name, str)
      phxPython.fileArraySetBaseName(self.mcName, name)
    ```
 - `def setContents(self, index, contents)`
    
    sets the contents of the file. The actual file is not modified until the `writeFile()`
      method is issued.
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@param contents`: the contents of the file
    - `@type contents`: string
    - `@rtype`: void
    ```
      contents = checkIsInstance(contents, str)
      phxPython.fileArraySetContents(
          self.mcName, indexListToCSV(index), contents)
    ```
 - `def setFileExtension(self, index, extension)`
    
    Sets the extension of the file that this object represents.
    
    It is preferred that you use `setName()` and let the system automatically figure out
      the extension based on what you pass in. Then, you can use `readFile()` and `writeFile()`
      without passing filenames to those calls. This allows for progress monitoring to work
      correctly in all cases.
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@param extension`: the new file extension for the file
    - `@type extension`: string
    - `@rtype`: void
    ```
      extension = checkIsInstance(extension, str)
      phxPython.fileArraySetFileExtension(
          self.mcName, indexListToCSV(index), extension)
    ```
 - `def setIsBinary(self, flag)`
    
    Forces this file to be binary or not. If this causes the mode to change, will set the
      mime type to `text/plain` or `application/octet-stream` as appropriate.
    - `@type flag`: boolean
    - `@rtype`: void
    ```
      flag = checkIsInstance(flag, bool)
      phxPython.fileArraySetIsBinary(self.mcName, bool(flag))
    ```
 - `def setMimeType(self, mimeType)`
    
    sets the mime type associated with the file variable
    - `@param mimeType`: the mime type
    - `@type mimeType`: string
    - `@rtype`: void
    ```
      mimeType = checkIsInstance(mimeType, str)
      phxPython.fileArraySetMimeType(self.mcName, mimeType)
    ```
 - `def setName(self, index, name)`
    
    sets the name of the file
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@param name`: the name
    - `@type name`: string
    - `@rtype`: void
    ```
      name = checkIsInstance(name, str)
      phxPython.fileArraySetName(self.mcName, indexListToCSV(index), name)
    ```
 - `def toFile(self, index, fileName="")`
    
    Sets the filename and then writes the file to disk. It is preferred that
      you use `setName()` when you create a `PHXRawFile` and then use `writeFile()`
      without passing a filename to it. This allows progress monitoring to work
      correctly in all cases.
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@param fileName`: the name of the file to read from (default is blank string)
    - `@rtype`: fileName`: string
    - `@rtype`: void
    ```
      fileName = checkIsInstance(fileName, str)
      phxPython.fileArrayToFile(self.mcName, indexListToCSV(index), fileName)
    ```
 - `def toString(self, index)`
    
    converts the variable to a string
    - `@rtype`: string
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    ```
      return phxPython.fileArrayToString(self.mcName, indexListToCSV(index))
    ```
 - `def writeFile(self, index, fileName="")`
    
    sets the filename and then writes the file to disk. It is preferred that
      you use `setName()` when you create a `PHXRawFile` and then use `writeFile()`
      without passing a filename to it. This allows progress monitoring to work
      correctly in all cases.
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@param fileName`: the name of the file to read from (default is blank string)
    - `@rtype`: fileName`: string
    - `@rtype`: void
    ```
      fileName = checkIsInstance(fileName, str)
      self.toFile(indexListToCSV(index), fileName)
    ```

## PHXLong

### @PHXClassDecorator(PHXTException_Decorator)
#### class PHXLong(PHXSimpleType)
The ModelCenter type for longs. This class adds the following features to the `PHXSimpleType`:

- `value`: long
- `valueStr`: the source string for the value, useful for error checking when the value is NaN
- `hasUpperValue`: boolean
- `upperValue`: long
- `hasLowerValue`: boolean
- `lowerValue`: long
- `enumValues`: long[]
- `enumAliases`: String[]

If the variable has an upper or lower bound and an attempt is made to store an invalid value, then an exception will be thrown.

 - `def __init__(self, varName)`
    - `@param varName`: the name of the variable already declared in the wrapper to reference
    - `@type varName`: string
    - `@rtype`: void
    ```
      varName = checkIsInstance(varName, str)
      self.mcName = varName
    ```
 - `def getValue(self)`
    
    retrieves the current value of the variable
    - `@rtype`: long
    ```
      return phxPython.longGetValue(self.mcName)
    ```
 - `def setValue(self, val)`
    
    sets the value for the variable
    - `@param val`: the value
    - `@type val`: long
    - `@rtype`: void
    ```
      val = checkIsInstance(val, int)
      phxPython.longSetValue(self.mcName, int(val))
    ```
 - `def toString(self)`
    
    converts the variable to a string
    - `@rtype`: string
    ```
      return phxPython.longToString(self.mcName)
    ```
 - `def fromString(self, val)`
    
    converts a String representation to the internal value
    - `@param val`: the value to convert
    - `@type val`: string
    - `@rtype`: void
    ```
      val = checkIsInstance(val, str)
      phxPython.longFromString(self.mcName, val)
    ```
 - `def getEnumAliases(self)`
    
    Gets the enumeration aliases list
    - `@rtype`: string[]
    ```
      enumAliases = phxPython.longGetEnumAliases(self.mcName).strip()
      if enumAliases != '':
         return enumAliases.split(', ')
      else:
         return []
    ```
 - `def setEnumAliases(self, aliases)`
    
    Sets the enumeration aliases list
    - `@param aliases`: An array of strings
    - `@type aliases`: string (as a comma-separated list) or string[]
    - `@rtype`: void
    ```
      adict = {
          "["`: "",
          "]"`: "",
          "'"`: "",
      }
      strVals = multiple_replace(str(aliases), adict)
      phxPython.longSetEnumAliases(self.mcName, strVals)
    ```
 - `def getEnumValues(self)`
    
    Gets the enumeration values list
    - `@rtype`: long[]
    ```
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
 - `def setEnumValues(self, values)`
    
    Sets the enumeration values list
    - `@param values`: Either a comma-separated list of values or an array of values
    - `@type values`: string (as a comma-separated list) or long[]
    - `@rtype`: void
    ```
      adict = {
          "["`: "",
          "]"`: "",
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
 - `def getFormat(self)`
    
    retrieves the format of the variable
    - `@rtype`: string
    ```
      return phxPython.longGetFormat(self.mcName)
    ```
 - `def setFormat(self, format)`
    
    sets the format options
    - `@param format`: the new format
    - `@type format`: string
    - `@rtype`: void
    ```
      format = checkIsInstance(format, str)
      phxPython.longSetFormat(self.mcName, format)
    ```
 - `def getHasLowerBound(self)`
    
    retrieves the `hasLowerBound` flag
    - `@rtype`: boolean
    ```
      return phxPython.longGetHasLowerBound(self.mcName)
    ```
 - `def setHasLowerBound(self, value)`
    
    sets the `hasLowerBound` flag
    - `@type value`: boolean
    - `@rtype`: void
    ```
      value = checkIsInstance(value, bool)
      phxPython.longSetHasLowerBound(self.mcName, value)
    ```
 - `def getHasUpperBound(self)`
    
    retrieves the `hasUpperBound` flag
    - `@rtype`: boolean
    ```
      return phxPython.longGetHasUpperBound(self.mcName)
    ```
 - `def setHasUpperBound(self, value)`
    
    sets the `hasUpperBound` flag
    - `@type value`: boolean
    - `@rtype`: void
    ```
      value = checkIsInstance(value, bool)
      phxPython.longSetHasUpperBound(self.mcName, value)
    ```
 - `def getLowerBound(self)`
    
    retrieves the current lower bound value
    - `@rtype`: long
    ```
      return phxPython.longGetLowerBound(self.mcName)
    ```
 - `def setLowerBound(self, value)`
    
    sets the lower bound. The `hasLowerBound` value is set to `true`
    - `@param value`: the lower bound
    - `@type value`: long
    - `@rtype`: void
    ```
      value = checkIsInstance(value, int)
      phxPython.longSetLowerBound(self.mcName, value)
    ```
 - `def getUpperBound(self)`
    
    retrieves the current upper bound
    - `@rtype`: long
    ```
      return phxPython.longGetUpperBound(self.mcName)
    ```
 - `def setUpperBound(self, value)`
    
    sets the upper bound. The `hasUpperBound` value is set to `true`
    - `@param value`: the upper bound
    - `@type value`: long
    - `@rtype`: void
    ```
      value = checkIsInstance(value, int)
      phxPython.longSetUpperBound(self.mcName, value)
    ```
 - `def getValueStr(self)`
    
    retrieves the current value of the variable (in string form)
    - `@rtype`: string
    ```
      return phxPython.longToString(self.mcName)
    ```

## PHXLongArray

### @PHXClassDecorator(PHXTException_Decorator)
#### class PHXLongArray(PHXSimpleArray)
Class wraps an array of `PHXLong` variables for the ScriptWrapper utility.

 - `def __init__(self, varName)`
    - `@param varName`: the name of the variable already declared in the wrapper to reference
    - `@type varName`: string
    - `@rtype`: void
    ```
      checkIsInstance(varName, str)
      self.mcName = varName
    ```
 - `def fromString(self, arg1, arg2=False)`
    
    Sets the value of a single element based on string input. Data is converted as appropriate.
    - **NOTE**: if only one argument is provided, then the `fromString()` from `PHXSimpleArray` is used.
    - `@param arg1`: Index to which element to set.
    - `@type arg1`: string (as a comma-separated list of indices), int[], or int
    - `@param arg2`: The new value.
    - `@type arg2`: string
    - `@rtype`: void
    ```
      index = arg1
      value = arg2
      if isinstance(arg2, str)`
         index = indexListToCSV(arg1)
      else:
         index = str(-1)
         value = str(arg1)
      phxPython.longArrayFromString(self.mcName, index, value)
    ```
 - `def toString(self, index="-1")`
    ```
      retDict = {
          "'"`: "",
          "\""`: "",
      }
      return multiple_replace(phxPython.longArrayToString(self.mcName, indexListToCSV(index)), retDict)
    ```
 - `def getValue(self, index)`
    
    Gets the value of an element as a long
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@rtype`: long
    ```
      return phxPython.longArrayGetValue(self.mcName, indexListToCSV(index))
    ```
 - `def setValue(self, index, val)`
    
    Sets the value of an element as a long
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@param val`: value to set
    - `@type val`: long
    - `@rtype`: void
    ```
      val = checkIsInstance(val, int)
      phxPython.longArraySetValue(self.mcName, indexListToCSV(index), val)
    ```
 - `def getLongValue(self, index)`
    
    Gets the value of an element as a long
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@rtype`: long
    ```
      return self.getValue(index)
    ```
 - `def getEnumAliases(self)`
    
    Gets the enumeration aliases list
    - `@rtype`: string[]
    ```
      enumAliases = phxPython.longArrayGetEnumAliases(self.mcName).strip()
      if enumAliases != '':
         return enumAliases.split(', ')
      else:
         return []
    ```
 - `def setEnumAliases(self, aliases)`
    
    Sets the enumeration aliases list
    - `@param aliases`: An array of strings
    - `@type aliases`: string (as a comma-separated list) or string[]
    - `@rtype`: void
    ```
      adict = {
          "["`: "",
          "]"`: "",
          "'"`: "",
      }
      aliases = multiple_replace(str(aliases), adict)
      phxPython.longArraySetEnumAliases(self.mcName, aliases)
    ```
 - `def getEnumValues(self)`
    
    Gets the enumeration values list
    - `@rtype`: long[]
    ```
      enumList = phxPython.longArrayGetEnumValues(self.mcName).strip()
      if enumList != '':
         enumList = phxPython.longArrayGetEnumValues(self.mcName).split(', ')
         length = len(enumList)
         for i in range(length)`
            enumList[i] = int(enumList[i])
         return enumList
      else:
         return []
    ```
 - `def setEnumValues(self, values)`
    
    Sets the enumeration values list
    - `@param values`: Either a comma-separated list of values or an array of values
    - `@type values`: string (as a comma-separated list) or long[]
    - `@rtype`: void
    ```
      adict = {
          "["`: "",
          "]"`: "",
      }
      values = multiple_replace(str(values), adict)

      # make sure that all elements are integers
      if values != '':
         strList = values.split(',')
         length = len(strList)
         for i in range(length)`
            strList[i] = int(strList[i])
         values = multiple_replace(str(strList), adict)

      phxPython.longArraySetEnumValues(self.mcName, values)
    ```
 - `def getFormat(self)`
    
    retrieves the format of the variable
    - `@rtype`: string
    ```
      return phxPython.longArrayGetFormat(self.mcName)
    ```
 - `def setFormat(self, format)`
    
    sets the format options
    - `@param format`: the new format
    - `@type format`: string
    - `@rtype`: void
    ```
      format = checkIsInstance(format, str)
      phxPython.longArraySetFormat(self.mcName, format)
    ```
 - `def getHasLowerBound(self)`
    
    retrieves the `hasLowerBound` flag
    - `@rtype`: boolean
    ```
      return phxPython.longArrayGetHasLowerBound(self.mcName)
    ```
 - `def setHasLowerBound(self, value)`
    
    sets the `hasLowerBound` flag
    - `@type value`: boolean
    - `@rtype`: void
    ```
      value = checkIsInstance(value, bool)
      phxPython.longArraySetHasLowerBound(self.mcName, value)
    ```
 - `def getHasUpperBound(self)`
    
    retrieves the `hasUpperBound` flag
    - `@rtype`: boolean
    ```
      return phxPython.longArrayGetHasUpperBound(self.mcName)
    ```
 - `def setHasUpperBound(self, value)`
    
    sets the `hasUpperBound` flag
    - `@type value`: boolean
    - `@rtype`: void
    ```
      value = checkIsInstance(value, bool)
      phxPython.longArraySetHasUpperBound(self.mcName, value)
    ```
 - `def getLowerBound(self)`
    
    retrieves the current lower bound value
    - `@rtype`: long
    ```
      return phxPython.longArrayGetLowerBound(self.mcName)
    ```
 - `def setLowerBound(self, value)`
    
    sets the lower bound. The `hasLowerBound` value is set to `true`
    - `@param value`: the lower bound
    - `@type value`: long
    - `@rtype`: void
    ```
      value = checkIsInstance(value, int)
      phxPython.longArraySetLowerBound(self.mcName, value)
    ```
 - `def getUpperBound(self)`
    
    retrieves the current upper bound
    - `@rtype`: long
    ```
      return phxPython.longArrayGetUpperBound(self.mcName)
    ```
 - `def setUpperBound(self, value)`
    
    sets the upper bound. The `hasUpperBound` value is set to `true`
    - `@param value`: the upper bound
    - `@type value`: long
    - `@rtype`: void
    ```
      value = checkIsInstance(value, int)
      phxPython.longArraySetUpperBound(self.mcName, value)
    ```

## PHXString

### @PHXClassDecorator(PHXTException_Decorator)
#### class PHXString(PHXSimpleType)
The ModelCenter type for Strings. 
- This class adds the following features to the `PHXSimpleType`:
    - `value`: String
    - `enumValues`: String[]
    - `enumAliases`: String[]

 - `def __init__(self, varName)`
    - `@param varName`: the name of the variable already declared in the wrapper to reference
    - `@type varName`: string
    - `@rtype`: void
    ```
      varName = checkIsInstance(varName, str)
      self.mcName = varName
    ```
 - `def getValue(self)`
    
    retrieves the current value of the variable
    - `@rtype`: string
    ```
      return phxPython.strGetValue(self.mcName)
    ```
 - `def setValue(self, val)`
    
    sets the value for the variable
    - `@param val`: the value
    - `@type val`: string
    ```
      val = checkIsInstance(val, str)
      phxPython.strSetValue(self.mcName, val)
    ```
 - `def toString(self)`
    
    converts the variable to a string
    - `@rtype`: string
    ```
      return phxPython.strGetValue(self.mcName)
    ```
 - `def fromString(self, val)`
    
    converts a String representation to the internal value
    - `@param val`: the value to convert
    - `@type val`: string
    - `@rtype`: void
    ```
      val = checkIsInstance(val, str)
      phxPython.strSetValue(self.mcName, val)
    ```
 - `def getEnumAliases(self)`
    
    Gets the enumeration aliases list
    - `@rtype`: string[]
    ```
      enumAliases = phxPython.strGetEnumAliases(self.mcName).strip()
      if enumAliases != '':
         return enumAliases.split(', ')
      else:
         return []
    ```
 - `def setEnumAliases(self, aliases)`
    
    Sets the enumeration aliases list
    - `@param aliases`: An array of strings
    - `@type aliases`: string (as a comma-separated list) or string[]
    - `@rtype`: void
    ```
      adict = {
          "["`: "",
          "]"`: "",
          "'"`: "",
      }
      strAliases = multiple_replace(str(aliases), adict)
      phxPython.strSetEnumAliases(self.mcName, strAliases)
    ```
 - `def getEnumValues(self)`
    
    Gets the enumeration values list
    - `@rtype`: string[]
    ```
      enumValues = phxPython.strGetEnumValues(self.mcName).strip()
      if enumValues != '':
         return enumValues.split(', ')
      else:
         return []
    ```
 - `def setEnumValues(self, values)`
    
    Sets the enumeration values list
    - `@param values`: Either a comma-separated list of values or an array of values
    - `@type values`: string (as a comma-separated list) or string[]
    - `@rtype`: void
    ```
      adict = {
          "["`: "",
          "]"`: "",
          "'"`: "",
      }
      strVals = multiple_replace(str(values), adict)
      phxPython.strSetEnumValues(self.mcName, strVals)
    ```

## PHXStringArray

### @PHXClassDecorator(PHXTException_Decorator)
#### class PHXStringArray(PHXSimpleArray)
Class wraps an array of `PHXString` variables for the ScriptWrapper utility.

 - `def __init__(self, varName)`
    - `@param varName`: the name of the variable already declared in the wrapper to reference
    - `@type varName`: string
    - `@rtype`: void
    ```
      varName = checkIsInstance(varName, str)
      self.mcName = varName
    ```
 - `def fromString(self, arg1, arg2=False)`
    
    Sets the value of a single element based on string input. Data is converted as appropriate.
    
    **NOTE**: if only one argument is provided, then the `fromString()` from `PHXSimpleArray` is used.
    - `@param arg1`: Index to which element to set.
    - `@type arg1`: string (as a comma-separated list of indices), int[], or int
    - `@param arg2`: The new value.
    - `@type arg2`: string
    - `@rtype`: void
    ```
      index = arg1
      value = arg2
      if isinstance(arg2, str)`
         index = indexListToCSV(arg1)
      else:
         index = str(-1)
         value = str(arg1)
      phxPython.strArrayFromString(self.mcName, index, value)
    ```
 - `def toString(self, index="-1")`
     ```
      retDict = {
          "'"`: "",
          "\""`: "",
      }
      return multiple_replace(phxPython.strArrayToString(self.mcName, indexListToCSV(index)), retDict)
    ```
 - `def getValue(self, index)`
    
    Gets a particular element as a String
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@rtype`: string
    ```
      return phxPython.strArrayGetValue(self.mcName, indexListToCSV(index))
    ```
 - `def setValue(self, index, val)`
    
    Sets the value of an element as a long
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@param val`: value to set
    - `@type val`: string
    - `@rtype`: void
    ```
      val = checkIsInstance(val, str)
      phxPython.strArraySetValue(self.mcName, indexListToCSV(index), str(val))
    ```
 - `def getStringValue(self, index)`
    
    Gets a particular element as a String
    - `@param index`: Index to which element to set.
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@rtype`: string
    ```
      return self.getValue(index)
    ```
 - `def getEnumAliases(self)`
    
    Gets the enumeration aliases list
    - `@rtype`: string[]
    ```
      enumAliases = phxPython.strArrayGetEnumAliases(self.mcName).strip()
      if enumAliases != '':
         return enumAliases.split(', ')
      else:
         return []
    ```
 - `def setEnumAliases(self, aliases)`
    
    Sets the enumeration aliases list
    - `@param aliases`: An array of strings
    - `@type aliases`: string (as a comma-separated list) or string[]
    - `@rtype`: void
    ```
      adict = {
          "["`: "",
          "]"`: "",
          "'"`: "",
      }
      strAliases = multiple_replace(str(aliases), adict)
      phxPython.strArraySetEnumAliases(self.mcName, strAliases)
    ```
 - `def getEnumValues(self)`
    
    Gets the enumeration values list
    - `@rtype`: string[]
    ```
      enumValues = phxPython.strArrayGetEnumValues(self.mcName).strip()
      if enumValues != '':
         return enumValues.split(', ')
      else:
         return []
    ```
 - `def setEnumValues(self, values)`
    
    Sets the enumeration values list
    - `@param values`: Either a comma-separated list of values or an array of values
    - `@type values`: string (as a comma-separated list) or string[]
    - `@rtype`: void
    ```
      adict = {
          "["`: "",
          "]"`: "",
          "'"`: "",
      }
      strVals = multiple_replace(str(values), adict)
      phxPython.strArraySetEnumValues(self.mcName, strVals)
    ```

## PHXScriptObject

### @PHXClassDecorator(PHXTException_Decorator)
#### class PHXScriptObject(PHXSimpleType)
The ModelCenter type for object variable. This class adds the following features to the `PHXSimpleType`:

- `className`: string

 - `def __init__(self, varName)`

      Create a data object.
      The internal script object still needs to be initialized via initialize method

    - `@param varName`: the name of the variable already declared in the wrapper to reference
    - `@type varName`: string
    - `@rtype`: void
    ```
      varName = checkIsInstance(varName, str)
      self.mcName = varName
    ```
 - `def toString(self)`

      converts the variable to a string
    - `@rtype`: string

      return phxPython.objToString(self.mcName)

 - `def fromString(self, val)`

      converts a String representation to the internal value
    - `@param val`: the value to convert
    - `@type val`: string
    - `@rtype`: void
    ```
      val = checkIsInstance(val, str)
      phxPython.objFromString(self.mcName, val)
    ```
 - `def getClassURL(self)`

      return the class URL
    - `@rtype`: string
    ```
      return phxPython.objGetClassURL(self.mcName)
    ```
 - `def getMemberValueAsString(self, mIndex)`

      return member value
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: string
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetMemberValueAsString(self.mcName, mIndex)
    ```
 - `def getDoubleMemberValue(self, mIndex)`

      return member value
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: double
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetDoubleMemberValue(self.mcName, mIndex)
    ```
 - `def getIntMemberValue(self, mIndex)`

      return member value
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: int
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetIntMemberValue(self.mcName, mIndex)
    ```
 - `def getBooleanMemberValue(self, mIndex)`

      return member value
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: boolean
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetBooleanMemberValue(self.mcName, mIndex)
    ```
 - `def getStringMemberValue(self, mIndex)`

      return member value
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: string
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetStringMemberValue(self.mcName, mIndex)
    ```
 - `def getDoubleArrayMemberValue(self, mIndex, index)`

      return member value
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param index`: Index to an array element
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@rtype`: double
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetDoubleArrayMemberValue(self.mcName, mIndex, indexListToCSV(index))
    ```
 - `def getIntArrayMemberValue(self, mIndex, index)`

      return member value
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param index`: Index to an array element
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@rtype`: int
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetIntArrayMemberValue(self.mcName, mIndex, indexListToCSV(index))
    ```
 - `def getBooleanArrayMemberValue(self, mIndex, index)`

      return member value
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param index`: Index to an array element
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@rtype`: boolean
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetBooleanArrayMemberValue(self.mcName, mIndex, indexListToCSV(index))
    ```
 - `def getStringArrayMemberValue(self, mIndex, index)`

      return member value
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param index`: Index to an array element
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@rtype`: string
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetStringArrayMemberValue(self.mcName, mIndex, indexListToCSV(index))
    ```
 - `def setMemberValueFromString(self, mIndex, value)`

      set value of a member
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param value`: value of the member
    - `@type value`: string
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      value = checkIsInstance(value, str)
      phxPython.objSetMemberValueFromString(self.mcName, mIndex, value)
    ```
 - `def setDoubleMemberValue(self, mIndex, value)`

      set value of a double member
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param value`: value of the member
    - `@type value`: double
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      value = checkIsInstance(value, float)
      phxPython.objSetDoubleMemberValue(self.mcName, mIndex, value)
    ```
 - `def setIntMemberValue(self, mIndex, value)`

      set value of a double member
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param value`: value of the member
    - `@type value`: int
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      value = checkIsInstance(value, int)
      phxPython.objSetIntMemberValue(self.mcName, mIndex, value)
    ```
 - `def setBooleanMemberValue(self, mIndex, value)`

      set value of a double member
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param value`: value of the member
    - `@type value`: boolean
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      value = checkIsInstance(value, bool)
      phxPython.objSetBooleanMemberValue(self.mcName, mIndex, value)
    ```
 - `def setStringMemberValue(self, mIndex, value)`

      set value of a double member
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param value`: value of the member
    - `@type value`: string
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      value = checkIsInstance(value, str)
      phxPython.objSetStringMemberValue(self.mcName, mIndex, value)
    ```
 - `def setDoubleArrayMemberValue(self, mIndex, index, value)`

      set value of a double member
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param index`: Index to an array element
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@param value`: value of the member
    - `@type value`: double
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      value = checkIsInstance(value, float)
      phxPython.objSetDoubleArrayMemberValue(
          self.mcName, mIndex, indexListToCSV(index), value)
    ```
 - `def setIntArrayMemberValue(self, mIndex, index, value)`

      set value of a double member
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param index`: Index to an array element
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@param value`: value of the member
    - `@type value`: int
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      value = checkIsInstance(value, int)
      phxPython.objSetIntArrayMemberValue(
          self.mcName, mIndex, indexListToCSV(index), value)
    ```
 - `def setBooleanArrayMemberValue(self, mIndex, index, value)`

      set value of a double member
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param index`: Index to an array element
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@param value`: value of the member
    - `@type value`: boolean
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      value = checkIsInstance(value, bool)
      phxPython.objSetBooleanArrayMemberValue(
          self.mcName, mIndex, indexListToCSV(index), value)
    ```
 - `def setStringArrayMemberValue(self, mIndex, index, value)`

      set value of a double member
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param index`: Index to an array element
    - `@type index`: string (as a comma-separated list of indices), int[], or int
    - `@param value`: value of the member
    - `@type value`: string
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      value = checkIsInstance(value, str)
      phxPython.objSetStringArrayMemberValue(
          self.mcName, mIndex, indexListToCSV(index), value)
    ```
 - `def setMember(self, mIndex, value, typeStr)`

      set member. Create a member if not exists.
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param value`: value of the member
    - `@type value`: string
    - `@param typeStr`: type of the member
    - `@type typeStr`: string
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      value = checkIsInstance(value, str)
      typeStr = checkIsInstance(typeStr, str)
      phxPython.objSetMember(self.mcName, mIndex, value, typeStr)
    ```
 - `def deleteMember(self, mIndex)`

      delete a member
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      phxPython.objDeleteMember(self.mcName, mIndex)
    ```
 - `def deleteAllMembers(self)`

      delete all members
    - `@rtype`: void
    ```
      phxPython.objDeleteAllMembers(self.mcName)
    ```
 - `def callMethod(self, method)`

      call an object method
    - `@param method`: name of the method
    - `@type method`: string
    - `@rtype`: void
    ```
      method = checkIsInstance(method, str)
      return phxPython.objCallMethod(self.mcName, method)
    ```
 - `def isNonStrictType(self)`

      return true if the object is a non-strict type
    - `@rtype`: bool
    ```
      return phxPython.objIsNonStrictType(self.mcName)
    ```
 - `def toXML(self)`

      return XML representation of the object
    - `@rtype`: string
    ```
      return phxPython.objToXML(self.mcName)
    ```
 - `def fromXML(self, xmlStr)`

      set the content of the object from the XML string
    - `@param xmlStr`: XML representation of object
    - `@type xmlStr`: string
    - `@rtype`: void
    ```
      xmlStr = checkIsInstance(xmlStr, str)
      phxPython.objFromXML(self.mcName, xmlStr)
    ```
 - `def hasMember(self, mIndex)`

      return true if the member exists
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: bool
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objHasMember(self.mcName, mIndex)
    ```
 - `def getMemberLength(self, mIndex, dim=0)`

      return length of an ND array
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param dim`: specified dimension
    - `@type dim`: int
    - `@rtype`: int or list of int
    ```
      mIndex = checkIsInstance(mIndex, str)
      dim = checkIsInstance(dim, int)
      return phxPython.objGetMemberLength(self.mcName, mIndex, dim)
    ```
 - `def setMemberLength(self, mIndex, length, dim=0)`

      return length of an ND array
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param length`: size of the dimension
    - `@type length`: int
    - `@param dim`: specified dimension
    - `@type dim`: int
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      length = checkIsInstance(length, int)
      dim = checkIsInstance(dim, int)
      return phxPython.objSetMemberLength(self.mcName, mIndex, length, dim)
    ```
 - `def setMemberDimensions(self, mIndex, dim)`

      Sets the dimensions of an array member.
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param dim`: the new dimensions for the array
    - `@type dim`: int[]
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      phxPython.objSetMemberDimensions(
          self.mcName, mIndex, indexListToCSV(dim))
    ```
 - `def getMemberNumDimensions(self, mIndex)`

      Gets the number of dimensions of an array member
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: int
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetMemberNumDimensions(self.mcName, mIndex)
    ```
 - `def getMemberDimensions(self, mIndex)`

      gets the dimensions of an array member
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: int[]
    ```
      mIndex = checkIsInstance(mIndex, str)

      dims = phxPython.objGetMemberDimensions(self.mcName, mIndex).split(', ')
      try:
         for i in range(len(dims))`
            dims[i] = int(dims[i])
      except RuntimeError:
         pass
      return dims
    ```
 - `def getMemberType(self, mIndex)`

      return member type
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: string
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetMemberType(self.mcName, mIndex)
    ```
 - `def hasMemberLowerBound(self, mIndex)`

      return true if the member has `lowerbound` defined
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: bool
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objHasMemberLowerBound(self.mcName, mIndex)
    ```
 - `def hasMemberUpperBound(self, mIndex)`

      return true if the member has `upperbound` defined
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: bool
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objHasMemberUpperBound(self.mcName, mIndex)
    ```
 - `def getMemberLowerBound(self, mIndex)`

      return member's lower bound
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: string
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetMemberLowerBound(self.mcName, mIndex)
    ```
 - `def setMemberLowerBound(self, mIndex, lowerBound)`

      set member's lower bound
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param lowerBound`: lower bound
    - `@type lowerBound`: string
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      checkIsInstance(lowerBound, str)
      phxPython.objSetMemberLowerBound(self.mcName, mIndex, lowerBound)
    ```
 - `def getMemberUpperBound(self, mIndex)`

      return member's upper bound
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: string
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetMemberUpperBound(self.mcName, mIndex)
    ```
 - `def setMemberUpperBound(self, mIndex, upperBound)`

      set member's upper bound
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param upperBound`: upper bound
    - `@type upperBound`: string
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      upperBound = checkIsInstance(upperBound, str)
      phxPython.objSetMemberUpperBound(self.mcName, mIndex, upperBound)
    ```
 - `def getMemberEnumValues(self, mIndex)`

      return member's enum values
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: string
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetMemberEnumValues(self.mcName, mIndex)
    ```
 - `def setMemberEnumValues(self, mIndex, enumValues)`

      set member's enum values
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param enumValues`: enum values
    - `@type enumValues`: string
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      enumValues = checkIsInstance(enumValues, str)
      phxPython.objSetMemberEnumValues(self.mcName, mIndex, enumValues)
    ```
 - `def getMemberEnumAliases(self, mIndex)`

      return member's enum aliases
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: string
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetMemberEnumAliases(self.mcName, mIndex)
    ```
 - `def setMemberEnumAliases(self, mIndex, enumAliases)`

      set member's enum aliases
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param enumAliases`: enum aliases
    - `@type enumAliases`: string
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      enumAliases = checkIsInstance(enumAliases, str)
      phxPython.objSetMemberEnumAliases(self.mcName, mIndex, enumAliases)
    ```
 - `def getMemberDescription(self, mIndex)`

      return member's description
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: string
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetMemberDescription(self.mcName, mIndex)
    ```
 - `def setMemberDescription(self, mIndex, description)`

      set member's enum aliases
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param description`: description
    - `@type description`: string
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      description = checkIsInstance(description, str)
      phxPython.objSetMemberDescription(self.mcName, mIndex, description)
    ```
 - `def getMemberUnits(self, mIndex)`

      return member's units
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: string
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetMemberUnits(self.mcName, mIndex)
    ```
 - `def setMemberUnits(self, mIndex, units)`

      set member's units
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param units`: units
    - `@type units`: string
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      units = checkIsInstance(units, str)
      phxPython.objSetMemberUnits(self.mcName, mIndex, units)
    ```
 - `def getMemberProperty(self, mIndex, propertyName)`

      return member's property
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param propertyName`: name of the property
    - `@type propertyName`: string
    - `@rtype`: string
    ```
      mIndex = checkIsInstance(mIndex, str)
      propertyName = checkIsInstance(propertyName, str)
      return phxPython.objGetMemberProperty(self.mcName, mIndex, propertyName)
    ```
 - `def setMemberProperty(self, mIndex, propertyName, propertyValue)`

      set member's property
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param propertyName`: property name
    - `@type propertyName`: string
    - `@param propertyValue`: property value
    - `@type propertyValue`: string
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      propertyName = checkIsInstance(propertyName, str)
      propertyValue = checkIsInstance(propertyValue, str)
      phxPython.objSetMemberProperty(
          self.mcName, mIndex, propertyName, propertyValue)
    ```
 - `def fromFile(self, mIndex, fileName="")`

      set content of a file or file array member from a file
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param fileName`: file name
    - `@rtype`: fileName`: string
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      fileName = checkIsInstance(fileName, str)
      phxPython.objFromFile(self.mcName, mIndex, fileName)
    ```
 - `def toFile(self, mIndex, fileName="")`

      write content of a file or file array member to a file
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param fileName`: file name
    - `@rtype`: fileName`: string
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      fileName = checkIsInstance(fileName, str)
      phxPython.objToFile(self.mcName, mIndex, fileName)
    ```
 - `def getIsBinary(self, mIndex)`

      return `True` if the file or file array member contains a binary file
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: boolean
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetIsBinary(self.mcName, mIndex)
    ```
 - `def setIsBinary(self, mIndex, isBinary)`

      set whether the file or file array member contains a binary file
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param isBinary`: whether it is a binary or not
    - `@type isBinary`: boolean
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      isBinary = checkIsInstance(isBinary, bool)
      phxPython.objSetIsBinary(self.mcName, mIndex, isBinary)
    ```
 - `def getFileName(self, mIndex)`

      return file name of the file or file array member
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@rtype`: string
    ```
      mIndex = checkIsInstance(mIndex, str)
      return phxPython.objGetFileName(self.mcName, mIndex)
    ```
 - `def setFileName(self, mIndex, fileName)`

      set file name for file or file array member
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param fileName`: file name
    - `@rtype`: fileName`: string
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      fileName = checkIsInstance(fileName, str)
      phxPython.objSetFileName(self.mcName, mIndex, fileName)
    ```
 - `def setFileExtension(self, mIndex, fileExtension)`

      set file extension for file or file array member
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param fileExtension`: file extension
    - `@type fileExtension`: string
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      fileExtension = checkIsInstance(fileExtension, str)
      phxPython.objSetFileExtension(self.mcName, mIndex, fileExtension)
    ```
 - `def setBaseName(self, mIndex, baseName)`

      set base directory for file or file array member
    - `@param mIndex`: index of the member
    - `@type mIndex`: string
    - `@param baseName`: base directory
    - `@type baseName`: string
    - `@rtype`: void
    ```
      mIndex = checkIsInstance(mIndex, str)
      baseName = checkIsInstance(baseName, str)
      phxPython.objSetBaseName(self.mcName, mIndex, baseName)
    ```