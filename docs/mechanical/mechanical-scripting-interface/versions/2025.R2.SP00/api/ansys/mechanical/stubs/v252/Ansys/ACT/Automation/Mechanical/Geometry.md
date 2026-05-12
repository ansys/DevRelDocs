# `Geometry`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Geometry"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Geometry

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Geometry.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Geometry.Activate)                                                                   | Activate the current object.                                                      |
| [`AddComment`](#Geometry.AddComment)                                                               | Creates a new child Comment.                                                      |
| [`AddDistributedMass`](#Geometry.AddDistributedMass)                                               | Creates a new DistributedMass                                                     |
| [`AddElementOrientation`](#Geometry.AddElementOrientation)                                         | Creates a new ElementOrientation                                                  |
| [`AddFigure`](#Geometry.AddFigure)                                                                 | Creates a new child Figure.                                                       |
| [`AddImage`](#Geometry.AddImage)                                                                   | Creates a new child Image.                                                        |
| [`AddImportedElementOrientationExternalData`](#Geometry.AddImportedElementOrientationExternalData) | Creates a new Imported Element Orientation (External Data).                       |
| [`AddImportedThicknessExternalData`](#Geometry.AddImportedThicknessExternalData)                   | Creates a new Imported Thickness (External Data).                                 |
| [`AddLayeredSection`](#Geometry.AddLayeredSection)                                                 | Creates a new child LayeredSection.                                               |
| [`AddPointMass`](#Geometry.AddPointMass)                                                           | Creates a new PointMass                                                           |
| [`AddSurfaceCoating`](#Geometry.AddSurfaceCoating)                                                 | Creates a new SurfaceCoating                                                      |
| [`AddThermalPointMass`](#Geometry.AddThermalPointMass)                                             | Creates a new ThermalPointMass                                                    |
| [`AddThickness`](#Geometry.AddThickness)                                                           | Creates a new child Thickness.                                                    |
| [`CenterOfMass`](#Geometry.CenterOfMass)                                                           | CenterOfMass method.                                                              |
| [`CopyTo`](#Geometry.CopyTo)                                                                       | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Geometry.CreateParameter)                                                     | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#Geometry.Duplicate)                                                                 | Creates a copy of the current DataModelObject.                                    |
| [`ExportParts`](#Geometry.ExportParts)                                                             | ExportParts method.                                                               |
| [`FreezeMeshOnAllParts`](#Geometry.FreezeMeshOnAllParts)                                           | Run the FreezeMeshOnAllParts action.                                              |
| [`GetBody`](#Geometry.GetBody)                                                                     | Gets the Body associated with the given IGeoBody                                  |
| [`GetChildren`](#Geometry.GetChildren)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Geometry.GetParameter)                                                           | Gets the parameter corresponding to the given property.                           |
| [`GetPart`](#Geometry.GetPart)                                                                     | Gets the Part associated with the given IGeoPart                                  |
| [`GroupAllSimilarChildren`](#Geometry.GroupAllSimilarChildren)                                     | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Geometry.GroupSimilarObjects)                                             | Run the GroupSimilarObjects action.                                               |
| [`InvertSuppressedBodySet`](#Geometry.InvertSuppressedBodySet)                                     | Invert all parts Suppressed property.                                             |
| [`PropertyByAPIName`](#Geometry.PropertyByAPIName)                                                 | Get a property by its API name.                                                   |
| [`PropertyByName`](#Geometry.PropertyByName)                                                       | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Geometry.RemoveParameter)                                                     | Removes the parameter from the parameter set corresponding to the given property. |
| [`ResetBodyColors`](#Geometry.ResetBodyColors)                                                     | Run the ResetBodyColors action.                                                   |
| [`UnfreezeMeshOnAllParts`](#Geometry.UnfreezeMeshOnAllParts)                                       | Run the UnfreezeMeshOnAllParts action.                                            |
| [`UnsuppressAllBodies`](#Geometry.UnsuppressAllBodies)                                             | Unsuppress all the bodies that were suppressed.                                   |
| [`UpdateGeometryFromSource`](#Geometry.UpdateGeometryFromSource)                                   | Run the UpdateGeometryFromSource action.                                          |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ActiveBodies`](#Geometry.ActiveBodies)                                     | Gets the ActiveBodies.                                        |
| [`AnalysisType`](#Geometry.AnalysisType)                                     | Gets the AnalysisType.                                        |
| [`AssignMaterialOnUpdate`](#Geometry.AssignMaterialOnUpdate)                 | Gets or sets the AssignMaterialOnUpdate.                      |
| [`AttachFileViaTempFile`](#Geometry.AttachFileViaTempFile)                   | Gets or sets the AttachFileViaTempFile.                       |
| [`AttributeKey`](#Geometry.AttributeKey)                                     | Gets the AttributeKey.                                        |
| [`Attributes`](#Geometry.Attributes)                                         | Gets the Attributes.                                          |
| [`Average`](#Geometry.Average)                                               | Gets the Average.                                             |
| [`Bodies`](#Geometry.Bodies)                                                 | Gets the Bodies.                                              |
| [`CanChangeCADUnits`](#Geometry.CanChangeCADUnits)                           | Gets the CanChangeCADUnits.                                   |
| [`Children`](#Geometry.Children)                                             | Gets the list of children.                                    |
| [`Comments`](#Geometry.Comments)                                             | Gets the list of associated comments.                         |
| [`ComparePartsOnUpdate`](#Geometry.ComparePartsOnUpdate)                     | Gets the ComparePartsOnUpdate.                                |
| [`ComparePartsTolerance`](#Geometry.ComparePartsTolerance)                   | Gets the ComparePartsTolerance.                               |
| [`DataModelObjectCategory`](#Geometry.DataModelObjectCategory)               | Gets the current DataModelObject’s category.                  |
| [`DecomposeDisjointGeometry`](#Geometry.DecomposeDisjointGeometry)           | Gets the DecomposeDisjointGeometry.                           |
| [`DisplayStyle`](#Geometry.DisplayStyle)                                     | Gets or sets the DisplayStyle.                                |
| [`ElementControl`](#Geometry.ElementControl)                                 | Gets or sets the ElementControl.                              |
| [`Elements`](#Geometry.Elements)                                             | Gets the Elements.                                            |
| [`EnclosureAndSymmetryProcessing`](#Geometry.EnclosureAndSymmetryProcessing) | Gets the EnclosureAndSymmetryProcessing.                      |
| [`EndPlaneRotationAboutX`](#Geometry.EndPlaneRotationAboutX)                 | Gets or sets the EndPlaneRotationAboutX.                      |
| [`EndPlaneRotationAboutY`](#Geometry.EndPlaneRotationAboutY)                 | Gets or sets the EndPlaneRotationAboutY.                      |
| [`FiberLength`](#Geometry.FiberLength)                                       | Gets or sets the FiberLength.                                 |
| [`Figures`](#Geometry.Figures)                                               | Gets the list of associated figures.                          |
| [`GeometryPreferencesReadOnly`](#Geometry.GeometryPreferencesReadOnly)       | Gets the GeometryPreferencesReadOnly.                         |
| [`Images`](#Geometry.Images)                                                 | Gets the list of associated images.                           |
| [`ImportCoordinateSystems`](#Geometry.ImportCoordinateSystems)               | Gets the ImportCoordinateSystems.                             |
| [`InternalObject`](#Geometry.InternalObject)                                 | Gets the internal object. For advanced usage only.            |
| [`LengthUnit`](#Geometry.LengthUnit)                                         | Gets or sets the LengthUnit.                                  |
| [`LengthX`](#Geometry.LengthX)                                               | Gets the LengthX.                                             |
| [`LengthY`](#Geometry.LengthY)                                               | Gets the LengthY.                                             |
| [`LengthZ`](#Geometry.LengthZ)                                               | Gets the LengthZ.                                             |
| [`LineBodies`](#Geometry.LineBodies)                                         | Gets the LineBodies.                                          |
| [`Mass`](#Geometry.Mass)                                                     | Gets the Mass.                                                |
| [`MaterialProperties`](#Geometry.MaterialProperties)                         | Gets the MaterialProperties.                                  |
| [`Maximum`](#Geometry.Maximum)                                               | Gets the Maximum.                                             |
| [`MeshMetric`](#Geometry.MeshMetric)                                         | Gets the MeshMetric.                                          |
| [`MeshVolume`](#Geometry.MeshVolume)                                         | Gets the MeshVolume.                                          |
| [`Minimum`](#Geometry.Minimum)                                               | Gets the Minimum.                                             |
| [`MixedImportResolution`](#Geometry.MixedImportResolution)                   | Gets the MixedImportResolution.                               |
| [`Model2DBehavior`](#Geometry.Model2DBehavior)                               | Gets or sets the Model2DBehavior.                             |
| [`NamedSelectionKey`](#Geometry.NamedSelectionKey)                           | Gets the NamedSelectionKey.                                   |
| [`NamedSelections`](#Geometry.NamedSelections)                               | Gets the NamedSelections.                                     |
| [`Nodes`](#Geometry.Nodes)                                                   | Gets the Nodes.                                               |
| [`ParameterKey`](#Geometry.ParameterKey)                                     | Gets the ParameterKey.                                        |
| [`Parameters`](#Geometry.Parameters)                                         | Gets the Parameters.                                          |
| [`Properties`](#Geometry.Properties)                                         | Gets the list of properties for this object.                  |
| [`ReaderModeSavesUpdatedFile`](#Geometry.ReaderModeSavesUpdatedFile)         | Gets or sets the ReaderModeSavesUpdatedFile.                  |
| [`ScaleFactorValue`](#Geometry.ScaleFactorValue)                             | Gets or sets the ScaleFactorValue.                            |
| [`SheetSurfaceArea`](#Geometry.SheetSurfaceArea)                             | Gets the SheetSurfaceArea.                                    |
| [`SmartCADUpdate`](#Geometry.SmartCADUpdate)                                 | Gets the SmartCADUpdate.                                      |
| [`SolidBodies`](#Geometry.SolidBodies)                                       | Gets the SolidBodies.                                         |
| [`Source`](#Geometry.Source)                                                 | Gets the Source.                                              |
| [`StandardDeviation`](#Geometry.StandardDeviation)                           | Gets the StandardDeviation.                                   |
| [`SurfaceArea`](#Geometry.SurfaceArea)                                       | Gets the SurfaceArea.                                         |
| [`SurfaceBodies`](#Geometry.SurfaceBodies)                                   | Gets the SurfaceBodies.                                       |
| [`TemporaryDirectory`](#Geometry.TemporaryDirectory)                         | Gets or sets the TemporaryDirectory.                          |
| [`Tolerance2D`](#Geometry.Tolerance2D)                                       | Gets or sets the Tolerance2D.                                 |
| [`Type`](#Geometry.Type)                                                     | Gets the Type.                                                |
| [`UseAssociativity`](#Geometry.UseAssociativity)                             | Gets the UseAssociativity.                                    |
| [`UseInstances`](#Geometry.UseInstances)                                     | Gets the UseInstances.                                        |
| [`VisibleProperties`](#Geometry.VisibleProperties)                           | Gets the list of properties that are visible for this object. |
| [`Volume`](#Geometry.Volume)                                                 | Gets the Volume.                                              |
| [`XCentroid`](#Geometry.XCentroid)                                           | Gets the XCentroid.                                           |
| [`YCentroid`](#Geometry.YCentroid)                                           | Gets the YCentroid.                                           |
| [`ZCentroid`](#Geometry.ZCentroid)                                           | Gets the ZCentroid.                                           |

<a id="property-detail"></a>

## Property detail

<a id="Geometry.ActiveBodies"></a>

### *property* Geometry.ActiveBodies *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActiveBodies.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AnalysisType"></a>

### *property* Geometry.AnalysisType *: [Ansys.Mechanical.DataModel.Enums.GeometryDimensionType](../../../Mechanical/DataModel/Enums/GeometryDimensionType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDimensionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AnalysisType.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AssignMaterialOnUpdate"></a>

### *property* Geometry.AssignMaterialOnUpdate *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AssignMaterialOnUpdate.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AttachFileViaTempFile"></a>

### *property* Geometry.AttachFileViaTempFile *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AttachFileViaTempFile.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AttributeKey"></a>

### *property* Geometry.AttributeKey *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AttributeKey.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Attributes"></a>

### *property* Geometry.Attributes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Attributes.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Average"></a>

### *property* Geometry.Average *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Bodies"></a>

### *property* Geometry.Bodies *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Bodies.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.CanChangeCADUnits"></a>

### *property* Geometry.CanChangeCADUnits *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CanChangeCADUnits.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Children"></a>

### *property* Geometry.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Comments"></a>

### *property* Geometry.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ComparePartsOnUpdate"></a>

### *property* Geometry.ComparePartsOnUpdate *: [Ansys.Mechanical.DataModel.Enums.ComparePartsOnUpdateType](../../../Mechanical/DataModel/Enums/ComparePartsOnUpdateType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ComparePartsOnUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ComparePartsOnUpdate.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ComparePartsTolerance"></a>

### *property* Geometry.ComparePartsTolerance *: [Ansys.Mechanical.DataModel.Enums.ComparePartsToleranceType](../../../Mechanical/DataModel/Enums/ComparePartsToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ComparePartsToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ComparePartsTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.DataModelObjectCategory"></a>

### *property* Geometry.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.DecomposeDisjointGeometry"></a>

### *property* Geometry.DecomposeDisjointGeometry *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DecomposeDisjointGeometry.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.DisplayStyle"></a>

### *property* Geometry.DisplayStyle *: [Ansys.Mechanical.DataModel.Enums.PrototypeDisplayStyleType](../../../Mechanical/DataModel/Enums/PrototypeDisplayStyleType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.PrototypeDisplayStyleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayStyle.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ElementControl"></a>

### *property* Geometry.ElementControl *: [Ansys.Mechanical.DataModel.Enums.ElementControl](../../../Mechanical/DataModel/Enums/ElementControl.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ElementControl) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementControl.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Elements"></a>

### *property* Geometry.Elements *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elements.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.EnclosureAndSymmetryProcessing"></a>

### *property* Geometry.EnclosureAndSymmetryProcessing *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnclosureAndSymmetryProcessing.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.EndPlaneRotationAboutX"></a>

### *property* Geometry.EndPlaneRotationAboutX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndPlaneRotationAboutX.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.EndPlaneRotationAboutY"></a>

### *property* Geometry.EndPlaneRotationAboutY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndPlaneRotationAboutY.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.FiberLength"></a>

### *property* Geometry.FiberLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FiberLength.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Figures"></a>

### *property* Geometry.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.GeometryPreferencesReadOnly"></a>

### *property* Geometry.GeometryPreferencesReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the GeometryPreferencesReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Images"></a>

### *property* Geometry.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ImportCoordinateSystems"></a>

### *property* Geometry.ImportCoordinateSystems *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImportCoordinateSystems.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.InternalObject"></a>

### *property* Geometry.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPrototypeGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.LengthUnit"></a>

### *property* Geometry.LengthUnit *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnit.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.LengthX"></a>

### *property* Geometry.LengthX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthX.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.LengthY"></a>

### *property* Geometry.LengthY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthY.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.LengthZ"></a>

### *property* Geometry.LengthZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthZ.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.LineBodies"></a>

### *property* Geometry.LineBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LineBodies.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Mass"></a>

### *property* Geometry.Mass *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Mass.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.MaterialProperties"></a>

### *property* Geometry.MaterialProperties *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaterialProperties.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Maximum"></a>

### *property* Geometry.Maximum *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.MeshMetric"></a>

### *property* Geometry.MeshMetric *: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshMetric.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.MeshVolume"></a>

### *property* Geometry.MeshVolume *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshVolume.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Minimum"></a>

### *property* Geometry.Minimum *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.MixedImportResolution"></a>

### *property* Geometry.MixedImportResolution *: [Ansys.Mechanical.DataModel.Enums.SecondaryImportPrefType](../../../Mechanical/DataModel/Enums/SecondaryImportPrefType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SecondaryImportPrefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MixedImportResolution.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Model2DBehavior"></a>

### *property* Geometry.Model2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Model2DBehavior](../../../Mechanical/DataModel/Enums/Model2DBehavior.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.Model2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Model2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.NamedSelectionKey"></a>

### *property* Geometry.NamedSelectionKey *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NamedSelectionKey.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.NamedSelections"></a>

### *property* Geometry.NamedSelections *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Nodes"></a>

### *property* Geometry.Nodes *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Nodes.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ParameterKey"></a>

### *property* Geometry.ParameterKey *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ParameterKey.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Parameters"></a>

### *property* Geometry.Parameters *: [Ansys.Mechanical.DataModel.Enums.ImportParameterType](../../../Mechanical/DataModel/Enums/ImportParameterType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ImportParameterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Parameters.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Properties"></a>

### *property* Geometry.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ReaderModeSavesUpdatedFile"></a>

### *property* Geometry.ReaderModeSavesUpdatedFile *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReaderModeSavesUpdatedFile.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ScaleFactorValue"></a>

### *property* Geometry.ScaleFactorValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.SheetSurfaceArea"></a>

### *property* Geometry.SheetSurfaceArea *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SheetSurfaceArea.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.SmartCADUpdate"></a>

### *property* Geometry.SmartCADUpdate *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SmartCADUpdate.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.SolidBodies"></a>

### *property* Geometry.SolidBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolidBodies.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Source"></a>

### *property* Geometry.Source *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Source.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.StandardDeviation"></a>

### *property* Geometry.StandardDeviation *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StandardDeviation.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.SurfaceArea"></a>

### *property* Geometry.SurfaceArea *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SurfaceArea.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.SurfaceBodies"></a>

### *property* Geometry.SurfaceBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SurfaceBodies.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.TemporaryDirectory"></a>

### *property* Geometry.TemporaryDirectory *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemporaryDirectory.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Tolerance2D"></a>

### *property* Geometry.Tolerance2D *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Tolerance2D.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Type"></a>

### *property* Geometry.Type *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.UseAssociativity"></a>

### *property* Geometry.UseAssociativity *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the UseAssociativity.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.UseInstances"></a>

### *property* Geometry.UseInstances *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the UseInstances.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.VisibleProperties"></a>

### *property* Geometry.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Volume"></a>

### *property* Geometry.Volume *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.XCentroid"></a>

### *property* Geometry.XCentroid *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XCentroid.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.YCentroid"></a>

### *property* Geometry.YCentroid *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YCentroid.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ZCentroid"></a>

### *property* Geometry.ZCentroid *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZCentroid.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Geometry.Activate"></a>

### Geometry.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddComment"></a>

### Geometry.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddDistributedMass"></a>

### Geometry.AddDistributedMass() → [Ansys.ACT.Automation.Mechanical.DistributedMass](DistributedMass.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.DistributedMass)

Creates a new DistributedMass

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddElementOrientation"></a>

### Geometry.AddElementOrientation() → [Ansys.ACT.Automation.Mechanical.ElementOrientation](ElementOrientation.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ElementOrientation)

Creates a new ElementOrientation

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddFigure"></a>

### Geometry.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddImage"></a>

### Geometry.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddImportedElementOrientationExternalData"></a>

### Geometry.AddImportedElementOrientationExternalData() → Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedElementOrientationGroup

Creates a new Imported Element Orientation (External Data).

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddImportedThicknessExternalData"></a>

### Geometry.AddImportedThicknessExternalData() → Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedThicknessGroup

Creates a new Imported Thickness (External Data).

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddLayeredSection"></a>

### Geometry.AddLayeredSection() → [Ansys.ACT.Automation.Mechanical.LayeredSection](LayeredSection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.LayeredSection)

Creates a new child LayeredSection.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddPointMass"></a>

### Geometry.AddPointMass() → [Ansys.ACT.Automation.Mechanical.PointMass](PointMass.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.PointMass)

Creates a new PointMass

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddSurfaceCoating"></a>

### Geometry.AddSurfaceCoating() → [Ansys.ACT.Automation.Mechanical.SurfaceCoating](SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating)

Creates a new SurfaceCoating

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddThermalPointMass"></a>

### Geometry.AddThermalPointMass() → [Ansys.ACT.Automation.Mechanical.ThermalPointMass](ThermalPointMass.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ThermalPointMass)

Creates a new ThermalPointMass

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddThickness"></a>

### Geometry.AddThickness() → [Ansys.ACT.Automation.Mechanical.Thickness](Thickness.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Thickness)

Creates a new child Thickness.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.CenterOfMass"></a>

### Geometry.CenterOfMass(geoBodies: List[Ansys.ACT.Interfaces.Geometry.IBaseGeoBody], pointMasses: List[[Ansys.ACT.Automation.Mechanical.PointMass](PointMass.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.PointMass)], distributedMasses: List[[Ansys.ACT.Automation.Mechanical.DistributedMass](DistributedMass.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.DistributedMass)]) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

CenterOfMass method.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.CopyTo"></a>

### Geometry.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.CreateParameter"></a>

### Geometry.CreateParameter(paramPath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Duplicate"></a>

### Geometry.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ExportParts"></a>

### Geometry.ExportParts(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), partIds: List[[int](https://docs.python.org/3/library/functions.html#int)]) → [None](https://docs.python.org/3/library/constants.html#None)

ExportParts method.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.FreezeMeshOnAllParts"></a>

### Geometry.FreezeMeshOnAllParts() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FreezeMeshOnAllParts action.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.GetBody"></a>

### Geometry.GetBody(geoBody: Ansys.ACT.Interfaces.Geometry.IBaseGeoBody) → [Ansys.ACT.Automation.Mechanical.Body](Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body)

Gets the Body associated with the given IGeoBody

<!-- !! processed by numpydoc !! -->

<a id="Geometry.GetChildren"></a>

### Geometry.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.GetParameter"></a>

### Geometry.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.GetPart"></a>

### Geometry.GetPart(geoPart: Ansys.ACT.Interfaces.Geometry.IBaseGeoPart) → [Ansys.ACT.Automation.Mechanical.Part](Part.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Part)

Gets the Part associated with the given IGeoPart

<!-- !! processed by numpydoc !! -->

<a id="Geometry.GroupAllSimilarChildren"></a>

### Geometry.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.GroupSimilarObjects"></a>

### Geometry.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.InvertSuppressedBodySet"></a>

### Geometry.InvertSuppressedBodySet() → [None](https://docs.python.org/3/library/constants.html#None)

Invert all parts Suppressed property.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.PropertyByAPIName"></a>

### Geometry.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Geometry.PropertyByName"></a>

### Geometry.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.RemoveParameter"></a>

### Geometry.RemoveParameter(paramPath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ResetBodyColors"></a>

### Geometry.ResetBodyColors() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ResetBodyColors action.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.UnfreezeMeshOnAllParts"></a>

### Geometry.UnfreezeMeshOnAllParts() → [None](https://docs.python.org/3/library/constants.html#None)

Run the UnfreezeMeshOnAllParts action.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.UnsuppressAllBodies"></a>

### Geometry.UnsuppressAllBodies() → [None](https://docs.python.org/3/library/constants.html#None)

Unsuppress all the bodies that were suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.UpdateGeometryFromSource"></a>

### Geometry.UpdateGeometryFromSource() → [None](https://docs.python.org/3/library/constants.html#None)

Run the UpdateGeometryFromSource action.

<!-- !! processed by numpydoc !! -->

