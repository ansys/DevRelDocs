# Interface fortran::syscchecksurfacemeshvalidityf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 826)

Provide an interface to perform simple mesh validity checks.



## Members

* [syscchecksurfacemeshvalidityf](interfacefortran_1_1syscchecksurfacemeshvalidityf.md#interfacefortran_1_1syscchecksurfacemeshvalidityf_1aa47200db799a70e3ef5c5e15d2fa4de7)

## Public functions

<a id="interfacefortran_1_1syscchecksurfacemeshvalidityf_1aa47200db799a70e3ef5c5e15d2fa4de7"></a>
### Function syscchecksurfacemeshvalidityf

![][public]

```fortran
type(syscerrorf) function syscchecksurfacemeshvalidityf(surfaceMesh)
```

Provide a function to perform simple mesh validity checks.

This function is provided as a testing and debugging tool and is not meant to be used in production workflows. System Coupling itself will not call this function for performance reasons.





The function will check the surface mesh for detectable problems. For example, it will check if array sizes are consistent, that elemNodeIds array only contains ids that are found in nodeIds array, etc. It is not an exhaustive validity check - the mesh can still have problems even if all checks passed.






**Parameters**:

* **surfaceMesh**: - surface mesh to be checked


**Returns**:

Return value is SyscErrorF type. If mesh checks passed, then retcode will be 0. If mesh checks failed, then retcode will be not 0 and message that contains information about about the particular issue.



**Parameters**:

* surfaceMeshsurfaceMesh

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)