# `AMProcess`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMProcess"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMProcess(internalObject: Any)

<a id="AMProcess"></a>

### *class* AMProcess(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AMProcess.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`IsStaticAnalysisDownstreamOfThermalAnalysis`](#AMProcess.IsStaticAnalysisDownstreamOfThermalAnalysis)   | IsStaticAnalysisDownstreamOfThermalAnalysis method.   |

### Methods

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AMProcess.Activate)                                   | Activate the current object.                                                                |
| [`AddCartesianMesh`](#AMProcess.AddCartesianMesh)                   | AddCartesianMesh method.                                                                    |
| [`AddComment`](#AMProcess.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AMProcess.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddGeneratedAMPowder`](#AMProcess.AddGeneratedAMPowder)           | Creates a new GeneratedAMPowder                                                             |
| [`AddGeneratedAMSupport`](#AMProcess.AddGeneratedAMSupport)         | Creates a new GeneratedAMSupport                                                            |
| [`AddImage`](#AMProcess.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddPowderGroup`](#AMProcess.AddPowderGroup)                       | Create a group that contains PredefindAMPowder and GeneratedAMPowder objects.               |
| [`AddPredefinedAMPowder`](#AMProcess.AddPredefinedAMPowder)         | Creates a new PredefinedAMPowder                                                            |
| [`AddPredefinedAMSupport`](#AMProcess.AddPredefinedAMSupport)       | Creates a new PredefinedAMSupport                                                           |
| [`AddSTLAMSupport`](#AMProcess.AddSTLAMSupport)                     | Creates a new STLAMSupport                                                                  |
| [`AddSupportGroup`](#AMProcess.AddSupportGroup)                     | Creates a new AMSupportGroup                                                                |
| [`CleanAMStrains`](#AMProcess.CleanAMStrains)                       | Run the CleanAMStrains action.                                                              |
| [`Copy`](#AMProcess.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AMProcess.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateAMBondConnections`](#AMProcess.CreateAMBondConnections)     | Run the CreateAMBondConnections action.                                                     |
| [`CreateBuildToBaseContact`](#AMProcess.CreateBuildToBaseContact)   | Run the CreateBuildToBaseContact action.                                                    |
| [`CreateObjRef`](#AMProcess.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AMProcess.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AMProcess.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AMProcess.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AMProcess.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AMProcess.Equals)                                       | Equals method.                                                                              |
| [`GenerateAMStrains`](#AMProcess.GenerateAMStrains)                 | Run the GenerateAMStrains action.                                                           |
| [`GetAPIName`](#AMProcess.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AMProcess.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AMProcess.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AMProcess.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AMProcess.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AMProcess.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AMProcess.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AMProcess.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AMProcess.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AMProcess.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AMProcess.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AMProcess.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AMProcess.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetSequence`](#AMProcess.GetSequence)                             | Gets the support removal sequence for a given environment.                                  |
| [`GetVisibleProperties`](#AMProcess.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AMProcess.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AMProcess.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AMProcess.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`HasAMStrains`](#AMProcess.HasAMStrains)                           | Get the HasAMStrains property.                                                              |
| [`InitializeLifetimeService`](#AMProcess.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AMProcess.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AMProcess.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AMProcess.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#AMProcess.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AMProcess.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AMProcess.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AMProcess.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AMProcess.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`ResetAllSequences`](#AMProcess.ResetAllSequences)                 | Resets the sequence for all analyses                                                        |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#AMProcess.AttachedRefs)                             | AttachedRefs property.                                                                                                                                                                 |
| [`BaseGeometry`](#AMProcess.BaseGeometry)                             | Gets or sets the BaseGeometry.                                                                                                                                                         |
| [`BuildGeometry`](#AMProcess.BuildGeometry)                           | Gets or sets the PartGeometry using the deprecated BuildGeometry method.                                                                                                               |
| [`BuildSettings`](#AMProcess.BuildSettings)                           | Gets the build settings object which contains properties related to the build process as applicable such as simulation settings, machine settings, build and cooldown conditions, etc. |
| [`Children`](#AMProcess.Children)                                     | Gets the list of children.                                                                                                                                                             |
| [`ClsId`](#AMProcess.ClsId)                                           | ClsId property.                                                                                                                                                                        |
| [`Comments`](#AMProcess.Comments)                                     | Gets the list of associated comments.                                                                                                                                                  |
| [`DataModelObjectCategory`](#AMProcess.DataModelObjectCategory)       | Gets the current DataModelObject's category.                                                                                                                                           |
| [`DisplayType`](#AMProcess.DisplayType)                               | Gets or sets the AM Process display type. This controls the associated display when the AM Process object is active in the Mechanical application.                                     |
| [`DisplayTypeSSFDirection`](#AMProcess.DisplayTypeSSFDirection)       | Gets or sets the strain scaling factors display type direction when the InherentStrainDefinition is set to Anisotropic.                                                                |
| [`ElementSize`](#AMProcess.ElementSize)                               | Gets or sets the ElementSize.                                                                                                                                                          |
| [`Figures`](#AMProcess.Figures)                                       | Gets the list of associated figures.                                                                                                                                                   |
| [`GroupingFolder`](#AMProcess.GroupingFolder)                         | GroupingFolder property.                                                                                                                                                               |
| [`IconName`](#AMProcess.IconName)                                     | IconName property.                                                                                                                                                                     |
| [`Images`](#AMProcess.Images)                                         | Gets the list of associated images.                                                                                                                                                    |
| [`InternalObject`](#AMProcess.InternalObject)                         | Gets the internal object. For advanced usage only.                                                                                                                                     |
| [`LayerHeight`](#AMProcess.LayerHeight)                               | Gets the element layer height used for the AM build step.                                                                                                                              |
| [`LengthUnits`](#AMProcess.LengthUnits)                               | Gets or sets the LengthUnits.                                                                                                                                                          |
| [`MeshUsingVoxelization`](#AMProcess.MeshUsingVoxelization)           | Gets or sets the MeshUsingVoxelization.                                                                                                                                                |
| [`Name`](#AMProcess.Name)                                             | Name property.                                                                                                                                                                         |
| [`NonlinearEffects`](#AMProcess.NonlinearEffects)                     | Gets or sets the NonlinearEffects.                                                                                                                                                     |
| [`ObjectId`](#AMProcess.ObjectId)                                     | ObjectId property.                                                                                                                                                                     |
| [`ObjectState`](#AMProcess.ObjectState)                               | ObjectState property.                                                                                                                                                                  |
| [`ObjectTags`](#AMProcess.ObjectTags)                                 | ObjectTags property.                                                                                                                                                                   |
| [`Parent`](#AMProcess.Parent)                                         | Parent property.                                                                                                                                                                       |
| [`PartGeometry`](#AMProcess.PartGeometry)                             | Gets or sets the PartGeometry.                                                                                                                                                         |
| [`Properties`](#AMProcess.Properties)                                 | Gets the list of properties for this object.                                                                                                                                           |
| [`RepresentativeMaterial`](#AMProcess.RepresentativeMaterial)         | Get/sets the Representative Material which will be used for calculating heating and cooling time steps in case of multi-material builds only.                                          |
| [`State`](#AMProcess.State)                                           | State property.                                                                                                                                                                        |
| [`SubsampleRate`](#AMProcess.SubsampleRate)                           | Gets or sets the SubsampleRate.                                                                                                                                                        |
| [`ThermalStrainMaterialModel`](#AMProcess.ThermalStrainMaterialModel) | ThermalStrainMaterialModel property.                                                                                                                                                   |
| [`VisibleProperties`](#AMProcess.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                                          |
| [`WallThickness`](#AMProcess.WallThickness)                           | Gets or sets the WallThickness.                                                                                                                                                        |
| [`ZLocationAtTopOfBase`](#AMProcess.ZLocationAtTopOfBase)             | Gets the ZLocationAtTopOfBase.                                                                                                                                                         |

<a id="property-detail"></a>

## Property detail

<a id="AMProcess.AttachedRefs"></a>

### *property* AMProcess.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.BaseGeometry"></a>

### *property* AMProcess.BaseGeometry *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BaseGeometry.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.BuildGeometry"></a>

### *property* AMProcess.BuildGeometry *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PartGeometry using the deprecated BuildGeometry method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.BuildSettings"></a>

### *property* AMProcess.BuildSettings *: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMBuildSettings](AMBuildSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMBuildSettings) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the build settings object which contains properties related to the build process as applicable such as simulation settings, machine settings, build and cooldown conditions, etc.
Throws an exception if the build settings object is invalid or inaccessible.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Children"></a>

### *property* AMProcess.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.ClsId"></a>

### *property* AMProcess.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Comments"></a>

### *property* AMProcess.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.DataModelObjectCategory"></a>

### *property* AMProcess.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.DisplayType"></a>

### *property* AMProcess.DisplayType *: [Ansys.Mechanical.DataModel.Enums.AMDisplayType](../../../../Mechanical/DataModel/Enums/AMDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AM Process display type. This controls the associated display when the AM Process object is active in the Mechanical application.
This can be set to display the Geometry, the Mesh, or any available contour plot of elemental values such as Knockdown Factors or Strain Scaling Factors.
Throws an exception if the display type is set to  or  when there are no voxelized mesh methods present in the model.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.DisplayTypeSSFDirection"></a>

### *property* AMProcess.DisplayTypeSSFDirection *: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.CartesianDirection](../../../../Mechanical/DataModel/MechanicalEnums/Common/CartesianDirection.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Common.CartesianDirection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the strain scaling factors display type direction when the InherentStrainDefinition is set to Anisotropic.
The anisotropic strain scaling factors can be specified either as a constant or a table in the cartesian directions X, Y, and Z.
Throws an exception if the  is invalid or if the
is not specified as .

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.ElementSize"></a>

### *property* AMProcess.ElementSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElementSize.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Figures"></a>

### *property* AMProcess.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GroupingFolder"></a>

### *property* AMProcess.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.IconName"></a>

### *property* AMProcess.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Images"></a>

### *property* AMProcess.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.InternalObject"></a>

### *property* AMProcess.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMProcessSimulationAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.LayerHeight"></a>

### *property* AMProcess.LayerHeight *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the element layer height used for the AM build step.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.LengthUnits"></a>

### *property* AMProcess.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.MeshUsingVoxelization"></a>

### *property* AMProcess.MeshUsingVoxelization *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshUsingVoxelization.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Name"></a>

### *property* AMProcess.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.NonlinearEffects"></a>

### *property* AMProcess.NonlinearEffects *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.ObjectId"></a>

### *property* AMProcess.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.ObjectState"></a>

### *property* AMProcess.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.ObjectTags"></a>

### *property* AMProcess.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Parent"></a>

### *property* AMProcess.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.PartGeometry"></a>

### *property* AMProcess.PartGeometry *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PartGeometry.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Properties"></a>

### *property* AMProcess.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.RepresentativeMaterial"></a>

### *property* AMProcess.RepresentativeMaterial *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get/sets the Representative Material which will be used for calculating heating and cooling time steps in case of multi-material builds only.
This does not change the bodies' material assignment. If unsure, choose the material with the lowest thermal diffusivity.
Throws an exception if the Part Geometry is not set, if all bodies in the Part Geometry share a single material, if the input is not a valid material, or if the material is not assigned to the Part Geometry.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.State"></a>

### *property* AMProcess.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.SubsampleRate"></a>

### *property* AMProcess.SubsampleRate *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SubsampleRate.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.ThermalStrainMaterialModel"></a>

### *property* AMProcess.ThermalStrainMaterialModel *: [Ansys.Mechanical.DataModel.Enums.AMThermalStrainMaterialModel](../../../../Mechanical/DataModel/Enums/AMThermalStrainMaterialModel.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMThermalStrainMaterialModel) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ThermalStrainMaterialModel property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.VisibleProperties"></a>

### *property* AMProcess.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.WallThickness"></a>

### *property* AMProcess.WallThickness *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.ZLocationAtTopOfBase"></a>

### *property* AMProcess.ZLocationAtTopOfBase *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZLocationAtTopOfBase.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMProcess.Activate"></a>

### AMProcess.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddCartesianMesh"></a>

### AMProcess.AddCartesianMesh() → [Ansys.ACT.Automation.Mechanical.MeshControls.AutomaticMethod](../MeshControls/AutomaticMethod.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshControls.AutomaticMethod)

AddCartesianMesh method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddComment"></a>

### AMProcess.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddFigure"></a>

### AMProcess.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddGeneratedAMPowder"></a>

### AMProcess.AddGeneratedAMPowder() → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.GeneratedAMPowder](GeneratedAMPowder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.GeneratedAMPowder)

Creates a new GeneratedAMPowder

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddGeneratedAMSupport"></a>

### AMProcess.AddGeneratedAMSupport() → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.GeneratedAMSupport](GeneratedAMSupport.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.GeneratedAMSupport)

Creates a new GeneratedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddImage"></a>

### AMProcess.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddPowderGroup"></a>

### AMProcess.AddPowderGroup() → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMPowderGroup](AMPowderGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMPowderGroup)

Create a group that contains PredefindAMPowder and GeneratedAMPowder objects.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddPredefinedAMPowder"></a>

### AMProcess.AddPredefinedAMPowder() → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.PredefinedAMPowder](PredefinedAMPowder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.PredefinedAMPowder)

Creates a new PredefinedAMPowder

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddPredefinedAMSupport"></a>

### AMProcess.AddPredefinedAMSupport() → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.PredefinedAMSupport](PredefinedAMSupport.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.PredefinedAMSupport)

Creates a new PredefinedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddSTLAMSupport"></a>

### AMProcess.AddSTLAMSupport() → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.STLAMSupport](STLAMSupport.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.STLAMSupport)

Creates a new STLAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddSupportGroup"></a>

### AMProcess.AddSupportGroup() → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportGroup](AMSupportGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportGroup)

Creates a new AMSupportGroup

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.CleanAMStrains"></a>

### AMProcess.CleanAMStrains() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the CleanAMStrains action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Copy"></a>

### AMProcess.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.CopyTo"></a>

### AMProcess.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.CreateAMBondConnections"></a>

### AMProcess.CreateAMBondConnections() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the CreateAMBondConnections action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.CreateBuildToBaseContact"></a>

### AMProcess.CreateBuildToBaseContact() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Run the CreateBuildToBaseContact action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.CreateObjRef"></a>

### AMProcess.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.CreateParameter"></a>

### AMProcess.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Cut"></a>

### AMProcess.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Delete"></a>

### AMProcess.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Duplicate"></a>

### AMProcess.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Equals"></a>

### AMProcess.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GenerateAMStrains"></a>

### AMProcess.GenerateAMStrains() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GenerateAMStrains action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetAPIName"></a>

### AMProcess.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetAllProperties"></a>

### AMProcess.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetChildren"></a>

### AMProcess.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AMProcess.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetDetailsView"></a>

### AMProcess.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetEnumName"></a>

### AMProcess.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetHashCode"></a>

### AMProcess.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetIconFile"></a>

### AMProcess.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetLifetimeService"></a>

### AMProcess.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetObjectData"></a>

### AMProcess.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetParameter"></a>

### AMProcess.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetPath"></a>

### AMProcess.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetPropertyName"></a>

### AMProcess.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetPropertyValue"></a>

### AMProcess.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetSequence"></a>

### AMProcess.GetSequence(analysis: [Ansys.ACT.Automation.Mechanical.Analysis](../Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)) → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportRemovalSequence](AMSupportRemovalSequence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportRemovalSequence)

Gets the support removal sequence for a given environment.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetVisibleProperties"></a>

### AMProcess.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetVisiblePropertyNames"></a>

### AMProcess.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GroupAllSimilarChildren"></a>

### AMProcess.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GroupSimilarObjects"></a>

### AMProcess.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.HasAMStrains"></a>

### AMProcess.HasAMStrains() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Get the HasAMStrains property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.InitializeLifetimeService"></a>

### AMProcess.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.IsPropertyEditable"></a>

### AMProcess.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AMProcess.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.IsPropertyVisible"></a>

### AMProcess.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AMProcess.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.IsStaticAnalysisDownstreamOfThermalAnalysis"></a>

### *classmethod* AMProcess.IsStaticAnalysisDownstreamOfThermalAnalysis(staticAnalysis: [Ansys.ACT.Automation.Mechanical.Analysis](../Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis), thermalAnalysis: [Ansys.ACT.Automation.Mechanical.Analysis](../Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsStaticAnalysisDownstreamOfThermalAnalysis method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Paste"></a>

### AMProcess.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.PropertyByAPIName"></a>

### AMProcess.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.PropertyById"></a>

### AMProcess.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.PropertyByName"></a>

### AMProcess.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.RemoveFromGroup"></a>

### AMProcess.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.RemoveParameter"></a>

### AMProcess.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.ResetAllSequences"></a>

### AMProcess.ResetAllSequences() → [None](https://docs.python.org/3/builtins/constants.html#None)

Resets the sequence for all analyses

<!-- !! processed by numpydoc !! -->

