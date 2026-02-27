# Interface fortran::syscinputvectordataaccessf

![][Fortran]
![][public]

**Definition**: `syscFunctionTypesF.fi` (line 35)

Provide function interface for access to input vector data.



## Members

* [syscinputvectordataaccessf](interfacefortran_1_1syscinputvectordataaccessf.md#interfacefortran_1_1syscinputvectordataaccessf_1ae4618413a4615086aee2433e7b4739b1)

## Public functions

<a id="interfacefortran_1_1syscinputvectordataaccessf_1ae4618413a4615086aee2433e7b4739b1"></a>
### Function syscinputvectordataaccessf

![][public]


```fortran
type(syscinputvectordataf) function syscinputvectordataaccessf(regionname, variablename)
```


Provide a function for access to input vector data.

**Parameters**:

* **regionName**: - the name of the region
* **variableName**: - the name of the variable



**Parameters**:

* regionnamecharacter(len=syscstrlen), intent(in)
* variablenamecharacter(len=syscstrlen), intent(in)

**Return type**: type([syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)