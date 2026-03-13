# Interface fortran::syscgetsetupinfof

![][Fortran]
![][public]

**Definition**: `syscCommonTypesF.fi` (line 197)

Provide an interface to get a setup info type.



## Members

* [syscgetsetupinfof](interfacefortran_1_1syscgetsetupinfof.md#interfacefortran_1_1syscgetsetupinfof_1a73374df2183a799e03180e006525fcfe)
* [syscgetsetupinfof\_a](interfacefortran_1_1syscgetsetupinfof.md#interfacefortran_1_1syscgetsetupinfof_1a58bcb1256d3ecb3eb57483e07be85646)
* [syscgetsetupinfof\_ar](interfacefortran_1_1syscgetsetupinfof.md#interfacefortran_1_1syscgetsetupinfof_1a6fa355e1a61155b4f9199dfbf10d9ccf)
* [syscgetsetupinfof\_ard](interfacefortran_1_1syscgetsetupinfof.md#interfacefortran_1_1syscgetsetupinfof_1a3e01c7e9d24d8ed1d10c771cde749a53)
* [syscgetsetupinfof\_ardt](interfacefortran_1_1syscgetsetupinfof.md#interfacefortran_1_1syscgetsetupinfof_1ad1866609ef5ba284b0213c956728a029)
* [syscgetsetupinfof\_ardtp](interfacefortran_1_1syscgetsetupinfof.md#interfacefortran_1_1syscgetsetupinfof_1a60d4f3d44430f9fad5976653fce42ebb)

## Public functions

<a id="interfacefortran_1_1syscgetsetupinfof_1a73374df2183a799e03180e006525fcfe"></a>
### Function syscgetsetupinfof

![][public]


```fortran
type(syscsetupinfof) function syscgetsetupinfof()
```


Provide a function to get a setup info type.

Analysis type will be set to steady. Restarts supported flag will be set to false. Dimension will be set to 3. Time integration will be set to implicit.






**Returns**:

a SyscSetupInfoF type.



**Return type**: type([syscsetupinfof](structfortran_1_1syscsetupinfof.md#structfortran_1_1syscsetupinfof)) function

<a id="interfacefortran_1_1syscgetsetupinfof_1a58bcb1256d3ecb3eb57483e07be85646"></a>
### Function syscgetsetupinfof\_a

![][public]


```fortran
type(syscsetupinfof) function syscgetsetupinfof_a(analysistype)
```


Provide a function to get a setup info type.

**Parameters**:

* **analysisType**: - analysis type.

Restarts supported flag will be set to false. Dimension will be set to 3. Time integration will be set to implicit.






**Returns**:

a SyscSetupInfoF type.



**Parameters**:

* analysistypeinteger(kind=4), intent(in)

**Return type**: type([syscsetupinfof](structfortran_1_1syscsetupinfof.md#structfortran_1_1syscsetupinfof)) function

<a id="interfacefortran_1_1syscgetsetupinfof_1a6fa355e1a61155b4f9199dfbf10d9ccf"></a>
### Function syscgetsetupinfof\_ar

![][public]


```fortran
type(syscsetupinfof) function syscgetsetupinfof_ar(analysistype, restartssupported)
```


Provide a function to get a setup info type.

**Parameters**:

* **analysisType**: - analysis type.
* **restartsSupported**: - restarts supported flag.

Dimension will be set to 3. Time integration will be set to implicit.






**Returns**:

a SyscSetupInfoF type.



**Parameters**:

* analysistypeinteger(kind=4), intent(in)
* restartssupportedlogical, intent(in)

**Return type**: type([syscsetupinfof](structfortran_1_1syscsetupinfof.md#structfortran_1_1syscsetupinfof)) function

<a id="interfacefortran_1_1syscgetsetupinfof_1a3e01c7e9d24d8ed1d10c771cde749a53"></a>
### Function syscgetsetupinfof\_ard

![][public]


```fortran
type(syscsetupinfof) function syscgetsetupinfof_ard(analysistype, restartssupported, dimension)
```


Provide a function to get a setup info type.

**Parameters**:

* **analysisType**: - analysis type.
* **restartsSupported**: - restarts supported flag.
* **dimension**: - participant dimension.

Time integration will be set to implicit.






**Returns**:

a SyscSetupInfoF type.



**Parameters**:

* analysistypeinteger(kind=4), intent(in)
* restartssupportedlogical, intent(in)
* dimensioninteger(kind=8), intent(in)

**Return type**: type([syscsetupinfof](structfortran_1_1syscsetupinfof.md#structfortran_1_1syscsetupinfof)) function

<a id="interfacefortran_1_1syscgetsetupinfof_1ad1866609ef5ba284b0213c956728a029"></a>
### Function syscgetsetupinfof\_ardt

![][public]


```fortran
type(syscsetupinfof) function syscgetsetupinfof_ardt(analysistype, restartssupported, dimension, timeintegration)
```


Provide a function to get a setup info type.

**Parameters**:

* **analysisType**: - analysis type.
* **restartsSupported**: - restarts supported flag.
* **dimension**: - participant dimension.
* **timeIntegration**: - time integration method.


**Returns**:

a SyscSetupInfoF type.



**Parameters**:

* analysistypeinteger(kind=4), intent(in)
* restartssupportedlogical, intent(in)
* dimensioninteger(kind=8), intent(in)
* timeintegrationinteger(kind=8), intent(in)

**Return type**: type([syscsetupinfof](structfortran_1_1syscsetupinfof.md#structfortran_1_1syscsetupinfof)) function

<a id="interfacefortran_1_1syscgetsetupinfof_1a60d4f3d44430f9fad5976653fce42ebb"></a>
### Function syscgetsetupinfof\_ardtp

![][public]


```fortran
type(syscsetupinfof) function syscgetsetupinfof_ardtp(analysistype, restartssupported, dimension, timeintegration, participanttype)
```


Provide a function to get a setup info type.

**Parameters**:

* **analysisType**: - analysis type.
* **restartsSupported**: - restarts supported flag.
* **dimension**: - participant dimension.
* **timeIntegration**: - time integration method.
* **participantType**: - participant type.


**Returns**:

a SyscSetupInfoF type.



**Parameters**:

* analysistypeinteger(kind=4), intent(in)
* restartssupportedlogical, intent(in)
* dimensioninteger(kind=8), intent(in)
* timeintegrationinteger(kind=8), intent(in)
* participanttypeinteger(kind=8), intent(in)

**Return type**: type([syscsetupinfof](structfortran_1_1syscsetupinfof.md#structfortran_1_1syscsetupinfof)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)