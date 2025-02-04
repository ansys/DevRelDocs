# Interface fortran::syscgetinputvectordatacompactdimf

![][Fortran]
![][public]

**Definition**: `syscInputVectorDataF.fi` (line 301)

Provide an interface to get input vector data with compact storage based on dimension.



## Members

* [syscgetinputvectordatacompactdimf\_r41d](interfacefortran_1_1syscgetinputvectordatacompactdimf.md#interfacefortran_1_1syscgetinputvectordatacompactdimf_1aa3d515558f3000a9fb0665a9ae28eeaa)
* [syscgetinputvectordatacompactdimf\_r42d](interfacefortran_1_1syscgetinputvectordatacompactdimf.md#interfacefortran_1_1syscgetinputvectordatacompactdimf_1ac3ae853697a231bd047767a7f3585854)
* [syscgetinputvectordatacompactdimf\_r81d](interfacefortran_1_1syscgetinputvectordatacompactdimf.md#interfacefortran_1_1syscgetinputvectordatacompactdimf_1a8586f25cee2cac6419af313ab0c5b6cc)
* [syscgetinputvectordatacompactdimf\_r82d](interfacefortran_1_1syscgetinputvectordatacompactdimf.md#interfacefortran_1_1syscgetinputvectordatacompactdimf_1a4974af83de7113830927bec0d27f67b7)

## Public functions

<a id="interfacefortran_1_1syscgetinputvectordatacompactdimf_1aa3d515558f3000a9fb0665a9ae28eeaa"></a>
### Function syscgetinputvectordatacompactdimf\_r41d

![][public]

```fortran
type(syscinputvectordataf) function syscgetinputvectordatacompactdimf_r41d(data, dataSize, dimension)
```

Create an input vector data access type with compact storage. based on dimension.

**Parameters**:

* **data**: - array of single-precision data
* **dataSize**: - number of vectors.
* **dimension**: - dimension of vectors.



**Parameters**:

* datadata
* dataSizedataSize
* dimensiondimension

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinputvectordatacompactdimf_1a8586f25cee2cac6419af313ab0c5b6cc"></a>
### Function syscgetinputvectordatacompactdimf\_r81d

![][public]

```fortran
type(syscinputvectordataf) function syscgetinputvectordatacompactdimf_r81d(data, dataSize, dimension)
```

Create an input vector data access type with compact storage based on dimension.

**Parameters**:

* **data**: - array of double-precision data
* **dataSize**: - number of vectors.
* **dimension**: - dimension of vectors.



**Parameters**:

* datadata
* dataSizedataSize
* dimensiondimension

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinputvectordatacompactdimf_1ac3ae853697a231bd047767a7f3585854"></a>
### Function syscgetinputvectordatacompactdimf\_r42d

![][public]

```fortran
type(syscinputvectordataf) function syscgetinputvectordatacompactdimf_r42d(data, dataSize, dimension)
```

Create an input vector data access type with compact storage based on dimension.

**Parameters**:

* **data**: - two-dimensional array of single-precision data
* **dataSize**: - number of vectors.
* **dimension**: - dimension of vectors.



**Parameters**:

* datadata
* dataSizedataSize
* dimensiondimension

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

<a id="interfacefortran_1_1syscgetinputvectordatacompactdimf_1a4974af83de7113830927bec0d27f67b7"></a>
### Function syscgetinputvectordatacompactdimf\_r82d

![][public]

```fortran
type(syscinputvectordataf) function syscgetinputvectordatacompactdimf_r82d(data, dataSize, dimension)
```

Create an input vector data access type with compact storage based on dimension.

**Parameters**:

* **data**: - two-dimensional array of single-precision data
* **dataSize**: - number of vectors.
* **dimension**: - dimension of vectors.



**Parameters**:

* datadata
* dataSizedataSize
* dimensiondimension

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)