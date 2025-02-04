# Interface fortran::sysccompletesetupf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 357)

Provide an interface to complete the setup.



## Members

* [sysccompletesetupf](interfacefortran_1_1sysccompletesetupf.md#interfacefortran_1_1sysccompletesetupf_1af8bf55bb3a923b4824f53281231ca18f)

## Public functions

<a id="interfacefortran_1_1sysccompletesetupf_1af8bf55bb3a923b4824f53281231ca18f"></a>
### Function sysccompletesetupf

![][public]

```fortran
type(syscerrorf) function sysccompletesetupf(setupInfo)
```

Provide a function to notify System Coupling that setup can be completed.

After this function is called, coupled analysis setup can no longer be updated, i.e. regions and variables cannot be changed.





Once the setup is complete, any subsequent call to complete the setup will have no effect.






**Parameters**:

* **setupInfo**: - setup information.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* setupInfosetupInfo

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)