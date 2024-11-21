# Interface PHXDATAHISTORYLib::ISaveContext

![][IDL]
![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1209)



Object for assisting in save and restoring files.

## Members

* [close](interfacePHXDATAHISTORYLib_1_1ISaveContext.md#interfacePHXDATAHISTORYLib_1_1ISaveContext_1a314e254f112778f1bb9839e157fcc532)
* [getFileFormat](interfacePHXDATAHISTORYLib_1_1ISaveContext.md#interfacePHXDATAHISTORYLib_1_1ISaveContext_1ab69f2a1eba739bfa1e95a1b5ba2cc8c8)
* [getSaveLocation](interfacePHXDATAHISTORYLib_1_1ISaveContext.md#interfacePHXDATAHISTORYLib_1_1ISaveContext_1a02bf3019e5a957a4db2daff6dda6ca28)
* [restoreFile](interfacePHXDATAHISTORYLib_1_1ISaveContext.md#interfacePHXDATAHISTORYLib_1_1ISaveContext_1a90cd640253dfeb285c7c66803e61f6ac)
* [restoreFileStream](interfacePHXDATAHISTORYLib_1_1ISaveContext.md#interfacePHXDATAHISTORYLib_1_1ISaveContext_1ad11ce33d8317c86c335597d0e8389578)
* [saveFile](interfacePHXDATAHISTORYLib_1_1ISaveContext.md#interfacePHXDATAHISTORYLib_1_1ISaveContext_1ae85020cbcdca30d63c0dc803f19b7599)
* [saveFileStream](interfacePHXDATAHISTORYLib_1_1ISaveContext.md#interfacePHXDATAHISTORYLib_1_1ISaveContext_1a840d41a9c874a046867c9d25c8a0d628)
* [setFileFormat](interfacePHXDATAHISTORYLib_1_1ISaveContext.md#interfacePHXDATAHISTORYLib_1_1ISaveContext_1ad30b0ac3ddc36ac47b0f03662d3d4d0a)

## Public functions

<a id="interfacePHXDATAHISTORYLib_1_1ISaveContext_1ae85020cbcdca30d63c0dc803f19b7599"></a>
### Function saveFile

![][public]

```
boolean PHXDATAHISTORYLib::ISaveContext::saveFile(BSTR sourceLocation, BSTR context)
```



Save a file into the context. If the save is successful passing the context to restore as the file ID will return the saved file. 
**Parameters**:

* **sourceLocation**: the location of the source file to save
* **context**: context by which to save


**Returns**:

true if the file was saved successfully; false otherwise



**Parameters**:

* BSTR **sourceLocation**
* BSTR **context**

**Return type**: boolean

<a id="interfacePHXDATAHISTORYLib_1_1ISaveContext_1a90cd640253dfeb285c7c66803e61f6ac"></a>
### Function restoreFile

![][public]

```
boolean PHXDATAHISTORYLib::ISaveContext::restoreFile(BSTR fileID, BSTR targetLocation)
```



Restores the file by ID to the given location. 
**Parameters**:

* **fileID**: id of the file to restore
* **targetLocation**: disk location to restore the file


**Returns**:

true if a file with the given id was restored, false on failure



**Parameters**:

* BSTR **fileID**
* BSTR **targetLocation**

**Return type**: boolean

<a id="interfacePHXDATAHISTORYLib_1_1ISaveContext_1a314e254f112778f1bb9839e157fcc532"></a>
### Function close

![][public]

```
void PHXDATAHISTORYLib::ISaveContext::close()
```



Closes the save context.



**Return type**: void

<a id="interfacePHXDATAHISTORYLib_1_1ISaveContext_1a02bf3019e5a957a4db2daff6dda6ca28"></a>
### Function getSaveLocation

![][public]

```
BSTR PHXDATAHISTORYLib::ISaveContext::getSaveLocation()
```



Gets the disk location this save context saves. 
**Returns**:

the save context file path



**Return type**: BSTR

<a id="interfacePHXDATAHISTORYLib_1_1ISaveContext_1a840d41a9c874a046867c9d25c8a0d628"></a>
### Function saveFileStream

![][public]

```
LPUNKNOWN PHXDATAHISTORYLib::ISaveContext::saveFileStream(BSTR context)
```



Gets a stream that can be used for saving a file to the context. Only one stream may be open at a time. 
**Parameters**:

* **context**: context by which to save


**Returns**:

output stream for saving



**Parameters**:

* BSTR **context**

**Return type**: LPUNKNOWN

<a id="interfacePHXDATAHISTORYLib_1_1ISaveContext_1ad11ce33d8317c86c335597d0e8389578"></a>
### Function restoreFileStream

![][public]

```
LPUNKNOWN PHXDATAHISTORYLib::ISaveContext::restoreFileStream(BSTR fileID)
```



Gets a stream that can be used for restoring a file saved into the context with the given ID. Only one stream may be open at a time. 
**Parameters**:

* **fileID**: id of the file to restore


**Returns**:

input stream for restoring



**Parameters**:

* BSTR **fileID**

**Return type**: LPUNKNOWN

<a id="interfacePHXDATAHISTORYLib_1_1ISaveContext_1ab69f2a1eba739bfa1e95a1b5ba2cc8c8"></a>
### Function getFileFormat

![][public]

```
int PHXDATAHISTORYLib::ISaveContext::getFileFormat()
```



Get the file format of the save context instance. 
**Returns**:

save context file format



**Return type**: int

<a id="interfacePHXDATAHISTORYLib_1_1ISaveContext_1ad30b0ac3ddc36ac47b0f03662d3d4d0a"></a>
### Function setFileFormat

![][public]

```
void PHXDATAHISTORYLib::ISaveContext::setFileFormat(int fileFormat)
```



Set the file format of the save context. 
**Parameters**:

* **fileFormat**: file format of save context instance



**Parameters**:

* int **fileFormat**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)