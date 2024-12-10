# Interface PHXDATAHISTORYLib::PHXDataExplorerExportPlugIn

![][IDL]
![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 985)



A data explorer plug-in can implement this interface in order to provide a higher quality image or snapshot export capability.

## Members

* [exportImage](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerExportPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerExportPlugIn_1a6e04dc894ad504d6c349d36ae7384e09)

## Public functions

<a id="interfacePHXDATAHISTORYLib_1_1PHXDataExplorerExportPlugIn_1a6e04dc894ad504d6c349d36ae7384e09"></a>
### Function exportImage

![][public]

```
void PHXDATAHISTORYLib::PHXDataExplorerExportPlugIn::exportImage(BSTR hints, BSTR filename)
```



The plug-in should write an enhanced metafile out when this method is called.






**Parameters**:

* **hints**: Currently unused.
* **filename**: The filename of the file to write.



**Parameters**:

* BSTR **hints**
* BSTR **filename**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)