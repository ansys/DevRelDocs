# Type fortran::syscoutputscalardataf undefined

![][Fortran]
![][public]

**Definition**: `syscOutputScalarDataF.fi` (line 25)

Provide an output scalar data access type.

Output scalar data provides read-only access to an array of scalar data. To create and/or initialize SyscOutputScalarDataF, it is highly recommended to use one of the functions within <code>syscGetOutputScalarDataF</code> interface. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```fortran
type(SyscOutputScalarDataF) :: osd
osd = syscGetOutputScalarDataF(array, arraySize)
```

## Members

* [dataptr](structfortran_1_1syscoutputscalardataf.md#structfortran_1_1syscoutputscalardataf_1a267ef1b5c835b12e571fea3d20a8ff7b)
* [datasize](structfortran_1_1syscoutputscalardataf.md#structfortran_1_1syscoutputscalardataf_1ac8d11b0cadefc4f138b1ef4e0ab50b2a)
* [primitivetype](structfortran_1_1syscoutputscalardataf.md#structfortran_1_1syscoutputscalardataf_1a41aa641a12e238b3d8a12707aa047938)

## Public attributes

<a id="structfortran_1_1syscoutputscalardataf_1a41aa641a12e238b3d8a12707aa047938"></a>
### Variable primitivetype

![][public]

**Definition**: `syscOutputScalarDataF.fi` (line 26)

```fortran
integer(kind=8) primitivetype
```

Primitive type.





**Type**: integer(kind=8)

<a id="structfortran_1_1syscoutputscalardataf_1a267ef1b5c835b12e571fea3d20a8ff7b"></a>
### Variable dataptr

![][public]

**Definition**: `syscOutputScalarDataF.fi` (line 27)

```fortran
integer(kind=8) dataptr
```

Pointer to the data array.





**Type**: integer(kind=8)

<a id="structfortran_1_1syscoutputscalardataf_1ac8d11b0cadefc4f138b1ef4e0ab50b2a"></a>
### Variable datasize

![][public]

**Definition**: `syscOutputScalarDataF.fi` (line 28)

```fortran
integer(kind=8) datasize
```

Array size.





**Type**: integer(kind=8)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)