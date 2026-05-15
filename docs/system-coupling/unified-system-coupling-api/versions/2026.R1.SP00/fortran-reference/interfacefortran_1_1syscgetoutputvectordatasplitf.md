# Interface fortran::syscgetoutputvectordatasplitf

![][Fortran]
![][public]

**Definition**: `syscOutputVectorDataF.fi` (line 66)

Provide an interface to get output vector data with split storage.



## Members

* [syscgetoutputvectordatasplitf\_r42d](interfacefortran_1_1syscgetoutputvectordatasplitf.md#interfacefortran_1_1syscgetoutputvectordatasplitf_1a8440f1e59e492db3e1749ad4f2f9b5e1)
* [syscgetoutputvectordatasplitf\_r43a](interfacefortran_1_1syscgetoutputvectordatasplitf.md#interfacefortran_1_1syscgetoutputvectordatasplitf_1aa474027446856bef01fed2983d4a1d56)
* [syscgetoutputvectordatasplitf\_r82d](interfacefortran_1_1syscgetoutputvectordatasplitf.md#interfacefortran_1_1syscgetoutputvectordatasplitf_1a12c383106114503e04be905d1bbd986e)
* [syscgetoutputvectordatasplitf\_r83a](interfacefortran_1_1syscgetoutputvectordatasplitf.md#interfacefortran_1_1syscgetoutputvectordatasplitf_1a459ea501fed493e4ded1484f897b4a59)

## Public functions

<a id="interfacefortran_1_1syscgetoutputvectordatasplitf_1aa474027446856bef01fed2983d4a1d56"></a>
### Function syscgetoutputvectordatasplitf\_r43a

![][public]


```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatasplitf_r43a(data0, data1, data2, datasize)
```


Create an output vector data access type with split storage.

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

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutputvectordatasplitf_1a459ea501fed493e4ded1484f897b4a59"></a>
### Function syscgetoutputvectordatasplitf\_r83a

![][public]


```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatasplitf_r83a(data0, data1, data2, datasize)
```


Create an output vector data access type with split storage.

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

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutputvectordatasplitf_1a8440f1e59e492db3e1749ad4f2f9b5e1"></a>
### Function syscgetoutputvectordatasplitf\_r42d

![][public]


```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatasplitf_r42d(data, datasize)
```


Create an output vector data access type with split storage.

**Parameters**:

* **data**: - two-dimensional array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datareal(kind=4), dimension(datasize, 3), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutputvectordatasplitf_1a12c383106114503e04be905d1bbd986e"></a>
### Function syscgetoutputvectordatasplitf\_r82d

![][public]


```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatasplitf_r82d(vals, nelems)
```


Create an output vector data access type with split storage.

**Parameters**:

* **vals**: - two-dimensional array of double-precision data
* **nElems**: - number of vectors.



**Parameters**:

* valsreal(kind=8), dimension(nelems, 3), intent(in), target
* nelemsinteger(kind=8), intent(in)

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)