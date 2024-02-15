# STLAMSupport

### *class* STLAMSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a STLAMSupport.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#STLAMSupport.ClearGeneratedData)                                                 | Run the ClearGeneratedData action.                                                |
|----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateSupportBodies`](#STLAMSupport.GenerateSupportBodies)                                           | Generate Support Bodies.                                                          |
| [`CreateNamedSelectionOfGeneratedElements`](#STLAMSupport.CreateNamedSelectionOfGeneratedElements)       | Create a named selection of the generated elements.                               |
| [`CreateNamedSelectionOfExternalElementFaces`](#STLAMSupport.CreateNamedSelectionOfExternalElementFaces) | Create a named selection of the generated exterior element faces.                 |
| [`ExportStl`](#STLAMSupport.ExportStl)                                                                   | Export STL data.                                                                  |
| [`GetGeneratedBody`](#STLAMSupport.GetGeneratedBody)                                                     | Returns the generated body object                                                 |
| [`ImportSTL`](#STLAMSupport.ImportSTL)                                                                   | Run the ImportSTL action.                                                         |
| [`AddCommandSnippet`](#STLAMSupport.AddCommandSnippet)                                                   | Creates a new CommandSnippet                                                      |
| [`Delete`](#STLAMSupport.Delete)                                                                         | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#STLAMSupport.AddComment)                                                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](#STLAMSupport.AddFigure)                                                                   | Creates a new child Figure.                                                       |
| [`AddImage`](#STLAMSupport.AddImage)                                                                     | Creates a new child Image.                                                        |
| [`Activate`](#STLAMSupport.Activate)                                                                     | Activate the current object.                                                      |
| [`CopyTo`](#STLAMSupport.CopyTo)                                                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#STLAMSupport.Duplicate)                                                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#STLAMSupport.GroupAllSimilarChildren)                                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#STLAMSupport.GroupSimilarObjects)                                               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#STLAMSupport.PropertyByName)                                                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#STLAMSupport.PropertyByAPIName)                                                   | Get a property by its API name.                                                   |
| [`CreateParameter`](#STLAMSupport.CreateParameter)                                                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#STLAMSupport.GetParameter)                                                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#STLAMSupport.RemoveParameter)                                                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`VoxelSize`](#STLAMSupport.VoxelSize)                                                                                 | Gets the VoxelSize.                                           |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Filename`](#STLAMSupport.Filename)                                                                                   | Gets or sets the Filename.                                    |
| [`SubsampleRate`](#STLAMSupport.SubsampleRate)                                                                         | Gets or sets the SubsampleRate.                               |
| [`ElementSize`](#STLAMSupport.ElementSize)                                                                             | Gets the ElementSize.                                         |
| [`StlWallThickness`](#STLAMSupport.StlWallThickness)                                                                   | Gets or sets the StlWallThickness.                            |
| [`LengthUnits`](#STLAMSupport.LengthUnits)                                                                             | Gets or sets the LengthUnits.                                 |
| [`STLSupportView`](#STLAMSupport.STLSupportView)                                                                       | Gets or sets the STLSupportView.                              |
| [`Source`](#STLAMSupport.Source)                                                                                       | Gets or sets the Source.                                      |
| [`STLSupportType`](#STLAMSupport.STLSupportType)                                                                       | Gets or sets the STLSupportType.                              |
| [`STL`](../STL.md#STL)                                                                                                 | Gets or sets the STL.                                         |
| [`GeometrySelection`](#STLAMSupport.GeometrySelection)                                                                 | Gets or sets the GeometrySelection.                           |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ThermalConductivityMultipleInX`](#STLAMSupport.ThermalConductivityMultipleInX)                                       | Gets or sets the ThermalConductivityMultipleInX.              |
| [`ThermalConductivityMultipleInY`](#STLAMSupport.ThermalConductivityMultipleInY)                                       | Gets or sets the ThermalConductivityMultipleInY.              |
| [`ThermalConductivityMultipleInZ`](#STLAMSupport.ThermalConductivityMultipleInZ)                                       | Gets or sets the ThermalConductivityMultipleInZ.              |
| [`DensityMultiple`](#STLAMSupport.DensityMultiple)                                                                     | Gets or sets the DensityMultiple.                             |
| [`MaterialMultiplier`](#STLAMSupport.MaterialMultiplier)                                                               | Gets or sets the MaterialMultiplier.                          |
| [`ElasticModulusMultipleInX`](#STLAMSupport.ElasticModulusMultipleInX)                                                 | Gets or sets the ElasticModulusMultipleInX.                   |
| [`ElasticModulusMultipleInY`](#STLAMSupport.ElasticModulusMultipleInY)                                                 | Gets or sets the ElasticModulusMultipleInY.                   |
| [`ElasticModulusMultipleInZ`](#STLAMSupport.ElasticModulusMultipleInZ)                                                 | Gets or sets the ElasticModulusMultipleInZ.                   |
| [`ShearModulusMultipleInXY`](#STLAMSupport.ShearModulusMultipleInXY)                                                   | Gets or sets the ShearModulusMultipleInXY.                    |
| [`ShearModulusMultipleInXZ`](#STLAMSupport.ShearModulusMultipleInXZ)                                                   | Gets or sets the ShearModulusMultipleInXZ.                    |
| [`ShearModulusMultipleInYZ`](#STLAMSupport.ShearModulusMultipleInYZ)                                                   | Gets or sets the ShearModulusMultipleInYZ.                    |
| [`WallSpacing`](#STLAMSupport.WallSpacing)                                                                             | Gets or sets the WallSpacing.                                 |
| [`WallThickness`](#STLAMSupport.WallThickness)                                                                         | Gets or sets the WallThickness.                               |
| [`Volume`](../Results/Volume.md#Volume)                                                                                | Gets or sets the Volume.                                      |
| [`MultiplierEntry`](#STLAMSupport.MultiplierEntry)                                                                     | Gets or sets the MultiplierEntry.                             |
| [`SupportType`](#STLAMSupport.SupportType)                                                                             | Gets or sets the SupportType.                                 |
| [`Children`](#STLAMSupport.Children)                                                                                   | Gets the list of children.                                    |
| [`Comments`](#STLAMSupport.Comments)                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#STLAMSupport.Figures)                                                                                     | Gets the list of associated figures.                          |
| [`Images`](#STLAMSupport.Images)                                                                                       | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#STLAMSupport.Properties)                                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#STLAMSupport.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import STLAMSupport
```

## Property detail

### *property* STLAMSupport.VoxelSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VoxelSize.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.Filename *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Filename.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.SubsampleRate *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubsampleRate.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.ElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ElementSize.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.StlWallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StlWallThickness.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.STLSupportView *: [Ansys.Mechanical.DataModel.Enums.STLSupportViewType](../../../../Mechanical/DataModel/Enums/STLSupportViewType.md#STLSupportViewType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STLSupportView.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.Source *: [Ansys.Mechanical.DataModel.Enums.AMStlSource](../../../../Mechanical/DataModel/Enums/AMStlSource.md#AMStlSource) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Source.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.STLSupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportSTLType](../../../../Mechanical/DataModel/Enums/AMSupportSTLType.md#AMSupportSTLType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STLSupportType.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.STL *: [Ansys.ACT.Automation.Mechanical.STL](../STL.md#STL) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STL.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.GeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.ThermalConductivityMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInX.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.ThermalConductivityMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInY.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.ThermalConductivityMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInZ.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.DensityMultiple *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DensityMultiple.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.MaterialMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.ElasticModulusMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInX.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.ElasticModulusMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInY.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.ElasticModulusMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInZ.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.ShearModulusMultipleInXY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXY.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.ShearModulusMultipleInXZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXZ.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.ShearModulusMultipleInYZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInYZ.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.WallSpacing *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallSpacing.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.WallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.Volume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Volume.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.MultiplierEntry *: [Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType](../../../../Mechanical/DataModel/Enums/AMMultiplierEntryType.md#AMMultiplierEntryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiplierEntry.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.SupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportType](../../../../Mechanical/DataModel/Enums/AMSupportType.md#AMSupportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SupportType.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### STLAMSupport.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.GenerateSupportBodies(progress: [Ansys.Mechanical.Application.Progress](../../../../Mechanical/Application/Progress.md#Progress))

Generate Support Bodies.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.CreateNamedSelectionOfGeneratedElements()

Create a named selection of the generated elements.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.CreateNamedSelectionOfExternalElementFaces()

Create a named selection of the generated exterior element faces.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.ExportStl(filename: System.String, progress: [Ansys.Mechanical.Application.Progress](../../../../Mechanical/Application/Progress.md#Progress))

Export STL data.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.GetGeneratedBody()

Returns the generated body object

<!-- !! processed by numpydoc !! -->

### STLAMSupport.ImportSTL()

Run the ImportSTL action.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### STLAMSupport.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
