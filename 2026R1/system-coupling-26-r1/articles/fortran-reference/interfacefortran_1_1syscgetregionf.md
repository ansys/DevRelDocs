# Interface fortran::syscgetregionf

![][Fortran]
![][public]

**Definition**: `syscRegionF.fi` (line 44)

Provide an interface to get a System Coupling region.



## Members

* [syscgetregionf](interfacefortran_1_1syscgetregionf.md#interfacefortran_1_1syscgetregionf_1a2033792a2361b06de6d370b17c53f187)
* [syscgetregionf\_dt](interfacefortran_1_1syscgetregionf.md#interfacefortran_1_1syscgetregionf_1ae4a9592f42bdf1a92abf228ca710dfe6)
* [syscgetregionf\_t](interfacefortran_1_1syscgetregionf.md#interfacefortran_1_1syscgetregionf_1a57e21d2ee2e6a7680974ea1d8c94b7c3)
* [syscgetregionf\_tm](interfacefortran_1_1syscgetregionf.md#interfacefortran_1_1syscgetregionf_1a35c25f1de5857e61b4c3ed2966e58178)

## Public functions

<a id="interfacefortran_1_1syscgetregionf_1a2033792a2361b06de6d370b17c53f187"></a>
### Function syscgetregionf

![][public]


```fortran
type(syscregionf) function syscgetregionf(regionname)
```


Create region to be used in a coupled analysis.

**Parameters**:

* **regionName**: - Unique name for this region. String length should not exceed <code>SyscStrLen</code>.

Display name will default to the same as name.





Topology will default to surface.






**Returns**:

a <code>SyscRegionF</code> type



**Parameters**:

* regionnamecharacter(len=*), intent(in)

**Return type**: type([syscregionf](structfortran_1_1syscregionf.md#structfortran_1_1syscregionf)) function

<a id="interfacefortran_1_1syscgetregionf_1a57e21d2ee2e6a7680974ea1d8c94b7c3"></a>
### Function syscgetregionf\_t

![][public]


```fortran
type(syscregionf) function syscgetregionf_t(regionname, topology)
```


Create region to be used in a coupled analysis.

**Parameters**:

* **regionName**: - Unique name for this region. String length should not exceed SyscStrLen.
* **topology**: - region topology.

Display name will default to the same as name.






**Returns**:

a <code>SyscRegionF</code> type



**Parameters**:

* regionnamecharacter(len=*), intent(in)
* topologyinteger(kind=4), intent(in)

**Return type**: type([syscregionf](structfortran_1_1syscregionf.md#structfortran_1_1syscregionf)) function

<a id="interfacefortran_1_1syscgetregionf_1ae4a9592f42bdf1a92abf228ca710dfe6"></a>
### Function syscgetregionf\_dt

![][public]


```fortran
type(syscregionf) function syscgetregionf_dt(regionname, displayname, topology)
```


Create region to be used in a coupled analysis.

**Parameters**:

* **regionName**: - Unique name for this region. String length should not exceed SyscStrLen.
* **displayName**: - region display name. String length should not exceed SyscStrLen.
* **topology**: - region topology.


**Returns**:

a <code>SyscRegionF</code> type



**Parameters**:

* regionnamecharacter(len=*), intent(in)
* displaynamecharacter(len=*), intent(in)
* topologyinteger(kind=4), intent(in)

**Return type**: type([syscregionf](structfortran_1_1syscregionf.md#structfortran_1_1syscregionf)) function

<a id="interfacefortran_1_1syscgetregionf_1a35c25f1de5857e61b4c3ed2966e58178"></a>
### Function syscgetregionf\_tm

![][public]


```fortran
type(syscregionf) function syscgetregionf_tm(regionname, topology, discretization)
```


Create a region.

**Parameters**:

* **regionName**: - Unique name for this region. String length should not exceed SyscStrLen.
* **topology**: - region topology.
* **discretization**: - region discretization type.


**Returns**:

a <code>SyscRegionF</code> type



**Parameters**:

* regionnamecharacter(len=*), intent(in)
* topologyinteger(kind=4), intent(in)
* discretizationinteger(kind=4), intent(in)

**Return type**: type([syscregionf](structfortran_1_1syscregionf.md#structfortran_1_1syscregionf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)