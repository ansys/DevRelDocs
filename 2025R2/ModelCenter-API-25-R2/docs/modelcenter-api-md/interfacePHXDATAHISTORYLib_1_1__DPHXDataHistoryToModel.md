# Interface PHXDATAHISTORYLib::\_DPHXDataHistoryToModel

![][IDL]
![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 715)



The Data History to Model connector is the piece that connects a Data History to a [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) instance, for the purpose of restoring a run or re-running runs. It allows a user to override the default behaviors of the "Save to Model" and "Rerun Runs" capabilities of Data Explorer.

## Members

* [canRerunRuns](interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryToModel.md#interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryToModel_1a080673db51fe153fd870e46b9dd4f221)
* [canSaveToModel](interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryToModel.md#interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryToModel_1a3123522cb86b3daa95c56f60b99a4f9e)
* [closeDataHistory](interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryToModel.md#interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryToModel_1a9ead478fc2486a3ac01b73ee8b3962be)
* [rerunRuns](interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryToModel.md#interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryToModel_1a2d1c0808d8fcdfe748d3194c45eda87a)
* [saveToModel](interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryToModel.md#interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryToModel_1a6efbbc76935609344ddfe8b48eaac5c1)

## Public functions

<a id="interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryToModel_1a3123522cb86b3daa95c56f60b99a4f9e"></a>
### Function canSaveToModel

![][public]

```
BOOL PHXDATAHISTORYLib::_DPHXDataHistoryToModel::canSaveToModel(LPDISPATCH dataHistory, long run)
```



Determine if a run could be saved to the model; returning FALSE means that option should be disabled in any menus.






**Parameters**:

* **dataHistory**: the data history to check in regards to
* **run**: the index of the run to check


**Returns**:

TRUE if the run could be saved, FALSE if not



**Parameters**:

* LPDISPATCH **dataHistory**
* long **run**

**Return type**: BOOL

<a id="interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryToModel_1a6efbbc76935609344ddfe8b48eaac5c1"></a>
### Function saveToModel

![][public]

```
void PHXDATAHISTORYLib::_DPHXDataHistoryToModel::saveToModel(LPDISPATCH dataHistory, long run)
```



Notify that a user has requested to save the indicated run to the model. <br/>







**Parameters**:

* **dataHistory**: the data history to supply the data
* **run**: the index of the run to save



**Parameters**:

* LPDISPATCH **dataHistory**
* long **run**

**Return type**: void

<a id="interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryToModel_1a080673db51fe153fd870e46b9dd4f221"></a>
### Function canRerunRuns

![][public]

```
BOOL PHXDATAHISTORYLib::_DPHXDataHistoryToModel::canRerunRuns(LPDISPATCH dataHistory, VARIANT runs)
```



Determine if the specified runs can be re-run. Returning FALSE means that the option should be disabled in any menus.






**Parameters**:

* **dataHistory**: the data history to check in regards to
* **runs**: an array of run indexes


**Returns**:

True if the runs can be re-run, false if not.



**Parameters**:

* LPDISPATCH **dataHistory**
* VARIANT **runs**

**Return type**: BOOL

<a id="interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryToModel_1a2d1c0808d8fcdfe748d3194c45eda87a"></a>
### Function rerunRuns

![][public]

```
void PHXDATAHISTORYLib::_DPHXDataHistoryToModel::rerunRuns(LPDISPATCH dataHistory, VARIANT runs)
```



Notify that the user has requested to re-run a set of runs. Does not wait for the runs to complete. endRuns from [PHXDataHistory](classPHXDATAHISTORYLib_1_1PHXDataHistory.md#classPHXDATAHISTORYLib_1_1PHXDataHistory) will be called when completed.






**Parameters**:

* **dataHistory**: the data history to read and write from
* **runs**: an array of run indexes



**Parameters**:

* LPDISPATCH **dataHistory**
* VARIANT **runs**

**Return type**: void

<a id="interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryToModel_1a9ead478fc2486a3ac01b73ee8b3962be"></a>
### Function closeDataHistory

![][public]

```
void PHXDATAHISTORYLib::_DPHXDataHistoryToModel::closeDataHistory(LPDISPATCH dataHistory)
```



Notify that the user is attempting to close the given data history.






**Parameters**:

* **dataHistory**: the data history the user is attempting to close


**Exceptions**:

* **Exception**: on error



**Parameters**:

* LPDISPATCH **dataHistory**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)