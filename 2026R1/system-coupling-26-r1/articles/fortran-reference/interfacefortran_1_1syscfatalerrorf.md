# Interface fortran::syscfatalerrorf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 805)

Provide an interface to notify System Coupling of a fatal error.



## Members

* [syscfatalerrorf](interfacefortran_1_1syscfatalerrorf.md#interfacefortran_1_1syscfatalerrorf_1a57b4620c9c7016ac8b631eb6fefb75c5)

## Public functions

<a id="interfacefortran_1_1syscfatalerrorf_1a57b4620c9c7016ac8b631eb6fefb75c5"></a>
### Function syscfatalerrorf

![][public]


```fortran
subroutine syscfatalerrorf(errormessage)
```


Provide a subroutine to notify System Coupling of a fatal error.

**Parameters**:

* **errorMessage**: - the error message.



**Parameters**:

* errormessagecharacter(*), intent(in)

**Return type**: subroutine

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)