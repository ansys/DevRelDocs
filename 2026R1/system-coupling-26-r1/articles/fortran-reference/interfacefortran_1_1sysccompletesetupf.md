# Interface fortran::sysccompletesetupf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 357)

Provide an interface to complete the setup.



## Members

* [sysccompletesetupf](interfacefortran_1_1sysccompletesetupf.md#interfacefortran_1_1sysccompletesetupf_1a320cf53efbc6f8615763a47dbbf287f4)

## Public functions

<a id="interfacefortran_1_1sysccompletesetupf_1a320cf53efbc6f8615763a47dbbf287f4"></a>
### Function sysccompletesetupf

![][public]


```fortran
type(syscerrorf) function sysccompletesetupf(setupinfo)
```


Provide a function to notify System Coupling that setup can be completed.

After this function is called, coupled analysis setup can no longer be updated, i.e. regions and variables cannot be changed.





Once the setup is complete, any subsequent call to complete the setup will have no effect.






**Parameters**:

* **setupInfo**: - setup information.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* setupinfotype([syscsetupinfof](structfortran_1_1syscsetupinfof.md#structfortran_1_1syscsetupinfof)), intent(in)

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)