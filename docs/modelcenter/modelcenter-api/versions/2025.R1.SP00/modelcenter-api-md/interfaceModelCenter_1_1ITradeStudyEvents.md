# Interface ModelCenter::ITradeStudyEvents

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 4956)



Event functions that ModelCenter can send.

## Members

* [EndToolRun](interfaceModelCenter_1_1ITradeStudyEvents.md#interfaceModelCenter_1_1ITradeStudyEvents_1a2fd4f50429de83a6469ff4146c2202eb)
* [ModelXMLExtensionsChanged](interfaceModelCenter_1_1ITradeStudyEvents.md#interfaceModelCenter_1_1ITradeStudyEvents_1a09c0d68be95fb162874e4da3d0965749)
* [StartToolRun](interfaceModelCenter_1_1ITradeStudyEvents.md#interfaceModelCenter_1_1ITradeStudyEvents_1a4bd376f4406023fdb8c562c3e530e32c)
* [ToolClosed](interfaceModelCenter_1_1ITradeStudyEvents.md#interfaceModelCenter_1_1ITradeStudyEvents_1aceebb769e27511c9b87462b8fa9ef16f)

## Public functions

<a id="interfaceModelCenter_1_1ITradeStudyEvents_1a4bd376f4406023fdb8c562c3e530e32c"></a>
### Function StartToolRun

![][public]

```
void ModelCenter::ITradeStudyEvents::StartToolRun()
```



Function that is called when a trade study has started its run.



**Return type**: void

<a id="interfaceModelCenter_1_1ITradeStudyEvents_1a2fd4f50429de83a6469ff4146c2202eb"></a>
### Function EndToolRun

![][public]

```
void ModelCenter::ITradeStudyEvents::EndToolRun()
```



Function that is called when a trade study has finished running.



**Return type**: void

<a id="interfaceModelCenter_1_1ITradeStudyEvents_1aceebb769e27511c9b87462b8fa9ef16f"></a>
### Function ToolClosed

![][public]

```
void ModelCenter::ITradeStudyEvents::ToolClosed(BSTR type)
```



Function that is called when a trade study has closed. 
**Parameters**:

* **type**: the trade study type that was closed.



**Parameters**:

* BSTR **type**

**Return type**: void

<a id="interfaceModelCenter_1_1ITradeStudyEvents_1a09c0d68be95fb162874e4da3d0965749"></a>
### Function ModelXMLExtensionsChanged

![][public]

```
void ModelCenter::ITradeStudyEvents::ModelXMLExtensionsChanged()
```



This event is raised whenever the XML extensions for the main model are changed. This may indicate that a trade study tool has saved its favorites.



**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)