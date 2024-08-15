# `STLAMSupport`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.STLAMSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a STLAMSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------|-----------------------------------------------------------------------------------|
| `ClearGeneratedData`                         | Run the ClearGeneratedData action.                                                |
| `GenerateSupportBodies`                      | Generate Support Bodies.                                                          |
| `CreateNamedSelectionOfGeneratedElements`    | Create a named selection of the generated elements.                               |
| `CreateNamedSelectionOfExternalElementFaces` | Create a named selection of the generated exterior element faces.                 |
| `ExportStl`                                  | Export STL data.                                                                  |
| `GetGeneratedBody`                           | Returns the generated body object                                                 |
| `ImportSTL`                                  | Run the ImportSTL action.                                                         |
| `AddCommandSnippet`                          | Creates a new CommandSnippet                                                      |
| `Delete`                                     | Run the Delete action.                                                            |
| `GetChildren`                                | Gets the list of children, filtered by type.                                      |
| `GetChildren`                                | Gets the list of children, filtered by type.                                      |
| `AddComment`                                 | Creates a new child Comment.                                                      |
| `AddFigure`                                  | Creates a new child Figure.                                                       |
| `AddImage`                                   | Creates a new child Image.                                                        |
| `Activate`                                   | Activate the current object.                                                      |
| `CopyTo`                                     | Copies all visible properties from this object to another.                        |
| `Duplicate`                                  | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`                    | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`                        | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`                             | Get a property by its unique name.                                                |
| `PropertyByAPIName`                          | Get a property by its API name.                                                   |
| `CreateParameter`                            | Creates a new parameter for a Property.                                           |
| `GetParameter`                               | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`                            | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------|---------------------------------------------------------------|
| `VoxelSize`                      | Gets the VoxelSize.                                           |
| `InternalObject`                 | Gets the internal object. For advanced usage only.            |
| `Filename`                       | Gets or sets the Filename.                                    |
| `SubsampleRate`                  | Gets or sets the SubsampleRate.                               |
| `ElementSize`                    | Gets the ElementSize.                                         |
| `StlWallThickness`               | Gets or sets the StlWallThickness.                            |
| `LengthUnits`                    | Gets or sets the LengthUnits.                                 |
| `STLSupportView`                 | Gets or sets the STLSupportView.                              |
| `Source`                         | Gets or sets the Source.                                      |
| `STLSupportType`                 | Gets or sets the STLSupportType.                              |
| `STL`                            | Gets or sets the STL.                                         |
| `GeometrySelection`              | Gets or sets the GeometrySelection.                           |
| `DataModelObjectCategory`        | Gets the current DataModelObject's category.                  |
| `ThermalConductivityMultipleInX` | Gets or sets the ThermalConductivityMultipleInX.              |
| `ThermalConductivityMultipleInY` | Gets or sets the ThermalConductivityMultipleInY.              |
| `ThermalConductivityMultipleInZ` | Gets or sets the ThermalConductivityMultipleInZ.              |
| `DensityMultiple`                | Gets or sets the DensityMultiple.                             |
| `MaterialMultiplier`             | Gets or sets the MaterialMultiplier.                          |
| `ElasticModulusMultipleInX`      | Gets or sets the ElasticModulusMultipleInX.                   |
| `ElasticModulusMultipleInY`      | Gets or sets the ElasticModulusMultipleInY.                   |
| `ElasticModulusMultipleInZ`      | Gets or sets the ElasticModulusMultipleInZ.                   |
| `ShearModulusMultipleInXY`       | Gets or sets the ShearModulusMultipleInXY.                    |
| `ShearModulusMultipleInXZ`       | Gets or sets the ShearModulusMultipleInXZ.                    |
| `ShearModulusMultipleInYZ`       | Gets or sets the ShearModulusMultipleInYZ.                    |
| `WallSpacing`                    | Gets or sets the WallSpacing.                                 |
| `WallThickness`                  | Gets or sets the WallThickness.                               |
| `Volume`                         | Gets or sets the Volume.                                      |
| `MultiplierEntry`                | Gets or sets the MultiplierEntry.                             |
| `SupportType`                    | Gets or sets the SupportType.                                 |
| `Children`                       | Gets the list of children.                                    |
| `Comments`                       | Gets the list of associated comments.                         |
| `Figures`                        | Gets the list of associated figures.                          |
| `Images`                         | Gets the list of associated images.                           |
| `InternalObject`                 | Gets the internal object. For advanced usage only.            |
| `Properties`                     | Gets the list of properties for this object.                  |
| `VisibleProperties`              | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

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

### *property* STLAMSupport.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.STLSupportView *: [Ansys.Mechanical.DataModel.Enums.STLSupportViewType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/STLSupportViewType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.STLSupportViewType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STLSupportView.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.Source *: [Ansys.Mechanical.DataModel.Enums.AMStlSource](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMStlSource.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMStlSource) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Source.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.STLSupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportSTLType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMSupportSTLType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMSupportSTLType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STLSupportType.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.STL *: [Ansys.ACT.Automation.Mechanical.STL](../../../../../../v241/Ansys/ACT/Automation/Mechanical/STL.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.STL) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STL.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.GeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

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

### *property* STLAMSupport.MultiplierEntry *: [Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMMultiplierEntryType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiplierEntry.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.SupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMSupportType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMSupportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SupportType.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* STLAMSupport.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

## Method detail

### STLAMSupport.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.GenerateSupportBodies(progress: [Ansys.Mechanical.Application.Progress](../../../../../../v241/Ansys/Mechanical/Application/Progress.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.Progress))

Generate Support Bodies.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.CreateNamedSelectionOfGeneratedElements()

Create a named selection of the generated elements.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.CreateNamedSelectionOfExternalElementFaces()

Create a named selection of the generated exterior element faces.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.ExportStl(filename: System.String, progress: [Ansys.Mechanical.Application.Progress](../../../../../../v241/Ansys/Mechanical/Application/Progress.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.Progress))

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

### STLAMSupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### STLAMSupport.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

