---
title: "Interface fortran::syscinputscalardataaccessf"
---

![][Fortran]
![][public]

**Definition**: `syscFunctionTypesF.fi` (line 15)

Provide function interface for access to input scalar data.



## Members

* [syscinputscalardataaccessf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscinputscalardataaccessf)

## Public functions

<a id="interfacefortran_1_1syscinputscalardataaccessf_1a8a5c0a21ad66707edf0de59bd1ad6c44"></a>
### Function syscinputscalardataaccessf

![][public]

```fortran
type(syscinputscalardataf) function syscinputscalardataaccessf(regionName, variableName)
```

Provide a function for access to input scalar data.

**Parameters**:

* **regionName**: - the name of the region
* **variableName**: - the name of the variable



**Parameters**:

* regionNameregionName
* variableNamevariableName

**Return type**: type([syscinputscalardataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscinputscalardataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)