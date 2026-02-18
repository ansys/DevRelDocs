# Interface fortran::syscloadlibraryf

![][Fortran]
![][public]

**Definition**: `participantLibraryF.fi` (line 7)

Provide an interface to load system coupling participant library path and mpi wrapper path to system coupling participant proxy.



## Members

* [syscloadlibraryf](interfacefortran_1_1syscloadlibraryf.md#interfacefortran_1_1syscloadlibraryf_1ac333d28ca182a3fc6efa1ad1543c78d0)

## Public functions

<a id="interfacefortran_1_1syscloadlibraryf_1ac333d28ca182a3fc6efa1ad1543c78d0"></a>
### Function syscloadlibraryf

![][public]

```fortran
logical function syscloadlibraryf(syscPartLibPath, mpiWrapperPath)
```

Provide a function to load system coupling participant library path and mpi wrapper path to system coupling participant proxy.

**Parameters**:

* **syscPartLibPath**: system coupling participant library path
* **mpiWrapperPath**: mpi wrapper library path


**Returns**:

true if these two libraries are loaded successfully, otherwise it returns false.



**Parameters**:

* syscPartLibPathsyscPartLibPath
* mpiWrapperPathmpiWrapperPath

**Return type**: logical function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)