# Interface fortran::syscgetoutputvectordatacompactdimf

![][Fortran]
![][public]

**Definition**: `syscOutputVectorDataF.fi` (line 341)

Provide an interface to get output vector data with compact storage based on dimension.



## Members

* [syscgetoutputvectordatacompactdimf\_r41d](interfacefortran_1_1syscgetoutputvectordatacompactdimf.md#interfacefortran_1_1syscgetoutputvectordatacompactdimf_1aedc8e83879293385707fa31ca60423c5)
* [syscgetoutputvectordatacompactdimf\_r42d](interfacefortran_1_1syscgetoutputvectordatacompactdimf.md#interfacefortran_1_1syscgetoutputvectordatacompactdimf_1aa6f57fdac01afa8baf2fb4c65fff2105)
* [syscgetoutputvectordatacompactdimf\_r81d](interfacefortran_1_1syscgetoutputvectordatacompactdimf.md#interfacefortran_1_1syscgetoutputvectordatacompactdimf_1ad755751b2c9488e37a4265918c065f34)
* [syscgetoutputvectordatacompactdimf\_r82d](interfacefortran_1_1syscgetoutputvectordatacompactdimf.md#interfacefortran_1_1syscgetoutputvectordatacompactdimf_1ae3140b7ae63584f639143d6374aa9240)

## Public functions

<a id="interfacefortran_1_1syscgetoutputvectordatacompactdimf_1aedc8e83879293385707fa31ca60423c5"></a>
### Function syscgetoutputvectordatacompactdimf\_r41d

![][public]


```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatacompactdimf_r41d(data, datasize, dimension)
```


Create an output vector data access type with compact storage based on dimension.

**Parameters**:

* **data**: - array of single-precision data
* **dataSize**: - number of vectors.
* **dimension**: - dimension of vectors.



**Parameters**:

* datareal(kind=4), dimension(datasize * dimension), intent(in), target
* datasizeinteger(kind=8), intent(in)
* dimensioninteger(kind=8), intent(in)

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutputvectordatacompactdimf_1ad755751b2c9488e37a4265918c065f34"></a>
### Function syscgetoutputvectordatacompactdimf\_r81d

![][public]


```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatacompactdimf_r81d(data, datasize, dimension)
```


Create an output vector data access type with compact storage based on dimension.

**Parameters**:

* **data**: - array of double-precision data
* **dataSize**: - number of vectors
* **dimension**: - dimension of vectors.



**Parameters**:

* datareal(kind=8), dimension(datasize * dimension), intent(in), target
* datasizeinteger(kind=8), intent(in)
* dimensioninteger(kind=8), intent(in)

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutputvectordatacompactdimf_1aa6f57fdac01afa8baf2fb4c65fff2105"></a>
### Function syscgetoutputvectordatacompactdimf\_r42d

![][public]


```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatacompactdimf_r42d(vals, nelems, dimension)
```


Create an output vector data access type with compact storage based on dimension.

**Parameters**:

* **vals**: - two-dimensional array of single-precision data
* **nElems**: - number of vectors.
* **dimension**: - dimension of vectors.



**Parameters**:

* valsreal(kind=4), dimension(dimension, nelems), intent(in), target
* nelemsinteger(kind=8), intent(in)
* dimensioninteger(kind=8), intent(in)

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutputvectordatacompactdimf_1ae3140b7ae63584f639143d6374aa9240"></a>
### Function syscgetoutputvectordatacompactdimf\_r82d

![][public]


```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatacompactdimf_r82d(vals, nelems, dimension)
```


Create an output vector data access type with compact storage based on dimension.

**Parameters**:

* **vals**: - two-dimensional array of double-precision data
* **nElems**: - number of vectors.
* **dimension**: - dimension of vectors.



**Parameters**:

* valsreal(kind=8), dimension(dimension, nelems), intent(in), target
* nelemsinteger(kind=8), intent(in)
* dimensioninteger(kind=8), intent(in)

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)