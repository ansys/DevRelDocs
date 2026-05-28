---
title: "Interface fortran::syscinitializeanalysisf"
---

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 610)

Provide an interface to notify System Coupling that analysis initialization can be completed.



## Members

* [syscinitializeanalysisf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscinitializeanalysisf)

## Public functions

<a id="interfacefortran_1_1syscinitializeanalysisf_1ac5f7b665a8edcea5950424daef7b3f26"></a>
### Function syscinitializeanalysisf

![][public]

```fortran
type(syscerrorf) function syscinitializeanalysisf()
```

Provide a function to notify System Coupling that analysis initialization can be completed.

This function must be called after registering mesh and variable data access and prior to entering the coupled analysis loop.





If this function is called before the coupled analysis is complete, it will automatically complete the coupled analysis and assume steady analysis type.






**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Return type**: type([syscerrorf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)