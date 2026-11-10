# `BoltPretension`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.BoltPretension"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.BoltPretension(internalObject: Any)

<a id="BoltPretension"></a>

### *class* BoltPretension(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a BoltPretension.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#BoltPretension.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#BoltPretension.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#BoltPretension.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#BoltPretension.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#BoltPretension.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#BoltPretension.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#BoltPretension.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#BoltPretension.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#BoltPretension.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#BoltPretension.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#BoltPretension.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#BoltPretension.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#BoltPretension.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#BoltPretension.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#BoltPretension.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDefineBy`](#BoltPretension.GetDefineBy)                             | Gets the Bolt Define By value at a given solution step.                                     |
| [`GetDetailsView`](#BoltPretension.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#BoltPretension.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#BoltPretension.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#BoltPretension.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#BoltPretension.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#BoltPretension.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#BoltPretension.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#BoltPretension.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#BoltPretension.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#BoltPretension.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#BoltPretension.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#BoltPretension.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#BoltPretension.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#BoltPretension.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#BoltPretension.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`InitializeNumberOfSteps`](#BoltPretension.InitializeNumberOfSteps)     | InitializeNumberOfSteps method.                                                             |
| [`IsPropertyEditable`](#BoltPretension.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#BoltPretension.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#BoltPretension.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToCoordinateSystem`](#BoltPretension.PromoteToCoordinateSystem) | Run the PromoteToCoordinateSystem action.                                                   |
| [`PromoteToNamedSelection`](#BoltPretension.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#BoltPretension.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#BoltPretension.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#BoltPretension.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#BoltPretension.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#BoltPretension.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetDefineBy`](#BoltPretension.SetDefineBy)                             | Sets the Bolt Define By value for a given solution step.                                    |

### Properties

| Name | Description |
|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#BoltPretension.AttachedRefs)                         | AttachedRefs property.                                                                    |
| [`Children`](#BoltPretension.Children)                                 | Gets the list of children.                                                                |
| [`ClsId`](#BoltPretension.ClsId)                                       | ClsId property.                                                                           |
| [`Comments`](#BoltPretension.Comments)                                 | Gets the list of associated comments.                                                     |
| [`CoordinateSystem`](#CoordinateSystem)          | Gets or sets the CoordinateSystem.                                                        |
| [`CoordinateSystemBehavior`](#BoltPretension.CoordinateSystemBehavior) | Gets or sets the CoordinateSystemBehavior.                                                |
| [`DataModelObjectCategory`](#BoltPretension.DataModelObjectCategory)   | Gets the current DataModelObject's category.                                              |
| [`DefineBy`](#BoltPretension.DefineBy)                                 | Gets a value indicating how the bolt pretension is defined at the analysis' current step. |
| [`Figures`](#BoltPretension.Figures)                                   | Gets the list of associated figures.                                                      |
| [`Formulation`](#BoltPretension.Formulation)                           | Gets or sets the Formulation.                                                             |
| [`GroupingFolder`](#BoltPretension.GroupingFolder)                     | GroupingFolder property.                                                                  |
| [`IconName`](#BoltPretension.IconName)                                 | IconName property.                                                                        |
| [`Images`](#BoltPretension.Images)                                     | Gets the list of associated images.                                                       |
| [`ImportableObjectSourceId`](#BoltPretension.ImportableObjectSourceId) | ImportableObjectSourceId property.                                                        |
| [`Increment`](#BoltPretension.Increment)                               | Gets the Increment.                                                                       |
| [`InternalObject`](#BoltPretension.InternalObject)                     | Gets the internal object. For advanced usage only.                                        |
| [`Location`](#BoltPretension.Location)                                 | Gets or sets the Location.                                                                |
| [`Name`](#BoltPretension.Name)                                         | Name property.                                                                            |
| [`ObjectId`](#BoltPretension.ObjectId)                                 | ObjectId property.                                                                        |
| [`ObjectState`](#BoltPretension.ObjectState)                           | ObjectState property.                                                                     |
| [`ObjectTags`](#BoltPretension.ObjectTags)                             | ObjectTags property.                                                                      |
| [`Parent`](#BoltPretension.Parent)                                     | Parent property.                                                                          |
| [`Preadjustment`](#BoltPretension.Preadjustment)                       | Gets the Preadjustment.                                                                   |
| [`Preload`](#BoltPretension.Preload)                                   | Gets the Preload.                                                                         |
| [`Properties`](#BoltPretension.Properties)                             | Gets the list of properties for this object.                                              |
| [`ReadOnly`](#BoltPretension.ReadOnly)                                 | Gets or sets the ReadOnly.                                                                |
| [`SolveBehaviourType`](#BoltPretension.SolveBehaviourType)             | Gets or sets the SolveBehaviourType.                                                      |
| [`State`](#BoltPretension.State)                                       | State property.                                                                           |
| [`Suppressed`](#BoltPretension.Suppressed)                             | Gets or sets the Suppressed.                                                              |
| [`Tolerance`](#BoltPretension.Tolerance)                               | Gets or sets the Tolerance.                                                               |
| [`TransferableObjectId`](#BoltPretension.TransferableObjectId)         | TransferableObjectId property.                                                            |
| [`VisibleProperties`](#BoltPretension.VisibleProperties)               | Gets the list of properties that are visible for this object.                             |

<a id="property-detail"></a>

## Property detail

<a id="BoltPretension.AttachedRefs"></a>

### *property* BoltPretension.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Children"></a>

### *property* BoltPretension.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.ClsId"></a>

### *property* BoltPretension.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Comments"></a>

### *property* BoltPretension.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.CoordinateSystem"></a>

### *property* BoltPretension.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.CoordinateSystemBehavior"></a>

### *property* BoltPretension.CoordinateSystemBehavior *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemBehavior](../../../../Mechanical/DataModel/Enums/CoordinateSystemBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CoordinateSystemBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystemBehavior.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.DataModelObjectCategory"></a>

### *property* BoltPretension.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.DefineBy"></a>

### *property* BoltPretension.DefineBy *: [Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy](../../../../Mechanical/DataModel/Enums/BoltLoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets a value indicating how the bolt pretension is defined at the analysis' current step.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Figures"></a>

### *property* BoltPretension.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Formulation"></a>

### *property* BoltPretension.Formulation *: [Ansys.Mechanical.DataModel.Enums.FormulationType](../../../../Mechanical/DataModel/Enums/FormulationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FormulationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GroupingFolder"></a>

### *property* BoltPretension.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.IconName"></a>

### *property* BoltPretension.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Images"></a>

### *property* BoltPretension.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.ImportableObjectSourceId"></a>

### *property* BoltPretension.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Increment"></a>

### *property* BoltPretension.Increment *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Increment.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.InternalObject"></a>

### *property* BoltPretension.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPretensionBoltLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Location"></a>

### *property* BoltPretension.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Name"></a>

### *property* BoltPretension.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.ObjectId"></a>

### *property* BoltPretension.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.ObjectState"></a>

### *property* BoltPretension.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.ObjectTags"></a>

### *property* BoltPretension.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Parent"></a>

### *property* BoltPretension.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Preadjustment"></a>

### *property* BoltPretension.Preadjustment *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Preadjustment.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Preload"></a>

### *property* BoltPretension.Preload *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Preload.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Properties"></a>

### *property* BoltPretension.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.ReadOnly"></a>

### *property* BoltPretension.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.SolveBehaviourType"></a>

### *property* BoltPretension.SolveBehaviourType *: [Ansys.Mechanical.DataModel.Enums.SolveBehaviourType](../../../../Mechanical/DataModel/Enums/SolveBehaviourType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolveBehaviourType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolveBehaviourType.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.State"></a>

### *property* BoltPretension.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Suppressed"></a>

### *property* BoltPretension.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Tolerance"></a>

### *property* BoltPretension.Tolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Tolerance.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.TransferableObjectId"></a>

### *property* BoltPretension.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.VisibleProperties"></a>

### *property* BoltPretension.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BoltPretension.Activate"></a>

### BoltPretension.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.AddComment"></a>

### BoltPretension.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.AddFigure"></a>

### BoltPretension.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.AddImage"></a>

### BoltPretension.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Copy"></a>

### BoltPretension.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.CopyTo"></a>

### BoltPretension.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.CreateObjRef"></a>

### BoltPretension.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.CreateParameter"></a>

### BoltPretension.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Cut"></a>

### BoltPretension.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Delete"></a>

### BoltPretension.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Duplicate"></a>

### BoltPretension.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Equals"></a>

### BoltPretension.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetAPIName"></a>

### BoltPretension.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetAllProperties"></a>

### BoltPretension.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetChildren"></a>

### BoltPretension.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### BoltPretension.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetDefineBy"></a>

### BoltPretension.GetDefineBy(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy](../../../../Mechanical/DataModel/Enums/BoltLoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy)

Gets the Bolt Define By value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetDetailsView"></a>

### BoltPretension.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetEnumName"></a>

### BoltPretension.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetHashCode"></a>

### BoltPretension.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetIconFile"></a>

### BoltPretension.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetLifetimeService"></a>

### BoltPretension.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetObjectData"></a>

### BoltPretension.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetParameter"></a>

### BoltPretension.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetPath"></a>

### BoltPretension.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetPropertyName"></a>

### BoltPretension.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetPropertyValue"></a>

### BoltPretension.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetVisibleProperties"></a>

### BoltPretension.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetVisiblePropertyNames"></a>

### BoltPretension.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GroupAllSimilarChildren"></a>

### BoltPretension.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GroupSimilarObjects"></a>

### BoltPretension.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.InitializeLifetimeService"></a>

### BoltPretension.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.InitializeNumberOfSteps"></a>

### BoltPretension.InitializeNumberOfSteps(numSteps: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

InitializeNumberOfSteps method.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.IsPropertyEditable"></a>

### BoltPretension.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BoltPretension.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.IsPropertyVisible"></a>

### BoltPretension.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BoltPretension.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Paste"></a>

### BoltPretension.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.PromoteToCoordinateSystem"></a>

### BoltPretension.PromoteToCoordinateSystem() → Iterable[[Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem)]

Run the PromoteToCoordinateSystem action.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.PromoteToNamedSelection"></a>

### BoltPretension.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.PropertyByAPIName"></a>

### BoltPretension.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.PropertyById"></a>

### BoltPretension.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.PropertyByName"></a>

### BoltPretension.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.RemoveFromGroup"></a>

### BoltPretension.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.RemoveParameter"></a>

### BoltPretension.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.SetDefineBy"></a>

### BoltPretension.SetDefineBy(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), type: [Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy](../../../../Mechanical/DataModel/Enums/BoltLoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the Bolt Define By value for a given solution step.

<!-- !! processed by numpydoc !! -->

