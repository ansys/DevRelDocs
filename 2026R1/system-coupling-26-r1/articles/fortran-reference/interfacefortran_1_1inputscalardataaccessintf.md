# Interface fortran::inputscalardataaccessintf

![][Fortran]
![][public]

**Definition**: `syscLegacyInterfacesF.fi` (line 45)





## Members

* [inputscalardataaccessintf](interfacefortran_1_1inputscalardataaccessintf.md#interfacefortran_1_1inputscalardataaccessintf_1aa2afb0f60a690bf3af1009d8c4b74437)

## Public functions

<a id="interfacefortran_1_1inputscalardataaccessintf_1aa2afb0f60a690bf3af1009d8c4b74437"></a>
### Function inputscalardataaccessintf

![][public]


```fortran
type(syscerrorf) function inputscalardataaccessintf(regionname, variablename, inputscalardata)
```








**Parameters**:

* regionnamecharacter(len=syscstrlen), intent(in)
* variablenamecharacter(len=syscstrlen), intent(in)
* inputscalardatatype([syscinputscalardataf](structfortran_1_1syscinputscalardataf.md#structfortran_1_1syscinputscalardataf)), intent(out)

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)