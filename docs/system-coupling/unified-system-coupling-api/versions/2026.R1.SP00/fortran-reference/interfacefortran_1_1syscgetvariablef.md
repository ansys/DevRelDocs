# Interface fortran::syscgetvariablef

![][Fortran]
![][public]

**Definition**: `syscVariableF.fi` (line 44)

Provide an interface to get a System Coupling variable.



## Members

* [syscgetvariablef](interfacefortran_1_1syscgetvariablef.md#interfacefortran_1_1syscgetvariablef_1a8dd21e666858e69c69343a8a1145ceeb)
* [syscgetvariablef\_dtelqd](interfacefortran_1_1syscgetvariablef.md#interfacefortran_1_1syscgetvariablef_1ad77ffe80eaeed67dcb5c207189543a80)
* [syscgetvariablef\_q](interfacefortran_1_1syscgetvariablef.md#interfacefortran_1_1syscgetvariablef_1a0665e5454c9b7df4205539b6c07476e4)
* [syscgetvariablef\_te](interfacefortran_1_1syscgetvariablef.md#interfacefortran_1_1syscgetvariablef_1a889fefd03b86f60b08c74a5a28475cf2)
* [syscgetvariablef\_teq](interfacefortran_1_1syscgetvariablef.md#interfacefortran_1_1syscgetvariablef_1ae20d858d6873e2c82a6bd385c0f08a13)

## Public functions

<a id="interfacefortran_1_1syscgetvariablef_1a8dd21e666858e69c69343a8a1145ceeb"></a>
### Function syscgetvariablef

![][public]


```fortran
type(syscvariablef) function syscgetvariablef(variablename)
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

* variablenamecharacter(len=*), intent(in)

**Return type**: type([syscvariablef](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef)) function

<a id="interfacefortran_1_1syscgetvariablef_1a889fefd03b86f60b08c74a5a28475cf2"></a>
### Function syscgetvariablef\_te

![][public]


```fortran
type(syscvariablef) function syscgetvariablef_te(variablename, tensortype, isextensive, location)
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

* variablenamecharacter(len=*), intent(in)
* tensortypeinteger(kind=4), intent(in)
* isextensivelogical, intent(in)
* locationinteger(kind=4), intent(in)

**Return type**: type([syscvariablef](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef)) function

<a id="interfacefortran_1_1syscgetvariablef_1a0665e5454c9b7df4205539b6c07476e4"></a>
### Function syscgetvariablef\_q

![][public]


```fortran
type(syscvariablef) function syscgetvariablef_q(variablename, displayname, location, quantitytype)
```


Create variable to be used in a coupled analysis.

**Parameters**:

* **variableName**: - Unique name for this variable. String length should not exceed SyscStrLen.
* **displayName**: - variable display name. String length should not exceed SyscStrLen.
* **location**: - variable location (e.g element or node).
* **quantityType**: - variable quantity type.

The variable tensor type and is extensive properties will be inferred from the quantity type, according to the following rules:






```fortran
quantity Type                     tensor Type      Is extensive
----------------------------------------------------------------
force                             vector           true
incremental displacement          vector           false
temperature                       scalar           false
heat rate                         scalar           true
heat transfer coefficient         scalar           false
convection reference temperature  scalar           false
```






If any other quantity type is specified, tensor type will be set to scalar and is extensive will be set to false.






**Returns**:

a SyscVariableF type



**Parameters**:

* variablenamecharacter(len=*), intent(in)
* displaynamecharacter(len=*), intent(in)
* locationinteger(kind=4), intent(in)
* quantitytypeinteger(kind=4), intent(in)

**Return type**: type([syscvariablef](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef)) function

<a id="interfacefortran_1_1syscgetvariablef_1ae20d858d6873e2c82a6bd385c0f08a13"></a>
### Function syscgetvariablef\_teq

![][public]


```fortran
type(syscvariablef) function syscgetvariablef_teq(variablename, displayname, tensortype, isextensive, location, quantitytype)
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

* variablenamecharacter(len=*), intent(in)
* displaynamecharacter(len=*), intent(in)
* tensortypeinteger(kind=4), intent(in)
* isextensivelogical, intent(in)
* locationinteger(kind=4), intent(in)
* quantitytypeinteger(kind=4), intent(in)

**Return type**: type([syscvariablef](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef)) function

<a id="interfacefortran_1_1syscgetvariablef_1ad77ffe80eaeed67dcb5c207189543a80"></a>
### Function syscgetvariablef\_dtelqd

![][public]


```fortran
type(syscvariablef) function syscgetvariablef_dtelqd(variablename, displayname, tensortype, isextensive, location, quantitytype, datatype)
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

* variablenamecharacter(len=*), intent(in)
* displaynamecharacter(len=*), intent(in)
* tensortypeinteger(kind=4), intent(in)
* isextensivelogical, intent(in)
* locationinteger(kind=4), intent(in)
* quantitytypeinteger(kind=4), intent(in)
* datatypeinteger(kind=4), intent(in)

**Return type**: type([syscvariablef](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)