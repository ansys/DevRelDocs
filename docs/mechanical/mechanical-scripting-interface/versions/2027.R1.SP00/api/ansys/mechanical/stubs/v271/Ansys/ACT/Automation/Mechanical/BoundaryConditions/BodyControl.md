# `BodyControl`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.BodyControl"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.BodyControl(internalObject: Any)

<a id="BodyControl"></a>

### *class* BodyControl(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a BodyControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#BodyControl.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#BodyControl.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#BodyControl.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#BodyControl.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#BodyControl.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#BodyControl.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#BodyControl.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#BodyControl.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#BodyControl.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#BodyControl.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#BodyControl.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#BodyControl.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#BodyControl.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#BodyControl.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#BodyControl.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#BodyControl.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#BodyControl.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#BodyControl.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#BodyControl.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#BodyControl.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#BodyControl.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#BodyControl.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#BodyControl.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#BodyControl.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#BodyControl.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#BodyControl.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#BodyControl.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#BodyControl.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#BodyControl.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#BodyControl.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#BodyControl.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#BodyControl.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#BodyControl.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#BodyControl.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#BodyControl.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#BodyControl.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#BodyControl.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#BodyControl.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#BodyControl.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ArtificialViscosityForShells`](#BodyControl.ArtificialViscosityForShells)   | Gets or sets the ArtificialViscosityForShells.                |
| [`AttachedRefs`](#BodyControl.AttachedRefs)                                   | AttachedRefs property.                                        |
| [`BeamSolutionType`](#BodyControl.BeamSolutionType)                           | Gets or sets the BeamSolutionType.                            |
| [`BeamTimeStepSafetyFactor`](#BodyControl.BeamTimeStepSafetyFactor)           | Gets or sets the BeamTimeStepSafetyFactor.                    |
| [`Children`](#BodyControl.Children)                                           | Gets the list of children.                                    |
| [`ClsId`](#BodyControl.ClsId)                                                 | ClsId property.                                               |
| [`Comments`](#BodyControl.Comments)                                           | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#BodyControl.DataModelObjectCategory)             | Gets the current DataModelObject's category.                  |
| [`Figures`](#BodyControl.Figures)                                             | Gets the list of associated figures.                          |
| [`GroupingFolder`](#BodyControl.GroupingFolder)                               | GroupingFolder property.                                      |
| [`HexIntegrationType`](#BodyControl.HexIntegrationType)                       | Gets or sets the HexIntegrationType.                          |
| [`HourglassDampingType`](#BodyControl.HourglassDampingType)                   | Gets or sets the HourglassDampingType.                        |
| [`IconName`](#BodyControl.IconName)                                           | IconName property.                                            |
| [`Images`](#BodyControl.Images)                                               | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#BodyControl.ImportableObjectSourceId)           | ImportableObjectSourceId property.                            |
| [`InternalObject`](#BodyControl.InternalObject)                               | Gets the internal object. For advanced usage only.            |
| [`Location`](#BodyControl.Location)                                           | Gets or sets the Location.                                    |
| [`Name`](#BodyControl.Name)                                                   | Name property.                                                |
| [`ObjectId`](#BodyControl.ObjectId)                                           | ObjectId property.                                            |
| [`ObjectState`](#BodyControl.ObjectState)                                     | ObjectState property.                                         |
| [`ObjectTags`](#BodyControl.ObjectTags)                                       | ObjectTags property.                                          |
| [`Parent`](#BodyControl.Parent)                                               | Parent property.                                              |
| [`Properties`](#BodyControl.Properties)                                       | Gets the list of properties for this object.                  |
| [`PusoStabilityCoefficient`](#BodyControl.PusoStabilityCoefficient)           | Gets or sets the PusoStabilityCoefficient.                    |
| [`ReadOnly`](#BodyControl.ReadOnly)                                           | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#BodyControl.SharedRefBody)                                 | Gets or sets the SharedRefBody.                               |
| [`ShellBWCWarpCorrection`](#BodyControl.ShellBWCWarpCorrection)               | Gets or sets the ShellBWCWarpCorrection.                      |
| [`ShellInertiaUpdate`](#BodyControl.ShellInertiaUpdate)                       | Gets or sets the ShellInertiaUpdate.                          |
| [`ShellShearCorrectionFactor`](#BodyControl.ShellShearCorrectionFactor)       | Gets or sets the ShellShearCorrectionFactor.                  |
| [`ShellSublayers`](#BodyControl.ShellSublayers)                               | Gets or sets the ShellSublayers.                              |
| [`ShellThicknessUpdate`](#BodyControl.ShellThicknessUpdate)                   | Gets or sets the ShellThicknessUpdate.                        |
| [`State`](#BodyControl.State)                                                 | State property.                                               |
| [`StiffnessCoefficient`](#BodyControl.StiffnessCoefficient)                   | Gets or sets the StiffnessCoefficient.                        |
| [`Suppressed`](#BodyControl.Suppressed)                                       | Gets or sets the Suppressed.                                  |
| [`TetIntegrationType`](#BodyControl.TetIntegrationType)                       | Gets or sets the TetIntegrationType.                          |
| [`TransferableObjectId`](#BodyControl.TransferableObjectId)                   | TransferableObjectId property.                                |
| [`ViscousCoefficient`](#BodyControl.ViscousCoefficient)                       | Gets or sets the ViscousCoefficient.                          |
| [`VisibleProperties`](#BodyControl.VisibleProperties)                         | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="BodyControl.ArtificialViscosityForShells"></a>

### *property* BodyControl.ArtificialViscosityForShells *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ArtificialViscosityForShells.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.AttachedRefs"></a>

### *property* BodyControl.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.BeamSolutionType"></a>

### *property* BodyControl.BeamSolutionType *: [Ansys.Mechanical.DataModel.Enums.BeamSolutionType](../../../../Mechanical/DataModel/Enums/BeamSolutionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.BeamSolutionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamSolutionType.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.BeamTimeStepSafetyFactor"></a>

### *property* BodyControl.BeamTimeStepSafetyFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamTimeStepSafetyFactor.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Children"></a>

### *property* BodyControl.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ClsId"></a>

### *property* BodyControl.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Comments"></a>

### *property* BodyControl.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.DataModelObjectCategory"></a>

### *property* BodyControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Figures"></a>

### *property* BodyControl.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GroupingFolder"></a>

### *property* BodyControl.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.HexIntegrationType"></a>

### *property* BodyControl.HexIntegrationType *: [Ansys.Mechanical.DataModel.Enums.HexIntegrationType](../../../../Mechanical/DataModel/Enums/HexIntegrationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.HexIntegrationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HexIntegrationType.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.HourglassDampingType"></a>

### *property* BodyControl.HourglassDampingType *: [Ansys.Mechanical.DataModel.Enums.HourglassDampingType](../../../../Mechanical/DataModel/Enums/HourglassDampingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.HourglassDampingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HourglassDampingType.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.IconName"></a>

### *property* BodyControl.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Images"></a>

### *property* BodyControl.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ImportableObjectSourceId"></a>

### *property* BodyControl.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.InternalObject"></a>

### *property* BodyControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Location"></a>

### *property* BodyControl.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Name"></a>

### *property* BodyControl.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ObjectId"></a>

### *property* BodyControl.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ObjectState"></a>

### *property* BodyControl.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ObjectTags"></a>

### *property* BodyControl.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Parent"></a>

### *property* BodyControl.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Properties"></a>

### *property* BodyControl.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.PusoStabilityCoefficient"></a>

### *property* BodyControl.PusoStabilityCoefficient *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PusoStabilityCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ReadOnly"></a>

### *property* BodyControl.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.SharedRefBody"></a>

### *property* BodyControl.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ShellBWCWarpCorrection"></a>

### *property* BodyControl.ShellBWCWarpCorrection *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShellBWCWarpCorrection.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ShellInertiaUpdate"></a>

### *property* BodyControl.ShellInertiaUpdate *: [Ansys.Mechanical.DataModel.Enums.ShellInertiaUpdate](../../../../Mechanical/DataModel/Enums/ShellInertiaUpdate.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellInertiaUpdate) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShellInertiaUpdate.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ShellShearCorrectionFactor"></a>

### *property* BodyControl.ShellShearCorrectionFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShellShearCorrectionFactor.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ShellSublayers"></a>

### *property* BodyControl.ShellSublayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShellSublayers.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ShellThicknessUpdate"></a>

### *property* BodyControl.ShellThicknessUpdate *: [Ansys.Mechanical.DataModel.Enums.ShellThicknessUpdate](../../../../Mechanical/DataModel/Enums/ShellThicknessUpdate.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellThicknessUpdate) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShellThicknessUpdate.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.State"></a>

### *property* BodyControl.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.StiffnessCoefficient"></a>

### *property* BodyControl.StiffnessCoefficient *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StiffnessCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Suppressed"></a>

### *property* BodyControl.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.TetIntegrationType"></a>

### *property* BodyControl.TetIntegrationType *: [Ansys.Mechanical.DataModel.Enums.TetIntegrationType](../../../../Mechanical/DataModel/Enums/TetIntegrationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TetIntegrationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TetIntegrationType.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.TransferableObjectId"></a>

### *property* BodyControl.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ViscousCoefficient"></a>

### *property* BodyControl.ViscousCoefficient *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ViscousCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.VisibleProperties"></a>

### *property* BodyControl.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BodyControl.Activate"></a>

### BodyControl.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.AddComment"></a>

### BodyControl.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.AddFigure"></a>

### BodyControl.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.AddImage"></a>

### BodyControl.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Copy"></a>

### BodyControl.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.CopyTo"></a>

### BodyControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.CreateObjRef"></a>

### BodyControl.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.CreateParameter"></a>

### BodyControl.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Cut"></a>

### BodyControl.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Delete"></a>

### BodyControl.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Duplicate"></a>

### BodyControl.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Equals"></a>

### BodyControl.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetAPIName"></a>

### BodyControl.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetAllProperties"></a>

### BodyControl.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetChildren"></a>

### BodyControl.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### BodyControl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetDetailsView"></a>

### BodyControl.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetEnumName"></a>

### BodyControl.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetHashCode"></a>

### BodyControl.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetIconFile"></a>

### BodyControl.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetLifetimeService"></a>

### BodyControl.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetObjectData"></a>

### BodyControl.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetParameter"></a>

### BodyControl.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetPath"></a>

### BodyControl.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetPropertyName"></a>

### BodyControl.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetPropertyValue"></a>

### BodyControl.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetVisibleProperties"></a>

### BodyControl.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetVisiblePropertyNames"></a>

### BodyControl.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GroupAllSimilarChildren"></a>

### BodyControl.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GroupSimilarObjects"></a>

### BodyControl.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.InitializeLifetimeService"></a>

### BodyControl.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.IsPropertyEditable"></a>

### BodyControl.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BodyControl.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.IsPropertyVisible"></a>

### BodyControl.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BodyControl.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Paste"></a>

### BodyControl.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.PromoteToNamedSelection"></a>

### BodyControl.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.PropertyByAPIName"></a>

### BodyControl.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.PropertyById"></a>

### BodyControl.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.PropertyByName"></a>

### BodyControl.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.RemoveFromGroup"></a>

### BodyControl.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.RemoveParameter"></a>

### BodyControl.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

