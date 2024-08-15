# `ConstructionLineHelper`



#### *class* ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.ConstructionLines.ConstructionLineHelper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Helper to perform queries and modifications against a ConstructionLine instance.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| [`GetEdgeVerticesById`](#ConstructionLineHelper.GetEdgeVerticesById)                             | GetEdgeVerticesById method.                                                                |
| [`GetEdgesById`](#ConstructionLineHelper.GetEdgesById)                                           | GetEdgesById method.                                                                       |
| [`GetPlanesById`](#ConstructionLineHelper.GetPlanesById)                                         | GetPlanesById method.                                                                      |
| [`GetEdgesUsingPoint`](#ConstructionLineHelper.GetEdgesUsingPoint)                               | Get a list of IEdge that use the given Point.                                              |
| [`GetContainedEdges`](#ConstructionLineHelper.GetContainedEdges)                                 | Get all the edges that have both start and end edge vertices in the given plane.           |
| [`GetRelatedEdges`](#ConstructionLineHelper.GetRelatedEdges)                                     | Get all the edges that have only edge vertex in the given plane.                           |
| [`ExportToXML`](#ConstructionLineHelper.ExportToXML)                                             | Collect all the edges and edge vertices, then export them as global points to an XML file. |
| [`ClearExistingDataAndImportFromXML`](#ConstructionLineHelper.ClearExistingDataAndImportFromXML) | Import global points and connecting edges from an XML file.                                |

<a id="method-detail"></a>

## Method detail

<a id="ConstructionLineHelper.GetEdgeVerticesById"></a>

### *classmethod* ConstructionLineHelper.GetEdgeVerticesById(constructionLine: [Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine](../../../../../v241/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine), edgeVertexIdCollection: System.Collections.Generic.IEnumerable[System.Int32])

* **No-index:**

GetEdgeVerticesById method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLineHelper.GetEdgesById"></a>

### *classmethod* ConstructionLineHelper.GetEdgesById(constructionLine: [Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine](../../../../../v241/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine), edgeIdCollection: System.Collections.Generic.IEnumerable[System.Int32])

* **No-index:**

GetEdgesById method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLineHelper.GetPlanesById"></a>

### *classmethod* ConstructionLineHelper.GetPlanesById(constructionLine: [Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine](../../../../../v241/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine), planeIdCollection: System.Collections.Generic.IEnumerable[System.Int32])

* **No-index:**

GetPlanesById method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLineHelper.GetEdgesUsingPoint"></a>

### *classmethod* ConstructionLineHelper.GetEdgesUsingPoint(point: [Ansys.Mechanical.DataModel.ConstructionLines.Point](../../../../../v241/Ansys/Mechanical/DataModel/ConstructionLines/Point.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.Point))

* **No-index:**

Get a list of IEdge that use the given Point.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLineHelper.GetContainedEdges"></a>

### *classmethod* ConstructionLineHelper.GetContainedEdges(plane: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](../../../../../v241/Ansys/Mechanical/DataModel/ConstructionLines/Plane.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.Plane))

* **No-index:**

Get all the edges that have both start and end edge vertices in the given plane.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLineHelper.GetRelatedEdges"></a>

### *classmethod* ConstructionLineHelper.GetRelatedEdges(plane: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](../../../../../v241/Ansys/Mechanical/DataModel/ConstructionLines/Plane.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.Plane))

* **No-index:**

Get all the edges that have only edge vertex in the given plane.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLineHelper.ExportToXML"></a>

### *classmethod* ConstructionLineHelper.ExportToXML(constructionLine: [Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine](../../../../../v241/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine), xmlFilePath: System.String)

* **No-index:**

Collect all the edges and edge vertices, then export them as global points to an XML file.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLineHelper.ClearExistingDataAndImportFromXML"></a>

### *classmethod* ConstructionLineHelper.ClearExistingDataAndImportFromXML(constructionLine: [Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine](../../../../../v241/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine), xmlFilePath: System.String)

* **No-index:**

Import global points and connecting edges from an XML file.

<!-- !! processed by numpydoc !! -->

