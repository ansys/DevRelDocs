# Interface fortran::syscgetsurfacemeshf

![][Fortran]
![][public]

**Definition**: `syscSurfaceMeshF.fi` (line 35)

Provide an interface to get surface mesh.



## Members

* [syscgetsurfacemeshf](interfacefortran_1_1syscgetsurfacemeshf.md#interfacefortran_1_1syscgetsurfacemeshf_1a4ef0ff3b7efc57e9ae1f8e79dbd65838)
* [syscgetsurfacemeshf\_a](interfacefortran_1_1syscgetsurfacemeshf.md#interfacefortran_1_1syscgetsurfacemeshf_1a5caa34494da59f29aa279d5edde26976)
* [syscgetsurfacemeshf\_b](interfacefortran_1_1syscgetsurfacemeshf.md#interfacefortran_1_1syscgetsurfacemeshf_1a5c0700336c71c6c722e67ec80021c03c)
* [syscgetsurfacemeshf\_nci](interfacefortran_1_1syscgetsurfacemeshf.md#interfacefortran_1_1syscgetsurfacemeshf_1a05b2b9d4795c0599f20aca0b1d9636a0)
* [syscgetsurfacemeshf\_nf](interfacefortran_1_1syscgetsurfacemeshf.md#interfacefortran_1_1syscgetsurfacemeshf_1abe50f734fb16ce0550b03bb673c96e9d)
* [syscgetsurfacemeshf\_ntci](interfacefortran_1_1syscgetsurfacemeshf.md#interfacefortran_1_1syscgetsurfacemeshf_1a546e1e8e0bee0480bc9c8c93755530d2)
* [syscgetsurfacemeshf\_nti](interfacefortran_1_1syscgetsurfacemeshf.md#interfacefortran_1_1syscgetsurfacemeshf_1a8088b3e4d2dd57ed3011186c4a9ae3d7)

## Public functions

<a id="interfacefortran_1_1syscgetsurfacemeshf_1a4ef0ff3b7efc57e9ae1f8e79dbd65838"></a>
### Function syscgetsurfacemeshf

![][public]


```fortran
type(syscsurfacemeshf) function syscgetsurfacemeshf()
```


Create a surface mesh access struct.

Returns a type representing empty surface mesh. All members will be assigned default values.



**Return type**: type([syscsurfacemeshf](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf)) function

<a id="interfacefortran_1_1syscgetsurfacemeshf_1abe50f734fb16ce0550b03bb673c96e9d"></a>
### Function syscgetsurfacemeshf\_nf

![][public]


```fortran
type(syscsurfacemeshf) function syscgetsurfacemeshf_nf(nodes, faces)
```


Create a surface mesh access struct.

**Parameters**:

* **nodes**: - mesh nodes
* **faces**: - mesh faces



**Parameters**:

* nodestype([syscnodedataf](structfortran_1_1syscnodedataf.md#structfortran_1_1syscnodedataf)), intent(in)
* facestype([syscfacedataf](structfortran_1_1syscfacedataf.md#structfortran_1_1syscfacedataf)), intent(in)

**Return type**: type([syscsurfacemeshf](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf)) function

<a id="interfacefortran_1_1syscgetsurfacemeshf_1a546e1e8e0bee0480bc9c8c93755530d2"></a>
### Function syscgetsurfacemeshf\_ntci

![][public]


```fortran
type(syscsurfacemeshf) function syscgetsurfacemeshf_ntci(nodes, elemtypes, elemnodecounts, elemnodeconn)
```


Create a surface mesh access struct.

**Parameters**:

* **nodes**: - mesh nodes
* **elemTypes**: - element types
* **elemNodeCounts**: - element node counts
* **elemNodeConn**: - element-to-node connectivity



**Parameters**:

* nodestype([syscnodedataf](structfortran_1_1syscnodedataf.md#structfortran_1_1syscnodedataf)), intent(in)
* elemtypestype([syscelementtypedataf](structfortran_1_1syscelementtypedataf.md#structfortran_1_1syscelementtypedataf)), intent(in)
* elemnodecountstype([syscelementnodecountdataf](structfortran_1_1syscelementnodecountdataf.md#structfortran_1_1syscelementnodecountdataf)), intent(in)
* elemnodeconntype([syscelementnodeconnectivitydataf](structfortran_1_1syscelementnodeconnectivitydataf.md#structfortran_1_1syscelementnodeconnectivitydataf)), intent(in)

**Return type**: type([syscsurfacemeshf](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf)) function

<a id="interfacefortran_1_1syscgetsurfacemeshf_1a05b2b9d4795c0599f20aca0b1d9636a0"></a>
### Function syscgetsurfacemeshf\_nci

![][public]


```fortran
type(syscsurfacemeshf) function syscgetsurfacemeshf_nci(nodes, elemnodecounts, elemnodeconn)
```


Create a surface mesh access struct.

**Parameters**:

* **nodes**: - mesh nodes
* **elemNodeCounts**: - element node counts
* **elemNodeConn**: - element-to-node connectivity



**Parameters**:

* nodestype([syscnodedataf](structfortran_1_1syscnodedataf.md#structfortran_1_1syscnodedataf)), intent(in)
* elemnodecountstype([syscelementnodecountdataf](structfortran_1_1syscelementnodecountdataf.md#structfortran_1_1syscelementnodecountdataf)), intent(in)
* elemnodeconntype([syscelementnodeconnectivitydataf](structfortran_1_1syscelementnodeconnectivitydataf.md#structfortran_1_1syscelementnodeconnectivitydataf)), intent(in)

**Return type**: type([syscsurfacemeshf](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf)) function

<a id="interfacefortran_1_1syscgetsurfacemeshf_1a8088b3e4d2dd57ed3011186c4a9ae3d7"></a>
### Function syscgetsurfacemeshf\_nti

![][public]


```fortran
type(syscsurfacemeshf) function syscgetsurfacemeshf_nti(nodes, elemtypes, elemnodeconn)
```


Create a surface mesh access struct.

**Parameters**:

* **nodes**: - mesh nodes
* **elemTypes**: - element types
* **elemNodeConn**: - element-to-node connectivity



**Parameters**:

* nodestype([syscnodedataf](structfortran_1_1syscnodedataf.md#structfortran_1_1syscnodedataf)), intent(in)
* elemtypestype([syscelementtypedataf](structfortran_1_1syscelementtypedataf.md#structfortran_1_1syscelementtypedataf)), intent(in)
* elemnodeconntype([syscelementnodeconnectivitydataf](structfortran_1_1syscelementnodeconnectivitydataf.md#structfortran_1_1syscelementnodeconnectivitydataf)), intent(in)

**Return type**: type([syscsurfacemeshf](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf)) function

<a id="interfacefortran_1_1syscgetsurfacemeshf_1a5caa34494da59f29aa279d5edde26976"></a>
### Function syscgetsurfacemeshf\_a

![][public]


```fortran
type(syscsurfacemeshf) function syscgetsurfacemeshf_a(nodeids, nodecoords, elemnodecounts, elemnodeids)
```


Create a surface mesh access struct.

Note - this function is deprecated, use <code>syscGetSurfaceMeshF_NCI</code>






**Parameters**:

* **nodeIds**: - output scalar data access for node ids
* **nodeCoords**: - output vector data access for node coordinates, provided in the same order as node ids
* **elemNodeCounts**: - output scalar data access for element node counts
* **elemNodeIds**: - output scalar data access for element node ids



**Parameters**:

* nodeidstype([syscoutputscalardataf](structfortran_1_1syscoutputscalardataf.md#structfortran_1_1syscoutputscalardataf)), intent(in)
* nodecoordstype([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)), intent(in)
* elemnodecountstype([syscoutputscalardataf](structfortran_1_1syscoutputscalardataf.md#structfortran_1_1syscoutputscalardataf)), intent(in)
* elemnodeidstype([syscoutputscalardataf](structfortran_1_1syscoutputscalardataf.md#structfortran_1_1syscoutputscalardataf)), intent(in)

**Return type**: type([syscsurfacemeshf](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf)) function

<a id="interfacefortran_1_1syscgetsurfacemeshf_1a5c0700336c71c6c722e67ec80021c03c"></a>
### Function syscgetsurfacemeshf\_b

![][public]


```fortran
type(syscsurfacemeshf) function syscgetsurfacemeshf_b(nodecoords, elemnodecounts, elemnodeids)
```


Create a surface mesh access struct.

Note - this function is deprecated, use <code>syscGetSurfaceMeshF_NCI</code>






**Parameters**:

* **nodeCoords**: - output vector data access for node coordinates, provided in ascending node ids order
* **elemNodeCounts**: - output scalar data access for element node counts
* **elemNodeIds**: - output scalar data access for element node ids



**Parameters**:

* nodecoordstype([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)), intent(in)
* elemnodecountstype([syscoutputscalardataf](structfortran_1_1syscoutputscalardataf.md#structfortran_1_1syscoutputscalardataf)), intent(in)
* elemnodeidstype([syscoutputscalardataf](structfortran_1_1syscoutputscalardataf.md#structfortran_1_1syscoutputscalardataf)), intent(in)

**Return type**: type([syscsurfacemeshf](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)