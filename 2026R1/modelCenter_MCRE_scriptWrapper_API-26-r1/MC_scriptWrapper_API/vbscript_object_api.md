# VBScript Object scriptWrapper API

## Wrapper Object

The ScriptWrapper defines a global object for all scripts: **wrapper**. This object supports the following methods and properties:

### Properties and Methods

| Property/Method | Description |
|---|---|
| `addMethod( name, [optional]fullName, [optional]downloadInputs )`<br>`addMethod( name )` | You can specify methods in the header using the `method:` syntax. This is the preferred technique.<br><br>Registers a method that can be invoked by the client application (for example, ModelCenter). The method specified should match a method defined in the script that takes no arguments.<br><br>```wrapper.addMethod "reinitialize"```<br>```sub reinitialize```<br>```    x = 0```<br>```end sub```<br><br>If the optional `fullName` argument is passed, clients may choose to display that text instead of the method name in their GUIs.<br><br>If the optional `downloadInputs` argument is passed, the value is returned to the client as a hint for whether to re-download component input values after calling the method. |
| `variable addVariable( name, type, isInput )` | Adds a variable to the script environment at run time. For example, to add a variable named `cost` to the wrapper, use the following code:<br><br>```dim cost```<br>```set cost = wrapper.addVariable( "cost", "double", false )```<br>```cost.value = volume*1.3```<br><br>Note that the variable returned from the `addVariable()` function must be stored if it is needed later. Also note that to access the value of the variable, the `.value` sub property must explicitly be used.<br><br>Valid variable types include:<br>- double<br>- double[]<br>- int<br>- int[]<br>- file<br>- string<br>- string[]<br>- boolean<br>- boolean[] |
| `variable getVariable( name )` | Retrieves a variable from the wrapper. This function must be used to access variables that are in sub-groups. For example, to modify the value of a variable named `outputs.cost`, use the following code:<br><br>```dim cost```<br>```set cost = wrapper.getVariable( "outputs.cost" )```<br>```cost.value = 10```<br><br>Note that to access the value of the variable, the `.value` sub property must explicitly be used. |
| `removeVariable( name )` | Removes a variable from the wrapper |
| `sleep( milliseconds )` | Sleeps for a period of time |
| `directory` | A read-only property containing the directory that the wrapper is stored in. |

## Boolean Variable Object

### Properties

| Property | Type | Description |
|---|---|---|
| `description` | string | A short, one-line description of the variable. |
| `value` | boolean | The value of the variable. This is the default property. |

## Boolean Array Object

### Properties

| Property | Type | Description |
|---|---|---|
| array | array | Gets or sets the entire array at once. |
| `description` | string | A short, one-line description of the variable. |
| `length( dim )` | integer | The number of elements in the array.<br>- `dim` - The dimension to read. Optional (defaults to 0). |
| `numDimensions` | integer | Read only attribute which returns the number of dimensions in the n-D array |
| `size ( dim )` | integer | The same as `length`. |
| `value( index1, index2, ... )` | boolean | The value of the variable. This is the default property.<br>- `index1` - The first index in the array or a string representation of the entire multi-dimensional array index of the form "[3,2,4]", or an array of integers representing all the dimensions of the array.<br>- `index2` - If `index1` is the first index, this and further arguments can optionally be filled in for further dimensions of the array. |

### Methods 

| Method | Description |
|---|---|
| `getNumDimensions()` | Returns the number of dimensions of the array |
| `setDimensions( 1stDimSize, 2ndDimSize, ... , 10thDimSize )` | Sets the lengths of the various dimensions of the array. The array will have as many dimensions as it is given parameters in this function (for example, 1-10).<br>- `1stDimSize` - the size of the 1st dimension<br>- `2ndDimSize` - the size of the 2nd dimension<br>- ...<br>- `10thDimSize` - the size of the 10th dimension |
| `getArray()` | Returns the array |
| `setArray( array )` | Sets the contents of the array to equal that of the given array<br>- `array` - the array to copy from |

## Double Variable Object

### Properties

| Property | Type | Description |
|---|---|---|
| `description` | string | A short, one-line description of the variable. |
| `enumAlias` | string | A comma-separated list of user-friendly string values corresponding to each enumerated value. The alias value may be used to set the value of the variable instead of the actual enumerated value. If alias values are specified, ModelCenter will display the alias value rather than the enumerated value. |
| `enumValues` | string | A comma-separated list of values. |
| `lowerBound` | double | The lower bound for the variable. If not specified, there is no bound. |
| `units` | string | The units value |
| `upperBound` | double | The upper bound for the variable. If not specified, there is no bound. |
| `value` | double | The value of the variable. This is the default property. |

## Double Array Object

### Properties

| Property | Type | Description |
|---|---|---|
| `array` | array | Gets or sets the entire array at once. |
| `description` | string | A short, one-line description of the variable. |
| `enumAlias` | string | A comma-separated list of user-friendly string values corresponding to each enumerated value. The alias value may be used to set the value of the variable instead of the actual enumerated value. If alias values are specified, ModelCenter will display the alias value rather than the enumerated value. |
| `enumValues` | string | A comma-separated list of values. |
| `length( dim )` | integer | The number of elements in the array.<br>- `dim` - The dimension to read. Optional (defaults to 0). |
| `lowerBound` | double | The lower bound for the variable. If not specified, there is no bound. |
| `size( dim )` | integer | The same as `length` |
| `units` | string | The units value |
| `upperBound` | double | The upper bound for the variable. If not specified, there is no bound. |
| `value( index1, index2, ... )` | double | The value of the variable. This is the default property.<br>- `index1` - The first index in the array or a string representation of the entire multi-dimensional array index of the form "[3,2,4]", or an array of integers representing all the dimensions of the array.<br>- `index2` - If index1 is the first index, this and further arguments can optionally be filled in for further dimensions of the array. |

### Methods

| Method | Description |
|---|---|
| `getNumDimensions()` | Returns the number of dimensions of the array |
| `setDimensions( 1stDimSize, 2ndDimSize, ... , 10thDimSize )` | Sets the lengths of the various dimensions of the array. The array will have as many dimensions as it is given parameters in this function (for example, 1-10).<br>- `1stDimSize` - the size of the 1st dimension<br>- `2ndDimSize` - the size of the 2nd dimension<br>- ...<br>- `10thDimSize` - the size of the 10th dimension |
| `getArray()` | Returns the array |
| `setArray( array )` | Sets the contents of the array to equal that of the given array<br>- `array` - the array to copy from |

## Integer Variable Object

### Properties

| Property | Type | Description |
|---|---|---|
| `description` | string | A short, one-line description of the variable. |
| `enumAlias` | string | A comma-separated list of user-friendly string values corresponding to each enumerated value. The alias value may be used to set the value of the variable instead of the actual enumerated value. If alias values are specified, ModelCenter will display the alias value rather than the enumerated value. |
| `enumValues` | string | A comma-separated list of values. |
| `lowerBound` | integer | The lower bound for the variable. If not specified, there is no bound. |
| `units` | string | The units value |
| `upperBound` | integer | The upper bound for the variable. If not specified, there is no bound. |
| `value` | integer | The value of the variable. This is the default property. |

## Integer Array Object

### Properties

| Property | Type | Description |
|---|---|---|
| `array` | array | Gets or sets the entire array at once. |
| `description` | string | A short, one-line description of the variable. |
| `enumAlias` | string | A comma-separated list of user-friendly string values corresponding to each enumerated value. The alias value may be used to set the value of the variable instead of the actual enumerated value. If alias values are specified, ModelCenter will display the alias value rather than the enumerated value. |
| `enumValues` | string | A comma-separated list of values. |
| `length( dim )` | integer | The number of elements in the array.<br>- `dim` - The dimension to read. Optional (defaults to 0). |
| `lowerBound` | integer | The lower bound for the variable. If not specified, there is no bound. |
| `size( dim )` | integer | The same as `length` |
| `units` | string | The units value |
| `upperBound` | integer | The upper bound for the variable. If not specified, there is no bound. |
| `value( index1, index2, ... )` | double | The value of the variable. This is the default property.<br>- `index1` - The first index in the array or a string representation of the entire multi-dimensional array index of the form "[3,2,4]", or an array of integers representing all the dimensions of the array.<br>- `index2` - If index1 is the first index, this and further arguments can optionally be filled in for further dimensions of the array. |

### Methods

| Method | Description |
|---|---|
| `getNumDimensions()` | Returns the number of dimensions of the array |
| `setDimensions( 1stDimSize, 2ndDimSize, ... , 10thDimSize )` | Sets the lengths of the various dimensions of the array. The array will have as many dimensions as it is given parameters in this function (for example, 1-10).<br>- `1stDimSize` - the size of the 1st dimension<br>- `2ndDimSize` - the size of the 2nd dimension<br>- ...<br>- `10thDimSize` - the size of the 10th dimension |
| `getArray()` | Returns the array |
| `setArray( array )` | Sets the contents of the array to equal that of the given array<br>- `array` - the array to copy from |

## File Variable Object

### Properties

| Property | Type | Description |
|---|---|---|
| `isBinary` | boolean | Specifies the file as binary (true) or ascii (false). Default is false. |
| `fileExtension` | string | The file extension of a binary file. ModelCenter will open the file using the program associated with this file extension when the file is double-clicked in the Component Tree. |

### Methods

| Method | Description |
|---|---|
| `readFile( fileName )`, `fromFile( fileName )` | Reads the specified file.<br>- `fileName` - the name of the file to load. |
| `writeFile( fileName )`, `toFile( fileName )` | Writes to the specified file.<br>- `fileName` - the name of the file to load. |

## String Variable Object

### Properties

| Property | Type | Description |
|---|---|---|
| `description` | string | A short, one-line description of the variable. |
| `enumAlias` | string | A comma-separated list of user-friendly string values corresponding to each enumerated value. The alias value may be used to set the value of the variable instead of the actual enumerated value. If alias values are specified, ModelCenter will display the alias value rather than the enumerated value. |
| `enumValues` | string | A comma-separated list of values. |
| `value` | string | The value of the variable. This is the default property. |

## String Array Object

### Properties

| Property | Type | Description |
|---|---|---|
| `array` | array | Gets or sets the entire array at once. |
| `description` | string | A short, one-line description of the variable. |
| `enumAlias` | string | A comma-separated list of user-friendly string values corresponding to each enumerated value. The alias value may be used to set the value of the variable instead of the actual enumerated value. If alias values are specified, ModelCenter will display the alias value rather than the enumerated value. |
| `enumValues` | string | A comma-separated list of values. |
| `length( dim )` | integer | The number of elements in the array.<br>- `dim` - The dimension to read. Optional (defaults to 0). |
| `size( dim )` | integer | The same as `length` |
| `value( index1, index2, ... )` | double | The value of the variable. This is the default property.<br>- `index1` - The first index in the array or a string representation of the entire multi-dimensional array index of the form "[3,2,4]", or an array of integers representing all the dimensions of the array.<br>- `index2` - If index1 is the first index, this and further arguments can optionally be filled in for further dimensions of the array. |

### Methods

| Method | Description |
|---|---|
| `getNumDimensions()` | Returns the number of dimensions of the array |
| `setDimensions( 1stDimSize, 2ndDimSize, ... , 10thDimSize )` | Sets the lengths of the various dimensions of the array. The array will have as many dimensions as it is given parameters in this function (for example, 1-10).<br>- `1stDimSize` - the size of the 1st dimension<br>- `2ndDimSize` - the size of the 2nd dimension<br>- ...<br>- `10thDimSize` - the size of the 10th dimension |
| `getArray()` | Returns the array |
| `setArray( array )` | Sets the contents of the array to equal that of the given array<br>- `array` - the array to copy from |