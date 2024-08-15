# `Model`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Model

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Model.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| `CreateCylindricalBolt`                    | Create bolt with a cylinder head based on the specified dimensions. The bolt will be                                         |
| `CreateCylindricalNut`                     | Create a cylindrical nut with the specified dimensions. The nut will be created so that                                      |
| `CreateHexBolt`                            | Create a bolt with a hex head based on the specified dimensions. The bolt will be                                            |
| `CreateHexNut`                             | Create a hex nut with the specified dimensions. The nut will be created so that the                                          |
| `CreatePartInstance`                       | This will create an instance (not an independent copy) of the provided part. The use of                                      |
| `GetTransformationOnPart`                  | Get the transformation matrix of the provided part.                                                                          |
| `SetTransformationOnPart`                  | Transform a part with given transformation. Only rigid body transformation is                                                |
| `ClearGeneratedData`                       | Run the ClearGeneratedData action.                                                                                           |
| `AddRemotePoint`                           | Creates a new child RemotePoint.                                                                                             |
| `Solve`                                    | Run the Solve action.                                                                                                        |
| `Solve`                                    | Run the Solve action.                                                                                                        |
| `GetResults`                               | Gets the Results from the server.                                                                                            |
| `AddStaticStructuralAnalysis`              | Run the AddStaticStructuralAnalysis action.                                                                                  |
| `AddTransientStructuralAnalysis`           | Run the AddTransientStructuralAnalysis action.                                                                               |
| `AddRigidDynamicsAnalysis`                 | Run the AddRigidDynamicsAnalysis action.                                                                                     |
| `AddHarmonicResponseAnalysis`              | Run the AddHarmonicResponseAnalysis action.                                                                                  |
| `AddModalAnalysis`                         | Run the AddModalAnalysis action.                                                                                             |
| `AddSubstructureGenerationAnalysis`        | Run the AddSubstructureGenerationAnalysis action.                                                                            |
| `AddExplicitDynamicsAnalysis`              | Run the AddExplicitDynamicsAnalysis action.                                                                                  |
| `AddSteadyStateThermalAnalysis`            | Run the AddSteadyStateThermalAnalysis action.                                                                                |
| `AddTransientThermalAnalysis`              | Run the AddTransientThermalAnalysis action.                                                                                  |
| `AddMagnetostaticAnalysis`                 | Run the AddMagnetostaticAnalysis action.                                                                                     |
| `AddElectricAnalysis`                      | Run the AddElectricAnalysis action.                                                                                          |
| `AddDesignAssessmentAnalysis`              | Run the AddDesignAssessmentAnalysis action.                                                                                  |
| `AddThermalElectricAnalysis`               | Run the AddThermalElectricAnalysis action.                                                                                   |
| `AddModalAcousticAnalysis`                 | Run the AddModalAcousticAnalysis action.                                                                                     |
| `AddHarmonicAcousticAnalysis`              | Run the AddHarmonicAcousticAnalysis action.                                                                                  |
| `AddStaticAcousticAnalysis`                | Run the AddStaticAcousticAnalysis action.                                                                                    |
| `AddTopologyOptimizationAnalysis`          | Run the AddTopologyOptimizationAnalysis action.                                                                              |
| `AddEigenvalueBucklingAnalysis`            | Run the AddEigenvalueBucklingAnalysis action.                                                                                |
| `AddResponseSpectrumAnalysis`              | Run the AddResponseSpectrumAnalysis action.                                                                                  |
| `AddRandomVibrationAnalysis`               | Run the AddRandomVibrationAnalysis action.                                                                                   |
| `AddCoupledFieldStatic`                    | Run the AddCoupledFieldStatic action.                                                                                        |
| `AddCoupledFieldTransient`                 | Run the AddCoupledFieldTransient action.                                                                                     |
| `AddCoupledFieldHarmonic`                  | Run the AddCoupledFieldHarmonic action.                                                                                      |
| `AddCoupledFieldModal`                     | Run the AddCoupledFieldModal action.                                                                                         |
| `AddLSDynaAnalysis`                        | Run the AddLSDynaAnalysis action.                                                                                            |
| `AddLSDynaRestartAnalysis`                 | Run the AddLSDynaRestartAnalysis action.                                                                                     |
| `AddMotionAnalysis`                        | Run the AddMotionAnalysis action.                                                                                            |
| `AddDesignLifeAnalysis`                    | Run the AddDesignLifeAnalysis action.                                                                                        |
| `AddForcedResponseAnalysis`                | Run the AddForcedResponseAnalysis action.                                                                                    |
| `UpdateGeometryFromSource`                 | Run the UpdateGeometryFromSource action.                                                                                     |
| `RefreshMaterials`                         | Run the RefresMaterials action.                                                                                              |
| `LoadResultFile`                           | Creates a results-only system and loads the result file.                                                                     |
| `AutoFilter`                               | Enables interface filtering that only displays model-level items applicable to the                                           |
| `DisableFilter`                            | Disables interface filtering so that model-level items are not filtered out based on                                         |
| `AddNamedSelectionFromSelectedConnections` | Creates a new Named Selections (Components) for the selected connections.                                                    |
| `AddNamedSelection`                        | Creates a new child NamedSelection.                                                                                          |
| `AddPartTransform`                         | Creates a new child PartTransform.                                                                                           |
| `GetFECommandsRepository`                  | Gets the commands repository for a file from external model.                                                                 |
| `AddChart`                                 | Creates a new child Chart.                                                                                                   |
| `DeleteParts`                              | Deletes the provide parts if they exist. Otherwise, nothing happens. An exception will be issued if the argument is invalid. |
| `FreezeMeshOnSelectedParts`                | Run the FreezeMeshOnSelectedParts action.                                                                                    |
| `UnfreezeMeshOnSelectedParts`              | Run the UnfreezeMeshOnSelectedParts action.                                                                                  |
| `AddCondensedGeometry`                     | Creates a new CondensedGeometry                                                                                              |
| `AddMeasures`                              | Creates a new Measures                                                                                                       |
| `AddConnections`                           | Creates a new Connections                                                                                                    |
| `AddConstructionGeometry`                  | Creates a new ConstructionGeometry                                                                                           |
| `AddAMProcess`                             | Creates a new AMProcess                                                                                                      |
| `AddFracture`                              | Creates a new Fracture                                                                                                       |
| `AddGeometryImportGroup`                   | Get the                                                                                                                      |
| `AddTableGroup`                            | Get the                                                                                                                      |
| `AddMeshEdit`                              | Creates a new MeshEdit                                                                                                       |
| `AddMeshNumbering`                         | Creates a new MeshNumbering                                                                                                  |
| `AddSymmetry`                              | Creates a new Symmetry                                                                                                       |
| `AddVirtualTopology`                       | Creates a new VirtualTopology                                                                                                |
| `AddCoSimulationPin`                       | Creates a new CoSimulationPin                                                                                                |
| `AddImagePlane`                            | Creates an ImagePlane and adds it as a child of this object.                                                                 |
| `EvaluateScriptDefinedResults`             | EvaluateScriptDefinedResults method.                                                                                         |
| `AddTreeGroupingFolder`                    | Move the Data Model Objects to a new TreeGroupingFolder.                                                                     |
| `AddTreeGroupingFolder`                    | Move the Data Model Object to a new TreeGroupingFolder.                                                                      |
| `CenterOfMass`                             | Calculates the center of mass of all unsupressed bodies and point masses.                                                    |
| `AddCompositeFailureCriteria`              | Creates a new Composite Failure Criteria object.                                                                             |
| `AddFatigueCombination`                    | Creates a new FatigueCombination                                                                                             |
| `AddFeatureDetection`                      | Creates a new FeatureDetection                                                                                               |
| `AddPythonCodeEventBased`                  | Creates a new PythonCodeEventBased                                                                                           |
| `AddPythonResult`                          | Creates a new PythonResult                                                                                                   |
| `AddSolutionCombination`                   | Creates a new SolutionCombination                                                                                            |
| `GetChildren`                              | Gets the list of children, filtered by type.                                                                                 |
| `GetChildren`                              | Gets the list of children, filtered by type.                                                                                 |
| `AddComment`                               | Creates a new child Comment.                                                                                                 |
| `AddFigure`                                | Creates a new child Figure.                                                                                                  |
| `AddImage`                                 | Creates a new child Image.                                                                                                   |
| `Activate`                                 | Activate the current object.                                                                                                 |
| `CopyTo`                                   | Copies all visible properties from this object to another.                                                                   |
| `Duplicate`                                | Creates a copy of the current DataModelObject.                                                                               |
| `GroupAllSimilarChildren`                  | Run the GroupAllSimilarChildren action.                                                                                      |
| `GroupSimilarObjects`                      | Run the GroupSimilarObjects action.                                                                                          |
| `PropertyByName`                           | Get a property by its unique name.                                                                                           |
| `PropertyByAPIName`                        | Get a property by its API name.                                                                                              |
| `CreateParameter`                          | Creates a new parameter for a Property.                                                                                      |
| `GetParameter`                             | Gets the parameter corresponding to the given property.                                                                      |
| `RemoveParameter`                          | Removes the parameter from the parameter set corresponding to the given property.                                            |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Environments`            | Gets the Analyses.                                                                                                                                                                                                                                                                                            |
| `CellId`                  | Gets the CellId.                                                                                                                                                                                                                                                                                              |
| `SystemCaption`           | Gets the SystemCaption.                                                                                                                                                                                                                                                                                       |
| `AEDTImportManager`       | Get the manager for manipulating import settings for AEDT files.                                                                                                                                                                                                                                              |
| `TableGroup`              | Gets the TableGroup.                                                                                                                                                                                                                                                                                          |
| `InternalObject`          | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                            |
| `Ambient`                 | Gets or sets the Ambient Lighting factor.                                                                                                                                                                                                                                                                     |
| `Color`                   | Gets or sets the Lighting Color. Can also be set using Hex color codes; three byte hexadecimal numbers (consisting of six digits) preceded by '0x', where each byte (or pair of characters in the Hex code) represents the intensity of red, green and blue in the color respectively. For example, 0xFFFFFF. |
| `Diffuse`                 | Gets or sets the Diffuse Lighting factor.                                                                                                                                                                                                                                                                     |
| `Control`                 | Gets the Control.                                                                                                                                                                                                                                                                                             |
| `Specular`                | Gets or sets the Specular Lighting factor.                                                                                                                                                                                                                                                                    |
| `AMProcess`               | Gets the AMProcess.                                                                                                                                                                                                                                                                                           |
| `NamedSelections`         | Gets the NamedSelections.                                                                                                                                                                                                                                                                                     |
| `CondensedGeometry`       | Gets the CondensedGeometry.                                                                                                                                                                                                                                                                                   |
| `ConstructionGeometry`    | Gets the ConstructionGeometry.                                                                                                                                                                                                                                                                                |
| `Connections`             | Gets the Connections.                                                                                                                                                                                                                                                                                         |
| `CoordinateSystems`       | Gets the CoordinateSystems.                                                                                                                                                                                                                                                                                   |
| `CrossSections`           | Gets the CrossSections.                                                                                                                                                                                                                                                                                       |
| `FeatureDetection`        | Gets the FeatureDetection.                                                                                                                                                                                                                                                                                    |
| `Fracture`                | Gets the Fracture.                                                                                                                                                                                                                                                                                            |
| `GeometryImportGroup`     | Gets the GeometryImportGroup.                                                                                                                                                                                                                                                                                 |
| `Materials`               | Gets the Materials.                                                                                                                                                                                                                                                                                           |
| `Measures`                | Gets the Measures.                                                                                                                                                                                                                                                                                            |
| `MeshEdit`                | Gets the MeshEdit.                                                                                                                                                                                                                                                                                            |
| `Mesh`                    | Gets the Mesh.                                                                                                                                                                                                                                                                                                |
| `MeshNumbering`           | Gets the MeshNumbering.                                                                                                                                                                                                                                                                                       |
| `PartTransformGroup`      | Gets the PartTransformGroup.                                                                                                                                                                                                                                                                                  |
| `Geometry`                | Gets the Geometry.                                                                                                                                                                                                                                                                                            |
| `RemotePoints`            | Gets the RemotePoints.                                                                                                                                                                                                                                                                                        |
| `Symmetry`                | Gets the Symmetry.                                                                                                                                                                                                                                                                                            |
| `VirtualTopology`         | Gets the VirtualTopology.                                                                                                                                                                                                                                                                                     |
| `Analyses`                | Gets the Analyses.                                                                                                                                                                                                                                                                                            |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                                                                                                                                                                                                                                                                  |
| `Children`                | Gets the list of children.                                                                                                                                                                                                                                                                                    |
| `Comments`                | Gets the list of associated comments.                                                                                                                                                                                                                                                                         |
| `Figures`                 | Gets the list of associated figures.                                                                                                                                                                                                                                                                          |
| `Images`                  | Gets the list of associated images.                                                                                                                                                                                                                                                                           |
| `InternalObject`          | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                            |
| `Properties`              | Gets the list of properties for this object.                                                                                                                                                                                                                                                                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                                 |

<a id="property-detail"></a>

## Property detail

### *property* Model.Environments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Analysis](../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Analyses.

<!-- !! processed by numpydoc !! -->

### *property* Model.CellId *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CellId.

<!-- !! processed by numpydoc !! -->

### *property* Model.SystemCaption *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SystemCaption.

<!-- !! processed by numpydoc !! -->

### *property* Model.AEDTImportManager *: Ansys.ACT.Automation.Mechanical.AEDTImportManager | [None](https://docs.python.org/3/library/constants.html#None)*

Get the manager for manipulating import settings for AEDT files.

<!-- !! processed by numpydoc !! -->

### *property* Model.TableGroup *: [Ansys.ACT.Automation.Mechanical.TableGroup](../../../../../v241/Ansys/ACT/Automation/Mechanical/TableGroup.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.TableGroup) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TableGroup.

<!-- !! processed by numpydoc !! -->

### *property* Model.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSModelAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Model.Ambient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ambient Lighting factor.

<!-- !! processed by numpydoc !! -->

### *property* Model.Color *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Lighting Color. Can also be set using Hex color codes; three byte hexadecimal numbers (consisting of six digits) preceded by '0x', where each byte (or pair of characters in the Hex code) represents the intensity of red, green and blue in the color respectively. For example, 0xFFFFFF.

<!-- !! processed by numpydoc !! -->

### *property* Model.Diffuse *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Diffuse Lighting factor.

<!-- !! processed by numpydoc !! -->

### *property* Model.Control *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Control.

<!-- !! processed by numpydoc !! -->

### *property* Model.Specular *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Specular Lighting factor.

<!-- !! processed by numpydoc !! -->

### *property* Model.AMProcess *: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMProcess](../../../../../v241/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMProcess) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AMProcess.

<!-- !! processed by numpydoc !! -->

### *property* Model.NamedSelections *: [Ansys.ACT.Automation.Mechanical.NamedSelections](../../../../../v241/Ansys/ACT/Automation/Mechanical/NamedSelections.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelections) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* Model.CondensedGeometry *: [Ansys.ACT.Automation.Mechanical.CondensedGeometry](../../../../../v241/Ansys/ACT/Automation/Mechanical/CondensedGeometry.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CondensedGeometry) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CondensedGeometry.

<!-- !! processed by numpydoc !! -->

### *property* Model.ConstructionGeometry *: [Ansys.ACT.Automation.Mechanical.ConstructionGeometry](../../../../../v241/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ConstructionGeometry) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ConstructionGeometry.

<!-- !! processed by numpydoc !! -->

### *property* Model.Connections *: [Ansys.ACT.Automation.Mechanical.Connections.Connections](../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Connections) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

### *property* Model.CoordinateSystems *: [Ansys.ACT.Automation.Mechanical.CoordinateSystems](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystems.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystems) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CoordinateSystems.

<!-- !! processed by numpydoc !! -->

### *property* Model.CrossSections *: [Ansys.ACT.Automation.Mechanical.CrossSections](../../../../../v241/Ansys/ACT/Automation/Mechanical/CrossSections.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CrossSections) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSections.

<!-- !! processed by numpydoc !! -->

### *property* Model.FeatureDetection *: [Ansys.ACT.Automation.Mechanical.FeatureDetection](../../../../../v241/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.FeatureDetection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FeatureDetection.

<!-- !! processed by numpydoc !! -->

### *property* Model.Fracture *: [Ansys.ACT.Automation.Mechanical.Fracture](../../../../../v241/Ansys/ACT/Automation/Mechanical/Fracture.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Fracture) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Fracture.

<!-- !! processed by numpydoc !! -->

### *property* Model.GeometryImportGroup *: [Ansys.ACT.Automation.Mechanical.GeometryImportGroup](../../../../../v241/Ansys/ACT/Automation/Mechanical/GeometryImportGroup.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.GeometryImportGroup) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the GeometryImportGroup.

<!-- !! processed by numpydoc !! -->

### *property* Model.Materials *: [Ansys.ACT.Automation.Mechanical.Materials](../../../../../v241/Ansys/ACT/Automation/Mechanical/Materials.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Materials) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Materials.

<!-- !! processed by numpydoc !! -->

### *property* Model.Measures *: [Ansys.ACT.Automation.Mechanical.Measures](../../../../../v241/Ansys/ACT/Automation/Mechanical/Measures.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Measures) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Measures.

<!-- !! processed by numpydoc !! -->

### *property* Model.MeshEdit *: [Ansys.ACT.Automation.Mechanical.MeshEdit](../../../../../v241/Ansys/ACT/Automation/Mechanical/MeshEdit.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshEdit) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshEdit.

<!-- !! processed by numpydoc !! -->

### *property* Model.Mesh *: [Ansys.ACT.Automation.Mechanical.MeshControls.Mesh](../../../../../v241/Ansys/ACT/Automation/Mechanical/MeshControls/Mesh.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshControls.Mesh) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Mesh.

<!-- !! processed by numpydoc !! -->

### *property* Model.MeshNumbering *: [Ansys.ACT.Automation.Mechanical.MeshNumbering](../../../../../v241/Ansys/ACT/Automation/Mechanical/MeshNumbering.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshNumbering) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshNumbering.

<!-- !! processed by numpydoc !! -->

### *property* Model.PartTransformGroup *: [Ansys.ACT.Automation.Mechanical.PartTransformGroup](../../../../../v241/Ansys/ACT/Automation/Mechanical/PartTransformGroup.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.PartTransformGroup) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PartTransformGroup.

<!-- !! processed by numpydoc !! -->

### *property* Model.Geometry *: [Ansys.ACT.Automation.Mechanical.Geometry](../../../../../v241/Ansys/ACT/Automation/Mechanical/Geometry.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Geometry) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Geometry.

<!-- !! processed by numpydoc !! -->

### *property* Model.RemotePoints *: [Ansys.ACT.Automation.Mechanical.RemotePoints](../../../../../v241/Ansys/ACT/Automation/Mechanical/RemotePoints.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoints) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RemotePoints.

<!-- !! processed by numpydoc !! -->

### *property* Model.Symmetry *: [Ansys.ACT.Automation.Mechanical.Symmetry](../../../../../v241/Ansys/ACT/Automation/Mechanical/Symmetry.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Symmetry) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Symmetry.

<!-- !! processed by numpydoc !! -->

### *property* Model.VirtualTopology *: [Ansys.ACT.Automation.Mechanical.VirtualTopology](../../../../../v241/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.VirtualTopology) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualTopology.

<!-- !! processed by numpydoc !! -->

### *property* Model.Analyses *: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.Analysis](../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Analyses.

<!-- !! processed by numpydoc !! -->

### *property* Model.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* Model.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Model.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Model.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Model.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Model.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Model.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Model.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### Model.CreateCylindricalBolt(headHeight: System.Object, headRadius: System.Object, shankLength: System.Object, shankRadius: System.Object)

```text
Create bolt with a cylinder head based on the specified dimensions. The bolt will be
created so that the base of the head is at the origin and aligned with the Y-Z plane.
Valid input arguments include:
  1) `double`
  2) `Quantity`
  3) A string representation of `double` or `Quantity`, i.e., "1.0" or "1.0 [cm]"
```

<!-- !! processed by numpydoc !! -->

### Model.CreateCylindricalNut(height: System.Object, innerRadius: System.Object, outerRadius: System.Object)

```text
Create a cylindrical nut with the specified dimensions. The nut will be created so that
the base of the nut is at the origin and aligned with the Y-Z plane.
Valid input arguments include:
  1) `double`
  2) `Quantity`
  3) A string representation of `double` or `Quantity`, i.e., "1.0" or "1.0 [cm]"
```

<!-- !! processed by numpydoc !! -->

### Model.CreateHexBolt(headHeight: System.Object, wrenchWidth: System.Object, shankLength: System.Object, shankRadius: System.Object)

```text
Create a bolt with a hex head based on the specified dimensions. The bolt will be
created so that the base of the head is at the origin and aligned with the Y-Z plane.
Valid input arguments include:
  1) `double`
  2) `Quantity`
  3) A string representation of `double` or `Quantity`, i.e., "1.0" or "1.0 [cm]"
```

<!-- !! processed by numpydoc !! -->

### Model.CreateHexNut(height: System.Object, innerRadius: System.Object, wrenchWidth: System.Object)

```text
Create a hex nut with the specified dimensions. The nut will be created so that the
base of the nut is at the origin and aligned with the Y-Z plane.
Valid input arguments include:
  1) `double`
  2) `Quantity`
  3) A string representation of `double` or `Quantity`, i.e., "1.0" or "1.0 [cm]"
```

<!-- !! processed by numpydoc !! -->

### Model.CreatePartInstance(part: Ansys.ACT.Interfaces.Geometry.IGeoPart)

```text
This will create an instance (not an independent copy) of the provided part. The use of
instanced parts for replication is highly recommended for memory and performance
reasons.
```

<!-- !! processed by numpydoc !! -->

### Model.GetTransformationOnPart(part: Ansys.ACT.Interfaces.Geometry.IGeoPart)

Get the transformation matrix of the provided part.

<!-- !! processed by numpydoc !! -->

### Model.SetTransformationOnPart(part: Ansys.ACT.Interfaces.Geometry.IGeoPart, transformationMatrix: [Ansys.Mechanical.DataModel.Utilities.RigidBodyTransformationMatrix](../../../../../v241/Ansys/Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Utilities.RigidBodyTransformationMatrix))

```text
Transform a part with given transformation. Only rigid body transformation is
supported, i.e., no scaling will be performed. The validity of “transformationMatrix”
will be checked against the constraints of rigid body transforms; an error will be
emitted if the matrix is ill-formed.
```

<!-- !! processed by numpydoc !! -->

### Model.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### Model.AddRemotePoint()

Creates a new child RemotePoint.

<!-- !! processed by numpydoc !! -->

### Model.Solve(wait: System.Boolean, config: System.String)

Run the Solve action.

<!-- !! processed by numpydoc !! -->

### Model.Solve(wait: System.Boolean, config: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveConfiguration](../../../../../v241/Ansys/ACT/Mechanical/Application/SolveProcessSettings/SolveConfiguration.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveConfiguration))

Run the Solve action.

<!-- !! processed by numpydoc !! -->

### Model.GetResults()

Gets the Results from the server.

<!-- !! processed by numpydoc !! -->

### Model.AddStaticStructuralAnalysis()

Run the AddStaticStructuralAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddTransientStructuralAnalysis()

Run the AddTransientStructuralAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddRigidDynamicsAnalysis()

Run the AddRigidDynamicsAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddHarmonicResponseAnalysis()

Run the AddHarmonicResponseAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddModalAnalysis()

Run the AddModalAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddSubstructureGenerationAnalysis()

Run the AddSubstructureGenerationAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddExplicitDynamicsAnalysis()

Run the AddExplicitDynamicsAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddSteadyStateThermalAnalysis()

Run the AddSteadyStateThermalAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddTransientThermalAnalysis()

Run the AddTransientThermalAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddMagnetostaticAnalysis()

Run the AddMagnetostaticAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddElectricAnalysis()

Run the AddElectricAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddDesignAssessmentAnalysis()

Run the AddDesignAssessmentAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddThermalElectricAnalysis()

Run the AddThermalElectricAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddModalAcousticAnalysis()

Run the AddModalAcousticAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddHarmonicAcousticAnalysis()

Run the AddHarmonicAcousticAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddStaticAcousticAnalysis()

Run the AddStaticAcousticAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddTopologyOptimizationAnalysis()

Run the AddTopologyOptimizationAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddEigenvalueBucklingAnalysis()

Run the AddEigenvalueBucklingAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddResponseSpectrumAnalysis()

Run the AddResponseSpectrumAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddRandomVibrationAnalysis()

Run the AddRandomVibrationAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddCoupledFieldStatic()

Run the AddCoupledFieldStatic action.

<!-- !! processed by numpydoc !! -->

### Model.AddCoupledFieldTransient()

Run the AddCoupledFieldTransient action.

<!-- !! processed by numpydoc !! -->

### Model.AddCoupledFieldHarmonic()

Run the AddCoupledFieldHarmonic action.

<!-- !! processed by numpydoc !! -->

### Model.AddCoupledFieldModal()

Run the AddCoupledFieldModal action.

<!-- !! processed by numpydoc !! -->

### Model.AddLSDynaAnalysis()

Run the AddLSDynaAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddLSDynaRestartAnalysis()

Run the AddLSDynaRestartAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddMotionAnalysis()

Run the AddMotionAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddDesignLifeAnalysis()

Run the AddDesignLifeAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.AddForcedResponseAnalysis()

Run the AddForcedResponseAnalysis action.

<!-- !! processed by numpydoc !! -->

### Model.UpdateGeometryFromSource()

Run the UpdateGeometryFromSource action.

<!-- !! processed by numpydoc !! -->

### Model.RefreshMaterials()

Run the RefresMaterials action.

<!-- !! processed by numpydoc !! -->

### Model.LoadResultFile(filePath: System.String)

Creates a results-only system and loads the result file.

<!-- !! processed by numpydoc !! -->

### Model.AutoFilter()

```text
Enables interface filtering that only displays model-level items applicable to the
    particular analysis type environments in which you are working.
```

<!-- !! processed by numpydoc !! -->

### Model.DisableFilter()

```text
Disables interface filtering so that model-level items are not filtered out based on
    the environment types in your model.
```

<!-- !! processed by numpydoc !! -->

### Model.AddNamedSelectionFromSelectedConnections()

Creates a new Named Selections (Components) for the selected connections.

<!-- !! processed by numpydoc !! -->

### Model.AddNamedSelection()

Creates a new child NamedSelection.

<!-- !! processed by numpydoc !! -->

### Model.AddPartTransform()

Creates a new child PartTransform.

<!-- !! processed by numpydoc !! -->

### Model.GetFECommandsRepository(source: System.String, fileIdentifier: System.String)

Gets the commands repository for a file from external model.

<!-- !! processed by numpydoc !! -->

### Model.AddChart()

Creates a new child Chart.

<!-- !! processed by numpydoc !! -->

### Model.DeleteParts(parts: System.Object)

Deletes the provide parts if they exist. Otherwise, nothing happens. An exception will be issued if the argument is invalid.

<!-- !! processed by numpydoc !! -->

### Model.FreezeMeshOnSelectedParts(parts: System.Object)

Run the FreezeMeshOnSelectedParts action.

<!-- !! processed by numpydoc !! -->

### Model.UnfreezeMeshOnSelectedParts(parts: System.Object)

Run the UnfreezeMeshOnSelectedParts action.

<!-- !! processed by numpydoc !! -->

### Model.AddCondensedGeometry()

Creates a new CondensedGeometry

<!-- !! processed by numpydoc !! -->

### Model.AddMeasures()

Creates a new Measures

<!-- !! processed by numpydoc !! -->

### Model.AddConnections()

Creates a new Connections

<!-- !! processed by numpydoc !! -->

### Model.AddConstructionGeometry()

Creates a new ConstructionGeometry

<!-- !! processed by numpydoc !! -->

### Model.AddAMProcess()

Creates a new AMProcess

<!-- !! processed by numpydoc !! -->

### Model.AddFracture()

Creates a new Fracture

<!-- !! processed by numpydoc !! -->

### Model.AddGeometryImportGroup()

Get the

<!-- !! processed by numpydoc !! -->

### Model.AddTableGroup(activate: System.Boolean)

Get the

<!-- !! processed by numpydoc !! -->

### Model.AddMeshEdit()

Creates a new MeshEdit

<!-- !! processed by numpydoc !! -->

### Model.AddMeshNumbering()

Creates a new MeshNumbering

<!-- !! processed by numpydoc !! -->

### Model.AddSymmetry()

Creates a new Symmetry

<!-- !! processed by numpydoc !! -->

### Model.AddVirtualTopology()

Creates a new VirtualTopology

<!-- !! processed by numpydoc !! -->

### Model.AddCoSimulationPin()

Creates a new CoSimulationPin

<!-- !! processed by numpydoc !! -->

### Model.AddImagePlane()

Creates an ImagePlane and adds it as a child of this object.

<!-- !! processed by numpydoc !! -->

### Model.EvaluateScriptDefinedResults()

EvaluateScriptDefinedResults method.

<!-- !! processed by numpydoc !! -->

### Model.AddTreeGroupingFolder(dataModelObjects: System.Collections.IEnumerable)

Move the Data Model Objects to a new TreeGroupingFolder.

<!-- !! processed by numpydoc !! -->

### Model.AddTreeGroupingFolder(dataModelObject: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Move the Data Model Object to a new TreeGroupingFolder.

<!-- !! processed by numpydoc !! -->

### Model.CenterOfMass()

Calculates the center of mass of all unsupressed bodies and point masses.

<!-- !! processed by numpydoc !! -->

### Model.AddCompositeFailureCriteria()

Creates a new Composite Failure Criteria object.

<!-- !! processed by numpydoc !! -->

### Model.AddFatigueCombination()

Creates a new FatigueCombination

<!-- !! processed by numpydoc !! -->

### Model.AddFeatureDetection()

Creates a new FeatureDetection

<!-- !! processed by numpydoc !! -->

### Model.AddPythonCodeEventBased()

Creates a new PythonCodeEventBased

<!-- !! processed by numpydoc !! -->

### Model.AddPythonResult()

Creates a new PythonResult

<!-- !! processed by numpydoc !! -->

### Model.AddSolutionCombination()

Creates a new SolutionCombination

<!-- !! processed by numpydoc !! -->

### Model.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Model.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Model.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Model.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Model.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### Model.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Model.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Model.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Model.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Model.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Model.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Model.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### Model.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Model.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Model.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

