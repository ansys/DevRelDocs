# Type fortran::syscsetupfileinfof undefined

![][Fortran]
![][public]

**Definition**: `syscCommonTypesF.fi` (line 365)

Provide a type for writing System Coupling setup files.

To create and/or initialize the SyscSetupFileInfoF type, it is highly recommended to use <code>syscGetSetupFileInfoF</code> function. This function will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```fortran
type(SyscSetupFileInfoF) :: setupFileInfo
setupFileInfo = syscGetSetupFileInfoF("setup.scp")
```

## Members

* [restartssupported](structfortran_1_1syscsetupfileinfof.md#structfortran_1_1syscsetupfileinfof_1a2758579ead626ca02c0c38e9d0407056)
* [setupfilename](structfortran_1_1syscsetupfileinfof.md#structfortran_1_1syscsetupfileinfof_1ab4e2b5c783a6f184674e32cfaaa4f09e)

## Public attributes

<a id="structfortran_1_1syscsetupfileinfof_1ab4e2b5c783a6f184674e32cfaaa4f09e"></a>
### Variable setupfilename

![][public]

**Definition**: `syscCommonTypesF.fi` (line 366)

```fortran
character(len=syscfilepathlen) setupfilename
```

Setup file name.





**Type**: character(len=syscfilepathlen)

<a id="structfortran_1_1syscsetupfileinfof_1a2758579ead626ca02c0c38e9d0407056"></a>
### Variable restartssupported

![][public]

**Definition**: `syscCommonTypesF.fi` (line 367)

```fortran
logical restartssupported
```

Restarts support flag.





**Type**: logical

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)