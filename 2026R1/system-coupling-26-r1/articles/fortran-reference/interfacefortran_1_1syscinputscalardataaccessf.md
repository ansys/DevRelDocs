# Interface fortran::syscinputscalardataaccessf

![][Fortran]
![][public]

**Definition**: `syscFunctionTypesF.fi` (line 15)

Provide function interface for access to input scalar data.



## Members

* [syscinputscalardataaccessf](interfacefortran_1_1syscinputscalardataaccessf.md#interfacefortran_1_1syscinputscalardataaccessf_1af42bac728574c6b34c1b19f793ef92da)

## Public functions

<a id="interfacefortran_1_1syscinputscalardataaccessf_1af42bac728574c6b34c1b19f793ef92da"></a>
### Function syscinputscalardataaccessf

![][public]


```fortran
type(syscinputscalardataf) function syscinputscalardataaccessf(regionname, variablename)
```


Provide a function for access to input scalar data.

**Parameters**:

* **regionName**: - the name of the region
* **variableName**: - the name of the variable



**Parameters**:

* regionnamecharacter(len=syscstrlen), intent(in)
* variablenamecharacter(len=syscstrlen), intent(in)

**Return type**: type([syscinputscalardataf](structfortran_1_1syscinputscalardataf.md#structfortran_1_1syscinputscalardataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)