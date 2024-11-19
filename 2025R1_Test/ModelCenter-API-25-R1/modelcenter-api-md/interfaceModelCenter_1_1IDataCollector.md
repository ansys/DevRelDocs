<a id="interfaceModelCenter_1_1IDataCollector"></a>
# Interface ModelCenter::IDataCollector

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1531)



COM Instance.

## Members

* [addCustom](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1acd3adc12cd4f94a2dbf436e8617cbf8a)
* [createEmptyRuns](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1ab152e50d67d452b3f301ea18f732183d)
* [enableCarpetPlotTab](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1a1e13b83ec71a3274399832bfe3471364)
* [enableGraphTab](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1aa2efe037d15784acff1d3291c482f276)
* [enableMainEffectsTab](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1a11a172f0d359597318448e52fd991843)
* [endRuns](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1af2b0ccb145e2775fc9958d3500cfb4bc)
* [exportToCSV](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1a75c4f95d0b30e6edb92f98e378f7c4be)
* [fromString](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1a42e57bafd047e98fff2902f213c48f61)
* [getDataExplorer](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1aa0b0a16e2c3c1f600a8435d6dca0c096)
* [getErrorID](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1a5fac36a5e20d349ab8941387af60a576)
* [getErrorMessage](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1ac93c96f43f475bc237f396b717bc5408)
* [getNumFailedRuns](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1aa169d7ec12253068db8fac00e201f6a9)
* [getNumRuns](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1abe6a941ef83e86184ba40149f775d3f8)
* [getNumVariables](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1acaa00471b667aa04d3462fa4e26f8d36)
* [getValue](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1aa3502b40206d864d5bebd8cec59c71ed)
* [getVariableDescription](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1a12a4f4daac61b17022aa54dcbb3ec84e)
* [hide](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1a75d77af56d17b13040ea831d957a4cab)
* [isValid](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1a2d858bdac93de126a13ced552898b3f9)
* [isVisible](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1a986646a10f5885304323ceb7a737c76b)
* [newCustomDesignPoint](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1a04f9887e54ecdb60a1f30abbdfbf975b)
* [save](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1a7d30505236a3c1c3b804da8f7f924e26)
* [selectX](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1a54fca30f8b9b840cd4d130fffef89ba8)
* [selectY](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1a82393da70a02822d7184a81430f45b94)
* [setCustomRun](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1ae0c7fcaf40dc9a73c3818e08fda4c954)
* [setNumExpectedRuns](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1a2760890872ed478c72439fc063f4e9aa)
* [show](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1a2dcb6077094c93a8484123a0c5633dae)
* [startRuns](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1a4c2a3c1d083373801689d9dacc1fd530)
* [storeCurrentDesignPoint](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1aed3d0ea61e181d39e6bbf38a5ad0a401)
* [storeCustomDesignPoint](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1a0beef1e5e859c093f079e64792e9ed8e)
* [toString](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector_1af9938e6a1943072ae9e89a19e4461a3f)

## Properties

<a id="interfaceModelCenter_1_1IDataCollector_1a986646a10f5885304323ceb7a737c76b"></a>
### Property isVisible

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BOOL ModelCenter::IDataCollector::isVisible
```



Determine if the data collector is visible



**Return type**: BOOL

## Public functions

<a id="interfaceModelCenter_1_1IDataCollector_1aed3d0ea61e181d39e6bbf38a5ad0a401"></a>
### Function storeCurrentDesignPoint

![][public]

```
void ModelCenter::IDataCollector::storeCurrentDesignPoint()
```



Stores the current Model values into the Data Collector as a run.



**Return type**: void

<a id="interfaceModelCenter_1_1IDataCollector_1aa2efe037d15784acff1d3291c482f276"></a>
### Function enableGraphTab

![][public]

```
void ModelCenter::IDataCollector::enableGraphTab(BOOL flag)
```



Enables or disables the graph tab.






**Parameters**:

* **flag**: Enable(TRUE) or Disable(FALSE).



**Parameters**:

* BOOL **flag**

**Return type**: void

<a id="interfaceModelCenter_1_1IDataCollector_1a2dcb6077094c93a8484123a0c5633dae"></a>
### Function show

![][public]

```
void ModelCenter::IDataCollector::show()
```



Displays the Data Collector GUI.



**Return type**: void

<a id="interfaceModelCenter_1_1IDataCollector_1acd3adc12cd4f94a2dbf436e8617cbf8a"></a>
### Function addCustom

![][public]

```
void ModelCenter::IDataCollector::addCustom(BSTR variable, BSTR label)
```



Adds a custom variable to the Data Collector.






**Parameters**:

* **variable**: Name of the custom variable.
* **label**: Label of the custom variable.



**Parameters**:

* BSTR **variable**
* BSTR **label**

**Return type**: void

<a id="interfaceModelCenter_1_1IDataCollector_1a54fca30f8b9b840cd4d130fffef89ba8"></a>
### Function selectX

![][public]

```
void ModelCenter::IDataCollector::selectX(BSTR name)
```



Selects the x-axis variable for the Data Collector graph.






**Parameters**:

* **name**: Full ModelCenter path of the variable.



**Parameters**:

* BSTR **name**

**Return type**: void

<a id="interfaceModelCenter_1_1IDataCollector_1a82393da70a02822d7184a81430f45b94"></a>
### Function selectY

![][public]

```
void ModelCenter::IDataCollector::selectY(BSTR name)
```



Selects a y-axis variable for the Data Collector graph. More than one y-axis variable can be selected.






**Parameters**:

* **name**: Full ModelCenter path of the variable.



**Parameters**:

* BSTR **name**

**Return type**: void

<a id="interfaceModelCenter_1_1IDataCollector_1a2760890872ed478c72439fc063f4e9aa"></a>
### Function setNumExpectedRuns

![][public]

```
void ModelCenter::IDataCollector::setNumExpectedRuns(long numRuns)
```



Sets the range of the Data Collector progress meter.






**Parameters**:

* **numRuns**: Number of expected runs.



**Parameters**:

* long **numRuns**

**Return type**: void

<a id="interfaceModelCenter_1_1IDataCollector_1a4c2a3c1d083373801689d9dacc1fd530"></a>
### Function startRuns

![][public]

```
void ModelCenter::IDataCollector::startRuns()
```



Informs the Data Collector that data is about to be collected.



**Return type**: void

<a id="interfaceModelCenter_1_1IDataCollector_1af2b0ccb145e2775fc9958d3500cfb4bc"></a>
### Function endRuns

![][public]

```
void ModelCenter::IDataCollector::endRuns()
```



Informs the Data Collector that data collection is complete.



**Return type**: void

<a id="interfaceModelCenter_1_1IDataCollector_1aa169d7ec12253068db8fac00e201f6a9"></a>
### Function getNumFailedRuns

![][public]

```
long ModelCenter::IDataCollector::getNumFailedRuns()
```



Finds out how many runs failed in the Data Collector.






**Returns**:

The number of failed runs.



**Return type**: long

<a id="interfaceModelCenter_1_1IDataCollector_1a5fac36a5e20d349ab8941387af60a576"></a>
### Function getErrorID

![][public]

```
int ModelCenter::IDataCollector::getErrorID(long run)
```



Gets the error ID for the specified run. If the ID is 0, then the run succeeded.






**Parameters**:

* **run**: Index of the run you want the error ID for (0-based index).


**Returns**:

The error ID.



**Parameters**:

* long **run**

**Return type**: int

<a id="interfaceModelCenter_1_1IDataCollector_1ac93c96f43f475bc237f396b717bc5408"></a>
### Function getErrorMessage

![][public]

```
BSTR ModelCenter::IDataCollector::getErrorMessage(long run)
```



Gets the error message for a specified run.






**Parameters**:

* **run**: Index of the run you want the error ID for (0-based index).


**Returns**:

The error message.



**Parameters**:

* long **run**

**Return type**: BSTR

<a id="interfaceModelCenter_1_1IDataCollector_1abe6a941ef83e86184ba40149f775d3f8"></a>
### Function getNumRuns

![][public]

```
long ModelCenter::IDataCollector::getNumRuns()
```



Finds out how many runs are in the Data Collector.






**Returns**:

The number of runs.



**Return type**: long

<a id="interfaceModelCenter_1_1IDataCollector_1acaa00471b667aa04d3462fa4e26f8d36"></a>
### Function getNumVariables

![][public]

```
long ModelCenter::IDataCollector::getNumVariables()
```



Finds out how many variables are in the Data Collector.






**Returns**:

The number of variables.



**Return type**: long

<a id="interfaceModelCenter_1_1IDataCollector_1aa3502b40206d864d5bebd8cec59c71ed"></a>
### Function getValue

![][public]

```
VARIANT ModelCenter::IDataCollector::getValue(VARIANT index, long run)
```



Gets the value for a variable/run combination.






**Parameters**:

* **index**: Index of the variable location (0-based index).
* **run**: Index of the run (0-based index).


**Returns**:

The value.



**Parameters**:

* VARIANT **index**
* long **run**

**Return type**: VARIANT

<a id="interfaceModelCenter_1_1IDataCollector_1a12a4f4daac61b17022aa54dcbb3ec84e"></a>
### Function getVariableDescription

![][public]

```
IDispatch * ModelCenter::IDataCollector::getVariableDescription(VARIANT index)
```



Gets the description of a variable.






**Parameters**:

* **index**: Index of the variable location (0-based index).


**Returns**:

An IDispatch* to the description of the variable.



**Parameters**:

* VARIANT **index**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IDataCollector_1a2d858bdac93de126a13ced552898b3f9"></a>
### Function isValid

![][public]

```
BOOL ModelCenter::IDataCollector::isValid(VARIANT index, long run)
```



Finds out whether or not a variable/run combination is valid.






**Parameters**:

* **index**: Index of the variable location (0-based index).
* **run**: Index of the run (0-based index).


**Returns**:

yes(TRUE) or no(FALSE).



**Parameters**:

* VARIANT **index**
* long **run**

**Return type**: BOOL

<a id="interfaceModelCenter_1_1IDataCollector_1a7d30505236a3c1c3b804da8f7f924e26"></a>
### Function save

![][public]

```
void ModelCenter::IDataCollector::save(BSTR fileName, BSTR displayName, BSTR description, BSTR author, BOOL saveModel)
```



Saves the data to a .pxt(ModelCenter Trade Study) file.






**Parameters**:

* **fileName**: Path of the .pxt file to be saved.
* **displayName**: Display name of the Trade Study.
* **description**: Description of the Trade Study.
* **author**: Author of the Trade Study.
* **saveModel**: Whether or not to save the Model as part of the Trade Study.



**Parameters**:

* BSTR **fileName**
* BSTR **displayName**
* BSTR **description**
* BSTR **author**
* BOOL **saveModel**

**Return type**: void

<a id="interfaceModelCenter_1_1IDataCollector_1a75c4f95d0b30e6edb92f98e378f7c4be"></a>
### Function exportToCSV

![][public]

```
void ModelCenter::IDataCollector::exportToCSV(BSTR fileName)
```



Saves the Data Collector data as a comma separated list of values.






**Parameters**:

* **fileName**: Path of the .csv file to write.



**Parameters**:

* BSTR **fileName**

**Return type**: void

<a id="interfaceModelCenter_1_1IDataCollector_1af9938e6a1943072ae9e89a19e4461a3f"></a>
### Function toString

![][public]

```
BSTR ModelCenter::IDataCollector::toString()
```



Converts the Data Collector setup and data to a string.






**Returns**:

Converted value of the Data Collector as a string.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IDataCollector_1a42e57bafd047e98fff2902f213c48f61"></a>
### Function fromString

![][public]

```
void ModelCenter::IDataCollector::fromString(BSTR str)
```



Restores the Data Collector data and setup from a string.






**Parameters**:

* **str**: String containing the Data Collector setup.



**Parameters**:

* BSTR **str**

**Return type**: void

<a id="interfaceModelCenter_1_1IDataCollector_1aa0b0a16e2c3c1f600a8435d6dca0c096"></a>
### Function getDataExplorer

![][public]

```
IDispatch * ModelCenter::IDataCollector::getDataExplorer()
```



Returns the ModelCenter 6.0 API style object for the Data Collector (termed the Data Explorer).






**Returns**:

An IDispatch* to a IDataExplorer object.



**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IDataCollector_1a75d77af56d17b13040ea831d957a4cab"></a>
### Function hide

![][public]

```
void ModelCenter::IDataCollector::hide()
```



Hides the Data Collector.



**Return type**: void

## Private functions

<a id="interfaceModelCenter_1_1IDataCollector_1a1e13b83ec71a3274399832bfe3471364"></a>
### Function enableCarpetPlotTab

![][private]

```
void ModelCenter::IDataCollector::enableCarpetPlotTab(BSTR var1, BSTR var2, BSTR plotVar)
```







**Parameters**:

* BSTR **var1**
* BSTR **var2**
* BSTR **plotVar**

**Return type**: void

<a id="interfaceModelCenter_1_1IDataCollector_1a0beef1e5e859c093f079e64792e9ed8e"></a>
### Function storeCustomDesignPoint

![][private]

```
void ModelCenter::IDataCollector::storeCustomDesignPoint(IDispatch *customDesignPoint)
```







**Parameters**:

* IDispatch * **customDesignPoint**

**Return type**: void

<a id="interfaceModelCenter_1_1IDataCollector_1ab152e50d67d452b3f301ea18f732183d"></a>
### Function createEmptyRuns

![][private]

```
void ModelCenter::IDataCollector::createEmptyRuns(long numEmptyRuns)
```







**Parameters**:

* long **numEmptyRuns**

**Return type**: void

<a id="interfaceModelCenter_1_1IDataCollector_1ae0c7fcaf40dc9a73c3818e08fda4c954"></a>
### Function setCustomRun

![][private]

```
void ModelCenter::IDataCollector::setCustomRun(long index, IDispatch *customDesignPoint)
```







**Parameters**:

* long **index**
* IDispatch * **customDesignPoint**

**Return type**: void

<a id="interfaceModelCenter_1_1IDataCollector_1a04f9887e54ecdb60a1f30abbdfbf975b"></a>
### Function newCustomDesignPoint

![][private]

```
IDispatch * ModelCenter::IDataCollector::newCustomDesignPoint()
```







**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IDataCollector_1a11a172f0d359597318448e52fd991843"></a>
### Function enableMainEffectsTab

![][private]

```
void ModelCenter::IDataCollector::enableMainEffectsTab()
```







**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)