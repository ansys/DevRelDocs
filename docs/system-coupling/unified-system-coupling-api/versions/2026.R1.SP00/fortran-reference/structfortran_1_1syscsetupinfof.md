# Type fortran::syscsetupinfof undefined

![][Fortran]
![][public]

**Definition**: `syscCommonTypesF.fi` (line 184)

Provide a type for System Coupling setup information.

To create and/or initialize the SyscSetupInfo struct, it is highly recommended to use one of the functions within the <code>syscGetSetupInfoF</code> interface. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```fortran
SyscSetupInfo setupInfo = syscGetSetupInfoF(SyscSteady);
```

## Members

* [analysistype](structfortran_1_1syscsetupinfof.md#structfortran_1_1syscsetupinfof_1aeab455ed168e2f3e178793e8f6c69c50)
* [dimension](structfortran_1_1syscsetupinfof.md#structfortran_1_1syscsetupinfof_1a86ac613c1baf4a60d347742b387bb8e4)
* [participanttype](structfortran_1_1syscsetupinfof.md#structfortran_1_1syscsetupinfof_1afc3a17c81e22e070442b3f1d83d6f4db)
* [restartssupported](structfortran_1_1syscsetupinfof.md#structfortran_1_1syscsetupinfof_1a4a6aff883f05c2ab2f3fedc949218ed0)
* [timeintegration](structfortran_1_1syscsetupinfof.md#structfortran_1_1syscsetupinfof_1aaba5b0455fb1c9d401a6bdc7eec0adc3)

## Public attributes

<a id="structfortran_1_1syscsetupinfof_1aeab455ed168e2f3e178793e8f6c69c50"></a>
### Variable analysistype

![][public]

**Definition**: `syscCommonTypesF.fi` (line 185)

```fortran
integer(kind=8) analysistype
```

Analysis type.





**Type**: integer(kind=8)

<a id="structfortran_1_1syscsetupinfof_1a4a6aff883f05c2ab2f3fedc949218ed0"></a>
### Variable restartssupported

![][public]

**Definition**: `syscCommonTypesF.fi` (line 186)

```fortran
logical(kind=8) restartssupported
```

Restarts supported flag.





**Type**: logical(kind=8)

<a id="structfortran_1_1syscsetupinfof_1a86ac613c1baf4a60d347742b387bb8e4"></a>
### Variable dimension

![][public]

**Definition**: `syscCommonTypesF.fi` (line 187)

```fortran
integer(kind=8) dimension
```

Participant dimension.





**Type**: integer(kind=8)

<a id="structfortran_1_1syscsetupinfof_1aaba5b0455fb1c9d401a6bdc7eec0adc3"></a>
### Variable timeintegration

![][public]

**Definition**: `syscCommonTypesF.fi` (line 188)

```fortran
integer(kind=8) timeintegration
```

Time integration method.





**Type**: integer(kind=8)

<a id="structfortran_1_1syscsetupinfof_1afc3a17c81e22e070442b3f1d83d6f4db"></a>
### Variable participanttype

![][public]

**Definition**: `syscCommonTypesF.fi` (line 189)

```fortran
integer(kind=8) participanttype
```

Participant type.





**Type**: integer(kind=8)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)