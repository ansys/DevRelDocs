# Interface fortran::syscgetinputscalardataf

![][Fortran]
![][public]

**Definition**: `syscInputScalarDataF.fi` (line 34)

Provide an interface to get input scalar data.



## Members

* [syscgetinputscalardataf](interfacefortran_1_1syscgetinputscalardataf.md#interfacefortran_1_1syscgetinputscalardataf_1adb06ffec7c3b3ec37a6f4b5f87786b12)
* [syscgetinputscalardataf\_r4](interfacefortran_1_1syscgetinputscalardataf.md#interfacefortran_1_1syscgetinputscalardataf_1a65b41b431fd0b3f4fa9e8d16819aa6a1)
* [syscgetinputscalardataf\_r8](interfacefortran_1_1syscgetinputscalardataf.md#interfacefortran_1_1syscgetinputscalardataf_1a2f02a198f47a8b09900be803a7f5a033)

## Public functions

<a id="interfacefortran_1_1syscgetinputscalardataf_1adb06ffec7c3b3ec37a6f4b5f87786b12"></a>
### Function syscgetinputscalardataf

![][public]


```fortran
type(syscinputscalardataf) function syscgetinputscalardataf()
```


Create an input scalar data access type.

Primitive type will default to double-precision (64-bit). Data size will be set to zero. Data pointer will be set to null.



**Return type**: type([syscinputscalardataf](structfortran_1_1syscinputscalardataf.md#structfortran_1_1syscinputscalardataf)) function

<a id="interfacefortran_1_1syscgetinputscalardataf_1a65b41b431fd0b3f4fa9e8d16819aa6a1"></a>
### Function syscgetinputscalardataf\_r4

![][public]


```fortran
type(syscinputscalardataf) function syscgetinputscalardataf_r4(data, datasize)
```


Create an input scalar data access type.

**Parameters**:

* **data**: - single-precision (32-bit) array of data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* datareal(kind=4), dimension(datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscinputscalardataf](structfortran_1_1syscinputscalardataf.md#structfortran_1_1syscinputscalardataf)) function

<a id="interfacefortran_1_1syscgetinputscalardataf_1a2f02a198f47a8b09900be803a7f5a033"></a>
### Function syscgetinputscalardataf\_r8

![][public]


```fortran
type(syscinputscalardataf) function syscgetinputscalardataf_r8(data, datasize)
```


Create an input scalar data access type.

**Parameters**:

* **data**: - double-precision (64-bit) array of data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* datareal(kind=8), dimension(datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscinputscalardataf](structfortran_1_1syscinputscalardataf.md#structfortran_1_1syscinputscalardataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)