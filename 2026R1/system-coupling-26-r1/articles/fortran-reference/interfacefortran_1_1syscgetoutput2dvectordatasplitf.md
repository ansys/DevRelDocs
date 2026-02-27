# Interface fortran::syscgetoutput2dvectordatasplitf

![][Fortran]
![][public]

**Definition**: `syscOutputVectorDataF.fi` (line 161)

Provide an interface to get 2D output vector data with split storage.



## Members

* [syscgetoutput2dvectordatasplitf\_r42d](interfacefortran_1_1syscgetoutput2dvectordatasplitf.md#interfacefortran_1_1syscgetoutput2dvectordatasplitf_1aa5e80f262628a34a173690188d4b4c08)
* [syscgetoutput2dvectordatasplitf\_r43a](interfacefortran_1_1syscgetoutput2dvectordatasplitf.md#interfacefortran_1_1syscgetoutput2dvectordatasplitf_1a523ebf1dd2765400b32348ab04b56f49)
* [syscgetoutput2dvectordatasplitf\_r82d](interfacefortran_1_1syscgetoutput2dvectordatasplitf.md#interfacefortran_1_1syscgetoutput2dvectordatasplitf_1a37c23993af29b2f1d3d92f2df5b65ce4)
* [syscgetoutput2dvectordatasplitf\_r83a](interfacefortran_1_1syscgetoutput2dvectordatasplitf.md#interfacefortran_1_1syscgetoutput2dvectordatasplitf_1a1475be70436d902a27804e59ddac08b5)

## Public functions

<a id="interfacefortran_1_1syscgetoutput2dvectordatasplitf_1a523ebf1dd2765400b32348ab04b56f49"></a>
### Function syscgetoutput2dvectordatasplitf\_r43a

![][public]


```fortran
type(syscoutputvectordataf) function syscgetoutput2dvectordatasplitf_r43a(data0, data1, datasize)
```


Create an 2D output vector data access type with split storage.

**Parameters**:

* **data0**: - first array of single-precision data
* **data1**: - second array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* data0real(kind=4), dimension(datasize), intent(in), target
* data1real(kind=4), dimension(datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutput2dvectordatasplitf_1a1475be70436d902a27804e59ddac08b5"></a>
### Function syscgetoutput2dvectordatasplitf\_r83a

![][public]


```fortran
type(syscoutputvectordataf) function syscgetoutput2dvectordatasplitf_r83a(data0, data1, datasize)
```


Create an 2D output vector data access type with split storage.

**Parameters**:

* **data0**: - first array of double-precision data
* **data1**: - second array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* data0real(kind=8), dimension(datasize), intent(in), target
* data1real(kind=8), dimension(datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutput2dvectordatasplitf_1aa5e80f262628a34a173690188d4b4c08"></a>
### Function syscgetoutput2dvectordatasplitf\_r42d

![][public]


```fortran
type(syscoutputvectordataf) function syscgetoutput2dvectordatasplitf_r42d(data, datasize)
```


Create an 2D output vector data access type with split storage.

**Parameters**:

* **data**: - two-dimensional array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datareal(kind=4), dimension(datasize, 2), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutput2dvectordatasplitf_1a37c23993af29b2f1d3d92f2df5b65ce4"></a>
### Function syscgetoutput2dvectordatasplitf\_r82d

![][public]


```fortran
type(syscoutputvectordataf) function syscgetoutput2dvectordatasplitf_r82d(vals, nelems)
```


Create an 2D output vector data access type with split storage.

**Parameters**:

* **vals**: - two-dimensional array of double-precision data
* **nElems**: - number of vectors.



**Parameters**:

* valsreal(kind=8), dimension(nelems, 2), intent(in), target
* nelemsinteger(kind=8), intent(in)

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)