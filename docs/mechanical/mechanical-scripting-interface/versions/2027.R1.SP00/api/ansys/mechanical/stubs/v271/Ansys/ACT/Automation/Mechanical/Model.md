# `Model`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Model"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Model(internalObject: Any)

<a id="Model"></a>

### *class* Model(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Model.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#Model.Activate)                                                                                                               | Activate the current object.                                                                                                 |
| [`AddAIShapeClusterGroup`](#Model.AddAIShapeClusterGroup)                                                                                   | Creates a new child AINamedSelection.                                                                                        |
| [`AddAMProcess`](#Model.AddAMProcess)                                                                                                       | Creates a new AMProcess                                                                                                      |
| [`AddBodyMergeSequence`](#Model.AddBodyMergeSequence)                                                                                       | Creates a BodyMergeSequence under the Model.                                                                                 |
| [`AddBoundaryConditionsGroup`](#Model.AddBoundaryConditionsGroup)                                                                           | Creates and adds a BoundaryConditionsGroup.                                                                                  |
| [`AddChart`](#Model.AddChart)                                                                                                               | Creates a new child Chart.                                                                                                   |
| [`AddCoSimulationPin`](#Model.AddCoSimulationPin)                                                                                           | Creates a new CoSimulationPin                                                                                                |
| [`AddComment`](#Model.AddComment)                                                                                                           | Creates a new child Comment.                                                                                                 |
| [`AddCompositeFailureCriteria`](#Model.AddCompositeFailureCriteria)                                                                         | Creates a new Composite Failure Criteria object.                                                                             |
| [`AddCondensedGeometry`](#Model.AddCondensedGeometry)                                                                                       | Creates a new CondensedGeometry                                                                                              |
| [`AddConnections`](#Model.AddConnections)                                                                                                   | Creates a new Connections                                                                                                    |
| [`AddConstructionGeometry`](#Model.AddConstructionGeometry)                                                                                 | Creates a new ConstructionGeometry                                                                                           |
| [`AddCoordinateSystemInternal`](#Model.AddCoordinateSystemInternal)                                                                         | AddCoordinateSystemInternal method.                                                                                          |
| [`AddCoupledFieldHarmonic`](#Model.AddCoupledFieldHarmonic)                                                                                 | Run the AddCoupledFieldHarmonic action.                                                                                      |
| [`AddCoupledFieldModal`](#Model.AddCoupledFieldModal)                                                                                       | Run the AddCoupledFieldModal action.                                                                                         |
| [`AddCoupledFieldStatic`](#Model.AddCoupledFieldStatic)                                                                                     | Run the AddCoupledFieldStatic action.                                                                                        |
| [`AddCoupledFieldTransient`](#Model.AddCoupledFieldTransient)                                                                               | Run the AddCoupledFieldTransient action.                                                                                     |
| [`AddCrossSections`](#Model.AddCrossSections)                                                                                               | Creates new CrossSections group.                                                                                             |
| [`AddDesignAssessmentAnalysis`](#Model.AddDesignAssessmentAnalysis)                                                                         | Run the AddDesignAssessmentAnalysis action.                                                                                  |
| [`AddDesignLifeAnalysis`](#Model.AddDesignLifeAnalysis)                                                                                     | Run the AddDesignLifeAnalysis action.                                                                                        |
| [`AddEigenvalueBucklingAnalysis`](#Model.AddEigenvalueBucklingAnalysis)                                                                     | Run the AddEigenvalueBucklingAnalysis action.                                                                                |
| [`AddElectricAnalysis`](#Model.AddElectricAnalysis)                                                                                         | Run the AddElectricAnalysis action.                                                                                          |
| [`AddExplicitDynamicsAnalysis`](#Model.AddExplicitDynamicsAnalysis)                                                                         | Run the AddExplicitDynamicsAnalysis action.                                                                                  |
| [`AddFatigueCombination`](#Model.AddFatigueCombination)                                                                                     | Creates a new FatigueCombination                                                                                             |
| [`AddFeatureDetection`](#Model.AddFeatureDetection)                                                                                         | Creates a new FeatureDetection                                                                                               |
| [`AddFigure`](#Model.AddFigure)                                                                                                             | Creates a new child Figure.                                                                                                  |
| [`AddForcedResponseAnalysis`](#Model.AddForcedResponseAnalysis)                                                                             | Run the AddForcedResponseAnalysis action.                                                                                    |
| [`AddFracture`](#Model.AddFracture)                                                                                                         | Creates a new Fracture                                                                                                       |
| [`AddGeometryImportGroup`](#Model.AddGeometryImportGroup)                                                                                   | Get the GeometryImportGroup instance.                                                                                        |
| [`AddHarmonicAcousticAnalysis`](#Model.AddHarmonicAcousticAnalysis)                                                                         | Run the AddHarmonicAcousticAnalysis action.                                                                                  |
| [`AddHarmonicResponseAnalysis`](#Model.AddHarmonicResponseAnalysis)                                                                         | Run the AddHarmonicResponseAnalysis action.                                                                                  |
| [`AddHotspotDetectionTool`](#Model.AddHotspotDetectionTool)                                                                                 | Creates a new HotspotDetectionTool                                                                                           |
| [`AddImage`](#Model.AddImage)                                                                                                               | Creates a new child Image.                                                                                                   |
| [`AddImagePlane`](#Model.AddImagePlane)                                                                                                     | Creates an ImagePlane and adds it as a child of this object.                                                                 |
| [`AddLSDynaAcousticsAnalysis`](#Model.AddLSDynaAcousticsAnalysis)                                                                           | Run the AddLSDynaAcousticsAnalysis action.                                                                                   |
| [`AddLSDynaAnalysis`](#Model.AddLSDynaAnalysis)                                                                                             | Run the AddLSDynaAnalysis action.                                                                                            |
| [`AddLSDynaRestartAnalysis`](#Model.AddLSDynaRestartAnalysis)                                                                               | Run the AddLSDynaRestartAnalysis action.                                                                                     |
| [`AddMagnetostaticAnalysis`](#Model.AddMagnetostaticAnalysis)                                                                               | Run the AddMagnetostaticAnalysis action.                                                                                     |
| [`AddMeasures`](#Model.AddMeasures)                                                                                                         | Creates a new Measures                                                                                                       |
| [`AddMeshEdit`](#Model.AddMeshEdit)                                                                                                         | Creates a new MeshEdit                                                                                                       |
| [`AddMeshNumbering`](#Model.AddMeshNumbering)                                                                                               | Creates a new MeshNumbering                                                                                                  |
| [`AddMeshWorkflowGroup`](#Model.AddMeshWorkflowGroup)                                                                                       | Creates a new MeshWorkflowGroup                                                                                              |
| [`AddModalAcousticAnalysis`](#Model.AddModalAcousticAnalysis)                                                                               | Run the AddModalAcousticAnalysis action.                                                                                     |
| [`AddModalAnalysis`](#Model.AddModalAnalysis)                                                                                               | Run the AddModalAnalysis action.                                                                                             |
| [`AddMotionAnalysis`](#Model.AddMotionAnalysis)                                                                                             | Run the AddMotionAnalysis action.                                                                                            |
| [`AddNamedSelection`](#Model.AddNamedSelection)                                                                                             | Creates a new child NamedSelection.                                                                                          |
| [`AddNamedSelectionFromSelectedConnections`](#Model.AddNamedSelectionFromSelectedConnections)                                               | Creates a new Named Selections (Components) for the selected connections.                                                    |
| [`AddParameterVariableGroup`](#Model.AddParameterVariableGroup)                                                                             | Get the ParameterVariableGroup instance.                                                                                     |
| [`AddPartTransform`](#Model.AddPartTransform)                                                                                               | Creates a new child PartTransform.                                                                                           |
| [`AddPythonCodeEventBased`](#Model.AddPythonCodeEventBased)                                                                                 | Creates a new PythonCodeEventBased                                                                                           |
| [`AddPythonResult`](#Model.AddPythonResult)                                                                                                 | Creates a new PythonResult                                                                                                   |
| [`AddRandomVibrationAnalysis`](#Model.AddRandomVibrationAnalysis)                                                                           | Run the AddRandomVibrationAnalysis action.                                                                                   |
| [`AddRemotePoint`](#Model.AddRemotePoint)                                                                                                   | Creates a new child RemotePoint.                                                                                             |
| [`AddRemotePointInternal`](#Model.AddRemotePointInternal)                                                                                   | AddRemotePointInternal method.                                                                                               |
| [`AddResponseSpectrumAnalysis`](#Model.AddResponseSpectrumAnalysis)                                                                         | Run the AddResponseSpectrumAnalysis action.                                                                                  |
| [`AddRigidDynamicsAnalysis`](#Model.AddRigidDynamicsAnalysis)                                                                               | Run the AddRigidDynamicsAnalysis action.                                                                                     |
| [`AddSolutionCombination`](#Model.AddSolutionCombination)                                                                                   | Creates a new SolutionCombination                                                                                            |
| [`AddStaticAcousticAnalysis`](#Model.AddStaticAcousticAnalysis)                                                                             | Run the AddStaticAcousticAnalysis action.                                                                                    |
| [`AddStaticStructuralAnalysis`](#Model.AddStaticStructuralAnalysis)                                                                         | Run the AddStaticStructuralAnalysis action.                                                                                  |
| [`AddSteadyStateThermalAnalysis`](#Model.AddSteadyStateThermalAnalysis)                                                                     | Run the AddSteadyStateThermalAnalysis action.                                                                                |
| [`AddSubstructureGenerationAnalysis`](#Model.AddSubstructureGenerationAnalysis)                                                             | Run the AddSubstructureGenerationAnalysis action.                                                                            |
| [`AddSymmetry`](#Model.AddSymmetry)                                                                                                         | Creates a new Symmetry                                                                                                       |
| [`AddTableGroup`](#Model.AddTableGroup)                                                                                                     | Get the TableGroup instance.                                                                                                 |
| [`AddThermalElectricAnalysis`](#Model.AddThermalElectricAnalysis)                                                                           | Run the AddThermalElectricAnalysis action.                                                                                   |
| [`AddTopologyOptimizationAnalysis`](#Model.AddTopologyOptimizationAnalysis)                                                                 | Run the AddTopologyOptimizationAnalysis action.                                                                              |
| [`AddTransientStructuralAnalysis`](#Model.AddTransientStructuralAnalysis)                                                                   | Run the AddTransientStructuralAnalysis action.                                                                               |
| [`AddTransientThermalAnalysis`](#Model.AddTransientThermalAnalysis)                                                                         | Run the AddTransientThermalAnalysis action.                                                                                  |
| [`AddTreeGroupingFolder`](#Model.AddTreeGroupingFolder)                                                                                     | Move the Data Model Objects to a new TreeGroupingFolder.                                                                     |
| [`AddVirtualTopology`](#Model.AddVirtualTopology)                                                                                           | Creates a new VirtualTopology                                                                                                |
| [`AutoFilter`](#Model.AutoFilter)                                                                                                           | Enables interface filtering that only displays model-level items applicable to the                                           |
| [`CenterOfMass`](#Model.CenterOfMass)                                                                                                       | Calculates the center of mass of all unsupressed bodies and point masses.                                                    |
| [`ClearGeneratedData`](#Model.ClearGeneratedData)                                                                                           | Run the ClearGeneratedData action.                                                                                           |
| [`Copy`](#Model.Copy)                                                                                                                       | Copies the current DataModelObject.                                                                                          |
| [`CopyTo`](#Model.CopyTo)                                                                                                                   | Copies all visible properties from this object to another.                                                                   |
| [`CreateCylindricalBolt`](#Model.CreateCylindricalBolt)                                                                                     | Create bolt with a cylinder head based on the specified dimensions. The bolt will be                                         |
| [`CreateCylindricalNut`](#Model.CreateCylindricalNut)                                                                                       | Create a cylindrical nut with the specified dimensions. The nut will be created so that                                      |
| [`CreateHexBolt`](#Model.CreateHexBolt)                                                                                                     | Create a bolt with a hex head based on the specified dimensions. The bolt will be                                            |
| [`CreateHexNut`](#Model.CreateHexNut)                                                                                                       | Create a hex nut with the specified dimensions. The nut will be created so that the                                          |
| [`CreateObjRef`](#Model.CreateObjRef)                                                                                                       | CreateObjRef method.                                                                                                         |
| [`CreateParameter`](#Model.CreateParameter)                                                                                                 | Creates a new parameter for a Property.                                                                                      |
| [`CreatePartInstance`](#Model.CreatePartInstance)                                                                                           | This will create an instance (not an independent copy) of the provided part. The use of                                      |
| [`Cut`](#Model.Cut)                                                                                                                         | Cuts the current DataModelObject.                                                                                            |
| [`DeleteParts`](#Model.DeleteParts)                                                                                                         | Deletes the provide parts if they exist. Otherwise, nothing happens. An exception will be issued if the argument is invalid. |
| [`DisableFilter`](#Model.DisableFilter)                                                                                                     | Disables interface filtering so that model-level items are not filtered out based on                                         |
| [`Duplicate`](#Model.Duplicate)                                                                                                             | Creates a copy of the current DataModelObject.                                                                               |
| [`Equals`](#Model.Equals)                                                                                                                   | Equals method.                                                                                                               |
| [`EvaluateScriptDefinedResults`](#Model.EvaluateScriptDefinedResults)                                                                       | EvaluateScriptDefinedResults method.                                                                                         |
| [`FreezeMeshOnSelectedParts`](#Model.FreezeMeshOnSelectedParts)                                                                             | Run the FreezeMeshOnSelectedParts action.                                                                                    |
| [`GetAPIName`](#Model.GetAPIName)                                                                                                           | Property name bound to dispId.                                                                                               |
| [`GetAllFECommandsRepositoriesFullSourceFileIdentifiers`](#Model.GetAllFECommandsRepositoriesFullSourceFileIdentifiers)                     | GetAllFECommandsRepositoriesFullSourceFileIdentifiers method.                                                                |
| [`GetAllFECommandsRepositoriesFullSourceFileIdentifiersInputFiles`](#Model.GetAllFECommandsRepositoriesFullSourceFileIdentifiersInputFiles) | GetAllFECommandsRepositoriesFullSourceFileIdentifiersInputFiles method.                                                      |
| [`GetAllProperties`](#Model.GetAllProperties)                                                                                               | GetAllProperties method.                                                                                                     |
| [`GetChildren`](#Model.GetChildren)                                                                                                         | Gets the list of children, filtered by type.                                                                                 |
| [`GetDetailsView`](#Model.GetDetailsView)                                                                                                   | GetDetailsView method.                                                                                                       |
| [`GetEnumName`](#Model.GetEnumName)                                                                                                         | Enum name bound to value                                                                                                     |
| [`GetFECommandsRepositoriesLocation`](#Model.GetFECommandsRepositoriesLocation)                                                             | GetFECommandsRepositoriesLocation method.                                                                                    |
| [`GetFECommandsRepositoriesNumberOfCopies`](#Model.GetFECommandsRepositoriesNumberOfCopies)                                                 | GetFECommandsRepositoriesNumberOfCopies method.                                                                              |
| [`GetFECommandsRepository`](#Model.GetFECommandsRepository)                                                                                 | Gets the commands repository for a file from external model.                                                                 |
| [`GetHashCode`](#Model.GetHashCode)                                                                                                         | GetHashCode method.                                                                                                          |
| [`GetIconFile`](#Model.GetIconFile)                                                                                                         | GetIconFile method.                                                                                                          |
| [`GetLifetimeService`](#Model.GetLifetimeService)                                                                                           | GetLifetimeService method.                                                                                                   |
| [`GetObjectData`](#Model.GetObjectData)                                                                                                     | GetObjectData method.                                                                                                        |
| [`GetParameter`](#Model.GetParameter)                                                                                                       | Gets the parameter corresponding to the given property.                                                                      |
| [`GetPath`](#Model.GetPath)                                                                                                                 | GetPath method.                                                                                                              |
| [`GetPropertyName`](#Model.GetPropertyName)                                                                                                 | GetPropertyName method.                                                                                                      |
| [`GetPropertyValue`](#Model.GetPropertyValue)                                                                                               | GetPropertyValue method.                                                                                                     |
| [`GetResults`](#Model.GetResults)                                                                                                           | Gets the Results from the server.                                                                                            |
| [`GetTransformationOnPart`](#Model.GetTransformationOnPart)                                                                                 | Get the transformation matrix of the provided part.                                                                          |
| [`GetVisibleProperties`](#Model.GetVisibleProperties)                                                                                       | GetVisibleProperties method.                                                                                                 |
| [`GetVisiblePropertyNames`](#Model.GetVisiblePropertyNames)                                                                                 | GetVisiblePropertyNames method.                                                                                              |
| [`GroupAllSimilarChildren`](#Model.GroupAllSimilarChildren)                                                                                 | Run the GroupAllSimilarChildren action.                                                                                      |
| [`GroupSimilarObjects`](#Model.GroupSimilarObjects)                                                                                         | Run the GroupSimilarObjects action.                                                                                          |
| [`HasDetermined2D3D`](#Model.HasDetermined2D3D)                                                                                             | HasDetermined2D3D method.                                                                                                    |
| [`ImportModelFromDisco`](#Model.ImportModelFromDisco)                                                                                       | ImportModelFromDisco method.                                                                                                 |
| [`InitializeLifetimeService`](#Model.InitializeLifetimeService)                                                                             | InitializeLifetimeService method.                                                                                            |
| [`Is2DGeometry`](#Model.Is2DGeometry)                                                                                                       | Is2DGeometry method.                                                                                                         |
| [`IsPropertyEditable`](#Model.IsPropertyEditable)                                                                                           | IsPropertyEditable method.                                                                                                   |
| [`IsPropertyVisible`](#Model.IsPropertyVisible)                                                                                             | IsPropertyVisible method.                                                                                                    |
| [`LoadResultFile`](#Model.LoadResultFile)                                                                                                   | Creates a results-only system and loads the result file.                                                                     |
| [`Paste`](#Model.Paste)                                                                                                                     | Pastes to the current DataModelObject context.                                                                               |
| [`PropertyByAPIName`](#Model.PropertyByAPIName)                                                                                             | Get a property by its API name.                                                                                              |
| [`PropertyById`](#Model.PropertyById)                                                                                                       | PropertyById method.                                                                                                         |
| [`PropertyByName`](#Model.PropertyByName)                                                                                                   | Get a property by its unique name.                                                                                           |
| [`RefreshMaterials`](#Model.RefreshMaterials)                                                                                               | Run the RefresMaterials action.                                                                                              |
| [`RemoveFromGroup`](#Model.RemoveFromGroup)                                                                                                 | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.                                  |
| [`RemoveParameter`](#Model.RemoveParameter)                                                                                                 | Removes the parameter from the parameter set corresponding to the given property.                                            |
| [`ReplaceGeometryAndMesh`](#Model.ReplaceGeometryAndMesh)                                                                                   | ReplaceGeometryAndMesh method.                                                                                               |
| [`SendGeometrySelectionFromActiveObjectsToMeshWorkflowByType`](#Model.SendGeometrySelectionFromActiveObjectsToMeshWorkflowByType)           | Creates a new MeshWorkflowGroup                                                                                              |
| [`SendGeometrySelectionFromGraphicsToMeshWorkflowByType`](#Model.SendGeometrySelectionFromGraphicsToMeshWorkflowByType)                     | Creates a new MeshWorkflowGroup                                                                                              |
| [`SetTransformationOnPart`](#Model.SetTransformationOnPart)                                                                                 | Transform a part with given transformation. Only rigid body transformation is                                                |
| [`Solve`](#Model.Solve)                                                                                                                     | Run the Solve action.                                                                                                        |
| [`UnfreezeMeshOnSelectedParts`](#Model.UnfreezeMeshOnSelectedParts)                                                                         | Run the UnfreezeMeshOnSelectedParts action.                                                                                  |
| [`UpdateGeometryFromSource`](#Model.UpdateGeometryFromSource)                                                                               | Run the UpdateGeometryFromSource action.                                                                                     |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AEDTImportManager`](#Model.AEDTImportManager)                                 | Get the manager for manipulating import settings for AEDT files.                                                                                                                                                                                                                                              |
| [`AMProcess`](AdditiveManufacturing/AMProcess.md#AMProcess)                     | Gets the AMProcess.                                                                                                                                                                                                                                                                                           |
| [`Ambient`](#Model.Ambient)                                                     | Gets or sets the Ambient Lighting factor.                                                                                                                                                                                                                                                                     |
| [`Analyses`](#Model.Analyses)                                                   | Gets the Analyses.                                                                                                                                                                                                                                                                                            |
| [`AttachedRefs`](#Model.AttachedRefs)                                           | AttachedRefs property.                                                                                                                                                                                                                                                                                        |
| [`BodyMergeSequence`](BodyMergeSequence.md#BodyMergeSequence)                   | Returns the BodyMergeSequence.                                                                                                                                                                                                                                                                                |
| [`BoundaryConditionsGroup`](BoundaryConditionsGroup.md#BoundaryConditionsGroup) | Get the BoundaryConditionsGroup if created, otherwise null.                                                                                                                                                                                                                                                   |
| [`CellId`](#Model.CellId)                                                       | Gets the CellId.                                                                                                                                                                                                                                                                                              |
| [`Children`](#Model.Children)                                                   | Gets the list of children.                                                                                                                                                                                                                                                                                    |
| [`ClsId`](#Model.ClsId)                                                         | ClsId property.                                                                                                                                                                                                                                                                                               |
| [`Color`](#Color)                                 | Gets or sets the Lighting Color. Can also be set using Hex color codes; three byte hexadecimal numbers (consisting of six digits) preceded by '0x', where each byte (or pair of characters in the Hex code) represents the intensity of red, green and blue in the color respectively. For example, 0xFFFFFF. |
| [`Comments`](#Model.Comments)                                                   | Gets the list of associated comments.                                                                                                                                                                                                                                                                         |
| [`CondensedGeometry`](CondensedGeometry.md#CondensedGeometry)                   | Gets the CondensedGeometry.                                                                                                                                                                                                                                                                                   |
| [`Connections`](Connections/Connections.md#Connections)                         | Gets the Connections.                                                                                                                                                                                                                                                                                         |
| [`ConstructionGeometry`](ConstructionGeometry.md#ConstructionGeometry)          | Gets the ConstructionGeometry.                                                                                                                                                                                                                                                                                |
| [`Control`](#Model.Control)                                                     | Gets the Control.                                                                                                                                                                                                                                                                                             |
| [`CoordinateSystems`](CoordinateSystems.md#CoordinateSystems)                   | Gets the CoordinateSystems.                                                                                                                                                                                                                                                                                   |
| [`CrossSections`](CrossSections.md#CrossSections)                               | Gets the CrossSections.                                                                                                                                                                                                                                                                                       |
| [`DataModelObjectCategory`](#Model.DataModelObjectCategory)                     | Gets the current DataModelObject's category.                                                                                                                                                                                                                                                                  |
| [`Diffuse`](#Model.Diffuse)                                                     | Gets or sets the Diffuse Lighting factor.                                                                                                                                                                                                                                                                     |
| [`Environments`](#Model.Environments)                                           | Gets the Analyses.                                                                                                                                                                                                                                                                                            |
| [`FeatureDetection`](FeatureDetection.md#FeatureDetection)                      | Gets the FeatureDetection.                                                                                                                                                                                                                                                                                    |
| [`Figures`](#Model.Figures)                                                     | Gets the list of associated figures.                                                                                                                                                                                                                                                                          |
| [`Fracture`](Fracture.md#Fracture)                                              | Gets the Fracture.                                                                                                                                                                                                                                                                                            |
| [`Geometry`](Geometry.md#Geometry)                                              | Gets the Geometry.                                                                                                                                                                                                                                                                                            |
| [`GeometryImportGroup`](GeometryImportGroup.md#GeometryImportGroup)             | Gets the GeometryImportGroup.                                                                                                                                                                                                                                                                                 |
| [`GroupingFolder`](#Model.GroupingFolder)                                       | GroupingFolder property.                                                                                                                                                                                                                                                                                      |
| [`IconName`](#Model.IconName)                                                   | IconName property.                                                                                                                                                                                                                                                                                            |
| [`Images`](#Model.Images)                                                       | Gets the list of associated images.                                                                                                                                                                                                                                                                           |
| [`ImportedReinforcements`](ImportedReinforcements.md#ImportedReinforcements)    | Gets the ImportedReinforcements.                                                                                                                                                                                                                                                                              |
| [`InternalObject`](#Model.InternalObject)                                       | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                            |
| [`Materials`](Materials.md#Materials)                                           | Gets the Materials.                                                                                                                                                                                                                                                                                           |
| [`Measures`](Measures.md#Measures)                                              | Gets the Measures.                                                                                                                                                                                                                                                                                            |
| [`Mesh`](MeshControls/Mesh.md#Mesh)                                             | Gets the Mesh.                                                                                                                                                                                                                                                                                                |
| [`MeshEdit`](MeshEdit.md#MeshEdit)                                              | Gets the MeshEdit.                                                                                                                                                                                                                                                                                            |
| [`MeshNumbering`](MeshNumbering.md#MeshNumbering)                               | Gets the MeshNumbering.                                                                                                                                                                                                                                                                                       |
| [`MeshWorkflowGroup`](MeshWorkflowGroup.md#MeshWorkflowGroup)                   | Gets the MeshWorkflowGroup.                                                                                                                                                                                                                                                                                   |
| [`Name`](#Model.Name)                                                           | Name property.                                                                                                                                                                                                                                                                                                |
| [`NamedSelections`](NamedSelections.md#NamedSelections)                         | Gets the NamedSelections.                                                                                                                                                                                                                                                                                     |
| [`ObjectId`](#Model.ObjectId)                                                   | ObjectId property.                                                                                                                                                                                                                                                                                            |
| [`ObjectState`](#Model.ObjectState)                                             | ObjectState property.                                                                                                                                                                                                                                                                                         |
| [`ObjectTags`](#Model.ObjectTags)                                               | ObjectTags property.                                                                                                                                                                                                                                                                                          |
| [`ParameterVariableGroup`](ParameterVariableGroup.md#ParameterVariableGroup)    | Gets the ParameterVariableGroup.                                                                                                                                                                                                                                                                              |
| [`Parent`](#Model.Parent)                                                       | Parent property.                                                                                                                                                                                                                                                                                              |
| [`PartTransformGroup`](PartTransformGroup.md#PartTransformGroup)                | Gets the PartTransformGroup.                                                                                                                                                                                                                                                                                  |
| [`Properties`](#Model.Properties)                                               | Gets the list of properties for this object.                                                                                                                                                                                                                                                                  |
| [`RemotePoints`](RemotePoints.md#RemotePoints)                                  | Gets the RemotePoints.                                                                                                                                                                                                                                                                                        |
| [`Specular`](#Model.Specular)                                                   | Gets or sets the Specular Lighting factor.                                                                                                                                                                                                                                                                    |
| [`State`](#Model.State)                                                         | State property.                                                                                                                                                                                                                                                                                               |
| [`Symmetry`](Symmetry.md#Symmetry)                                              | Gets the Symmetry.                                                                                                                                                                                                                                                                                            |
| [`SystemCaption`](#Model.SystemCaption)                                         | Gets the SystemCaption.                                                                                                                                                                                                                                                                                       |
| [`TableGroup`](TableGroup.md#TableGroup)                                        | Gets the TableGroup.                                                                                                                                                                                                                                                                                          |
| [`VirtualTopology`](VirtualTopology.md#VirtualTopology)                         | Gets the VirtualTopology.                                                                                                                                                                                                                                                                                     |
| [`VisibleProperties`](#Model.VisibleProperties)                                 | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                                 |

<a id="property-detail"></a>

## Property detail

<a id="Model.AEDTImportManager"></a>

### *property* Model.AEDTImportManager *: Ansys.ACT.Automation.Mechanical.AEDTImportManager | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the manager for manipulating import settings for AEDT files.

<!-- !! processed by numpydoc !! -->

<a id="Model.AMProcess"></a>

### *property* Model.AMProcess *: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMProcess](AdditiveManufacturing/AMProcess.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMProcess) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the AMProcess.

<!-- !! processed by numpydoc !! -->

<a id="Model.Ambient"></a>

### *property* Model.Ambient *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Ambient Lighting factor.

<!-- !! processed by numpydoc !! -->

<a id="Model.Analyses"></a>

### *property* Model.Analyses *: List[[Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Analyses.

<!-- !! processed by numpydoc !! -->

<a id="Model.AttachedRefs"></a>

### *property* Model.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Model.BodyMergeSequence"></a>

### *property* Model.BodyMergeSequence *: [Ansys.ACT.Automation.Mechanical.BodyMergeSequence](BodyMergeSequence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BodyMergeSequence) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the BodyMergeSequence.

<!-- !! processed by numpydoc !! -->

<a id="Model.BoundaryConditionsGroup"></a>

### *property* Model.BoundaryConditionsGroup *: [Ansys.ACT.Automation.Mechanical.BoundaryConditionsGroup](BoundaryConditionsGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditionsGroup) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the BoundaryConditionsGroup if created, otherwise null.

<!-- !! processed by numpydoc !! -->

<a id="Model.CellId"></a>

### *property* Model.CellId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CellId.

<!-- !! processed by numpydoc !! -->

<a id="Model.Children"></a>

### *property* Model.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Model.ClsId"></a>

### *property* Model.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Model.Color"></a>

### *property* Model.Color *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lighting Color. Can also be set using Hex color codes; three byte hexadecimal numbers (consisting of six digits) preceded by '0x', where each byte (or pair of characters in the Hex code) represents the intensity of red, green and blue in the color respectively. For example, 0xFFFFFF.

<!-- !! processed by numpydoc !! -->

<a id="Model.Comments"></a>

### *property* Model.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Model.CondensedGeometry"></a>

### *property* Model.CondensedGeometry *: [Ansys.ACT.Automation.Mechanical.CondensedGeometry](CondensedGeometry.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CondensedGeometry) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CondensedGeometry.

<!-- !! processed by numpydoc !! -->

<a id="Model.Connections"></a>

### *property* Model.Connections *: [Ansys.ACT.Automation.Mechanical.Connections.Connections](Connections/Connections.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Connections) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

<a id="Model.ConstructionGeometry"></a>

### *property* Model.ConstructionGeometry *: [Ansys.ACT.Automation.Mechanical.ConstructionGeometry](ConstructionGeometry.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ConstructionGeometry) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ConstructionGeometry.

<!-- !! processed by numpydoc !! -->

<a id="Model.Control"></a>

### *property* Model.Control *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Control.

<!-- !! processed by numpydoc !! -->

<a id="Model.CoordinateSystems"></a>

### *property* Model.CoordinateSystems *: [Ansys.ACT.Automation.Mechanical.CoordinateSystems](CoordinateSystems.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystems) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CoordinateSystems.

<!-- !! processed by numpydoc !! -->

<a id="Model.CrossSections"></a>

### *property* Model.CrossSections *: [Ansys.ACT.Automation.Mechanical.CrossSections](CrossSections.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CrossSections) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrossSections.

<!-- !! processed by numpydoc !! -->

<a id="Model.DataModelObjectCategory"></a>

### *property* Model.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Model.Diffuse"></a>

### *property* Model.Diffuse *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Diffuse Lighting factor.

<!-- !! processed by numpydoc !! -->

<a id="Model.Environments"></a>

### *property* Model.Environments *: Iterable[[Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Analyses.

<!-- !! processed by numpydoc !! -->

<a id="Model.FeatureDetection"></a>

### *property* Model.FeatureDetection *: [Ansys.ACT.Automation.Mechanical.FeatureDetection](FeatureDetection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.FeatureDetection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FeatureDetection.

<!-- !! processed by numpydoc !! -->

<a id="Model.Figures"></a>

### *property* Model.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Model.Fracture"></a>

### *property* Model.Fracture *: [Ansys.ACT.Automation.Mechanical.Fracture](Fracture.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Fracture) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Fracture.

<!-- !! processed by numpydoc !! -->

<a id="Model.Geometry"></a>

### *property* Model.Geometry *: [Ansys.ACT.Automation.Mechanical.Geometry](Geometry.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Geometry) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="Model.GeometryImportGroup"></a>

### *property* Model.GeometryImportGroup *: [Ansys.ACT.Automation.Mechanical.GeometryImportGroup](GeometryImportGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GeometryImportGroup) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the GeometryImportGroup.

<!-- !! processed by numpydoc !! -->

<a id="Model.GroupingFolder"></a>

### *property* Model.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Model.IconName"></a>

### *property* Model.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Model.Images"></a>

### *property* Model.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Model.ImportedReinforcements"></a>

### *property* Model.ImportedReinforcements *: [Ansys.ACT.Automation.Mechanical.ImportedReinforcements](ImportedReinforcements.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedReinforcements) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImportedReinforcements.

<!-- !! processed by numpydoc !! -->

<a id="Model.InternalObject"></a>

### *property* Model.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSModelAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Model.Materials"></a>

### *property* Model.Materials *: [Ansys.ACT.Automation.Mechanical.Materials](Materials.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Materials) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Materials.

<!-- !! processed by numpydoc !! -->

<a id="Model.Measures"></a>

### *property* Model.Measures *: [Ansys.ACT.Automation.Mechanical.Measures](Measures.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Measures) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Measures.

<!-- !! processed by numpydoc !! -->

<a id="Model.Mesh"></a>

### *property* Model.Mesh *: [Ansys.ACT.Automation.Mechanical.MeshControls.Mesh](MeshControls/Mesh.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshControls.Mesh) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Model.MeshEdit"></a>

### *property* Model.MeshEdit *: [Ansys.ACT.Automation.Mechanical.MeshEdit](MeshEdit.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshEdit) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MeshEdit.

<!-- !! processed by numpydoc !! -->

<a id="Model.MeshNumbering"></a>

### *property* Model.MeshNumbering *: [Ansys.ACT.Automation.Mechanical.MeshNumbering](MeshNumbering.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshNumbering) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MeshNumbering.

<!-- !! processed by numpydoc !! -->

<a id="Model.MeshWorkflowGroup"></a>

### *property* Model.MeshWorkflowGroup *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowGroup](MeshWorkflowGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowGroup) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MeshWorkflowGroup.

<!-- !! processed by numpydoc !! -->

<a id="Model.Name"></a>

### *property* Model.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Model.NamedSelections"></a>

### *property* Model.NamedSelections *: [Ansys.ACT.Automation.Mechanical.NamedSelections](NamedSelections.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelections) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="Model.ObjectId"></a>

### *property* Model.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Model.ObjectState"></a>

### *property* Model.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Model.ObjectTags"></a>

### *property* Model.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Model.ParameterVariableGroup"></a>

### *property* Model.ParameterVariableGroup *: [Ansys.ACT.Automation.Mechanical.ParameterVariableGroup](ParameterVariableGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ParameterVariableGroup) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ParameterVariableGroup.

<!-- !! processed by numpydoc !! -->

<a id="Model.Parent"></a>

### *property* Model.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Model.PartTransformGroup"></a>

### *property* Model.PartTransformGroup *: [Ansys.ACT.Automation.Mechanical.PartTransformGroup](PartTransformGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PartTransformGroup) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PartTransformGroup.

<!-- !! processed by numpydoc !! -->

<a id="Model.Properties"></a>

### *property* Model.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Model.RemotePoints"></a>

### *property* Model.RemotePoints *: [Ansys.ACT.Automation.Mechanical.RemotePoints](RemotePoints.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoints) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RemotePoints.

<!-- !! processed by numpydoc !! -->

<a id="Model.Specular"></a>

### *property* Model.Specular *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Specular Lighting factor.

<!-- !! processed by numpydoc !! -->

<a id="Model.State"></a>

### *property* Model.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Model.Symmetry"></a>

### *property* Model.Symmetry *: [Ansys.ACT.Automation.Mechanical.Symmetry](Symmetry.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Symmetry) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Symmetry.

<!-- !! processed by numpydoc !! -->

<a id="Model.SystemCaption"></a>

### *property* Model.SystemCaption *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SystemCaption.

<!-- !! processed by numpydoc !! -->

<a id="Model.TableGroup"></a>

### *property* Model.TableGroup *: [Ansys.ACT.Automation.Mechanical.TableGroup](TableGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TableGroup) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TableGroup.

<!-- !! processed by numpydoc !! -->

<a id="Model.VirtualTopology"></a>

### *property* Model.VirtualTopology *: [Ansys.ACT.Automation.Mechanical.VirtualTopology](VirtualTopology.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.VirtualTopology) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the VirtualTopology.

<!-- !! processed by numpydoc !! -->

<a id="Model.VisibleProperties"></a>

### *property* Model.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Model.Activate"></a>

### Model.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddAIShapeClusterGroup"></a>

### Model.AddAIShapeClusterGroup() → Ansys.ACT.Automation.Mechanical.AIShapeClusterGroup

Creates a new child AINamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddAMProcess"></a>

### Model.AddAMProcess() → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMProcess](AdditiveManufacturing/AMProcess.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMProcess)

Creates a new AMProcess

<!-- !! processed by numpydoc !! -->

<a id="Model.AddBodyMergeSequence"></a>

### Model.AddBodyMergeSequence() → [Ansys.ACT.Automation.Mechanical.BodyMergeSequence](BodyMergeSequence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BodyMergeSequence)

Creates a BodyMergeSequence under the Model.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddBoundaryConditionsGroup"></a>

### Model.AddBoundaryConditionsGroup() → [Ansys.ACT.Automation.Mechanical.BoundaryConditionsGroup](BoundaryConditionsGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditionsGroup)

Creates and adds a BoundaryConditionsGroup.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddChart"></a>

### Model.AddChart() → [Ansys.ACT.Automation.Mechanical.Chart](Chart.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Chart)

Creates a new child Chart.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCoSimulationPin"></a>

### Model.AddCoSimulationPin() → [Ansys.ACT.Automation.Mechanical.CoSimulationPin](CoSimulationPin.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoSimulationPin)

Creates a new CoSimulationPin

<!-- !! processed by numpydoc !! -->

<a id="Model.AddComment"></a>

### Model.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCompositeFailureCriteria"></a>

### Model.AddCompositeFailureCriteria() → [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureCriteria](Results/CompositeFailureResults/CompositeFailureCriteria.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureCriteria)

Creates a new Composite Failure Criteria object.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCondensedGeometry"></a>

### Model.AddCondensedGeometry() → [Ansys.ACT.Automation.Mechanical.CondensedGeometry](CondensedGeometry.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CondensedGeometry)

Creates a new CondensedGeometry

<!-- !! processed by numpydoc !! -->

<a id="Model.AddConnections"></a>

### Model.AddConnections() → [Ansys.ACT.Automation.Mechanical.Connections.Connections](Connections/Connections.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Connections)

Creates a new Connections

<!-- !! processed by numpydoc !! -->

<a id="Model.AddConstructionGeometry"></a>

### Model.AddConstructionGeometry() → [Ansys.ACT.Automation.Mechanical.ConstructionGeometry](ConstructionGeometry.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ConstructionGeometry)

Creates a new ConstructionGeometry

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCoordinateSystemInternal"></a>

### Model.AddCoordinateSystemInternal() → [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem)

AddCoordinateSystemInternal method.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCoupledFieldHarmonic"></a>

### Model.AddCoupledFieldHarmonic() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddCoupledFieldHarmonic action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCoupledFieldModal"></a>

### Model.AddCoupledFieldModal() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddCoupledFieldModal action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCoupledFieldStatic"></a>

### Model.AddCoupledFieldStatic() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddCoupledFieldStatic action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCoupledFieldTransient"></a>

### Model.AddCoupledFieldTransient() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddCoupledFieldTransient action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddCrossSections"></a>

### Model.AddCrossSections() → [Ansys.ACT.Automation.Mechanical.CrossSections](CrossSections.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CrossSections)

Creates new CrossSections group.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddDesignAssessmentAnalysis"></a>

### Model.AddDesignAssessmentAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddDesignAssessmentAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddDesignLifeAnalysis"></a>

### Model.AddDesignLifeAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddDesignLifeAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddEigenvalueBucklingAnalysis"></a>

### Model.AddEigenvalueBucklingAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddEigenvalueBucklingAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddElectricAnalysis"></a>

### Model.AddElectricAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddElectricAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddExplicitDynamicsAnalysis"></a>

### Model.AddExplicitDynamicsAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddExplicitDynamicsAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddFatigueCombination"></a>

### Model.AddFatigueCombination() → [Ansys.ACT.Automation.Mechanical.FatigueCombination](FatigueCombination.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.FatigueCombination)

Creates a new FatigueCombination

<!-- !! processed by numpydoc !! -->

<a id="Model.AddFeatureDetection"></a>

### Model.AddFeatureDetection() → [Ansys.ACT.Automation.Mechanical.FeatureDetection](FeatureDetection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.FeatureDetection)

Creates a new FeatureDetection

<!-- !! processed by numpydoc !! -->

<a id="Model.AddFigure"></a>

### Model.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddForcedResponseAnalysis"></a>

### Model.AddForcedResponseAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddForcedResponseAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddFracture"></a>

### Model.AddFracture() → [Ansys.ACT.Automation.Mechanical.Fracture](Fracture.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Fracture)

Creates a new Fracture

<!-- !! processed by numpydoc !! -->

<a id="Model.AddGeometryImportGroup"></a>

### Model.AddGeometryImportGroup() → [Ansys.ACT.Automation.Mechanical.GeometryImportGroup](GeometryImportGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GeometryImportGroup)

Get the GeometryImportGroup instance.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddHarmonicAcousticAnalysis"></a>

### Model.AddHarmonicAcousticAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddHarmonicAcousticAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddHarmonicResponseAnalysis"></a>

### Model.AddHarmonicResponseAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddHarmonicResponseAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddHotspotDetectionTool"></a>

### Model.AddHotspotDetectionTool() → Ansys.ACT.Automation.Mechanical.HotspotDetectionTool

Creates a new HotspotDetectionTool

<!-- !! processed by numpydoc !! -->

<a id="Model.AddImage"></a>

### Model.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Model.AddImagePlane"></a>

### Model.AddImagePlane() → [Ansys.ACT.Automation.Mechanical.ImagePlane](ImagePlane.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImagePlane)

Creates an ImagePlane and adds it as a child of this object.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddLSDynaAcousticsAnalysis"></a>

### Model.AddLSDynaAcousticsAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddLSDynaAcousticsAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddLSDynaAnalysis"></a>

### Model.AddLSDynaAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddLSDynaAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddLSDynaRestartAnalysis"></a>

### Model.AddLSDynaRestartAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddLSDynaRestartAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddMagnetostaticAnalysis"></a>

### Model.AddMagnetostaticAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddMagnetostaticAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddMeasures"></a>

### Model.AddMeasures() → [Ansys.ACT.Automation.Mechanical.Measures](Measures.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Measures)

Creates a new Measures

<!-- !! processed by numpydoc !! -->

<a id="Model.AddMeshEdit"></a>

### Model.AddMeshEdit() → [Ansys.ACT.Automation.Mechanical.MeshEdit](MeshEdit.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshEdit)

Creates a new MeshEdit

<!-- !! processed by numpydoc !! -->

<a id="Model.AddMeshNumbering"></a>

### Model.AddMeshNumbering() → [Ansys.ACT.Automation.Mechanical.MeshNumbering](MeshNumbering.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshNumbering)

Creates a new MeshNumbering

<!-- !! processed by numpydoc !! -->

<a id="Model.AddMeshWorkflowGroup"></a>

### Model.AddMeshWorkflowGroup() → [Ansys.ACT.Automation.Mechanical.MeshWorkflowGroup](MeshWorkflowGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowGroup)

Creates a new MeshWorkflowGroup

<!-- !! processed by numpydoc !! -->

<a id="Model.AddModalAcousticAnalysis"></a>

### Model.AddModalAcousticAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddModalAcousticAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddModalAnalysis"></a>

### Model.AddModalAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddModalAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddMotionAnalysis"></a>

### Model.AddMotionAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddMotionAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddNamedSelection"></a>

### Model.AddNamedSelection() → [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)

Creates a new child NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddNamedSelectionFromSelectedConnections"></a>

### Model.AddNamedSelectionFromSelectedConnections() → List[[Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Creates a new Named Selections (Components) for the selected connections.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddParameterVariableGroup"></a>

### Model.AddParameterVariableGroup() → [Ansys.ACT.Automation.Mechanical.ParameterVariableGroup](ParameterVariableGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ParameterVariableGroup)

Get the ParameterVariableGroup instance.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddPartTransform"></a>

### Model.AddPartTransform() → [Ansys.ACT.Automation.Mechanical.PartTransform](PartTransform.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PartTransform)

Creates a new child PartTransform.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddPythonCodeEventBased"></a>

### Model.AddPythonCodeEventBased() → [Ansys.ACT.Automation.Mechanical.PythonCodeEventBased](PythonCodeEventBased.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PythonCodeEventBased)

Creates a new PythonCodeEventBased

<!-- !! processed by numpydoc !! -->

<a id="Model.AddPythonResult"></a>

### Model.AddPythonResult() → [Ansys.ACT.Automation.Mechanical.Results.ScriptableResults.PythonResult](Results/ScriptableResults/PythonResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ScriptableResults.PythonResult)

Creates a new PythonResult

<!-- !! processed by numpydoc !! -->

<a id="Model.AddRandomVibrationAnalysis"></a>

### Model.AddRandomVibrationAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddRandomVibrationAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddRemotePoint"></a>

### Model.AddRemotePoint() → [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint)

Creates a new child RemotePoint.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddRemotePointInternal"></a>

### Model.AddRemotePointInternal() → [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint)

AddRemotePointInternal method.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddResponseSpectrumAnalysis"></a>

### Model.AddResponseSpectrumAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddResponseSpectrumAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddRigidDynamicsAnalysis"></a>

### Model.AddRigidDynamicsAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddRigidDynamicsAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddSolutionCombination"></a>

### Model.AddSolutionCombination() → [Ansys.ACT.Automation.Mechanical.SolutionCombination](SolutionCombination.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SolutionCombination)

Creates a new SolutionCombination

<!-- !! processed by numpydoc !! -->

<a id="Model.AddStaticAcousticAnalysis"></a>

### Model.AddStaticAcousticAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddStaticAcousticAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddStaticStructuralAnalysis"></a>

### Model.AddStaticStructuralAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddStaticStructuralAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddSteadyStateThermalAnalysis"></a>

### Model.AddSteadyStateThermalAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddSteadyStateThermalAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddSubstructureGenerationAnalysis"></a>

### Model.AddSubstructureGenerationAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddSubstructureGenerationAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddSymmetry"></a>

### Model.AddSymmetry() → [Ansys.ACT.Automation.Mechanical.Symmetry](Symmetry.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Symmetry)

Creates a new Symmetry

<!-- !! processed by numpydoc !! -->

<a id="Model.AddTableGroup"></a>

### Model.AddTableGroup(activate: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [Ansys.ACT.Automation.Mechanical.TableGroup](TableGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TableGroup)

Get the TableGroup instance.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddThermalElectricAnalysis"></a>

### Model.AddThermalElectricAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddThermalElectricAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddTopologyOptimizationAnalysis"></a>

### Model.AddTopologyOptimizationAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddTopologyOptimizationAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddTransientStructuralAnalysis"></a>

### Model.AddTransientStructuralAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddTransientStructuralAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddTransientThermalAnalysis"></a>

### Model.AddTransientThermalAnalysis() → [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)

Run the AddTransientThermalAnalysis action.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddTreeGroupingFolder"></a>

### Model.AddTreeGroupingFolder(dataModelObjects: Iterable) → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

### Model.AddTreeGroupingFolder(dataModelObject: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Move the Data Model Objects to a new TreeGroupingFolder.

<!-- !! processed by numpydoc !! -->

<a id="Model.AddVirtualTopology"></a>

### Model.AddVirtualTopology() → [Ansys.ACT.Automation.Mechanical.VirtualTopology](VirtualTopology.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.VirtualTopology)

Creates a new VirtualTopology

<!-- !! processed by numpydoc !! -->

<a id="Model.AutoFilter"></a>

### Model.AutoFilter() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Enables interface filtering that only displays model-level items applicable to the
    particular analysis type environments in which you are working.
```

<!-- !! processed by numpydoc !! -->

<a id="Model.CenterOfMass"></a>

### Model.CenterOfMass() → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Calculates the center of mass of all unsupressed bodies and point masses.

<!-- !! processed by numpydoc !! -->

<a id="Model.ClearGeneratedData"></a>

### Model.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="Model.Copy"></a>

### Model.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Model.CopyTo"></a>

### Model.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Model.CreateCylindricalBolt"></a>

### Model.CreateCylindricalBolt(headHeight: Any, headRadius: Any, shankLength: Any, shankRadius: Any) → Ansys.ACT.Interfaces.Geometry.IGeoPart

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

### Model.CreateCylindricalNut(height: Any, innerRadius: Any, outerRadius: Any) → Ansys.ACT.Interfaces.Geometry.IGeoPart

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

### Model.CreateHexBolt(headHeight: Any, wrenchWidth: Any, shankLength: Any, shankRadius: Any) → Ansys.ACT.Interfaces.Geometry.IGeoPart

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

### Model.CreateHexNut(height: Any, innerRadius: Any, wrenchWidth: Any) → Ansys.ACT.Interfaces.Geometry.IGeoPart

```text
Create a hex nut with the specified dimensions. The nut will be created so that the
base of the nut is at the origin and aligned with the Y-Z plane.
Valid input arguments include:
  1) `double`
  2) `Quantity`
  3) A string representation of `double` or `Quantity`, i.e., "1.0" or "1.0 [cm]"
```

<!-- !! processed by numpydoc !! -->

<a id="Model.CreateObjRef"></a>

### Model.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Model.CreateParameter"></a>

### Model.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Model.CreatePartInstance"></a>

### Model.CreatePartInstance(part: Ansys.ACT.Interfaces.Geometry.IGeoPart) → Ansys.ACT.Interfaces.Geometry.IGeoPart

```text
This will create an instance (not an independent copy) of the provided part. The use of
instanced parts for replication is highly recommended for memory and performance
reasons.
```

<!-- !! processed by numpydoc !! -->

<a id="Model.Cut"></a>

### Model.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Model.DeleteParts"></a>

### Model.DeleteParts(parts: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

Deletes the provide parts if they exist. Otherwise, nothing happens. An exception will be issued if the argument is invalid.

<!-- !! processed by numpydoc !! -->

<a id="Model.DisableFilter"></a>

### Model.DisableFilter() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Disables interface filtering so that model-level items are not filtered out based on
    the environment types in your model.
```

<!-- !! processed by numpydoc !! -->

<a id="Model.Duplicate"></a>

### Model.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Model.Equals"></a>

### Model.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Model.EvaluateScriptDefinedResults"></a>

### Model.EvaluateScriptDefinedResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

EvaluateScriptDefinedResults method.

<!-- !! processed by numpydoc !! -->

<a id="Model.FreezeMeshOnSelectedParts"></a>

### Model.FreezeMeshOnSelectedParts(parts: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FreezeMeshOnSelectedParts action.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetAPIName"></a>

### Model.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetAllFECommandsRepositoriesFullSourceFileIdentifiers"></a>

### Model.GetAllFECommandsRepositoriesFullSourceFileIdentifiers() → Iterable[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetAllFECommandsRepositoriesFullSourceFileIdentifiers method.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetAllFECommandsRepositoriesFullSourceFileIdentifiersInputFiles"></a>

### Model.GetAllFECommandsRepositoriesFullSourceFileIdentifiersInputFiles() → Iterable[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetAllFECommandsRepositoriesFullSourceFileIdentifiersInputFiles method.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetAllProperties"></a>

### Model.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetChildren"></a>

### Model.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Model.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetDetailsView"></a>

### Model.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetEnumName"></a>

### Model.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Model.GetFECommandsRepositoriesLocation"></a>

### Model.GetFECommandsRepositoriesLocation() → Iterable[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetFECommandsRepositoriesLocation method.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetFECommandsRepositoriesNumberOfCopies"></a>

### Model.GetFECommandsRepositoriesNumberOfCopies() → Iterable[[int](https://docs.python.org/3/builtins/functions.html#int)]

GetFECommandsRepositoriesNumberOfCopies method.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetFECommandsRepository"></a>

### Model.GetFECommandsRepository(source: [str](https://docs.python.org/3/builtins/stdtypes.html#str), fileIdentifier: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.FE.CommandRepository](FE/CommandRepository.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.FE.CommandRepository)

Gets the commands repository for a file from external model.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetHashCode"></a>

### Model.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetIconFile"></a>

### Model.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetLifetimeService"></a>

### Model.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetObjectData"></a>

### Model.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetParameter"></a>

### Model.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetPath"></a>

### Model.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetPropertyName"></a>

### Model.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetPropertyValue"></a>

### Model.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetResults"></a>

### Model.GetResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Gets the Results from the server.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetTransformationOnPart"></a>

### Model.GetTransformationOnPart(part: Ansys.ACT.Interfaces.Geometry.IGeoPart) → [Ansys.Mechanical.DataModel.Utilities.RigidBodyTransformationMatrix](../../../Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Utilities.RigidBodyTransformationMatrix)

Get the transformation matrix of the provided part.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetVisibleProperties"></a>

### Model.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Model.GetVisiblePropertyNames"></a>

### Model.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Model.GroupAllSimilarChildren"></a>

### Model.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Model.GroupSimilarObjects"></a>

### Model.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Model.HasDetermined2D3D"></a>

### Model.HasDetermined2D3D() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

HasDetermined2D3D method.

<!-- !! processed by numpydoc !! -->

<a id="Model.ImportModelFromDisco"></a>

### Model.ImportModelFromDisco() → [None](https://docs.python.org/3/builtins/constants.html#None)

ImportModelFromDisco method.

<!-- !! processed by numpydoc !! -->

<a id="Model.InitializeLifetimeService"></a>

### Model.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Model.Is2DGeometry"></a>

### Model.Is2DGeometry() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Is2DGeometry method.

<!-- !! processed by numpydoc !! -->

<a id="Model.IsPropertyEditable"></a>

### Model.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Model.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Model.IsPropertyVisible"></a>

### Model.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Model.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Model.LoadResultFile"></a>

### Model.LoadResultFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Solution](Solution.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Solution)

Creates a results-only system and loads the result file.

<!-- !! processed by numpydoc !! -->

<a id="Model.Paste"></a>

### Model.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Model.PropertyByAPIName"></a>

### Model.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Model.PropertyById"></a>

### Model.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Model.PropertyByName"></a>

### Model.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Model.RefreshMaterials"></a>

### Model.RefreshMaterials() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RefresMaterials action.

<!-- !! processed by numpydoc !! -->

<a id="Model.RemoveFromGroup"></a>

### Model.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Model.RemoveParameter"></a>

### Model.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Model.ReplaceGeometryAndMesh"></a>

### Model.ReplaceGeometryAndMesh(pmdbFilePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), acmoFilePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), protoXmlFilePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ReplaceGeometryAndMesh method.

<!-- !! processed by numpydoc !! -->

<a id="Model.SendGeometrySelectionFromActiveObjectsToMeshWorkflowByType"></a>

### Model.SendGeometrySelectionFromActiveObjectsToMeshWorkflowByType(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WorkflowType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType)) → [Ansys.ACT.Automation.Mechanical.MeshWorkflow](MeshWorkflow.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflow)

Creates a new MeshWorkflowGroup

<!-- !! processed by numpydoc !! -->

<a id="Model.SendGeometrySelectionFromGraphicsToMeshWorkflowByType"></a>

### Model.SendGeometrySelectionFromGraphicsToMeshWorkflowByType(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WorkflowType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType)) → [Ansys.ACT.Automation.Mechanical.MeshWorkflow](MeshWorkflow.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflow)

Creates a new MeshWorkflowGroup

<!-- !! processed by numpydoc !! -->

<a id="Model.SetTransformationOnPart"></a>

### Model.SetTransformationOnPart(part: Ansys.ACT.Interfaces.Geometry.IGeoPart, transformationMatrix: [Ansys.Mechanical.DataModel.Utilities.RigidBodyTransformationMatrix](../../../Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Utilities.RigidBodyTransformationMatrix)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Transform a part with given transformation. Only rigid body transformation is
supported, i.e., no scaling will be performed. The validity of “transformationMatrix”
will be checked against the constraints of rigid body transforms; an error will be
emitted if the matrix is ill-formed.
```

<!-- !! processed by numpydoc !! -->

<a id="Model.Solve"></a>

### Model.Solve(wait: [bool](https://docs.python.org/3/builtins/functions.html#bool), config: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### Model.Solve(wait: [bool](https://docs.python.org/3/builtins/functions.html#bool), config: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveConfiguration](../../Mechanical/Application/SolveProcessSettings/SolveConfiguration.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveConfiguration)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Solve action.

<!-- !! processed by numpydoc !! -->

<a id="Model.UnfreezeMeshOnSelectedParts"></a>

### Model.UnfreezeMeshOnSelectedParts(parts: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the UnfreezeMeshOnSelectedParts action.

<!-- !! processed by numpydoc !! -->

<a id="Model.UpdateGeometryFromSource"></a>

### Model.UpdateGeometryFromSource() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the UpdateGeometryFromSource action.

<!-- !! processed by numpydoc !! -->

