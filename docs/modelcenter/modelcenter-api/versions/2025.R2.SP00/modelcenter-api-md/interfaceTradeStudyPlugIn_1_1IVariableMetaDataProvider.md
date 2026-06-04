# Interface TradeStudyPlugIn::IVariableMetaDataProvider

![][IDL]
![][public]

**Definition**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl` (line 311)



Class which provides variable metadata. Since a job manager is not always backed by a model anymore, we can't rely on IModelCenter::getVariable().

## Members

* [getVariableMetaData](interfaceTradeStudyPlugIn_1_1IVariableMetaDataProvider.md#interfaceTradeStudyPlugIn_1_1IVariableMetaDataProvider_1ab17303c17efd43f87d95991b2245bc72)
* [SAFEARRAY](interfaceTradeStudyPlugIn_1_1IVariableMetaDataProvider.md#interfaceTradeStudyPlugIn_1_1IVariableMetaDataProvider_1aa2d00c56cf6df0f49ed49a864e281f45)

## Public functions

<a id="interfaceTradeStudyPlugIn_1_1IVariableMetaDataProvider_1ab17303c17efd43f87d95991b2245bc72"></a>
### Function getVariableMetaData

![][public]

```
LPDISPATCH TradeStudyPlugIn::IVariableMetaDataProvider::getVariableMetaData(BSTR fullName)
```



Get the metadata for a variable. Throws an exception if not found. 
**Parameters**:

* **fullName**: the full name of the variable


**Returns**:

the metadata object (IDHVariable, from DataHistory plugin)



**Parameters**:

* BSTR **fullName**

**Return type**: LPDISPATCH

<a id="interfaceTradeStudyPlugIn_1_1IVariableMetaDataProvider_1aa2d00c56cf6df0f49ed49a864e281f45"></a>
### Function SAFEARRAY

![][public]

```
TradeStudyPlugIn::IVariableMetaDataProvider::SAFEARRAY(IDispatch *) getAllVariableMetaData(BSTR path)
```



Get the metadata for all variables identified by the specified path. 
**Parameters**:

* **path**: the path


**Returns**:

the list of variables (as IDHVariable objects, from DataHistory plugin)



**Parameters**:

* IDispatch *

**Return type**: 

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)