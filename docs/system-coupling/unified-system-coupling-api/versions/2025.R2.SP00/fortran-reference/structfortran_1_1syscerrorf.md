# Type fortran::syscerrorf undefined

![][Fortran]
![][public]

**Definition**: `syscCommonTypesF.fi` (line 157)

Provide an error type returned by the Fortran interface calls.



## Members

* [message](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf_1a03ea72a9d280946f9411ff9c261f7fa6)
* [retcode](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf_1a79a9fe07cdde873d9bf5a786ee076cba)

## Public attributes

<a id="structfortran_1_1syscerrorf_1a79a9fe07cdde873d9bf5a786ee076cba"></a>
### Variable retcode

![][public]

**Definition**: `syscCommonTypesF.fi` (line 159)

```fortran
integer(kind=4) retcode
```

Error code. Set to <code>SyscStatusOk</code> if no error.





**Type**: integer(kind=4)

<a id="structfortran_1_1syscerrorf_1a03ea72a9d280946f9411ff9c261f7fa6"></a>
### Variable message

![][public]

**Definition**: `syscCommonTypesF.fi` (line 161)

```fortran
character(len=syscstrlen) message
```

Error message. Blank string if no error.





**Type**: character(len=syscstrlen)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)