# Type fortran::syscoutputintegerdataf undefined

![][Fortran]
![][public]

**Definition**: `syscOutputIntegerDataF.fi` (line 29)

Provide an output integer data access type.

Output integer data provides read-only access to an array of integers. To create and/or initialize SyscOutputIntegerDataF, it is highly recommended to use one of the functions within <code>syscGetOutputIntegerDataF</code> interface. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```fortran
type(SyscOutputIntegerDataF) :: oid
oid = syscGetOutputIntegerDataF(array, arraySize)
```

## Members

* [dataptr](structfortran_1_1syscoutputintegerdataf.md#structfortran_1_1syscoutputintegerdataf_1a267ef1b5c835b12e571fea3d20a8ff7b)
* [datasize](structfortran_1_1syscoutputintegerdataf.md#structfortran_1_1syscoutputintegerdataf_1ac8d11b0cadefc4f138b1ef4e0ab50b2a)
* [primitivetype](structfortran_1_1syscoutputintegerdataf.md#structfortran_1_1syscoutputintegerdataf_1a41aa641a12e238b3d8a12707aa047938)

## Public attributes

<a id="structfortran_1_1syscoutputintegerdataf_1a41aa641a12e238b3d8a12707aa047938"></a>
### Variable primitivetype

![][public]

**Definition**: `syscOutputIntegerDataF.fi` (line 30)

```fortran
integer(kind=8) primitivetype
```

Primitive type.





**Type**: integer(kind=8)

<a id="structfortran_1_1syscoutputintegerdataf_1a267ef1b5c835b12e571fea3d20a8ff7b"></a>
### Variable dataptr

![][public]

**Definition**: `syscOutputIntegerDataF.fi` (line 31)

```fortran
integer(kind=8) dataptr
```

Pointer to the data array.





**Type**: integer(kind=8)

<a id="structfortran_1_1syscoutputintegerdataf_1ac8d11b0cadefc4f138b1ef4e0ab50b2a"></a>
### Variable datasize

![][public]

**Definition**: `syscOutputIntegerDataF.fi` (line 32)

```fortran
integer(kind=8) datasize
```

Array size.





**Type**: integer(kind=8)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)