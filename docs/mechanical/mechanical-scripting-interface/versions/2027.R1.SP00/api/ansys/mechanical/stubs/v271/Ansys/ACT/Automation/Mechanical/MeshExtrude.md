# `MeshExtrude`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshExtrude"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshExtrude(internalObject: Any)

<a id="MeshExtrude"></a>

### *class* MeshExtrude(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Pull method enables you to extrude or revolve element faces, topofaces or scoped bodies (only shell body) from a surface or solid mesh. Pull also allows to create surface coating on solid bodies, element faces and topofaces.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|-------------------------------------------------------------------------|-------------------------------------|
| [`IsAcceptableScopingMethod`](#MeshExtrude.IsAcceptableScopingMethod)   | IsAcceptableScopingMethod method.   |

### Methods

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MeshExtrude.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#MeshExtrude.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#MeshExtrude.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#MeshExtrude.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#MeshExtrude.ClearGeneratedData)               | Clear generated data.                                                                       |
| [`Copy`](#MeshExtrude.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MeshExtrude.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MeshExtrude.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MeshExtrude.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MeshExtrude.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MeshExtrude.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MeshExtrude.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MeshExtrude.Equals)                                       | Equals method.                                                                              |
| [`Generate`](#MeshExtrude.Generate)                                   | Generate selected mesh pull.                                                                |
| [`GetAPIName`](#MeshExtrude.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MeshExtrude.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MeshExtrude.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MeshExtrude.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MeshExtrude.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MeshExtrude.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MeshExtrude.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MeshExtrude.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MeshExtrude.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MeshExtrude.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MeshExtrude.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MeshExtrude.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MeshExtrude.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#MeshExtrude.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MeshExtrude.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MeshExtrude.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MeshExtrude.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MeshExtrude.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MeshExtrude.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MeshExtrude.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MeshExtrude.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#MeshExtrude.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MeshExtrude.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MeshExtrude.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MeshExtrude.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MeshExtrude.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#MeshExtrude.AttachedRefs)                         | AttachedRefs property.                                                                                                                                                      |
| [`AutoRenameMeshPullBodies`](#MeshExtrude.AutoRenameMeshPullBodies) | Gets or sets whether generated Pull bodies will be renamed to match the source bodies' names. If False, the typical names “Pull” or “Body” will be used. Default: True.     |
| [`AxisOfRevolution`](#MeshExtrude.AxisOfRevolution)                 | To select the coordinate axis along which the selected elements can be revolved. The available options are X Axis, Y Axis, Z Axis.                                          |
| [`Children`](#MeshExtrude.Children)                                 | Gets the list of children.                                                                                                                                                  |
| [`ClsId`](#MeshExtrude.ClsId)                                       | ClsId property.                                                                                                                                                             |
| [`Comments`](#MeshExtrude.Comments)                                 | Gets the list of associated comments.                                                                                                                                       |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)          | To generate elements in the specified coordinate system. The Coordinate System allows to select the Global Coordinate System by default.                                    |
| [`DataModelObjectCategory`](#MeshExtrude.DataModelObjectCategory)   | Gets the current DataModelObject's category.                                                                                                                                |
| [`ElementOption`](#MeshExtrude.ElementOption)                       | Gets or sets the ElementOption.                                                                                                                                             |
| [`ExtrudeBy`](#MeshExtrude.ExtrudeBy)                               | To specify the method of Extrude. The available options are Use Coordinate System and Face Normal.                                                                          |
| [`FeatureAngle`](#MeshExtrude.FeatureAngle)                         | To specify feature angle for splitting side faces.                                                                                                                          |
| [`Figures`](#MeshExtrude.Figures)                                   | Gets the list of associated figures.                                                                                                                                        |
| [`GroupingFolder`](#MeshExtrude.GroupingFolder)                     | GroupingFolder property.                                                                                                                                                    |
| [`Height`](#MeshExtrude.Height)                                     | To specify the height for the volume of solid elements in the method of Extrude.                                                                                            |
| [`IconName`](#MeshExtrude.IconName)                                 | IconName property.                                                                                                                                                          |
| [`Images`](#MeshExtrude.Images)                                     | Gets the list of associated images.                                                                                                                                         |
| [`InternalObject`](#MeshExtrude.InternalObject)                     | Gets the internal object. For advanced usage only.                                                                                                                          |
| [`Location`](#MeshExtrude.Location)                                 | Allows you to scope elements, element faces, topofaces and sheet bodies for Extrude or Revolve. Also, scopes element faces, topofaces and solid bodies for Surface Coating. |
| [`Material`](Material.md#Material)                                  | To select the material of your choice. You can also select a different material from the parent body material.                                                              |
| [`MergeProfileNodes`](#MeshExtrude.MergeProfileNodes)               | To merge nodes on the profile body and pull generated body.                                                                                                                 |
| [`Method`](#MeshExtrude.Method)                                     | To select the method of Pull: Extrude (default), Revolve, Surface Coating and Line Coating.                                                                                 |
| [`Name`](#MeshExtrude.Name)                                         | Name property.                                                                                                                                                              |
| [`NonlinearMaterialEffects`](#MeshExtrude.NonlinearMaterialEffects) | Gets or sets the NonlinearMaterialEffects.                                                                                                                                  |
| [`NumberOfLayers`](#MeshExtrude.NumberOfLayers)                     | To specify the number of layers to be used for Extrude and Revolve.                                                                                                         |
| [`ObjectId`](#MeshExtrude.ObjectId)                                 | ObjectId property.                                                                                                                                                          |
| [`ObjectState`](#MeshExtrude.ObjectState)                           | ObjectState property.                                                                                                                                                       |
| [`ObjectTags`](#MeshExtrude.ObjectTags)                             | ObjectTags property.                                                                                                                                                        |
| [`Parent`](#MeshExtrude.Parent)                                     | Parent property.                                                                                                                                                            |
| [`Properties`](#MeshExtrude.Properties)                             | Gets the list of properties for this object.                                                                                                                                |
| [`RevolutionAngle`](#MeshExtrude.RevolutionAngle)                   | To specify angle of revolution for the solid elements in the method of Revolve.                                                                                             |
| [`ScopingMethod`](#MeshExtrude.ScopingMethod)                       | Defines what type of selection this object is scoped to.                                                                                                                    |
| [`State`](#MeshExtrude.State)                                       | State property.                                                                                                                                                             |
| [`StiffnessOption`](#MeshExtrude.StiffnessOption)                   | To provide the stiffness option of the shell body created by surface coating. The available options are Stress Evaluation Only, Membrane Only, Membrane and Bending.        |
| [`Suppressed`](#MeshExtrude.Suppressed)                             | To suppress the selected entities. You can select Yes to suppress the selected entities and No to unsuppress the selected entities. The default value is No.                |
| [`ThermalStrainCalculation`](#MeshExtrude.ThermalStrainCalculation) | Gets or sets the ThermalStrainCalculation.                                                                                                                                  |
| [`Thickness`](Thickness.md#Thickness)                               | To specify the thickness for surface coating. The Thickness option is available only when the Stiffness Behavior is set to Membrane Only or Membrane and Bending.           |
| [`UpTo`](#MeshExtrude.UpTo)                                         | To generate elements up to the specified target. The target can be faces from solids or sheet bodies and multiple faces with sharing topo edge.                             |
| [`UpToTarget`](#MeshExtrude.UpToTarget)                             | The target can be faces from solids or sheet bodies and multiple faces with sharing topoedge in Extrude UpTo.                                                               |
| [`UseCoordinateSystem`](#MeshExtrude.UseCoordinateSystem)           | The Use Coordinate System allows to select any of the XYZ coordinate axis in the method of Extrude.                                                                         |
| [`UseFeatureAngle`](#MeshExtrude.UseFeatureAngle)                   | To split side faces by speficied feature angle.                                                                                                                             |
| [`VisibleProperties`](#MeshExtrude.VisibleProperties)               | Gets the list of properties that are visible for this object.                                                                                                               |

<a id="property-detail"></a>

## Property detail

<a id="MeshExtrude.AttachedRefs"></a>

### *property* MeshExtrude.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.AutoRenameMeshPullBodies"></a>

### *property* MeshExtrude.AutoRenameMeshPullBodies *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether generated Pull bodies will be renamed to match the source bodies' names. If False, the typical names “Pull” or “Body” will be used. Default: True.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.AxisOfRevolution"></a>

### *property* MeshExtrude.AxisOfRevolution *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To select the coordinate axis along which the selected elements can be revolved. The available options are X Axis, Y Axis, Z Axis.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Children"></a>

### *property* MeshExtrude.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.ClsId"></a>

### *property* MeshExtrude.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Comments"></a>

### *property* MeshExtrude.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.CoordinateSystem"></a>

### *property* MeshExtrude.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To generate elements in the specified coordinate system. The Coordinate System allows to select the Global Coordinate System by default.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.DataModelObjectCategory"></a>

### *property* MeshExtrude.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.ElementOption"></a>

### *property* MeshExtrude.ElementOption *: [Ansys.Mechanical.DataModel.Enums.SweepElementOptionType](../../../Mechanical/DataModel/Enums/SweepElementOptionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SweepElementOptionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElementOption.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.ExtrudeBy"></a>

### *property* MeshExtrude.ExtrudeBy *: [Ansys.Mechanical.DataModel.Enums.ExtrudeBy](../../../Mechanical/DataModel/Enums/ExtrudeBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExtrudeBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To specify the method of Extrude. The available options are Use Coordinate System and Face Normal.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.FeatureAngle"></a>

### *property* MeshExtrude.FeatureAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To specify feature angle for splitting side faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Figures"></a>

### *property* MeshExtrude.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GroupingFolder"></a>

### *property* MeshExtrude.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Height"></a>

### *property* MeshExtrude.Height *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To specify the height for the volume of solid elements in the method of Extrude.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.IconName"></a>

### *property* MeshExtrude.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Images"></a>

### *property* MeshExtrude.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.InternalObject"></a>

### *property* MeshExtrude.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshExtrudeAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Location"></a>

### *property* MeshExtrude.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Allows you to scope elements, element faces, topofaces and sheet bodies for Extrude or Revolve. Also, scopes element faces, topofaces and solid bodies for Surface Coating.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Material"></a>

### *property* MeshExtrude.Material *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To select the material of your choice. You can also select a different material from the parent body material.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.MergeProfileNodes"></a>

### *property* MeshExtrude.MergeProfileNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To merge nodes on the profile body and pull generated body.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Method"></a>

### *property* MeshExtrude.Method *: [Ansys.Mechanical.DataModel.Enums.PullMethod](../../../Mechanical/DataModel/Enums/PullMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PullMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To select the method of Pull: Extrude (default), Revolve, Surface Coating and Line Coating.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Name"></a>

### *property* MeshExtrude.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.NonlinearMaterialEffects"></a>

### *property* MeshExtrude.NonlinearMaterialEffects *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonlinearMaterialEffects.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.NumberOfLayers"></a>

### *property* MeshExtrude.NumberOfLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To specify the number of layers to be used for Extrude and Revolve.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.ObjectId"></a>

### *property* MeshExtrude.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.ObjectState"></a>

### *property* MeshExtrude.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.ObjectTags"></a>

### *property* MeshExtrude.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Parent"></a>

### *property* MeshExtrude.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Properties"></a>

### *property* MeshExtrude.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.RevolutionAngle"></a>

### *property* MeshExtrude.RevolutionAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To specify angle of revolution for the solid elements in the method of Revolve.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.ScopingMethod"></a>

### *property* MeshExtrude.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Defines what type of selection this object is scoped to.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.State"></a>

### *property* MeshExtrude.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.StiffnessOption"></a>

### *property* MeshExtrude.StiffnessOption *: [Ansys.Mechanical.DataModel.Enums.ShellElementStiffnessOption](../../../Mechanical/DataModel/Enums/ShellElementStiffnessOption.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellElementStiffnessOption) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To provide the stiffness option of the shell body created by surface coating. The available options are Stress Evaluation Only, Membrane Only, Membrane and Bending.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Suppressed"></a>

### *property* MeshExtrude.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To suppress the selected entities. You can select Yes to suppress the selected entities and No to unsuppress the selected entities. The default value is No.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.ThermalStrainCalculation"></a>

### *property* MeshExtrude.ThermalStrainCalculation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThermalStrainCalculation.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Thickness"></a>

### *property* MeshExtrude.Thickness *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To specify the thickness for surface coating. The Thickness option is available only when the Stiffness Behavior is set to Membrane Only or Membrane and Bending.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.UpTo"></a>

### *property* MeshExtrude.UpTo *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To generate elements up to the specified target. The target can be faces from solids or sheet bodies and multiple faces with sharing topo edge.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.UpToTarget"></a>

### *property* MeshExtrude.UpToTarget *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The target can be faces from solids or sheet bodies and multiple faces with sharing topoedge in Extrude UpTo.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.UseCoordinateSystem"></a>

### *property* MeshExtrude.UseCoordinateSystem *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The Use Coordinate System allows to select any of the XYZ coordinate axis in the method of Extrude.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.UseFeatureAngle"></a>

### *property* MeshExtrude.UseFeatureAngle *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To split side faces by speficied feature angle.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.VisibleProperties"></a>

### *property* MeshExtrude.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshExtrude.Activate"></a>

### MeshExtrude.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.AddComment"></a>

### MeshExtrude.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.AddFigure"></a>

### MeshExtrude.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.AddImage"></a>

### MeshExtrude.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.ClearGeneratedData"></a>

### MeshExtrude.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clear generated data.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Copy"></a>

### MeshExtrude.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.CopyTo"></a>

### MeshExtrude.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.CreateObjRef"></a>

### MeshExtrude.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.CreateParameter"></a>

### MeshExtrude.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Cut"></a>

### MeshExtrude.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Delete"></a>

### MeshExtrude.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Duplicate"></a>

### MeshExtrude.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Equals"></a>

### MeshExtrude.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Generate"></a>

### MeshExtrude.Generate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate selected mesh pull.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetAPIName"></a>

### MeshExtrude.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetAllProperties"></a>

### MeshExtrude.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetChildren"></a>

### MeshExtrude.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MeshExtrude.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetDetailsView"></a>

### MeshExtrude.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetEnumName"></a>

### MeshExtrude.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetHashCode"></a>

### MeshExtrude.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetIconFile"></a>

### MeshExtrude.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetLifetimeService"></a>

### MeshExtrude.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetObjectData"></a>

### MeshExtrude.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetParameter"></a>

### MeshExtrude.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetPath"></a>

### MeshExtrude.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetPropertyName"></a>

### MeshExtrude.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetPropertyValue"></a>

### MeshExtrude.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetVisibleProperties"></a>

### MeshExtrude.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetVisiblePropertyNames"></a>

### MeshExtrude.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GroupAllSimilarChildren"></a>

### MeshExtrude.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GroupSimilarObjects"></a>

### MeshExtrude.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.InitializeLifetimeService"></a>

### MeshExtrude.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.IsAcceptableScopingMethod"></a>

### *classmethod* MeshExtrude.IsAcceptableScopingMethod(scopingMethod: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsAcceptableScopingMethod method.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.IsPropertyEditable"></a>

### MeshExtrude.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshExtrude.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.IsPropertyVisible"></a>

### MeshExtrude.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshExtrude.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Paste"></a>

### MeshExtrude.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.PropertyByAPIName"></a>

### MeshExtrude.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.PropertyById"></a>

### MeshExtrude.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.PropertyByName"></a>

### MeshExtrude.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.RemoveFromGroup"></a>

### MeshExtrude.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.RemoveParameter"></a>

### MeshExtrude.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

