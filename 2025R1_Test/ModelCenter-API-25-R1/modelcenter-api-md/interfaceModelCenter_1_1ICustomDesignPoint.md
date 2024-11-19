<a id="interfaceModelCenter_1_1ICustomDesignPoint"></a>
# Interface ModelCenter::ICustomDesignPoint

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1492)



COM Instance.

## Members

* [addVariable](interfaceModelCenter_1_1ICustomDesignPoint.md#interfaceModelCenter_1_1ICustomDesignPoint_1a3c20c3bc3fa7ae5fb36154448d3ae13d)
* [runFailed](interfaceModelCenter_1_1ICustomDesignPoint.md#interfaceModelCenter_1_1ICustomDesignPoint_1a7c8bc37e4f17ff29cc066d8e9645d9dd)

## Public functions

<a id="interfaceModelCenter_1_1ICustomDesignPoint_1a3c20c3bc3fa7ae5fb36154448d3ae13d"></a>
### Function addVariable

![][public]

```
void ModelCenter::ICustomDesignPoint::addVariable(BSTR name, BSTR equation, BOOL isNumeric, BOOL isValid, BOOL isInput, BSTR type, BSTR units, BSTR value)
```



Adds a variable to the custom design point.






**Parameters**:

* **name**: The Data Collector name of the variable (can be anything).
* **equation**: The equation (usually the full ModelCenter variable name).
* **isNumeric**: Whether or not the variable is numeric.
* **isValid**: Whether or not the variable is valid for this run.
* **isInput**: Whether or not this variable is an input.
* **type**: The variable's type, i.e. "double".
* **units**: The units of the variable.
* **value**: The value of the variable for this run.



**Parameters**:

* BSTR **name**
* BSTR **equation**
* BOOL **isNumeric**
* BOOL **isValid**
* BOOL **isInput**
* BSTR **type**
* BSTR **units**
* BSTR **value**

**Return type**: void

<a id="interfaceModelCenter_1_1ICustomDesignPoint_1a7c8bc37e4f17ff29cc066d8e9645d9dd"></a>
### Function runFailed

![][public]

```
void ModelCenter::ICustomDesignPoint::runFailed(BSTR reason)
```



Tells the Data Collector that this run failed.






**Parameters**:

* **reason**: The reason the run failed.



**Parameters**:

* BSTR **reason**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)