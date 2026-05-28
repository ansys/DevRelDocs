---
title: "Interface fortran::syscgetcouplinginterfacef"
---

![][Fortran]
![][public]

**Definition**: `syscCouplingInterfaceF.fi` (line 41)

Provide an interface to get a coupling interface.



## Members

* [syscgetcouplinginterfacef](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscgetcouplinginterfacef)

## Public functions

<a id="interfacefortran_1_1syscgetcouplinginterfacef_1aec4bf2d947b022718429d490da07c2f7"></a>
### Function syscgetcouplinginterfacef

![][public]

```fortran
type(sysccouplinginterfacef) function syscgetcouplinginterfacef(name)
```

Create a coupling interface.

**Parameters**:

* **name**: - Unique name for this interface. String length should not exceed <code>SYSC_STRING_LENGTH</code>.



**Parameters**:

* namename

**Return type**: type([sysccouplinginterfacef](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1sysccouplinginterfacef)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)