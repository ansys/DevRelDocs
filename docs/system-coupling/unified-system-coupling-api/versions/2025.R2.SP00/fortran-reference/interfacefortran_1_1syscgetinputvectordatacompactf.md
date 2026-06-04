# Interface fortran::syscgetinputvectordatacompactf

![][Fortran]
![][public]

**Definition**: `syscInputVectorDataF.fi` (line 225)

Provide an interface to get input vector data with compact storage.



## Members

* [syscgetinputvectordatacompactf\_r41d](interfacefortran_1_1syscgetinputvectordatacompactf.md#interfacefortran_1_1syscgetinputvectordatacompactf_1abba0d92f6ea7ac6452bc8af2ca0b5de5)
* [syscgetinputvectordatacompactf\_r42d](interfacefortran_1_1syscgetinputvectordatacompactf.md#interfacefortran_1_1syscgetinputvectordatacompactf_1af4264f8d072aab82c3ad384e94227cab)
* [syscgetinputvectordatacompactf\_r81d](interfacefortran_1_1syscgetinputvectordatacompactf.md#interfacefortran_1_1syscgetinputvectordatacompactf_1a61ff5c0acf1426bdb2a2f3632438de88)
* [syscgetinputvectordatacompactf\_r82d](interfacefortran_1_1syscgetinputvectordatacompactf.md#interfacefortran_1_1syscgetinputvectordatacompactf_1a1e742cf1102a13eab00b4488c2174e9d)

## Public functions

<a id="interfacefortran_1_1syscgetinputvectordatacompactf_1abba0d92f6ea7ac6452bc8af2ca0b5de5"></a>
### Function syscgetinputvectordatacompactf\_r41d

![][public]

```fortran
type(syscinputvectordataf) function syscgetinputvectordatacompactf_r41d(data, dataSize)
```

Create an input vector data access type with compact storage.

**Parameters**:

* **data**: - array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinputvectordatacompactf_1a61ff5c0acf1426bdb2a2f3632438de88"></a>
### Function syscgetinputvectordatacompactf\_r81d

![][public]

```fortran
type(syscinputvectordataf) function syscgetinputvectordatacompactf_r81d(data, dataSize)
```

Create an input vector data access type with compact storage.

**Parameters**:

* **data**: - array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinputvectordatacompactf_1af4264f8d072aab82c3ad384e94227cab"></a>
### Function syscgetinputvectordatacompactf\_r42d

![][public]

```fortran
type(syscinputvectordataf) function syscgetinputvectordatacompactf_r42d(data, dataSize)
```

Create an input vector data access type with compact storage.

**Parameters**:

* **data**: - two-dimensional array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinputvectordatacompactf_1a1e742cf1102a13eab00b4488c2174e9d"></a>
### Function syscgetinputvectordatacompactf\_r82d

![][public]

```fortran
type(syscinputvectordataf) function syscgetinputvectordatacompactf_r82d(data, dataSize)
```

Create an input vector data access type with compact storage.

**Parameters**:

* **data**: - two-dimensional array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)