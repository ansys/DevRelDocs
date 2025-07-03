# Interface PHXDATAHISTORYLib::\_DPHXDataHistoryEvents

![][IDL]
![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 796)



Events interface for [PHXDataHistory](classPHXDATAHISTORYLib_1_1PHXDataHistory.md#classPHXDATAHISTORYLib_1_1PHXDataHistory); not actually a separate interface

## Members

* [dataChanged](interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents.md#interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents_1aa6f5dbeba5082e060cb68696cd07d44f)
* [highlightChanged](interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents.md#interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents_1a84baf9536c489fbb318a5e13cbf6fef5)
* [progressMeterChange](interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents.md#interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents_1a2f121535f7eedf77ce9e6edb9b512a51)
* [progressMeterEstimate](interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents.md#interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents_1af43f03e636994de756db750668ac86d6)
* [progressMeterStart](interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents.md#interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents_1aca4688267a060ab301972886d0c04d6e)
* [progressMeterStop](interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents.md#interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents_1a0fb85ceb307de0a1c2a449be77890447)
* [variablesChanged](interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents.md#interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents_1a9a2402c1679d7707f2f274399276107d)

## Public functions

<a id="interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents_1a9a2402c1679d7707f2f274399276107d"></a>
### Function variablesChanged

![][public]

```
void PHXDATAHISTORYLib::_DPHXDataHistoryEvents::variablesChanged()
```



This event is called anytime Variables are added or removed.



**Return type**: void

<a id="interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents_1a2f121535f7eedf77ce9e6edb9b512a51"></a>
### Function progressMeterChange

![][public]

```
void PHXDATAHISTORYLib::_DPHXDataHistoryEvents::progressMeterChange(long completed, long total)
```



This event is fired any time a new progress meter information is available, typically due to runs coming in.






**Parameters**:

* **completed**: The number of runs with data.
* **total**: The total number of expected runs.



**Parameters**:

* long **completed**
* long **total**

**Return type**: void

<a id="interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents_1aca4688267a060ab301972886d0c04d6e"></a>
### Function progressMeterStart

![][public]

```
void PHXDATAHISTORYLib::_DPHXDataHistoryEvents::progressMeterStart()
```



This event is fired when startRuns is called.



**Return type**: void

<a id="interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents_1a0fb85ceb307de0a1c2a449be77890447"></a>
### Function progressMeterStop

![][public]

```
void PHXDATAHISTORYLib::_DPHXDataHistoryEvents::progressMeterStop()
```



This event is fired when endRuns is called.



**Return type**: void

<a id="interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents_1aa6f5dbeba5082e060cb68696cd07d44f"></a>
### Function dataChanged

![][public]

```
void PHXDATAHISTORYLib::_DPHXDataHistoryEvents::dataChanged(long varIndex, long runIndex)
```



This event is fired any time any data item within the Data History is changed.






**Parameters**:

* **varIndex**: The 0 based index to the Variable which changed. May be -1 to indicate a large sweeping change that might affect all Variables.
* **runIndex**: The 0 based index to the run which changed. May be -1 to indicate that a large changed happened, possibly involving all the runs.



**Parameters**:

* long **varIndex**
* long **runIndex**

**Return type**: void

<a id="interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents_1af43f03e636994de756db750668ac86d6"></a>
### Function progressMeterEstimate

![][public]

```
void PHXDATAHISTORYLib::_DPHXDataHistoryEvents::progressMeterEstimate(long estimate)
```



This event is fired when the process attempts to determine how long the job is going to take time-wise based off of previous run result timings.






**Parameters**:

* **estimate**: Value of the estimate of how long the job is going to take.



**Parameters**:

* long **estimate**

**Return type**: void

<a id="interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents_1a84baf9536c489fbb318a5e13cbf6fef5"></a>
### Function highlightChanged

![][public]

```
void PHXDATAHISTORYLib::_DPHXDataHistoryEvents::highlightChanged(long runIndex, boolean highlight, boolean handleEvent)
```



This event is fired when a different run is selected. 
**Parameters**:

* **runIndex**: The index of the run.
* **highlight**: Whether to visibly highlight the newly selected run.
* **handleEvent**: If false, will just return.



**Parameters**:

* long **runIndex**
* boolean **highlight**
* boolean **handleEvent**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)