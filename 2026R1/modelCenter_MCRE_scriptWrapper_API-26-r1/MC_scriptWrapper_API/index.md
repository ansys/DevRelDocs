# ModelCenter Remote Execution scriptWrapper API

The ScriptWrapper defines a global object for all scripts called wrapper which supplies basic functionality for handling special cases with variables and methods. In addition there are objects which represent variables of various types. If you are using the Java scripting language, there is an additional File Parsing API which allows you to easily take advantage of the FileWrapper's robust file parsing capabilities programatically.

This API is basically the same across all possible languages, subject to constraints imposed by the languages themselves.

## Languages

- ScriptWrapper VBScript Object API
- Java Object API (When using the Java scripting language or Jython, the entire Java API for ModelCenter Remote Execution is available)
    - wrapper object
    - types
    - File Parsing API
- Python Object Library

## File Parsing API
Users can now take advantage of FileWrapper's robust file parsing capability in the ScriptWrapper by using the File Parsing API. To use this feature, you must use the BeanShell implementation of Java as the language for the ScriptWrapper since the File Parsing API is pure Java. The File Parsing API is closely mapped to FileWrapper statements. More information on available methods can be found in the Java API package.

## nD Arrays
Arrays in ScriptWrapper are handled through special variable classes which represent the array. These arrays are named after the base type of data that they hold, such as `PHXDoubleArray`. The array classes automatically handle arrays with any number of dimensions. By default, arrays are "auto resizable", which means that if you have an array that is an input to your ScriptWrapper, the client can change the number of dimensions or length of the array at will. Ideally your ScriptWrapper should check the number of dimensions and length of the arrays before trying to use the input array.

Equally, you may change the size of your output arrays at any time by using the `setDimensions` method.

See the API documentation for the language of your choice for more information on using the array classes.

## Class File for Object Type Variables
Java or Python language can be used to define classes for object type variables. A class file must start with a special header that indicates its use for object type variables of ModelCenter Remote Execution or ModelCenter. For more detail, see Class File Formats

## More Information 
For more information, see the [ScriptWrapper documentation](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/ModelCenter/v252/en/ModelCenter_Rem_Exec/ModelCenter_Rem_Exec/mcre_functions/wrappers_components/ScriptWrapper/index_scriptWrapper.html) in the MCRE Help.