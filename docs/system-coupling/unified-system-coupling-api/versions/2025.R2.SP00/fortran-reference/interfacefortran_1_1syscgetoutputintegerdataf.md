# Interface fortran::syscgetoutputintegerdataf

![][Fortran]
![][public]

**Definition**: `syscOutputIntegerDataF.fi` (line 38)

Provide an interface to get output integer data.



## Members

* [syscgetoutputintegerdataf](interfacefortran_1_1syscgetoutputintegerdataf.md#interfacefortran_1_1syscgetoutputintegerdataf_1a1e799f9998240be1a86b4d010b00f85c)
* [syscgetoutputintegerdataf\_i4](interfacefortran_1_1syscgetoutputintegerdataf.md#interfacefortran_1_1syscgetoutputintegerdataf_1ae1a0e75930a3da5a7919c2f51f5b41e7)
* [syscgetoutputintegerdataf\_i8](interfacefortran_1_1syscgetoutputintegerdataf.md#interfacefortran_1_1syscgetoutputintegerdataf_1af330e0d8cf14659775297c3f08a20263)

## Public functions

<a id="interfacefortran_1_1syscgetoutputintegerdataf_1a1e799f9998240be1a86b4d010b00f85c"></a>
### Function syscgetoutputintegerdataf

![][public]

```fortran
type(syscoutputintegerdataf) function syscgetoutputintegerdataf()
```







**Return type**: type([syscoutputintegerdataf](structfortran_1_1syscoutputintegerdataf.md#structfortran_1_1syscoutputintegerdataf)) function

<a id="interfacefortran_1_1syscgetoutputintegerdataf_1ae1a0e75930a3da5a7919c2f51f5b41e7"></a>
### Function syscgetoutputintegerdataf\_i4

![][public]

```fortran
type(syscoutputintegerdataf) function syscgetoutputintegerdataf_i4(data, dataSize)
```

Create an output integer data access type.

**Parameters**:

* **data**: - 32-bit array of integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscoutputintegerdataf](structfortran_1_1syscoutputintegerdataf.md#structfortran_1_1syscoutputintegerdataf)) function

<a id="interfacefortran_1_1syscgetoutputintegerdataf_1af330e0d8cf14659775297c3f08a20263"></a>
### Function syscgetoutputintegerdataf\_i8

![][public]

```fortran
type(syscoutputintegerdataf) function syscgetoutputintegerdataf_i8(data, dataSize)
```

Create an output integer data access type.

**Parameters**:

* **data**: - 64-bit array of integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscoutputintegerdataf](structfortran_1_1syscoutputintegerdataf.md#structfortran_1_1syscoutputintegerdataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)