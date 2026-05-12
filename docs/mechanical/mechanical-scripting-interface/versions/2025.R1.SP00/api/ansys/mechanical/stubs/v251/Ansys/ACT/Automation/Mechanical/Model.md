# `Model`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Model"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Model

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Model.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#Model.Activate)                                                                 | Activate the current object.                                                                                                 |
| [`AddAMProcess`](#Model.AddAMProcess)                                                         | Creates a new AMProcess                                                                                                      |
| [`AddChart`](#Model.AddChart)                                                                 | Creates a new child Chart.                                                                                                   |
| [`AddCoSimulationPin`](#Model.AddCoSimulationPin)                                             | Creates a new CoSimulationPin                                                                                                |
| [`AddComment`](#Model.AddComment)                                                             | Creates a new child Comment.                                                                                                 |
| [`AddCompositeFailureCriteria`](#Model.AddCompositeFailureCriteria)                           | Creates a new Composite Failure Criteria object.                                                                             |
| [`AddCondensedGeometry`](#Model.AddCondensedGeometry)                                         | Creates a new CondensedGeometry                                                                                              |
| [`AddConnections`](#Model.AddConnections)                                                     | Creates a new Connections                                                                                                    |
| [`AddConstructionGeometry`](#Model.AddConstructionGeometry)                                   | Creates a new ConstructionGeometry                                                                                           |
| [`AddCoupledFieldHarmonic`](#Model.AddCoupledFieldHarmonic)                                   | Run the AddCoupledFieldHarmonic action.                                                                                      |
| [`AddCoupledFieldModal`](#Model.AddCoupledFieldModal)                                         | Run the AddCoupledFieldModal action.                                                                                         |
| [`AddCoupledFieldStatic`](#Model.AddCoupledFieldStatic)                                       | Run the AddCoupledFieldStatic action.                                                                                        |
| [`AddCoupledFieldTransient`](#Model.AddCoupledFieldTransient)                                 | Run the AddCoupledFieldTransient action.                                                                                     |
| [`AddCrossSections`](#Model.AddCrossSections)                                                 | Creates new CrossSections group.                                                                                             |
| [`AddDesignAssessmentAnalysis`](#Model.AddDesignAssessmentAnalysis)                           | Run the AddDesignAssessmentAnalysis action.                                                                                  |
| [`AddDesignLifeAnalysis`](#Model.AddDesignLifeAnalysis)                                       | Run the AddDesignLifeAnalysis action.                                                                                        |
| [`AddEigenvalueBucklingAnalysis`](#Model.AddEigenvalueBucklingAnalysis)                       | Run the AddEigenvalueBucklingAnalysis action.                                                                                |
| [`AddElectricAnalysis`](#Model.AddElectricAnalysis)                                           | Run the AddElectricAnalysis action.                                                                                          |
| [`AddExplicitDynamicsAnalysis`](#Model.AddExplicitDynamicsAnalysis)                           | Run the AddExplicitDynamicsAnalysis action.                                                                                  |
| [`AddFatigueCombination`](#Model.AddFatigueCombination)                                       | Creates a new FatigueCombination                                                                                             |
| [`AddFeatureDetection`](#Model.AddFeatureDetection)                                           | Creates a new FeatureDetection                                                                                               |
| [`AddFigure`](#Model.AddFigure)                                                               | Creates a new child Figure.                                                                                                  |
| [`AddForcedResponseAnalysis`](#Model.AddForcedResponseAnalysis)                               | Run the AddForcedResponseAnalysis action.                                                                                    |
| [`AddFracture`](#Model.AddFracture)                                                           | Creates a new Fracture                                                                                                       |
| [`AddGeometryImportGroup`](#Model.AddGeometryImportGroup)                                     | Get the                                                                                                                      |
| [`AddHarmonicAcousticAnalysis`](#Model.AddHarmonicAcousticAnalysis)                           | Run the AddHarmonicAcousticAnalysis action.                                                                                  |
| [`AddHarmonicResponseAnalysis`](#Model.AddHarmonicResponseAnalysis)                           | Run the AddHarmonicResponseAnalysis action.                                                                                  |
| [`AddImage`](#Model.AddImage)                                                                 | Creates a new child Image.                                                                                                   |
| [`AddImagePlane`](#Model.AddImagePlane)                                                       | Creates an ImagePlane and adds it as a child of this object.                                                                 |
| [`AddLSDynaAnalysis`](#Model.AddLSDynaAnalysis)                                               | Run the AddLSDynaAnalysis action.                                                                                            |
| [`AddLSDynaRestartAnalysis`](#Model.AddLSDynaRestartAnalysis)                                 | Run the AddLSDynaRestartAnalysis action.                                                                                     |
| [`AddMagnetostaticAnalysis`](#Model.AddMagnetostaticAnalysis)                                 | Run the AddMagnetostaticAnalysis action.                                                                                     |
| [`AddMeasures`](#Model.AddMeasures)                                                           | Creates a new Measures                                                                                                       |
| [`AddMeshEdit`](#Model.AddMeshEdit)                                                           | Creates a new MeshEdit                                                                                                       |
| [`AddMeshNumbering`](#Model.AddMeshNumbering)                                                 | Creates a new MeshNumbering                                                                                                  |
| [`AddModalAcousticAnalysis`](#Model.AddModalAcousticAnalysis)                                 | Run the AddModalAcousticAnalysis action.                                                                                     |
| [`AddModalAnalysis`](#Model.AddModalAnalysis)                                                 | Run the AddModalAnalysis action.                                                                                             |
| [`AddMotionAnalysis`](#Model.AddMotionAnalysis)                                               | Run the AddMotionAnalysis action.                                                                                            |
| [`AddNamedSelection`](#Model.AddNamedSelection)                                               | Creates a new child NamedSelection.                                                                                          |
| [`AddNamedSelectionFromSelectedConnections`](#Model.AddNamedSelectionFromSelectedConnections) | Creates a new Named Selections (Components) for the selected connections.                                                    |
| [`AddPartTransform`](#Model.AddPartTransform)                                                 | Creates a new child PartTransform.                                                                                           |
| [`AddPythonCodeEventBased`](#Model.AddPythonCodeEventBased)                                   | Creates a new PythonCodeEventBased                                                                                           |
| [`AddPythonResult`](#Model.AddPythonResult)                                                   | Creates a new PythonResult                                                                                                   |
| [`AddRandomVibrationAnalysis`](#Model.AddRandomVibrationAnalysis)                             | Run the AddRandomVibrationAnalysis action.                                                                                   |
| [`AddRemotePoint`](#Model.AddRemotePoint)                                                     | Creates a new child RemotePoint.                                                                                             |
| [`AddResponseSpectrumAnalysis`](#Model.AddResponseSpectrumAnalysis)                           | Run the AddResponseSpectrumAnalysis action.                                                                                  |
| [`AddRigidDynamicsAnalysis`](#Model.AddRigidDynamicsAnalysis)                                 | Run the AddRigidDynamicsAnalysis action.                                                                                     |
| [`AddSolutionCombination`](#Model.AddSolutionCombination)                                     | Creates a new SolutionCombination                                                                                            |
| [`AddStaticAcousticAnalysis`](#Model.AddStaticAcousticAnalysis)                               | Run the AddStaticAcousticAnalysis action.                                                                                    |
| [`AddStaticStructuralAnalysis`](#Model.AddStaticStructuralAnalysis)                           | Run the AddStaticStructuralAnalysis action.                                                                                  |
| [`AddSteadyStateThermalAnalysis`](#Model.AddSteadyStateThermalAnalysis)                       | Run the AddSteadyStateThermalAnalysis action.                                                                                |
| [`AddSubstructureGenerationAnalysis`](#Model.AddSubstructureGenerationAnalysis)               | Run the AddSubstructureGenerationAnalysis action.                                                                            |
| [`AddSymmetry`](#Model.AddSymmetry)                                                           | Creates a new Symmetry                                                                                                       |
| [`AddTableGroup`](#Model.AddTableGroup)                                                       | Get the                                                                                                                      |
| [`AddThermalElectricAnalysis`](#Model.AddThermalElectricAnalysis)                             | Run the AddThermalElectricAnalysis action.                                                                                   |
| [`AddTopologyOptimizationAnalysis`](#Model.AddTopologyOptimizationAnalysis)                   | Run the AddTopologyOptimizationAnalysis action.                                                                              |
| [`AddTransientStructuralAnalysis`](#Model.AddTransientStructuralAnalysis)                     | Run the AddTransientStructuralAnalysis action.                                                                               |
| [`AddTransientThermalAnalysis`](#Model.AddTransientThermalAnalysis)                           | Run the AddTransientThermalAnalysis action.                                                                                  |
| [`AddTreeGroupingFolder`](#Model.AddTreeGroupingFolder)                                       | Move the Data Model Objects to a new TreeGroupingFolder.                                                                     |
| [`AddVirtualTopology`](#Model.AddVirtualTopology)                                             | Creates a new VirtualTopology                                                                                                |
| [`AutoFilter`](#Model.AutoFilter)                                                             | Enables interface filtering that only displays model-level items applicable to the                                           |
| [`CenterOfMass`](#Model.CenterOfMass)                                                         | Calculates the center of mass of all unsupressed bodies and point masses.                                                    |
| [`ClearGeneratedData`](#Model.ClearGeneratedData)                                             | Run the ClearGeneratedData action.                                                                                           |
| [`CopyTo`](#Model.CopyTo)                                                                     | Copies all visible properties from this object to another.                                                                   |
| [`CreateCylindricalBolt`](#Model.CreateCylindricalBolt)                                       | Create bolt with a cylinder head based on the specified dimensions. The bolt will be                                         |
| [`CreateCylindricalNut`](#Model.CreateCylindricalNut)                                         | Create a cylindrical nut with the specified dimensions. The nut will be created so that                                      |
| [`CreateHexBolt`](#Model.CreateHexBolt)                                                       | Create a bolt with a hex head based on the specified dimensions. The bolt will be                                            |
| [`CreateHexNut`](#Model.CreateHexNut)                                                         | Create a hex nut with the specified dimensions. The nut will be created so that the                                          |
| [`CreateParameter`](#Model.CreateParameter)                                                   | Creates a new parameter for a Property.                                                                                      |
| [`CreatePartInstance`](#Model.CreatePartInstance)                                             | This will create an instance (not an independent copy) of the provided part. The use of                                      |
| [`DeleteParts`](#Model.DeleteParts)                                                           | Deletes the provide parts if they exist. Otherwise, nothing happens. An exception will be issued if the argument is invalid. |
| [`DisableFilter`](#Model.DisableFilter)                                                       | Disables interface filtering so that model-level items are not filtered out based on                                         |
| [`Duplicate`](#Model.Duplicate)                                                               | Creates a copy of the current DataModelObject.                                                                               |
| [`EvaluateScriptDefinedResults`](#Model.EvaluateScriptDefinedResults)                         | EvaluateScriptDefinedResults method.                                                                                         |
| [`FreezeMeshOnSelectedParts`](#Model.FreezeMeshOnSelectedParts)                               | Run the FreezeMeshOnSelectedParts action.                                                                                    |
| [`GetChildren`](#Model.GetChildren)                                                           | Gets the list of children, filtered by type.                                                                                 |
| [`GetFECommandsRepository`](#Model.GetFECommandsRepository)                                   | Gets the commands repository for a file from external model.                                                                 |
| [`GetParameter`](#Model.GetParameter)                                                         | Gets the parameter corresponding to the given property.                                                                      |
| [`GetResults`](#Model.GetResults)                                                             | Gets the Results from the server.                                                                                            |
| [`GetTransformationOnPart`](#Model.GetTransformationOnPart)                                   | Get the transformation matrix of the provided part.                                                                          |
| [`GroupAllSimilarChildren`](#Model.GroupAllSimilarChildren)                                   | Run the GroupAllSimilarChildren action.                                                                                      |
| [`GroupSimilarObjects`](#Model.GroupSimilarObjects)                                           | Run the GroupSimilarObjects action.                                                                                          |
| [`LoadResultFile`](#Model.LoadResultFile)                                                     | Creates a results-only system and loads the result file.                                                                     |
| [`PropertyByAPIName`](#Model.PropertyByAPIName)                                               | Get a property by its API name.                                                                                              |
| [`PropertyByName`](#Model.PropertyByName)                                                     | Get a property by its unique name.                                                                                           |
| [`RefreshMaterials`](#Model.RefreshMaterials)                                                 | Run the RefresMaterials action.                                                                                              |
| [`RemoveParameter`](#Model.RemoveParameter)                                                   | Removes the parameter from the parameter set corresponding to the given property.                                            |
| [`SetTransformationOnPart`](#Model.SetTransformationOnPart)                                   | Transform a part with given transformation. Only rigid body transformation is                                                |
| [`Solve`](#Model.Solve)                                                                       | Run the Solve action.                                                                                                        |
| [`UnfreezeMeshOnSelectedParts`](#Model.UnfreezeMeshOnSelectedParts)                           | Run the UnfreezeMeshOnSelectedParts action.                                                                                  |
| [`UpdateGeometryFromSource`](#Model.UpdateGeometryFromSource)                                 | Run the UpdateGeometryFromSource action.                                                                                     |

### Properties

| Name | Description |
|-------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AEDTImportManager`](#Model.AEDTImportManager)             | Get the manager for manipulating import settings for AEDT files.                                                                                                                                                                                                                                              |
| [`AMProcess`](#Model.AMProcess)                             | Gets the AMProcess.                                                                                                                                                                                                                                                                                           |
| [`Ambient`](#Model.Ambient)                                 | Gets or sets the Ambient Lighting factor.                                                                                                                                                                                                                                                                     |
| [`Analyses`](#Model.Analyses)                               | Gets the Analyses.                                                                                                                                                                                                                                                                                            |
| [`CellId`](#Model.CellId)                                   | Gets the CellId.                                                                                                                                                                                                                                                                                              |
| [`Children`](#Model.Children)                               | Gets the list of children.                                                                                                                                                                                                                                                                                    |
| [`Color`](#Model.Color)                                     | Gets or sets the Lighting Color. Can also be set using Hex color codes; three byte hexadecimal numbers (consisting of six digits) preceded by ‘0x’, where each byte (or pair of characters in the Hex code) represents the intensity of red, green and blue in the color respectively. For example, 0xFFFFFF. |
| [`Comments`](#Model.Comments)                               | Gets the list of associated comments.                                                                                                                                                                                                                                                                         |
| [`CondensedGeometry`](#Model.CondensedGeometry)             | Gets the CondensedGeometry.                                                                                                                                                                                                                                                                                   |
| [`Connections`](#Model.Connections)                         | Gets the Connections.                                                                                                                                                                                                                                                                                         |
| [`ConstructionGeometry`](#Model.ConstructionGeometry)       | Gets the ConstructionGeometry.                                                                                                                                                                                                                                                                                |
| [`Control`](#Model.Control)                                 | Gets the Control.                                                                                                                                                                                                                                                                                             |
| [`CoordinateSystems`](#Model.CoordinateSystems)             | Gets the CoordinateSystems.                                                                                                                                                                                                                                                                                   |
| [`CrossSections`](#Model.CrossSections)                     | Gets the CrossSections.                                                                                                                                                                                                                                                                                       |
| [`DataModelObjectCategory`](#Model.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                                                                                                                                                                  |
| [`Diffuse`](#Model.Diffuse)                                 | Gets or sets the Diffuse Lighting factor.                                                                                                                                                                                                                                                                     |
| [`Environments`](#Model.Environments)                       | Gets the Analyses.                                                                                                                                                                                                                                                                                            |
| [`FeatureDetection`](#Model.FeatureDetection)               | Gets the FeatureDetection.                                                                                                                                                                                                                                                                                    |
| [`Figures`](#Model.Figures)                                 | Gets the list of associated figures.                                                                                                                                                                                                                                                                          |
| [`Fracture`](#Model.Fracture)                               | Gets the Fracture.                                                                                                                                                                                                                                                                                            |
| [`Geometry`](#Model.Geometry)                               | Gets the Geometry.                                                                                                                                                                                                                                                                                            |
| [`GeometryImportGroup`](#Model.GeometryImportGroup)         | Gets the GeometryImportGroup.                                                                                                                                                                                                                                                                                 |
| [`Images`](#Model.Images)                                   | Gets the list of associated images.                                                                                                                                                                                                                                                                           |
| [`InternalObject`](#Model.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                            |
| [`Materials`](#Model.Materials)                             | Gets the Materials.                                                                                                                                                                                                                                                                                           |
| [`Measures`](#Model.Measures)                               | Gets the Measures.                                                                                                                                                                                                                                                                                            |
| [`Mesh`](#Model.Mesh)                                       | Gets the Mesh.                                                                                                                                                                                                                                                                                                |
| [`MeshEdit`](#Model.MeshEdit)                               | Gets the MeshEdit.                                                                                                                                                                                                                                                                                            |
| [`MeshNumbering`](#Model.MeshNumbering)                     | Gets the MeshNumbering.                                                                                                                                                                                                                                                                                       |
| [`NamedSelections`](#Model.NamedSelections)                 | Gets the NamedSelections.                                                                                                                                                                                                                                                                                     |
| [`PartTransformGroup`](#Model.PartTransformGroup)           | Gets the PartTransformGroup.                                                                                                                                                                                                                                                                                  |
| [`Properties`](#Model.Properties)                           | Gets the list of properties for this object.                                                                                                                                                                                                                                                                  |
| [`RemotePoints`](#Model.RemotePoints)                       | Gets the RemotePoints.                                                                                                                                                                                                                                                                                        |
| [`Specular`](#Model.Specular)                               | Gets or sets the Specular Lighting factor.                                                                                                                                                                                                                                                                    |
| [`Symmetry`](#Model.Symmetry)                               | Gets the Symmetry.                                                                                                                                                                                                                                                                                            |
| [`SystemCaption`](#Model.SystemCaption)                     | Gets the SystemCaption.                                                                                                                                                                                                                                                                                       |
| [`TableGroup`](#Model.TableGroup)                           | Gets the TableGroup.                                                                                                                                                                                                                                                                                          |
| [`VirtualTopology`](#Model.VirtualTopology)                 | Gets the VirtualTopology.                                                                                                                                                                                                                                                                                     |
| [`VisibleProperties`](#Model.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                                 |

<a id="property-detail"></a>

## Property detail

<a id="Model.AEDTImportManager"></a>

### *property* Model.AEDTImportManager *: Ansys.ACT.Automation.Mechanical.AEDTImportManager | [None](https://docs.python.org/3/library/constants.html#None)*

Get the manager for manipulating import settings for AEDT files.

<!-- !! processed by numpydoc !! -->

<a id="Model.AMProcess"></a>

### *property* Model.AMProcess *: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMProcess](AdditiveManufacturing/AMProcess.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMProcess) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AMProcess.

<!-- !! processed by numpydoc !! -->

<a id="Model.Ambient"></a>

### *property* Model.Ambient *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ambient Lighting factor.

<!-- !! processed by numpydoc !! -->

<a id="Model.Analyses"></a>

### *property* Model.Analyses *: List[[Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Analysis)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Analyses.

<!-- !! processed by numpydoc !! -->

<a id="Model.CellId"></a>

### *property* Model.CellId *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CellId.

<!-- !! processed by numpydoc !! -->

<a id="Model.Children"></a>

### *property* Model.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Model.Color"></a>

### *property* Model.Color *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Lighting Color. Can also be set using Hex color codes; three byte hexadecimal numbers (consisting of six digits) preceded by ‘0x’, where each byte (or pair of characters in the Hex code) represents the intensity of red, green and blue in the color respectively. For example, 0xFFFFFF.

<!-- !! processed by numpydoc !! -->

<a id="Model.Comments"></a>

### *property* Model.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Model.CondensedGeometry"></a>

### *property* Model.CondensedGeometry *: [Ansys.ACT.Automation.Mechanical.CondensedGeometry](CondensedGeometry.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CondensedGeometry) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CondensedGeometry.

<!-- !! processed by numpydoc !! -->

<a id="Model.Connections"></a>

### *property* Model.Connections *: [Ansys.ACT.Automation.Mechanical.Connections.Connections](Connections/Connections.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Connections) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

<a id="Model.ConstructionGeometry"></a>

### *property* Model.ConstructionGeometry *: [Ansys.ACT.Automation.Mechanical.ConstructionGeometry](ConstructionGeometry.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ConstructionGeometry) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ConstructionGeometry.

<!-- !! processed by numpydoc !! -->

<a id="Model.Control"></a>

### *property* Model.Control *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Control.

<!-- !! processed by numpydoc !! -->

<a id="Model.CoordinateSystems"></a>

### *property* Model.CoordinateSystems *: [Ansys.ACT.Automation.Mechanical.CoordinateSystems](CoordinateSystems.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystems) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CoordinateSystems.

<!-- !! processed by numpydoc !! -->

<a id="Model.CrossSections"></a>

### *property* Model.CrossSections *: [Ansys.ACT.Automation.Mechanical.CrossSections](CrossSections.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CrossSections) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSections.

<!-- !! processed by numpydoc !! -->

<a id="Model.DataModelObjectCategory"></a>

### *property* Model.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Model.Diffuse"></a>

### *property* Model.Diffuse *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Diffuse Lighting factor.

<!-- !! processed by numpydoc !! -->

<a id="Model.Environments"></a>

### *property* Model.Environments *: Iterable[[Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Analysis)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Analyses.

<!-- !! processed by numpydoc !! -->

<a id="Model.FeatureDetection"></a>

### *property* Model.FeatureDetection *: [Ansys.ACT.Automation.Mechanical.FeatureDetection](FeatureDetection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.FeatureDetection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FeatureDetection.

<!-- !! processed by numpydoc !! -->

<a id="Model.Figures"></a>

### *property* Model.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Model.Fracture"></a>

### *property* Model.Fracture *: [Ansys.ACT.Automation.Mechanical.Fracture](Fracture.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Fracture) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Fracture.

<!-- !! processed by numpydoc !! -->

<a id="Model.Geometry"></a>

### *property* Model.Geometry *: [Ansys.ACT.Automation.Mechanical.Geometry](Geometry.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Geometry) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="Model.GeometryImportGroup"></a>

### *property* Model.GeometryImportGroup *: [Ansys.ACT.Automation.Mechanical.GeometryImportGroup](GeometryImportGroup.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.GeometryImportGroup) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the GeometryImportGroup.

<!-- !! processed by numpydoc !! -->

<a id="Model.Images"></a>

### *property* Model.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Model.InternalObject"></a>

### *property* Model.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSModelAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Model.Materials"></a>

### *property* Model.Materials *: [Ansys.ACT.Automation.Mechanical.Materials](Materials.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Materials) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Materials.

<!-- !! processed by numpydoc !! -->

<a id="Model.Measures"></a>

### *property* Model.Measures *: [Ansys.ACT.Automation.Mechanical.Measures](Measures.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Measures) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Measures.

<!-- !! processed by numpydoc !! -->

<a id="Model.Mesh"></a>

### *property* Model.Mesh *: [Ansys.ACT.Automation.Mechanical.MeshControls.Mesh](MeshControls/Mesh.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshControls.Mesh) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Model.MeshEdit"></a>

### *property* Model.MeshEdit *: [Ansys.ACT.Automation.Mechanical.MeshEdit](MeshEdit.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshEdit) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshEdit.

<!-- !! processed by numpydoc !! -->

<a id="Model.MeshNumbering"></a>

### *property* Model.MeshNumbering *: [Ansys.ACT.Automation.Mechanical.MeshNumbering](MeshNumbering.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshNumbering) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshNumbering.

<!-- !! processed by numpydoc !! -->

<a id="Model.NamedSelections"></a>

### *property* Model.NamedSelections *: [Ansys.ACT.Automation.Mechanical.NamedSelections](NamedSelections.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelections) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="Model.PartTransformGroup"></a>

### *property* Model.PartTransformGroup *: [Ansys.ACT.Automation.Mechanical.PartTransformGroup](PartTransformGroup.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.PartTransformGroup) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PartTransformGroup.

<!-- !! processed by numpydoc !! -->

<a id="Model.Properties"></a>

### *property* Model.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Model.RemotePoints"></a>

### *property* Model.RemotePoints *: [Ansys.ACT.Automation.Mechanical.RemotePoints](RemotePoints.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.RemotePoints) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RemotePoints.

<!-- !! processed by numpydoc !! -->

<a id="Model.Specular"></a>

### *property* Model.Specular *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Specular Lighting factor.

<!-- !! processed by numpydoc !! -->

<a id="Model.Symmetry"></a>

### *property* Model.Symmetry *: [Ansys.ACT.Automation.Mechanical.Symmetry](Symmetry.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Symmetry) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Symmetry.

<!-- !! processed by numpydoc !! -->

<a id="Model.SystemCaption"></a>

### *property* Model.SystemCaption *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SystemCaption.

<!-- !! processed by numpydoc !! -->

<a id="Model.TableGroup"></a>

### *property* Model.TableGroup *: [Ansys.ACT.Automation.Mechanical.TableGroup](TableGroup.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.TableGroup) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TableGroup.

<!-- !! processed by numpydoc !! -->

<a id="Model.VirtualTopology"></a>

### *property* Model.VirtualTopology *: [Ansys.ACT.Automation.Mechanical.VirtualTopology](VirtualTopology.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.VirtualTopology) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualTopology.

<!-- !! processed by numpydoc !! -->

<a id="Model.VisibleProperties"></a>

### *property* Model.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Model.Activate"></a>

### Model.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddAMProcess"></a>

### Model.AddAMProcess()

Creates a new AMProcess

<!-- !! processed by numpydoc !! -->

<a id="Model.AddChart"></a>

### Model.AddChart()

Creates a new child Chart.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCoSimulationPin"></a>

### Model.AddCoSimulationPin()

Creates a new CoSimulationPin

<!-- !! processed by numpydoc !! -->

<a id="Model.AddComment"></a>

### Model.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCompositeFailureCriteria"></a>

### Model.AddCompositeFailureCriteria()

Creates a new Composite Failure Criteria object.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCondensedGeometry"></a>

### Model.AddCondensedGeometry()

Creates a new CondensedGeometry

<!-- !! processed by numpydoc !! -->

<a id="Model.AddConnections"></a>

### Model.AddConnections()

Creates a new Connections

<!-- !! processed by numpydoc !! -->

<a id="Model.AddConstructionGeometry"></a>

### Model.AddConstructionGeometry()

Creates a new ConstructionGeometry

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCoupledFieldHarmonic"></a>

### Model.AddCoupledFieldHarmonic()

Run the AddCoupledFieldHarmonic action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCoupledFieldModal"></a>

### Model.AddCoupledFieldModal()

Run the AddCoupledFieldModal action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCoupledFieldStatic"></a>

### Model.AddCoupledFieldStatic()

Run the AddCoupledFieldStatic action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCoupledFieldTransient"></a>

### Model.AddCoupledFieldTransient()

Run the AddCoupledFieldTransient action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCrossSections"></a>

### Model.AddCrossSections()

Creates new CrossSections group.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddDesignAssessmentAnalysis"></a>

### Model.AddDesignAssessmentAnalysis()

Run the AddDesignAssessmentAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddDesignLifeAnalysis"></a>

### Model.AddDesignLifeAnalysis()

Run the AddDesignLifeAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddEigenvalueBucklingAnalysis"></a>

### Model.AddEigenvalueBucklingAnalysis()

Run the AddEigenvalueBucklingAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddElectricAnalysis"></a>

### Model.AddElectricAnalysis()

Run the AddElectricAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddExplicitDynamicsAnalysis"></a>

### Model.AddExplicitDynamicsAnalysis()

Run the AddExplicitDynamicsAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddFatigueCombination"></a>

### Model.AddFatigueCombination()

Creates a new FatigueCombination

<!-- !! processed by numpydoc !! -->

<a id="Model.AddFeatureDetection"></a>

### Model.AddFeatureDetection()

Creates a new FeatureDetection

<!-- !! processed by numpydoc !! -->

<a id="Model.AddFigure"></a>

### Model.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddForcedResponseAnalysis"></a>

### Model.AddForcedResponseAnalysis()

Run the AddForcedResponseAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddFracture"></a>

### Model.AddFracture()

Creates a new Fracture

<!-- !! processed by numpydoc !! -->

<a id="Model.AddGeometryImportGroup"></a>

### Model.AddGeometryImportGroup()

Get the

<!-- !! processed by numpydoc !! -->

<a id="Model.AddHarmonicAcousticAnalysis"></a>

### Model.AddHarmonicAcousticAnalysis()

Run the AddHarmonicAcousticAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddHarmonicResponseAnalysis"></a>

### Model.AddHarmonicResponseAnalysis()

Run the AddHarmonicResponseAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddImage"></a>

### Model.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Model.AddImagePlane"></a>

### Model.AddImagePlane()

Creates an ImagePlane and adds it as a child of this object.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddLSDynaAnalysis"></a>

### Model.AddLSDynaAnalysis()

Run the AddLSDynaAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddLSDynaRestartAnalysis"></a>

### Model.AddLSDynaRestartAnalysis()

Run the AddLSDynaRestartAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddMagnetostaticAnalysis"></a>

### Model.AddMagnetostaticAnalysis()

Run the AddMagnetostaticAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddMeasures"></a>

### Model.AddMeasures()

Creates a new Measures

<!-- !! processed by numpydoc !! -->

<a id="Model.AddMeshEdit"></a>

### Model.AddMeshEdit()

Creates a new MeshEdit

<!-- !! processed by numpydoc !! -->

<a id="Model.AddMeshNumbering"></a>

### Model.AddMeshNumbering()

Creates a new MeshNumbering

<!-- !! processed by numpydoc !! -->

<a id="Model.AddModalAcousticAnalysis"></a>

### Model.AddModalAcousticAnalysis()

Run the AddModalAcousticAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddModalAnalysis"></a>

### Model.AddModalAnalysis()

Run the AddModalAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddMotionAnalysis"></a>

### Model.AddMotionAnalysis()

Run the AddMotionAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddNamedSelection"></a>

### Model.AddNamedSelection()

Creates a new child NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddNamedSelectionFromSelectedConnections"></a>

### Model.AddNamedSelectionFromSelectedConnections()

Creates a new Named Selections (Components) for the selected connections.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddPartTransform"></a>

### Model.AddPartTransform()

Creates a new child PartTransform.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddPythonCodeEventBased"></a>

### Model.AddPythonCodeEventBased()

Creates a new PythonCodeEventBased

<!-- !! processed by numpydoc !! -->

<a id="Model.AddPythonResult"></a>

### Model.AddPythonResult()

Creates a new PythonResult

<!-- !! processed by numpydoc !! -->

<a id="Model.AddRandomVibrationAnalysis"></a>

### Model.AddRandomVibrationAnalysis()

Run the AddRandomVibrationAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddRemotePoint"></a>

### Model.AddRemotePoint()

Creates a new child RemotePoint.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddResponseSpectrumAnalysis"></a>

### Model.AddResponseSpectrumAnalysis()

Run the AddResponseSpectrumAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddRigidDynamicsAnalysis"></a>

### Model.AddRigidDynamicsAnalysis()

Run the AddRigidDynamicsAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddSolutionCombination"></a>

### Model.AddSolutionCombination()

Creates a new SolutionCombination

<!-- !! processed by numpydoc !! -->

<a id="Model.AddStaticAcousticAnalysis"></a>

### Model.AddStaticAcousticAnalysis()

Run the AddStaticAcousticAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddStaticStructuralAnalysis"></a>

### Model.AddStaticStructuralAnalysis()

Run the AddStaticStructuralAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddSteadyStateThermalAnalysis"></a>

### Model.AddSteadyStateThermalAnalysis()

Run the AddSteadyStateThermalAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddSubstructureGenerationAnalysis"></a>

### Model.AddSubstructureGenerationAnalysis()

Run the AddSubstructureGenerationAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddSymmetry"></a>

### Model.AddSymmetry()

Creates a new Symmetry

<!-- !! processed by numpydoc !! -->

<a id="Model.AddTableGroup"></a>

### Model.AddTableGroup(activate: [bool](https://docs.python.org/3/library/functions.html#bool))

Get the

<!-- !! processed by numpydoc !! -->

<a id="Model.AddThermalElectricAnalysis"></a>

### Model.AddThermalElectricAnalysis()

Run the AddThermalElectricAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddTopologyOptimizationAnalysis"></a>

### Model.AddTopologyOptimizationAnalysis()

Run the AddTopologyOptimizationAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddTransientStructuralAnalysis"></a>

### Model.AddTransientStructuralAnalysis()

Run the AddTransientStructuralAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddTransientThermalAnalysis"></a>

### Model.AddTransientThermalAnalysis()

Run the AddTransientThermalAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddTreeGroupingFolder"></a>

### Model.AddTreeGroupingFolder(dataModelObjects: Iterable)

Move the Data Model Objects to a new TreeGroupingFolder.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddVirtualTopology"></a>

### Model.AddVirtualTopology()

Creates a new VirtualTopology

<!-- !! processed by numpydoc !! -->

<a id="Model.AutoFilter"></a>

### Model.AutoFilter()

```text
Enables interface filtering that only displays model-level items applicable to the
    particular analysis type environments in which you are working.
```

<!-- !! processed by numpydoc !! -->

<a id="Model.CenterOfMass"></a>

### Model.CenterOfMass()

Calculates the center of mass of all unsupressed bodies and point masses.

<!-- !! processed by numpydoc !! -->

<a id="Model.ClearGeneratedData"></a>

### Model.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="Model.CopyTo"></a>

### Model.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Model.CreateCylindricalBolt"></a>

### Model.CreateCylindricalBolt(headHeight: Any, headRadius: Any, shankLength: Any, shankRadius: Any)

```text
Create bolt with a cylinder head based on the specified dimensions. The bolt will be
created so that the base of the head is at the origin and aligned with the Y-Z plane.
Valid input arguments include:
  1) `double`
  2) `Quantity`
  3) A string representation of `double` or `Quantity`, i.e., "1.0" or "1.0 [cm]"
```

<!-- !! processed by numpydoc !! -->

<a id="Model.CreateCylindricalNut"></a>

### Model.CreateCylindricalNut(height: Any, innerRadius: Any, outerRadius: Any)

```text
Create a cylindrical nut with the specified dimensions. The nut will be created so that
the base of the nut is at the origin and aligned with the Y-Z plane.
Valid input arguments include:
  1) `double`
  2) `Quantity`
  3) A string representation of `double` or `Quantity`, i.e., "1.0" or "1.0 [cm]"
```

<!-- !! processed by numpydoc !! -->

<a id="Model.CreateHexBolt"></a>

### Model.CreateHexBolt(headHeight: Any, wrenchWidth: Any, shankLength: Any, shankRadius: Any)

```text
Create a bolt with a hex head based on the specified dimensions. The bolt will be
created so that the base of the head is at the origin and aligned with the Y-Z plane.
Valid input arguments include:
  1) `double`
  2) `Quantity`
  3) A string representation of `double` or `Quantity`, i.e., "1.0" or "1.0 [cm]"
```

<!-- !! processed by numpydoc !! -->

<a id="Model.CreateHexNut"></a>

### Model.CreateHexNut(height: Any, innerRadius: Any, wrenchWidth: Any)

```text
Create a hex nut with the specified dimensions. The nut will be created so that the
base of the nut is at the origin and aligned with the Y-Z plane.
Valid input arguments include:
  1) `double`
  2) `Quantity`
  3) A string representation of `double` or `Quantity`, i.e., "1.0" or "1.0 [cm]"
```

<!-- !! processed by numpydoc !! -->

<a id="Model.CreateParameter"></a>

### Model.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Model.CreatePartInstance"></a>

### Model.CreatePartInstance(part: Ansys.ACT.Interfaces.Geometry.IGeoPart)

```text
This will create an instance (not an independent copy) of the provided part. The use of
instanced parts for replication is highly recommended for memory and performance
reasons.
```

<!-- !! processed by numpydoc !! -->

<a id="Model.DeleteParts"></a>

### Model.DeleteParts(parts: Any)

Deletes the provide parts if they exist. Otherwise, nothing happens. An exception will be issued if the argument is invalid.

<!-- !! processed by numpydoc !! -->

<a id="Model.DisableFilter"></a>

### Model.DisableFilter()

```text
Disables interface filtering so that model-level items are not filtered out based on
    the environment types in your model.
```

<!-- !! processed by numpydoc !! -->

<a id="Model.Duplicate"></a>

### Model.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Model.EvaluateScriptDefinedResults"></a>

### Model.EvaluateScriptDefinedResults()

EvaluateScriptDefinedResults method.

<!-- !! processed by numpydoc !! -->

<a id="Model.FreezeMeshOnSelectedParts"></a>

### Model.FreezeMeshOnSelectedParts(parts: Any)

Run the FreezeMeshOnSelectedParts action.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetChildren"></a>

### Model.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetFECommandsRepository"></a>

### Model.GetFECommandsRepository(source: [str](https://docs.python.org/3/library/stdtypes.html#str), fileIdentifier: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the commands repository for a file from external model.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetParameter"></a>

### Model.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetResults"></a>

### Model.GetResults()

Gets the Results from the server.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetTransformationOnPart"></a>

### Model.GetTransformationOnPart(part: Ansys.ACT.Interfaces.Geometry.IGeoPart)

Get the transformation matrix of the provided part.

<!-- !! processed by numpydoc !! -->

<a id="Model.GroupAllSimilarChildren"></a>

### Model.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Model.GroupSimilarObjects"></a>

### Model.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Model.LoadResultFile"></a>

### Model.LoadResultFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a results-only system and loads the result file.

<!-- !! processed by numpydoc !! -->

<a id="Model.PropertyByAPIName"></a>

### Model.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Model.PropertyByName"></a>

### Model.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Model.RefreshMaterials"></a>

### Model.RefreshMaterials()

Run the RefresMaterials action.

<!-- !! processed by numpydoc !! -->

<a id="Model.RemoveParameter"></a>

### Model.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Model.SetTransformationOnPart"></a>

### Model.SetTransformationOnPart(part: Ansys.ACT.Interfaces.Geometry.IGeoPart, transformationMatrix: [Ansys.Mechanical.DataModel.Utilities.RigidBodyTransformationMatrix](../../../Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Utilities.RigidBodyTransformationMatrix))

```text
Transform a part with given transformation. Only rigid body transformation is
supported, i.e., no scaling will be performed. The validity of “transformationMatrix”
will be checked against the constraints of rigid body transforms; an error will be
emitted if the matrix is ill-formed.
```

<!-- !! processed by numpydoc !! -->

<a id="Model.Solve"></a>

### Model.Solve(wait: [bool](https://docs.python.org/3/library/functions.html#bool), config: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the Solve action.

<!-- !! processed by numpydoc !! -->

<a id="Model.UnfreezeMeshOnSelectedParts"></a>

### Model.UnfreezeMeshOnSelectedParts(parts: Any)

Run the UnfreezeMeshOnSelectedParts action.

<!-- !! processed by numpydoc !! -->

<a id="Model.UpdateGeometryFromSource"></a>

### Model.UpdateGeometryFromSource()

Run the UpdateGeometryFromSource action.

<!-- !! processed by numpydoc !! -->

