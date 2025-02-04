# Interface fortran::syscgetoutputvectordatacompactdimf

![][Fortran]
![][public]

**Definition**: `syscOutputVectorDataF.fi` (line 341)

Provide an interface to get output vector data with compact storage based on dimension.



## Members

* [syscgetoutputvectordatacompactdimf\_r41d](interfacefortran_1_1syscgetoutputvectordatacompactdimf.md#interfacefortran_1_1syscgetoutputvectordatacompactdimf_1aad1f52de474bf1aeec885d57e4bd097d)
* [syscgetoutputvectordatacompactdimf\_r42d](interfacefortran_1_1syscgetoutputvectordatacompactdimf.md#interfacefortran_1_1syscgetoutputvectordatacompactdimf_1ac97fc60c227f8db5e1a65611003247ee)
* [syscgetoutputvectordatacompactdimf\_r81d](interfacefortran_1_1syscgetoutputvectordatacompactdimf.md#interfacefortran_1_1syscgetoutputvectordatacompactdimf_1ae280ff8ac7fd97c342989d70030340ef)
* [syscgetoutputvectordatacompactdimf\_r82d](interfacefortran_1_1syscgetoutputvectordatacompactdimf.md#interfacefortran_1_1syscgetoutputvectordatacompactdimf_1aa55a92ae3afcc6aeb3bc18a86fd654a5)

## Public functions

<a id="interfacefortran_1_1syscgetoutputvectordatacompactdimf_1aad1f52de474bf1aeec885d57e4bd097d"></a>
### Function syscgetoutputvectordatacompactdimf\_r41d

![][public]

```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatacompactdimf_r41d(data, dataSize, dimension)
```

Create an output vector data access type with compact storage based on dimension.

**Parameters**:

* **data**: - array of single-precision data
* **dataSize**: - number of vectors.
* **dimension**: - dimension of vectors.



**Parameters**:

* datadata
* dataSizedataSize
* dimensiondimension

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutputvectordatacompactdimf_1ae280ff8ac7fd97c342989d70030340ef"></a>
### Function syscgetoutputvectordatacompactdimf\_r81d

![][public]

```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatacompactdimf_r81d(data, dataSize, dimension)
```

Create an output vector data access type with compact storage based on dimension.

**Parameters**:

* **data**: - array of double-precision data
* **dataSize**: - number of vectors
* **dimension**: - dimension of vectors.



**Parameters**:

* datadata
* dataSizedataSize
* dimensiondimension

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutputvectordatacompactdimf_1ac97fc60c227f8db5e1a65611003247ee"></a>
### Function syscgetoutputvectordatacompactdimf\_r42d

![][public]

```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatacompactdimf_r42d(vals, nElems, dimension)
```

Create an output vector data access type with compact storage based on dimension.

**Parameters**:

* **vals**: - two-dimensional array of single-precision data
* **nElems**: - number of vectors.
* **dimension**: - dimension of vectors.



**Parameters**:

* valsvals
* nElemsnElems
* dimensiondimension

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutputvectordatacompactdimf_1aa55a92ae3afcc6aeb3bc18a86fd654a5"></a>
### Function syscgetoutputvectordatacompactdimf\_r82d

![][public]

```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatacompactdimf_r82d(vals, nElems, dimension)
```

Create an output vector data access type with compact storage based on dimension.

**Parameters**:

* **vals**: - two-dimensional array of double-precision data
* **nElems**: - number of vectors.
* **dimension**: - dimension of vectors.



**Parameters**:

* valsvals
* nElemsnElems
* dimensiondimension

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)