# Interface fortran::syscgetsetupinfof

![][Fortran]
![][public]

**Definition**: `syscCommonTypesF.fi` (line 196)

Provide an interface to get a setup info type.



## Members

* [syscgetsetupinfof](interfacefortran_1_1syscgetsetupinfof.md#interfacefortran_1_1syscgetsetupinfof_1a73374df2183a799e03180e006525fcfe)
* [syscgetsetupinfof\_a](interfacefortran_1_1syscgetsetupinfof.md#interfacefortran_1_1syscgetsetupinfof_1af89452107509346cb3968adad6f1c6d9)
* [syscgetsetupinfof\_ar](interfacefortran_1_1syscgetsetupinfof.md#interfacefortran_1_1syscgetsetupinfof_1ac3020d59c6b0721f63232f77546a302e)
* [syscgetsetupinfof\_ard](interfacefortran_1_1syscgetsetupinfof.md#interfacefortran_1_1syscgetsetupinfof_1a3c851b3d577d4f00298c0f2359156269)
* [syscgetsetupinfof\_ardt](interfacefortran_1_1syscgetsetupinfof.md#interfacefortran_1_1syscgetsetupinfof_1a46881d97ac682f3165cfaa087727300c)
* [syscgetsetupinfof\_ardtp](interfacefortran_1_1syscgetsetupinfof.md#interfacefortran_1_1syscgetsetupinfof_1adf37a5cca854da5d6902fd1a078fa52c)

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

<a id="interfacefortran_1_1syscgetsetupinfof_1af89452107509346cb3968adad6f1c6d9"></a>
### Function syscgetsetupinfof\_a

![][public]

```fortran
type(syscsetupinfof) function syscgetsetupinfof_a(analysisType)
```

Provide a function to get a setup info type.

**Parameters**:

* **analysisType**: - analysis type.

Restarts supported flag will be set to false. Dimension will be set to 3. Time integration will be set to implicit.






**Returns**:

a SyscSetupInfoF type.



**Parameters**:

* analysisTypeanalysisType

**Return type**: type([syscsetupinfof](structfortran_1_1syscsetupinfof.md#structfortran_1_1syscsetupinfof)) function

<a id="interfacefortran_1_1syscgetsetupinfof_1ac3020d59c6b0721f63232f77546a302e"></a>
### Function syscgetsetupinfof\_ar

![][public]

```fortran
type(syscsetupinfof) function syscgetsetupinfof_ar(analysisType, restartsSupported)
```

Provide a function to get a setup info type.

**Parameters**:

* **analysisType**: - analysis type.
* **restartsSupported**: - restarts supported flag.

Dimension will be set to 3. Time integration will be set to implicit.






**Returns**:

a SyscSetupInfoF type.



**Parameters**:

* analysisTypeanalysisType
* restartsSupportedrestartsSupported

**Return type**: type([syscsetupinfof](structfortran_1_1syscsetupinfof.md#structfortran_1_1syscsetupinfof)) function

<a id="interfacefortran_1_1syscgetsetupinfof_1a3c851b3d577d4f00298c0f2359156269"></a>
### Function syscgetsetupinfof\_ard

![][public]

```fortran
type(syscsetupinfof) function syscgetsetupinfof_ard(analysisType, restartsSupported, dimension)
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

* analysisTypeanalysisType
* restartsSupportedrestartsSupported
* dimensiondimension

**Return type**: type([syscsetupinfof](structfortran_1_1syscsetupinfof.md#structfortran_1_1syscsetupinfof)) function

<a id="interfacefortran_1_1syscgetsetupinfof_1a46881d97ac682f3165cfaa087727300c"></a>
### Function syscgetsetupinfof\_ardt

![][public]

```fortran
type(syscsetupinfof) function syscgetsetupinfof_ardt(analysisType, restartsSupported, dimension, timeIntegration)
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

* analysisTypeanalysisType
* restartsSupportedrestartsSupported
* dimensiondimension
* timeIntegrationtimeIntegration

**Return type**: type([syscsetupinfof](structfortran_1_1syscsetupinfof.md#structfortran_1_1syscsetupinfof)) function

<a id="interfacefortran_1_1syscgetsetupinfof_1adf37a5cca854da5d6902fd1a078fa52c"></a>
### Function syscgetsetupinfof\_ardtp

![][public]

```fortran
type(syscsetupinfof) function syscgetsetupinfof_ardtp(analysisType, restartsSupported, dimension, timeIntegration, participantType)
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

* analysisTypeanalysisType
* restartsSupportedrestartsSupported
* dimensiondimension
* timeIntegrationtimeIntegration
* participantTypeparticipantType

**Return type**: type([syscsetupinfof](structfortran_1_1syscsetupinfof.md#structfortran_1_1syscsetupinfof)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)