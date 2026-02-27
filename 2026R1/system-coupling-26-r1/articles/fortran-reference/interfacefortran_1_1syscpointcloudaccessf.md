# Interface fortran::syscpointcloudaccessf

![][Fortran]
![][public]

**Definition**: `syscFunctionTypesF.fi` (line 162)

Provide function interface for access to point cloud.



## Members

* [syscpointcloudaccessf](interfacefortran_1_1syscpointcloudaccessf.md#interfacefortran_1_1syscpointcloudaccessf_1a1efb7f7b79df0a16cfb47649590b665d)

## Public functions

<a id="interfacefortran_1_1syscpointcloudaccessf_1a1efb7f7b79df0a16cfb47649590b665d"></a>
### Function syscpointcloudaccessf

![][public]


```fortran
type(syscpointcloudf) function syscpointcloudaccessf(regionname)
```


Provide a function prototype for access to point cloud.

**Parameters**:

* **regionName**: - the name of the region



**Parameters**:

* regionnamecharacter(len=syscstrlen), intent(in)

**Return type**: type([syscpointcloudf](structfortran_1_1syscpointcloudf.md#structfortran_1_1syscpointcloudf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)