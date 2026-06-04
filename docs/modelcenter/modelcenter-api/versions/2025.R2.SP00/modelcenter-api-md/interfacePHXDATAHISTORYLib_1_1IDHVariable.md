# Interface PHXDATAHISTORYLib::IDHVariable

![][IDL]
![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1020)



An object which represents a single Variable's meta-data within the Data History.

## Members

* [copyFrom](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1ae9e54933d6dd82e4d4aa5991b58b6ee3)
* [enumAliases](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1af3b9b49e293ed90e0e36ac8cd64a1d5d)
* [enumValues](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1ac0461a8fca66f784a7f1a66b77c952e7)
* [equation](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1a3901f5a0e0dba161b1746d3869d83807)
* [fileName](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1a441ac734f55bcc3351b2e475524bd890)
* [format](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1aee5d1b31138b410b58410abbc82cf441)
* [geomScript](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1a1fa79813f4fadc3f9f668aa5d433c431)
* [getEnumAlias](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1a5c03822c2d28cde3b9d0fdf4f335a594)
* [getEnumValue](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1ad6bfcac769bd40c96db19848232fad3f)
* [getMetaData](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1a5c33238aa348f88bd3a7c66cde890631)
* [getNumEnumAliases](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1ac865d961f3e4aa6fdb21c65f4960e7ee)
* [getNumEnumValues](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1a5f133f6ecf8e21010e1a624221f78d5b)
* [isBinary](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1a18d61da08976eabab25b4049726415a5)
* [isDesignVar](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1a6429c927c6b4f5937ed8f046ebb618dc)
* [isInput](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1a36394ba4430c4f15bd18a02a96ff9c00)
* [isNumeric](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1a72127ffab32587ffbec60628e70df2fc)
* [lowerBound](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1a559e14d8841091219ceb4c121ab8d1fb)
* [name](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1aecd9b3210d5ef87459cb8a9830bb0f94)
* [removeMetadata](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1a7bd9389ff771d6b63aa3643c961e7223)
* [SAFEARRAY](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1a34d198c9ed66b975c39ed058511a3181)
* [setMetaData](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1a9479fcb9ffceb4360b99be62d77eabad)
* [type](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1ad46181f350249f42a737877eb3ce6c97)
* [units](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1aff5fbd1ebbbe6b3d4bd7ce114a09f40e)
* [upperBound](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1a5e7eff43bb2a4ca6eed5cd8e95b0e182)

## Properties

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1aecd9b3210d5ef87459cb8a9830bb0f94"></a>
### Property name

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1)

```
BSTR PHXDATAHISTORYLib::IDHVariable::name
```



The Variable name. May be a long, human readable string for Design Variables.



**Return type**: BSTR

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1a3901f5a0e0dba161b1746d3869d83807"></a>
### Property equation

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1)

```
BSTR PHXDATAHISTORYLib::IDHVariable::equation
```



The equation for this Variable. This is typically only set for Design Variables and can be an actual equation of multiple Variables.



**Return type**: BSTR

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1a6429c927c6b4f5937ed8f046ebb618dc"></a>
### Property isDesignVar

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1)

```
boolean PHXDATAHISTORYLib::IDHVariable::isDesignVar
```



Whether this Variable represents one of the Design Variables for the Trade Study that was run.



**Return type**: boolean

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1a72127ffab32587ffbec60628e70df2fc"></a>
### Property isNumeric

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1)

```
boolean PHXDATAHISTORYLib::IDHVariable::isNumeric
```



Whether this Variable is numeric.



**Return type**: boolean

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1a36394ba4430c4f15bd18a02a96ff9c00"></a>
### Property isInput

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1)

```
boolean PHXDATAHISTORYLib::IDHVariable::isInput
```



Whether this Variable is an input (can be set in ModelCenter). Input Variables with links to them become outputs (cannot be set).



**Return type**: boolean

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1aee5d1b31138b410b58410abbc82cf441"></a>
### Property format

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1)

```
BSTR PHXDATAHISTORYLib::IDHVariable::format
```



The print format for this Variable.



**Return type**: BSTR

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1ac0461a8fca66f784a7f1a66b77c952e7"></a>
### Property enumValues

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1)

```
BSTR PHXDATAHISTORYLib::IDHVariable::enumValues
```



The enumerated values for this Variable. String is a comma separated list which may optionally include double quotes around each element.



**Return type**: BSTR

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1af3b9b49e293ed90e0e36ac8cd64a1d5d"></a>
### Property enumAliases

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1)

```
BSTR PHXDATAHISTORYLib::IDHVariable::enumAliases
```



The enumerated aliases for this Variable. String is a comma separated list which may optionally include double quotes around each element.



**Return type**: BSTR

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1a559e14d8841091219ceb4c121ab8d1fb"></a>
### Property lowerBound

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1)

```
VARIANT PHXDATAHISTORYLib::IDHVariable::lowerBound
```



The lower bound for this Variable.



**Return type**: VARIANT

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1a5e7eff43bb2a4ca6eed5cd8e95b0e182"></a>
### Property upperBound

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1)

```
VARIANT PHXDATAHISTORYLib::IDHVariable::upperBound
```



The upper bound of this Variable.



**Return type**: VARIANT

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1ad46181f350249f42a737877eb3ce6c97"></a>
### Property type

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1)

```
BSTR PHXDATAHISTORYLib::IDHVariable::type
```



The type of Variable.



**Return type**: BSTR

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1aff5fbd1ebbbe6b3d4bd7ce114a09f40e"></a>
### Property units

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1)

```
BSTR PHXDATAHISTORYLib::IDHVariable::units
```



The units for this Variable.



**Return type**: BSTR

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1a1fa79813f4fadc3f9f668aa5d433c431"></a>
### Property geomScript

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1)

```
BSTR PHXDATAHISTORYLib::IDHVariable::geomScript
```



For a Geometry File Variable, the geometry script associated with the Variable.



**Return type**: BSTR

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1a18d61da08976eabab25b4049726415a5"></a>
### Property isBinary

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1)

```
boolean PHXDATAHISTORYLib::IDHVariable::isBinary
```



Whether this Variable, if it is a File Variable, represents a binary file.



**Return type**: boolean

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1a441ac734f55bcc3351b2e475524bd890"></a>
### Property fileName

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1)

```
BSTR PHXDATAHISTORYLib::IDHVariable::fileName
```



For a File Variable, the name of the file that this File Variable points to.



**Return type**: BSTR

## Public functions

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1a5f133f6ecf8e21010e1a624221f78d5b"></a>
### Function getNumEnumValues

![][public]

```
long PHXDATAHISTORYLib::IDHVariable::getNumEnumValues()
```



Gets the number of enumerated values for this Variable. 
**Returns**:

The number of enumerated values for this variable.



**Return type**: long

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1ad6bfcac769bd40c96db19848232fad3f"></a>
### Function getEnumValue

![][public]

```
BSTR PHXDATAHISTORYLib::IDHVariable::getEnumValue(long index)
```



Returns a particular enumerated value. It is preferred that you use this method as opposed to parsing the [enumValues](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1ac0461a8fca66f784a7f1a66b77c952e7) property yourself so that all tools will use the same logic for parsing.






**Parameters**:

* **index**: The 0 based index of the enumerated value to get.


**Returns**:

The enumerated value.



**Parameters**:

* long **index**

**Return type**: BSTR

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1a5c03822c2d28cde3b9d0fdf4f335a594"></a>
### Function getEnumAlias

![][public]

```
BSTR PHXDATAHISTORYLib::IDHVariable::getEnumAlias(long index)
```



Returns a particular enumerated alias. It is preferred that you use this method as opposed to parsing the [enumAliases](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable_1af3b9b49e293ed90e0e36ac8cd64a1d5d) property yourself so that all tools will use the same logic for parsing.






**Parameters**:

* **index**: The 0 based index of the enumerated alias to get.


**Returns**:

The particular enumerated alias. <br/>



**Parameters**:

* long **index**

**Return type**: BSTR

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1ac865d961f3e4aa6fdb21c65f4960e7ee"></a>
### Function getNumEnumAliases

![][public]

```
long PHXDATAHISTORYLib::IDHVariable::getNumEnumAliases()
```



Gets the number of enumerated aliases for this Variable. 
**Returns**:

The number of enumerated aliases.



**Return type**: long

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1a9479fcb9ffceb4360b99be62d77eabad"></a>
### Function setMetaData

![][public]

```
void PHXDATAHISTORYLib::IDHVariable::setMetaData(BSTR key, BSTR value)
```



Sets the meta data value of the given meta data key name. It updates the value if the key already exists. 
**Parameters**:

* **key**: The name of the key.
* **value**: The new value for the meta data.



**Parameters**:

* BSTR **key**
* BSTR **value**

**Return type**: void

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1a5c33238aa348f88bd3a7c66cde890631"></a>
### Function getMetaData

![][public]

```
BSTR PHXDATAHISTORYLib::IDHVariable::getMetaData(BSTR key)
```



Gets the meta data value of the given meta data key name. 
**Parameters**:

* **key**: The name of the key.


**Returns**:

The value of the meta data of the key name.



**Parameters**:

* BSTR **key**

**Return type**: BSTR

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1a34d198c9ed66b975c39ed058511a3181"></a>
### Function SAFEARRAY

![][public]

```
PHXDATAHISTORYLib::IDHVariable::SAFEARRAY(BSTR) getMetaDataKeys()
```



Gets a list of metadata keys stored in this variable.



**Parameters**:

* BSTR

**Return type**: 

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1ae9e54933d6dd82e4d4aa5991b58b6ee3"></a>
### Function copyFrom

![][public]

```
void PHXDATAHISTORYLib::IDHVariable::copyFrom(LPDISPATCH other)
```



Copies data from another [IDHVariable](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable).



**Parameters**:

* LPDISPATCH **other**

**Return type**: void

<a id="interfacePHXDATAHISTORYLib_1_1IDHVariable_1a7bd9389ff771d6b63aa3643c961e7223"></a>
### Function removeMetadata

![][public]

```
void PHXDATAHISTORYLib::IDHVariable::removeMetadata(BSTR key)
```



Removes the meta data value of the given meta data key name. 
**Parameters**:

* **key**: The name of the key to remove



**Parameters**:

* BSTR **key**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)