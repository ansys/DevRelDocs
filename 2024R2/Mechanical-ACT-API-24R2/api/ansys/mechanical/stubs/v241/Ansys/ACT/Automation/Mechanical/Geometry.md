# `Geometry`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Geometry

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Geometry.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddThickness`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.AddThickness)                                                           | Creates a new child Thickness.                                                    |
| [`AddImportedThicknessExternalData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.AddImportedThicknessExternalData)                   | Creates a new Imported Thickness (External Data).                                 |
| [`AddImportedElementOrientationExternalData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.AddImportedElementOrientationExternalData) | Creates a new Imported Element Orientation (External Data).                       |
| [`AddLayeredSection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.AddLayeredSection)                                                 | Creates a new child LayeredSection.                                               |
| [`GetBody`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.GetBody)                                                                     | Gets the Body associated with the given IGeoBody                                  |
| [`GetPart`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.GetPart)                                                                     | Gets the Part associated with the given IGeoPart                                  |
| [`FreezeMeshOnAllParts`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.FreezeMeshOnAllParts)                                           | Run the FreezeMeshOnAllParts action.                                              |
| [`UnfreezeMeshOnAllParts`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.UnfreezeMeshOnAllParts)                                       | Run the UnfreezeMeshOnAllParts action.                                            |
| [`UnsuppressAllBodies`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.UnsuppressAllBodies)                                             | Unsuppress all the bodies that were suppressed.                                   |
| [`InvertSuppressedBodySet`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.InvertSuppressedBodySet)                                     | Invert all parts Suppressed property.                                             |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.CreateParameter)                                                     | Creates a new parameter for a Property.                                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.RemoveParameter)                                                     | Removes the parameter from the parameter set corresponding to the given property. |
| [`CenterOfMass`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.CenterOfMass)                                                           | CenterOfMass method.                                                              |
| [`AddDistributedMass`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.AddDistributedMass)                                               | Creates a new DistributedMass                                                     |
| [`AddElementOrientation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.AddElementOrientation)                                         | Creates a new ElementOrientation                                                  |
| [`AddPointMass`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.AddPointMass)                                                           | Creates a new PointMass                                                           |
| [`AddSurfaceCoating`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.AddSurfaceCoating)                                                 | Creates a new SurfaceCoating                                                      |
| [`AddThermalPointMass`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.AddThermalPointMass)                                             | Creates a new ThermalPointMass                                                    |
| [`ResetBodyColors`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.ResetBodyColors)                                                     | Run the ResetBodyColors action.                                                   |
| [`UpdateGeometryFromSource`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.UpdateGeometryFromSource)                                   | Run the UpdateGeometryFromSource action.                                          |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#id1)                                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#id1)                                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.AddComment)                                                               | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.AddFigure)                                                                 | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.AddImage)                                                                   | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Activate)                                                                   | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.CopyTo)                                                                       | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Duplicate)                                                                 | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.GroupAllSimilarChildren)                                     | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.GroupSimilarObjects)                                             | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.PropertyByName)                                                       | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.PropertyByAPIName)                                                 | Get a property by its API name.                                                   |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.GetParameter)                                                           | Gets the parameter corresponding to the given property.                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#id0)                                                     | Gets the internal object. For advanced usage only.            |
| [`TemporaryDirectory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.TemporaryDirectory)                         | Gets or sets the TemporaryDirectory.                          |
| [`AttributeKey`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.AttributeKey)                                     | Gets the AttributeKey.                                        |
| [`Source`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Source)                                                 | Gets the Source.                                              |
| [`NamedSelectionKey`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.NamedSelectionKey)                           | Gets the NamedSelectionKey.                                   |
| [`Type`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Type)                                                     | Gets the Type.                                                |
| [`Elements`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Elements)                                             | Gets the Elements.                                            |
| [`Average`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Average)                                               | Gets the Average.                                             |
| [`Maximum`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Maximum)                                               | Gets the Maximum.                                             |
| [`Minimum`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Minimum)                                               | Gets the Minimum.                                             |
| [`StandardDeviation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.StandardDeviation)                           | Gets the StandardDeviation.                                   |
| [`Nodes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Nodes)                                                   | Gets the Nodes.                                               |
| [`ActiveBodies`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.ActiveBodies)                                     | Gets the ActiveBodies.                                        |
| [`Bodies`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Bodies)                                                 | Gets the Bodies.                                              |
| [`ParameterKey`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.ParameterKey)                                     | Gets the ParameterKey.                                        |
| [`ScaleFactorValue`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.ScaleFactorValue)                             | Gets or sets the ScaleFactorValue.                            |
| [`Tolerance2D`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Tolerance2D)                                       | Gets or sets the Tolerance2D.                                 |
| [`LengthX`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.LengthX)                                               | Gets the LengthX.                                             |
| [`LengthY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.LengthY)                                               | Gets the LengthY.                                             |
| [`LengthZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.LengthZ)                                               | Gets the LengthZ.                                             |
| [`FiberLength`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.FiberLength)                                       | Gets or sets the FiberLength.                                 |
| [`Mass`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Mass)                                                     | Gets the Mass.                                                |
| [`MeshVolume`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.MeshVolume)                                         | Gets the MeshVolume.                                          |
| [`EndPlaneRotationAboutX`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.EndPlaneRotationAboutX)                 | Gets or sets the EndPlaneRotationAboutX.                      |
| [`EndPlaneRotationAboutY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.EndPlaneRotationAboutY)                 | Gets or sets the EndPlaneRotationAboutY.                      |
| [`SheetSurfaceArea`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.SheetSurfaceArea)                             | Gets the SheetSurfaceArea.                                    |
| [`SurfaceArea`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.SurfaceArea)                                       | Gets the SurfaceArea.                                         |
| [`Volume`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Volume)                                                 | Gets the Volume.                                              |
| [`XCentroid`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.XCentroid)                                           | Gets the XCentroid.                                           |
| [`YCentroid`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.YCentroid)                                           | Gets the YCentroid.                                           |
| [`ZCentroid`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.ZCentroid)                                           | Gets the ZCentroid.                                           |
| [`AnalysisType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.AnalysisType)                                     | Gets the AnalysisType.                                        |
| [`LengthUnit`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.LengthUnit)                                         | Gets or sets the LengthUnit.                                  |
| [`ComparePartsOnUpdate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.ComparePartsOnUpdate)                     | Gets the ComparePartsOnUpdate.                                |
| [`ComparePartsTolerance`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.ComparePartsTolerance)                   | Gets the ComparePartsTolerance.                               |
| [`DisplayStyle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.DisplayStyle)                                     | Gets or sets the DisplayStyle.                                |
| [`ElementControl`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.ElementControl)                                 | Gets or sets the ElementControl.                              |
| [`MeshMetric`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.MeshMetric)                                         | Gets the MeshMetric.                                          |
| [`Model2DBehavior`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Model2DBehavior)                               | Gets or sets the Model2DBehavior.                             |
| [`MixedImportResolution`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.MixedImportResolution)                   | Gets the MixedImportResolution.                               |
| [`Parameters`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Parameters)                                         | Gets the Parameters.                                          |
| [`AssignMaterialOnUpdate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.AssignMaterialOnUpdate)                 | Gets or sets the AssignMaterialOnUpdate.                      |
| [`AttachFileViaTempFile`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.AttachFileViaTempFile)                   | Gets or sets the AttachFileViaTempFile.                       |
| [`CanChangeCADUnits`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.CanChangeCADUnits)                           | Gets the CanChangeCADUnits.                                   |
| [`DecomposeDisjointGeometry`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.DecomposeDisjointGeometry)           | Gets the DecomposeDisjointGeometry.                           |
| [`SmartCADUpdate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.SmartCADUpdate)                                 | Gets the SmartCADUpdate.                                      |
| [`GeometryPreferencesReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.GeometryPreferencesReadOnly)       | Gets the GeometryPreferencesReadOnly.                         |
| [`ImportCoordinateSystems`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.ImportCoordinateSystems)               | Gets the ImportCoordinateSystems.                             |
| [`EnclosureAndSymmetryProcessing`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.EnclosureAndSymmetryProcessing) | Gets the EnclosureAndSymmetryProcessing.                      |
| [`SurfaceBodies`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.SurfaceBodies)                                   | Gets the SurfaceBodies.                                       |
| [`SolidBodies`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.SolidBodies)                                       | Gets the SolidBodies.                                         |
| [`LineBodies`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.LineBodies)                                         | Gets the LineBodies.                                          |
| [`MaterialProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.MaterialProperties)                         | Gets the MaterialProperties.                                  |
| [`ReaderModeSavesUpdatedFile`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.ReaderModeSavesUpdatedFile)         | Gets or sets the ReaderModeSavesUpdatedFile.                  |
| [`UseAssociativity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.UseAssociativity)                             | Gets the UseAssociativity.                                    |
| [`Attributes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Attributes)                                         | Gets the Attributes.                                          |
| [`NamedSelections`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.NamedSelections)                               | Gets the NamedSelections.                                     |
| [`UseInstances`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.UseInstances)                                     | Gets the UseInstances.                                        |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.DataModelObjectCategory)               | Gets the current DataModelObject's category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Children)                                             | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Comments)                                             | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Figures)                                               | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Images)                                                 | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#id0)                                                     | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.Properties)                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Geometry.md#Geometry.VisibleProperties)                           | Gets the list of properties that are visible for this object. |

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

### *property* Geometry.AnalysisType *: [Ansys.Mechanical.DataModel.Enums.GeometryDimensionType](../../../Mechanical/DataModel/Enums/GeometryDimensionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDimensionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AnalysisType.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.LengthUnit"></a>

### *property* Geometry.LengthUnit *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnit.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ComparePartsOnUpdate"></a>

### *property* Geometry.ComparePartsOnUpdate *: [Ansys.Mechanical.DataModel.Enums.ComparePartsOnUpdateType](../../../Mechanical/DataModel/Enums/ComparePartsOnUpdateType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ComparePartsOnUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ComparePartsOnUpdate.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ComparePartsTolerance"></a>

### *property* Geometry.ComparePartsTolerance *: [Ansys.Mechanical.DataModel.Enums.ComparePartsToleranceType](../../../Mechanical/DataModel/Enums/ComparePartsToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ComparePartsToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ComparePartsTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.DisplayStyle"></a>

### *property* Geometry.DisplayStyle *: [Ansys.Mechanical.DataModel.Enums.PrototypeDisplayStyleType](../../../Mechanical/DataModel/Enums/PrototypeDisplayStyleType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PrototypeDisplayStyleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayStyle.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.ElementControl"></a>

### *property* Geometry.ElementControl *: [Ansys.Mechanical.DataModel.Enums.ElementControl](../../../Mechanical/DataModel/Enums/ElementControl.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ElementControl) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementControl.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.MeshMetric"></a>

### *property* Geometry.MeshMetric *: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshMetric.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Model2DBehavior"></a>

### *property* Geometry.Model2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Model2DBehavior](../../../Mechanical/DataModel/Enums/Model2DBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.Model2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Model2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.MixedImportResolution"></a>

### *property* Geometry.MixedImportResolution *: [Ansys.Mechanical.DataModel.Enums.SecondaryImportPrefType](../../../Mechanical/DataModel/Enums/SecondaryImportPrefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SecondaryImportPrefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MixedImportResolution.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Parameters"></a>

### *property* Geometry.Parameters *: [Ansys.Mechanical.DataModel.Enums.ImportParameterType](../../../Mechanical/DataModel/Enums/ImportParameterType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ImportParameterType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* Geometry.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Children"></a>

### *property* Geometry.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Comments"></a>

### *property* Geometry.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Figures"></a>

### *property* Geometry.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Geometry.Images"></a>

### *property* Geometry.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

Creates a new Imported Thickness (External Data).

<!-- !! processed by numpydoc !! -->

<a id="Geometry.AddImportedElementOrientationExternalData"></a>

### Geometry.AddImportedElementOrientationExternalData()

Creates a new Imported Element Orientation (External Data).

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

### Geometry.CenterOfMass(geoBodies: System.Collections.Generic.IList[Ansys.ACT.Interfaces.Geometry.IBaseGeoBody], pointMasses: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.PointMass](PointMass.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.PointMass)], distributedMasses: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.DistributedMass](DistributedMass.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.DistributedMass)])

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

### Geometry.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

