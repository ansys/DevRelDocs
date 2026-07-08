# Interface fortran::syscoutputscalardataaccessf

![][Fortran]
![][public]

**Definition**: `syscFunctionTypesF.fi` (line 54)

Provide function interface for access to output scalar data.



## Members

* [syscoutputscalardataaccessf](interfacefortran_1_1syscoutputscalardataaccessf.md#interfacefortran_1_1syscoutputscalardataaccessf_1aae5573f883509ef1dc4b7fbcbc929aea)

## Public functions

<a id="interfacefortran_1_1syscoutputscalardataaccessf_1aae5573f883509ef1dc4b7fbcbc929aea"></a>
### Function syscoutputscalardataaccessf

![][public]


```fortran
type(syscoutputscalardataf) function syscoutputscalardataaccessf(regionname, variablename)
```


Provide a function for access to output scalar data.

**Parameters**:

* **regionName**: - the name of the region
* **variableName**: - the name of the variable



**Parameters**:

* regionnamecharacter(len=syscstrlen), intent(in)
* variablenamecharacter(len=syscstrlen), intent(in)

**Return type**: type([syscoutputscalardataf](structfortran_1_1syscoutputscalardataf.md#structfortran_1_1syscoutputscalardataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)