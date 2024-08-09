# `STLAMSupport`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.STLAMSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a STLAMSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.ClearGeneratedData)                                                 | Run the ClearGeneratedData action.                                                |
| [`GenerateSupportBodies`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.GenerateSupportBodies)                                           | Generate Support Bodies.                                                          |
| [`CreateNamedSelectionOfGeneratedElements`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.CreateNamedSelectionOfGeneratedElements)       | Create a named selection of the generated elements.                               |
| [`CreateNamedSelectionOfExternalElementFaces`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.CreateNamedSelectionOfExternalElementFaces) | Create a named selection of the generated exterior element faces.                 |
| [`ExportStl`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.ExportStl)                                                                   | Export STL data.                                                                  |
| [`GetGeneratedBody`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.GetGeneratedBody)                                                     | Returns the generated body object                                                 |
| [`ImportSTL`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.ImportSTL)                                                                   | Run the ImportSTL action.                                                         |
| [`AddCommandSnippet`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.AddCommandSnippet)                                                   | Creates a new CommandSnippet                                                      |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.Delete)                                                                         | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#id1)                                                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#id1)                                                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.AddComment)                                                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.AddFigure)                                                                   | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.AddImage)                                                                     | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.Activate)                                                                     | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.CopyTo)                                                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.Duplicate)                                                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.GroupAllSimilarChildren)                                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.GroupSimilarObjects)                                               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.PropertyByName)                                                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.PropertyByAPIName)                                                   | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.CreateParameter)                                                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.GetParameter)                                                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.RemoveParameter)                                                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`VoxelSize`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.VoxelSize)                                           | Gets the VoxelSize.                                           |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#id0)                                                         | Gets the internal object. For advanced usage only.            |
| [`Filename`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.Filename)                                             | Gets or sets the Filename.                                    |
| [`SubsampleRate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.SubsampleRate)                                   | Gets or sets the SubsampleRate.                               |
| [`ElementSize`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.ElementSize)                                       | Gets the ElementSize.                                         |
| [`StlWallThickness`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.StlWallThickness)                             | Gets or sets the StlWallThickness.                            |
| [`LengthUnits`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.LengthUnits)                                       | Gets or sets the LengthUnits.                                 |
| [`STLSupportView`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.STLSupportView)                                 | Gets or sets the STLSupportView.                              |
| [`Source`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.Source)                                                 | Gets or sets the Source.                                      |
| [`STLSupportType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.STLSupportType)                                 | Gets or sets the STLSupportType.                              |
| [`STL`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.STL)                                                       | Gets or sets the STL.                                         |
| [`GeometrySelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.GeometrySelection)                           | Gets or sets the GeometrySelection.                           |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.DataModelObjectCategory)               | Gets the current DataModelObject's category.                  |
| [`ThermalConductivityMultipleInX`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.ThermalConductivityMultipleInX) | Gets or sets the ThermalConductivityMultipleInX.              |
| [`ThermalConductivityMultipleInY`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.ThermalConductivityMultipleInY) | Gets or sets the ThermalConductivityMultipleInY.              |
| [`ThermalConductivityMultipleInZ`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.ThermalConductivityMultipleInZ) | Gets or sets the ThermalConductivityMultipleInZ.              |
| [`DensityMultiple`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.DensityMultiple)                               | Gets or sets the DensityMultiple.                             |
| [`MaterialMultiplier`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.MaterialMultiplier)                         | Gets or sets the MaterialMultiplier.                          |
| [`ElasticModulusMultipleInX`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.ElasticModulusMultipleInX)           | Gets or sets the ElasticModulusMultipleInX.                   |
| [`ElasticModulusMultipleInY`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.ElasticModulusMultipleInY)           | Gets or sets the ElasticModulusMultipleInY.                   |
| [`ElasticModulusMultipleInZ`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.ElasticModulusMultipleInZ)           | Gets or sets the ElasticModulusMultipleInZ.                   |
| [`ShearModulusMultipleInXY`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.ShearModulusMultipleInXY)             | Gets or sets the ShearModulusMultipleInXY.                    |
| [`ShearModulusMultipleInXZ`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.ShearModulusMultipleInXZ)             | Gets or sets the ShearModulusMultipleInXZ.                    |
| [`ShearModulusMultipleInYZ`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.ShearModulusMultipleInYZ)             | Gets or sets the ShearModulusMultipleInYZ.                    |
| [`WallSpacing`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.WallSpacing)                                       | Gets or sets the WallSpacing.                                 |
| [`WallThickness`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.WallThickness)                                   | Gets or sets the WallThickness.                               |
| [`Volume`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.Volume)                                                 | Gets or sets the Volume.                                      |
| [`MultiplierEntry`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.MultiplierEntry)                               | Gets or sets the MultiplierEntry.                             |
| [`SupportType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.SupportType)                                       | Gets or sets the SupportType.                                 |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.Children)                                             | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.Comments)                                             | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.Figures)                                               | Gets the list of associated figures.                          |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.Images)                                                 | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#id0)                                                         | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.Properties)                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/STLAMSupport.md#STLAMSupport.VisibleProperties)                           | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="STLAMSupport.VoxelSize"></a>

### *property* STLAMSupport.VoxelSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VoxelSize.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.InternalObject"></a>

### *property* STLAMSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Filename"></a>

### *property* STLAMSupport.Filename *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Filename.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.SubsampleRate"></a>

### *property* STLAMSupport.SubsampleRate *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubsampleRate.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ElementSize"></a>

### *property* STLAMSupport.ElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ElementSize.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.StlWallThickness"></a>

### *property* STLAMSupport.StlWallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StlWallThickness.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.LengthUnits"></a>

### *property* STLAMSupport.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.STLSupportView"></a>

### *property* STLAMSupport.STLSupportView *: [Ansys.Mechanical.DataModel.Enums.STLSupportViewType](../../../../Mechanical/DataModel/Enums/STLSupportViewType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.STLSupportViewType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STLSupportView.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Source"></a>

### *property* STLAMSupport.Source *: [Ansys.Mechanical.DataModel.Enums.AMStlSource](../../../../Mechanical/DataModel/Enums/AMStlSource.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMStlSource) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Source.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.STLSupportType"></a>

### *property* STLAMSupport.STLSupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportSTLType](../../../../Mechanical/DataModel/Enums/AMSupportSTLType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMSupportSTLType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STLSupportType.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.STL"></a>

### *property* STLAMSupport.STL *: [Ansys.ACT.Automation.Mechanical.STL](../STL.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.STL) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STL.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.GeometrySelection"></a>

### *property* STLAMSupport.GeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.DataModelObjectCategory"></a>

### *property* STLAMSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ThermalConductivityMultipleInX"></a>

### *property* STLAMSupport.ThermalConductivityMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ThermalConductivityMultipleInY"></a>

### *property* STLAMSupport.ThermalConductivityMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ThermalConductivityMultipleInZ"></a>

### *property* STLAMSupport.ThermalConductivityMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.DensityMultiple"></a>

### *property* STLAMSupport.DensityMultiple *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DensityMultiple.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.MaterialMultiplier"></a>

### *property* STLAMSupport.MaterialMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ElasticModulusMultipleInX"></a>

### *property* STLAMSupport.ElasticModulusMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ElasticModulusMultipleInY"></a>

### *property* STLAMSupport.ElasticModulusMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ElasticModulusMultipleInZ"></a>

### *property* STLAMSupport.ElasticModulusMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ShearModulusMultipleInXY"></a>

### *property* STLAMSupport.ShearModulusMultipleInXY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXY.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ShearModulusMultipleInXZ"></a>

### *property* STLAMSupport.ShearModulusMultipleInXZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXZ.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ShearModulusMultipleInYZ"></a>

### *property* STLAMSupport.ShearModulusMultipleInYZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInYZ.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.WallSpacing"></a>

### *property* STLAMSupport.WallSpacing *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallSpacing.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.WallThickness"></a>

### *property* STLAMSupport.WallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Volume"></a>

### *property* STLAMSupport.Volume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.MultiplierEntry"></a>

### *property* STLAMSupport.MultiplierEntry *: [Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType](../../../../Mechanical/DataModel/Enums/AMMultiplierEntryType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiplierEntry.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.SupportType"></a>

### *property* STLAMSupport.SupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportType](../../../../Mechanical/DataModel/Enums/AMSupportType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMSupportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SupportType.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Children"></a>

### *property* STLAMSupport.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Comments"></a>

### *property* STLAMSupport.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Figures"></a>

### *property* STLAMSupport.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Images"></a>

### *property* STLAMSupport.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* STLAMSupport.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Properties"></a>

### *property* STLAMSupport.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.VisibleProperties"></a>

### *property* STLAMSupport.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="STLAMSupport.ClearGeneratedData"></a>

### STLAMSupport.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.GenerateSupportBodies"></a>

### STLAMSupport.GenerateSupportBodies(progress: [Ansys.Mechanical.Application.Progress](../../../../Mechanical/Application/Progress.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.Progress))

Generate Support Bodies.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.CreateNamedSelectionOfGeneratedElements"></a>

### STLAMSupport.CreateNamedSelectionOfGeneratedElements()

Create a named selection of the generated elements.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.CreateNamedSelectionOfExternalElementFaces"></a>

### STLAMSupport.CreateNamedSelectionOfExternalElementFaces()

Create a named selection of the generated exterior element faces.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ExportStl"></a>

### STLAMSupport.ExportStl(filename: System.String, progress: [Ansys.Mechanical.Application.Progress](../../../../Mechanical/Application/Progress.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.Progress))

Export STL data.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.GetGeneratedBody"></a>

### STLAMSupport.GetGeneratedBody()

Returns the generated body object

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.ImportSTL"></a>

### STLAMSupport.ImportSTL()

Run the ImportSTL action.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.AddCommandSnippet"></a>

### STLAMSupport.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Delete"></a>

### STLAMSupport.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.GetChildren"></a>

### STLAMSupport.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### STLAMSupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.AddComment"></a>

### STLAMSupport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.AddFigure"></a>

### STLAMSupport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.AddImage"></a>

### STLAMSupport.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Activate"></a>

### STLAMSupport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.CopyTo"></a>

### STLAMSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.Duplicate"></a>

### STLAMSupport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.GroupAllSimilarChildren"></a>

### STLAMSupport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.GroupSimilarObjects"></a>

### STLAMSupport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.PropertyByName"></a>

### STLAMSupport.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.PropertyByAPIName"></a>

### STLAMSupport.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.CreateParameter"></a>

### STLAMSupport.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.GetParameter"></a>

### STLAMSupport.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="STLAMSupport.RemoveParameter"></a>

### STLAMSupport.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

