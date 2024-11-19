<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo"></a>
# Interface TradeStudyPlugIn::ITradeStudy3JobInfo

![][IDL]
![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 193)





## Members

* [getVariableDisplayName](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo_1a6e0f4277d79e93bd5d08fa7e548394a0)
* [getVariableEquation](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo_1aed1386a6f6cef8c6c4ec1d94b3d07009)
* [isDesignVariable](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo_1abbcbe48e293004c4cd609b574ecf94fa)
* [isInput](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo_1a02ddc66a224fd3c8fe04ec8ec60959e5)
* [numRuns](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo_1a27982338f106af2e2b89a29c66c2d8f1)
* [numVariables](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo_1ae684750b56d166406294cfc78bda83b3)

## Properties

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo_1a27982338f106af2e2b89a29c66c2d8f1"></a>
### Property numRuns

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 201)

```
TradeStudyPlugIn::ITradeStudy3JobInfo::numRuns
```

Get the number of runs.





**Return type**: 

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo_1ae684750b56d166406294cfc78bda83b3"></a>
### Property numVariables

![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 206)

```
TradeStudyPlugIn::ITradeStudy3JobInfo::numVariables
```

Get the number of inputs.





**Return type**: 

## Public functions

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo_1aed1386a6f6cef8c6c4ec1d94b3d07009"></a>
### Function getVariableEquation

![][public]

```
BSTR TradeStudyPlugIn::ITradeStudy3JobInfo::getVariableEquation(long index)
```

Get the equation for the variable at the specified index.

**Parameters**:

* **index**: The index.


**Returns**:

The equation.



**Parameters**:

* long **index**

**Return type**: BSTR

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo_1a6e0f4277d79e93bd5d08fa7e548394a0"></a>
### Function getVariableDisplayName

![][public]

```
BSTR TradeStudyPlugIn::ITradeStudy3JobInfo::getVariableDisplayName(long index)
```

Get the unique display name of a variable.

**Parameters**:

* **index**: The index.


**Returns**:

The display name.



**Parameters**:

* long **index**

**Return type**: BSTR

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo_1abbcbe48e293004c4cd609b574ecf94fa"></a>
### Function isDesignVariable

![][public]

```
boolean TradeStudyPlugIn::ITradeStudy3JobInfo::isDesignVariable(VARIANT which)
```

Get the type associated with the specified variable.

**Parameters**:

* **which**: The name or index of the variable.


**Returns**:

The variable type.



**Parameters**:

* VARIANT **which**

**Return type**: boolean

<a id="interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo_1a02ddc66a224fd3c8fe04ec8ec60959e5"></a>
### Function isInput

![][public]

```
boolean TradeStudyPlugIn::ITradeStudy3JobInfo::isInput(VARIANT which)
```

Get the type associated with the specified variable.

**Parameters**:

* **which**: The name or index of the variable.


**Returns**:

The variable type.



**Parameters**:

* VARIANT **which**

**Return type**: boolean

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)