# Class PHXRawFile


**Packages:** `com.phoenix_int.aserver.types`
```java
- java.lang.Object
- - com.phoenix_int.aserver.types.PHXSimpleType
- - com.phoenix_int.aserver.types.PHXRawFile
```

**All Implemented Interfaces:**
- [IPHXType](IPHXType.md), [IPHXType2](IPHXType2.md), [IPHXUnits](IPHXUnits.md), java.lang.AutoCloseable

---

```java
public class PHXRawFile
extends PHXSimpleType
implements IPHXType2, java.lang.AutoCloseable
```

The type for Files. The working contents of the file are kept in a temporary file on disk, where changes are made before they are manually synced to the actual file. Read the documentation for each method to make sure it is doing what you expect it to.
 
The temporary file containing the contents can optionally be maintained by calling `unmanageTempFile()`.
 
In that case, calling code becomes responsible for deleting the contents of the file.

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.[IPHXType2](IPHXType2.md)
`IPHXType2.IVisitor<T>`

## Constructor Summary

| Constructor and Description |
| --- |
| `PHXRawFile()` |
| `PHXRawFile(PHXRawFileother)`<br>Clone another PHXRawFile's value and metadata. |
| `PHXRawFile(java.lang.String fileName)` |
| `PHXRawFile(java.lang.String baseName, java.lang.String name)` |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | `_setContentFromOther(PHXRawFilevariable)` |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`<br>Accept a Visitor. |
| `void` | `addMonitor(PHXFileMonitorfm)`<br>PHXFileMonitor is used to monitor changes to a file as it is being created as in the UNIX `tail -f` command. |
| `void` | `backupFile()`<br>Backup the actual file on disk. |
| `void` | `backupFile(java.lang.String fileName)`<br>Backup the actual file on disk. |
| `void` | `close()` |
| `PHXRawFile` | `createCopy()`<br>Create a copy of this instance, including the value and metadata. |
| `void` | `deleteContents()`<br>Releases the handle to the temporary file. |
| `void` | `deleteFile()`<br>Deletes the actual file from disk. |
| `void` | `deleteFile(java.lang.String fileName)`<br>Deletes the actual file from disk. |
| `boolean` | `equalsNatural(PHXSimpleTypetoCompare)`<br>Compare this PHXSimpleType to another PHXSimpleType. |
| `protected void` | `finalize()`<br>Although close should be called manually before garbage collection, do so here as a backup. |
| `<EX extends java.lang.Throwable>void` | `fromAPIObject(java.util.Map<java.lang.String,java.lang.String> object, com.phoenix_int.functional.FunctionThrows<java.lang.String,com.phoenix_int.util.ManagedFileHandle,EX> fileStore)`<br>Populate this instance from a string-string map. |
| `void` | `fromFile()`<br>Loads the contents of the actual file on disk into the temporary file. |
| `void` | `fromFile(java.lang.String filename)`<br>Sets the filename and then loads the contents of the actual file on disk into the temporary file. |
| `void` | `fromObject(java.lang.Object toRead)`<br>Load the value of this object from the specified object. |
| `void` | `fromString(java.lang.String value)`<br>Sets the file temporary file contents to the value of the string. |
| `void` | `fromString2(PHXStringBuffernewContents)`<br>Sets the file temporary file contents to the value of the PHXStringBuffer. |
| `java.lang.String` | `getBaseName()`<br>gets the base name of the file |
| `java.lang.String` | `getContents()`<br>Retrieves the contents of the temporary file. |
| `java.nio.charset.Charset` | `getEncoding()`<br>Get the encoding of the contents. |
| `java.lang.String` | `getFileExtension()`Returns the extension of the file that this object represents |
| `java.util.UUID` | `getID()`<br>Get the ID set on this file when the contents were set. |
| `boolean` | `getIsBinary()`<br>Tells whether or not the the file is binary. |
| `java.lang.String` | `getMimeType()` |
| `java.lang.String` | `getName()`<br>retrieves the name of the file |
| `java.lang.String` | `getNameCoded()`<br>retrieves the name of the file in coded form (without `$variables` replaced) |
| `java.io.File` | `getTemporaryFile()`<br>Get the current temporary file; if `_needRead` is `true` this will load the contents from the actual file into the temporary. |
| `com.phoenix_int.util.ManagedFileHandle` | `getTemporaryFileHandle()`<br>Get an additional reference to the temporary file containing the current value, or null if there is no temp file currently. |
| `java.lang.String` | `getURL()`<br>Tells whether the file is meant to be transferred by proxy |
| `java.io.InputStream` | `getValueStream()`<br>**Deprecated.** using `toString2().getInputStream()` is prefered. |
| `long` | `getValueStreamLen()`<br>Gets the length of a stream to the temporary file contents. |
| `boolean` | `hasChanged()`<br>Checks to see if the actual file has changed since the last time getContents() was called. |
| `void` | `markAsRead()`<br>Call this function after you manually get the contents of the actual file. |
| `void` | `readFile()`<br>Loads the contents of the actual file on disk into the temporary file. |
| `void` | `readFile(boolean useDFT)`<br>Loads the contents of the actual file on disk into the temporary file. |
| `void` | `readFile(java.lang.String filename)`<br>Sets the filename and then loads the contents of the actual file on disk into the temporary file. |
| `void` | `removeMonitor(PHXFileMonitorfm)`<br>Removes a file monitor from our list |
| `void` | `setBaseName(java.lang.String v)`<br>sets the base name of the file |
| `void` | `setContents(java.io.File tempFile)`<br>Sets the contents of the temporary file to an existing file. |
| `void` | `setContents(java.io.File tempFile, java.util.UUID newId, java.lang.String mimeType, java.nio.charset.Charset encoding)`<br>Sets the contents of the temporary file to an existing file. |
| `void` | `setContents(com.phoenix_int.util.ManagedFileHandle tempFile, java.util.UUID newId, java.lang.String mimeType, java.nio.charset.Charset encoding)`<br>Sets the contents of the temporary file to an existing ManagedFileHandle. |
| `void` | `setContents(PHXStringBuffercontents)`<br>Sets the contents of the temporary file. |
| `void` | `setContents(java.lang.String contents)`<br>Sets the contents of the temporary file. |
| `void` | `setFileExtension(java.lang.String extension)`<br>Sets the extension of the file that this object represents. |
| `void` | `setIsBinary(boolean m)`<br>Forces this file to be binary or not. |
| `void` | `setMetaData(PHXRawFilemetaData)` |
| `void` | `setMimeType(java.lang.String m)` |
| `void` | `setName(java.lang.String v)`<br>sets the name of the file |
| `void` | `setNeedWrite(boolean needWrite)` |
| `void` | `setStringReplacer(PHXStringReplacerr)`<br>specifies a PHXStringReplacer object for use in forming the full file name. |
| `void` | `setURL(java.lang.String url)`<br>sets whether the file is meant to be transferred by proxy or not |
| `boolean` | `synched()`<br>Is this file variable's value consistent with the actual file on disk? |
| `<EX extends java.lang.Throwable>java.util.Map<java.lang.String,java.lang.String>` | `toAPIObject(com.phoenix_int.functional.FunctionThrows<PHXRawFile,java.lang.String,EX> fileStore)`<br>Convert this instance to a string-string map appropriate for serialization. |
| `void` | `toFile()`<br>Writes from the temp file to the actual file. |
| `void` | `toFile(java.lang.String fileName)`<br>Sets the filename and then writes from the temp file to the actual file. |
| `java.lang.String` | `toString()`<br>converts the variable to a string |
| `PHXStringBuffer` | `toString2()`<br>Gets a PHXStringBuffer representation of the contents of the temporary file. |
| `void` | `unmanageTempFile()`<br>Ensure that the file containing the current contents is not deleted when the last handle to it is released. |
| `void` | `writeFile()`<br>Writes from the temp file to the actual file. |
| `void` | `writeFile(java.lang.String fileName)`<br>Sets the filename and then writes from the temp file to the actual file. |

### Methods inherited from class com.phoenix_int.aserver.types.[PHXSimpleType](PHXSimpleType.md)
`_copyMetadataFromOther`, `addPropertyChangeListener`, `getDescription`, `getEnumTokens`, `getHasChanged`, `getUnits`, `removePropertyChangeListener`, `setDescription`, `setHasChanged`, `setUnits`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

### Constructor Detail

### PHXRawFile

```java
public PHXRawFile()
```

### PHXRawFile

```java
public PHXRawFile(java.lang.String fileName)
```

### PHXRawFile

```java
public PHXRawFile(java.lang.String baseName,
                  java.lang.String name)
```

### PHXRawFile

```java
public PHXRawFile(PHXRawFile other)
```

Clone another PHXRawFile's value and metadata.

**Parameters:**
- `other` - the other PHXRawFile to clone.

### Method Detail

### getName

```java
public java.lang.String getName()
```

retrieves the name of the file

**Returns:**
- the name of the file

### getID

```java
public java.util.UUID getID()
```

Get the ID set on this file when the contents were set. Reading the same contents does not guarantee that the ID will be the same.

**Returns:**
- the ID

### addMonitor

```java
public void addMonitor(PHXFileMonitor fm)
```

`PHXFileMonitor` is used to monitor changes to a file as it is being created as in the UNIX `tail -f` command. Unfortunately in Windows, this creates a file lock which prevents deleting the file. Therefore, we keep a list of all the monitors currently monitoring us, and we signal them anytime that our filename or base name changes so they can stop monitoring.

### removeMonitor

```java
public void removeMonitor(PHXFileMonitor fm)
```

Removes a file monitor from our list

### synched

```java
public boolean synched()
```

Is this file variable's value consistent with the actual file on disk?

### setNeedWrite

```java
public void setNeedWrite(boolean needWrite)
```

### setURL

```java
public void setURL(java.lang.String url)
```

sets whether the file is meant to be transferred by proxy or not

**Parameters:**
- `url` - the new URL

### getNameCoded

```java
public java.lang.String getNameCoded()
```

retrieves the name of the file in coded form (without `$variables` replaced)

**Returns:**
- the name of the file in coded form

### getFileExtension

```java
public java.lang.String getFileExtension()
```

Returns the extension of the file that this object represents

### unmanageTempFile

```java
public void unmanageTempFile()
```

Ensure that the file containing the current contents is not deleted when the last handle to it is released. Note that the contents can be reset by `setContents(java.lang.String)`, `setName(java.lang.String)` and `readFile(java.lang.String)` = overloads. This function affects only the current contents. Once the contents are changed, they are stored in a different temp file. That file will receive separate tracking and may be deleted unless this function is called again.

### setFileExtension

```java
public void setFileExtension(java.lang.String extension)
                      throws java.io.IOException
```

Sets the extension of the file that this object represents. It is preferred that you use `setName()` and let the system automatically figure out the extension based on what you pass in. Then, you can use `readFile()` and `writeFile()` without passing filenames to those calls. This allows for progress monitoring to work correctly in all cases.

**Throws:**
- `java.io.IOException`

### setName

```java
public void setName(java.lang.String v)
             throws java.io.IOException
```

sets the name of the file

**Parameters:**
- `v` - the name

**Throws:**
- `java.io.IOException`

### setBaseName

```java
public void setBaseName(java.lang.String v)
                 throws java.io.IOException
```

sets the base name of the file

**Parameters:**
- `v` - the name

**Throws:**
- `java.io.IOException`

### getBaseName

```java
public java.lang.String getBaseName()
```

gets the base name of the file

**Returns:**
- the name

### setStringReplacer

```java
public void setStringReplacer(PHXStringReplacer r)
```

specifies a PHXStringReplacer object for use in forming the full file name.

**Parameters:**
- `r` - the string replacer object

### getIsBinary

```java
public boolean getIsBinary()
```

Tells whether or not the the file is binary. Simply switches on whether or not the mime type starts with text.

### getURL

```java
public java.lang.String getURL()
```

Tells whether the file is meant to be transferred by proxy

### setIsBinary

```java
public void setIsBinary(boolean m)
```

Forces this file to be binary or not. If this causes the mode to change, will set the mime type to `text/plain` or `application/octet-stream`
 as appropriate.

### getMimeType

```java
public java.lang.String getMimeType()
```

### setMimeType

```java
public void setMimeType(java.lang.String m)
```

### setContents

```java
public void setContents(java.lang.String contents)
                 throws java.io.IOException
```

Sets the contents of the temporary file. The actual file is not modified until the `writeFile()` method is issued. Remember that when dealing with text files, `setContents` handles Java style strings, which must be in bare LF, or Unix style newline format. In binary format, `setContents` should be the base64 encoded data.
 
The handle to the previous contents is released, potentially deleting it if no other references are being held. Because the contents are reset, you may need to call `unmanageTempFile()` again.

**Parameters:**
- `contents` - the contents of the file

**Throws:**
- `java.io.IOException`

### setContents

```java
public void setContents(PHXStringBuffer contents)
                 throws java.io.IOException
```

Sets the contents of the temporary file. The actual file is not modified until the `writeFile()` method is issued. Remember that when dealing with text files, `setContents` handles Java style strings, which must be in bare LF, or Unix style newline format. In binary format, `setContents` should be the base64 encoded data.
    
 The handle to the previous contents is released, potentially deleting it if no other references are being held. Because the contents are reset, you may need to call `unmanageTempFile()` again.

**Parameters:**
- `contents` - the contents of the file

**Throws:**
- `java.io.IOException`

### setContents

```java
public void setContents(java.io.File tempFile)
```

Sets the contents of the temporary file to an existing file. The actual file is not modified until the `writeFile()` method is issued.
 
The specified file is placed into a new `ManagedFileHandle`.
 
The handle to the previous contents is released, potentially deleting it if no other references are being held. Because the contents are reset, you may need to call `unmanageTempFile()` again.

**Parameters:**
- `tempFile` - the temp file holding with the desired contents already on disk

### setContents

```java
public void setContents(java.io.File tempFile,
                        java.util.UUID newId,
                        java.lang.String mimeType,
                        java.nio.charset.Charset encoding)
```

Sets the contents of the temporary file to an existing file. The actual file is not modified until the `writeFile()` method is issued.
 
The specified file is placed into a new`ManagedFileHandle`.
 
The handle to the previous contents is released, potentially deleting it if no other references are being held. Because the contents are reset, you may need to call `unmanageTempFile()` again.

**Parameters:**
- `tempFile` - the temp file holding with the desired contents already on disk
- `newId` - the new ID to set. This will typically be a new UUID (you may use `setContents(java.io.File)` for convenience)
- `mimeType` - the mimetype of the contents, if known (may be null)
- `encoding` - the encoding of the file, if known

### setContents

```java
public void setContents(com.phoenix_int.util.ManagedFileHandle tempFile,
                        java.util.UUID newId,
                        java.lang.String mimeType,
                        java.nio.charset.Charset encoding)
```

Sets the contents of the temporary file to an existing ManagedFileHandle. The actual file is not modified until the `writeFile()` method is issued.
 
A new reference to the specified `ManagedFileHandle` is created. The reference is released when the instance is closed, `deleteContents()` is called, or the contents are replaced by another `setContents(java.lang.String)` overload.

**Parameters:**
- `tempFile` - a handle to a temporary file containing the value for the variable. This may be null for files with no contents.
- `newId` - the new ID to set. This will typically be a new random UUID, unless these contents are being transferred from another PHXRawFile or similar structure which has maintained the ID.
- `mimeType` - the mimetype of the contents, if known (may be null)
- `encoding` - the encoding of the contents, if known (may be null if unknown or the file is not text)

### getEncoding

```java
public java.nio.charset.Charset getEncoding()
```

Get the encoding of the contents. This function may return null if the encoding of the contents is unknown, or if the contents are binary and not text-based.

**Returns:**
- the encoding of the contents, if applicable and known

### getContents

```java
public java.lang.String getContents()
                             throws java.io.IOException
```

Retrieves the contents of the temporary file. If `_needRead` is `true`, this will load the contents from the actual file into the temporary file.

**Returns:**
- the contents of the file, or an empty string if no file exists.

**Throws:**
- `java.io.IOException`

### getTemporaryFile

```java
public java.io.File getTemporaryFile()
                              throws java.io.IOException
```

Get the current temporary file; if `_needRead` is `true` this will load the contents from the actual file into the temporary.

**Returns:**
- the file, or null if there are no contents

**Throws:**
- `java.io.IOException` - on error

### getTemporaryFileHandle

```java
public com.phoenix_int.util.ManagedFileHandle getTemporaryFileHandle()
```

Get an additional reference to the temporary file containing the current value, or null if there is no temp file currently. Note that, according to the convention for `ManagedFileHandle`, the caller receives the results of `ManagedFileHandle.createNewReference()`, and is responsible for calling `ManagedFileHandle.close()`.

**Returns:**
- an additional reference to the temporary file handle, or null if no temporary file is in use

### fromFile

```java
public void fromFile(java.lang.String filename)
              throws java.io.IOException
```

Sets the filename and then loads the contents of the actual file on disk into the temporary file.  It is preferred that you use `setName()` when you create a PHXRawFile and then use `readFile()` without passing a filename to it.  This allows progress monitoring to work correctly in all cases.

The handle to the previous contents is released, potentially deleting it if no other references are being held. Because the contents are reset, you may need to call `unmanageTempFile()` again.

**Throws:**
- `java.io.IOException` - thrown if the file can't be loaded.

### readFile

```java
public void readFile(java.lang.String filename)
              throws java.io.IOException
```

Sets the filename and then loads the contents of the actual file on disk into the temporary file. It is preferred that you use `setName()` when you create a PHXRawFile and then use `readFile()` without passing a filename to it. This allows progress monitoring to work correctly in all cases.

The handle to the previous contents is released, potentially deleting it if no other references are being held. Because the contents are reset, you may need to call `unmanageTempFile()` again.

**Throws:**
- `java.io.IOException` - thrown if the file can't be loaded.

### fromFile

```java
public void fromFile()
              throws java.io.IOException
```

Loads the contents of the actual file on disk into the temporary file. Functionally equivalent to `readFile()`.
 
The handle to the previous contents is released, potentially deleting it if no other references are being held. Because the contents are reset, you may need to call `unmanageTempFile()` again.

**Throws:**
- `java.io.IOException` - thrown if the file can't be loaded.

### readFile

```java
public void readFile(boolean useDFT)
              throws java.io.IOException
```

Loads the contents of the actual file on disk into the temporary file.

**Parameters:**
- `useDFT` - If true, the file won't really be read but instead its existence will be verified and a flag set.
 
If the file is read, the handle to the previous contents is released, potentially deleting it if no other references are being held. Because the contents are reset, you may need to call `unmanageTempFile()` again.

**Throws:**
- `java.io.IOException` - thrown if the file can't be loaded.

### deleteFile

```java
public void deleteFile(java.lang.String fileName)
                throws java.io.IOException
```

Deletes the actual file from disk. Does not affect the temporary file.

**Parameters:**
- `fileName` - the file to delete

**Throws:**
- `java.io.IOException`

### deleteFile

```java
public void deleteFile()
```

Deletes the actual file from disk. Does not affect the temporary file.

### deleteContents

```java
public void deleteContents()
```

Releases the handle to the temporary file. This may delete the file if nobody else is holding a `ManagedFileHandle`.

### backupFile

```java
public void backupFile(java.lang.String fileName)
                throws java.io.IOException
```

Backup the actual file on disk.  File is at the same location with ".bac" appended to the end.  If a file by that name already exists, it is deleted prior to moving.

**Parameters:**
- `fileName` - the file to backup

**Throws:**
- `java.io.IOException`

### backupFile

```java
public void backupFile()
```

Backup the actual file on disk.  File is at the same location with ".bac" appended to the end.  If a file by that name already exists, it is deleted prior to moving.

### readFile

```java
public void readFile()
              throws java.io.IOException
```

Loads the contents of the actual file on disk into the temporary file.
 
If the file is read, the handle to the previous contents is released, potentially deleting it if no other references are being held. Because the contents are reset, you may need to call `unmanageTempFile()` again.

**Throws:**
- `java.io.IOException` - thrown if the file can't be loaded.

### markAsRead

```java
public void markAsRead()
```

Call this function after you manually get the contents of the actual file. The function records its name and timestamp for use with the `hasChanged()` function.

### hasChanged

```java
public boolean hasChanged()
```

Checks to see if the actual file has changed since the last time `getContents()` was called.

**Returns:**
- `true` if the timestamp of the file is new, or if the file name has changed

### toFile

```java
public void toFile(java.lang.String fileName)
            throws java.io.IOException
```

Sets the filename and then writes from the temp file to the actual file. It is preferred that you use `setName()` when you create a PHXRawFile and then use `writeFile()` without passing a filename to it. This allows progress monitoring to work correctly in all cases.

**Throws:**
- `java.io.IOException` - thrown if the file can't be written.

### writeFile

```java
public void writeFile(java.lang.String fileName)
               throws java.io.IOException
```

Sets the filename and then writes from the temp file to the actual file.  It is preferred that you use `setName()` when you create a PHXRawFile and then use `writeFile()` without passing a filename to it.  This allows progress monitoring to work correctly in all cases.

**Throws:**
- `java.io.IOException` - thrown if the file can't be written.

### toFile

```java
public void toFile()
            throws java.io.IOException
```

Writes from the temp file to the actual file.

**Throws:**
- `java.io.IOException` - thrown if the file can't be written.

### writeFile

```java
public void writeFile()
               throws java.io.IOException
```

Writes from the temp file to the actual file.

**Throws:**
- `java.io.IOException` - thrown if the file can't be written.

### getValueStreamLen

```java
public long getValueStreamLen()
                       throws java.io.IOException
```

Gets the length of a stream to the temporary file contents.

**Returns:**
- The length of a stream returned by the `getValueStream` method.

**Throws:**
- `java.io.IOException`

### getValueStream

```java
@Deprecated
public java.io.InputStream getValueStream()
                                   throws java.io.IOException
```

**Deprecated.** using `toString2().getInputStream()` is prefered. 

Gets an `InputStream` to the working contents of the file. Reads the contents from the actual file into the temp file if necessary.

**Returns:**
- An `InputStream` to the file contents, encoded in Base64.

**Throws:**
- `java.io.IOException` - thrown if the file can't be read.

### toString2

```java
public PHXStringBuffer toString2()
                          throws java.io.IOException
```

Gets a `PHXStringBuffer` representation of the contents of the temporary file.

**Specified by:**
- `toString2` in interface `IPHXType2`

**Returns:**
- `PHXStringBuffer` representation of the type

**Throws:**
- `java.io.IOException`

### fromString2

```java
public void fromString2(PHXStringBuffer newContents)
                 throws java.io.IOException,
                        PHXGetByUrlException
```

Sets the file temporary file contents to the value of the PHXStringBuffer.

**Specified by:**
- `fromString2` in interface `IPHXType2`

**Parameters:**
- `newContents` - the new contents of the file

**Throws:**
- `java.io.IOException`
- `PHXGetByUrlException`

### toAPIObject

```java
public <EX extends java.lang.Throwable> java.util.Map<java.lang.String,java.lang.String> toAPIObject(com.phoenix_int.functional.FunctionThrows<PHXRawFile,java.lang.String,EX> fileStore)
                            throws EX extends java.lang.Throwable,
                                   java.io.IOException
```

Convert this instance to a string-string map appropriate for serialization.

**Type Parameters:**
- `EX` - the type of exception thrown by the file-store function

**Parameters:**
- `fileStore` - a file-store function that may be used to capture the file value out-of-band.

**Returns:**
- a map that is appropriate for serialization

**Throws:**
- `java.io.IOException` - if a delayed DFT read occurs and causes an exception
- `EX` - when thrown by the file-store function
- `EX extends java.lang.Throwable`

### fromAPIObject

```java
public <EX extends java.lang.Throwable> void fromAPIObject(java.util.Map<java.lang.String,java.lang.String> object,
                                                           com.phoenix_int.functional.FunctionThrows<java.lang.String,com.phoenix_int.util.ManagedFileHandle,EX> fileStore)
                                                    throws EX extends java.lang.Throwable
```

Populate this instance from a string-string map.

**Type Parameters:**
- `EX` - the type of exception thrown by the file-store function

**Parameters:**
- `object` - the string-string map.
- `fileStore` - a function that can reverse the storage used when the original object was serialized. Note that, according to the convention for `ManagedFileHandle`, this function `(fromAPIObject(java.util.Map<java.lang.String, java.lang.String>, com.phoenix_int.functional.FunctionThrows<java.lang.String, com.phoenix_int.util.ManagedFileHandle, EX>))` becomes responsible for closing the returned handle.

**Throws:**
- `EX` - when thrown by the file-store function
- `EX extends java.lang.Throwable`

### toString

```java
public java.lang.String toString()
```

converts the variable to a string

**Specified by:**
- `toString` in interface [`IPHXType`](IPHXType.md)

**Overrides:**
- `toString` in class `java.lang.Object`

**Returns:**
- a String representation of the variable

### fromString

```java
public void fromString(java.lang.String value)
```

Sets the file temporary file contents to the value of the string.

**Specified by:**
- `fromString` in interface [`IPHXType`](IPHXType.md)

**Parameters:**
- `value` - the value to use

### setMetaData

```java
public void setMetaData(PHXRawFile metaData)
```

### finalize

```java
protected void finalize()
                 throws java.lang.Throwable
```

Although `close` should be called manually before garbage collection, do so here as a backup. Note that Java makes no guarantee that any object is ever actually garbage collected; if the JVM exits without running GC and picking up this object, the finalizer will never be called. We cannot rely on Java GC as a defense against leaking PHXRawFile objects.

**Overrides:**
- `finalize` in class `java.lang.Object`

**Throws:**
- `java.lang.Throwable`

### equalsNatural

```java
public boolean equalsNatural(PHXSimpleType toCompare)
```

Compare this PHXSimpleType to another PHXSimpleType. This type of comparison is different than `Comparable` in that it does a natural comparison between numbers. It is not designed, nor suited, for use in things such as sets, and may behave oddly if put in those circumstances.

**Specified by:**
- `equalsNatural` in class [`PHXSimpleType`](PHXSimpleType.md)

**Parameters:**
- `toCompare` -

**Returns:**
- a negative number if this object is less than `toCompare`, a positive number if this object is greater than `toCompare`, and zero if these two objects are equal.

### fromObject

```java
public void fromObject(java.lang.Object toRead)
                throws PHXInvalidTypeException
```

Load the value of this object from the specified object. This will read the object and attempt to convert it if it is a known type. If the type isn't recognized, it will throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md). If there is an error in conversion, it will also throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md)

NOTE: while it might be logical to think you can create a `PHX(Type)Array` from, say, an array of `java.lang.(Type)`, that is not currently supported. You MUST use the PHX string array formatting style.

**Specified by:**
- `fromObject` in class [`PHXSimpleType`](PHXSimpleType.md)

**Parameters:**
- `toRead` - to object from which to load this objects value.

**Throws:**
- [`PHXInvalidTypeException`](PHXInvalidTypeException.md) - if the specified object is of an invalid type or there is an error in conversion.

### _setContentFromOther

```java
protected final void _setContentFromOther(PHXRawFile variable)
```

### Accept

```java
public <T> T Accept(IPHXType2.IVisitor<T> visitor)
```

Accept a Visitor.

**Specified by:**
- `Accept` in interface `IPHXType2`

**Type Parameters:**
- `T` - Type of the result of the visit.

**Parameters:**
- `visitor` - The visitor to accept.

**Returns:**
- The results of the visit.

### close

```java
public void close()
```


**Specified by:**
- `close` in interface `java.lang.AutoCloseable`

### createCopy

```java
public PHXRawFile createCopy()
```

Create a copy of this instance, including the value and metadata.

**Specified by:**
- `createCopy` in class [`PHXSimpleType`](PHXSimpleType.md)

**Returns:**
- a newly constructed copy of this instance.
