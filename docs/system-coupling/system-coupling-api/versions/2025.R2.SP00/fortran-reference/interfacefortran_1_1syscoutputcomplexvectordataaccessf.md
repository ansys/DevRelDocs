---
title: "Interface fortran::syscoutputcomplexvectordataaccessf"
---

![][Fortran]
![][public]

**Definition**: `syscFunctionTypesF.fi` (line 113)

Provide function interface for access to output complex vector data.



## Members

* [syscoutputcomplexvectordataaccessf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscoutputcomplexvectordataaccessf)

## Public functions

<a id="interfacefortran_1_1syscoutputcomplexvectordataaccessf_1ada724b3851749e8d48cd65bf8e813a6e"></a>
### Function syscoutputcomplexvectordataaccessf

![][public]

```fortran
type(syscoutputcomplexvectordataf) function syscoutputcomplexvectordataaccessf(regionName, variableName)
```

Provide a function for access to output complex vector data.

**Parameters**:

* **regionName**: - the name of the region
* **variableName**: - the name of the variable



**Parameters**:

* regionNameregionName
* variableNamevariableName

**Return type**: type([syscoutputcomplexvectordataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscoutputcomplexvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)