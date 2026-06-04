# Interface fortran::syscgetoutputvectordatasplitf

![][Fortran]
![][public]

**Definition**: `syscOutputVectorDataF.fi` (line 66)

Provide an interface to get output vector data with split storage.



## Members

* [syscgetoutputvectordatasplitf\_r42d](interfacefortran_1_1syscgetoutputvectordatasplitf.md#interfacefortran_1_1syscgetoutputvectordatasplitf_1adf74c91be8f957f17695d7ce6f0cd283)
* [syscgetoutputvectordatasplitf\_r43a](interfacefortran_1_1syscgetoutputvectordatasplitf.md#interfacefortran_1_1syscgetoutputvectordatasplitf_1a7c3c0f6b9e239fdc0ec4258ce854c92f)
* [syscgetoutputvectordatasplitf\_r82d](interfacefortran_1_1syscgetoutputvectordatasplitf.md#interfacefortran_1_1syscgetoutputvectordatasplitf_1a5c4fdc29443558a0cdf0341af36eea73)
* [syscgetoutputvectordatasplitf\_r83a](interfacefortran_1_1syscgetoutputvectordatasplitf.md#interfacefortran_1_1syscgetoutputvectordatasplitf_1a43e775dde9ec32a773813c2704ef7ad7)

## Public functions

<a id="interfacefortran_1_1syscgetoutputvectordatasplitf_1a7c3c0f6b9e239fdc0ec4258ce854c92f"></a>
### Function syscgetoutputvectordatasplitf\_r43a

![][public]

```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatasplitf_r43a(data0, data1, data2, dataSize)
```

Create an output vector data access type with split storage.

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

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutputvectordatasplitf_1a43e775dde9ec32a773813c2704ef7ad7"></a>
### Function syscgetoutputvectordatasplitf\_r83a

![][public]

```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatasplitf_r83a(data0, data1, data2, dataSize)
```

Create an output vector data access type with split storage.

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

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutputvectordatasplitf_1adf74c91be8f957f17695d7ce6f0cd283"></a>
### Function syscgetoutputvectordatasplitf\_r42d

![][public]

```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatasplitf_r42d(data, dataSize)
```

Create an output vector data access type with split storage.

**Parameters**:

* **data**: - two-dimensional array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutputvectordatasplitf_1a5c4fdc29443558a0cdf0341af36eea73"></a>
### Function syscgetoutputvectordatasplitf\_r82d

![][public]

```fortran
type(syscoutputvectordataf) function syscgetoutputvectordatasplitf_r82d(vals, nElems)
```

Create an output vector data access type with split storage.

**Parameters**:

* **vals**: - two-dimensional array of double-precision data
* **nElems**: - number of vectors.



**Parameters**:

* valsvals
* nElemsnElems

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)