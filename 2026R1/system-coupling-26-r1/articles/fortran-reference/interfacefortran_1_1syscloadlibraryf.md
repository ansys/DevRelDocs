# Interface fortran::syscloadlibraryf

![][Fortran]
![][public]

**Definition**: `participantLibraryF.fi` (line 7)

Provide an interface to load system coupling participant library path and mpi wrapper path to system coupling participant proxy.



## Members

* [syscloadlibraryf](interfacefortran_1_1syscloadlibraryf.md#interfacefortran_1_1syscloadlibraryf_1a1e60775d8879f0b5257c919d1926d9c4)

## Public functions

<a id="interfacefortran_1_1syscloadlibraryf_1a1e60775d8879f0b5257c919d1926d9c4"></a>
### Function syscloadlibraryf

![][public]


```fortran
logical function syscloadlibraryf(syscpartlibpath, mpiwrapperpath)
```


Provide a function to load system coupling participant library path and mpi wrapper path to system coupling participant proxy.

**Parameters**:

* **syscPartLibPath**: system coupling participant library path
* **mpiWrapperPath**: mpi wrapper library path


**Returns**:

true if these two libraries are loaded successfully, otherwise it returns false.



**Parameters**:

* syscpartlibpathcharacter(*), intent(in)
* mpiwrapperpathcharacter(*), intent(in)

**Return type**: logical function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)