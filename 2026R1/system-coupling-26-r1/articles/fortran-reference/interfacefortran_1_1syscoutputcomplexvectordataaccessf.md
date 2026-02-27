# Interface fortran::syscoutputcomplexvectordataaccessf

![][Fortran]
![][public]

**Definition**: `syscFunctionTypesF.fi` (line 113)

Provide function interface for access to output complex vector data.



## Members

* [syscoutputcomplexvectordataaccessf](interfacefortran_1_1syscoutputcomplexvectordataaccessf.md#interfacefortran_1_1syscoutputcomplexvectordataaccessf_1a3a19f8c590f6bef742e7091ffc569e01)

## Public functions

<a id="interfacefortran_1_1syscoutputcomplexvectordataaccessf_1a3a19f8c590f6bef742e7091ffc569e01"></a>
### Function syscoutputcomplexvectordataaccessf

![][public]


```fortran
type(syscoutputcomplexvectordataf) function syscoutputcomplexvectordataaccessf(regionname, variablename)
```


Provide a function for access to output complex vector data.

**Parameters**:

* **regionName**: - the name of the region
* **variableName**: - the name of the variable



**Parameters**:

* regionnamecharacter(len=syscstrlen), intent(in)
* variablenamecharacter(len=syscstrlen), intent(in)

**Return type**: type([syscoutputcomplexvectordataf](structfortran_1_1syscoutputcomplexvectordataf.md#structfortran_1_1syscoutputcomplexvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)