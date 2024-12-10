# Interface PHXDATAHISTORYLib::PHXDataExplorerPlugIn

![][IDL]
![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 882)



An interface which represents a Data Explorer Page. An object must implement this interface in order to be displayed as a Data Explorer Page.

## Members

* [fromString](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1a889e85b07599a03c7a262297629d0763)
* [getDataHistory](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1a2add0041717f37ff0c72761de93af815)
* [getMenuItems](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1ad899f49a6bef9cd0f56292b7c92d8503)
* [getModelCenter](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1ab914e1d1c1dd883a0a1b6201cde0577f)
* [getPageTitle](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1a38ed1207dbcb350057bc22b0450eb009)
* [getThumbnail](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1af5f2203aace2cd54bac6c8789b1782c5)
* [invokeMenuItem](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1afe6db966ff1b5790a8ae887d70294dc3)
* [isMenuItemEnabled](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1a7259c195e2711d0fb54579e22752adb2)
* [setDataHistory](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1a530e372d5d75f87574b4f5a7f8f25347)
* [setModelCenter](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1a38e366a60626a29afa74869e40f156c6)
* [setStartContext](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1ab7f82a38962d77ab437299dd6cbe50a1)
* [toString](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1a075c34c41b0461b36077d19c314fdc2a)
* [updateHint](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1a6394212eddc67589ac43fbd85826bbc2)

## Public functions

<a id="interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1a2add0041717f37ff0c72761de93af815"></a>
### Function getDataHistory

![][public]

```
LPDISPATCH PHXDATAHISTORYLib::PHXDataExplorerPlugIn::getDataHistory()
```



Returns the IDispatch of the associated Data History object. 
**Returns**:

The IDispatch of the associated Data History object.



**Return type**: LPDISPATCH

<a id="interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1a530e372d5d75f87574b4f5a7f8f25347"></a>
### Function setDataHistory

![][public]

```
void PHXDATAHISTORYLib::PHXDataExplorerPlugIn::setDataHistory(LPDISPATCH dataHistory)
```



Passes the associated Data History for this page. 
**Parameters**:

* **dataHistory**: The dataHistory object.



**Parameters**:

* LPDISPATCH **dataHistory**

**Return type**: void

<a id="interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1ab914e1d1c1dd883a0a1b6201cde0577f"></a>
### Function getModelCenter

![][public]

```
LPDISPATCH PHXDATAHISTORYLib::PHXDataExplorerPlugIn::getModelCenter()
```



Returns the associated ModelCenter object, if one exists. 
**Returns**:

The associated ModelCenter object.



**Return type**: LPDISPATCH

<a id="interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1a38e366a60626a29afa74869e40f156c6"></a>
### Function setModelCenter

![][public]

```
void PHXDATAHISTORYLib::PHXDataExplorerPlugIn::setModelCenter(LPDISPATCH modelCenter)
```



Passes the associated ModelCenter object for this Plug-In. Plug-Ins should not expect this to be set and should fail gracefully with reduced functionality if an associated ModelCenter object is not available. 
**Parameters**:

* **modelCenter**: The ModelCenter object.



**Parameters**:

* LPDISPATCH **modelCenter**

**Return type**: void

<a id="interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1a38ed1207dbcb350057bc22b0450eb009"></a>
### Function getPageTitle

![][public]

```
BSTR PHXDATAHISTORYLib::PHXDataExplorerPlugIn::getPageTitle()
```



Returns the page title. 
**Returns**:

The page title.



**Return type**: BSTR

<a id="interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1a075c34c41b0461b36077d19c314fdc2a"></a>
### Function toString

![][public]

```
BSTR PHXDATAHISTORYLib::PHXDataExplorerPlugIn::toString()
```



Tells the Plug-In to save its current state into string form so that it can be saved with the file or put on the clipboard as a "Page Template". 
**Returns**:

The string representation of the Plug-In.



**Return type**: BSTR

<a id="interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1a889e85b07599a03c7a262297629d0763"></a>
### Function fromString

![][public]

```
void PHXDATAHISTORYLib::PHXDataExplorerPlugIn::fromString(BSTR str)
```



Tells this Data Explorer Plug-In to load its state from the given string. This data is used for saving/loading a Data Explorer Page and also for cut-n-paste of Data Explorer page templates, therefore the Plug-In should not expect that the data and Variable names in the associated Data History is the same as when the [toString()](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1a075c34c41b0461b36077d19c314fdc2a) method was called.






**Parameters**:

* **str**: The string to load. This will be passed unaltered from a previous call to [toString()](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1a075c34c41b0461b36077d19c314fdc2a).



**Parameters**:

* BSTR **str**

**Return type**: void

<a id="interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1ad899f49a6bef9cd0f56292b7c92d8503"></a>
### Function getMenuItems

![][public]

```
void PHXDATAHISTORYLib::PHXDataExplorerPlugIn::getMenuItems(LPDISPATCH iPHXMenuItem)
```



The Plug-In should fill in the passed in object with any context dependent menu items to put into the Page menu below all the standard items.






**Parameters**:

* **iPHXMenuItem**: An [IPHXMenuItems](interfacePHXDATAHISTORYLib_1_1IPHXMenuItems.md#interfacePHXDATAHISTORYLib_1_1IPHXMenuItems) object which should be filled in by the Plug-In.



**Parameters**:

* LPDISPATCH **iPHXMenuItem**

**Return type**: void

<a id="interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1afe6db966ff1b5790a8ae887d70294dc3"></a>
### Function invokeMenuItem

![][public]

```
void PHXDATAHISTORYLib::PHXDataExplorerPlugIn::invokeMenuItem(long id)
```



Tells the Plug-In that the user is attempting to invoke a menu item related to this page.






**Parameters**:

* **id**: May be one of the constants from the PXHMENU_PREDEFS enumeration or a 0 based index into the custom menu items that the Plug-In defined through the [getMenuItems](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1ad899f49a6bef9cd0f56292b7c92d8503) call.



**Parameters**:

* long **id**

**Return type**: void

<a id="interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1a7259c195e2711d0fb54579e22752adb2"></a>
### Function isMenuItemEnabled

![][public]

```
boolean PHXDATAHISTORYLib::PHXDataExplorerPlugIn::isMenuItemEnabled(long id)
```



This function should return whether the selected menu item is valid and should be enabled in the menu bar.






**Parameters**:

* **id**: May be one of the constants from the PXHMENU_PREDEFS enumeration or a 0 based index into the custom menu items that the Plug-In defined through the [getMenuItems](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1ad899f49a6bef9cd0f56292b7c92d8503) call.


**Returns**:

True if valid/enabled, else false.



**Parameters**:

* long **id**

**Return type**: boolean

<a id="interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1a6394212eddc67589ac43fbd85826bbc2"></a>
### Function updateHint

![][public]

```
boolean PHXDATAHISTORYLib::PHXDataExplorerPlugIn::updateHint()
```



This function is called just before a new thumbnail snapshot is taken. It is used by Plug-Ins which don't update content when they are not visible or selected, but would like an opportunity to update before a thumbnail is drawn. 
**Returns**:

False if an exception is thrown, else true.



**Return type**: boolean

<a id="interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1ab7f82a38962d77ab437299dd6cbe50a1"></a>
### Function setStartContext

![][public]

```
void PHXDATAHISTORYLib::PHXDataExplorerPlugIn::setStartContext(BSTR str)
```



Passes in the "context" in which this plug-in is being invoked. The context is the name of the Plug-In as defined in [ModelCenter](namespaceModelCenter.md#namespaceModelCenter)'s Plug-In Manager, such as "2D Line". This is useful when a single Plug-In has multiple behaviors. 
**Parameters**:

* **str**: The start context.



**Parameters**:

* BSTR **str**

**Return type**: void

<a id="interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1af5f2203aace2cd54bac6c8789b1782c5"></a>
### Function getThumbnail

![][public]

```
BSTR PHXDATAHISTORYLib::PHXDataExplorerPlugIn::getThumbnail(BSTR hints)
```



Called by the Data Explorer to get the name of a file that contains the thumbnail image.






**Parameters**:

* **hints**:


**Returns**:

The name of the file containing the thumbnail image.



**Parameters**:

* BSTR **hints**

**Return type**: BSTR

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)