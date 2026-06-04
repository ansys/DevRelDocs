# `Body`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Body

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Body.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Body.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#Body.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#Body.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Body.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Body.AddImage)                               | Creates a new child Image.                                                        |
| [`AddPythonCodeEventBased`](#Body.AddPythonCodeEventBased) | Creates a new PythonCodeEventBased                                                |
| [`ClearGeneratedData`](#Body.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#Body.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Body.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#Body.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#Body.GenerateMesh)                       | Run the GenerateMesh action.                                                      |
| [`GetChildren`](#Body.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetGeoBody`](#Body.GetGeoBody)                           | Gets the Geo Body                                                                 |
| [`GetParameter`](#Body.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Body.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Body.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PreviewInflation`](#Body.PreviewInflation)               | Run the PreviewInflation action.                                                  |
| [`PreviewSurfaceMesh`](#Body.PreviewSurfaceMesh)           | Run the PreviewSurfaceMesh action.                                                |
| [`PropertyByAPIName`](#Body.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Body.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Body.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`ShowBody`](#Body.ShowBody)                               | Run the ShowBody action.                                                          |
| [`Update`](#Body.Update)                                   | Run the Update action.                                                            |

### Properties

| Name | Description |
|------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Assignment`](#Body.Assignment)                                       | Gets or sets the Assignment.                                                                   |
| [`Average`](#Body.Average)                                             | Gets the Average.                                                                              |
| [`BeamSection`](#Body.BeamSection)                                     | Gets the BeamSection.                                                                          |
| [`Behavior`](#Body.Behavior)                                           | Gets or sets the Behavior.                                                                     |
| [`BrickIntegrationScheme`](#Body.BrickIntegrationScheme)               | Gets or sets the BrickIntegrationScheme.                                                       |
| [`CentroidX`](#Body.CentroidX)                                         | Gets the CentroidX.                                                                            |
| [`CentroidY`](#Body.CentroidY)                                         | Gets the CentroidY.                                                                            |
| [`CentroidZ`](#Body.CentroidZ)                                         | Gets the CentroidZ.                                                                            |
| [`Children`](#Body.Children)                                           | Gets the list of children.                                                                     |
| [`Color`](#Body.Color)                                                 | Gets or sets the Color, encoded as a BGR bitfield.                                             |
| [`Comments`](#Body.Comments)                                           | Gets the list of associated comments.                                                          |
| [`ConfigurationId`](#Body.ConfigurationId)                             | Gets the related Result Mesh’s ConfigurationId.                                                |
| [`CoordinateSystem`](#Body.CoordinateSystem)                           | Gets or sets the CoordinateSystem.                                                             |
| [`CrossSectionArea`](#Body.CrossSectionArea)                           | Gets the CrossSectionArea.                                                                     |
| [`CrossSectionIYY`](#Body.CrossSectionIYY)                             | Gets the CrossSectionIYY.                                                                      |
| [`CrossSectionIZZ`](#Body.CrossSectionIZZ)                             | Gets the CrossSectionIZZ.                                                                      |
| [`CrossSectionName`](#Body.CrossSectionName)                           | Gets CrossSectionName.                                                                         |
| [`CrossSectionSelection`](#Body.CrossSectionSelection)                 | Gets or sets the CrossSectionSelection.                                                        |
| [`DataModelObjectCategory`](#Body.DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                   |
| [`Dimension`](#Body.Dimension)                                         | Gets or sets the Dimension.                                                                    |
| [`Elements`](#Body.Elements)                                           | Gets the Elements.                                                                             |
| [`FiberAngle`](#Body.FiberAngle)                                       | Gets or sets the FiberAngle.                                                                   |
| [`FiberCrossSectionArea`](#Body.FiberCrossSectionArea)                 | Gets or sets the FiberCrossSectionArea.                                                        |
| [`FiberSpacing`](#Body.FiberSpacing)                                   | Gets or sets the FiberSpacing.                                                                 |
| [`Figures`](#Body.Figures)                                             | Gets the list of associated figures.                                                           |
| [`FluidCrossArea`](#Body.FluidCrossArea)                               | Gets or sets the FluidCrossArea.                                                               |
| [`FluidDiscretization`](#Body.FluidDiscretization)                     | Gets or sets the FluidDiscretization.                                                          |
| [`FluidSolidPhase`](#Body.FluidSolidPhase)                             | Gets or sets the FluidSolidPhase.                                                              |
| [`GeometryType`](#Body.GeometryType)                                   | Gets the GeometryType.                                                                         |
| [`Hidden`](#Body.Hidden)                                               | Hide or show the body.                                                                         |
| [`HomogeneousMembrane`](#Body.HomogeneousMembrane)                     | Gets or sets the HomogeneousMembrane.                                                          |
| [`Images`](#Body.Images)                                               | Gets the list of associated images.                                                            |
| [`InternalObject`](#Body.InternalObject)                               | Gets the internal object. For advanced usage only.                                             |
| [`IsWindingBody`](#Body.IsWindingBody)                                 | Gets the IsWindingBody.                                                                        |
| [`Length`](#Body.Length)                                               | Gets the Length.                                                                               |
| [`LengthX`](#Body.LengthX)                                             | Gets the LengthX.                                                                              |
| [`LengthY`](#Body.LengthY)                                             | Gets the LengthY.                                                                              |
| [`LengthZ`](#Body.LengthZ)                                             | Gets the LengthZ.                                                                              |
| [`LinkTrussBehavior`](#Body.LinkTrussBehavior)                         | Gets or sets the LinkTrussBehavior.                                                            |
| [`ManualThicknessMode`](#Body.ManualThicknessMode)                     | Gets the ManualThicknessMode.                                                                  |
| [`Mass`](#Body.Mass)                                                   | Gets the Mass.                                                                                 |
| [`Material`](#Body.Material)                                           | Gets or sets the Material.                                                                     |
| [`MaterialPolarizationDirection`](#Body.MaterialPolarizationDirection) | Gets or sets the MaterialPolarizationDirection.                                                |
| [`Maximum`](#Body.Maximum)                                             | Gets the Maximum.                                                                              |
| [`MeshMetric`](#Body.MeshMetric)                                       | Gets the MeshMetric.                                                                           |
| [`MeshVersion`](#Body.MeshVersion)                                     | Gets the MeshVersion.                                                                          |
| [`Minimum`](#Body.Minimum)                                             | Gets the Minimum.                                                                              |
| [`ModelType`](#Body.ModelType)                                         | Gets or sets the ModelType.                                                                    |
| [`MomentOfInertiaIp1`](#Body.MomentOfInertiaIp1)                       | Gets the MomentOfInertiaIp1.                                                                   |
| [`MomentOfInertiaIp2`](#Body.MomentOfInertiaIp2)                       | Gets the MomentOfInertiaIp2.                                                                   |
| [`MomentOfInertiaIp3`](#Body.MomentOfInertiaIp3)                       | Gets the MomentOfInertiaIp3.                                                                   |
| [`Nodes`](#Body.Nodes)                                                 | Gets the Nodes.                                                                                |
| [`NonlinearEffects`](#Body.NonlinearEffects)                           | Gets or sets the NonlinearEffects.                                                             |
| [`NumberOfTurns`](#Body.NumberOfTurns)                                 | Gets or sets the NumberOfTurns.                                                                |
| [`OffsetMode`](#Body.OffsetMode)                                       | Gets or sets the OffsetMode.                                                                   |
| [`OffsetType`](#Body.OffsetType)                                       | Gets or sets the OffsetType.                                                                   |
| [`OffsetX`](#Body.OffsetX)                                             | Gets or sets the OffsetX.                                                                      |
| [`OffsetY`](#Body.OffsetY)                                             | Gets or sets the OffsetY.                                                                      |
| [`PipeExternalDiameter`](#Body.PipeExternalDiameter)                   | Gets the PipeExternalDiameter.                                                                 |
| [`PipeInternalDiameter`](#Body.PipeInternalDiameter)                   | Gets the PipeInternalDiameter.                                                                 |
| [`PipeThickness`](#Body.PipeThickness)                                 | Gets the PipeThickness.                                                                        |
| [`Properties`](#Body.Properties)                                       | Gets the list of properties for this object.                                                   |
| [`ReadOnly`](#Body.ReadOnly)                                           | Gets or sets the ReadOnly.                                                                     |
| [`ReferenceFrame`](#Body.ReferenceFrame)                               | Gets or sets the ReferenceFrame.                                                               |
| [`ReferenceTemperature`](#Body.ReferenceTemperature)                   | Gets or sets the ReferenceTemperature.                                                         |
| [`ReferenceTemperatureValue`](#Body.ReferenceTemperatureValue)         | Gets or sets the ReferenceTemperatureValue.                                                    |
| [`ReinforcingStressState`](#Body.ReinforcingStressState)               | Gets or sets the ReinforcingStressState.                                                       |
| [`ResultMeshId`](#Body.ResultMeshId)                                   | Gets the related Result Mesh’s ObjectId.                                                       |
| [`ShellOffsetType`](#Body.ShellOffsetType)                             | Gets or sets the ShellOffsetType.                                                              |
| [`StandardDeviation`](#Body.StandardDeviation)                         | Gets the StandardDeviation.                                                                    |
| [`StiffnessBehavior`](#Body.StiffnessBehavior)                         | Gets or sets the StiffnessBehavior.                                                            |
| [`StiffnessOption`](#Body.StiffnessOption)                             | Gets or sets the StiffnessOption.                                                              |
| [`Suppressed`](#Body.Suppressed)                                       | Gets or sets the Suppressed.                                                                   |
| [`SuppressedParameterized`](#Body.SuppressedParameterized)             | Gets if the part suppressed property is parameterized.                                         |
| [`SurfaceArea`](#Body.SurfaceArea)                                     | Gets the SurfaceArea.                                                                          |
| [`ThermalStrainEffects`](#Body.ThermalStrainEffects)                   | Gets or sets the ThermalStrainEffects.                                                         |
| [`Thickness`](#Body.Thickness)                                         | Gets or sets the Thickness.                                                                    |
| [`ThicknessMode`](#Body.ThicknessMode)                                 | Gets the ThicknessMode.                                                                        |
| [`Transparency`](#Body.Transparency)                                   | Gets or sets the Transparency. Values range from 0.0 (fully invisible) to 1.0 (fully visible). |
| [`Treatment`](#Body.Treatment)                                         | Gets or sets the Treatment.                                                                    |
| [`UseReferenceTemperatureByBody`](#Body.UseReferenceTemperatureByBody) | Gets or sets the UseReferenceTemperatureByBody.                                                |
| [`UserNameChange`](#Body.UserNameChange)                               | Gets the UserNameChange.                                                                       |
| [`Visible`](#Body.Visible)                                             | Gets or sets the Visible.                                                                      |
| [`VisibleProperties`](#Body.VisibleProperties)                         | Gets the list of properties that are visible for this object.                                  |
| [`Volume`](#Body.Volume)                                               | Gets the Volume.                                                                               |

<a id="property-detail"></a>

## Property detail

<a id="Body.Assignment"></a>

### *property* Body.Assignment *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Assignment.

<!-- !! processed by numpydoc !! -->

<a id="Body.Average"></a>

### *property* Body.Average *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="Body.BeamSection"></a>

### *property* Body.BeamSection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BeamSection.

<!-- !! processed by numpydoc !! -->

<a id="Body.Behavior"></a>

### *property* Body.Behavior *: [Ansys.Mechanical.DataModel.Enums.Model2DBehavior](../../../Mechanical/DataModel/Enums/Model2DBehavior.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.Model2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="Body.BrickIntegrationScheme"></a>

### *property* Body.BrickIntegrationScheme *: [Ansys.Mechanical.DataModel.Enums.BrickIntegrationScheme](../../../Mechanical/DataModel/Enums/BrickIntegrationScheme.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.BrickIntegrationScheme) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BrickIntegrationScheme.

<!-- !! processed by numpydoc !! -->

<a id="Body.CentroidX"></a>

### *property* Body.CentroidX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CentroidX.

<!-- !! processed by numpydoc !! -->

<a id="Body.CentroidY"></a>

### *property* Body.CentroidY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CentroidY.

<!-- !! processed by numpydoc !! -->

<a id="Body.CentroidZ"></a>

### *property* Body.CentroidZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CentroidZ.

<!-- !! processed by numpydoc !! -->

<a id="Body.Children"></a>

### *property* Body.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Body.Color"></a>

### *property* Body.Color *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Color, encoded as a BGR bitfield.

<!-- !! processed by numpydoc !! -->

<a id="Body.Comments"></a>

### *property* Body.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Body.ConfigurationId"></a>

### *property* Body.ConfigurationId *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the related Result Mesh’s ConfigurationId.

<!-- !! processed by numpydoc !! -->

<a id="Body.CoordinateSystem"></a>

### *property* Body.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Body.CrossSectionArea"></a>

### *property* Body.CrossSectionArea *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSectionArea.

<!-- !! processed by numpydoc !! -->

<a id="Body.CrossSectionIYY"></a>

### *property* Body.CrossSectionIYY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSectionIYY.

<!-- !! processed by numpydoc !! -->

<a id="Body.CrossSectionIZZ"></a>

### *property* Body.CrossSectionIZZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSectionIZZ.

<!-- !! processed by numpydoc !! -->

<a id="Body.CrossSectionName"></a>

### *property* Body.CrossSectionName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets CrossSectionName.

<!-- !! processed by numpydoc !! -->

<a id="Body.CrossSectionSelection"></a>

### *property* Body.CrossSectionSelection *: [Ansys.ACT.Automation.Mechanical.CrossSection](CrossSection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CrossSection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrossSectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="Body.DataModelObjectCategory"></a>

### *property* Body.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Body.Dimension"></a>

### *property* Body.Dimension *: [Ansys.Mechanical.DataModel.Enums.ShellBodyDimension](../../../Mechanical/DataModel/Enums/ShellBodyDimension.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ShellBodyDimension) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Dimension.

<!-- !! processed by numpydoc !! -->

<a id="Body.Elements"></a>

### *property* Body.Elements *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elements.

<!-- !! processed by numpydoc !! -->

<a id="Body.FiberAngle"></a>

### *property* Body.FiberAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FiberAngle.

<!-- !! processed by numpydoc !! -->

<a id="Body.FiberCrossSectionArea"></a>

### *property* Body.FiberCrossSectionArea *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FiberCrossSectionArea.

<!-- !! processed by numpydoc !! -->

<a id="Body.FiberSpacing"></a>

### *property* Body.FiberSpacing *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FiberSpacing.

<!-- !! processed by numpydoc !! -->

<a id="Body.Figures"></a>

### *property* Body.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Body.FluidCrossArea"></a>

### *property* Body.FluidCrossArea *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidCrossArea.

<!-- !! processed by numpydoc !! -->

<a id="Body.FluidDiscretization"></a>

### *property* Body.FluidDiscretization *: [Ansys.Mechanical.DataModel.Enums.FluidDiscretizationType](../../../Mechanical/DataModel/Enums/FluidDiscretizationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FluidDiscretizationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidDiscretization.

<!-- !! processed by numpydoc !! -->

<a id="Body.FluidSolidPhase"></a>

### *property* Body.FluidSolidPhase *: [Ansys.Mechanical.DataModel.Enums.PhaseType](../../../Mechanical/DataModel/Enums/PhaseType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.PhaseType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidSolidPhase.

<!-- !! processed by numpydoc !! -->

<a id="Body.GeometryType"></a>

### *property* Body.GeometryType *: [Ansys.Mechanical.DataModel.Enums.GeometryType](../../../Mechanical/DataModel/Enums/GeometryType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the GeometryType.

<!-- !! processed by numpydoc !! -->

<a id="Body.Hidden"></a>

### *property* Body.Hidden *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Hide or show the body.

<!-- !! processed by numpydoc !! -->

<a id="Body.HomogeneousMembrane"></a>

### *property* Body.HomogeneousMembrane *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HomogeneousMembrane.

<!-- !! processed by numpydoc !! -->

<a id="Body.Images"></a>

### *property* Body.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Body.InternalObject"></a>

### *property* Body.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPrototypeAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Body.IsWindingBody"></a>

### *property* Body.IsWindingBody *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsWindingBody.

<!-- !! processed by numpydoc !! -->

<a id="Body.Length"></a>

### *property* Body.Length *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Length.

<!-- !! processed by numpydoc !! -->

<a id="Body.LengthX"></a>

### *property* Body.LengthX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthX.

<!-- !! processed by numpydoc !! -->

<a id="Body.LengthY"></a>

### *property* Body.LengthY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthY.

<!-- !! processed by numpydoc !! -->

<a id="Body.LengthZ"></a>

### *property* Body.LengthZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthZ.

<!-- !! processed by numpydoc !! -->

<a id="Body.LinkTrussBehavior"></a>

### *property* Body.LinkTrussBehavior *: [Ansys.Mechanical.DataModel.Enums.PrototypeLinkBehavior](../../../Mechanical/DataModel/Enums/PrototypeLinkBehavior.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.PrototypeLinkBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LinkTrussBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Body.ManualThicknessMode"></a>

### *property* Body.ManualThicknessMode *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ManualThicknessMode.

<!-- !! processed by numpydoc !! -->

<a id="Body.Mass"></a>

### *property* Body.Mass *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Mass.

<!-- !! processed by numpydoc !! -->

<a id="Body.Material"></a>

### *property* Body.Material *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="Body.MaterialPolarizationDirection"></a>

### *property* Body.MaterialPolarizationDirection *: [Ansys.Mechanical.DataModel.Enums.MaterialPolarizationDirection](../../../Mechanical/DataModel/Enums/MaterialPolarizationDirection.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MaterialPolarizationDirection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialPolarizationDirection.

<!-- !! processed by numpydoc !! -->

<a id="Body.Maximum"></a>

### *property* Body.Maximum *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="Body.MeshMetric"></a>

### *property* Body.MeshMetric *: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshMetric.

<!-- !! processed by numpydoc !! -->

<a id="Body.MeshVersion"></a>

### *property* Body.MeshVersion *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshVersion.

<!-- !! processed by numpydoc !! -->

<a id="Body.Minimum"></a>

### *property* Body.Minimum *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="Body.ModelType"></a>

### *property* Body.ModelType *: [Ansys.Mechanical.DataModel.Enums.PrototypeModelType](../../../Mechanical/DataModel/Enums/PrototypeModelType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.PrototypeModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelType.
Note: ModelType is applicable to line bodies and surface bodies only.

<!-- !! processed by numpydoc !! -->

<a id="Body.MomentOfInertiaIp1"></a>

### *property* Body.MomentOfInertiaIp1 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentOfInertiaIp1.

<!-- !! processed by numpydoc !! -->

<a id="Body.MomentOfInertiaIp2"></a>

### *property* Body.MomentOfInertiaIp2 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentOfInertiaIp2.

<!-- !! processed by numpydoc !! -->

<a id="Body.MomentOfInertiaIp3"></a>

### *property* Body.MomentOfInertiaIp3 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentOfInertiaIp3.

<!-- !! processed by numpydoc !! -->

<a id="Body.Nodes"></a>

### *property* Body.Nodes *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Nodes.

<!-- !! processed by numpydoc !! -->

<a id="Body.NonlinearEffects"></a>

### *property* Body.NonlinearEffects *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="Body.NumberOfTurns"></a>

### *property* Body.NumberOfTurns *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfTurns.

<!-- !! processed by numpydoc !! -->

<a id="Body.OffsetMode"></a>

### *property* Body.OffsetMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetMode.

<!-- !! processed by numpydoc !! -->

<a id="Body.OffsetType"></a>

### *property* Body.OffsetType *: [Ansys.Mechanical.DataModel.Enums.BeamOffsetType](../../../Mechanical/DataModel/Enums/BeamOffsetType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.BeamOffsetType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetType.

<!-- !! processed by numpydoc !! -->

<a id="Body.OffsetX"></a>

### *property* Body.OffsetX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetX.

<!-- !! processed by numpydoc !! -->

<a id="Body.OffsetY"></a>

### *property* Body.OffsetY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetY.

<!-- !! processed by numpydoc !! -->

<a id="Body.PipeExternalDiameter"></a>

### *property* Body.PipeExternalDiameter *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PipeExternalDiameter.

<!-- !! processed by numpydoc !! -->

<a id="Body.PipeInternalDiameter"></a>

### *property* Body.PipeInternalDiameter *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PipeInternalDiameter.

<!-- !! processed by numpydoc !! -->

<a id="Body.PipeThickness"></a>

### *property* Body.PipeThickness *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PipeThickness.

<!-- !! processed by numpydoc !! -->

<a id="Body.Properties"></a>

### *property* Body.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Body.ReadOnly"></a>

### *property* Body.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Body.ReferenceFrame"></a>

### *property* Body.ReferenceFrame *: [Ansys.Mechanical.DataModel.Enums.ReferenceFrameType](../../../Mechanical/DataModel/Enums/ReferenceFrameType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ReferenceFrameType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceFrame.

<!-- !! processed by numpydoc !! -->

<a id="Body.ReferenceTemperature"></a>

### *property* Body.ReferenceTemperature *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperature.

<!-- !! processed by numpydoc !! -->

<a id="Body.ReferenceTemperatureValue"></a>

### *property* Body.ReferenceTemperatureValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperatureValue.

<!-- !! processed by numpydoc !! -->

<a id="Body.ReinforcingStressState"></a>

### *property* Body.ReinforcingStressState *: [Ansys.Mechanical.DataModel.Enums.ReinforcingStressState](../../../Mechanical/DataModel/Enums/ReinforcingStressState.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ReinforcingStressState) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReinforcingStressState.

<!-- !! processed by numpydoc !! -->

<a id="Body.ResultMeshId"></a>

### *property* Body.ResultMeshId *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the related Result Mesh’s ObjectId.

<!-- !! processed by numpydoc !! -->

<a id="Body.ShellOffsetType"></a>

### *property* Body.ShellOffsetType *: [Ansys.Mechanical.DataModel.Enums.ShellOffsetType](../../../Mechanical/DataModel/Enums/ShellOffsetType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ShellOffsetType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellOffsetType.

<!-- !! processed by numpydoc !! -->

<a id="Body.StandardDeviation"></a>

### *property* Body.StandardDeviation *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StandardDeviation.

<!-- !! processed by numpydoc !! -->

<a id="Body.StiffnessBehavior"></a>

### *property* Body.StiffnessBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Body.StiffnessOption"></a>

### *property* Body.StiffnessOption *: [Ansys.Mechanical.DataModel.Enums.ShellElementStiffnessOption](../../../Mechanical/DataModel/Enums/ShellElementStiffnessOption.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ShellElementStiffnessOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessOption.

<!-- !! processed by numpydoc !! -->

<a id="Body.Suppressed"></a>

### *property* Body.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Body.SuppressedParameterized"></a>

### *property* Body.SuppressedParameterized *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets if the part suppressed property is parameterized.

<!-- !! processed by numpydoc !! -->

<a id="Body.SurfaceArea"></a>

### *property* Body.SurfaceArea *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SurfaceArea.

<!-- !! processed by numpydoc !! -->

<a id="Body.ThermalStrainEffects"></a>

### *property* Body.ThermalStrainEffects *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

<a id="Body.Thickness"></a>

### *property* Body.Thickness *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thickness.

<!-- !! processed by numpydoc !! -->

<a id="Body.ThicknessMode"></a>

### *property* Body.ThicknessMode *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ThicknessMode.

<!-- !! processed by numpydoc !! -->

<a id="Body.Transparency"></a>

### *property* Body.Transparency *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Transparency. Values range from 0.0 (fully invisible) to 1.0 (fully visible).

<!-- !! processed by numpydoc !! -->

<a id="Body.Treatment"></a>

### *property* Body.Treatment *: [Ansys.Mechanical.DataModel.Enums.BodyTreatment](../../../Mechanical/DataModel/Enums/BodyTreatment.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.BodyTreatment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Treatment.

<!-- !! processed by numpydoc !! -->

<a id="Body.UseReferenceTemperatureByBody"></a>

### *property* Body.UseReferenceTemperatureByBody *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseReferenceTemperatureByBody.

<!-- !! processed by numpydoc !! -->

<a id="Body.UserNameChange"></a>

### *property* Body.UserNameChange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the UserNameChange.

<!-- !! processed by numpydoc !! -->

<a id="Body.Visible"></a>

### *property* Body.Visible *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

<a id="Body.VisibleProperties"></a>

### *property* Body.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Body.Volume"></a>

### *property* Body.Volume *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Body.Activate"></a>

### Body.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Body.AddCommandSnippet"></a>

### Body.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Body.AddComment"></a>

### Body.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Body.AddFigure"></a>

### Body.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Body.AddImage"></a>

### Body.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Body.AddPythonCodeEventBased"></a>

### Body.AddPythonCodeEventBased() → [Ansys.ACT.Automation.Mechanical.PythonCodeEventBased](PythonCodeEventBased.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.PythonCodeEventBased)

Creates a new PythonCodeEventBased

<!-- !! processed by numpydoc !! -->

<a id="Body.ClearGeneratedData"></a>

### Body.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="Body.CopyTo"></a>

### Body.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Body.CreateParameter"></a>

### Body.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Body.Duplicate"></a>

### Body.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Body.GenerateMesh"></a>

### Body.GenerateMesh() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GenerateMesh action.

<!-- !! processed by numpydoc !! -->

<a id="Body.GetChildren"></a>

### Body.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Body.GetGeoBody"></a>

### Body.GetGeoBody() → Ansys.ACT.Interfaces.Geometry.IGeoBody

Gets the Geo Body

<!-- !! processed by numpydoc !! -->

<a id="Body.GetParameter"></a>

### Body.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Body.GroupAllSimilarChildren"></a>

### Body.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Body.GroupSimilarObjects"></a>

### Body.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Body.PreviewInflation"></a>

### Body.PreviewInflation() → [None](https://docs.python.org/3/library/constants.html#None)

Run the PreviewInflation action.

<!-- !! processed by numpydoc !! -->

<a id="Body.PreviewSurfaceMesh"></a>

### Body.PreviewSurfaceMesh() → [None](https://docs.python.org/3/library/constants.html#None)

Run the PreviewSurfaceMesh action.

<!-- !! processed by numpydoc !! -->

<a id="Body.PropertyByAPIName"></a>

### Body.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Body.PropertyByName"></a>

### Body.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Body.RemoveParameter"></a>

### Body.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Body.ShowBody"></a>

### Body.ShowBody() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ShowBody action.

<!-- !! processed by numpydoc !! -->

<a id="Body.Update"></a>

### Body.Update() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Update action.

<!-- !! processed by numpydoc !! -->

