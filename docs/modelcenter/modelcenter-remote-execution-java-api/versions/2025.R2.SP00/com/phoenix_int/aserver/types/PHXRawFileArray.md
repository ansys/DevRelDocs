# Class PHXRawFileArray


**Packages:** `com.phoenix_int.aserver.types`
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXSimpleType
    ↳ com.phoenix_int.aserver.types.PHXSimpleArray
      ↳ com.phoenix_int.aserver.types.PHXRawFileArray
```

**All Implemented Interfaces:**
- [IPHXType](IPHXType.md), [IPHXType2](IPHXType2.md), [IPHXUnits](IPHXUnits.md), java.lang.Iterable

---

**Declaration:**

```java
public class PHXRawFileArray
extends PHXSimpleArray
```

Wraps an array of [PHXRawFile](PHXRawFile.md) variables for the ScriptWrapper utility.


**See Also:**
- [PHXSimpleArray](PHXSimpleArray.md)

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.[IPHXType2](IPHXType2.md)
`IPHXType2.IVisitor<T>`

## Field Summary

### Fields inherited from class com.phoenix_int.aserver.types.PHXSimpleArray
`_data,_lockDims,_lockResize`

## Constructor Summary

| Constructor and Description |
| --- |
| `PHXRawFileArray()` |
| `PHXRawFileArray(java.lang.Object data)` |
| `PHXRawFileArray(PHXRawFileArrayother)`<br>Clone another PHXRawFileArray's value and metadata. |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | `_getMetaData(PHXSimpleTypev2)`<br>Worker which takes the meta data from an instance of PHXSimpleType and sets it into our meta data. |
| `protected void` | `_setMetaData(PHXSimpleTypev2)`<br>Sets a simple type's meta data based on the meta data in this object. |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`<br>Accept a Visitor. |
| `protected java.lang.Object` | `allocateElement(java.lang.Class elementClass)`<br>Allocates a single element in a default state. |
| `PHXRawFileArray` | `createCopy()`<br>Create a copy of this instance, including the value and metadata. |
| `protected boolean` | `dataTypeOK(java.lang.Class c)`<br>Must override this function and return true if the specified class is acceptable as an array element component type. |
| `protected java.lang.Object` | `elementFromString(java.lang.String val)`<br>Sub-classes must provide an implementation of this function which converts a string form of a single element to Object form. |
| `boolean` | `equalsNatural(PHXSimpleTypetoCompare)`<br>Compare this PHXSimpleType to another PHXSimpleType. |
| `void` | `fromFile(int index)`<br>loads the file from disk for an element of an 1D array. |
| `void` | `fromFile(int[] index)`<br>loads the file from disk for an element of an array. |
| `void` | `fromFile(int[] index, java.lang.String fileName)`<br>Sets the filename and then reads from disk for an element of an array. |
| `void` | `fromFile(int index, java.lang.String fileName)`<br>Sets the filename and then reads from disk for an element of an 1D array. |
| `void` | `fromObject(java.lang.Object toRead)`<br>Load the value of this object from the specified object. |
| `void` | `fromString(int[] index, java.lang.String value)`<br>converts a String representation to the internal value for an element of an array |
| `void` | `fromString(int index, java.lang.String value)`<br>converts a String representation to the internal value for an element of an 1D array |
| `java.lang.String` | `getBaseName()`<br>gets the base name of the files stored in the array |
| `java.lang.String` | `getContents(int index()`<br>retrieves the contents of the file for an element of an 1D array |
| `java.lang.String` | `getContents(int[] index()`<br>retrieves the contents of the file for an element of an array |
| `java.lang.String` | `getFileExtension(int index()`<br>Returns the extension of the file for an element of an 1D array |
| `java.lang.String` | `getFileExtension(int[] index()`<br>Returns the extension of the file for an element of an array |
| `boolean` | `getIsBinary()`<br>Tells whether or not the array contains binary files or not. |
| `java.lang.String` | `getMimeType()`<br>get mime type of the files in the array. Currently all elements of an array should have the same mime type. |
| `java.lang.String` | `getName(int index()`<br>retrieves the name of the file for an element of an 1D array |
| `java.lang.String` | `getName(int[] index()`<br>retrieves the name of the file for an element of an array |
| `java.lang.String` | `getNameCoded(int index()`<br>retrieves the name of the file in coded form (without `$variables` replaced) for an element of an 1D array |
| `java.lang.String` | `getNameCoded(int[] index()`<br>retrieves the name of the file in coded form (without `$variables` replaced) for an element of an array |
| `java.lang.String[]` | `getNames()`<br>get file names of the elements as an array |
| `java.lang.String[]` | `getNamesCoded()`<br>get coded file names of the elements as an array |
| `java.lang.String` | `getNamesCodedString()`<br>get coded file names of the elements as a comma separated string |
| `java.lang.String` | `getNamesString()`<br>get file names as a comma separated list |
| `java.lang.String[]` | `getURLs()`<br>get URLs of the elements as an array |
| `java.lang.String` | `getURLsString()`<br>get URLs of the elements as a comma separated string |
| `PHXRawFile` | `getValue(int index)`<br>a utility function to return the internal PHXRawFile that represents the array element for the 1D array. |
| `PHXRawFile` | `getValue(int[] index)`<br>a utility function to return the internal PHXRawFile that represents the array element for the array. |
| `boolean` | `hasChanged(int index)`<br>checks to see if the file has changed since the last time `getContents()` was called for an element of an 1D array |
| `boolean` | `hasChanged(int[] index)`<br>checks to see if the file has changed since the last time `getContents()` was called for an element of an array |
| `void` | `markAsRead(int index)`<br>set `markAsRead` flag for an element for an 1D array call this function after you manually get the contents of the file. |
| `void` | `markAsRead(int[] index)`<br>set `markAsRead` flag for an element for an array call this function after you manually get the contents of the file. |
| `void` | `readFile(int index)`<br>loads the file from disk for an element of an 1D array. |
| `void` | `readFile(int[] index)`<br>loads the file from disk for an element of an array. |
| `void` | `setBaseName(java.lang.String name)`<br>sets the base name of files for this array |
| `void` | `setContents(int[] index, java.lang.String contents)`<br>sets the contents of the file for an array element for an array. |
| `void` | `setContents(int index, java.lang.String contents)`<br>sets the contents of the file for an array element for an 1D array. |
| `void` | `setFileExtension(int[] index, java.lang.String extension)`<br>Sets the extension of the file for an element of an array |
| `void` | `setFileExtension(int index, java.lang.String extension)`<br>Sets the extension of the file for an element of an 1D array |
| `void` | `setIsBinary(boolean value)`<br>Forces elements of this array to be binary or not. |
| `void` | `setMimeType(java.lang.String value)`<br>Set mime type the array. Currently all elements of an array should have the same mime type. |
| `void` | `setName(int[] index, java.lang.String name)`<br>sets the name of the file for an element of an array |
| `void` | `setName(int index, java.lang.String name)`<br>sets the name of the file for an element of an 1D array |
| `void` | `setValue(int[] index,PHXRawFileval)`<br>a utility function to set the internal PHXRawFile that represents the array element for the array. |
| `void` | `setValue(int[] index,PHXSimpleTypeval)`<br>Sets an element as an object of the appropriate PHXSimpleType. Must be overridden in subclasses |
| `void` | `setValue(int[] index, java.lang.String val)`<br>a utility function to set the value of an array element for the 1D array. |
| `void` | `setValue(int index,PHXRawFileval)`<br>a utility function to set the internal PHXRawFile that represents the array element for the 1D array. |
| `void` | `setValue(int index, java.lang.String val)`<br>a utility function to set the value of an array element for the 1D array. |
| `void` | `toFile(int index)`<br>writes the file to disk for an element of an 1D array |
| `void` | `toFile(int[] index)`<br>writes the file to disk for an element of an array |
| `void` | `toFile(int[] index, java.lang.String fileName)`<br>sets the filename and then writes the file to disk for an element of an array. |
| `void` | `toFile(int index, java.lang.String fileName)`<br>sets the filename and then writes the file to disk for an element of an 1D array. |
| `java.lang.String` | `toString(int index)`<br>converts an element of the 1D array to a string |
| `java.lang.String` | `toString(int[] index)`<br>converts an element of the array to a string |

### Methods inherited from class com.phoenix_int.aserver.types.PHXSimpleArray
`_getMetaData`, `_setMetaData`, `checkRectangular`, `copy`, `fromString`, `fromString`, `fromString2`, `generateFor`, `generateFor`, `getArray`, `getArrayElement`, `getArrayElement`, `getComponentType`, `getComponentType`, `getDimensions`, `getDimensions`, `getFirst`, `getLength`, `getLength`, `getLockResize`, `getnDIndex`, `getNumDimensions`, `getNumDimensions`, `getSelf`, `incrementIndex`, `iterator`, `lockDimensions`, `newIndex`, `parseIndex`, `resize`, `setArray`, `setArrayElement`, `setArrayElement`, `setDimensions`, `setFirst`, `setLength`, `setLength`, `setLockResize`, `setValue`, `toString`, `toString`, `toString2`, `toString2`, `toString2`, `validElement`

### Methods inherited from class com.phoenix_int.aserver.types.PHXSimpleType
`_copyMetadataFromOther`, `addPropertyChangeListener`, `getDescription`, `getEnumTokens`, `getHasChanged`, `getUnits`, `removePropertyChangeListener`, `setDescription`, `setHasChanged`, `setUnits`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

### Methods inherited from interface java.lang.Iterable
`forEach`, `spliterator`

## Constructor Detail

### PHXRawFileArray

```java
public PHXRawFileArray()
```

### PHXRawFileArray

```java
public PHXRawFileArray(java.lang.Object data)
```

### PHXRawFileArray

```java
public PHXRawFileArray(PHXRawFileArray other)
```

Clone another PHXRawFileArray's value and metadata.

**Parameters:**
- `other` - the other PHXRawFileArray to clone.

### Method Detail

### getName

```java
public java.lang.String getName(int index)
```

Retrieves the name of the file for an element of an 1D array

**Parameters:**
- `index` - array index

**Returns:**
- the name of the file

### getName

```java
public java.lang.String getName(int[] index)
```

Retrieves the name of the file for an element of an array

**Parameters:**
- `index` - array index

**Returns:**
- the name of the file

### getNameCoded

```java
public java.lang.String getNameCoded(int index)
```

Retrieves the name of the file in coded form (without `$variables` replaced) for an element of an 1D array

**Parameters:**
- `index` - array index

**Returns:**
- the name of the file in coded form

### getNameCoded

```java
public java.lang.String getNameCoded(int[] index)
```

Retrieves the name of the file in coded form (without `$variables` replaced) for an element of an array

**Parameters:**
- `index` - array index

**Returns:**
- the name of the file in coded form

### getFileExtension

```java
public java.lang.String getFileExtension(int index)
```

Returns the extension of the file for an element of an 1D array

**Parameters:**
- `index` - array index

**Returns:**
- extension

### getFileExtension

```java
public java.lang.String getFileExtension(int[] index)
```

Returns the extension of the file for an element of an array

**Parameters:**
- `index` - array index

**Returns:**
- extension

### setFileExtension

```java
public void setFileExtension(int index,
                             java.lang.String extension)
                      throws java.io.IOException
```

Sets the extension of the file for an element of an 1D array. 

It is preferred that you use `setName()` and let the system automatically figure out the extension based on what you pass in.  Then, you can use `readFile()` and `writeFile()` without passing filenames to those calls.  This allows for progress monitoring to work correctly in all cases.

**Parameters:**
- `index` - array index
- `extension` - file extension

**Throws:**
- `java.io.IOException`

### setFileExtension

```java
public void setFileExtension(int[] index,
                             java.lang.String extension)
                      throws java.io.IOException
```

Sets the extension of the file for an element of an array

It is preferred that you use `setName()` and let the system automatically figure out the extension based on what you pass in.  Then, you can use `readFile()` and `writeFile()` without passing filenames to those calls.  This allows for progress monitoring to work correctly in all cases.

**Parameters:**
- `index` - array index
- `extension` - file extension

**Throws:**
- `java.io.IOException`

### setName

```java
public void setName(int index,
                    java.lang.String name)
             throws java.io.IOException
```

Sets the name of the file for an element of an 1D array

**Parameters:**
- `index` - array index
- `name` - file name

**Throws:**
- `java.io.IOException`

### setName

```java
public void setName(int[] index,
                    java.lang.String name)
             throws java.io.IOException
```

Sets the name of the file for an element of an array

**Parameters:**
- `index` - array index
- `name` - file name

**Throws:**
- `java.io.IOException`

### setBaseName

```java
public void setBaseName(java.lang.String name)
                 throws java.io.IOException
```

Sets the base name of files for this array

**Parameters:**
- `name` - base name

**Throws:**
- `java.io.IOException`

### getBaseName

```java
public java.lang.String getBaseName()
```

Gets the base name of the files stored in the array

**Returns:**
- the name

### getIsBinary

```java
public boolean getIsBinary()
```

Tells whether or not the array contains binary files or not.

Simply switches on whether or not the mime type starts with text. Currently all elements of an array should have the same binaryness.

**Returns:**
- true if the file is binary

### setIsBinary

```java
public void setIsBinary(boolean value)
```

Forces elements of this array to be binary or not.

If this causes the mode to change, will set the mime type to `text/plain` or `application/octet-stream` as appropriate. Currently all elements of an array should have the same binaryness.

**Parameters:**
- `value` - the value to set

### getMimeType

```java
public java.lang.String getMimeType()
```

Get mime type of the files in the array
 
Currently all elements of an array should have the same mime type.

**Returns:**
- mime type

### setMimeType

```java
public void setMimeType(java.lang.String value)
```

Set mime type the array
 
Currently all elements of an array should have the same mime type.

**Parameters:**
- `value` - the mimeType mime type

### getNames

```java
public java.lang.String[] getNames()
```

Get file names of the elements as an array

**Returns:**
- list of file names

### getNamesString

```java
public java.lang.String getNamesString()
```

Get file names as a comma separated list

**Returns:**
- list of file names

### getNamesCoded

```java
public java.lang.String[] getNamesCoded()
```

Get coded file names of the elements as an array

**Returns:**
- list of coded file names

### getNamesCodedString

```java
public java.lang.String getNamesCodedString()
```

Get coded file names of the elements as a comma separated string

**Returns:**
- list of coded file names

### getURLs

```java
public java.lang.String[] getURLs()
```

Get URLs of the elements as an array

**Returns:**
- list of file URLs

### getURLsString

```java
public java.lang.String getURLsString()
```

Get URLs of the elements as a comma separated string

**Returns:**
- list of file URLs

### setContents

```java
public void setContents(int index,
                        java.lang.String contents)
                 throws java.io.IOException
```

Sets the contents of the file for an array element for an 1D array.
 
The actual file is not modified until the `writeFile()` method is issued.
 
Remember that when dealing with text files, `setContents` handles Java style strings, which must be in bare LF, or Unix style newline format. In binary format, `setContents` should be the base64 encoded data.

**Parameters:**
- `index` - array index
- `contents` - the contents of the file

**Throws:**
- `java.io.IOException`

### setContents

```java
public void setContents(int[] index,
                        java.lang.String contents)
                 throws java.io.IOException
```

Sets the contents of the file for an array element for an array.
 
The actual file is not modified until the `writeFile()` method is issued.
 
Remember that when dealing with text files, `setContents` handles Java style strings, which must be in bare LF, or Unix style newline format. In binary format, `setContents` should be the base64 encoded data.

**Parameters:**
- `index` - array index
- `contents` - the contents of the file

**Throws:**
- `java.io.IOException`

### getContents

```java
public java.lang.String getContents(int index)
                             throws java.lang.Exception
```

Retrieves the contents of the file for an element of an 1D array

**Parameters:**
- `index` - array index

**Returns:**
- the contents of the file

**Throws:**
- `java.lang.Exception`

### getContents

```java
public java.lang.String getContents(int[] index)
                             throws java.io.IOException
```

Retrieves the contents of the file for an element of an array

**Parameters:**
- `index` - array index

**Returns:**
- the contents of the file

**Throws:**
- `java.io.IOException`

### fromFile

```java
public void fromFile(int index)
              throws java.io.IOException
```

Loads the file from disk for an element of an 1D array.

**Parameters:**
- `index` - array index

**Throws:**
- `java.io.IOException` - thrown if the file can't be loaded.

### fromFile

```java
public void fromFile(int[] index)
              throws java.io.IOException
```

Loads the file from disk for an element of an array.

**Parameters:**
- `index` - array index

**Throws:**
- `java.io.IOException` - thrown if the file can't be loaded.

### readFile

```java
public void readFile(int index)
              throws java.io.IOException
```

Loads the file from disk for an element of an 1D array.

**Parameters:**
- `index` - array index

**Throws:**
- `java.io.IOException` - thrown if the file can't be loaded.

### readFile

```java
public void readFile(int[] index)
              throws java.io.IOException
```

Loads the file from disk for an element of an array.

**Parameters:**
- `index` - array index

**Throws:**
- `java.io.IOException` - thrown if the file can't be loaded.

### fromFile

```java
public void fromFile(int index,
                     java.lang.String fileName)
              throws java.io.IOException
```

Sets the filename and then reads from disk for an element of an 1D array.
 
It is preferred that you use `setName()` when you create a PHXRawFile and then use `readFile()` without passing a filename to it.  This allows progress monitoring to work correctly in all cases.

**Parameters:**
- `index` - array index
- `fileName` - file name

**Throws:**
- `java.io.IOException` - thrown if the file can't be loaded.

### fromFile

```java
public void fromFile(int[] index,
                     java.lang.String fileName)
              throws java.io.IOException
```

Sets the filename and then reads from disk for an element of an array.
 
It is preferred that you use `setName()` when you create a PHXRawFile and then use `readFile()` without passing a filename to it. This allows progress monitoring to work correctly in all cases.

**Parameters:**
- `index` - array index
- `fileName` - file name

**Throws:**
- `java.io.IOException` - thrown if the file can't be loaded.

### markAsRead

```java
public void markAsRead(int index)
```

Set `markAsRead` flag for an element for an 1D array

call this function after you manually get the contents of the file. The function records its name and timestamp for use with the `hasChanged()` function

**Parameters:**
- `index` - array index

### markAsRead

```java
public void markAsRead(int[] index)
```

Set `markAsRead` flag for an element for an array
 
call this function after you manually get the contents of the file. The function records it's name and timestamp for use with the `hasChanged()` function

**Parameters:**
- `index` - array index

### hasChanged

```java
public boolean hasChanged(int index)
```

Checks to see if the file has changed since the last time `getContents()` was called for an element of an 1D array

**Parameters:**
- `index` - array index

**Returns:**
- `true` if the timestamp of the file is new, or if the file name has changed

### hasChanged

```java
public boolean hasChanged(int[] index)
```

Checks to see if the file has changed since the last time `getContents()` was called for an element of an array

**Parameters:**
- `index` - array index

**Returns:**
- `true` if the timestamp of the file is new, or if the file name has changed

### toFile

```java
public void toFile(int index,
                   java.lang.String fileName)
            throws java.io.IOException
```

Sets the filename and then writes the file to disk for an element of an 1D array.  

It is preferred that you use `setName()` when you create a PHXRawFile and then use `writeFile()` without passing a filename to it.  This allows progress monitoring to work correctly in all cases.

**Parameters:**
- `index` - array index
- `fileName` - name of the file to write

**Throws:**
- `java.io.IOException` - thrown if the file can't be written.

### toFile

```java
public void toFile(int[] index,
                   java.lang.String fileName)
            throws java.io.IOException
```

Sets the filename and then writes the file to disk for an element of an array.  

It is preferred that you use `setName()` when you create a PHXRawFile and then use `writeFile()` without passing a filename to it.  This allows progress monitoring to work correctly in all cases.

**Parameters:**
- `index` - array index
- `fileName` - name of the file to write

**Throws:**
- `java.io.IOException` - thrown if the file can't be written.

### toFile

```java
public void toFile(int index)
            throws java.io.IOException
```

Writes the file to disk for an element of an 1D array

**Parameters:**
- `index` - array index

**Throws:**
- `java.io.IOException` - thrown if the file can't be written.

### toFile

```java
public void toFile(int[] index)
            throws java.io.IOException
```

Writes the file to disk for an element of an array

**Parameters:**
- `index` - array index

**Throws:**
- `java.io.IOException` - thrown if the file can't be written.

### toString

```java
public java.lang.String toString(int index)
```

Converts an element of the 1D array to a string

**Overrides:**
- `toString` in class [`PHXSimpleArray`](PHXSimpleArray.md)

**Parameters:**
- `index` - array index

**Returns:**
- a String representation of the variable

### toString

```java
public java.lang.String toString(int[] index)
```

Converts an element of the array to a string

**Overrides:**
- `toString` in class [`PHXSimpleArray`](PHXSimpleArray.md)

**Parameters:**
- `index` - array index

**Returns:**
- a String representation of the variable

### fromString

```java
public void fromString(int index,
                       java.lang.String value)
```

Converts a String representation to the internal value
 for an element of an 1D array

**Overrides:**
- `fromString` in class [`PHXSimpleArray`](PHXSimpleArray.md)

**Parameters:**
- `index` - array index
- `value` - the value to convert

### fromString

```java
public void fromString(int[] index,
                       java.lang.String value)
```

Converts a String representation to the internal value for an element of an array

**Overrides:**
- `fromString` in class [`PHXSimpleArray`](PHXSimpleArray.md)

**Parameters:**
- `index` - array index
- `value` - the value to convert

### getValue

```java
public PHXRawFile getValue(int index)
```

A utility function to return the internal PHXRawFile that represents the array element for the 1D array.

**Overrides:**
- `getValue` in class [`PHXSimpleArray`](PHXSimpleArray.md)

**Parameters:**
- `index` - array index

**Returns:**
- array element

### getValue

```java
public PHXRawFile getValue(int[] index)
```

A utility function to return the internal PHXRawFile that represents the array element for the array.

**Specified by:**
- `getValue` in class [`PHXSimpleArray`](PHXSimpleArray.md)

**Parameters:**
- `index` - array index

**Returns:**
- array element

### setValue

```java
public void setValue(int index,
                     PHXRawFile val)
```

A utility function to set the internal PHXRawFile that represents the array element for the 1D array.

**Parameters:**
- `index` - array index
- `val` - array element to set

### setValue

```java
public void setValue(int[] index,
                     PHXRawFile val)
```

A utility function to set the internal PHXRawFile that represents the array element for the array.

**Parameters:**
- `index` - array index
- `val` - array element to set

### setValue

```java
public void setValue(int index,
                     java.lang.String val)
              throws java.io.IOException
```

A utility function to set the value of an array element for the 1D array. This is a synomym of `setContent()`.

**Parameters:**
- `index` - array index
- `val` - value to set

**Throws:**
- `java.io.IOException`

### setValue

```java
public void setValue(int[] index,
                     java.lang.String val)
              throws java.io.IOException
```

A utility function to set the value of an array element for the 1D array. This is a synomym of `setContent()`.

**Parameters:**
- `index` - array index
- `val` - value to set

**Throws:**
- `java.io.IOException`

### dataTypeOK

```java
protected boolean dataTypeOK(java.lang.Class c)
```

Description copied from class: [`PHXSimpleArray`](PHXSimpleArray.md)

Must override this function and return true if the specified class is acceptable as an array element component type.

**Specified by:**
- `dataTypeOK` in class [`PHXSimpleArray`](PHXSimpleArray.md)

### elementFromString

```java
protected java.lang.Object elementFromString(java.lang.String val)
```

Description copied from class: [`PHXSimpleArray`](PHXSimpleArray.md)

Sub-classes must provide an implementation of this function which converts a string form of a single element to Object form.  This is only used when the element type does not implement [`IPHXType`](IPHXType.md) or [`IPHXType2`](IPHXType2.md).  For primitives, return the wrapper objects.

**Specified by:**
- `elementFromString` in class [`PHXSimpleArray`](PHXSimpleArray.md)

### _getMetaData

```java
protected void _getMetaData(PHXSimpleType v2)
```

Description copied from class: [`PHXSimpleArray`](PHXSimpleArray.md)

Worker which takes the meta data from an instance of [PHXSimpleType](PHXSimpleType.md) and sets it into our meta data.  Override this in order to add more custom meta data in sub-classes.  Be sure to call `super._getMetaData(PHXSimpleType)`, though!

**Overrides:**
- `_getMetaData` in class [`PHXSimpleArray`](PHXSimpleArray.md)

### _setMetaData

```java
protected void _setMetaData(PHXSimpleType v2)
```

Description copied from class: [`PHXSimpleArray`](PHXSimpleArray.md)

Sets a simple type's meta data based on the meta data in this object.  Override this to set additional information in sub-classes.  Be sure to call `super._setMetaData(PHXSimpleType)`.

**Overrides:**
- `_setMetaData` in class [`PHXSimpleArray`](PHXSimpleArray.md)

### allocateElement

```java
protected java.lang.Object allocateElement(java.lang.Class elementClass)
                                    throws java.lang.IllegalAccessException,
                                           java.lang.InstantiationException
```

Allocates a single element in a default state.
 
This overrides `allocateElement` to set the common metadata for the newly created element

**Overrides:**
- `allocateElement` in class [`PHXSimpleArray`](PHXSimpleArray.md)

**Throws:**
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`

### equalsNatural

```java
public boolean equalsNatural(PHXSimpleType toCompare)
                      throws PHXTypeMismatchException
```

Compare this PHXSimpleType to another PHXSimpleType. This type of comparison is different than `Comparable` in that it does a natural comparison between numbers. It is not designed, nor suited, for use in things such as sets, and may behave oddly if put in those circumstances.
 
 Array comparison is handled as follows: 

 1) Compare the number of dimensions between the two arrays
 2) Compare the length of dimensions between the two arrays
 3) Compare the values in each of the two arrays
 
 If these three conditions are met, the two arrays are considered naturally equal.

**Overrides:**
- `equalsNatural` in class [`PHXSimpleArray`](PHXSimpleArray.md)

**Parameters:**
- `toCompare` -

**Returns:**
- a negative number if this object is less than `toCompare`, a positive number if this object is greater than `toCompare`, and zero if these two objects are equal.

**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md) - if the given PHXSimpleType cannot be compared with this object.

### fromObject

```java
public void fromObject(java.lang.Object toRead)
                throws PHXInvalidTypeException
```

Load the value of this object from the specified object. This will read the object and attempt to convert it if it is a known type. If the type isn't recognized, it will throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md). If there is an error in conversion, it will also throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md)

NOTE: while it might be logical to think you can create a `PHX(Type)Array` from, say, an array of `java.lang.(Type)`, that is not currently supported. You MUST use the PHX string array formatting style.

**Specified by:**
- `fromObject` in class `PHXSimpleType`

**Parameters:**
- `toRead` - to object from which to load this objects value.

**Throws:**
- [`PHXInvalidTypeException`](PHXInvalidTypeException.md) - if the specified object is of an invalid type or there is an error in conversion.

### setValue

```java
public void setValue(int[] index,
                     PHXSimpleType val)
```

Sets an element as an object of the appropriate [`PHXSimpleType `](PHXSimpleType.md)

Must be overridden in subclasses

**Specified by:**
- `setValue` in class [`PHXSimpleArray`](PHXSimpleArray.md)

**Parameters:**
- `index` - nD array index
- `val` - value to set

### Accept

```java
public <T> T Accept(IPHXType2.IVisitor<T> visitor)
```

Accept a Visitor.

**Type Parameters:**
- `T` - Type of the result of the visit.

**Parameters:**
- `visitor` - The visitor to accept.

**Returns:**
- The results of the visit.

### createCopy

```java
public PHXRawFileArray createCopy()
```

Create a copy of this instance, including the value and metadata.

**Specified by:**
- `createCopy` in class `PHXSimpleType`

**Returns:**
- a newly constructed copy of this instance.
