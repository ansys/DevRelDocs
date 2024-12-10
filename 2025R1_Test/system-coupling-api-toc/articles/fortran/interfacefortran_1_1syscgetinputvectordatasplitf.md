# Interface fortran::syscgetinputvectordatasplitf

![][Fortran]
![][public]

**Definition**: `syscInputVectorDataF.fi` (line 66)

Provide an interface to get input vector data with split storage.



## Members

* [syscgetinputvectordatasplitf\_r42d](interfacefortran_1_1syscgetinputvectordatasplitf.md#interfacefortran_1_1syscgetinputvectordatasplitf_1aad415cc2a63ce6d44c6b9d94f6b3bb33)
* [syscgetinputvectordatasplitf\_r43a](interfacefortran_1_1syscgetinputvectordatasplitf.md#interfacefortran_1_1syscgetinputvectordatasplitf_1ab81781eff68f8449ad2bc30a8fa450dd)
* [syscgetinputvectordatasplitf\_r82d](interfacefortran_1_1syscgetinputvectordatasplitf.md#interfacefortran_1_1syscgetinputvectordatasplitf_1aa71c26494dc42c0e18e4e0feca308012)
* [syscgetinputvectordatasplitf\_r83a](interfacefortran_1_1syscgetinputvectordatasplitf.md#interfacefortran_1_1syscgetinputvectordatasplitf_1a67b8a204cee3ad2e6ab75cc01cf1bf49)

## Public functions

<a id="interfacefortran_1_1syscgetinputvectordatasplitf_1ab81781eff68f8449ad2bc30a8fa450dd"></a>
### Function syscgetinputvectordatasplitf\_r43a

![][public]

```fortran
type(syscinputvectordataf) function syscgetinputvectordatasplitf_r43a(data0, data1, data2, dataSize)
```

Create an input vector data access type with split storage.

**Parameters**:

* **data0**: - first array of single-precision data
* **data1**: - second array of single-precision data
* **data2**: - third array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* data0data0
* data1data1
* data2data2
* dataSizedataSize

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinputvectordatasplitf_1a67b8a204cee3ad2e6ab75cc01cf1bf49"></a>
### Function syscgetinputvectordatasplitf\_r83a

![][public]

```fortran
type(syscinputvectordataf) function syscgetinputvectordatasplitf_r83a(data0, data1, data2, dataSize)
```

Create an input vector data access type with split storage.

**Parameters**:

* **data0**: - first array of double-precision data
* **data1**: - second array of double-precision data
* **data2**: - third array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* data0data0
* data1data1
* data2data2
* dataSizedataSize

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinputvectordatasplitf_1aad415cc2a63ce6d44c6b9d94f6b3bb33"></a>
### Function syscgetinputvectordatasplitf\_r42d

![][public]

```fortran
type(syscinputvectordataf) function syscgetinputvectordatasplitf_r42d(data, dataSize)
```

Create an input vector data access type with split storage.

**Parameters**:

* **data**: - two-dimensional array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinputvectordatasplitf_1aa71c26494dc42c0e18e4e0feca308012"></a>
### Function syscgetinputvectordatasplitf\_r82d

![][public]

```fortran
type(syscinputvectordataf) function syscgetinputvectordatasplitf_r82d(data, dataSize)
```

Create an input vector data access type with split storage.

**Parameters**:

* **data**: - two-dimensional array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)