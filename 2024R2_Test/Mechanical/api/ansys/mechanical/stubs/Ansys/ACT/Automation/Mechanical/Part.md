# Part

### *class* Part

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Part.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#Part.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`MaterialName`](#Part.MaterialName)                                                                                | Gets or sets the MaterialName.                                |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Hidden`](#Part.Hidden)                                                                                            | Hide or show the body.                                        |
| [`ConfigurationId`](#Part.ConfigurationId)                                                                          | Gets the related Result Mesh’s ConfigurationId.               |
| [`ResultMeshId`](#Part.ResultMeshId)                                                                                | Gets the related Result Mesh’s ObjectId.                      |
| [`Assignment`](#Part.Assignment)                                                                                    | Gets or sets the Assignment.                                  |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Elements`](#Part.Elements)                                                                                        | Gets the Elements.                                            |
| [`Material`](Material.md#Material)                                                                                  | Gets or sets the Material.                                    |
| [`Average`](#Part.Average)                                                                                          | Gets the Average.                                             |
| [`Maximum`](#Part.Maximum)                                                                                          | Gets the Maximum.                                             |
| [`Minimum`](#Part.Minimum)                                                                                          | Gets the Minimum.                                             |
| [`StandardDeviation`](#Part.StandardDeviation)                                                                      | Gets the StandardDeviation.                                   |
| [`Nodes`](#Part.Nodes)                                                                                              | Gets the Nodes.                                               |
| [`ApproximateSurfaceArea`](#Part.ApproximateSurfaceArea)                                                            | Gets the ApproximateSurfaceArea.                              |
| [`LengthX`](#Part.LengthX)                                                                                          | Gets the LengthX.                                             |
| [`LengthY`](#Part.LengthY)                                                                                          | Gets the LengthY.                                             |
| [`LengthZ`](#Part.LengthZ)                                                                                          | Gets the LengthZ.                                             |
| [`Mass`](#Part.Mass)                                                                                                | Gets the Mass.                                                |
| [`CentroidX`](#Part.CentroidX)                                                                                      | Gets the CentroidX.                                           |
| [`CentroidY`](#Part.CentroidY)                                                                                      | Gets the CentroidY.                                           |
| [`CentroidZ`](#Part.CentroidZ)                                                                                      | Gets the CentroidZ.                                           |
| [`MomentOfInertiaIp1`](#Part.MomentOfInertiaIp1)                                                                    | Gets the MomentOfInertiaIp1.                                  |
| [`MomentOfInertiaIp2`](#Part.MomentOfInertiaIp2)                                                                    | Gets the MomentOfInertiaIp2.                                  |
| [`MomentOfInertiaIp3`](#Part.MomentOfInertiaIp3)                                                                    | Gets the MomentOfInertiaIp3.                                  |
| [`Volume`](Results/Volume.md#Volume)                                                                                | Gets the Volume.                                              |
| [`MeshMetric`](#Part.MeshMetric)                                                                                    | Gets the MeshMetric.                                          |
| [`Visible`](#Part.Visible)                                                                                          | Gets or sets the Visible.                                     |
| [`Suppressed`](#Part.Suppressed)                                                                                    | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Part.Children)                                                                                        | Gets the list of children.                                    |
| [`Comments`](#Part.Comments)                                                                                        | Gets the list of associated comments.                         |
| [`Figures`](#Part.Figures)                                                                                          | Gets the list of associated figures.                          |
| [`Images`](#Part.Images)                                                                                            | Gets the list of associated images.                           |
| [`ReadOnly`](#Part.ReadOnly)                                                                                        | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Part.Properties)                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Part.VisibleProperties)                                                                      | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Part
```

## Property detail

### *property* Part.MaterialName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialName.

<!-- !! processed by numpydoc !! -->

### *property* Part.Hidden *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Hide or show the body.

<!-- !! processed by numpydoc !! -->

### *property* Part.ConfigurationId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the related Result Mesh’s ConfigurationId.

<!-- !! processed by numpydoc !! -->

### *property* Part.ResultMeshId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the related Result Mesh’s ObjectId.

<!-- !! processed by numpydoc !! -->

### *property* Part.Assignment *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Assignment.

<!-- !! processed by numpydoc !! -->

### *property* Part.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBodyGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Part.Elements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elements.

<!-- !! processed by numpydoc !! -->

### *property* Part.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* Part.Average *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* Part.Maximum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* Part.Minimum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* Part.StandardDeviation *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StandardDeviation.

<!-- !! processed by numpydoc !! -->

### *property* Part.Nodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Nodes.

<!-- !! processed by numpydoc !! -->

### *property* Part.ApproximateSurfaceArea *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ApproximateSurfaceArea.

<!-- !! processed by numpydoc !! -->

### *property* Part.LengthX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthX.

<!-- !! processed by numpydoc !! -->

### *property* Part.LengthY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthY.

<!-- !! processed by numpydoc !! -->

### *property* Part.LengthZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthZ.

<!-- !! processed by numpydoc !! -->

### *property* Part.Mass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Mass.

<!-- !! processed by numpydoc !! -->

### *property* Part.CentroidX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CentroidX.

<!-- !! processed by numpydoc !! -->

### *property* Part.CentroidY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CentroidY.

<!-- !! processed by numpydoc !! -->

### *property* Part.CentroidZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CentroidZ.

<!-- !! processed by numpydoc !! -->

### *property* Part.MomentOfInertiaIp1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentOfInertiaIp1.

<!-- !! processed by numpydoc !! -->

### *property* Part.MomentOfInertiaIp2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentOfInertiaIp2.

<!-- !! processed by numpydoc !! -->

### *property* Part.MomentOfInertiaIp3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentOfInertiaIp3.

<!-- !! processed by numpydoc !! -->

### *property* Part.Volume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Volume.

<!-- !! processed by numpydoc !! -->

### *property* Part.MeshMetric *: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshMetric.

<!-- !! processed by numpydoc !! -->

### *property* Part.Visible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

### *property* Part.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Part.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Part.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Part.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Part.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Part.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Part.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Part.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Part.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Part.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Part.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Part.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### Part.CreateParameter(paramPath: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Part.RemoveParameter(paramPath: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Part.GenerateMesh()

Run the GenerateMesh action.

<!-- !! processed by numpydoc !! -->

### Part.PreviewInflation()

Run the PreviewInflation action.

<!-- !! processed by numpydoc !! -->

### Part.PreviewSurfaceMesh()

Run the PreviewSurfaceMesh action.

<!-- !! processed by numpydoc !! -->

### Part.Update()

Run the Update action.

<!-- !! processed by numpydoc !! -->

### Part.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Part.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Part.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Part.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Part.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Part.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Part.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Part.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Part.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Part.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Part.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Part.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Part.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->
