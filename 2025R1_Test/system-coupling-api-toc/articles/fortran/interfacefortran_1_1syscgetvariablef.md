# Interface fortran::syscgetvariablef

![][Fortran]
![][public]

**Definition**: `syscVariableF.fi` (line 44)

Provide an interface to get a System Coupling variable.



## Members

* [syscgetvariablef](interfacefortran_1_1syscgetvariablef.md#interfacefortran_1_1syscgetvariablef_1a608cb70dd0a2392044f91c81fbfd3935)
* [syscgetvariablef\_dtelqd](interfacefortran_1_1syscgetvariablef.md#interfacefortran_1_1syscgetvariablef_1a7ccf1db6c97ad5fbc08fc1a850a48343)
* [syscgetvariablef\_q](interfacefortran_1_1syscgetvariablef.md#interfacefortran_1_1syscgetvariablef_1aa98302cabc43b69aba1ba8e4c4b25b25)
* [syscgetvariablef\_te](interfacefortran_1_1syscgetvariablef.md#interfacefortran_1_1syscgetvariablef_1a500912aab7a473fba9e3b2ef73d0cdc2)
* [syscgetvariablef\_teq](interfacefortran_1_1syscgetvariablef.md#interfacefortran_1_1syscgetvariablef_1a28db29bc33d8fa7aec1ee121dd156485)

## Public functions

<a id="interfacefortran_1_1syscgetvariablef_1a608cb70dd0a2392044f91c81fbfd3935"></a>
### Function syscgetvariablef

![][public]

```fortran
type(syscvariablef) function syscgetvariablef(variableName)
```

Create variable to be used in a coupled analysis.

**Parameters**:

* **variableName**: - Unique name for this variable. String length should not exceed SyscStrLen.

Display name will default to the same as name.





Tensor type will default to scalar.





Is extensive flag will default to false (to non-extensive).





Location will default to nodes.





Quantity type will default to unspecified.






**Returns**:

a SyscVariableF type



**Parameters**:

* variableNamevariableName

**Return type**: type([syscvariablef](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef)) function

<a id="interfacefortran_1_1syscgetvariablef_1a500912aab7a473fba9e3b2ef73d0cdc2"></a>
### Function syscgetvariablef\_te

![][public]

```fortran
type(syscvariablef) function syscgetvariablef_te(variableName, tensorType, isExtensive, location)
```

Create variable to be used in a coupled analysis.

**Parameters**:

* **variableName**: - Unique name for this variable. String length should not exceed SyscStrLen.
* **tensorType**: - variable tensor type.
* **isExtensive**: - flag indicating if it's an extensive property.
* **location**: - variable location (e.g element or node).

Display name will default to the same as name.





Quantity type will default to unspecified.






**Returns**:

a SyscVariableF type



**Parameters**:

* variableNamevariableName
* tensorTypetensorType
* isExtensiveisExtensive
* locationlocation

**Return type**: type([syscvariablef](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef)) function

<a id="interfacefortran_1_1syscgetvariablef_1aa98302cabc43b69aba1ba8e4c4b25b25"></a>
### Function syscgetvariablef\_q

![][public]

```fortran
type(syscvariablef) function syscgetvariablef_q(variableName, displayName, location, quantityType)
```

Create variable to be used in a coupled analysis.

**Parameters**:

* **variableName**: - Unique name for this variable. String length should not exceed SyscStrLen.
* **displayName**: - variable display name. String length should not exceed SyscStrLen.
* **location**: - variable location (e.g element or node).
* **quantityType**: - variable quantity type.

The variable tensor type and is extensive properties will be inferred from the quantity type, according to the following rules:





```fortran
Quantity Type                     Tensor Type      Is Extensive
----------------------------------------------------------------
Force                             Vector           True
Incremental Displacement          Vector           False
Temperature                       Scalar           False
Heat Rate                         Scalar           True
Heat Transfer Coefficient         Scalar           False
Convection Reference Temperature  Scalar           False
```





If any other quantity type is specified, tensor type will be set to scalar and is extensive will be set to false.






**Returns**:

a SyscVariableF type



**Parameters**:

* variableNamevariableName
* displayNamedisplayName
* locationlocation
* quantityTypequantityType

**Return type**: type([syscvariablef](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef)) function

<a id="interfacefortran_1_1syscgetvariablef_1a28db29bc33d8fa7aec1ee121dd156485"></a>
### Function syscgetvariablef\_teq

![][public]

```fortran
type(syscvariablef) function syscgetvariablef_teq(variableName, displayName, tensorType, isExtensive, location, quantityType)
```

Create variable to be used in a coupled analysis.

**Parameters**:

* **variableName**: - Unique name for this variable. String length should not exceed SyscStrLen.
* **displayName**: - variable display name. String length should not exceed SyscStrLen.
* **tensorType**: - variable tensor type.
* **isExtensive**: - flag indicating if it's an extensive property.
* **location**: - variable location (e.g element or node).
* **quantityType**: - variable quantity type.


**Returns**:

a SyscVariableF type



**Parameters**:

* variableNamevariableName
* displayNamedisplayName
* tensorTypetensorType
* isExtensiveisExtensive
* locationlocation
* quantityTypequantityType

**Return type**: type([syscvariablef](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef)) function

<a id="interfacefortran_1_1syscgetvariablef_1a7ccf1db6c97ad5fbc08fc1a850a48343"></a>
### Function syscgetvariablef\_dtelqd

![][public]

```fortran
type(syscvariablef) function syscgetvariablef_dtelqd(variableName, displayName, tensorType, isExtensive, location, quantityType, dataType)
```

Create variable to be used in a coupled analysis.

**Parameters**:

* **variableName**: - Unique name for this variable. String length should not exceed SyscStrLen.
* **displayName**: - variable display name. String length should not exceed SyscStrLen.
* **tensorType**: - variable tensor type.
* **isExtensive**: - flag indicating if it's an extensive property.
* **location**: - variable location (e.g element or node).
* **quantityType**: - variable quantity type.
* **dataType**: - variable data type.


**Returns**:

a SyscVariableF type



**Parameters**:

* variableNamevariableName
* displayNamedisplayName
* tensorTypetensorType
* isExtensiveisExtensive
* locationlocation
* quantityTypequantityType
* dataTypedataType

**Return type**: type([syscvariablef](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)