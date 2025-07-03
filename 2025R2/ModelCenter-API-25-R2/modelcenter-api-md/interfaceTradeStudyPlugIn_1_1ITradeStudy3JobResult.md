# Interface TradeStudyPlugIn::ITradeStudy3JobResult

![][IDL]
![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 240)

Interface representing the results of running a job. May be backed internally by a PHXDataCollector, or not.



## Members

* [cancelAsync](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1aa5d136ea9f5d9dce819e2c6414f1febe)
* [dataHistory](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1a5889d5d7712934aa30c0983452c875bb)
* [getVariableDisplayName](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1a84850e887d89eb20d7793933316ad752)
* [getVariableEquation](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1ad63d367bc060e84ccd0edc96747bd082)
* [isCanceled](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1a2248d0fcfa9dbf3b0de48e5b75ff4df5)
* [isDesignVariable](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1ac933f79559b7a0cf45fe49a6cb1e77d0)
* [isInput](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1a01b2afba0cae246a236a56555ffd3e05)
* [isRunning](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1a56114078a1e476ce5e5ec70314f6fb73)
* [numRuns](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1ae5299ad977b8ef2294350733bdff6912)
* [numVariables](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1a3d8795dd3559fce3f610e63872b8808b)
* [waitForCompletion](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1ad76c0b31771a31a827235d0306529ebc)

## Properties

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1ae5299ad977b8ef2294350733bdff6912"></a>
### Property numRuns

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 249)

```
TradeStudyPlugIn::ITradeStudy3JobResult::numRuns
```

Get the number of runs.





**Return type**: 

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1a3d8795dd3559fce3f610e63872b8808b"></a>
### Property numVariables

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 254)

```
TradeStudyPlugIn::ITradeStudy3JobResult::numVariables
```

Get the number of inputs.





**Return type**: 

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1a5889d5d7712934aa30c0983452c875bb"></a>
### Property dataHistory

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 285)

```
TradeStudyPlugIn::ITradeStudy3JobResult::dataHistory
```

Get the data history associated with this job result, if any.





**Return type**: 

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1a56114078a1e476ce5e5ec70314f6fb73"></a>
### Property isRunning

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 289)

```
TradeStudyPlugIn::ITradeStudy3JobResult::isRunning
```

Is the current job still running.





**Return type**: 

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1a2248d0fcfa9dbf3b0de48e5b75ff4df5"></a>
### Property isCanceled

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 293)

```
TradeStudyPlugIn::ITradeStudy3JobResult::isCanceled
```

Was the current job canceled?





**Return type**: 

## Public functions

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1ad63d367bc060e84ccd0edc96747bd082"></a>
### Function getVariableEquation

![][public]

```
BSTR TradeStudyPlugIn::ITradeStudy3JobResult::getVariableEquation(long index)
```

Get the equation for the variable at the specified index.

**Parameters**:

* **index**: The index.


**Returns**:

The equation.



**Parameters**:

* long **index**

**Return type**: BSTR

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1a84850e887d89eb20d7793933316ad752"></a>
### Function getVariableDisplayName

![][public]

```
BSTR TradeStudyPlugIn::ITradeStudy3JobResult::getVariableDisplayName(long index)
```

Get the unique display name of a variable.

**Parameters**:

* **index**: The index.


**Returns**:

The display name.



**Parameters**:

* long **index**

**Return type**: BSTR

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1ac933f79559b7a0cf45fe49a6cb1e77d0"></a>
### Function isDesignVariable

![][public]

```
boolean TradeStudyPlugIn::ITradeStudy3JobResult::isDesignVariable(VARIANT which)
```

Get the type associated with the specified variable.

**Parameters**:

* **which**: The name or index of the variable.


**Returns**:

The variable type.



**Parameters**:

* VARIANT **which**

**Return type**: boolean

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1a01b2afba0cae246a236a56555ffd3e05"></a>
### Function isInput

![][public]

```
boolean TradeStudyPlugIn::ITradeStudy3JobResult::isInput(VARIANT which)
```

Get the type associated with the specified variable.

**Parameters**:

* **which**: The name or index of the variable.


**Returns**:

The variable type.



**Parameters**:

* VARIANT **which**

**Return type**: boolean

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1aa5d136ea9f5d9dce819e2c6414f1febe"></a>
### Function cancelAsync

![][public]

```
void TradeStudyPlugIn::ITradeStudy3JobResult::cancelAsync()
```

Halt the current job asynchronously.





**Return type**: void

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult_1ad76c0b31771a31a827235d0306529ebc"></a>
### Function waitForCompletion

![][public]

```
void TradeStudyPlugIn::ITradeStudy3JobResult::waitForCompletion()
```

Wait for the trade study to finish.

**Exceptions**:

* **OperationCanceledException**: If the operation was halted.



**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)