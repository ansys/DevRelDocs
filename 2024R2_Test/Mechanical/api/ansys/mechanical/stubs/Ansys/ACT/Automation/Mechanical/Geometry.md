<a id="geometry"></a>

# Geometry

<a id="Geometry"></a>

### *class* Geometry

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Geometry.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`AddThickness`](#Geometry.AddThickness)                                                           | Creates a new child Thickness.                                                        |
|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`AddImportedThicknessExternalData`](#Geometry.AddImportedThicknessExternalData)                   | For Standalone Mode only. Creates a new Imported Thickness (External Data).           |
| [`AddImportedElementOrientationExternalData`](#Geometry.AddImportedElementOrientationExternalData) | For Standalone Mode only. Creates a new Imported Element Orientation (External Data). |
| [`AddLayeredSection`](#Geometry.AddLayeredSection)                                                 | Creates a new child LayeredSection.                                                   |
| [`GetBody`](#Geometry.GetBody)                                                                     | Gets the Body associated with the given IGeoBody                                      |
| [`GetPart`](#Geometry.GetPart)                                                                     | Gets the Part associated with the given IGeoPart                                      |
| [`FreezeMeshOnAllParts`](#Geometry.FreezeMeshOnAllParts)                                           | Run the FreezeMeshOnAllParts action.                                                  |
| [`UnfreezeMeshOnAllParts`](#Geometry.UnfreezeMeshOnAllParts)                                       | Run the UnfreezeMeshOnAllParts action.                                                |
| [`UnsuppressAllBodies`](#Geometry.UnsuppressAllBodies)                                             | Unsuppress all the bodies that were suppressed.                                       |
| [`InvertSuppressedBodySet`](#Geometry.InvertSuppressedBodySet)                                     | Invert all parts Suppressed property.                                                 |
| [`CreateParameter`](#Geometry.CreateParameter)                                                     | Creates a new parameter for a Property.                                               |
| [`RemoveParameter`](#Geometry.RemoveParameter)                                                     | Removes the parameter from the parameter set corresponding to the given property.     |
| [`CenterOfMass`](#Geometry.CenterOfMass)                                                           | CenterOfMass method.                                                                  |
| [`AddDistributedMass`](#Geometry.AddDistributedMass)                                               | Creates a new DistributedMass                                                         |
| [`AddElementOrientation`](#Geometry.AddElementOrientation)                                         | Creates a new ElementOrientation                                                      |
| [`AddPointMass`](#Geometry.AddPointMass)                                                           | Creates a new PointMass                                                               |
| [`AddSurfaceCoating`](#Geometry.AddSurfaceCoating)                                                 | Creates a new SurfaceCoating                                                          |
| [`AddThermalPointMass`](#Geometry.AddThermalPointMass)                                             | Creates a new ThermalPointMass                                                        |
| [`ResetBodyColors`](#Geometry.ResetBodyColors)                                                     | Run the ResetBodyColors action.                                                       |
| [`UpdateGeometryFromSource`](#Geometry.UpdateGeometryFromSource)                                   | Run the UpdateGeometryFromSource action.                                              |
| [`GetChildren`](#id1)                                                                              | Gets the list of children, filtered by type.                                          |
| [`GetChildren`](#id1)                                                                              | Gets the list of children, filtered by type.                                          |
| [`AddComment`](#Geometry.AddComment)                                                               | Creates a new child Comment.                                                          |
| [`AddFigure`](#Geometry.AddFigure)                                                                 | Creates a new child Figure.                                                           |
| [`AddImage`](#Geometry.AddImage)                                                                   | Creates a new child Image.                                                            |
| [`Activate`](#Geometry.Activate)                                                                   | Activate the current object.                                                          |
| [`CopyTo`](#Geometry.CopyTo)                                                                       | Copies all visible properties from this object to another.                            |
| [`Duplicate`](#Geometry.Duplicate)                                                                 | Creates a copy of the current DataModelObject.                                        |
| [`GroupAllSimilarChildren`](#Geometry.GroupAllSimilarChildren)                                     | Run the GroupAllSimilarChildren action.                                               |
| [`GroupSimilarObjects`](#Geometry.GroupSimilarObjects)                                             | Run the GroupSimilarObjects action.                                                   |
| [`PropertyByName`](#Geometry.PropertyByName)                                                       | Get a property by its unique name.                                                    |
| [`PropertyByAPIName`](#Geometry.PropertyByAPIName)                                                 | Get a property by its API name.                                                       |
| [`GetParameter`](#Geometry.GetParameter)                                                           | Gets the parameter corresponding to the given property.                               |

### Properties

| [`InternalObject`](#id0)                                                                                                               | Gets the internal object. For advanced usage only.            |
|----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`TemporaryDirectory`](#Geometry.TemporaryDirectory)                                                                                   | Gets or sets the TemporaryDirectory.                          |
| [`AttributeKey`](#Geometry.AttributeKey)                                                                                               | Gets the AttributeKey.                                        |
| [`Source`](#Geometry.Source)                                                                                                           | Gets the Source.                                              |
| [`NamedSelectionKey`](#Geometry.NamedSelectionKey)                                                                                     | Gets the NamedSelectionKey.                                   |
| [`Type`](#Geometry.Type)                                                                                                               | Gets the Type.                                                |
| [`Elements`](#Geometry.Elements)                                                                                                       | Gets the Elements.                                            |
| [`Average`](#Geometry.Average)                                                                                                         | Gets the Average.                                             |
| [`Maximum`](#Geometry.Maximum)                                                                                                         | Gets the Maximum.                                             |
| [`Minimum`](#Geometry.Minimum)                                                                                                         | Gets the Minimum.                                             |
| [`StandardDeviation`](#Geometry.StandardDeviation)                                                                                     | Gets the StandardDeviation.                                   |
| [`Nodes`](#Geometry.Nodes)                                                                                                             | Gets the Nodes.                                               |
| [`ActiveBodies`](#Geometry.ActiveBodies)                                                                                               | Gets the ActiveBodies.                                        |
| [`Bodies`](#Geometry.Bodies)                                                                                                           | Gets the Bodies.                                              |
| [`ParameterKey`](#Geometry.ParameterKey)                                                                                               | Gets the ParameterKey.                                        |
| [`ScaleFactorValue`](#Geometry.ScaleFactorValue)                                                                                       | Gets or sets the ScaleFactorValue.                            |
| [`Tolerance2D`](#Geometry.Tolerance2D)                                                                                                 | Gets or sets the Tolerance2D.                                 |
| [`LengthX`](#Geometry.LengthX)                                                                                                         | Gets the LengthX.                                             |
| [`LengthY`](#Geometry.LengthY)                                                                                                         | Gets the LengthY.                                             |
| [`LengthZ`](#Geometry.LengthZ)                                                                                                         | Gets the LengthZ.                                             |
| [`FiberLength`](#Geometry.FiberLength)                                                                                                 | Gets or sets the FiberLength.                                 |
| [`Mass`](#Geometry.Mass)                                                                                                               | Gets the Mass.                                                |
| [`MeshVolume`](#Geometry.MeshVolume)                                                                                                   | Gets the MeshVolume.                                          |
| [`EndPlaneRotationAboutX`](#Geometry.EndPlaneRotationAboutX)                                                                           | Gets or sets the EndPlaneRotationAboutX.                      |
| [`EndPlaneRotationAboutY`](#Geometry.EndPlaneRotationAboutY)                                                                           | Gets or sets the EndPlaneRotationAboutY.                      |
| [`SheetSurfaceArea`](#Geometry.SheetSurfaceArea)                                                                                       | Gets the SheetSurfaceArea.                                    |
| [`SurfaceArea`](#Geometry.SurfaceArea)                                                                                                 | Gets the SurfaceArea.                                         |
| [`Volume`](Results/Volume.md#Volume)                                                                                                   | Gets the Volume.                                              |
| [`XCentroid`](#Geometry.XCentroid)                                                                                                     | Gets the XCentroid.                                           |
| [`YCentroid`](#Geometry.YCentroid)                                                                                                     | Gets the YCentroid.                                           |
| [`ZCentroid`](#Geometry.ZCentroid)                                                                                                     | Gets the ZCentroid.                                           |
| [`AnalysisType`](../../../Mechanical/DataModel/Enums/GeometryImportPreference/AnalysisType.md#AnalysisType)                            | Gets the AnalysisType.                                        |
| [`LengthUnit`](../../../Mechanical/DataModel/MechanicalEnums/ExternalData/LengthUnit.md#LengthUnit)                                    | Gets or sets the LengthUnit.                                  |
| [`ComparePartsOnUpdate`](../../../Mechanical/DataModel/Enums/GeometryImportPreference/ComparePartsOnUpdate.md#ComparePartsOnUpdate)    | Gets the ComparePartsOnUpdate.                                |
| [`ComparePartsTolerance`](../../../Mechanical/DataModel/Enums/GeometryImportPreference/ComparePartsTolerance.md#ComparePartsTolerance) | Gets the ComparePartsTolerance.                               |
| [`DisplayStyle`](#Geometry.DisplayStyle)                                                                                               | Gets or sets the DisplayStyle.                                |
| [`ElementControl`](../../../Mechanical/DataModel/Enums/ElementControl.md#ElementControl)                                               | Gets or sets the ElementControl.                              |
| [`MeshMetric`](#Geometry.MeshMetric)                                                                                                   | Gets the MeshMetric.                                          |
| [`Model2DBehavior`](../../../Mechanical/DataModel/Enums/Model2DBehavior.md#Model2DBehavior)                                            | Gets or sets the Model2DBehavior.                             |
| [`MixedImportResolution`](../../../Mechanical/DataModel/Enums/GeometryImportPreference/MixedImportResolution.md#MixedImportResolution) | Gets the MixedImportResolution.                               |
| [`Parameters`](../../../Mechanical/DataModel/Enums/GeometryImportPreference/Parameters.md#Parameters)                                  | Gets the Parameters.                                          |
| [`AssignMaterialOnUpdate`](#Geometry.AssignMaterialOnUpdate)                                                                           | Gets or sets the AssignMaterialOnUpdate.                      |
| [`AttachFileViaTempFile`](#Geometry.AttachFileViaTempFile)                                                                             | Gets or sets the AttachFileViaTempFile.                       |
| [`CanChangeCADUnits`](#Geometry.CanChangeCADUnits)                                                                                     | Gets the CanChangeCADUnits.                                   |
| [`DecomposeDisjointGeometry`](#Geometry.DecomposeDisjointGeometry)                                                                     | Gets the DecomposeDisjointGeometry.                           |
| [`SmartCADUpdate`](#Geometry.SmartCADUpdate)                                                                                           | Gets the SmartCADUpdate.                                      |
| [`GeometryPreferencesReadOnly`](#Geometry.GeometryPreferencesReadOnly)                                                                 | Gets the GeometryPreferencesReadOnly.                         |
| [`ImportCoordinateSystems`](#Geometry.ImportCoordinateSystems)                                                                         | Gets the ImportCoordinateSystems.                             |
| [`EnclosureAndSymmetryProcessing`](#Geometry.EnclosureAndSymmetryProcessing)                                                           | Gets the EnclosureAndSymmetryProcessing.                      |
| [`SurfaceBodies`](#Geometry.SurfaceBodies)                                                                                             | Gets the SurfaceBodies.                                       |
| [`SolidBodies`](#Geometry.SolidBodies)                                                                                                 | Gets the SolidBodies.                                         |
| [`LineBodies`](#Geometry.LineBodies)                                                                                                   | Gets the LineBodies.                                          |
| [`MaterialProperties`](#Geometry.MaterialProperties)                                                                                   | Gets the MaterialProperties.                                  |
| [`ReaderModeSavesUpdatedFile`](#Geometry.ReaderModeSavesUpdatedFile)                                                                   | Gets or sets the ReaderModeSavesUpdatedFile.                  |
| [`UseAssociativity`](#Geometry.UseAssociativity)                                                                                       | Gets the UseAssociativity.                                    |
| [`Attributes`](#Geometry.Attributes)                                                                                                   | Gets the Attributes.                                          |
| [`NamedSelections`](NamedSelections.md#NamedSelections)                                                                                | Gets the NamedSelections.                                     |
| [`UseInstances`](#Geometry.UseInstances)                                                                                               | Gets the UseInstances.                                        |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                    | Gets the current DataModelObject’s category.                  |
| [`Children`](#Geometry.Children)                                                                                                       | Gets the list of children.                                    |
| [`Comments`](#Geometry.Comments)                                                                                                       | Gets the list of associated comments.                         |
| [`Figures`](#Geometry.Figures)                                                                                                         | Gets the list of associated figures.                          |
| [`Images`](#Geometry.Images)                                                                                                           | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Geometry.Properties)                                                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Geometry.VisibleProperties)                                                                                     | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Geometry
```

<a id="property-detail"></a>

## Property detail

<a id="Geometry.InternalObject"></a>

### *property* Geometry.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPrototypeGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.TemporaryDirectory"></a>

### *property* Geometry.TemporaryDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemporaryDirectory.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AttributeKey"></a>

### *property* Geometry.AttributeKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AttributeKey.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Source"></a>

### *property* Geometry.Source *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Source.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.NamedSelectionKey"></a>

### *property* Geometry.NamedSelectionKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NamedSelectionKey.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Type"></a>

### *property* Geometry.Type *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Elements"></a>

### *property* Geometry.Elements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elements.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Average"></a>

### *property* Geometry.Average *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Maximum"></a>

### *property* Geometry.Maximum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Minimum"></a>

### *property* Geometry.Minimum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.StandardDeviation"></a>

### *property* Geometry.StandardDeviation *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StandardDeviation.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Nodes"></a>

### *property* Geometry.Nodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Nodes.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ActiveBodies"></a>

### *property* Geometry.ActiveBodies *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActiveBodies.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Bodies"></a>

### *property* Geometry.Bodies *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Bodies.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ParameterKey"></a>

### *property* Geometry.ParameterKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ParameterKey.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ScaleFactorValue"></a>

### *property* Geometry.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Tolerance2D"></a>

### *property* Geometry.Tolerance2D *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Tolerance2D.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.LengthX"></a>

### *property* Geometry.LengthX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthX.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.LengthY"></a>

### *property* Geometry.LengthY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthY.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.LengthZ"></a>

### *property* Geometry.LengthZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthZ.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.FiberLength"></a>

### *property* Geometry.FiberLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FiberLength.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Mass"></a>

### *property* Geometry.Mass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Mass.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.MeshVolume"></a>

### *property* Geometry.MeshVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshVolume.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.EndPlaneRotationAboutX"></a>

### *property* Geometry.EndPlaneRotationAboutX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndPlaneRotationAboutX.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.EndPlaneRotationAboutY"></a>

### *property* Geometry.EndPlaneRotationAboutY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndPlaneRotationAboutY.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.SheetSurfaceArea"></a>

### *property* Geometry.SheetSurfaceArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SheetSurfaceArea.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.SurfaceArea"></a>

### *property* Geometry.SurfaceArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SurfaceArea.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Volume"></a>

### *property* Geometry.Volume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.XCentroid"></a>

### *property* Geometry.XCentroid *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XCentroid.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.YCentroid"></a>

### *property* Geometry.YCentroid *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YCentroid.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ZCentroid"></a>

### *property* Geometry.ZCentroid *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZCentroid.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AnalysisType"></a>

### *property* Geometry.AnalysisType *: [Ansys.Mechanical.DataModel.Enums.GeometryDimensionType](../../../Mechanical/DataModel/Enums/GeometryDimensionType.md#GeometryDimensionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AnalysisType.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.LengthUnit"></a>

### *property* Geometry.LengthUnit *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnit.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ComparePartsOnUpdate"></a>

### *property* Geometry.ComparePartsOnUpdate *: [Ansys.Mechanical.DataModel.Enums.ComparePartsOnUpdateType](../../../Mechanical/DataModel/Enums/ComparePartsOnUpdateType.md#ComparePartsOnUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ComparePartsOnUpdate.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ComparePartsTolerance"></a>

### *property* Geometry.ComparePartsTolerance *: [Ansys.Mechanical.DataModel.Enums.ComparePartsToleranceType](../../../Mechanical/DataModel/Enums/ComparePartsToleranceType.md#ComparePartsToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ComparePartsTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.DisplayStyle"></a>

### *property* Geometry.DisplayStyle *: [Ansys.Mechanical.DataModel.Enums.PrototypeDisplayStyleType](../../../Mechanical/DataModel/Enums/PrototypeDisplayStyleType.md#PrototypeDisplayStyleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayStyle.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ElementControl"></a>

### *property* Geometry.ElementControl *: [Ansys.Mechanical.DataModel.Enums.ElementControl](../../../Mechanical/DataModel/Enums/ElementControl.md#ElementControl) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementControl.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.MeshMetric"></a>

### *property* Geometry.MeshMetric *: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshMetric.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Model2DBehavior"></a>

### *property* Geometry.Model2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Model2DBehavior](../../../Mechanical/DataModel/Enums/Model2DBehavior.md#Model2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Model2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.MixedImportResolution"></a>

### *property* Geometry.MixedImportResolution *: [Ansys.Mechanical.DataModel.Enums.SecondaryImportPrefType](../../../Mechanical/DataModel/Enums/SecondaryImportPrefType.md#SecondaryImportPrefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MixedImportResolution.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Parameters"></a>

### *property* Geometry.Parameters *: [Ansys.Mechanical.DataModel.Enums.ImportParameterType](../../../Mechanical/DataModel/Enums/ImportParameterType.md#ImportParameterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Parameters.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AssignMaterialOnUpdate"></a>

### *property* Geometry.AssignMaterialOnUpdate *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AssignMaterialOnUpdate.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AttachFileViaTempFile"></a>

### *property* Geometry.AttachFileViaTempFile *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AttachFileViaTempFile.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.CanChangeCADUnits"></a>

### *property* Geometry.CanChangeCADUnits *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CanChangeCADUnits.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.DecomposeDisjointGeometry"></a>

### *property* Geometry.DecomposeDisjointGeometry *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DecomposeDisjointGeometry.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.SmartCADUpdate"></a>

### *property* Geometry.SmartCADUpdate *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SmartCADUpdate.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.GeometryPreferencesReadOnly"></a>

### *property* Geometry.GeometryPreferencesReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the GeometryPreferencesReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ImportCoordinateSystems"></a>

### *property* Geometry.ImportCoordinateSystems *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImportCoordinateSystems.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.EnclosureAndSymmetryProcessing"></a>

### *property* Geometry.EnclosureAndSymmetryProcessing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnclosureAndSymmetryProcessing.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.SurfaceBodies"></a>

### *property* Geometry.SurfaceBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SurfaceBodies.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.SolidBodies"></a>

### *property* Geometry.SolidBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolidBodies.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.LineBodies"></a>

### *property* Geometry.LineBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LineBodies.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.MaterialProperties"></a>

### *property* Geometry.MaterialProperties *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaterialProperties.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ReaderModeSavesUpdatedFile"></a>

### *property* Geometry.ReaderModeSavesUpdatedFile *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReaderModeSavesUpdatedFile.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.UseAssociativity"></a>

### *property* Geometry.UseAssociativity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the UseAssociativity.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Attributes"></a>

### *property* Geometry.Attributes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Attributes.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.NamedSelections"></a>

### *property* Geometry.NamedSelections *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.UseInstances"></a>

### *property* Geometry.UseInstances *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the UseInstances.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.DataModelObjectCategory"></a>

### *property* Geometry.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Children"></a>

### *property* Geometry.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Comments"></a>

### *property* Geometry.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Figures"></a>

### *property* Geometry.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Images"></a>

### *property* Geometry.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Geometry.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Properties"></a>

### *property* Geometry.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.VisibleProperties"></a>

### *property* Geometry.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Geometry.AddThickness"></a>

### Geometry.AddThickness()

Creates a new child Thickness.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddImportedThicknessExternalData"></a>

### Geometry.AddImportedThicknessExternalData()

For Standalone Mode only. Creates a new Imported Thickness (External Data).

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddImportedElementOrientationExternalData"></a>

### Geometry.AddImportedElementOrientationExternalData()

For Standalone Mode only. Creates a new Imported Element Orientation (External Data).

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddLayeredSection"></a>

### Geometry.AddLayeredSection()

Creates a new child LayeredSection.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.GetBody"></a>

### Geometry.GetBody(geoBody: Ansys.ACT.Interfaces.Geometry.IBaseGeoBody)

Gets the Body associated with the given IGeoBody

<!-- !! processed by numpydoc !! -->

<a id="Geometry.GetPart"></a>

### Geometry.GetPart(geoPart: Ansys.ACT.Interfaces.Geometry.IBaseGeoPart)

Gets the Part associated with the given IGeoPart

<!-- !! processed by numpydoc !! -->

<a id="Geometry.FreezeMeshOnAllParts"></a>

### Geometry.FreezeMeshOnAllParts()

Run the FreezeMeshOnAllParts action.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.UnfreezeMeshOnAllParts"></a>

### Geometry.UnfreezeMeshOnAllParts()

Run the UnfreezeMeshOnAllParts action.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.UnsuppressAllBodies"></a>

### Geometry.UnsuppressAllBodies()

Unsuppress all the bodies that were suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.InvertSuppressedBodySet"></a>

### Geometry.InvertSuppressedBodySet()

Invert all parts Suppressed property.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.CreateParameter"></a>

### Geometry.CreateParameter(paramPath: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.RemoveParameter"></a>

### Geometry.RemoveParameter(paramPath: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.CenterOfMass"></a>

### Geometry.CenterOfMass(geoBodies: System.Collections.Generic.IList[Ansys.ACT.Interfaces.Geometry.IBaseGeoBody], pointMasses: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.PointMass](PointMass.md#PointMass)], distributedMasses: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.DistributedMass](DistributedMass.md#DistributedMass)])

CenterOfMass method.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddDistributedMass"></a>

### Geometry.AddDistributedMass()

Creates a new DistributedMass

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddElementOrientation"></a>

### Geometry.AddElementOrientation()

Creates a new ElementOrientation

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddPointMass"></a>

### Geometry.AddPointMass()

Creates a new PointMass

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddSurfaceCoating"></a>

### Geometry.AddSurfaceCoating()

Creates a new SurfaceCoating

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddThermalPointMass"></a>

### Geometry.AddThermalPointMass()

Creates a new ThermalPointMass

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ResetBodyColors"></a>

### Geometry.ResetBodyColors()

Run the ResetBodyColors action.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.UpdateGeometryFromSource"></a>

### Geometry.UpdateGeometryFromSource()

Run the UpdateGeometryFromSource action.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.GetChildren"></a>

### Geometry.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Geometry.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddComment"></a>

### Geometry.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddFigure"></a>

### Geometry.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddImage"></a>

### Geometry.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Activate"></a>

### Geometry.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.CopyTo"></a>

### Geometry.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Duplicate"></a>

### Geometry.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.GroupAllSimilarChildren"></a>

### Geometry.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.GroupSimilarObjects"></a>

### Geometry.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.PropertyByName"></a>

### Geometry.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.PropertyByAPIName"></a>

### Geometry.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.GetParameter"></a>

### Geometry.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->
