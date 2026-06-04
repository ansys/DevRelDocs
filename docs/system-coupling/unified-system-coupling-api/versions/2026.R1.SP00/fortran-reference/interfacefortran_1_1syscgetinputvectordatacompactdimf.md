# Interface fortran::syscgetinputvectordatacompactdimf

![][Fortran]
![][public]

**Definition**: `syscInputVectorDataF.fi` (line 301)

Provide an interface to get input vector data with compact storage based on dimension.



## Members

* [syscgetinputvectordatacompactdimf\_r41d](interfacefortran_1_1syscgetinputvectordatacompactdimf.md#interfacefortran_1_1syscgetinputvectordatacompactdimf_1a90611ff0a3cd16a7632b5da9675e773e)
* [syscgetinputvectordatacompactdimf\_r42d](interfacefortran_1_1syscgetinputvectordatacompactdimf.md#interfacefortran_1_1syscgetinputvectordatacompactdimf_1a0a1f5b5e40373789ad76e945566ab7e2)
* [syscgetinputvectordatacompactdimf\_r81d](interfacefortran_1_1syscgetinputvectordatacompactdimf.md#interfacefortran_1_1syscgetinputvectordatacompactdimf_1a66e38d22848c3522a400f525b6c4c694)
* [syscgetinputvectordatacompactdimf\_r82d](interfacefortran_1_1syscgetinputvectordatacompactdimf.md#interfacefortran_1_1syscgetinputvectordatacompactdimf_1a32eb946bfa53aa986f95b6654e005f27)

## Public functions

<a id="interfacefortran_1_1syscgetinputvectordatacompactdimf_1a90611ff0a3cd16a7632b5da9675e773e"></a>
### Function syscgetinputvectordatacompactdimf\_r41d

![][public]


```fortran
type(syscinputvectordataf) function syscgetinputvectordatacompactdimf_r41d(data, datasize, dimension)
```


Create an input vector data access type with compact storage. based on dimension.

**Parameters**:

* **data**: - array of single-precision data
* **dataSize**: - number of vectors.
* **dimension**: - dimension of vectors.



**Parameters**:

* datareal(kind=4), dimension(datasize * dimension), intent(in), target
* datasizeinteger(kind=8), intent(in)
* dimensioninteger(kind=8), intent(in)

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinputvectordatacompactdimf_1a66e38d22848c3522a400f525b6c4c694"></a>
### Function syscgetinputvectordatacompactdimf\_r81d

![][public]


```fortran
type(syscinputvectordataf) function syscgetinputvectordatacompactdimf_r81d(data, datasize, dimension)
```


Create an input vector data access type with compact storage based on dimension.

**Parameters**:

* **data**: - array of double-precision data
* **dataSize**: - number of vectors.
* **dimension**: - dimension of vectors.



**Parameters**:

* datareal(kind=8), dimension(datasize * dimension), intent(in), target
* datasizeinteger(kind=8), intent(in)
* dimensioninteger(kind=8), intent(in)

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinputvectordatacompactdimf_1a0a1f5b5e40373789ad76e945566ab7e2"></a>
### Function syscgetinputvectordatacompactdimf\_r42d

![][public]


```fortran
type(syscinputvectordataf) function syscgetinputvectordatacompactdimf_r42d(data, datasize, dimension)
```


Create an input vector data access type with compact storage based on dimension.

**Parameters**:

* **data**: - two-dimensional array of single-precision data
* **dataSize**: - number of vectors.
* **dimension**: - dimension of vectors.



**Parameters**:

* datareal(kind=4), dimension(dimension, datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)
* dimensioninteger(kind=8), intent(in)

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinputvectordatacompactdimf_1a32eb946bfa53aa986f95b6654e005f27"></a>
### Function syscgetinputvectordatacompactdimf\_r82d

![][public]


```fortran
type(syscinputvectordataf) function syscgetinputvectordatacompactdimf_r82d(data, datasize, dimension)
```


Create an input vector data access type with compact storage based on dimension.

**Parameters**:

* **data**: - two-dimensional array of single-precision data
* **dataSize**: - number of vectors.
* **dimension**: - dimension of vectors.



**Parameters**:

* datareal(kind=8), dimension(dimension, datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)
* dimensioninteger(kind=8), intent(in)

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)