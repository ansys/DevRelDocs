# Interface fortran::syscgetoutputvectordatacompactf

![][Fortran]
![][public]

**Definition**: `syscOutputVectorDataF.fi` (line 252)

Provide an interface to get output vector data with compact storage.



## Members

* [syscgetoutputvectordatacompactf\_r41d](interfacefortran_1_1syscgetoutputvectordatacompactf.md#interfacefortran_1_1syscgetoutputvectordatacompactf_1acdc5b43f5414f5ff41ed4863817f3913)
* [syscgetoutputvectordatacompactf\_r42d](interfacefortran_1_1syscgetoutputvectordatacompactf.md#interfacefortran_1_1syscgetoutputvectordatacompactf_1a8c0cdd231f0e7965e6b8700e7ac6d6d4)
* [syscgetoutputvectordatacompactf\_r81d](interfacefortran_1_1syscgetoutputvectordatacompactf.md#interfacefortran_1_1syscgetoutputvectordatacompactf_1aa40e1e467345db621dc7880c70df817a)
* [syscgetoutputvectordatacompactf\_r82d](interfacefortran_1_1syscgetoutputvectordatacompactf.md#interfacefortran_1_1syscgetoutputvectordatacompactf_1a2ea4f2a47578c24d4e70576ad792840e)

## Public functions

<a id="interfacefortran_1_1syscgetoutputvectordatacompactf_1acdc5b43f5414f5ff41ed4863817f3913"></a>
### Function syscgetoutputvectordatacompactf\_r41d

![][public]

```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatacompactf_r41d(data, dataSize)
```

Create an output vector data access type with compact storage.

**Parameters**:

* **data**: - array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutputvectordatacompactf_1aa40e1e467345db621dc7880c70df817a"></a>
### Function syscgetoutputvectordatacompactf\_r81d

![][public]

```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatacompactf_r81d(data, dataSize)
```

Create an output vector data access type with compact storage.

**Parameters**:

* **data**: - array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutputvectordatacompactf_1a8c0cdd231f0e7965e6b8700e7ac6d6d4"></a>
### Function syscgetoutputvectordatacompactf\_r42d

![][public]

```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatacompactf_r42d(vals, nElems)
```

Create an output vector data access type with compact storage.

**Parameters**:

* **vals**: - two-dimensional array of single-precision data
* **nElems**: - number of vectors.



**Parameters**:

* valsvals
* nElemsnElems

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutputvectordatacompactf_1a2ea4f2a47578c24d4e70576ad792840e"></a>
### Function syscgetoutputvectordatacompactf\_r82d

![][public]

```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatacompactf_r82d(vals, nElems)
```

Create an output vector data access type with compact storage.

**Parameters**:

* **vals**: - two-dimensional array of double-precision data
* **nElems**: - number of vectors.



**Parameters**:

* valsvals
* nElemsnElems

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)