# Interface fortran::outputscalardataaccessintf

![][Fortran]
![][public]

**Definition**: `syscLegacyInterfacesF.fi` (line 85)





## Members

* [outputscalardataaccessintf](interfacefortran_1_1outputscalardataaccessintf.md#interfacefortran_1_1outputscalardataaccessintf_1ae84f937763199bed5354e7c3a8090831)

## Public functions

<a id="interfacefortran_1_1outputscalardataaccessintf_1ae84f937763199bed5354e7c3a8090831"></a>
### Function outputscalardataaccessintf

![][public]


```fortran
type(syscerrorf) function outputscalardataaccessintf(regionname, variablename, outputscalardata)
```








**Parameters**:

* regionnamecharacter(len=syscstrlen), intent(in)
* variablenamecharacter(len=syscstrlen), intent(in)
* outputscalardatatype([syscoutputscalardataf](structfortran_1_1syscoutputscalardataf.md#structfortran_1_1syscoutputscalardataf)), intent(out)

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)