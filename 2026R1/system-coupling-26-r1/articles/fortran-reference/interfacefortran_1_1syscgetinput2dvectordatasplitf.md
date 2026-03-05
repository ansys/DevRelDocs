# Interface fortran::syscgetinput2dvectordatasplitf

![][Fortran]
![][public]

**Definition**: `syscInputVectorDataF.fi` (line 147)

Provide an interface to get 2D input vector data.



## Members

* [syscgetinput2dvectordatasplitf\_r42d](interfacefortran_1_1syscgetinput2dvectordatasplitf.md#interfacefortran_1_1syscgetinput2dvectordatasplitf_1a38eef9d6b15010665dde7630173672bf)
* [syscgetinput2dvectordatasplitf\_r43a](interfacefortran_1_1syscgetinput2dvectordatasplitf.md#interfacefortran_1_1syscgetinput2dvectordatasplitf_1aba1e34648b865818b790e9e3c3535515)
* [syscgetinput2dvectordatasplitf\_r82d](interfacefortran_1_1syscgetinput2dvectordatasplitf.md#interfacefortran_1_1syscgetinput2dvectordatasplitf_1a47e703cd04fbd5529273cf4a00736c08)
* [syscgetinput2dvectordatasplitf\_r83a](interfacefortran_1_1syscgetinput2dvectordatasplitf.md#interfacefortran_1_1syscgetinput2dvectordatasplitf_1a33060e24689c6802f7e1567a3b4675a8)

## Public functions

<a id="interfacefortran_1_1syscgetinput2dvectordatasplitf_1aba1e34648b865818b790e9e3c3535515"></a>
### Function syscgetinput2dvectordatasplitf\_r43a

![][public]


```fortran
type(syscinputvectordataf) function syscgetinput2dvectordatasplitf_r43a(data0, data1, datasize)
```


Create an 2D input vector data access type with split storage.

**Parameters**:

* **data0**: - first array of single-precision data
* **data1**: - second array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* data0real(kind=4), dimension(datasize), intent(in), target
* data1real(kind=4), dimension(datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinput2dvectordatasplitf_1a33060e24689c6802f7e1567a3b4675a8"></a>
### Function syscgetinput2dvectordatasplitf\_r83a

![][public]


```fortran
type(syscinputvectordataf) function syscgetinput2dvectordatasplitf_r83a(data0, data1, datasize)
```


Create an 2D input vector data access type with split storage.

**Parameters**:

* **data0**: - first array of double-precision data
* **data1**: - second array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* data0real(kind=8), dimension(datasize), intent(in), target
* data1real(kind=8), dimension(datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinput2dvectordatasplitf_1a38eef9d6b15010665dde7630173672bf"></a>
### Function syscgetinput2dvectordatasplitf\_r42d

![][public]


```fortran
type(syscinputvectordataf) function syscgetinput2dvectordatasplitf_r42d(data, datasize)
```


Create an 2D input vector data access type with split storage.

**Parameters**:

* **data**: - two-dimensional array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datareal(kind=4), dimension(datasize, 2), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinput2dvectordatasplitf_1a47e703cd04fbd5529273cf4a00736c08"></a>
### Function syscgetinput2dvectordatasplitf\_r82d

![][public]


```fortran
type(syscinputvectordataf) function syscgetinput2dvectordatasplitf_r82d(data, datasize)
```


Create an 2D input vector data access type with split storage.

**Parameters**:

* **data**: - two-dimensional array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datareal(kind=8), dimension(datasize, 2), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)