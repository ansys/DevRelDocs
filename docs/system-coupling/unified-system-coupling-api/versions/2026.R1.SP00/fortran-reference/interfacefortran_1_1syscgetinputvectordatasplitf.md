# Interface fortran::syscgetinputvectordatasplitf

![][Fortran]
![][public]

**Definition**: `syscInputVectorDataF.fi` (line 66)

Provide an interface to get input vector data with split storage.



## Members

* [syscgetinputvectordatasplitf\_r42d](interfacefortran_1_1syscgetinputvectordatasplitf.md#interfacefortran_1_1syscgetinputvectordatasplitf_1a02ff830298c4030e17a00c29c11f6fdc)
* [syscgetinputvectordatasplitf\_r43a](interfacefortran_1_1syscgetinputvectordatasplitf.md#interfacefortran_1_1syscgetinputvectordatasplitf_1ac15f5476d0246a2d3af5346da4a471c7)
* [syscgetinputvectordatasplitf\_r82d](interfacefortran_1_1syscgetinputvectordatasplitf.md#interfacefortran_1_1syscgetinputvectordatasplitf_1af7fc52c3c85229f91338d03143e38acf)
* [syscgetinputvectordatasplitf\_r83a](interfacefortran_1_1syscgetinputvectordatasplitf.md#interfacefortran_1_1syscgetinputvectordatasplitf_1aa2021613aad38965bc0cca4a389b0345)

## Public functions

<a id="interfacefortran_1_1syscgetinputvectordatasplitf_1ac15f5476d0246a2d3af5346da4a471c7"></a>
### Function syscgetinputvectordatasplitf\_r43a

![][public]


```fortran
type(syscinputvectordataf) function syscgetinputvectordatasplitf_r43a(data0, data1, data2, datasize)
```


Create an input vector data access type with split storage.

**Parameters**:

* **data0**: - first array of single-precision data
* **data1**: - second array of single-precision data
* **data2**: - third array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* data0real(kind=4), dimension(datasize), intent(in), target
* data1real(kind=4), dimension(datasize), intent(in), target
* data2real(kind=4), dimension(datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinputvectordatasplitf_1aa2021613aad38965bc0cca4a389b0345"></a>
### Function syscgetinputvectordatasplitf\_r83a

![][public]


```fortran
type(syscinputvectordataf) function syscgetinputvectordatasplitf_r83a(data0, data1, data2, datasize)
```


Create an input vector data access type with split storage.

**Parameters**:

* **data0**: - first array of double-precision data
* **data1**: - second array of double-precision data
* **data2**: - third array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* data0real(kind=8), dimension(datasize), intent(in), target
* data1real(kind=8), dimension(datasize), intent(in), target
* data2real(kind=8), dimension(datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinputvectordatasplitf_1a02ff830298c4030e17a00c29c11f6fdc"></a>
### Function syscgetinputvectordatasplitf\_r42d

![][public]


```fortran
type(syscinputvectordataf) function syscgetinputvectordatasplitf_r42d(data, datasize)
```


Create an input vector data access type with split storage.

**Parameters**:

* **data**: - two-dimensional array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datareal(kind=4), dimension(datasize, 3), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinputvectordatasplitf_1af7fc52c3c85229f91338d03143e38acf"></a>
### Function syscgetinputvectordatasplitf\_r82d

![][public]


```fortran
type(syscinputvectordataf) function syscgetinputvectordatasplitf_r82d(data, datasize)
```


Create an input vector data access type with split storage.

**Parameters**:

* **data**: - two-dimensional array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datareal(kind=8), dimension(datasize, 3), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)