# Interface fortran::syscregisterrestartpointcreationf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 390)

Provide an interface to register restart point creation callback.



## Members

* [syscregisterrestartpointcreationf](interfacefortran_1_1syscregisterrestartpointcreationf.md#interfacefortran_1_1syscregisterrestartpointcreationf_1a2f077ef19003caa955054dfd5ae6ad38)

## Public functions

<a id="interfacefortran_1_1syscregisterrestartpointcreationf_1a2f077ef19003caa955054dfd5ae6ad38"></a>
### Function syscregisterrestartpointcreationf

![][public]


```fortran
type(syscerrorf) function syscregisterrestartpointcreationf(restcr)
```


Provide a function to register restart point creation callback.

**Parameters**:

* **restCr**: - a pointer to a function that conforms to the <code>restartPointCreationIntf</code> interface


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* restcrprocedure([restartpointcreationintf](interfacefortran_1_1restartpointcreationintf.md#interfacefortran_1_1restartpointcreationintf))

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)