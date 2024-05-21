# Model

<a id="Model"></a>

### *class* Model

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Model.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`CreateCylindricalBolt`](#Model.CreateCylindricalBolt)                                       | Create bolt with a cylinder head based on the specified dimensions. The bolt will be                                         |
| [`CreateCylindricalNut`](#Model.CreateCylindricalNut)                                         | Create a cylindrical nut with the specified dimensions. The nut will be created so that                                      |
| [`CreateHexBolt`](#Model.CreateHexBolt)                                                       | Create a bolt with a hex head based on the specified dimensions. The bolt will be                                            |
| [`CreateHexNut`](#Model.CreateHexNut)                                                         | Create a hex nut with the specified dimensions. The nut will be created so that the                                          |
| [`CreatePartInstance`](#Model.CreatePartInstance)                                             | This will create an instance (not an independent copy) of the provided part. The use of                                      |
| [`GetTransformationOnPart`](#Model.GetTransformationOnPart)                                   | Get the transformation matrix of the provided part.                                                                          |
| [`SetTransformationOnPart`](#Model.SetTransformationOnPart)                                   | Transform a part with given transformation. Only rigid body transformation is                                                |
| [`ClearGeneratedData`](#Model.ClearGeneratedData)                                             | Run the ClearGeneratedData action.                                                                                           |
| [`AddRemotePoint`](#Model.AddRemotePoint)                                                     | Creates a new child RemotePoint.                                                                                             |
| [`Solve`](#id1)                                                                               | Run the Solve action.                                                                                                        |
| [`Solve`](#id1)                                                                               | Run the Solve action.                                                                                                        |
| [`GetResults`](#Model.GetResults)                                                             | Gets the Results from the server.                                                                                            |
| [`AddStaticStructuralAnalysis`](#Model.AddStaticStructuralAnalysis)                           | Run the AddStaticStructuralAnalysis action.                                                                                  |
| [`AddTransientStructuralAnalysis`](#Model.AddTransientStructuralAnalysis)                     | Run the AddTransientStructuralAnalysis action.                                                                               |
| [`AddRigidDynamicsAnalysis`](#Model.AddRigidDynamicsAnalysis)                                 | Run the AddRigidDynamicsAnalysis action.                                                                                     |
| [`AddHarmonicResponseAnalysis`](#Model.AddHarmonicResponseAnalysis)                           | Run the AddHarmonicResponseAnalysis action.                                                                                  |
| [`AddModalAnalysis`](#Model.AddModalAnalysis)                                                 | Run the AddModalAnalysis action.                                                                                             |
| [`AddSubstructureGenerationAnalysis`](#Model.AddSubstructureGenerationAnalysis)               | Run the AddSubstructureGenerationAnalysis action.                                                                            |
| [`AddExplicitDynamicsAnalysis`](#Model.AddExplicitDynamicsAnalysis)                           | Run the AddExplicitDynamicsAnalysis action.                                                                                  |
| [`AddSteadyStateThermalAnalysis`](#Model.AddSteadyStateThermalAnalysis)                       | Run the AddSteadyStateThermalAnalysis action.                                                                                |
| [`AddTransientThermalAnalysis`](#Model.AddTransientThermalAnalysis)                           | Run the AddTransientThermalAnalysis action.                                                                                  |
| [`AddMagnetostaticAnalysis`](#Model.AddMagnetostaticAnalysis)                                 | Run the AddMagnetostaticAnalysis action.                                                                                     |
| [`AddElectricAnalysis`](#Model.AddElectricAnalysis)                                           | Run the AddElectricAnalysis action.                                                                                          |
| [`AddDesignAssessmentAnalysis`](#Model.AddDesignAssessmentAnalysis)                           | Run the AddDesignAssessmentAnalysis action.                                                                                  |
| [`AddThermalElectricAnalysis`](#Model.AddThermalElectricAnalysis)                             | Run the AddThermalElectricAnalysis action.                                                                                   |
| [`AddModalAcousticAnalysis`](#Model.AddModalAcousticAnalysis)                                 | Run the AddModalAcousticAnalysis action.                                                                                     |
| [`AddHarmonicAcousticAnalysis`](#Model.AddHarmonicAcousticAnalysis)                           | Run the AddHarmonicAcousticAnalysis action.                                                                                  |
| [`AddStaticAcousticAnalysis`](#Model.AddStaticAcousticAnalysis)                               | Run the AddStaticAcousticAnalysis action.                                                                                    |
| [`AddTopologyOptimizationAnalysis`](#Model.AddTopologyOptimizationAnalysis)                   | Run the AddTopologyOptimizationAnalysis action.                                                                              |
| [`AddEigenvalueBucklingAnalysis`](#Model.AddEigenvalueBucklingAnalysis)                       | Run the AddEigenvalueBucklingAnalysis action.                                                                                |
| [`AddResponseSpectrumAnalysis`](#Model.AddResponseSpectrumAnalysis)                           | Run the AddResponseSpectrumAnalysis action.                                                                                  |
| [`AddRandomVibrationAnalysis`](#Model.AddRandomVibrationAnalysis)                             | Run the AddRandomVibrationAnalysis action.                                                                                   |
| [`AddCoupledFieldStatic`](#Model.AddCoupledFieldStatic)                                       | Run the AddCoupledFieldStatic action.                                                                                        |
| [`AddCoupledFieldTransient`](#Model.AddCoupledFieldTransient)                                 | Run the AddCoupledFieldTransient action.                                                                                     |
| [`AddCoupledFieldHarmonic`](#Model.AddCoupledFieldHarmonic)                                   | Run the AddCoupledFieldHarmonic action.                                                                                      |
| [`AddCoupledFieldModal`](#Model.AddCoupledFieldModal)                                         | Run the AddCoupledFieldModal action.                                                                                         |
| [`AddLSDynaAnalysis`](#Model.AddLSDynaAnalysis)                                               | Run the AddLSDynaAnalysis action.                                                                                            |
| [`AddLSDynaRestartAnalysis`](#Model.AddLSDynaRestartAnalysis)                                 | Run the AddLSDynaRestartAnalysis action.                                                                                     |
| [`AddMotionAnalysis`](#Model.AddMotionAnalysis)                                               | Run the AddMotionAnalysis action.                                                                                            |
| [`AddDesignLifeAnalysis`](#Model.AddDesignLifeAnalysis)                                       | Run the AddDesignLifeAnalysis action.                                                                                        |
| [`AddForcedResponseAnalysis`](#Model.AddForcedResponseAnalysis)                               | Run the AddForcedResponseAnalysis action.                                                                                    |
| [`UpdateGeometryFromSource`](#Model.UpdateGeometryFromSource)                                 | Run the UpdateGeometryFromSource action.                                                                                     |
| [`RefreshMaterials`](#Model.RefreshMaterials)                                                 | Run the RefresMaterials action.                                                                                              |
| [`LoadResultFile`](#Model.LoadResultFile)                                                     | Creates a results-only system and loads the result file.                                                                     |
| [`AutoFilter`](#Model.AutoFilter)                                                             | Enables interface filtering that only displays model-level items applicable to the                                           |
| [`DisableFilter`](#Model.DisableFilter)                                                       | Disables interface filtering so that model-level items are not filtered out based on                                         |
| [`AddNamedSelectionFromSelectedConnections`](#Model.AddNamedSelectionFromSelectedConnections) | Creates a new Named Selections (Components) for the selected connections.                                                    |
| [`AddNamedSelection`](#Model.AddNamedSelection)                                               | Creates a new child NamedSelection.                                                                                          |
| [`AddPartTransform`](#Model.AddPartTransform)                                                 | Creates a new child PartTransform.                                                                                           |
| [`GetFECommandsRepository`](#Model.GetFECommandsRepository)                                   | Gets the commands repository for a file from external model.                                                                 |
| [`AddChart`](#Model.AddChart)                                                                 | Creates a new child Chart.                                                                                                   |
| [`DeleteParts`](#Model.DeleteParts)                                                           | Deletes the provide parts if they exist. Otherwise, nothing happens. An exception will be issued if the argument is invalid. |
| [`FreezeMeshOnSelectedParts`](#Model.FreezeMeshOnSelectedParts)                               | Run the FreezeMeshOnSelectedParts action.                                                                                    |
| [`UnfreezeMeshOnSelectedParts`](#Model.UnfreezeMeshOnSelectedParts)                           | Run the UnfreezeMeshOnSelectedParts action.                                                                                  |
| [`AddCondensedGeometry`](#Model.AddCondensedGeometry)                                         | Creates a new CondensedGeometry                                                                                              |
| [`AddMeasures`](#Model.AddMeasures)                                                           | Creates a new Measures                                                                                                       |
| [`AddConnections`](#Model.AddConnections)                                                     | Creates a new Connections                                                                                                    |
| [`AddConstructionGeometry`](#Model.AddConstructionGeometry)                                   | Creates a new ConstructionGeometry                                                                                           |
| [`AddAMProcess`](#Model.AddAMProcess)                                                         | Creates a new AMProcess                                                                                                      |
| [`AddFracture`](#Model.AddFracture)                                                           | Creates a new Fracture                                                                                                       |
| [`AddGeometryImportGroup`](#Model.AddGeometryImportGroup)                                     | Get the                                                                                                                      |
| [`AddTableGroup`](#Model.AddTableGroup)                                                       | Get the                                                                                                                      |
| [`AddMeshEdit`](#Model.AddMeshEdit)                                                           | Creates a new MeshEdit                                                                                                       |
| [`AddMeshNumbering`](#Model.AddMeshNumbering)                                                 | Creates a new MeshNumbering                                                                                                  |
| [`AddSymmetry`](#Model.AddSymmetry)                                                           | Creates a new Symmetry                                                                                                       |
| [`AddVirtualTopology`](#Model.AddVirtualTopology)                                             | Creates a new VirtualTopology                                                                                                |
| [`AddCoSimulationPin`](#Model.AddCoSimulationPin)                                             | Creates a new CoSimulationPin                                                                                                |
| [`AddImagePlane`](#Model.AddImagePlane)                                                       | Creates an ImagePlane and adds it as a child of this object.                                                                 |
| [`EvaluateScriptDefinedResults`](#Model.EvaluateScriptDefinedResults)                         | EvaluateScriptDefinedResults method.                                                                                         |
| [`AddTreeGroupingFolder`](#id2)                                                               | Move the Data Model Objects to a new TreeGroupingFolder.                                                                     |
| [`AddTreeGroupingFolder`](#id2)                                                               | Move the Data Model Object to a new TreeGroupingFolder.                                                                      |
| [`CenterOfMass`](#Model.CenterOfMass)                                                         | Calculates the center of mass of all unsupressed bodies and point masses.                                                    |
| [`AddFatigueCombination`](#Model.AddFatigueCombination)                                       | Creates a new FatigueCombination                                                                                             |
| [`AddFeatureDetection`](#Model.AddFeatureDetection)                                           | Creates a new FeatureDetection                                                                                               |
| [`AddPythonCodeEventBased`](#Model.AddPythonCodeEventBased)                                   | Creates a new PythonCodeEventBased                                                                                           |
| [`AddPythonResult`](#Model.AddPythonResult)                                                   | Creates a new PythonResult                                                                                                   |
| [`AddSolutionCombination`](#Model.AddSolutionCombination)                                     | Creates a new SolutionCombination                                                                                            |
| [`GetChildren`](#id3)                                                                         | Gets the list of children, filtered by type.                                                                                 |
| [`GetChildren`](#id3)                                                                         | Gets the list of children, filtered by type.                                                                                 |
| [`AddComment`](#Model.AddComment)                                                             | Creates a new child Comment.                                                                                                 |
| [`AddFigure`](#Model.AddFigure)                                                               | Creates a new child Figure.                                                                                                  |
| [`AddImage`](#Model.AddImage)                                                                 | Creates a new child Image.                                                                                                   |
| [`Activate`](#Model.Activate)                                                                 | Activate the current object.                                                                                                 |
| [`CopyTo`](#Model.CopyTo)                                                                     | Copies all visible properties from this object to another.                                                                   |
| [`Duplicate`](#Model.Duplicate)                                                               | Creates a copy of the current DataModelObject.                                                                               |
| [`GroupAllSimilarChildren`](#Model.GroupAllSimilarChildren)                                   | Run the GroupAllSimilarChildren action.                                                                                      |
| [`GroupSimilarObjects`](#Model.GroupSimilarObjects)                                           | Run the GroupSimilarObjects action.                                                                                          |
| [`PropertyByName`](#Model.PropertyByName)                                                     | Get a property by its unique name.                                                                                           |
| [`PropertyByAPIName`](#Model.PropertyByAPIName)                                               | Get a property by its API name.                                                                                              |
| [`CreateParameter`](#Model.CreateParameter)                                                   | Creates a new parameter for a Property.                                                                                      |
| [`GetParameter`](#Model.GetParameter)                                                         | Gets the parameter corresponding to the given property.                                                                      |
| [`RemoveParameter`](#Model.RemoveParameter)                                                   | Removes the parameter from the parameter set corresponding to the given property.                                            |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Environments`](#Model.Environments)                                                                               | Gets the Analyses.                                                                                                                                                                                                                                                                                            |
| [`CellId`](#Model.CellId)                                                                                           | Gets the CellId.                                                                                                                                                                                                                                                                                              |
| [`SystemCaption`](#Model.SystemCaption)                                                                             | Gets the SystemCaption.                                                                                                                                                                                                                                                                                       |
| [`AEDTImportManager`](#Model.AEDTImportManager)                                                                     | Get the manager for manipulating import settings for AEDT files.                                                                                                                                                                                                                                              |
| [`TableGroup`](TableGroup.md#TableGroup)                                                                            | Gets the TableGroup.                                                                                                                                                                                                                                                                                          |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                            |
| [`Ambient`](#Model.Ambient)                                                                                         | Gets or sets the Ambient Lighting factor.                                                                                                                                                                                                                                                                     |
| [`Color`](#Model.Color)                                                                                             | Gets or sets the Lighting Color. Can also be set using Hex color codes; three byte hexadecimal numbers (consisting of six digits) preceded by ‘0x’, where each byte (or pair of characters in the Hex code) represents the intensity of red, green and blue in the color respectively. For example, 0xFFFFFF. |
| [`Diffuse`](#Model.Diffuse)                                                                                         | Gets or sets the Diffuse Lighting factor.                                                                                                                                                                                                                                                                     |
| [`Control`](../../Mechanical/AdditionalProperties/Control.md#Control)                                               | Gets the Control.                                                                                                                                                                                                                                                                                             |
| [`Specular`](#Model.Specular)                                                                                       | Gets or sets the Specular Lighting factor.                                                                                                                                                                                                                                                                    |
| [`AMProcess`](AdditiveManufacturing/AMProcess.md#AMProcess)                                                         | Gets the AMProcess.                                                                                                                                                                                                                                                                                           |
| [`NamedSelections`](NamedSelections.md#NamedSelections)                                                             | Gets the NamedSelections.                                                                                                                                                                                                                                                                                     |
| [`CondensedGeometry`](CondensedGeometry.md#CondensedGeometry)                                                       | Gets the CondensedGeometry.                                                                                                                                                                                                                                                                                   |
| [`ConstructionGeometry`](ConstructionGeometry.md#ConstructionGeometry)                                              | Gets the ConstructionGeometry.                                                                                                                                                                                                                                                                                |
| [`Connections`](Connections/Connections.md#Connections)                                                             | Gets the Connections.                                                                                                                                                                                                                                                                                         |
| [`CoordinateSystems`](CoordinateSystems.md#CoordinateSystems)                                                       | Gets the CoordinateSystems.                                                                                                                                                                                                                                                                                   |
| [`CrossSections`](CrossSections.md#CrossSections)                                                                   | Gets the CrossSections.                                                                                                                                                                                                                                                                                       |
| [`FeatureDetection`](FeatureDetection.md#FeatureDetection)                                                          | Gets the FeatureDetection.                                                                                                                                                                                                                                                                                    |
| [`Fracture`](Fracture.md#Fracture)                                                                                  | Gets the Fracture.                                                                                                                                                                                                                                                                                            |
| [`GeometryImportGroup`](GeometryImportGroup.md#GeometryImportGroup)                                                 | Gets the GeometryImportGroup.                                                                                                                                                                                                                                                                                 |
| [`Materials`](Materials.md#Materials)                                                                               | Gets the Materials.                                                                                                                                                                                                                                                                                           |
| [`Measures`](Measures.md#Measures)                                                                                  | Gets the Measures.                                                                                                                                                                                                                                                                                            |
| [`MeshEdit`](MeshEdit.md#MeshEdit)                                                                                  | Gets the MeshEdit.                                                                                                                                                                                                                                                                                            |
| [`Mesh`](MeshControls/Mesh.md#Mesh)                                                                                 | Gets the Mesh.                                                                                                                                                                                                                                                                                                |
| [`MeshNumbering`](MeshNumbering.md#MeshNumbering)                                                                   | Gets the MeshNumbering.                                                                                                                                                                                                                                                                                       |
| [`PartTransformGroup`](PartTransformGroup.md#PartTransformGroup)                                                    | Gets the PartTransformGroup.                                                                                                                                                                                                                                                                                  |
| [`Geometry`](Geometry.md#Geometry)                                                                                  | Gets the Geometry.                                                                                                                                                                                                                                                                                            |
| [`RemotePoints`](RemotePoints.md#RemotePoints)                                                                      | Gets the RemotePoints.                                                                                                                                                                                                                                                                                        |
| [`Symmetry`](Symmetry.md#Symmetry)                                                                                  | Gets the Symmetry.                                                                                                                                                                                                                                                                                            |
| [`VirtualTopology`](VirtualTopology.md#VirtualTopology)                                                             | Gets the VirtualTopology.                                                                                                                                                                                                                                                                                     |
| [`Analyses`](#Model.Analyses)                                                                                       | Gets the Analyses.                                                                                                                                                                                                                                                                                            |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                                                                                                                                                                  |
| [`Children`](#Model.Children)                                                                                       | Gets the list of children.                                                                                                                                                                                                                                                                                    |
| [`Comments`](#Model.Comments)                                                                                       | Gets the list of associated comments.                                                                                                                                                                                                                                                                         |
| [`Figures`](#Model.Figures)                                                                                         | Gets the list of associated figures.                                                                                                                                                                                                                                                                          |
| [`Images`](#Model.Images)                                                                                           | Gets the list of associated images.                                                                                                                                                                                                                                                                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                            |
| [`Properties`](#Model.Properties)                                                                                   | Gets the list of properties for this object.                                                                                                                                                                                                                                                                  |
| [`VisibleProperties`](#Model.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                                 |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Model
```

<a id="property-detail"></a>

## Property detail

<a id="Model.Environments"></a>

### *property* Model.Environments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Analyses.

<!-- !! processed by numpydoc !! -->

<a id="Model.CellId"></a>

### *property* Model.CellId *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CellId.

<!-- !! processed by numpydoc !! -->

<a id="Model.SystemCaption"></a>

### *property* Model.SystemCaption *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SystemCaption.

<!-- !! processed by numpydoc !! -->

<a id="Model.AEDTImportManager"></a>

### *property* Model.AEDTImportManager *: Ansys.ACT.Automation.Mechanical.AEDTImportManager | [None](https://docs.python.org/3/library/constants.html#None)*

Get the manager for manipulating import settings for AEDT files.

<!-- !! processed by numpydoc !! -->

<a id="Model.TableGroup"></a>

### *property* Model.TableGroup *: [Ansys.ACT.Automation.Mechanical.TableGroup](TableGroup.md#TableGroup) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TableGroup.

<!-- !! processed by numpydoc !! -->

<a id="Model.InternalObject"></a>

### *property* Model.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSModelAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Model.Ambient"></a>

### *property* Model.Ambient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ambient Lighting factor.

<!-- !! processed by numpydoc !! -->

<a id="Model.Color"></a>

### *property* Model.Color *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Lighting Color. Can also be set using Hex color codes; three byte hexadecimal numbers (consisting of six digits) preceded by ‘0x’, where each byte (or pair of characters in the Hex code) represents the intensity of red, green and blue in the color respectively. For example, 0xFFFFFF.

<!-- !! processed by numpydoc !! -->

<a id="Model.Diffuse"></a>

### *property* Model.Diffuse *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Diffuse Lighting factor.

<!-- !! processed by numpydoc !! -->

<a id="Model.Control"></a>

### *property* Model.Control *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Control.

<!-- !! processed by numpydoc !! -->

<a id="Model.Specular"></a>

### *property* Model.Specular *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Specular Lighting factor.

<!-- !! processed by numpydoc !! -->

<a id="Model.AMProcess"></a>

### *property* Model.AMProcess *: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMProcess](AdditiveManufacturing/AMProcess.md#AMProcess) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AMProcess.

<!-- !! processed by numpydoc !! -->

<a id="Model.NamedSelections"></a>

### *property* Model.NamedSelections *: [Ansys.ACT.Automation.Mechanical.NamedSelections](NamedSelections.md#NamedSelections) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="Model.CondensedGeometry"></a>

### *property* Model.CondensedGeometry *: [Ansys.ACT.Automation.Mechanical.CondensedGeometry](CondensedGeometry.md#CondensedGeometry) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CondensedGeometry.

<!-- !! processed by numpydoc !! -->

<a id="Model.ConstructionGeometry"></a>

### *property* Model.ConstructionGeometry *: [Ansys.ACT.Automation.Mechanical.ConstructionGeometry](ConstructionGeometry.md#ConstructionGeometry) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ConstructionGeometry.

<!-- !! processed by numpydoc !! -->

<a id="Model.Connections"></a>

### *property* Model.Connections *: [Ansys.ACT.Automation.Mechanical.Connections.Connections](Connections/Connections.md#Connections) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

<a id="Model.CoordinateSystems"></a>

### *property* Model.CoordinateSystems *: [Ansys.ACT.Automation.Mechanical.CoordinateSystems](CoordinateSystems.md#CoordinateSystems) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CoordinateSystems.

<!-- !! processed by numpydoc !! -->

<a id="Model.CrossSections"></a>

### *property* Model.CrossSections *: [Ansys.ACT.Automation.Mechanical.CrossSections](CrossSections.md#CrossSections) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSections.

<!-- !! processed by numpydoc !! -->

<a id="Model.FeatureDetection"></a>

### *property* Model.FeatureDetection *: [Ansys.ACT.Automation.Mechanical.FeatureDetection](FeatureDetection.md#FeatureDetection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FeatureDetection.

<!-- !! processed by numpydoc !! -->

<a id="Model.Fracture"></a>

### *property* Model.Fracture *: [Ansys.ACT.Automation.Mechanical.Fracture](Fracture.md#Fracture) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Fracture.

<!-- !! processed by numpydoc !! -->

<a id="Model.GeometryImportGroup"></a>

### *property* Model.GeometryImportGroup *: [Ansys.ACT.Automation.Mechanical.GeometryImportGroup](GeometryImportGroup.md#GeometryImportGroup) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the GeometryImportGroup.

<!-- !! processed by numpydoc !! -->

<a id="Model.Materials"></a>

### *property* Model.Materials *: [Ansys.ACT.Automation.Mechanical.Materials](Materials.md#Materials) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Materials.

<!-- !! processed by numpydoc !! -->

<a id="Model.Measures"></a>

### *property* Model.Measures *: [Ansys.ACT.Automation.Mechanical.Measures](Measures.md#Measures) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Measures.

<!-- !! processed by numpydoc !! -->

<a id="Model.MeshEdit"></a>

### *property* Model.MeshEdit *: [Ansys.ACT.Automation.Mechanical.MeshEdit](MeshEdit.md#MeshEdit) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshEdit.

<!-- !! processed by numpydoc !! -->

<a id="Model.Mesh"></a>

### *property* Model.Mesh *: [Ansys.ACT.Automation.Mechanical.MeshControls.Mesh](MeshControls/Mesh.md#Mesh) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Model.MeshNumbering"></a>

### *property* Model.MeshNumbering *: [Ansys.ACT.Automation.Mechanical.MeshNumbering](MeshNumbering.md#MeshNumbering) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshNumbering.

<!-- !! processed by numpydoc !! -->

<a id="Model.PartTransformGroup"></a>

### *property* Model.PartTransformGroup *: [Ansys.ACT.Automation.Mechanical.PartTransformGroup](PartTransformGroup.md#PartTransformGroup) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PartTransformGroup.

<!-- !! processed by numpydoc !! -->

<a id="Model.Geometry"></a>

### *property* Model.Geometry *: [Ansys.ACT.Automation.Mechanical.Geometry](Geometry.md#Geometry) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="Model.RemotePoints"></a>

### *property* Model.RemotePoints *: [Ansys.ACT.Automation.Mechanical.RemotePoints](RemotePoints.md#RemotePoints) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RemotePoints.

<!-- !! processed by numpydoc !! -->

<a id="Model.Symmetry"></a>

### *property* Model.Symmetry *: [Ansys.ACT.Automation.Mechanical.Symmetry](Symmetry.md#Symmetry) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Symmetry.

<!-- !! processed by numpydoc !! -->

<a id="Model.VirtualTopology"></a>

### *property* Model.VirtualTopology *: [Ansys.ACT.Automation.Mechanical.VirtualTopology](VirtualTopology.md#VirtualTopology) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualTopology.

<!-- !! processed by numpydoc !! -->

<a id="Model.Analyses"></a>

### *property* Model.Analyses *: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Analyses.

<!-- !! processed by numpydoc !! -->

<a id="Model.DataModelObjectCategory"></a>

### *property* Model.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Model.Children"></a>

### *property* Model.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Model.Comments"></a>

### *property* Model.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Model.Figures"></a>

### *property* Model.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Model.Images"></a>

### *property* Model.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Model.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Model.Properties"></a>

### *property* Model.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Model.VisibleProperties"></a>

### *property* Model.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Model.CreateCylindricalBolt"></a>

### Model.CreateCylindricalBolt(headHeight: System.Object, headRadius: System.Object, shankLength: System.Object, shankRadius: System.Object)

Create bolt with a cylinder head based on the specified dimensions. The bolt will be
created so that the base of the head is at the origin and aligned with the Y-Z plane.
Valid input arguments include:

> 1. double
> 2. Quantity
> 3. A string representation of double or Quantity, i.e., “1.0” or “1.0 [cm]”
<!-- !! processed by numpydoc !! -->

<a id="Model.CreateCylindricalNut"></a>

### Model.CreateCylindricalNut(height: System.Object, innerRadius: System.Object, outerRadius: System.Object)

Create a cylindrical nut with the specified dimensions. The nut will be created so that
the base of the nut is at the origin and aligned with the Y-Z plane.
Valid input arguments include:

> 1. double
> 2. Quantity
> 3. A string representation of double or Quantity, i.e., “1.0” or “1.0 [cm]”
<!-- !! processed by numpydoc !! -->

<a id="Model.CreateHexBolt"></a>

### Model.CreateHexBolt(headHeight: System.Object, wrenchWidth: System.Object, shankLength: System.Object, shankRadius: System.Object)

Create a bolt with a hex head based on the specified dimensions. The bolt will be
created so that the base of the head is at the origin and aligned with the Y-Z plane.
Valid input arguments include:

> 1. double
> 2. Quantity
> 3. A string representation of double or Quantity, i.e., “1.0” or “1.0 [cm]”
<!-- !! processed by numpydoc !! -->

<a id="Model.CreateHexNut"></a>

### Model.CreateHexNut(height: System.Object, innerRadius: System.Object, wrenchWidth: System.Object)

Create a hex nut with the specified dimensions. The nut will be created so that the
base of the nut is at the origin and aligned with the Y-Z plane.
Valid input arguments include:

> 1. double
> 2. Quantity
> 3. A string representation of double or Quantity, i.e., “1.0” or “1.0 [cm]”
<!-- !! processed by numpydoc !! -->

<a id="Model.CreatePartInstance"></a>

### Model.CreatePartInstance(part: Ansys.ACT.Interfaces.Geometry.IGeoPart)

This will create an instance (not an independent copy) of the provided part. The use of
instanced parts for replication is highly recommended for memory and performance
reasons.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetTransformationOnPart"></a>

### Model.GetTransformationOnPart(part: Ansys.ACT.Interfaces.Geometry.IGeoPart)

Get the transformation matrix of the provided part.

<!-- !! processed by numpydoc !! -->

<a id="Model.SetTransformationOnPart"></a>

### Model.SetTransformationOnPart(part: Ansys.ACT.Interfaces.Geometry.IGeoPart, transformationMatrix: [Ansys.Mechanical.DataModel.Utilities.RigidBodyTransformationMatrix](../../../Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix))

Transform a part with given transformation. Only rigid body transformation is
supported, i.e., no scaling will be performed. The validity of “transformationMatrix”
will be checked against the constraints of rigid body transforms; an error will be
emitted if the matrix is ill-formed.

<!-- !! processed by numpydoc !! -->

<a id="Model.ClearGeneratedData"></a>

### Model.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddRemotePoint"></a>

### Model.AddRemotePoint()

Creates a new child RemotePoint.

<!-- !! processed by numpydoc !! -->

<a id="Model.Solve"></a>

### Model.Solve(wait: System.Boolean, config: System.String)

Run the Solve action.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Model.Solve(wait: System.Boolean, config: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveConfiguration](../../Mechanical/Application/SolveProcessSettings/SolveConfiguration.md#SolveConfiguration))

Run the Solve action.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetResults"></a>

### Model.GetResults()

Gets the Results from the server.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddStaticStructuralAnalysis"></a>

### Model.AddStaticStructuralAnalysis()

Run the AddStaticStructuralAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddTransientStructuralAnalysis"></a>

### Model.AddTransientStructuralAnalysis()

Run the AddTransientStructuralAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddRigidDynamicsAnalysis"></a>

### Model.AddRigidDynamicsAnalysis()

Run the AddRigidDynamicsAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddHarmonicResponseAnalysis"></a>

### Model.AddHarmonicResponseAnalysis()

Run the AddHarmonicResponseAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddModalAnalysis"></a>

### Model.AddModalAnalysis()

Run the AddModalAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddSubstructureGenerationAnalysis"></a>

### Model.AddSubstructureGenerationAnalysis()

Run the AddSubstructureGenerationAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddExplicitDynamicsAnalysis"></a>

### Model.AddExplicitDynamicsAnalysis()

Run the AddExplicitDynamicsAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddSteadyStateThermalAnalysis"></a>

### Model.AddSteadyStateThermalAnalysis()

Run the AddSteadyStateThermalAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddTransientThermalAnalysis"></a>

### Model.AddTransientThermalAnalysis()

Run the AddTransientThermalAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddMagnetostaticAnalysis"></a>

### Model.AddMagnetostaticAnalysis()

Run the AddMagnetostaticAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddElectricAnalysis"></a>

### Model.AddElectricAnalysis()

Run the AddElectricAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddDesignAssessmentAnalysis"></a>

### Model.AddDesignAssessmentAnalysis()

Run the AddDesignAssessmentAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddThermalElectricAnalysis"></a>

### Model.AddThermalElectricAnalysis()

Run the AddThermalElectricAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddModalAcousticAnalysis"></a>

### Model.AddModalAcousticAnalysis()

Run the AddModalAcousticAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddHarmonicAcousticAnalysis"></a>

### Model.AddHarmonicAcousticAnalysis()

Run the AddHarmonicAcousticAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddStaticAcousticAnalysis"></a>

### Model.AddStaticAcousticAnalysis()

Run the AddStaticAcousticAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddTopologyOptimizationAnalysis"></a>

### Model.AddTopologyOptimizationAnalysis()

Run the AddTopologyOptimizationAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddEigenvalueBucklingAnalysis"></a>

### Model.AddEigenvalueBucklingAnalysis()

Run the AddEigenvalueBucklingAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddResponseSpectrumAnalysis"></a>

### Model.AddResponseSpectrumAnalysis()

Run the AddResponseSpectrumAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddRandomVibrationAnalysis"></a>

### Model.AddRandomVibrationAnalysis()

Run the AddRandomVibrationAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCoupledFieldStatic"></a>

### Model.AddCoupledFieldStatic()

Run the AddCoupledFieldStatic action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCoupledFieldTransient"></a>

### Model.AddCoupledFieldTransient()

Run the AddCoupledFieldTransient action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCoupledFieldHarmonic"></a>

### Model.AddCoupledFieldHarmonic()

Run the AddCoupledFieldHarmonic action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCoupledFieldModal"></a>

### Model.AddCoupledFieldModal()

Run the AddCoupledFieldModal action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddLSDynaAnalysis"></a>

### Model.AddLSDynaAnalysis()

Run the AddLSDynaAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddLSDynaRestartAnalysis"></a>

### Model.AddLSDynaRestartAnalysis()

Run the AddLSDynaRestartAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddMotionAnalysis"></a>

### Model.AddMotionAnalysis()

Run the AddMotionAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddDesignLifeAnalysis"></a>

### Model.AddDesignLifeAnalysis()

Run the AddDesignLifeAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddForcedResponseAnalysis"></a>

### Model.AddForcedResponseAnalysis()

Run the AddForcedResponseAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.UpdateGeometryFromSource"></a>

### Model.UpdateGeometryFromSource()

Run the UpdateGeometryFromSource action.

<!-- !! processed by numpydoc !! -->

<a id="Model.RefreshMaterials"></a>

### Model.RefreshMaterials()

Run the RefresMaterials action.

<!-- !! processed by numpydoc !! -->

<a id="Model.LoadResultFile"></a>

### Model.LoadResultFile(filePath: System.String)

Creates a results-only system and loads the result file.

<!-- !! processed by numpydoc !! -->

<a id="Model.AutoFilter"></a>

### Model.AutoFilter()

Enables interface filtering that only displays model-level items applicable to the
: particular analysis type environments in which you are working.

<!-- !! processed by numpydoc !! -->

<a id="Model.DisableFilter"></a>

### Model.DisableFilter()

Disables interface filtering so that model-level items are not filtered out based on
: the environment types in your model.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddNamedSelectionFromSelectedConnections"></a>

### Model.AddNamedSelectionFromSelectedConnections()

Creates a new Named Selections (Components) for the selected connections.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddNamedSelection"></a>

### Model.AddNamedSelection()

Creates a new child NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddPartTransform"></a>

### Model.AddPartTransform()

Creates a new child PartTransform.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetFECommandsRepository"></a>

### Model.GetFECommandsRepository(source: System.String, fileIdentifier: System.String)

Gets the commands repository for a file from external model.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddChart"></a>

### Model.AddChart()

Creates a new child Chart.

<!-- !! processed by numpydoc !! -->

<a id="Model.DeleteParts"></a>

### Model.DeleteParts(parts: System.Object)

Deletes the provide parts if they exist. Otherwise, nothing happens. An exception will be issued if the argument is invalid.

<!-- !! processed by numpydoc !! -->

<a id="Model.FreezeMeshOnSelectedParts"></a>

### Model.FreezeMeshOnSelectedParts(parts: System.Object)

Run the FreezeMeshOnSelectedParts action.

<!-- !! processed by numpydoc !! -->

<a id="Model.UnfreezeMeshOnSelectedParts"></a>

### Model.UnfreezeMeshOnSelectedParts(parts: System.Object)

Run the UnfreezeMeshOnSelectedParts action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCondensedGeometry"></a>

### Model.AddCondensedGeometry()

Creates a new CondensedGeometry

<!-- !! processed by numpydoc !! -->

<a id="Model.AddMeasures"></a>

### Model.AddMeasures()

Creates a new Measures

<!-- !! processed by numpydoc !! -->

<a id="Model.AddConnections"></a>

### Model.AddConnections()

Creates a new Connections

<!-- !! processed by numpydoc !! -->

<a id="Model.AddConstructionGeometry"></a>

### Model.AddConstructionGeometry()

Creates a new ConstructionGeometry

<!-- !! processed by numpydoc !! -->

<a id="Model.AddAMProcess"></a>

### Model.AddAMProcess()

Creates a new AMProcess

<!-- !! processed by numpydoc !! -->

<a id="Model.AddFracture"></a>

### Model.AddFracture()

Creates a new Fracture

<!-- !! processed by numpydoc !! -->

<a id="Model.AddGeometryImportGroup"></a>

### Model.AddGeometryImportGroup()

Get the

<!-- !! processed by numpydoc !! -->

<a id="Model.AddTableGroup"></a>

### Model.AddTableGroup(activate: System.Boolean)

Get the

<!-- !! processed by numpydoc !! -->

<a id="Model.AddMeshEdit"></a>

### Model.AddMeshEdit()

Creates a new MeshEdit

<!-- !! processed by numpydoc !! -->

<a id="Model.AddMeshNumbering"></a>

### Model.AddMeshNumbering()

Creates a new MeshNumbering

<!-- !! processed by numpydoc !! -->

<a id="Model.AddSymmetry"></a>

### Model.AddSymmetry()

Creates a new Symmetry

<!-- !! processed by numpydoc !! -->

<a id="Model.AddVirtualTopology"></a>

### Model.AddVirtualTopology()

Creates a new VirtualTopology

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCoSimulationPin"></a>

### Model.AddCoSimulationPin()

Creates a new CoSimulationPin

<!-- !! processed by numpydoc !! -->

<a id="Model.AddImagePlane"></a>

### Model.AddImagePlane()

Creates an ImagePlane and adds it as a child of this object.

<!-- !! processed by numpydoc !! -->

<a id="Model.EvaluateScriptDefinedResults"></a>

### Model.EvaluateScriptDefinedResults()

EvaluateScriptDefinedResults method.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddTreeGroupingFolder"></a>

### Model.AddTreeGroupingFolder(dataModelObjects: System.Collections.IEnumerable)

Move the Data Model Objects to a new TreeGroupingFolder.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### Model.AddTreeGroupingFolder(dataModelObject: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Move the Data Model Object to a new TreeGroupingFolder.

<!-- !! processed by numpydoc !! -->

<a id="Model.CenterOfMass"></a>

### Model.CenterOfMass()

Calculates the center of mass of all unsupressed bodies and point masses.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddFatigueCombination"></a>

### Model.AddFatigueCombination()

Creates a new FatigueCombination

<!-- !! processed by numpydoc !! -->

<a id="Model.AddFeatureDetection"></a>

### Model.AddFeatureDetection()

Creates a new FeatureDetection

<!-- !! processed by numpydoc !! -->

<a id="Model.AddPythonCodeEventBased"></a>

### Model.AddPythonCodeEventBased()

Creates a new PythonCodeEventBased

<!-- !! processed by numpydoc !! -->

<a id="Model.AddPythonResult"></a>

### Model.AddPythonResult()

Creates a new PythonResult

<!-- !! processed by numpydoc !! -->

<a id="Model.AddSolutionCombination"></a>

### Model.AddSolutionCombination()

Creates a new SolutionCombination

<!-- !! processed by numpydoc !! -->

<a id="Model.GetChildren"></a>

### Model.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id3"></a>

### Model.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddComment"></a>

### Model.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddFigure"></a>

### Model.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddImage"></a>

### Model.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Model.Activate"></a>

### Model.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Model.CopyTo"></a>

### Model.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Model.Duplicate"></a>

### Model.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Model.GroupAllSimilarChildren"></a>

### Model.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Model.GroupSimilarObjects"></a>

### Model.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Model.PropertyByName"></a>

### Model.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Model.PropertyByAPIName"></a>

### Model.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Model.CreateParameter"></a>

### Model.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetParameter"></a>

### Model.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Model.RemoveParameter"></a>

### Model.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
