# Interface fortran::restartpointcreationintf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 39)

Provide function interface for creating restart points.

This function may be called only during outputs update, and is expected to return a unique string identifier for a given restart point.

## Members

* [restartpointcreationintf](interfacefortran_1_1restartpointcreationintf.md#interfacefortran_1_1restartpointcreationintf_1aa36961b64ba25ca28418fe8f2dcef60b)

## Public functions

<a id="interfacefortran_1_1restartpointcreationintf_1aa36961b64ba25ca28418fe8f2dcef60b"></a>
### Function restartpointcreationintf

![][public]

```fortran
character(len=syscfilepathlen) function restartpointcreationintf()
```

Provide a function prototype for creating restart points.





**Return type**: character(len=syscfilepathlen) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)