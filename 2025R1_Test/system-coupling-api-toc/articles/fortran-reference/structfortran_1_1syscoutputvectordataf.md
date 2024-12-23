# Type fortran::syscoutputvectordataf undefined

![][Fortran]
![][public]

**Definition**: `syscOutputVectorDataF.fi` (line 31)

Create an output vector data access type.

Output vector data provides read-only access to an array of vector data.





The size is the total number of vectors, not the total number of components, i.e. if all data is stored in one contiguous array, then size is 1/3 the size of that array.





To create and/or initialize SyscOutputVectorDataF, it is highly recommended to use one of the functions within <code>syscGetOutputVectorDataF</code> interface. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```fortran
type(SyscOutputVectorDataF) :: ovd
ovd = syscGetOutputVectorDataSplitF(x, y, z, size)
```

## Members

* [dataptr1](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf_1a9ff86b31b305de4d1722dd390eb413d6)
* [dataptr2](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf_1a3f77c87d288879c34e8f04f2d1f0e159)
* [dataptr3](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf_1a59296d314ebb802f9490fe430a0cd3d4)
* [datasize](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf_1ac8d11b0cadefc4f138b1ef4e0ab50b2a)
* [dimension](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf_1a86ac613c1baf4a60d347742b387bb8e4)
* [primitivetype](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf_1a41aa641a12e238b3d8a12707aa047938)

## Public attributes

<a id="structfortran_1_1syscoutputvectordataf_1a41aa641a12e238b3d8a12707aa047938"></a>
### Variable primitivetype

![][public]

**Definition**: `syscOutputVectorDataF.fi` (line 32)

```fortran
integer(kind=8) primitivetype
```

Primitive type.





**Type**: integer(kind=8)

<a id="structfortran_1_1syscoutputvectordataf_1a9ff86b31b305de4d1722dd390eb413d6"></a>
### Variable dataptr1

![][public]

**Definition**: `syscOutputVectorDataF.fi` (line 33)

```fortran
integer(kind=8) dataptr1
```

Pointer to the first array.





**Type**: integer(kind=8)

<a id="structfortran_1_1syscoutputvectordataf_1a3f77c87d288879c34e8f04f2d1f0e159"></a>
### Variable dataptr2

![][public]

**Definition**: `syscOutputVectorDataF.fi` (line 34)

```fortran
integer(kind=8) dataptr2
```

Pointer to the second array.





**Type**: integer(kind=8)

<a id="structfortran_1_1syscoutputvectordataf_1a59296d314ebb802f9490fe430a0cd3d4"></a>
### Variable dataptr3

![][public]

**Definition**: `syscOutputVectorDataF.fi` (line 35)

```fortran
integer(kind=8) dataptr3
```

Pointer to the third array.





**Type**: integer(kind=8)

<a id="structfortran_1_1syscoutputvectordataf_1ac8d11b0cadefc4f138b1ef4e0ab50b2a"></a>
### Variable datasize

![][public]

**Definition**: `syscOutputVectorDataF.fi` (line 36)

```fortran
integer(kind=8) datasize
```

Array size.





**Type**: integer(kind=8)

<a id="structfortran_1_1syscoutputvectordataf_1a86ac613c1baf4a60d347742b387bb8e4"></a>
### Variable dimension

![][public]

**Definition**: `syscOutputVectorDataF.fi` (line 37)

```fortran
integer(kind=8) dimension
```

Dimension.





**Type**: integer(kind=8)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)