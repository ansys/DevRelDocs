# `ConstructionLineHelper`



#### *class* ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.ConstructionLineHelper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Helper to perform queries and modifications against a ConstructionLine instance.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| [`GetEdgeVerticesById`](../../../../../v242/Ansys/Mechanical/DataModel/ConstructionLines/ConstructionLineHelper.md#ConstructionLineHelper.GetEdgeVerticesById)                             | GetEdgeVerticesById method.                                                                |
| [`GetEdgesById`](../../../../../v242/Ansys/Mechanical/DataModel/ConstructionLines/ConstructionLineHelper.md#ConstructionLineHelper.GetEdgesById)                                           | GetEdgesById method.                                                                       |
| [`GetPlanesById`](../../../../../v242/Ansys/Mechanical/DataModel/ConstructionLines/ConstructionLineHelper.md#ConstructionLineHelper.GetPlanesById)                                         | GetPlanesById method.                                                                      |
| [`GetEdgesUsingPoint`](../../../../../v242/Ansys/Mechanical/DataModel/ConstructionLines/ConstructionLineHelper.md#ConstructionLineHelper.GetEdgesUsingPoint)                               | Get a list of IEdge that use the given Point.                                              |
| [`GetContainedEdges`](../../../../../v242/Ansys/Mechanical/DataModel/ConstructionLines/ConstructionLineHelper.md#ConstructionLineHelper.GetContainedEdges)                                 | Get all the edges that have both start and end edge vertices in the given plane.           |
| [`GetRelatedEdges`](../../../../../v242/Ansys/Mechanical/DataModel/ConstructionLines/ConstructionLineHelper.md#ConstructionLineHelper.GetRelatedEdges)                                     | Get all the edges that have only edge vertex in the given plane.                           |
| [`ExportToXML`](../../../../../v242/Ansys/Mechanical/DataModel/ConstructionLines/ConstructionLineHelper.md#ConstructionLineHelper.ExportToXML)                                             | Collect all the edges and edge vertices, then export them as global points to an XML file. |
| [`ClearExistingDataAndImportFromXML`](../../../../../v242/Ansys/Mechanical/DataModel/ConstructionLines/ConstructionLineHelper.md#ConstructionLineHelper.ClearExistingDataAndImportFromXML) | Import global points and connecting edges from an XML file.                                |

<a id="method-detail"></a>

## Method detail

<a id="ConstructionLineHelper.GetEdgeVerticesById"></a>

### *classmethod* ConstructionLineHelper.GetEdgeVerticesById(constructionLine: [Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine](../../../ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine), edgeVertexIdCollection: System.Collections.Generic.IEnumerable[System.Int32])

GetEdgeVerticesById method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLineHelper.GetEdgesById"></a>

### *classmethod* ConstructionLineHelper.GetEdgesById(constructionLine: [Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine](../../../ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine), edgeIdCollection: System.Collections.Generic.IEnumerable[System.Int32])

GetEdgesById method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLineHelper.GetPlanesById"></a>

### *classmethod* ConstructionLineHelper.GetPlanesById(constructionLine: [Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine](../../../ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine), planeIdCollection: System.Collections.Generic.IEnumerable[System.Int32])

GetPlanesById method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLineHelper.GetEdgesUsingPoint"></a>

### *classmethod* ConstructionLineHelper.GetEdgesUsingPoint(point: [Ansys.Mechanical.DataModel.ConstructionLines.Point](Point.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.Point))

Get a list of IEdge that use the given Point.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLineHelper.GetContainedEdges"></a>

### *classmethod* ConstructionLineHelper.GetContainedEdges(plane: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](Plane.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.Plane))

Get all the edges that have both start and end edge vertices in the given plane.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLineHelper.GetRelatedEdges"></a>

### *classmethod* ConstructionLineHelper.GetRelatedEdges(plane: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](Plane.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.Plane))

Get all the edges that have only edge vertex in the given plane.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLineHelper.ExportToXML"></a>

### *classmethod* ConstructionLineHelper.ExportToXML(constructionLine: [Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine](../../../ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine), xmlFilePath: System.String)

Collect all the edges and edge vertices, then export them as global points to an XML file.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLineHelper.ClearExistingDataAndImportFromXML"></a>

### *classmethod* ConstructionLineHelper.ClearExistingDataAndImportFromXML(constructionLine: [Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine](../../../ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine), xmlFilePath: System.String)

Import global points and connecting edges from an XML file.

<!-- !! processed by numpydoc !! -->

