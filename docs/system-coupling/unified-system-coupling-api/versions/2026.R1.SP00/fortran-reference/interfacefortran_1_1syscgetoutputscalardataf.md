# Interface fortran::syscgetoutputscalardataf

![][Fortran]
![][public]

**Definition**: `syscOutputScalarDataF.fi` (line 34)

Provide an interface to get output scalar data.



## Members

* [syscgetoutputscalardataf](interfacefortran_1_1syscgetoutputscalardataf.md#interfacefortran_1_1syscgetoutputscalardataf_1a76a042a253abb91e8bcdc11ce3b8dd20)
* [syscgetoutputscalardataf\_i4](interfacefortran_1_1syscgetoutputscalardataf.md#interfacefortran_1_1syscgetoutputscalardataf_1a22a59bdf1e1b2b68ef148b615bff516e)
* [syscgetoutputscalardataf\_i8](interfacefortran_1_1syscgetoutputscalardataf.md#interfacefortran_1_1syscgetoutputscalardataf_1a83da63a913b5837f3904a03da11b8994)
* [syscgetoutputscalardataf\_r4](interfacefortran_1_1syscgetoutputscalardataf.md#interfacefortran_1_1syscgetoutputscalardataf_1a30f49e0a3598cbcb0431d47c62f4422c)
* [syscgetoutputscalardataf\_r8](interfacefortran_1_1syscgetoutputscalardataf.md#interfacefortran_1_1syscgetoutputscalardataf_1a8db12f1fb4a7ea7d8d1b670e169e3b69)

## Public functions

<a id="interfacefortran_1_1syscgetoutputscalardataf_1a76a042a253abb91e8bcdc11ce3b8dd20"></a>
### Function syscgetoutputscalardataf

![][public]


```fortran
type(syscoutputscalardataf) function syscgetoutputscalardataf()
```








**Return type**: type([syscoutputscalardataf](structfortran_1_1syscoutputscalardataf.md#structfortran_1_1syscoutputscalardataf)) function

<a id="interfacefortran_1_1syscgetoutputscalardataf_1a30f49e0a3598cbcb0431d47c62f4422c"></a>
### Function syscgetoutputscalardataf\_r4

![][public]


```fortran
type(syscoutputscalardataf) function syscgetoutputscalardataf_r4(data, datasize)
```


Create an output scalar data access type.

**Parameters**:

* **data**: - 32-bit array of floating point data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* datareal(kind=4), dimension(datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscoutputscalardataf](structfortran_1_1syscoutputscalardataf.md#structfortran_1_1syscoutputscalardataf)) function

<a id="interfacefortran_1_1syscgetoutputscalardataf_1a8db12f1fb4a7ea7d8d1b670e169e3b69"></a>
### Function syscgetoutputscalardataf\_r8

![][public]


```fortran
type(syscoutputscalardataf) function syscgetoutputscalardataf_r8(data, datasize)
```


Create an output scalar data access type.

**Parameters**:

* **data**: - 64-bit array of floating point data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* datareal(kind=8), dimension(datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscoutputscalardataf](structfortran_1_1syscoutputscalardataf.md#structfortran_1_1syscoutputscalardataf)) function

<a id="interfacefortran_1_1syscgetoutputscalardataf_1a22a59bdf1e1b2b68ef148b615bff516e"></a>
### Function syscgetoutputscalardataf\_i4

![][public]


```fortran
type(syscoutputscalardataf) function syscgetoutputscalardataf_i4(data, datasize)
```


Create an output scalar data access type.

**Parameters**:

* **data**: - 32-bit array of integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* datainteger(kind=4), dimension(datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscoutputscalardataf](structfortran_1_1syscoutputscalardataf.md#structfortran_1_1syscoutputscalardataf)) function

<a id="interfacefortran_1_1syscgetoutputscalardataf_1a83da63a913b5837f3904a03da11b8994"></a>
### Function syscgetoutputscalardataf\_i8

![][public]


```fortran
type(syscoutputscalardataf) function syscgetoutputscalardataf_i8(data, datasize)
```


Create an output scalar data access type.

**Parameters**:

* **data**: - 64-bit array of integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* datainteger(kind=8), dimension(datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscoutputscalardataf](structfortran_1_1syscoutputscalardataf.md#structfortran_1_1syscoutputscalardataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)