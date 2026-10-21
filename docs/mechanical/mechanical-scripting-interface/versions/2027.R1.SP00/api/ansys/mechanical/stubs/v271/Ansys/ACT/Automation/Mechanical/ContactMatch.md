# `ContactMatch`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ContactMatch"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ContactMatch(internalObject: Any)

<a id="ContactMatch"></a>

### *class* ContactMatch(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ContactMatch.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ContactMatch.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ContactMatch.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ContactMatch.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ContactMatch.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ContactMatch.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ContactMatch.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ContactMatch.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ContactMatch.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ContactMatch.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ContactMatch.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ContactMatch.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ContactMatch.Equals)                                       | Equals method.                                                                              |
| [`Generate`](#ContactMatch.Generate)                                   | Run the Generate action.                                                                    |
| [`GetAPIName`](#ContactMatch.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ContactMatch.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ContactMatch.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ContactMatch.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ContactMatch.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ContactMatch.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ContactMatch.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ContactMatch.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ContactMatch.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ContactMatch.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ContactMatch.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ContactMatch.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ContactMatch.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ContactMatch.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ContactMatch.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ContactMatch.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ContactMatch.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ContactMatch.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ContactMatch.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ContactMatch.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ContactMatch.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ContactMatch.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ContactMatch.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ContactMatch.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ContactMatch.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ContactMatch.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#ContactMatch.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ContactMatch.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ContactMatch.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ContactMatch.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#ContactMatch.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ContactMatch.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#ContactMatch.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ContactMatch.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ContactMatch.IconName)                               | IconName property.                                            |
| [`Images`](#ContactMatch.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ContactMatch.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`MasterBodies`](#ContactMatch.MasterBodies)                       | Gets the MasterBodies.                                        |
| [`MasterLocation`](#ContactMatch.MasterLocation)                   | Gets or sets the MasterLocation.                              |
| [`Name`](#ContactMatch.Name)                                       | Name property.                                                |
| [`ObjectId`](#ContactMatch.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ContactMatch.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ContactMatch.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ContactMatch.Parent)                                   | Parent property.                                              |
| [`Properties`](#ContactMatch.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopeMode`](#ContactMatch.ScopeMode)                             | Gets the ScopeMode.                                           |
| [`ScopingMethod`](#ContactMatch.ScopingMethod)                     | ScopingMethod property.                                       |
| [`SlaveBodies`](#ContactMatch.SlaveBodies)                         | Gets the SlaveBodies.                                         |
| [`SlaveLocation`](#ContactMatch.SlaveLocation)                     | Gets or sets the SlaveLocation.                               |
| [`SnapToBoundary`](#ContactMatch.SnapToBoundary)                   | Gets or sets the SnapToBoundary.                              |
| [`SnapTolerance`](#ContactMatch.SnapTolerance)                     | Gets or sets the SnapTolerance.                               |
| [`SnapType`](#ContactMatch.SnapType)                               | Gets or sets the SnapType.                                    |
| [`State`](#ContactMatch.State)                                     | State property.                                               |
| [`Suppressed`](#ContactMatch.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`ToleranceSlider`](#ContactMatch.ToleranceSlider)                 | Gets or sets the ToleranceSlider.                             |
| [`ToleranceType`](#ContactMatch.ToleranceType)                     | Gets or sets the ToleranceType.                               |
| [`ToleranceValue`](#ContactMatch.ToleranceValue)                   | Gets or sets the ToleranceValue.                              |
| [`VisibleProperties`](#ContactMatch.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactMatch.AttachedRefs"></a>

### *property* ContactMatch.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Children"></a>

### *property* ContactMatch.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.ClsId"></a>

### *property* ContactMatch.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Comments"></a>

### *property* ContactMatch.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.DataModelObjectCategory"></a>

### *property* ContactMatch.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Figures"></a>

### *property* ContactMatch.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GroupingFolder"></a>

### *property* ContactMatch.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.IconName"></a>

### *property* ContactMatch.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Images"></a>

### *property* ContactMatch.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.InternalObject"></a>

### *property* ContactMatch.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshConnectionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.MasterBodies"></a>

### *property* ContactMatch.MasterBodies *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MasterBodies.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.MasterLocation"></a>

### *property* ContactMatch.MasterLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MasterLocation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Name"></a>

### *property* ContactMatch.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.ObjectId"></a>

### *property* ContactMatch.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.ObjectState"></a>

### *property* ContactMatch.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.ObjectTags"></a>

### *property* ContactMatch.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Parent"></a>

### *property* ContactMatch.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Properties"></a>

### *property* ContactMatch.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.ScopeMode"></a>

### *property* ContactMatch.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.ScopingMethod"></a>

### *property* ContactMatch.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ScopingMethod property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.SlaveBodies"></a>

### *property* ContactMatch.SlaveBodies *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SlaveBodies.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.SlaveLocation"></a>

### *property* ContactMatch.SlaveLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SlaveLocation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.SnapToBoundary"></a>

### *property* ContactMatch.SnapToBoundary *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SnapToBoundary.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.SnapTolerance"></a>

### *property* ContactMatch.SnapTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SnapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.SnapType"></a>

### *property* ContactMatch.SnapType *: [Ansys.Mechanical.DataModel.Enums.SnapType](../../../Mechanical/DataModel/Enums/SnapType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SnapType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SnapType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.State"></a>

### *property* ContactMatch.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Suppressed"></a>

### *property* ContactMatch.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.ToleranceSlider"></a>

### *property* ContactMatch.ToleranceSlider *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.ToleranceType"></a>

### *property* ContactMatch.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.ToleranceValue"></a>

### *property* ContactMatch.ToleranceValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.VisibleProperties"></a>

### *property* ContactMatch.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactMatch.Activate"></a>

### ContactMatch.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.AddComment"></a>

### ContactMatch.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.AddFigure"></a>

### ContactMatch.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.AddImage"></a>

### ContactMatch.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Copy"></a>

### ContactMatch.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.CopyTo"></a>

### ContactMatch.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.CreateObjRef"></a>

### ContactMatch.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.CreateParameter"></a>

### ContactMatch.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Cut"></a>

### ContactMatch.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Delete"></a>

### ContactMatch.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Duplicate"></a>

### ContactMatch.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Equals"></a>

### ContactMatch.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Generate"></a>

### ContactMatch.Generate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Generate action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetAPIName"></a>

### ContactMatch.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetAllProperties"></a>

### ContactMatch.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetChildren"></a>

### ContactMatch.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ContactMatch.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetDetailsView"></a>

### ContactMatch.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetEnumName"></a>

### ContactMatch.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetHashCode"></a>

### ContactMatch.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetIconFile"></a>

### ContactMatch.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetLifetimeService"></a>

### ContactMatch.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetObjectData"></a>

### ContactMatch.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetParameter"></a>

### ContactMatch.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetPath"></a>

### ContactMatch.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetPropertyName"></a>

### ContactMatch.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetPropertyValue"></a>

### ContactMatch.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetVisibleProperties"></a>

### ContactMatch.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetVisiblePropertyNames"></a>

### ContactMatch.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GroupAllSimilarChildren"></a>

### ContactMatch.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GroupSimilarObjects"></a>

### ContactMatch.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.InitializeLifetimeService"></a>

### ContactMatch.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.IsPropertyEditable"></a>

### ContactMatch.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactMatch.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.IsPropertyVisible"></a>

### ContactMatch.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactMatch.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Paste"></a>

### ContactMatch.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.PropertyByAPIName"></a>

### ContactMatch.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.PropertyById"></a>

### ContactMatch.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.PropertyByName"></a>

### ContactMatch.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.RemoveFromGroup"></a>

### ContactMatch.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.RemoveParameter"></a>

### ContactMatch.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.RenameBasedOnDefinition"></a>

### ContactMatch.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

