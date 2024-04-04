# Body

### *class* Body

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Body.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetGeoBody`](#Body.GetGeoBody)                           | Gets the Geo Body                                                                 |
|------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#Body.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`AddCommandSnippet`](#Body.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddPythonCodeEventBased`](#Body.AddPythonCodeEventBased) | Creates a new PythonCodeEventBased                                                |
| [`GenerateMesh`](#Body.GenerateMesh)                       | Run the GenerateMesh action.                                                      |
| [`PreviewInflation`](#Body.PreviewInflation)               | Run the PreviewInflation action.                                                  |
| [`PreviewSurfaceMesh`](#Body.PreviewSurfaceMesh)           | Run the PreviewSurfaceMesh action.                                                |
| [`ShowBody`](#Body.ShowBody)                               | Run the ShowBody action.                                                          |
| [`Update`](#Body.Update)                                   | Run the Update action.                                                            |
| [`GetChildren`](#id1)                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Body.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Body.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Body.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Body.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Body.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Body.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Body.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Body.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Body.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Body.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Body.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Body.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Body.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Hidden`](#Body.Hidden)                                                                                                              | Hide or show the body.                                                                         |
|---------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`ConfigurationId`](#Body.ConfigurationId)                                                                                            | Gets the related Result Mesh’s ConfigurationId.                                                |
| [`ResultMeshId`](#Body.ResultMeshId)                                                                                                  | Gets the related Result Mesh’s ObjectId.                                                       |
| [`ReferenceTemperature`](#Body.ReferenceTemperature)                                                                                  | Gets or sets the ReferenceTemperature.                                                         |
| [`ThicknessMode`](#Body.ThicknessMode)                                                                                                | Gets the ThicknessMode.                                                                        |
| [`Dimension`](#Body.Dimension)                                                                                                        | Gets or sets the Dimension.                                                                    |
| [`Assignment`](#Body.Assignment)                                                                                                      | Gets or sets the Assignment.                                                                   |
| [`CrossSectionName`](#Body.CrossSectionName)                                                                                          | Gets CrossSectionName.                                                                         |
| [`ModelType`](../../../Mechanical/DataModel/Enums/ModelType.md#ModelType)                                                             | Gets or sets the ModelType.                                                                    |
| [`GeometryType`](../../../Mechanical/DataModel/Enums/GeometryType.md#GeometryType)                                                    | Gets the GeometryType.                                                                         |
| [`SuppressedParameterized`](#Body.SuppressedParameterized)                                                                            | Gets if the part suppressed property is parameterized.                                         |
| [`Transparency`](#Body.Transparency)                                                                                                  | Gets or sets the Transparency. Values range from 0.0 (fully invisible) to 1.0 (fully visible). |
| [`Color`](#Body.Color)                                                                                                                | Gets or sets the Color, encoded as a BGR bitfield.                                             |
| [`InternalObject`](#id0)                                                                                                              | Gets the internal object. For advanced usage only.                                             |
| [`Elements`](#Body.Elements)                                                                                                          | Gets the Elements.                                                                             |
| [`Material`](Material.md#Material)                                                                                                    | Gets or sets the Material.                                                                     |
| [`Nodes`](#Body.Nodes)                                                                                                                | Gets the Nodes.                                                                                |
| [`NumberOfTurns`](#Body.NumberOfTurns)                                                                                                | Gets or sets the NumberOfTurns.                                                                |
| [`MeshVersion`](#Body.MeshVersion)                                                                                                    | Gets the MeshVersion.                                                                          |
| [`LengthX`](#Body.LengthX)                                                                                                            | Gets the LengthX.                                                                              |
| [`LengthY`](#Body.LengthY)                                                                                                            | Gets the LengthY.                                                                              |
| [`LengthZ`](#Body.LengthZ)                                                                                                            | Gets the LengthZ.                                                                              |
| [`CrossSectionArea`](#Body.CrossSectionArea)                                                                                          | Gets the CrossSectionArea.                                                                     |
| [`CrossSectionIYY`](#Body.CrossSectionIYY)                                                                                            | Gets the CrossSectionIYY.                                                                      |
| [`CrossSectionIZZ`](#Body.CrossSectionIZZ)                                                                                            | Gets the CrossSectionIZZ.                                                                      |
| [`FiberAngle`](#Body.FiberAngle)                                                                                                      | Gets or sets the FiberAngle.                                                                   |
| [`FiberCrossSectionArea`](#Body.FiberCrossSectionArea)                                                                                | Gets or sets the FiberCrossSectionArea.                                                        |
| [`FiberSpacing`](#Body.FiberSpacing)                                                                                                  | Gets or sets the FiberSpacing.                                                                 |
| [`FluidCrossArea`](#Body.FluidCrossArea)                                                                                              | Gets or sets the FluidCrossArea.                                                               |
| [`Mass`](#Body.Mass)                                                                                                                  | Gets the Mass.                                                                                 |
| [`CentroidX`](#Body.CentroidX)                                                                                                        | Gets the CentroidX.                                                                            |
| [`CentroidY`](#Body.CentroidY)                                                                                                        | Gets the CentroidY.                                                                            |
| [`CentroidZ`](#Body.CentroidZ)                                                                                                        | Gets the CentroidZ.                                                                            |
| [`MomentOfInertiaIp1`](#Body.MomentOfInertiaIp1)                                                                                      | Gets the MomentOfInertiaIp1.                                                                   |
| [`MomentOfInertiaIp2`](#Body.MomentOfInertiaIp2)                                                                                      | Gets the MomentOfInertiaIp2.                                                                   |
| [`MomentOfInertiaIp3`](#Body.MomentOfInertiaIp3)                                                                                      | Gets the MomentOfInertiaIp3.                                                                   |
| [`Average`](#Body.Average)                                                                                                            | Gets the Average.                                                                              |
| [`Maximum`](#Body.Maximum)                                                                                                            | Gets the Maximum.                                                                              |
| [`Minimum`](#Body.Minimum)                                                                                                            | Gets the Minimum.                                                                              |
| [`StandardDeviation`](#Body.StandardDeviation)                                                                                        | Gets the StandardDeviation.                                                                    |
| [`OffsetX`](#Body.OffsetX)                                                                                                            | Gets or sets the OffsetX.                                                                      |
| [`OffsetY`](#Body.OffsetY)                                                                                                            | Gets or sets the OffsetY.                                                                      |
| [`PipeExternalDiameter`](#Body.PipeExternalDiameter)                                                                                  | Gets the PipeExternalDiameter.                                                                 |
| [`PipeInternalDiameter`](#Body.PipeInternalDiameter)                                                                                  | Gets the PipeInternalDiameter.                                                                 |
| [`PipeThickness`](#Body.PipeThickness)                                                                                                | Gets the PipeThickness.                                                                        |
| [`ReferenceTemperatureValue`](#Body.ReferenceTemperatureValue)                                                                        | Gets or sets the ReferenceTemperatureValue.                                                    |
| [`SurfaceArea`](#Body.SurfaceArea)                                                                                                    | Gets the SurfaceArea.                                                                          |
| [`Thickness`](Thickness.md#Thickness)                                                                                                 | Gets or sets the Thickness.                                                                    |
| [`Volume`](Results/Volume.md#Volume)                                                                                                  | Gets the Volume.                                                                               |
| [`Length`](#Body.Length)                                                                                                              | Gets the Length.                                                                               |
| [`OffsetMode`](#Body.OffsetMode)                                                                                                      | Gets or sets the OffsetMode.                                                                   |
| [`BrickIntegrationScheme`](../../../Mechanical/DataModel/Enums/BrickIntegrationScheme.md#BrickIntegrationScheme)                      | Gets or sets the BrickIntegrationScheme.                                                       |
| [`FluidDiscretization`](#Body.FluidDiscretization)                                                                                    | Gets or sets the FluidDiscretization.                                                          |
| [`LinkTrussBehavior`](#Body.LinkTrussBehavior)                                                                                        | Gets or sets the LinkTrussBehavior.                                                            |
| [`MaterialPolarizationDirection`](../../../Mechanical/DataModel/Enums/MaterialPolarizationDirection.md#MaterialPolarizationDirection) | Gets or sets the MaterialPolarizationDirection.                                                |
| [`MeshMetric`](#Body.MeshMetric)                                                                                                      | Gets the MeshMetric.                                                                           |
| [`Behavior`](#Body.Behavior)                                                                                                          | Gets or sets the Behavior.                                                                     |
| [`OffsetType`](#Body.OffsetType)                                                                                                      | Gets or sets the OffsetType.                                                                   |
| [`FluidSolidPhase`](#Body.FluidSolidPhase)                                                                                            | Gets or sets the FluidSolidPhase.                                                              |
| [`ReferenceFrame`](#Body.ReferenceFrame)                                                                                              | Gets or sets the ReferenceFrame.                                                               |
| [`ReinforcingStressState`](../../../Mechanical/DataModel/Enums/ReinforcingStressState.md#ReinforcingStressState)                      | Gets or sets the ReinforcingStressState.                                                       |
| [`StiffnessOption`](#Body.StiffnessOption)                                                                                            | Gets or sets the StiffnessOption.                                                              |
| [`ShellOffsetType`](../../../Mechanical/DataModel/Enums/ShellOffsetType.md#ShellOffsetType)                                           | Gets or sets the ShellOffsetType.                                                              |
| [`StiffnessBehavior`](../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#StiffnessBehavior)                                     | Gets or sets the StiffnessBehavior.                                                            |
| [`Treatment`](#Body.Treatment)                                                                                                        | Gets or sets the Treatment.                                                                    |
| [`Visible`](#Body.Visible)                                                                                                            | Gets or sets the Visible.                                                                      |
| [`HomogeneousMembrane`](#Body.HomogeneousMembrane)                                                                                    | Gets or sets the HomogeneousMembrane.                                                          |
| [`IsWindingBody`](#Body.IsWindingBody)                                                                                                | Gets the IsWindingBody.                                                                        |
| [`NonlinearEffects`](#Body.NonlinearEffects)                                                                                          | Gets or sets the NonlinearEffects.                                                             |
| [`Suppressed`](#Body.Suppressed)                                                                                                      | Gets or sets the Suppressed.                                                                   |
| [`ThermalStrainEffects`](#Body.ThermalStrainEffects)                                                                                  | Gets or sets the ThermalStrainEffects.                                                         |
| [`ManualThicknessMode`](#Body.ManualThicknessMode)                                                                                    | Gets the ManualThicknessMode.                                                                  |
| [`UseReferenceTemperatureByBody`](#Body.UseReferenceTemperatureByBody)                                                                | Gets or sets the UseReferenceTemperatureByBody.                                                |
| [`UserNameChange`](#Body.UserNameChange)                                                                                              | Gets the UserNameChange.                                                                       |
| [`BeamSection`](#Body.BeamSection)                                                                                                    | Gets the BeamSection.                                                                          |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the CoordinateSystem.                                                             |
| [`CrossSectionSelection`](#Body.CrossSectionSelection)                                                                                | Gets or sets the CrossSectionSelection.                                                        |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                                                   |
| [`Children`](#Body.Children)                                                                                                          | Gets the list of children.                                                                     |
| [`Comments`](#Body.Comments)                                                                                                          | Gets the list of associated comments.                                                          |
| [`Figures`](#Body.Figures)                                                                                                            | Gets the list of associated figures.                                                           |
| [`Images`](#Body.Images)                                                                                                              | Gets the list of associated images.                                                            |
| [`ReadOnly`](#Body.ReadOnly)                                                                                                          | Gets or sets the ReadOnly.                                                                     |
| [`InternalObject`](#id0)                                                                                                              | Gets the internal object. For advanced usage only.                                             |
| [`Properties`](#Body.Properties)                                                                                                      | Gets the list of properties for this object.                                                   |
| [`VisibleProperties`](#Body.VisibleProperties)                                                                                        | Gets the list of properties that are visible for this object.                                  |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Body
```

## Property detail

### *property* Body.Hidden *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Hide or show the body.

<!-- !! processed by numpydoc !! -->

### *property* Body.ConfigurationId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the related Result Mesh’s ConfigurationId.

<!-- !! processed by numpydoc !! -->

### *property* Body.ResultMeshId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the related Result Mesh’s ObjectId.

<!-- !! processed by numpydoc !! -->

### *property* Body.ReferenceTemperature *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperature.

<!-- !! processed by numpydoc !! -->

### *property* Body.ThicknessMode *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ThicknessMode.

<!-- !! processed by numpydoc !! -->

### *property* Body.Dimension *: [Ansys.Mechanical.DataModel.Enums.ShellBodyDimension](../../../Mechanical/DataModel/Enums/ShellBodyDimension.md#ShellBodyDimension) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Dimension.

<!-- !! processed by numpydoc !! -->

### *property* Body.Assignment *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Assignment.

<!-- !! processed by numpydoc !! -->

### *property* Body.CrossSectionName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets CrossSectionName.

<!-- !! processed by numpydoc !! -->

### *property* Body.ModelType *: [Ansys.Mechanical.DataModel.Enums.PrototypeModelType](../../../Mechanical/DataModel/Enums/PrototypeModelType.md#PrototypeModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelType.
Note: ModelType is applicable to line bodies and surface bodies only.

<!-- !! processed by numpydoc !! -->

### *property* Body.GeometryType *: [Ansys.Mechanical.DataModel.Enums.GeometryType](../../../Mechanical/DataModel/Enums/GeometryType.md#GeometryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the GeometryType.

<!-- !! processed by numpydoc !! -->

### *property* Body.SuppressedParameterized *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets if the part suppressed property is parameterized.

<!-- !! processed by numpydoc !! -->

### *property* Body.Transparency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Transparency. Values range from 0.0 (fully invisible) to 1.0 (fully visible).

<!-- !! processed by numpydoc !! -->

### *property* Body.Color *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Color, encoded as a BGR bitfield.

<!-- !! processed by numpydoc !! -->

### *property* Body.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPrototypeAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Body.Elements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elements.

<!-- !! processed by numpydoc !! -->

### *property* Body.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* Body.Nodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Nodes.

<!-- !! processed by numpydoc !! -->

### *property* Body.NumberOfTurns *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfTurns.

<!-- !! processed by numpydoc !! -->

### *property* Body.MeshVersion *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshVersion.

<!-- !! processed by numpydoc !! -->

### *property* Body.LengthX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthX.

<!-- !! processed by numpydoc !! -->

### *property* Body.LengthY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthY.

<!-- !! processed by numpydoc !! -->

### *property* Body.LengthZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthZ.

<!-- !! processed by numpydoc !! -->

### *property* Body.CrossSectionArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSectionArea.

<!-- !! processed by numpydoc !! -->

### *property* Body.CrossSectionIYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSectionIYY.

<!-- !! processed by numpydoc !! -->

### *property* Body.CrossSectionIZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSectionIZZ.

<!-- !! processed by numpydoc !! -->

### *property* Body.FiberAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FiberAngle.

<!-- !! processed by numpydoc !! -->

### *property* Body.FiberCrossSectionArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FiberCrossSectionArea.

<!-- !! processed by numpydoc !! -->

### *property* Body.FiberSpacing *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FiberSpacing.

<!-- !! processed by numpydoc !! -->

### *property* Body.FluidCrossArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidCrossArea.

<!-- !! processed by numpydoc !! -->

### *property* Body.Mass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Mass.

<!-- !! processed by numpydoc !! -->

### *property* Body.CentroidX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CentroidX.

<!-- !! processed by numpydoc !! -->

### *property* Body.CentroidY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CentroidY.

<!-- !! processed by numpydoc !! -->

### *property* Body.CentroidZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CentroidZ.

<!-- !! processed by numpydoc !! -->

### *property* Body.MomentOfInertiaIp1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentOfInertiaIp1.

<!-- !! processed by numpydoc !! -->

### *property* Body.MomentOfInertiaIp2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentOfInertiaIp2.

<!-- !! processed by numpydoc !! -->

### *property* Body.MomentOfInertiaIp3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentOfInertiaIp3.

<!-- !! processed by numpydoc !! -->

### *property* Body.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* Body.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* Body.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* Body.StandardDeviation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StandardDeviation.

<!-- !! processed by numpydoc !! -->

### *property* Body.OffsetX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetX.

<!-- !! processed by numpydoc !! -->

### *property* Body.OffsetY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetY.

<!-- !! processed by numpydoc !! -->

### *property* Body.PipeExternalDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PipeExternalDiameter.

<!-- !! processed by numpydoc !! -->

### *property* Body.PipeInternalDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PipeInternalDiameter.

<!-- !! processed by numpydoc !! -->

### *property* Body.PipeThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PipeThickness.

<!-- !! processed by numpydoc !! -->

### *property* Body.ReferenceTemperatureValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperatureValue.

<!-- !! processed by numpydoc !! -->

### *property* Body.SurfaceArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SurfaceArea.

<!-- !! processed by numpydoc !! -->

### *property* Body.Thickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thickness.

<!-- !! processed by numpydoc !! -->

### *property* Body.Volume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Volume.

<!-- !! processed by numpydoc !! -->

### *property* Body.Length *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Length.

<!-- !! processed by numpydoc !! -->

### *property* Body.OffsetMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetMode.

<!-- !! processed by numpydoc !! -->

### *property* Body.BrickIntegrationScheme *: [Ansys.Mechanical.DataModel.Enums.BrickIntegrationScheme](../../../Mechanical/DataModel/Enums/BrickIntegrationScheme.md#BrickIntegrationScheme) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BrickIntegrationScheme.

<!-- !! processed by numpydoc !! -->

### *property* Body.FluidDiscretization *: [Ansys.Mechanical.DataModel.Enums.FluidDiscretizationType](../../../Mechanical/DataModel/Enums/FluidDiscretizationType.md#FluidDiscretizationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidDiscretization.

<!-- !! processed by numpydoc !! -->

### *property* Body.LinkTrussBehavior *: [Ansys.Mechanical.DataModel.Enums.PrototypeLinkBehavior](../../../Mechanical/DataModel/Enums/PrototypeLinkBehavior.md#PrototypeLinkBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LinkTrussBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Body.MaterialPolarizationDirection *: [Ansys.Mechanical.DataModel.Enums.MaterialPolarizationDirection](../../../Mechanical/DataModel/Enums/MaterialPolarizationDirection.md#MaterialPolarizationDirection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialPolarizationDirection.

<!-- !! processed by numpydoc !! -->

### *property* Body.MeshMetric *: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshMetric.

<!-- !! processed by numpydoc !! -->

### *property* Body.Behavior *: [Ansys.Mechanical.DataModel.Enums.Model2DBehavior](../../../Mechanical/DataModel/Enums/Model2DBehavior.md#Model2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

### *property* Body.OffsetType *: [Ansys.Mechanical.DataModel.Enums.BeamOffsetType](../../../Mechanical/DataModel/Enums/BeamOffsetType.md#BeamOffsetType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetType.

<!-- !! processed by numpydoc !! -->

### *property* Body.FluidSolidPhase *: [Ansys.Mechanical.DataModel.Enums.PhaseType](../../../Mechanical/DataModel/Enums/PhaseType.md#PhaseType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidSolidPhase.

<!-- !! processed by numpydoc !! -->

### *property* Body.ReferenceFrame *: [Ansys.Mechanical.DataModel.Enums.ReferenceFrameType](../../../Mechanical/DataModel/Enums/ReferenceFrameType.md#ReferenceFrameType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceFrame.

<!-- !! processed by numpydoc !! -->

### *property* Body.ReinforcingStressState *: [Ansys.Mechanical.DataModel.Enums.ReinforcingStressState](../../../Mechanical/DataModel/Enums/ReinforcingStressState.md#ReinforcingStressState) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReinforcingStressState.

<!-- !! processed by numpydoc !! -->

### *property* Body.StiffnessOption *: [Ansys.Mechanical.DataModel.Enums.ShellElementStiffnessOption](../../../Mechanical/DataModel/Enums/ShellElementStiffnessOption.md#ShellElementStiffnessOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessOption.

<!-- !! processed by numpydoc !! -->

### *property* Body.ShellOffsetType *: [Ansys.Mechanical.DataModel.Enums.ShellOffsetType](../../../Mechanical/DataModel/Enums/ShellOffsetType.md#ShellOffsetType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellOffsetType.

<!-- !! processed by numpydoc !! -->

### *property* Body.StiffnessBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Body.Treatment *: [Ansys.Mechanical.DataModel.Enums.BodyTreatment](../../../Mechanical/DataModel/Enums/BodyTreatment.md#BodyTreatment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Treatment.

<!-- !! processed by numpydoc !! -->

### *property* Body.Visible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

### *property* Body.HomogeneousMembrane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HomogeneousMembrane.

<!-- !! processed by numpydoc !! -->

### *property* Body.IsWindingBody *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsWindingBody.

<!-- !! processed by numpydoc !! -->

### *property* Body.NonlinearEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

### *property* Body.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Body.ThermalStrainEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

### *property* Body.ManualThicknessMode *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ManualThicknessMode.

<!-- !! processed by numpydoc !! -->

### *property* Body.UseReferenceTemperatureByBody *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseReferenceTemperatureByBody.

<!-- !! processed by numpydoc !! -->

### *property* Body.UserNameChange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the UserNameChange.

<!-- !! processed by numpydoc !! -->

### *property* Body.BeamSection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BeamSection.

<!-- !! processed by numpydoc !! -->

### *property* Body.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Body.CrossSectionSelection *: [Ansys.ACT.Automation.Mechanical.CrossSection](CrossSection.md#CrossSection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrossSectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* Body.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Body.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Body.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Body.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Body.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Body.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Body.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Body.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Body.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Body.GetGeoBody()

Gets the Geo Body

<!-- !! processed by numpydoc !! -->

### Body.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### Body.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### Body.AddPythonCodeEventBased()

Creates a new PythonCodeEventBased

<!-- !! processed by numpydoc !! -->

### Body.GenerateMesh()

Run the GenerateMesh action.

<!-- !! processed by numpydoc !! -->

### Body.PreviewInflation()

Run the PreviewInflation action.

<!-- !! processed by numpydoc !! -->

### Body.PreviewSurfaceMesh()

Run the PreviewSurfaceMesh action.

<!-- !! processed by numpydoc !! -->

### Body.ShowBody()

Run the ShowBody action.

<!-- !! processed by numpydoc !! -->

### Body.Update()

Run the Update action.

<!-- !! processed by numpydoc !! -->

### Body.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Body.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Body.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Body.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Body.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Body.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Body.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Body.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Body.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Body.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Body.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Body.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Body.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Body.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Body.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
