# `Geometry`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Geometry

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Geometry.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------|-----------------------------------------------------------------------------------|
| `AddThickness`                              | Creates a new child Thickness.                                                    |
| `AddImportedThicknessExternalData`          | Creates a new Imported Thickness (External Data).                                 |
| `AddImportedElementOrientationExternalData` | Creates a new Imported Element Orientation (External Data).                       |
| `AddLayeredSection`                         | Creates a new child LayeredSection.                                               |
| `GetBody`                                   | Gets the Body associated with the given IGeoBody                                  |
| `GetPart`                                   | Gets the Part associated with the given IGeoPart                                  |
| `FreezeMeshOnAllParts`                      | Run the FreezeMeshOnAllParts action.                                              |
| `UnfreezeMeshOnAllParts`                    | Run the UnfreezeMeshOnAllParts action.                                            |
| `UnsuppressAllBodies`                       | Unsuppress all the bodies that were suppressed.                                   |
| `InvertSuppressedBodySet`                   | Invert all parts Suppressed property.                                             |
| `CreateParameter`                           | Creates a new parameter for a Property.                                           |
| `RemoveParameter`                           | Removes the parameter from the parameter set corresponding to the given property. |
| `CenterOfMass`                              | CenterOfMass method.                                                              |
| `AddDistributedMass`                        | Creates a new DistributedMass                                                     |
| `AddElementOrientation`                     | Creates a new ElementOrientation                                                  |
| `AddPointMass`                              | Creates a new PointMass                                                           |
| `AddSurfaceCoating`                         | Creates a new SurfaceCoating                                                      |
| `AddThermalPointMass`                       | Creates a new ThermalPointMass                                                    |
| `ResetBodyColors`                           | Run the ResetBodyColors action.                                                   |
| `UpdateGeometryFromSource`                  | Run the UpdateGeometryFromSource action.                                          |
| `GetChildren`                               | Gets the list of children, filtered by type.                                      |
| `GetChildren`                               | Gets the list of children, filtered by type.                                      |
| `AddComment`                                | Creates a new child Comment.                                                      |
| `AddFigure`                                 | Creates a new child Figure.                                                       |
| `AddImage`                                  | Creates a new child Image.                                                        |
| `Activate`                                  | Activate the current object.                                                      |
| `CopyTo`                                    | Copies all visible properties from this object to another.                        |
| `Duplicate`                                 | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`                   | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`                       | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`                            | Get a property by its unique name.                                                |
| `PropertyByAPIName`                         | Get a property by its API name.                                                   |
| `GetParameter`                              | Gets the parameter corresponding to the given property.                           |

### Properties

| Name | Description |
|----------------------------------|---------------------------------------------------------------|
| `InternalObject`                 | Gets the internal object. For advanced usage only.            |
| `TemporaryDirectory`             | Gets or sets the TemporaryDirectory.                          |
| `AttributeKey`                   | Gets the AttributeKey.                                        |
| `Source`                         | Gets the Source.                                              |
| `NamedSelectionKey`              | Gets the NamedSelectionKey.                                   |
| `Type`                           | Gets the Type.                                                |
| `Elements`                       | Gets the Elements.                                            |
| `Average`                        | Gets the Average.                                             |
| `Maximum`                        | Gets the Maximum.                                             |
| `Minimum`                        | Gets the Minimum.                                             |
| `StandardDeviation`              | Gets the StandardDeviation.                                   |
| `Nodes`                          | Gets the Nodes.                                               |
| `ActiveBodies`                   | Gets the ActiveBodies.                                        |
| `Bodies`                         | Gets the Bodies.                                              |
| `ParameterKey`                   | Gets the ParameterKey.                                        |
| `ScaleFactorValue`               | Gets or sets the ScaleFactorValue.                            |
| `Tolerance2D`                    | Gets or sets the Tolerance2D.                                 |
| `LengthX`                        | Gets the LengthX.                                             |
| `LengthY`                        | Gets the LengthY.                                             |
| `LengthZ`                        | Gets the LengthZ.                                             |
| `FiberLength`                    | Gets or sets the FiberLength.                                 |
| `Mass`                           | Gets the Mass.                                                |
| `MeshVolume`                     | Gets the MeshVolume.                                          |
| `EndPlaneRotationAboutX`         | Gets or sets the EndPlaneRotationAboutX.                      |
| `EndPlaneRotationAboutY`         | Gets or sets the EndPlaneRotationAboutY.                      |
| `SheetSurfaceArea`               | Gets the SheetSurfaceArea.                                    |
| `SurfaceArea`                    | Gets the SurfaceArea.                                         |
| `Volume`                         | Gets the Volume.                                              |
| `XCentroid`                      | Gets the XCentroid.                                           |
| `YCentroid`                      | Gets the YCentroid.                                           |
| `ZCentroid`                      | Gets the ZCentroid.                                           |
| `AnalysisType`                   | Gets the AnalysisType.                                        |
| `LengthUnit`                     | Gets or sets the LengthUnit.                                  |
| `ComparePartsOnUpdate`           | Gets the ComparePartsOnUpdate.                                |
| `ComparePartsTolerance`          | Gets the ComparePartsTolerance.                               |
| `DisplayStyle`                   | Gets or sets the DisplayStyle.                                |
| `ElementControl`                 | Gets or sets the ElementControl.                              |
| `MeshMetric`                     | Gets the MeshMetric.                                          |
| `Model2DBehavior`                | Gets or sets the Model2DBehavior.                             |
| `MixedImportResolution`          | Gets the MixedImportResolution.                               |
| `Parameters`                     | Gets the Parameters.                                          |
| `AssignMaterialOnUpdate`         | Gets or sets the AssignMaterialOnUpdate.                      |
| `AttachFileViaTempFile`          | Gets or sets the AttachFileViaTempFile.                       |
| `CanChangeCADUnits`              | Gets the CanChangeCADUnits.                                   |
| `DecomposeDisjointGeometry`      | Gets the DecomposeDisjointGeometry.                           |
| `SmartCADUpdate`                 | Gets the SmartCADUpdate.                                      |
| `GeometryPreferencesReadOnly`    | Gets the GeometryPreferencesReadOnly.                         |
| `ImportCoordinateSystems`        | Gets the ImportCoordinateSystems.                             |
| `EnclosureAndSymmetryProcessing` | Gets the EnclosureAndSymmetryProcessing.                      |
| `SurfaceBodies`                  | Gets the SurfaceBodies.                                       |
| `SolidBodies`                    | Gets the SolidBodies.                                         |
| `LineBodies`                     | Gets the LineBodies.                                          |
| `MaterialProperties`             | Gets the MaterialProperties.                                  |
| `ReaderModeSavesUpdatedFile`     | Gets or sets the ReaderModeSavesUpdatedFile.                  |
| `UseAssociativity`               | Gets the UseAssociativity.                                    |
| `Attributes`                     | Gets the Attributes.                                          |
| `NamedSelections`                | Gets the NamedSelections.                                     |
| `UseInstances`                   | Gets the UseInstances.                                        |
| `DataModelObjectCategory`        | Gets the current DataModelObject's category.                  |
| `Children`                       | Gets the list of children.                                    |
| `Comments`                       | Gets the list of associated comments.                         |
| `Figures`                        | Gets the list of associated figures.                          |
| `Images`                         | Gets the list of associated images.                           |
| `InternalObject`                 | Gets the internal object. For advanced usage only.            |
| `Properties`                     | Gets the list of properties for this object.                  |
| `VisibleProperties`              | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* Geometry.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPrototypeGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.TemporaryDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemporaryDirectory.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.AttributeKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AttributeKey.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Source *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Source.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.NamedSelectionKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NamedSelectionKey.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Type *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Elements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elements.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Average *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Maximum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Minimum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.StandardDeviation *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StandardDeviation.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Nodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Nodes.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.ActiveBodies *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActiveBodies.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Bodies *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Bodies.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.ParameterKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ParameterKey.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Tolerance2D *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Tolerance2D.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.LengthX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthX.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.LengthY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthY.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.LengthZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthZ.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.FiberLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FiberLength.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Mass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Mass.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.MeshVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshVolume.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.EndPlaneRotationAboutX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndPlaneRotationAboutX.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.EndPlaneRotationAboutY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndPlaneRotationAboutY.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.SheetSurfaceArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SheetSurfaceArea.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.SurfaceArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SurfaceArea.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Volume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Volume.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.XCentroid *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XCentroid.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.YCentroid *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YCentroid.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.ZCentroid *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZCentroid.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.AnalysisType *: [Ansys.Mechanical.DataModel.Enums.GeometryDimensionType](../../../Mechanical/DataModel/Enums/GeometryDimensionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDimensionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AnalysisType.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.LengthUnit *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnit.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.ComparePartsOnUpdate *: [Ansys.Mechanical.DataModel.Enums.ComparePartsOnUpdateType](../../../Mechanical/DataModel/Enums/ComparePartsOnUpdateType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ComparePartsOnUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ComparePartsOnUpdate.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.ComparePartsTolerance *: [Ansys.Mechanical.DataModel.Enums.ComparePartsToleranceType](../../../Mechanical/DataModel/Enums/ComparePartsToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ComparePartsToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ComparePartsTolerance.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.DisplayStyle *: [Ansys.Mechanical.DataModel.Enums.PrototypeDisplayStyleType](../../../Mechanical/DataModel/Enums/PrototypeDisplayStyleType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PrototypeDisplayStyleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayStyle.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.ElementControl *: [Ansys.Mechanical.DataModel.Enums.ElementControl](../../../Mechanical/DataModel/Enums/ElementControl.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ElementControl) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementControl.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.MeshMetric *: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshMetric.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Model2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Model2DBehavior](../../../Mechanical/DataModel/Enums/Model2DBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.Model2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Model2DBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.MixedImportResolution *: [Ansys.Mechanical.DataModel.Enums.SecondaryImportPrefType](../../../Mechanical/DataModel/Enums/SecondaryImportPrefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SecondaryImportPrefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MixedImportResolution.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Parameters *: [Ansys.Mechanical.DataModel.Enums.ImportParameterType](../../../Mechanical/DataModel/Enums/ImportParameterType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ImportParameterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Parameters.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.AssignMaterialOnUpdate *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AssignMaterialOnUpdate.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.AttachFileViaTempFile *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AttachFileViaTempFile.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.CanChangeCADUnits *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CanChangeCADUnits.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.DecomposeDisjointGeometry *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DecomposeDisjointGeometry.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.SmartCADUpdate *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SmartCADUpdate.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.GeometryPreferencesReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the GeometryPreferencesReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.ImportCoordinateSystems *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImportCoordinateSystems.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.EnclosureAndSymmetryProcessing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnclosureAndSymmetryProcessing.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.SurfaceBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SurfaceBodies.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.SolidBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolidBodies.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.LineBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LineBodies.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.MaterialProperties *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaterialProperties.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.ReaderModeSavesUpdatedFile *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReaderModeSavesUpdatedFile.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.UseAssociativity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the UseAssociativity.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Attributes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Attributes.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.NamedSelections *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.UseInstances *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the UseInstances.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Geometry.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### Geometry.AddThickness()

Creates a new child Thickness.

<!-- !! processed by numpydoc !! -->

### Geometry.AddImportedThicknessExternalData()

Creates a new Imported Thickness (External Data).

<!-- !! processed by numpydoc !! -->

### Geometry.AddImportedElementOrientationExternalData()

Creates a new Imported Element Orientation (External Data).

<!-- !! processed by numpydoc !! -->

### Geometry.AddLayeredSection()

Creates a new child LayeredSection.

<!-- !! processed by numpydoc !! -->

### Geometry.GetBody(geoBody: Ansys.ACT.Interfaces.Geometry.IBaseGeoBody)

Gets the Body associated with the given IGeoBody

<!-- !! processed by numpydoc !! -->

### Geometry.GetPart(geoPart: Ansys.ACT.Interfaces.Geometry.IBaseGeoPart)

Gets the Part associated with the given IGeoPart

<!-- !! processed by numpydoc !! -->

### Geometry.FreezeMeshOnAllParts()

Run the FreezeMeshOnAllParts action.

<!-- !! processed by numpydoc !! -->

### Geometry.UnfreezeMeshOnAllParts()

Run the UnfreezeMeshOnAllParts action.

<!-- !! processed by numpydoc !! -->

### Geometry.UnsuppressAllBodies()

Unsuppress all the bodies that were suppressed.

<!-- !! processed by numpydoc !! -->

### Geometry.InvertSuppressedBodySet()

Invert all parts Suppressed property.

<!-- !! processed by numpydoc !! -->

### Geometry.CreateParameter(paramPath: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Geometry.RemoveParameter(paramPath: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Geometry.CenterOfMass(geoBodies: System.Collections.Generic.IList[Ansys.ACT.Interfaces.Geometry.IBaseGeoBody], pointMasses: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.PointMass](PointMass.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.PointMass)], distributedMasses: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.DistributedMass](DistributedMass.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.DistributedMass)])

CenterOfMass method.

<!-- !! processed by numpydoc !! -->

### Geometry.AddDistributedMass()

Creates a new DistributedMass

<!-- !! processed by numpydoc !! -->

### Geometry.AddElementOrientation()

Creates a new ElementOrientation

<!-- !! processed by numpydoc !! -->

### Geometry.AddPointMass()

Creates a new PointMass

<!-- !! processed by numpydoc !! -->

### Geometry.AddSurfaceCoating()

Creates a new SurfaceCoating

<!-- !! processed by numpydoc !! -->

### Geometry.AddThermalPointMass()

Creates a new ThermalPointMass

<!-- !! processed by numpydoc !! -->

### Geometry.ResetBodyColors()

Run the ResetBodyColors action.

<!-- !! processed by numpydoc !! -->

### Geometry.UpdateGeometryFromSource()

Run the UpdateGeometryFromSource action.

<!-- !! processed by numpydoc !! -->

### Geometry.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Geometry.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Geometry.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Geometry.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Geometry.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### Geometry.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Geometry.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Geometry.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Geometry.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Geometry.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Geometry.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Geometry.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### Geometry.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

