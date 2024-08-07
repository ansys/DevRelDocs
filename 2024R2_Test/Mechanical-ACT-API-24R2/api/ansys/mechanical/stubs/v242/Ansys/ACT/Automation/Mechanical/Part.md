# `Part`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Part

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Part.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#Part.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CreateParameter`](#Part.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`RemoveParameter`](#Part.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`GenerateMesh`](#Part.GenerateMesh)                       | Run the GenerateMesh action.                                                      |
| [`PreviewInflation`](#Part.PreviewInflation)               | Run the PreviewInflation action.                                                  |
| [`PreviewSurfaceMesh`](#Part.PreviewSurfaceMesh)           | Run the PreviewSurfaceMesh action.                                                |
| [`Update`](#Part.Update)                                   | Run the Update action.                                                            |
| [`GetChildren`](#id1)                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Part.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Part.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Part.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Part.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Part.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Part.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Part.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Part.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Part.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Part.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#Part.GetParameter)                       | Gets the parameter corresponding to the given property.                           |

### Properties

| Name | Description |
|------------------------------------------------------------|---------------------------------------------------------------|
| [`MaterialName`](#Part.MaterialName)                       | Gets or sets the MaterialName.                                |
| [`Hidden`](#Part.Hidden)                                   | Hide or show the body.                                        |
| [`ConfigurationId`](#Part.ConfigurationId)                 | Gets the related Result Meshâ€™s ConfigurationId.               |
| [`ResultMeshId`](#Part.ResultMeshId)                       | Gets the related Result Meshâ€™s ObjectId.                      |
| [`Assignment`](#Part.Assignment)                           | Gets or sets the Assignment.                                  |
| [`InternalObject`](#id0)                                   | Gets the internal object. For advanced usage only.            |
| [`Elements`](#Part.Elements)                               | Gets the Elements.                                            |
| [`Material`](#Part.Material)                               | Gets or sets the Material.                                    |
| [`Average`](#Part.Average)                                 | Gets the Average.                                             |
| [`Maximum`](#Part.Maximum)                                 | Gets the Maximum.                                             |
| [`Minimum`](#Part.Minimum)                                 | Gets the Minimum.                                             |
| [`StandardDeviation`](#Part.StandardDeviation)             | Gets the StandardDeviation.                                   |
| [`Nodes`](#Part.Nodes)                                     | Gets the Nodes.                                               |
| [`ApproximateSurfaceArea`](#Part.ApproximateSurfaceArea)   | Gets the ApproximateSurfaceArea.                              |
| [`LengthX`](#Part.LengthX)                                 | Gets the LengthX.                                             |
| [`LengthY`](#Part.LengthY)                                 | Gets the LengthY.                                             |
| [`LengthZ`](#Part.LengthZ)                                 | Gets the LengthZ.                                             |
| [`Mass`](#Part.Mass)                                       | Gets the Mass.                                                |
| [`CentroidX`](#Part.CentroidX)                             | Gets the CentroidX.                                           |
| [`CentroidY`](#Part.CentroidY)                             | Gets the CentroidY.                                           |
| [`CentroidZ`](#Part.CentroidZ)                             | Gets the CentroidZ.                                           |
| [`MomentOfInertiaIp1`](#Part.MomentOfInertiaIp1)           | Gets the MomentOfInertiaIp1.                                  |
| [`MomentOfInertiaIp2`](#Part.MomentOfInertiaIp2)           | Gets the MomentOfInertiaIp2.                                  |
| [`MomentOfInertiaIp3`](#Part.MomentOfInertiaIp3)           | Gets the MomentOfInertiaIp3.                                  |
| [`Volume`](#Part.Volume)                                   | Gets the Volume.                                              |
| [`MeshMetric`](#Part.MeshMetric)                           | Gets the MeshMetric.                                          |
| [`Visible`](#Part.Visible)                                 | Gets or sets the Visible.                                     |
| [`Suppressed`](#Part.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](#Part.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#Part.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](#Part.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Part.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#Part.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Part.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#Part.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Part.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Part.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Part.MaterialName"></a>

### *property* Part.MaterialName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialName.

<!-- !! processed by numpydoc !! -->

<a id="Part.Hidden"></a>

### *property* Part.Hidden *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Hide or show the body.

<!-- !! processed by numpydoc !! -->

<a id="Part.ConfigurationId"></a>

### *property* Part.ConfigurationId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the related Result Meshâ€™s ConfigurationId.

<!-- !! processed by numpydoc !! -->

<a id="Part.ResultMeshId"></a>

### *property* Part.ResultMeshId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the related Result Meshâ€™s ObjectId.

<!-- !! processed by numpydoc !! -->

<a id="Part.Assignment"></a>

### *property* Part.Assignment *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Assignment.

<!-- !! processed by numpydoc !! -->

<a id="Part.InternalObject"></a>

### *property* Part.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBodyGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Part.Elements"></a>

### *property* Part.Elements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elements.

<!-- !! processed by numpydoc !! -->

<a id="Part.Material"></a>

### *property* Part.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="Part.Average"></a>

### *property* Part.Average *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="Part.Maximum"></a>

### *property* Part.Maximum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="Part.Minimum"></a>

### *property* Part.Minimum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="Part.StandardDeviation"></a>

### *property* Part.StandardDeviation *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StandardDeviation.

<!-- !! processed by numpydoc !! -->

<a id="Part.Nodes"></a>

### *property* Part.Nodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Nodes.

<!-- !! processed by numpydoc !! -->

<a id="Part.ApproximateSurfaceArea"></a>

### *property* Part.ApproximateSurfaceArea *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ApproximateSurfaceArea.

<!-- !! processed by numpydoc !! -->

<a id="Part.LengthX"></a>

### *property* Part.LengthX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthX.

<!-- !! processed by numpydoc !! -->

<a id="Part.LengthY"></a>

### *property* Part.LengthY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthY.

<!-- !! processed by numpydoc !! -->

<a id="Part.LengthZ"></a>

### *property* Part.LengthZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthZ.

<!-- !! processed by numpydoc !! -->

<a id="Part.Mass"></a>

### *property* Part.Mass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Mass.

<!-- !! processed by numpydoc !! -->

<a id="Part.CentroidX"></a>

### *property* Part.CentroidX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CentroidX.

<!-- !! processed by numpydoc !! -->

<a id="Part.CentroidY"></a>

### *property* Part.CentroidY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CentroidY.

<!-- !! processed by numpydoc !! -->

<a id="Part.CentroidZ"></a>

### *property* Part.CentroidZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CentroidZ.

<!-- !! processed by numpydoc !! -->

<a id="Part.MomentOfInertiaIp1"></a>

### *property* Part.MomentOfInertiaIp1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentOfInertiaIp1.

<!-- !! processed by numpydoc !! -->

<a id="Part.MomentOfInertiaIp2"></a>

### *property* Part.MomentOfInertiaIp2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentOfInertiaIp2.

<!-- !! processed by numpydoc !! -->

<a id="Part.MomentOfInertiaIp3"></a>

### *property* Part.MomentOfInertiaIp3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentOfInertiaIp3.

<!-- !! processed by numpydoc !! -->

<a id="Part.Volume"></a>

### *property* Part.Volume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="Part.MeshMetric"></a>

### *property* Part.MeshMetric *: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshMetric.

<!-- !! processed by numpydoc !! -->

<a id="Part.Visible"></a>

### *property* Part.Visible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

<a id="Part.Suppressed"></a>

### *property* Part.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Part.CoordinateSystem"></a>

### *property* Part.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Part.DataModelObjectCategory"></a>

### *property* Part.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="Part.Children"></a>

### *property* Part.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Part.Comments"></a>

### *property* Part.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Part.Figures"></a>

### *property* Part.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Part.Images"></a>

### *property* Part.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Part.ReadOnly"></a>

### *property* Part.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Part.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Part.Properties"></a>

### *property* Part.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Part.VisibleProperties"></a>

### *property* Part.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Part.ClearGeneratedData"></a>

### Part.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="Part.CreateParameter"></a>

### Part.CreateParameter(paramPath: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Part.RemoveParameter"></a>

### Part.RemoveParameter(paramPath: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Part.GenerateMesh"></a>

### Part.GenerateMesh()

Run the GenerateMesh action.

<!-- !! processed by numpydoc !! -->

<a id="Part.PreviewInflation"></a>

### Part.PreviewInflation()

Run the PreviewInflation action.

<!-- !! processed by numpydoc !! -->

<a id="Part.PreviewSurfaceMesh"></a>

### Part.PreviewSurfaceMesh()

Run the PreviewSurfaceMesh action.

<!-- !! processed by numpydoc !! -->

<a id="Part.Update"></a>

### Part.Update()

Run the Update action.

<!-- !! processed by numpydoc !! -->

<a id="Part.GetChildren"></a>

### Part.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Part.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Part.AddComment"></a>

### Part.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Part.AddFigure"></a>

### Part.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Part.AddImage"></a>

### Part.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Part.Activate"></a>

### Part.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Part.CopyTo"></a>

### Part.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Part.Duplicate"></a>

### Part.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Part.GroupAllSimilarChildren"></a>

### Part.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Part.GroupSimilarObjects"></a>

### Part.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Part.PropertyByName"></a>

### Part.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Part.PropertyByAPIName"></a>

### Part.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Part.GetParameter"></a>

### Part.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

