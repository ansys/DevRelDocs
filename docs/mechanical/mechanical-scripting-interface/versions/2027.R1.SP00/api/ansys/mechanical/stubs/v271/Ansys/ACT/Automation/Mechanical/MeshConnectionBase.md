# `MeshConnectionBase`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshConnectionBase"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshConnectionBase(internalObject: Any)

<a id="MeshConnectionBase"></a>

### *class* MeshConnectionBase(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MeshConnectionBase.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MeshConnectionBase.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#MeshConnectionBase.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#MeshConnectionBase.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#MeshConnectionBase.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#MeshConnectionBase.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MeshConnectionBase.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MeshConnectionBase.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MeshConnectionBase.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MeshConnectionBase.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MeshConnectionBase.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MeshConnectionBase.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MeshConnectionBase.Equals)                                       | Equals method.                                                                              |
| [`Generate`](#MeshConnectionBase.Generate)                                   | Run the Generate action.                                                                    |
| [`GetAPIName`](#MeshConnectionBase.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MeshConnectionBase.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MeshConnectionBase.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MeshConnectionBase.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MeshConnectionBase.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MeshConnectionBase.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MeshConnectionBase.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MeshConnectionBase.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MeshConnectionBase.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MeshConnectionBase.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MeshConnectionBase.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MeshConnectionBase.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MeshConnectionBase.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#MeshConnectionBase.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MeshConnectionBase.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MeshConnectionBase.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MeshConnectionBase.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MeshConnectionBase.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MeshConnectionBase.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MeshConnectionBase.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MeshConnectionBase.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#MeshConnectionBase.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MeshConnectionBase.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MeshConnectionBase.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MeshConnectionBase.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MeshConnectionBase.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#MeshConnectionBase.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#MeshConnectionBase.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#MeshConnectionBase.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#MeshConnectionBase.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#MeshConnectionBase.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#MeshConnectionBase.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#MeshConnectionBase.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#MeshConnectionBase.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#MeshConnectionBase.IconName)                               | IconName property.                                            |
| [`Images`](#MeshConnectionBase.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#MeshConnectionBase.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`MasterBodies`](#MeshConnectionBase.MasterBodies)                       | Gets the MasterBodies.                                        |
| [`MasterLocation`](#MeshConnectionBase.MasterLocation)                   | Gets or sets the MasterLocation.                              |
| [`Name`](#MeshConnectionBase.Name)                                       | Name property.                                                |
| [`ObjectId`](#MeshConnectionBase.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#MeshConnectionBase.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#MeshConnectionBase.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#MeshConnectionBase.Parent)                                   | Parent property.                                              |
| [`Properties`](#MeshConnectionBase.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopeMode`](#MeshConnectionBase.ScopeMode)                             | Gets the ScopeMode.                                           |
| [`ScopingMethod`](#MeshConnectionBase.ScopingMethod)                     | ScopingMethod property.                                       |
| [`SlaveBodies`](#MeshConnectionBase.SlaveBodies)                         | Gets the SlaveBodies.                                         |
| [`SlaveLocation`](#MeshConnectionBase.SlaveLocation)                     | Gets or sets the SlaveLocation.                               |
| [`SnapToBoundary`](#MeshConnectionBase.SnapToBoundary)                   | Gets or sets the SnapToBoundary.                              |
| [`SnapTolerance`](#MeshConnectionBase.SnapTolerance)                     | Gets or sets the SnapTolerance.                               |
| [`SnapType`](#MeshConnectionBase.SnapType)                               | Gets or sets the SnapType.                                    |
| [`State`](#MeshConnectionBase.State)                                     | State property.                                               |
| [`Suppressed`](#MeshConnectionBase.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`ToleranceSlider`](#MeshConnectionBase.ToleranceSlider)                 | Gets or sets the ToleranceSlider.                             |
| [`ToleranceType`](#MeshConnectionBase.ToleranceType)                     | Gets or sets the ToleranceType.                               |
| [`VisibleProperties`](#MeshConnectionBase.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshConnectionBase.AttachedRefs"></a>

### *property* MeshConnectionBase.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Children"></a>

### *property* MeshConnectionBase.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.ClsId"></a>

### *property* MeshConnectionBase.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Comments"></a>

### *property* MeshConnectionBase.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.DataModelObjectCategory"></a>

### *property* MeshConnectionBase.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Figures"></a>

### *property* MeshConnectionBase.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GroupingFolder"></a>

### *property* MeshConnectionBase.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.IconName"></a>

### *property* MeshConnectionBase.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Images"></a>

### *property* MeshConnectionBase.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.InternalObject"></a>

### *property* MeshConnectionBase.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshConnectionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.MasterBodies"></a>

### *property* MeshConnectionBase.MasterBodies *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MasterBodies.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.MasterLocation"></a>

### *property* MeshConnectionBase.MasterLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MasterLocation.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Name"></a>

### *property* MeshConnectionBase.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.ObjectId"></a>

### *property* MeshConnectionBase.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.ObjectState"></a>

### *property* MeshConnectionBase.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.ObjectTags"></a>

### *property* MeshConnectionBase.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Parent"></a>

### *property* MeshConnectionBase.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Properties"></a>

### *property* MeshConnectionBase.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.ScopeMode"></a>

### *property* MeshConnectionBase.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.ScopingMethod"></a>

### *property* MeshConnectionBase.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ScopingMethod property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.SlaveBodies"></a>

### *property* MeshConnectionBase.SlaveBodies *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SlaveBodies.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.SlaveLocation"></a>

### *property* MeshConnectionBase.SlaveLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SlaveLocation.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.SnapToBoundary"></a>

### *property* MeshConnectionBase.SnapToBoundary *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SnapToBoundary.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.SnapTolerance"></a>

### *property* MeshConnectionBase.SnapTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SnapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.SnapType"></a>

### *property* MeshConnectionBase.SnapType *: [Ansys.Mechanical.DataModel.Enums.SnapType](../../../Mechanical/DataModel/Enums/SnapType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SnapType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SnapType.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.State"></a>

### *property* MeshConnectionBase.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Suppressed"></a>

### *property* MeshConnectionBase.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.ToleranceSlider"></a>

### *property* MeshConnectionBase.ToleranceSlider *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.ToleranceType"></a>

### *property* MeshConnectionBase.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.VisibleProperties"></a>

### *property* MeshConnectionBase.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshConnectionBase.Activate"></a>

### MeshConnectionBase.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.AddComment"></a>

### MeshConnectionBase.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.AddFigure"></a>

### MeshConnectionBase.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.AddImage"></a>

### MeshConnectionBase.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Copy"></a>

### MeshConnectionBase.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.CopyTo"></a>

### MeshConnectionBase.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.CreateObjRef"></a>

### MeshConnectionBase.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.CreateParameter"></a>

### MeshConnectionBase.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Cut"></a>

### MeshConnectionBase.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Delete"></a>

### MeshConnectionBase.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Duplicate"></a>

### MeshConnectionBase.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Equals"></a>

### MeshConnectionBase.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Generate"></a>

### MeshConnectionBase.Generate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Generate action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GetAPIName"></a>

### MeshConnectionBase.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GetAllProperties"></a>

### MeshConnectionBase.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GetChildren"></a>

### MeshConnectionBase.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MeshConnectionBase.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GetDetailsView"></a>

### MeshConnectionBase.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GetEnumName"></a>

### MeshConnectionBase.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GetHashCode"></a>

### MeshConnectionBase.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GetIconFile"></a>

### MeshConnectionBase.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GetLifetimeService"></a>

### MeshConnectionBase.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GetObjectData"></a>

### MeshConnectionBase.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GetParameter"></a>

### MeshConnectionBase.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GetPath"></a>

### MeshConnectionBase.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GetPropertyName"></a>

### MeshConnectionBase.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GetPropertyValue"></a>

### MeshConnectionBase.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GetVisibleProperties"></a>

### MeshConnectionBase.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GetVisiblePropertyNames"></a>

### MeshConnectionBase.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GroupAllSimilarChildren"></a>

### MeshConnectionBase.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GroupSimilarObjects"></a>

### MeshConnectionBase.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.InitializeLifetimeService"></a>

### MeshConnectionBase.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.IsPropertyEditable"></a>

### MeshConnectionBase.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshConnectionBase.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.IsPropertyVisible"></a>

### MeshConnectionBase.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshConnectionBase.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Paste"></a>

### MeshConnectionBase.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.PropertyByAPIName"></a>

### MeshConnectionBase.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.PropertyById"></a>

### MeshConnectionBase.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.PropertyByName"></a>

### MeshConnectionBase.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.RemoveFromGroup"></a>

### MeshConnectionBase.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.RemoveParameter"></a>

### MeshConnectionBase.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.RenameBasedOnDefinition"></a>

### MeshConnectionBase.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

