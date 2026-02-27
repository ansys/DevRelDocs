# Interface fortran::syscoutputvectordataaccessf

![][Fortran]
![][public]

**Definition**: `syscFunctionTypesF.fi` (line 73)

Provide function interface for access to output vector data.



## Members

* [syscoutputvectordataaccessf](interfacefortran_1_1syscoutputvectordataaccessf.md#interfacefortran_1_1syscoutputvectordataaccessf_1a6e29d0e7a678fc94ea450706ae5fd430)

## Public functions

<a id="interfacefortran_1_1syscoutputvectordataaccessf_1a6e29d0e7a678fc94ea450706ae5fd430"></a>
### Function syscoutputvectordataaccessf

![][public]


```fortran
type(syscoutputvectordataf) function syscoutputvectordataaccessf(regionname, variablename)
```


Provide a function for access to output vector data.

**Parameters**:

* **regionName**: - the name of the region
* **variableName**: - the name of the variable



**Parameters**:

* regionnamecharacter(len=syscstrlen), intent(in)
* variablenamecharacter(len=syscstrlen), intent(in)

**Return type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)