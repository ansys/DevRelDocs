# `ITools`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ITools"></a>

#### *class* Ansys.ACT.Interfaces.Common.ITools

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines common tools.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------|-------------------------------------------------------------------------|
| [`GetGeoDataFromFile`](#ITools.GetGeoDataFromFile)         | Returns the geo data model object for the CAD file name specified.      |
| [`GetMeshDataFromFile`](#ITools.GetMeshDataFromFile)       | Returns the mesh data model associated to the file name specified.      |
| [`GetResultsDataFromFile`](#ITools.GetResultsDataFromFile) | Returns the result reader object associated to the file name specified. |

<a id="method-detail"></a>

## Method detail

<a id="ITools.GetGeoDataFromFile"></a>

### ITools.GetGeoDataFromFile(filename: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Geometry.IGeoData

Returns the geo data model object for the CAD file name specified.

<!-- !! processed by numpydoc !! -->

<a id="ITools.GetMeshDataFromFile"></a>

### ITools.GetMeshDataFromFile(filename: [str](https://docs.python.org/3/library/stdtypes.html#str), bodyGrouping: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mesh.IMeshData

Returns the mesh data model associated to the file name specified.

<!-- !! processed by numpydoc !! -->

<a id="ITools.GetResultsDataFromFile"></a>

### ITools.GetResultsDataFromFile(filename: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Post.IResultReader

Returns the result reader object associated to the file name specified.

<!-- !! processed by numpydoc !! -->

