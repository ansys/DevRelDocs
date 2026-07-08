# Interface fortran::outputvectordataaccessintf

![][Fortran]
![][public]

**Definition**: `syscLegacyInterfacesF.fi` (line 104)





## Members

* [outputvectordataaccessintf](interfacefortran_1_1outputvectordataaccessintf.md#interfacefortran_1_1outputvectordataaccessintf_1ad322040724f075637b40b726a7dc3e88)

## Public functions

<a id="interfacefortran_1_1outputvectordataaccessintf_1ad322040724f075637b40b726a7dc3e88"></a>
### Function outputvectordataaccessintf

![][public]


```fortran
type(syscerrorf) function outputvectordataaccessintf(regionname, variablename, outputvectordata)
```








**Parameters**:

* regionnamecharacter(len=syscstrlen), intent(in)
* variablenamecharacter(len=syscstrlen), intent(in)
* outputvectordatatype([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)), intent(out)

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)