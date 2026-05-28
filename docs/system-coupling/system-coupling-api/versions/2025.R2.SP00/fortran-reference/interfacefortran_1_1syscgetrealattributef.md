---
title: "Interface fortran::syscgetrealattributef"
---

![][Fortran]
![][public]

**Definition**: `syscAttributeF.fi` (line 57)

Provide an interface to get a real-valued attribute.



## Members

* [syscgetrealattributef](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetrealattributef)

## Public functions

<a id="interfacefortran_1_1syscgetrealattributef_1ac10d16b1d2a228128ce0b9a96100cb52"></a>
### Function syscgetrealattributef

![][public]

```fortran
type(syscrealattributef) function syscgetrealattributef(name, value, dimensionality)
```

Get a real-valued attribute.

**Parameters**:

* **name**: - attribute name.
* **value**: - attribute value.
* **dimensionality**: - attribute dimensionality


**Returns**:

an integer attribute



**Parameters**:

* namename
* valuevalue
* dimensionalitydimensionality

**Return type**: type([syscrealattributef](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscrealattributef)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)