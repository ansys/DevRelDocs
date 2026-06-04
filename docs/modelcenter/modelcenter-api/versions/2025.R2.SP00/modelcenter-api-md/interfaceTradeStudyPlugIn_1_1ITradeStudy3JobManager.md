# Interface TradeStudyPlugIn::ITradeStudy3JobManager

![][IDL]
![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 342)

Class which does everything that a combination of a DataHistory and a JobManager can do. Can be implemented using the inputs to a normal construct(...) call, but can do something else entirely. Thread-safe.



## Members

* [addVariable](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a44f6cc3111c89abd357dfcfeed23cf4a)
* [canNewJob](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a0736cdac1a4c8573ec1332477849458b)
* [clear](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1aeb34f0cf410ef02f4eee10d611b4a740)
* [dataHistory](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1aec4a15702e1f9565f7564914cfef534a)
* [getMetaDataProvider](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a2f8bcf1cea9355a81d408919e479013f)
* [getVariableDisplayName](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a6fbac6e4218e6b82ed61d2f38f9b7af6)
* [getVariableEquation](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1ae152b41da461434289f61a5f4c327fb6)
* [isDesignVariable](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1aa53ea93d24fd4476de06e3226a5b2e69)
* [isInput](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a4f1199571453c7b851c484e88fb43a1a)
* [newJob](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a49263a87ff0aacb9e2231bbe0e726d1a)
* [numRuns](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1ac665a3e053e07b9bf007c5b798af743e)
* [numThreads](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a2b92bb066c911d4102902525a3feae5f)
* [numVariables](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1aafb31c9ee4a9e013e3f7f77900217492)
* [runInParallel](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a1e97168b7c275486400eaaf14e9a88d2)
* [runJobAsync](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a7cdc64aa2ca295ed608347a61e79b8ac)
* [setInput](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a44b3d2bd5e6037197449aaa92c6fd725)
* [setRunInputs](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a2d73e6a448ba816d2f4025d5f95b285e)
* [setVariableInputs](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a5f77ca1741019e90b1d348a7b4c20b04)
* [supportsParallelExecution](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1afc7560080c238a34ac8d339d80175327)
* [validateAll](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a913715f9bb137763d7b099cfe8bd9b57)

## Properties

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1aec4a15702e1f9565f7564914cfef534a"></a>
### Property dataHistory

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 1)

```
LPDISPATCH TradeStudyPlugIn::ITradeStudy3JobManager::dataHistory
```

Get or set the data history to use; one may be created if you don't specify it.





**Return type**: LPDISPATCH

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a913715f9bb137763d7b099cfe8bd9b57"></a>
### Property validateAll

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 1)

```
boolean TradeStudyPlugIn::ITradeStudy3JobManager::validateAll
```

Hint on whether to force all outputs in the model to evaluate regardless of whether it would be necessary to get the responses/outputs that have been requested. Default: false.





**Return type**: boolean

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a1e97168b7c275486400eaaf14e9a88d2"></a>
### Property runInParallel

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 1)

```
boolean TradeStudyPlugIn::ITradeStudy3JobManager::runInParallel
```

Whether to run runs in parallel. May be ignored.





**Return type**: boolean

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a2b92bb066c911d4102902525a3feae5f"></a>
### Property numThreads

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 1)

```
long TradeStudyPlugIn::ITradeStudy3JobManager::numThreads
```

The number of threads or instances to use for parallel execution. May be ignored.





**Return type**: long

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1ac665a3e053e07b9bf007c5b798af743e"></a>
### Property numRuns

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 376)

```
TradeStudyPlugIn::ITradeStudy3JobManager::numRuns
```

Get the number of runs.





**Return type**: 

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1aafb31c9ee4a9e013e3f7f77900217492"></a>
### Property numVariables

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 381)

```
TradeStudyPlugIn::ITradeStudy3JobManager::numVariables
```

Get the number of inputs.





**Return type**: 

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1afc7560080c238a34ac8d339d80175327"></a>
### Property supportsParallelExecution

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 413)

```
TradeStudyPlugIn::ITradeStudy3JobManager::supportsParallelExecution
```

Can this job manager support parallel execution? If false, <code>runInParallel</code> and <code>numThreads</code> are ignored.





**Return type**: 

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a0736cdac1a4c8573ec1332477849458b"></a>
### Property canNewJob

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 418)

```
TradeStudyPlugIn::ITradeStudy3JobManager::canNewJob
```

Can a new job be started now?





**Return type**: 

## Public functions

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1ae152b41da461434289f61a5f4c327fb6"></a>
### Function getVariableEquation

![][public]

```
BSTR TradeStudyPlugIn::ITradeStudy3JobManager::getVariableEquation(long index)
```

Get the equation for the variable at the specified index.

**Parameters**:

* **index**: The index.


**Returns**:

The equation.



**Parameters**:

* long **index**

**Return type**: BSTR

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a6fbac6e4218e6b82ed61d2f38f9b7af6"></a>
### Function getVariableDisplayName

![][public]

```
BSTR TradeStudyPlugIn::ITradeStudy3JobManager::getVariableDisplayName(long index)
```

Get the unique display name of a variable.

**Parameters**:

* **index**: The index.


**Returns**:

The display name.



**Parameters**:

* long **index**

**Return type**: BSTR

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1aa53ea93d24fd4476de06e3226a5b2e69"></a>
### Function isDesignVariable

![][public]

```
boolean TradeStudyPlugIn::ITradeStudy3JobManager::isDesignVariable(VARIANT which)
```

Get the type associated with the specified variable.

**Parameters**:

* **which**: The name or index of the variable.


**Returns**:

The variable type.



**Parameters**:

* VARIANT **which**

**Return type**: boolean

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a4f1199571453c7b851c484e88fb43a1a"></a>
### Function isInput

![][public]

```
boolean TradeStudyPlugIn::ITradeStudy3JobManager::isInput(VARIANT which)
```

Get the type associated with the specified variable.

**Parameters**:

* **which**: The name or index of the variable.


**Returns**:

The variable type.



**Parameters**:

* VARIANT **which**

**Return type**: boolean

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a49263a87ff0aacb9e2231bbe0e726d1a"></a>
### Function newJob

![][public]

```
void TradeStudyPlugIn::ITradeStudy3JobManager::newJob(long numRuns)
```

Start a new job. Discards existing data and run info. Does not clear out variables. Note: whether you can start a new job while one is running depends on implementation.

**Parameters**:

* **numRuns**: The number of runs to execute.


**Exceptions**:

* **InvalidOperationException**: If a job is running but the current implementation does not support concurrent jobs.



**Parameters**:

* long **numRuns**

**Return type**: void

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1aeb34f0cf410ef02f4eee10d611b4a740"></a>
### Function clear

![][public]

```
void TradeStudyPlugIn::ITradeStudy3JobManager::clear()
```

Clear out the current job and all variables.





**Return type**: void

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a44f6cc3111c89abd357dfcfeed23cf4a"></a>
### Function addVariable

![][public]

```
void TradeStudyPlugIn::ITradeStudy3JobManager::addVariable(BSTR equation, BSTR displayName, boolean isInput)
```

Add a variable.

**Parameters**:

* **equation**: The equation of the variable.
* **displayName**: The display name to use for the value.
* **isInput**: Whether the variable is an input.



**Parameters**:

* BSTR **equation**
* BSTR **displayName**
* boolean **isInput**

**Return type**: void

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a44b3d2bd5e6037197449aaa92c6fd725"></a>
### Function setInput

![][public]

```
void TradeStudyPlugIn::ITradeStudy3JobManager::setInput(long runIndex, VARIANT which, VARIANT value)
```

Set an input value.

**Parameters**:

* **runIndex**: The index of the run.
* **which**: The name or index of the variable.
* **value**: The value to set (in native format; do not convert to string)



**Parameters**:

* long **runIndex**
* VARIANT **which**
* VARIANT **value**

**Return type**: void

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a2d73e6a448ba816d2f4025d5f95b285e"></a>
### Function setRunInputs

![][public]

```
void TradeStudyPlugIn::ITradeStudy3JobManager::setRunInputs(long runIndex, SAFEARRAY(VARIANT) values, [optional] SAFEARRAY(VARIANT) which)
```

Set all of the inputs for a run.

**Parameters**:

* **runIndex**: The index of the run.
* **values**: The values, which must have the same number of elements as
* **which**: The indices or names of the variables to set, omit for all



**Parameters**:

* long **runIndex**
* SAFEARRAY(VARIANT) **values**
* _[optional]_ SAFEARRAY(VARIANT) **which**

**Return type**: void

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a5f77ca1741019e90b1d348a7b4c20b04"></a>
### Function setVariableInputs

![][public]

```
void TradeStudyPlugIn::ITradeStudy3JobManager::setVariableInputs(VARIANT which, SAFEARRAY(VARIANT) values, [optional] SAFEARRAY(long) runIndices)
```

Set all of the inputs for one variable.

**Parameters**:

* **which**: Which variable (index or name).
* **values**: The values to set.
* **runIndices**: The runs to set values for; if null/empty, assume all.



**Parameters**:

* VARIANT **which**
* SAFEARRAY(VARIANT) **values**
* _[optional]_ SAFEARRAY(long) **runIndices**

**Return type**: void

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a7cdc64aa2ca295ed608347a61e79b8ac"></a>
### Function runJobAsync

![][public]

```
ITradeStudy3JobResult * TradeStudyPlugIn::ITradeStudy3JobManager::runJobAsync()
```

Execute the job.

**Returns**:

The result of the job, which will be populated in real-time.



**Return type**: [ITradeStudy3JobResult](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult) *

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager_1a2f8bcf1cea9355a81d408919e479013f"></a>
### Function getMetaDataProvider

![][public]

```
IVariableMetaDataProvider * TradeStudyPlugIn::ITradeStudy3JobManager::getMetaDataProvider()
```

Get the metadata provider for this job manager.





**Return type**: [IVariableMetaDataProvider](interfaceTradeStudyPlugIn_1_1IVariableMetaDataProvider.md#interfaceTradeStudyPlugIn_1_1IVariableMetaDataProvider) *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)