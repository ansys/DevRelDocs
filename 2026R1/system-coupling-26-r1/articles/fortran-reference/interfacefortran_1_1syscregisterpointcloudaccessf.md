# Interface fortran::syscregisterpointcloudaccessf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 587)

Provide an interface to register point cloud access.



## Members

* [syscregisterpointcloudaccessf](interfacefortran_1_1syscregisterpointcloudaccessf.md#interfacefortran_1_1syscregisterpointcloudaccessf_1a6212840932bfbebaa5b9a6182859e9ce)

## Public functions

<a id="interfacefortran_1_1syscregisterpointcloudaccessf_1a6212840932bfbebaa5b9a6182859e9ce"></a>
### Function syscregisterpointcloudaccessf

![][public]


```fortran
type(syscerrorf) function syscregisterpointcloudaccessf(dataaccess)
```


Provide a function to register point cloud access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscPointCloudAccessF interface.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* dataaccessprocedure([syscpointcloudaccessf](interfacefortran_1_1syscpointcloudaccessf.md#interfacefortran_1_1syscpointcloudaccessf))

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)