# `EMTransducer`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.EMTransducer"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.EMTransducer(internalObject: Any)

<a id="EMTransducer"></a>

### *class* EMTransducer(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a EMTransducer.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#EMTransducer.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#EMTransducer.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#EMTransducer.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#EMTransducer.AddImage)                                             | Creates a new child Image.                                                                  |
| [`Copy`](#EMTransducer.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#EMTransducer.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#EMTransducer.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#EMTransducer.CreateParameter)                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#EMTransducer.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#EMTransducer.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#EMTransducer.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#EMTransducer.Equals)                                                 | Equals method.                                                                              |
| [`GetAPIName`](#EMTransducer.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#EMTransducer.GetActivateAtLoadStep)                   | Gets whether the EM transducer is active at the specified load step.                        |
| [`GetAllProperties`](#EMTransducer.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#EMTransducer.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetComponentActivateAtLoadStep`](#EMTransducer.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                                      |
| [`GetDetailsView`](#EMTransducer.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#EMTransducer.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#EMTransducer.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#EMTransducer.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#EMTransducer.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#EMTransducer.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#EMTransducer.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#EMTransducer.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#EMTransducer.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#EMTransducer.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#EMTransducer.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#EMTransducer.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#EMTransducer.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#EMTransducer.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#EMTransducer.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#EMTransducer.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#EMTransducer.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#EMTransducer.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#EMTransducer.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#EMTransducer.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#EMTransducer.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#EMTransducer.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#EMTransducer.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#EMTransducer.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#EMTransducer.SetActivateAtLoadStep)                   | Sets whether the EM transducer is active at the specified load step.                        |
| [`SetComponentActivateAtLoadStep`](#EMTransducer.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                                      |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#EMTransducer.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#EMTransducer.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#EMTransducer.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#EMTransducer.Comments)                                 | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#CoordinateSystem)        | Gets the CoordinateSystem.                                    |
| [`DataModelObjectCategory`](#EMTransducer.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#EMTransducer.Figures)                                   | Gets the list of associated figures.                          |
| [`GAPDirection`](#EMTransducer.GAPDirection)                         | Gets or sets the GAPDirection.                                |
| [`GroupingFolder`](#EMTransducer.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#EMTransducer.IconName)                                 | IconName property.                                            |
| [`Images`](#EMTransducer.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#EMTransducer.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`IndependentVariable`](#EMTransducer.IndependentVariable)           | Gets or sets the IndependentVariable.                         |
| [`InitialGap`](#EMTransducer.InitialGap)                             | Gets or sets the InitialGap.                                  |
| [`InternalObject`](#EMTransducer.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#EMTransducer.Location)                                 | Gets or sets the Location.                                    |
| [`MinimalGap`](#EMTransducer.MinimalGap)                             | Gets or sets the MinimalGap.                                  |
| [`Name`](#EMTransducer.Name)                                         | Name property.                                                |
| [`NumberOfSegments`](#EMTransducer.NumberOfSegments)                 | Gets or sets the NumberOfSegments.                            |
| [`ObjectId`](#EMTransducer.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#EMTransducer.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#EMTransducer.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#EMTransducer.Parent)                                     | Parent property.                                              |
| [`Properties`](#EMTransducer.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#EMTransducer.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#EMTransducer.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#EMTransducer.State)                                       | State property.                                               |
| [`StiffnessMethod`](#EMTransducer.StiffnessMethod)                   | Gets or sets the StiffnessMethod.                             |
| [`Suppressed`](#EMTransducer.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#EMTransducer.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#EMTransducer.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`VoltageDifference`](#EMTransducer.VoltageDifference)               | Gets the VoltageDifference.                                   |
| [`ZCoordinate`](#EMTransducer.ZCoordinate)                           | Gets or sets the ZCoordinate.                                 |

<a id="property-detail"></a>

## Property detail

<a id="EMTransducer.AttachedRefs"></a>

### *property* EMTransducer.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Children"></a>

### *property* EMTransducer.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.ClsId"></a>

### *property* EMTransducer.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Comments"></a>

### *property* EMTransducer.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.CoordinateSystem"></a>

### *property* EMTransducer.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.DataModelObjectCategory"></a>

### *property* EMTransducer.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Figures"></a>

### *property* EMTransducer.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GAPDirection"></a>

### *property* EMTransducer.GAPDirection *: [Ansys.Mechanical.DataModel.Enums.GAPDirectionType](../../../../Mechanical/DataModel/Enums/GAPDirectionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GAPDirectionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GAPDirection.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GroupingFolder"></a>

### *property* EMTransducer.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.IconName"></a>

### *property* EMTransducer.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Images"></a>

### *property* EMTransducer.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.ImportableObjectSourceId"></a>

### *property* EMTransducer.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.IndependentVariable"></a>

### *property* EMTransducer.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.InitialGap"></a>

### *property* EMTransducer.InitialGap *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InitialGap.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.InternalObject"></a>

### *property* EMTransducer.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Location"></a>

### *property* EMTransducer.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.MinimalGap"></a>

### *property* EMTransducer.MinimalGap *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimalGap.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Name"></a>

### *property* EMTransducer.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.NumberOfSegments"></a>

### *property* EMTransducer.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.ObjectId"></a>

### *property* EMTransducer.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.ObjectState"></a>

### *property* EMTransducer.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.ObjectTags"></a>

### *property* EMTransducer.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Parent"></a>

### *property* EMTransducer.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Properties"></a>

### *property* EMTransducer.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.ReadOnly"></a>

### *property* EMTransducer.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.SharedRefBody"></a>

### *property* EMTransducer.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.State"></a>

### *property* EMTransducer.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.StiffnessMethod"></a>

### *property* EMTransducer.StiffnessMethod *: [Ansys.Mechanical.DataModel.Enums.StiffnessMethodType](../../../../Mechanical/DataModel/Enums/StiffnessMethodType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StiffnessMethodType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StiffnessMethod.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Suppressed"></a>

### *property* EMTransducer.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.TransferableObjectId"></a>

### *property* EMTransducer.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.VisibleProperties"></a>

### *property* EMTransducer.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.VoltageDifference"></a>

### *property* EMTransducer.VoltageDifference *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the VoltageDifference.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.ZCoordinate"></a>

### *property* EMTransducer.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EMTransducer.Activate"></a>

### EMTransducer.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.AddComment"></a>

### EMTransducer.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.AddFigure"></a>

### EMTransducer.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.AddImage"></a>

### EMTransducer.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Copy"></a>

### EMTransducer.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.CopyTo"></a>

### EMTransducer.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.CreateObjRef"></a>

### EMTransducer.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.CreateParameter"></a>

### EMTransducer.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Cut"></a>

### EMTransducer.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Delete"></a>

### EMTransducer.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Duplicate"></a>

### EMTransducer.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Equals"></a>

### EMTransducer.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetAPIName"></a>

### EMTransducer.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetActivateAtLoadStep"></a>

### EMTransducer.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the EM transducer is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetAllProperties"></a>

### EMTransducer.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetChildren"></a>

### EMTransducer.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### EMTransducer.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetComponentActivateAtLoadStep"></a>

### EMTransducer.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetDetailsView"></a>

### EMTransducer.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetEnumName"></a>

### EMTransducer.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetHashCode"></a>

### EMTransducer.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetIconFile"></a>

### EMTransducer.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetLifetimeService"></a>

### EMTransducer.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetObjectData"></a>

### EMTransducer.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetParameter"></a>

### EMTransducer.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetPath"></a>

### EMTransducer.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetPropertyName"></a>

### EMTransducer.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetPropertyValue"></a>

### EMTransducer.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetVisibleProperties"></a>

### EMTransducer.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetVisiblePropertyNames"></a>

### EMTransducer.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GroupAllSimilarChildren"></a>

### EMTransducer.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GroupSimilarObjects"></a>

### EMTransducer.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.InitializeLifetimeService"></a>

### EMTransducer.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.IsPropertyEditable"></a>

### EMTransducer.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EMTransducer.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.IsPropertyVisible"></a>

### EMTransducer.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EMTransducer.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Paste"></a>

### EMTransducer.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.PromoteToNamedSelection"></a>

### EMTransducer.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.PropertyByAPIName"></a>

### EMTransducer.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.PropertyById"></a>

### EMTransducer.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.PropertyByName"></a>

### EMTransducer.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.RemoveFromGroup"></a>

### EMTransducer.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.RemoveParameter"></a>

### EMTransducer.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.SetActivateAtLoadStep"></a>

### EMTransducer.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the EM transducer is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.SetComponentActivateAtLoadStep"></a>

### EMTransducer.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

