# `Body`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Body.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetGeoBody`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.GetGeoBody)                           | Gets the Geo Body                                                                 |
| [`ClearGeneratedData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`AddCommandSnippet`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddPythonCodeEventBased`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.AddPythonCodeEventBased) | Creates a new PythonCodeEventBased                                                |
| [`GenerateMesh`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.GenerateMesh)                       | Run the GenerateMesh action.                                                      |
| [`PreviewInflation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.PreviewInflation)               | Run the PreviewInflation action.                                                  |
| [`PreviewSurfaceMesh`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.PreviewSurfaceMesh)           | Run the PreviewSurfaceMesh action.                                                |
| [`ShowBody`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.ShowBody)                               | Run the ShowBody action.                                                          |
| [`Update`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Update)                                   | Run the Update action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#id1)                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#id1)                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Hidden`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Hidden)                                               | Hide or show the body.                                                                         |
| [`ConfigurationId`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.ConfigurationId)                             | Gets the related Result Mesh’s ConfigurationId.                                                |
| [`ResultMeshId`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.ResultMeshId)                                   | Gets the related Result Mesh’s ObjectId.                                                       |
| [`ReferenceTemperature`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.ReferenceTemperature)                   | Gets or sets the ReferenceTemperature.                                                         |
| [`ThicknessMode`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.ThicknessMode)                                 | Gets the ThicknessMode.                                                                        |
| [`Dimension`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Dimension)                                         | Gets or sets the Dimension.                                                                    |
| [`Assignment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Assignment)                                       | Gets or sets the Assignment.                                                                   |
| [`CrossSectionName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.CrossSectionName)                           | Gets CrossSectionName.                                                                         |
| [`ModelType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.ModelType)                                         | Gets or sets the ModelType.                                                                    |
| [`GeometryType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.GeometryType)                                   | Gets the GeometryType.                                                                         |
| [`SuppressedParameterized`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.SuppressedParameterized)             | Gets if the part suppressed property is parameterized.                                         |
| [`Transparency`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Transparency)                                   | Gets or sets the Transparency. Values range from 0.0 (fully invisible) to 1.0 (fully visible). |
| [`Color`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Color)                                                 | Gets or sets the Color, encoded as a BGR bitfield.                                             |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#id0)                                               | Gets the internal object. For advanced usage only.                                             |
| [`Elements`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Elements)                                           | Gets the Elements.                                                                             |
| [`Material`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Material)                                           | Gets or sets the Material.                                                                     |
| [`Nodes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Nodes)                                                 | Gets the Nodes.                                                                                |
| [`NumberOfTurns`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.NumberOfTurns)                                 | Gets or sets the NumberOfTurns.                                                                |
| [`MeshVersion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.MeshVersion)                                     | Gets the MeshVersion.                                                                          |
| [`LengthX`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.LengthX)                                             | Gets the LengthX.                                                                              |
| [`LengthY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.LengthY)                                             | Gets the LengthY.                                                                              |
| [`LengthZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.LengthZ)                                             | Gets the LengthZ.                                                                              |
| [`CrossSectionArea`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.CrossSectionArea)                           | Gets the CrossSectionArea.                                                                     |
| [`CrossSectionIYY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.CrossSectionIYY)                             | Gets the CrossSectionIYY.                                                                      |
| [`CrossSectionIZZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.CrossSectionIZZ)                             | Gets the CrossSectionIZZ.                                                                      |
| [`FiberAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.FiberAngle)                                       | Gets or sets the FiberAngle.                                                                   |
| [`FiberCrossSectionArea`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.FiberCrossSectionArea)                 | Gets or sets the FiberCrossSectionArea.                                                        |
| [`FiberSpacing`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.FiberSpacing)                                   | Gets or sets the FiberSpacing.                                                                 |
| [`FluidCrossArea`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.FluidCrossArea)                               | Gets or sets the FluidCrossArea.                                                               |
| [`Mass`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Mass)                                                   | Gets the Mass.                                                                                 |
| [`CentroidX`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.CentroidX)                                         | Gets the CentroidX.                                                                            |
| [`CentroidY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.CentroidY)                                         | Gets the CentroidY.                                                                            |
| [`CentroidZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.CentroidZ)                                         | Gets the CentroidZ.                                                                            |
| [`MomentOfInertiaIp1`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.MomentOfInertiaIp1)                       | Gets the MomentOfInertiaIp1.                                                                   |
| [`MomentOfInertiaIp2`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.MomentOfInertiaIp2)                       | Gets the MomentOfInertiaIp2.                                                                   |
| [`MomentOfInertiaIp3`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.MomentOfInertiaIp3)                       | Gets the MomentOfInertiaIp3.                                                                   |
| [`Average`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Average)                                             | Gets the Average.                                                                              |
| [`Maximum`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Maximum)                                             | Gets the Maximum.                                                                              |
| [`Minimum`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Minimum)                                             | Gets the Minimum.                                                                              |
| [`StandardDeviation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.StandardDeviation)                         | Gets the StandardDeviation.                                                                    |
| [`OffsetX`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.OffsetX)                                             | Gets or sets the OffsetX.                                                                      |
| [`OffsetY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.OffsetY)                                             | Gets or sets the OffsetY.                                                                      |
| [`PipeExternalDiameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.PipeExternalDiameter)                   | Gets the PipeExternalDiameter.                                                                 |
| [`PipeInternalDiameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.PipeInternalDiameter)                   | Gets the PipeInternalDiameter.                                                                 |
| [`PipeThickness`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.PipeThickness)                                 | Gets the PipeThickness.                                                                        |
| [`ReferenceTemperatureValue`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.ReferenceTemperatureValue)         | Gets or sets the ReferenceTemperatureValue.                                                    |
| [`SurfaceArea`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.SurfaceArea)                                     | Gets the SurfaceArea.                                                                          |
| [`Thickness`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Thickness)                                         | Gets or sets the Thickness.                                                                    |
| [`Volume`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Volume)                                               | Gets the Volume.                                                                               |
| [`Length`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Length)                                               | Gets the Length.                                                                               |
| [`OffsetMode`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.OffsetMode)                                       | Gets or sets the OffsetMode.                                                                   |
| [`BrickIntegrationScheme`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.BrickIntegrationScheme)               | Gets or sets the BrickIntegrationScheme.                                                       |
| [`FluidDiscretization`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.FluidDiscretization)                     | Gets or sets the FluidDiscretization.                                                          |
| [`LinkTrussBehavior`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.LinkTrussBehavior)                         | Gets or sets the LinkTrussBehavior.                                                            |
| [`MaterialPolarizationDirection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.MaterialPolarizationDirection) | Gets or sets the MaterialPolarizationDirection.                                                |
| [`MeshMetric`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.MeshMetric)                                       | Gets the MeshMetric.                                                                           |
| [`Behavior`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Behavior)                                           | Gets or sets the Behavior.                                                                     |
| [`OffsetType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.OffsetType)                                       | Gets or sets the OffsetType.                                                                   |
| [`FluidSolidPhase`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.FluidSolidPhase)                             | Gets or sets the FluidSolidPhase.                                                              |
| [`ReferenceFrame`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.ReferenceFrame)                               | Gets or sets the ReferenceFrame.                                                               |
| [`ReinforcingStressState`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.ReinforcingStressState)               | Gets or sets the ReinforcingStressState.                                                       |
| [`StiffnessOption`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.StiffnessOption)                             | Gets or sets the StiffnessOption.                                                              |
| [`ShellOffsetType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.ShellOffsetType)                             | Gets or sets the ShellOffsetType.                                                              |
| [`StiffnessBehavior`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.StiffnessBehavior)                         | Gets or sets the StiffnessBehavior.                                                            |
| [`Treatment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Treatment)                                         | Gets or sets the Treatment.                                                                    |
| [`Visible`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Visible)                                             | Gets or sets the Visible.                                                                      |
| [`HomogeneousMembrane`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.HomogeneousMembrane)                     | Gets or sets the HomogeneousMembrane.                                                          |
| [`IsWindingBody`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.IsWindingBody)                                 | Gets the IsWindingBody.                                                                        |
| [`NonlinearEffects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.NonlinearEffects)                           | Gets or sets the NonlinearEffects.                                                             |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Suppressed)                                       | Gets or sets the Suppressed.                                                                   |
| [`ThermalStrainEffects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.ThermalStrainEffects)                   | Gets or sets the ThermalStrainEffects.                                                         |
| [`ManualThicknessMode`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.ManualThicknessMode)                     | Gets the ManualThicknessMode.                                                                  |
| [`UseReferenceTemperatureByBody`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.UseReferenceTemperatureByBody) | Gets or sets the UseReferenceTemperatureByBody.                                                |
| [`UserNameChange`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.UserNameChange)                               | Gets the UserNameChange.                                                                       |
| [`BeamSection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.BeamSection)                                     | Gets the BeamSection.                                                                          |
| [`CoordinateSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.CoordinateSystem)                           | Gets or sets the CoordinateSystem.                                                             |
| [`CrossSectionSelection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.CrossSectionSelection)                 | Gets or sets the CrossSectionSelection.                                                        |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                   |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Children)                                           | Gets the list of children.                                                                     |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Comments)                                           | Gets the list of associated comments.                                                          |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Figures)                                             | Gets the list of associated figures.                                                           |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Images)                                               | Gets the list of associated images.                                                            |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.ReadOnly)                                           | Gets or sets the ReadOnly.                                                                     |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#id0)                                               | Gets the internal object. For advanced usage only.                                             |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.Properties)                                       | Gets the list of properties for this object.                                                   |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Body.md#Body.VisibleProperties)                         | Gets the list of properties that are visible for this object.                                  |

<a id="property-detail"></a>

## Property detail

<a id="Body.Hidden"></a>

### *property* Body.Hidden *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Hide or show the body.

<!-- !! processed by numpydoc !! -->

<a id="Body.ConfigurationId"></a>

### *property* Body.ConfigurationId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the related Result Mesh’s ConfigurationId.

<!-- !! processed by numpydoc !! -->

<a id="Body.ResultMeshId"></a>

### *property* Body.ResultMeshId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the related Result Mesh’s ObjectId.

<!-- !! processed by numpydoc !! -->

<a id="Body.ReferenceTemperature"></a>

### *property* Body.ReferenceTemperature *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperature.

<!-- !! processed by numpydoc !! -->

<a id="Body.ThicknessMode"></a>

### *property* Body.ThicknessMode *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ThicknessMode.

<!-- !! processed by numpydoc !! -->

<a id="Body.Dimension"></a>

### *property* Body.Dimension *: [Ansys.Mechanical.DataModel.Enums.ShellBodyDimension](../../../Mechanical/DataModel/Enums/ShellBodyDimension.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellBodyDimension) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Dimension.

<!-- !! processed by numpydoc !! -->

<a id="Body.Assignment"></a>

### *property* Body.Assignment *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Assignment.

<!-- !! processed by numpydoc !! -->

<a id="Body.CrossSectionName"></a>

### *property* Body.CrossSectionName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets CrossSectionName.

<!-- !! processed by numpydoc !! -->

<a id="Body.ModelType"></a>

### *property* Body.ModelType *: [Ansys.Mechanical.DataModel.Enums.PrototypeModelType](../../../Mechanical/DataModel/Enums/PrototypeModelType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PrototypeModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelType.
Note: ModelType is applicable to line bodies and surface bodies only.

<!-- !! processed by numpydoc !! -->

<a id="Body.GeometryType"></a>

### *property* Body.GeometryType *: [Ansys.Mechanical.DataModel.Enums.GeometryType](../../../Mechanical/DataModel/Enums/GeometryType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the GeometryType.

<!-- !! processed by numpydoc !! -->

<a id="Body.SuppressedParameterized"></a>

### *property* Body.SuppressedParameterized *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets if the part suppressed property is parameterized.

<!-- !! processed by numpydoc !! -->

<a id="Body.Transparency"></a>

### *property* Body.Transparency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Transparency. Values range from 0.0 (fully invisible) to 1.0 (fully visible).

<!-- !! processed by numpydoc !! -->

<a id="Body.Color"></a>

### *property* Body.Color *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Color, encoded as a BGR bitfield.

<!-- !! processed by numpydoc !! -->

<a id="Body.InternalObject"></a>

### *property* Body.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPrototypeAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Body.Elements"></a>

### *property* Body.Elements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elements.

<!-- !! processed by numpydoc !! -->

<a id="Body.Material"></a>

### *property* Body.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="Body.Nodes"></a>

### *property* Body.Nodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Nodes.

<!-- !! processed by numpydoc !! -->

<a id="Body.NumberOfTurns"></a>

### *property* Body.NumberOfTurns *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfTurns.

<!-- !! processed by numpydoc !! -->

<a id="Body.MeshVersion"></a>

### *property* Body.MeshVersion *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshVersion.

<!-- !! processed by numpydoc !! -->

<a id="Body.LengthX"></a>

### *property* Body.LengthX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthX.

<!-- !! processed by numpydoc !! -->

<a id="Body.LengthY"></a>

### *property* Body.LengthY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthY.

<!-- !! processed by numpydoc !! -->

<a id="Body.LengthZ"></a>

### *property* Body.LengthZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthZ.

<!-- !! processed by numpydoc !! -->

<a id="Body.CrossSectionArea"></a>

### *property* Body.CrossSectionArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSectionArea.

<!-- !! processed by numpydoc !! -->

<a id="Body.CrossSectionIYY"></a>

### *property* Body.CrossSectionIYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSectionIYY.

<!-- !! processed by numpydoc !! -->

<a id="Body.CrossSectionIZZ"></a>

### *property* Body.CrossSectionIZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSectionIZZ.

<!-- !! processed by numpydoc !! -->

<a id="Body.FiberAngle"></a>

### *property* Body.FiberAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FiberAngle.

<!-- !! processed by numpydoc !! -->

<a id="Body.FiberCrossSectionArea"></a>

### *property* Body.FiberCrossSectionArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FiberCrossSectionArea.

<!-- !! processed by numpydoc !! -->

<a id="Body.FiberSpacing"></a>

### *property* Body.FiberSpacing *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FiberSpacing.

<!-- !! processed by numpydoc !! -->

<a id="Body.FluidCrossArea"></a>

### *property* Body.FluidCrossArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidCrossArea.

<!-- !! processed by numpydoc !! -->

<a id="Body.Mass"></a>

### *property* Body.Mass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Mass.

<!-- !! processed by numpydoc !! -->

<a id="Body.CentroidX"></a>

### *property* Body.CentroidX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CentroidX.

<!-- !! processed by numpydoc !! -->

<a id="Body.CentroidY"></a>

### *property* Body.CentroidY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CentroidY.

<!-- !! processed by numpydoc !! -->

<a id="Body.CentroidZ"></a>

### *property* Body.CentroidZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CentroidZ.

<!-- !! processed by numpydoc !! -->

<a id="Body.MomentOfInertiaIp1"></a>

### *property* Body.MomentOfInertiaIp1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentOfInertiaIp1.

<!-- !! processed by numpydoc !! -->

<a id="Body.MomentOfInertiaIp2"></a>

### *property* Body.MomentOfInertiaIp2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentOfInertiaIp2.

<!-- !! processed by numpydoc !! -->

<a id="Body.MomentOfInertiaIp3"></a>

### *property* Body.MomentOfInertiaIp3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentOfInertiaIp3.

<!-- !! processed by numpydoc !! -->

<a id="Body.Average"></a>

### *property* Body.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="Body.Maximum"></a>

### *property* Body.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="Body.Minimum"></a>

### *property* Body.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="Body.StandardDeviation"></a>

### *property* Body.StandardDeviation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StandardDeviation.

<!-- !! processed by numpydoc !! -->

<a id="Body.OffsetX"></a>

### *property* Body.OffsetX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetX.

<!-- !! processed by numpydoc !! -->

<a id="Body.OffsetY"></a>

### *property* Body.OffsetY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetY.

<!-- !! processed by numpydoc !! -->

<a id="Body.PipeExternalDiameter"></a>

### *property* Body.PipeExternalDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PipeExternalDiameter.

<!-- !! processed by numpydoc !! -->

<a id="Body.PipeInternalDiameter"></a>

### *property* Body.PipeInternalDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PipeInternalDiameter.

<!-- !! processed by numpydoc !! -->

<a id="Body.PipeThickness"></a>

### *property* Body.PipeThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PipeThickness.

<!-- !! processed by numpydoc !! -->

<a id="Body.ReferenceTemperatureValue"></a>

### *property* Body.ReferenceTemperatureValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperatureValue.

<!-- !! processed by numpydoc !! -->

<a id="Body.SurfaceArea"></a>

### *property* Body.SurfaceArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SurfaceArea.

<!-- !! processed by numpydoc !! -->

<a id="Body.Thickness"></a>

### *property* Body.Thickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thickness.

<!-- !! processed by numpydoc !! -->

<a id="Body.Volume"></a>

### *property* Body.Volume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="Body.Length"></a>

### *property* Body.Length *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Length.

<!-- !! processed by numpydoc !! -->

<a id="Body.OffsetMode"></a>

### *property* Body.OffsetMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetMode.

<!-- !! processed by numpydoc !! -->

<a id="Body.BrickIntegrationScheme"></a>

### *property* Body.BrickIntegrationScheme *: [Ansys.Mechanical.DataModel.Enums.BrickIntegrationScheme](../../../Mechanical/DataModel/Enums/BrickIntegrationScheme.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BrickIntegrationScheme) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BrickIntegrationScheme.

<!-- !! processed by numpydoc !! -->

<a id="Body.FluidDiscretization"></a>

### *property* Body.FluidDiscretization *: [Ansys.Mechanical.DataModel.Enums.FluidDiscretizationType](../../../Mechanical/DataModel/Enums/FluidDiscretizationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FluidDiscretizationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidDiscretization.

<!-- !! processed by numpydoc !! -->

<a id="Body.LinkTrussBehavior"></a>

### *property* Body.LinkTrussBehavior *: [Ansys.Mechanical.DataModel.Enums.PrototypeLinkBehavior](../../../Mechanical/DataModel/Enums/PrototypeLinkBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PrototypeLinkBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LinkTrussBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Body.MaterialPolarizationDirection"></a>

### *property* Body.MaterialPolarizationDirection *: [Ansys.Mechanical.DataModel.Enums.MaterialPolarizationDirection](../../../Mechanical/DataModel/Enums/MaterialPolarizationDirection.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MaterialPolarizationDirection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialPolarizationDirection.

<!-- !! processed by numpydoc !! -->

<a id="Body.MeshMetric"></a>

### *property* Body.MeshMetric *: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshMetric.

<!-- !! processed by numpydoc !! -->

<a id="Body.Behavior"></a>

### *property* Body.Behavior *: [Ansys.Mechanical.DataModel.Enums.Model2DBehavior](../../../Mechanical/DataModel/Enums/Model2DBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.Model2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="Body.OffsetType"></a>

### *property* Body.OffsetType *: [Ansys.Mechanical.DataModel.Enums.BeamOffsetType](../../../Mechanical/DataModel/Enums/BeamOffsetType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BeamOffsetType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetType.

<!-- !! processed by numpydoc !! -->

<a id="Body.FluidSolidPhase"></a>

### *property* Body.FluidSolidPhase *: [Ansys.Mechanical.DataModel.Enums.PhaseType](../../../Mechanical/DataModel/Enums/PhaseType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PhaseType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidSolidPhase.

<!-- !! processed by numpydoc !! -->

<a id="Body.ReferenceFrame"></a>

### *property* Body.ReferenceFrame *: [Ansys.Mechanical.DataModel.Enums.ReferenceFrameType](../../../Mechanical/DataModel/Enums/ReferenceFrameType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ReferenceFrameType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceFrame.

<!-- !! processed by numpydoc !! -->

<a id="Body.ReinforcingStressState"></a>

### *property* Body.ReinforcingStressState *: [Ansys.Mechanical.DataModel.Enums.ReinforcingStressState](../../../Mechanical/DataModel/Enums/ReinforcingStressState.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ReinforcingStressState) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReinforcingStressState.

<!-- !! processed by numpydoc !! -->

<a id="Body.StiffnessOption"></a>

### *property* Body.StiffnessOption *: [Ansys.Mechanical.DataModel.Enums.ShellElementStiffnessOption](../../../Mechanical/DataModel/Enums/ShellElementStiffnessOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellElementStiffnessOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessOption.

<!-- !! processed by numpydoc !! -->

<a id="Body.ShellOffsetType"></a>

### *property* Body.ShellOffsetType *: [Ansys.Mechanical.DataModel.Enums.ShellOffsetType](../../../Mechanical/DataModel/Enums/ShellOffsetType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellOffsetType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellOffsetType.

<!-- !! processed by numpydoc !! -->

<a id="Body.StiffnessBehavior"></a>

### *property* Body.StiffnessBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Body.Treatment"></a>

### *property* Body.Treatment *: [Ansys.Mechanical.DataModel.Enums.BodyTreatment](../../../Mechanical/DataModel/Enums/BodyTreatment.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BodyTreatment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Treatment.

<!-- !! processed by numpydoc !! -->

<a id="Body.Visible"></a>

### *property* Body.Visible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

<a id="Body.HomogeneousMembrane"></a>

### *property* Body.HomogeneousMembrane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HomogeneousMembrane.

<!-- !! processed by numpydoc !! -->

<a id="Body.IsWindingBody"></a>

### *property* Body.IsWindingBody *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsWindingBody.

<!-- !! processed by numpydoc !! -->

<a id="Body.NonlinearEffects"></a>

### *property* Body.NonlinearEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="Body.Suppressed"></a>

### *property* Body.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Body.ThermalStrainEffects"></a>

### *property* Body.ThermalStrainEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

<a id="Body.ManualThicknessMode"></a>

### *property* Body.ManualThicknessMode *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ManualThicknessMode.

<!-- !! processed by numpydoc !! -->

<a id="Body.UseReferenceTemperatureByBody"></a>

### *property* Body.UseReferenceTemperatureByBody *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseReferenceTemperatureByBody.

<!-- !! processed by numpydoc !! -->

<a id="Body.UserNameChange"></a>

### *property* Body.UserNameChange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the UserNameChange.

<!-- !! processed by numpydoc !! -->

<a id="Body.BeamSection"></a>

### *property* Body.BeamSection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BeamSection.

<!-- !! processed by numpydoc !! -->

<a id="Body.CoordinateSystem"></a>

### *property* Body.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Body.CrossSectionSelection"></a>

### *property* Body.CrossSectionSelection *: [Ansys.ACT.Automation.Mechanical.CrossSection](CrossSection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CrossSection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrossSectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="Body.DataModelObjectCategory"></a>

### *property* Body.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Body.Children"></a>

### *property* Body.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Body.Comments"></a>

### *property* Body.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Body.Figures"></a>

### *property* Body.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Body.Images"></a>

### *property* Body.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Body.ReadOnly"></a>

### *property* Body.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Body.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Body.Properties"></a>

### *property* Body.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Body.VisibleProperties"></a>

### *property* Body.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Body.GetGeoBody"></a>

### Body.GetGeoBody()

Gets the Geo Body

<!-- !! processed by numpydoc !! -->

<a id="Body.ClearGeneratedData"></a>

### Body.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="Body.AddCommandSnippet"></a>

### Body.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Body.AddPythonCodeEventBased"></a>

### Body.AddPythonCodeEventBased()

Creates a new PythonCodeEventBased

<!-- !! processed by numpydoc !! -->

<a id="Body.GenerateMesh"></a>

### Body.GenerateMesh()

Run the GenerateMesh action.

<!-- !! processed by numpydoc !! -->

<a id="Body.PreviewInflation"></a>

### Body.PreviewInflation()

Run the PreviewInflation action.

<!-- !! processed by numpydoc !! -->

<a id="Body.PreviewSurfaceMesh"></a>

### Body.PreviewSurfaceMesh()

Run the PreviewSurfaceMesh action.

<!-- !! processed by numpydoc !! -->

<a id="Body.ShowBody"></a>

### Body.ShowBody()

Run the ShowBody action.

<!-- !! processed by numpydoc !! -->

<a id="Body.Update"></a>

### Body.Update()

Run the Update action.

<!-- !! processed by numpydoc !! -->

<a id="Body.GetChildren"></a>

### Body.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Body.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Body.AddComment"></a>

### Body.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Body.AddFigure"></a>

### Body.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Body.AddImage"></a>

### Body.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Body.Activate"></a>

### Body.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Body.CopyTo"></a>

### Body.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Body.Duplicate"></a>

### Body.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Body.GroupAllSimilarChildren"></a>

### Body.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Body.GroupSimilarObjects"></a>

### Body.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Body.PropertyByName"></a>

### Body.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Body.PropertyByAPIName"></a>

### Body.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Body.CreateParameter"></a>

### Body.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Body.GetParameter"></a>

### Body.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Body.RemoveParameter"></a>

### Body.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

