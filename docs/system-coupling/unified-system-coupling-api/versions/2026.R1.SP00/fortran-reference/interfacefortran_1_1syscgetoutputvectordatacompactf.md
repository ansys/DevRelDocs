# Interface fortran::syscgetoutputvectordatacompactf

![][Fortran]
![][public]

**Definition**: `syscOutputVectorDataF.fi` (line 252)

Provide an interface to get output vector data with compact storage.



## Members

* [syscgetoutputvectordatacompactf\_r41d](interfacefortran_1_1syscgetoutputvectordatacompactf.md#interfacefortran_1_1syscgetoutputvectordatacompactf_1acf705e1a126f78a8843431323aab83d0)
* [syscgetoutputvectordatacompactf\_r42d](interfacefortran_1_1syscgetoutputvectordatacompactf.md#interfacefortran_1_1syscgetoutputvectordatacompactf_1a3f4a69602f581f85f9addab7c9136799)
* [syscgetoutputvectordatacompactf\_r81d](interfacefortran_1_1syscgetoutputvectordatacompactf.md#interfacefortran_1_1syscgetoutputvectordatacompactf_1a94d00e261f7b1a7cb6657c68ca62a805)
* [syscgetoutputvectordatacompactf\_r82d](interfacefortran_1_1syscgetoutputvectordatacompactf.md#interfacefortran_1_1syscgetoutputvectordatacompactf_1a553c8b2fb703e98d75d95b37fde602cd)

## Public functions

<a id="interfacefortran_1_1syscgetoutputvectordatacompactf_1acf705e1a126f78a8843431323aab83d0"></a>
### Function syscgetoutputvectordatacompactf\_r41d

![][public]


```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatacompactf_r41d(data, datasize)
```


Create an output vector data access type with compact storage.

**Parameters**:

* **data**: - array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datareal(kind=4), dimension(datasize * 3), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutputvectordatacompactf_1a94d00e261f7b1a7cb6657c68ca62a805"></a>
### Function syscgetoutputvectordatacompactf\_r81d

![][public]


```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatacompactf_r81d(data, datasize)
```


Create an output vector data access type with compact storage.

**Parameters**:

* **data**: - array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datareal(kind=8), dimension(datasize * 3), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutputvectordatacompactf_1a3f4a69602f581f85f9addab7c9136799"></a>
### Function syscgetoutputvectordatacompactf\_r42d

![][public]


```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatacompactf_r42d(vals, nelems)
```


Create an output vector data access type with compact storage.

**Parameters**:

* **vals**: - two-dimensional array of single-precision data
* **nElems**: - number of vectors.



**Parameters**:

* valsreal(kind=4), dimension(3, nelems), intent(in), target
* nelemsinteger(kind=8), intent(in)

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutputvectordatacompactf_1a553c8b2fb703e98d75d95b37fde602cd"></a>
### Function syscgetoutputvectordatacompactf\_r82d

![][public]


```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatacompactf_r82d(vals, nelems)
```


Create an output vector data access type with compact storage.

**Parameters**:

* **vals**: - two-dimensional array of double-precision data
* **nElems**: - number of vectors.



**Parameters**:

* valsreal(kind=8), dimension(3, nelems), intent(in), target
* nelemsinteger(kind=8), intent(in)

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)