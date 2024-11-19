<a id="interfaceModelCenter_1_1IJobManager"></a>
# Interface ModelCenter::IJobManager

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 3598)



Allows you to set up a matrix of runs and runs them in parallel or serial depending on the preferences mode.

## Members

* [addInput](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1ab95c6155dd1c2dbd24441bf3641a5542)
* [addOutput](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1a4591b4c0b98d14307aa691f42547c97e)
* [addRerun](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1a3e06470a8599a950a01c275f75c0d6cb)
* [clearCache](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1a06a3f847d50eb2f10e3b061ea91b453b)
* [enableCache](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1af28b9a4ab0944f31f2d157ab6826999c)
* [getInput](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1ac205f68299271d8e97adbc34f7c33655)
* [getInputLabel](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1a4d6a218d3dfff84908b13db7016a947c)
* [getNumInputs](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1ad8dcd18454e462b191092edd4096ab0c)
* [getNumOutputs](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1a49fae6444ed2747c716f7829f8113969)
* [getNumRuns](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1ae63c0e8eda0494dda49ee20141f11ece)
* [getNumThreads](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1a2a6391025814c8b85861fe9d8eaebf58)
* [getOutput](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1aede4e8c73a70bff3143317d0fa8dca97)
* [getOutputLabel](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1a7665a71ea25ae6436d201cd2e339e976)
* [getRunIndex](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1a03b40110aba59370e9eb6aad1b6b2076)
* [getRunInParallel](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1a8893b7830affcf596e4a6d149ab47753)
* [getValidateAll](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1a53f5cbf8459b20f9c748535d8013eafd)
* [halt](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1aa550897654f63d845e410ac9bda26b8a)
* [resume](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1a1bce7921ac7cedd5712423589b99afb2)
* [setCustomMetadata](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1ad106f381c9834b32c12e169264f1272a)
* [setInput](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1abd6b3fa7a63b620f95141c191cd1c29e)
* [setNumRuns](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1a89e662a1a1c15ed27f8517b5a526b94d)
* [setNumThreads](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1a034974bf844d74af316ef687be4b84f7)
* [setRunInParallel](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1a660d28f5c25a2efbe370cb162bc58f4e)
* [setValidateAll](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1aefca61419c9622f520429f257aa6061c)
* [submit](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1ad1b204f5e684c57b28dc1e3dc733e285)
* [waitForJobCompletion](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1a65bfecf019c1e9c8752fa3c90fd5d3a7)
* [wasHalted](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1a103d78a1bad75512c13080d2467fb11e)

## Properties

<a id="interfaceModelCenter_1_1IJobManager_1a103d78a1bad75512c13080d2467fb11e"></a>
### Property wasHalted

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IJobManager::wasHalted
```







**Return type**: boolean

## Public functions

<a id="interfaceModelCenter_1_1IJobManager_1ab95c6155dd1c2dbd24441bf3641a5542"></a>
### Function addInput

![][public]

```
void ModelCenter::IJobManager::addInput(BSTR name, BSTR label)
```



Adds an input to all runs in the Job Manager.






**Parameters**:

* **name**: Variable name.
* **label**: Variable label.



**Parameters**:

* BSTR **name**
* BSTR **label**

**Return type**: void

<a id="interfaceModelCenter_1_1IJobManager_1abd6b3fa7a63b620f95141c191cd1c29e"></a>
### Function setInput

![][public]

```
void ModelCenter::IJobManager::setInput(long run, BSTR name, BSTR value)
```



Sets the value for a specified input variable for a specified run.






**Parameters**:

* **run**: Index of the run this is to apply to (0-based index).
* **name**: Name of the specified variable.
* **value**: Value for the specified variable to run for this specified run.



**Parameters**:

* long **run**
* BSTR **name**
* BSTR **value**

**Return type**: void

<a id="interfaceModelCenter_1_1IJobManager_1a4591b4c0b98d14307aa691f42547c97e"></a>
### Function addOutput

![][public]

```
void ModelCenter::IJobManager::addOutput(BSTR name, BSTR label)
```



Adds an output to all runs in the Job Manager.






**Parameters**:

* **name**: Variable name.
* **label**: Variable label.



**Parameters**:

* BSTR **name**
* BSTR **label**

**Return type**: void

<a id="interfaceModelCenter_1_1IJobManager_1a53f5cbf8459b20f9c748535d8013eafd"></a>
### Function getValidateAll

![][public]

```
boolean ModelCenter::IJobManager::getValidateAll()
```



Whether or not the Job Manager will validate everything.






**Returns**:

yes(TRUE) or no(FALSE).



**Return type**: boolean

<a id="interfaceModelCenter_1_1IJobManager_1aefca61419c9622f520429f257aa6061c"></a>
### Function setValidateAll

![][public]

```
void ModelCenter::IJobManager::setValidateAll(boolean flag)
```



Sets whether or not the Job Manager will validate everything.






**Parameters**:

* **flag**: yes(TRUE) or no(FALSE).



**Parameters**:

* boolean **flag**

**Return type**: void

<a id="interfaceModelCenter_1_1IJobManager_1ae63c0e8eda0494dda49ee20141f11ece"></a>
### Function getNumRuns

![][public]

```
long ModelCenter::IJobManager::getNumRuns()
```



Gets the number of runs currently in the job matrix.






**Returns**:

The number of runs.



**Return type**: long

<a id="interfaceModelCenter_1_1IJobManager_1a89e662a1a1c15ed27f8517b5a526b94d"></a>
### Function setNumRuns

![][public]

```
void ModelCenter::IJobManager::setNumRuns(long numRuns)
```



Sets the number of runs that will take place in this job matrix.






**Parameters**:

* **numRuns**: Number of runs.



**Parameters**:

* long **numRuns**

**Return type**: void

<a id="interfaceModelCenter_1_1IJobManager_1ad1b204f5e684c57b28dc1e3dc733e285"></a>
### Function submit

![][public]

```
void ModelCenter::IJobManager::submit(IDispatch *dataCollector, [optional]VARIANT description, [optional]VARIANT fireAndForget)
```



Causes the run matrix to begin.






**Parameters**:

* **dataCollector**: IDispatch* to an [IDataCollector](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector) object.
* **description**: The type of trade study to be run.
* **fireAndForget**: Flag for whether fire-n-forget is enabled



**Parameters**:

* IDispatch * **dataCollector**
* _[optional]_ VARIANT **description**
* _[optional]_ VARIANT **fireAndForget**

**Return type**: void

<a id="interfaceModelCenter_1_1IJobManager_1a65bfecf019c1e9c8752fa3c90fd5d3a7"></a>
### Function waitForJobCompletion

![][public]

```
void ModelCenter::IJobManager::waitForJobCompletion()
```



Waits until the current run matrix has completed before continuing.



**Return type**: void

<a id="interfaceModelCenter_1_1IJobManager_1a3e06470a8599a950a01c275f75c0d6cb"></a>
### Function addRerun

![][public]

```
void ModelCenter::IJobManager::addRerun(long run)
```



The job manager may alternately be used to re-run runs out of an existing Data Collector or Data Explorer object. Simply call this function for each run which should be run. When using the Job Manager in this form, do not use addInput, addOutput, setInput or setNumRuns.






**Parameters**:

* **run**: 0 based run number to add to the re-run list.



**Parameters**:

* long **run**

**Return type**: void

<a id="interfaceModelCenter_1_1IJobManager_1aa550897654f63d845e410ac9bda26b8a"></a>
### Function halt

![][public]

```
void ModelCenter::IJobManager::halt(boolean halt)
```



Halt the running job in the Job Manager.






**Parameters**:

* **halt**: Whether to halt the job or not.



**Parameters**:

* boolean **halt**

**Return type**: void

<a id="interfaceModelCenter_1_1IJobManager_1ad8dcd18454e462b191092edd4096ab0c"></a>
### Function getNumInputs

![][public]

```
long ModelCenter::IJobManager::getNumInputs()
```



Retrieve the number of inputs in the job.






**Returns**:

The number of inputs.



**Return type**: long

<a id="interfaceModelCenter_1_1IJobManager_1a49fae6444ed2747c716f7829f8113969"></a>
### Function getNumOutputs

![][public]

```
long ModelCenter::IJobManager::getNumOutputs()
```



Retrieve the number of outputs in the job.






**Returns**:

The number of outputs.



**Return type**: long

<a id="interfaceModelCenter_1_1IJobManager_1ac205f68299271d8e97adbc34f7c33655"></a>
### Function getInput

![][public]

```
BSTR ModelCenter::IJobManager::getInput(long index)
```



Get the specified input.






**Parameters**:

* **index**: The index of the input to fetch.


**Returns**:

The input.



**Parameters**:

* long **index**

**Return type**: BSTR

<a id="interfaceModelCenter_1_1IJobManager_1aede4e8c73a70bff3143317d0fa8dca97"></a>
### Function getOutput

![][public]

```
BSTR ModelCenter::IJobManager::getOutput(long index)
```



Get the specified output.






**Parameters**:

* **index**: The index of the output to fetch.


**Returns**:

The output.



**Parameters**:

* long **index**

**Return type**: BSTR

<a id="interfaceModelCenter_1_1IJobManager_1a4d6a218d3dfff84908b13db7016a947c"></a>
### Function getInputLabel

![][public]

```
BSTR ModelCenter::IJobManager::getInputLabel(long index)
```



Get the label of the specified input.






**Parameters**:

* **index**: The index of the input to fetch.


**Returns**:

The label of the input.



**Parameters**:

* long **index**

**Return type**: BSTR

<a id="interfaceModelCenter_1_1IJobManager_1a7665a71ea25ae6436d201cd2e339e976"></a>
### Function getOutputLabel

![][public]

```
BSTR ModelCenter::IJobManager::getOutputLabel(long index)
```



Get the label of the specified output.






**Parameters**:

* **index**: The index of the output to fetch.


**Returns**:

The label of the output.



**Parameters**:

* long **index**

**Return type**: BSTR

<a id="interfaceModelCenter_1_1IJobManager_1a2a6391025814c8b85861fe9d8eaebf58"></a>
### Function getNumThreads

![][public]

```
long ModelCenter::IJobManager::getNumThreads()
```



Get the number of threads to use when running in parallel.






**Returns**:

The number of threads to use



**Return type**: long

<a id="interfaceModelCenter_1_1IJobManager_1a8893b7830affcf596e4a6d149ab47753"></a>
### Function getRunInParallel

![][public]

```
boolean ModelCenter::IJobManager::getRunInParallel()
```



Determine whether or not to run the job in parallel.






**Returns**:

true if the job is to be ran in parallel false otherwise.



**Return type**: boolean

<a id="interfaceModelCenter_1_1IJobManager_1a034974bf844d74af316ef687be4b84f7"></a>
### Function setNumThreads

![][public]

```
void ModelCenter::IJobManager::setNumThreads(long numThreads)
```



Set the number of threads to use if the job is to be ran in parallel.






**Parameters**:

* **numThreads**: the number of threads to use



**Parameters**:

* long **numThreads**

**Return type**: void

<a id="interfaceModelCenter_1_1IJobManager_1a660d28f5c25a2efbe370cb162bc58f4e"></a>
### Function setRunInParallel

![][public]

```
void ModelCenter::IJobManager::setRunInParallel(boolean runInParallel)
```



Tell the job manager to run the job in parallel.






**Parameters**:

* **runInParallel**: true if the job is to be ran in parallel, false otherwise



**Parameters**:

* boolean **runInParallel**

**Return type**: void

<a id="interfaceModelCenter_1_1IJobManager_1af28b9a4ab0944f31f2d157ab6826999c"></a>
### Function enableCache

![][public]

```
boolean ModelCenter::IJobManager::enableCache(boolean enable)
```



Method to tell the job manager to enable or disable using cache for submitted designs. If you disable the cache, runs may be purged from the cache lookup either immediately or after subsequent runs.






**Parameters**:

* **enable**: true if run values could be get from cache, if false, all submitted runs are to be executed.


**Returns**:

Previous setting.



**Parameters**:

* boolean **enable**

**Return type**: boolean

<a id="interfaceModelCenter_1_1IJobManager_1a06a3f847d50eb2f10e3b061ea91b453b"></a>
### Function clearCache

![][public]

```
void ModelCenter::IJobManager::clearCache()
```



Method to actively clear job manager's internal cache of executed runs.



**Return type**: void

<a id="interfaceModelCenter_1_1IJobManager_1a03b40110aba59370e9eb6aad1b6b2076"></a>
### Function getRunIndex

![][public]

```
long ModelCenter::IJobManager::getRunIndex(VARIANT names, VARIANT values)
```



Method to get Run Index for the given design from cache. Only works if you've been running jobs with the run cache enabled.






**Parameters**:

* **names**: array of variable names for the design
* **values**: array of values corresponding to the names array


**Returns**:

index of design in data explorer if design found else -1 <br/>



**Parameters**:

* VARIANT **names**
* VARIANT **values**

**Return type**: long

<a id="interfaceModelCenter_1_1IJobManager_1a1bce7921ac7cedd5712423589b99afb2"></a>
### Function resume

![][public]

```
void ModelCenter::IJobManager::resume(IDispatch *dataHistory)
```



Pick up from the last checkpoint in a data history. If you subsequently pass a data collector, data explorer, or data history to [submit()](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1ad1b204f5e684c57b28dc1e3dc733e285), you should be sure to pass one with the same data history or all restored runs will be lost. Note: this function merely loads the run cache; it does not actually submit any runs. You must still specify the runs to perform and call [submit()](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager_1ad1b204f5e684c57b28dc1e3dc733e285) in order to continue evaluation. 
**Parameters**:

* **dataHistory**: the Data History to restore from; if null uses the current data history; if non-null this becomes the current data history; you may pass a data explorer or data collector instead



**Parameters**:

* IDispatch * **dataHistory**

**Return type**: void

<a id="interfaceModelCenter_1_1IJobManager_1ad106f381c9834b32c12e169264f1272a"></a>
### Function setCustomMetadata

![][public]

```
void ModelCenter::IJobManager::setCustomMetadata(BSTR name, BSTR key, BSTR value)
```



Add custom metadata to a variable.






**Parameters**:

* **name**: Variable name.
* **key**: the key of the metadata to add
* **value**: the value of the metadata to add.



**Parameters**:

* BSTR **name**
* BSTR **key**
* BSTR **value**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)