# Interface fortran::syscgetoutput2dvectordatasplitf

![][Fortran]
![][public]

**Definition**: `syscOutputVectorDataF.fi` (line 161)

Provide an interface to get 2D output vector data with split storage.



## Members

* [syscgetoutput2dvectordatasplitf\_r42d](interfacefortran_1_1syscgetoutput2dvectordatasplitf.md#interfacefortran_1_1syscgetoutput2dvectordatasplitf_1aae4748249980002e1001566dc31bed22)
* [syscgetoutput2dvectordatasplitf\_r43a](interfacefortran_1_1syscgetoutput2dvectordatasplitf.md#interfacefortran_1_1syscgetoutput2dvectordatasplitf_1ae1bd1817d8aacbf3a4ad1485fbc30cff)
* [syscgetoutput2dvectordatasplitf\_r82d](interfacefortran_1_1syscgetoutput2dvectordatasplitf.md#interfacefortran_1_1syscgetoutput2dvectordatasplitf_1ac99b343b8da6f274dba1f46a447fa20c)
* [syscgetoutput2dvectordatasplitf\_r83a](interfacefortran_1_1syscgetoutput2dvectordatasplitf.md#interfacefortran_1_1syscgetoutput2dvectordatasplitf_1a3c044606dc8a679c2de08682ab149ea0)

## Public functions

<a id="interfacefortran_1_1syscgetoutput2dvectordatasplitf_1ae1bd1817d8aacbf3a4ad1485fbc30cff"></a>
### Function syscgetoutput2dvectordatasplitf\_r43a

![][public]

```fortran
type(syscoutputvectordataf) function syscgetoutput2dvectordatasplitf_r43a(data0, data1, dataSize)
```

Create an 2D output vector data access type with split storage.

**Parameters**:

* **data0**: - first array of single-precision data
* **data1**: - second array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* data0data0
* data1data1
* dataSizedataSize

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutput2dvectordatasplitf_1a3c044606dc8a679c2de08682ab149ea0"></a>
### Function syscgetoutput2dvectordatasplitf\_r83a

![][public]

```fortran
type(syscoutputvectordataf) function syscgetoutput2dvectordatasplitf_r83a(data0, data1, dataSize)
```

Create an 2D output vector data access type with split storage.

**Parameters**:

* **data0**: - first array of double-precision data
* **data1**: - second array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* data0data0
* data1data1
* dataSizedataSize

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutput2dvectordatasplitf_1aae4748249980002e1001566dc31bed22"></a>
### Function syscgetoutput2dvectordatasplitf\_r42d

![][public]

```fortran
type(syscoutputvectordataf) function syscgetoutput2dvectordatasplitf_r42d(data, dataSize)
```

Create an 2D output vector data access type with split storage.

**Parameters**:

* **data**: - two-dimensional array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

<a id="interfacefortran_1_1syscgetoutput2dvectordatasplitf_1ac99b343b8da6f274dba1f46a447fa20c"></a>
### Function syscgetoutput2dvectordatasplitf\_r82d

![][public]

```fortran
type(syscoutputvectordataf) function syscgetoutput2dvectordatasplitf_r82d(vals, nElems)
```

Create an 2D output vector data access type with split storage.

**Parameters**:

* **vals**: - two-dimensional array of double-precision data
* **nElems**: - number of vectors.



**Parameters**:

* valsvals
* nElemsnElems

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)