# Interface fortran::syscinputcomplexvectordataaccessf

![][Fortran]
![][public]

**Definition**: `syscFunctionTypesF.fi` (line 93)

Provide function interface for access to input complex vector data.



## Members

* [syscinputcomplexvectordataaccessf](interfacefortran_1_1syscinputcomplexvectordataaccessf.md#interfacefortran_1_1syscinputcomplexvectordataaccessf_1ae0547e919676dbc8004f23b405bbe988)

## Public functions

<a id="interfacefortran_1_1syscinputcomplexvectordataaccessf_1ae0547e919676dbc8004f23b405bbe988"></a>
### Function syscinputcomplexvectordataaccessf

![][public]


```fortran
type(syscinputcomplexvectordataf) function syscinputcomplexvectordataaccessf(regionname, variablename)
```


Provide a function for access to input complex vector data.

**Parameters**:

* **regionName**: - the name of the region
* **variableName**: - the name of the variable



**Parameters**:

* regionnamecharacter(len=syscstrlen), intent(in)
* variablenamecharacter(len=syscstrlen), intent(in)

**Return type**: type([syscinputcomplexvectordataf](structfortran_1_1syscinputcomplexvectordataf.md#structfortran_1_1syscinputcomplexvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)