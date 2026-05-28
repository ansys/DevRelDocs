---
title: "Interface fortran::syscgetintegerattributef"
---

![][Fortran]
![][public]

**Definition**: `syscAttributeF.fi` (line 20)

Provide an interface to get an integer-valued attribute.



## Members

* [syscgetintegerattributef](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetintegerattributef)

## Public functions

<a id="interfacefortran_1_1syscgetintegerattributef_1aac82f8c5c777506867e2d6cf3b3d7359"></a>
### Function syscgetintegerattributef

![][public]

```fortran
type(syscintegerattributef) function syscgetintegerattributef(name, value)
```

Get an integer-valued attribute.

**Parameters**:

* **name**: - attribute name.
* **value**: - attribute value.


**Returns**:

an integer attribute



**Parameters**:

* namename
* valuevalue

**Return type**: type([syscintegerattributef](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscintegerattributef)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)