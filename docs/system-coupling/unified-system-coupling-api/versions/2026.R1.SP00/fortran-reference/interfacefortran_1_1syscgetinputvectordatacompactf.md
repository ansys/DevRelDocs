# Interface fortran::syscgetinputvectordatacompactf

![][Fortran]
![][public]

**Definition**: `syscInputVectorDataF.fi` (line 225)

Provide an interface to get input vector data with compact storage.



## Members

* [syscgetinputvectordatacompactf\_r41d](interfacefortran_1_1syscgetinputvectordatacompactf.md#interfacefortran_1_1syscgetinputvectordatacompactf_1ae9d747913812dcf757fca97fbb845cd8)
* [syscgetinputvectordatacompactf\_r42d](interfacefortran_1_1syscgetinputvectordatacompactf.md#interfacefortran_1_1syscgetinputvectordatacompactf_1af593ebb3f385f62adf8bc81ff28d387d)
* [syscgetinputvectordatacompactf\_r81d](interfacefortran_1_1syscgetinputvectordatacompactf.md#interfacefortran_1_1syscgetinputvectordatacompactf_1af629a769e6956c978c9edd7db599a25c)
* [syscgetinputvectordatacompactf\_r82d](interfacefortran_1_1syscgetinputvectordatacompactf.md#interfacefortran_1_1syscgetinputvectordatacompactf_1af11c22469f252a6f1ae2d211c822722b)

## Public functions

<a id="interfacefortran_1_1syscgetinputvectordatacompactf_1ae9d747913812dcf757fca97fbb845cd8"></a>
### Function syscgetinputvectordatacompactf\_r41d

![][public]


```fortran
type(syscinputvectordataf) function syscgetinputvectordatacompactf_r41d(data, datasize)
```


Create an input vector data access type with compact storage.

**Parameters**:

* **data**: - array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datareal(kind=4), dimension(datasize * 3), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinputvectordatacompactf_1af629a769e6956c978c9edd7db599a25c"></a>
### Function syscgetinputvectordatacompactf\_r81d

![][public]


```fortran
type(syscinputvectordataf) function syscgetinputvectordatacompactf_r81d(data, datasize)
```


Create an input vector data access type with compact storage.

**Parameters**:

* **data**: - array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datareal(kind=8), dimension(datasize * 3), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinputvectordatacompactf_1af593ebb3f385f62adf8bc81ff28d387d"></a>
### Function syscgetinputvectordatacompactf\_r42d

![][public]


```fortran
type(syscinputvectordataf) function syscgetinputvectordatacompactf_r42d(data, datasize)
```


Create an input vector data access type with compact storage.

**Parameters**:

* **data**: - two-dimensional array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datareal(kind=4), dimension(3, datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinputvectordatacompactf_1af11c22469f252a6f1ae2d211c822722b"></a>
### Function syscgetinputvectordatacompactf\_r82d

![][public]


```fortran
type(syscinputvectordataf) function syscgetinputvectordatacompactf_r82d(data, datasize)
```


Create an input vector data access type with compact storage.

**Parameters**:

* **data**: - two-dimensional array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datareal(kind=8), dimension(3, datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)