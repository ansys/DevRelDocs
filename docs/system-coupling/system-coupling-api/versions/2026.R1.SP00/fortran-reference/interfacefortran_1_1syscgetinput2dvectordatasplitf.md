# Interface fortran::syscgetinput2dvectordatasplitf

![][Fortran]
![][public]

**Definition**: `syscInputVectorDataF.fi` (line 147)

Provide an interface to get 2D input vector data.



## Members

* [syscgetinput2dvectordatasplitf\_r42d](interfacefortran_1_1syscgetinput2dvectordatasplitf.md#interfacefortran_1_1syscgetinput2dvectordatasplitf_1afdd442b99555d504ed7ae6452f05d4ec)
* [syscgetinput2dvectordatasplitf\_r43a](interfacefortran_1_1syscgetinput2dvectordatasplitf.md#interfacefortran_1_1syscgetinput2dvectordatasplitf_1ac3a4f638961a67225f5547f38ee4e409)
* [syscgetinput2dvectordatasplitf\_r82d](interfacefortran_1_1syscgetinput2dvectordatasplitf.md#interfacefortran_1_1syscgetinput2dvectordatasplitf_1a6a314a0093b9fc2c5f2d5cac730d29b6)
* [syscgetinput2dvectordatasplitf\_r83a](interfacefortran_1_1syscgetinput2dvectordatasplitf.md#interfacefortran_1_1syscgetinput2dvectordatasplitf_1a7412d1de460be591d377e347870e8b2d)

## Public functions

<a id="interfacefortran_1_1syscgetinput2dvectordatasplitf_1ac3a4f638961a67225f5547f38ee4e409"></a>
### Function syscgetinput2dvectordatasplitf\_r43a

![][public]

```fortran
type(syscinputvectordataf) function syscgetinput2dvectordatasplitf_r43a(data0, data1, dataSize)
```

Create an 2D input vector data access type with split storage.

**Parameters**:

* **data0**: - first array of single-precision data
* **data1**: - second array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* data0data0
* data1data1
* dataSizedataSize

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinput2dvectordatasplitf_1a7412d1de460be591d377e347870e8b2d"></a>
### Function syscgetinput2dvectordatasplitf\_r83a

![][public]

```fortran
type(syscinputvectordataf) function syscgetinput2dvectordatasplitf_r83a(data0, data1, dataSize)
```

Create an 2D input vector data access type with split storage.

**Parameters**:

* **data0**: - first array of double-precision data
* **data1**: - second array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* data0data0
* data1data1
* dataSizedataSize

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinput2dvectordatasplitf_1afdd442b99555d504ed7ae6452f05d4ec"></a>
### Function syscgetinput2dvectordatasplitf\_r42d

![][public]

```fortran
type(syscinputvectordataf) function syscgetinput2dvectordatasplitf_r42d(data, dataSize)
```

Create an 2D input vector data access type with split storage.

**Parameters**:

* **data**: - two-dimensional array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinput2dvectordatasplitf_1a6a314a0093b9fc2c5f2d5cac730d29b6"></a>
### Function syscgetinput2dvectordatasplitf\_r82d

![][public]

```fortran
type(syscinputvectordataf) function syscgetinput2dvectordatasplitf_r82d(data, dataSize)
```

Create an 2D input vector data access type with split storage.

**Parameters**:

* **data**: - two-dimensional array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)