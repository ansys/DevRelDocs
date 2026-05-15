# Interface fortran::inputvectordataaccessintf

![][Fortran]
![][public]

**Definition**: `syscLegacyInterfacesF.fi` (line 65)





## Members

* [inputvectordataaccessintf](interfacefortran_1_1inputvectordataaccessintf.md#interfacefortran_1_1inputvectordataaccessintf_1ad329d75c14e0680f67330884add8c468)

## Public functions

<a id="interfacefortran_1_1inputvectordataaccessintf_1ad329d75c14e0680f67330884add8c468"></a>
### Function inputvectordataaccessintf

![][public]


```fortran
type(syscerrorf) function inputvectordataaccessintf(regionname, variablename, inputvectordata)
```








**Parameters**:

* regionnamecharacter(len=syscstrlen), intent(in)
* variablenamecharacter(len=syscstrlen), intent(in)
* inputvectordatatype([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)), intent(out)

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)