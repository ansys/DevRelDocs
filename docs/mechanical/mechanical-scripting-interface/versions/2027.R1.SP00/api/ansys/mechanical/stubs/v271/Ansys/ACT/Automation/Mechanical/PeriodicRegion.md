# `PeriodicRegion`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PeriodicRegion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PeriodicRegion(internalObject: Any)

<a id="PeriodicRegion"></a>

### *class* PeriodicRegion(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PeriodicRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PeriodicRegion.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#PeriodicRegion.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#PeriodicRegion.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#PeriodicRegion.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#PeriodicRegion.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PeriodicRegion.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PeriodicRegion.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PeriodicRegion.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PeriodicRegion.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PeriodicRegion.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#PeriodicRegion.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PeriodicRegion.Equals)                                       | Equals method.                                                                              |
| [`FlipHighLow`](#PeriodicRegion.FlipHighLow)                             | Flips the High and Low Boundaries.                                                          |
| [`GetAPIName`](#PeriodicRegion.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PeriodicRegion.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#PeriodicRegion.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PeriodicRegion.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PeriodicRegion.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PeriodicRegion.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PeriodicRegion.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PeriodicRegion.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PeriodicRegion.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PeriodicRegion.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PeriodicRegion.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PeriodicRegion.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PeriodicRegion.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PeriodicRegion.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PeriodicRegion.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PeriodicRegion.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PeriodicRegion.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PeriodicRegion.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PeriodicRegion.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PeriodicRegion.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PeriodicRegion.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#PeriodicRegion.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PeriodicRegion.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PeriodicRegion.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PeriodicRegion.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PeriodicRegion.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#PeriodicRegion.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#PeriodicRegion.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#PeriodicRegion.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#PeriodicRegion.Comments)                                 | Gets the list of associated comments.                         |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)             | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#PeriodicRegion.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#PeriodicRegion.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#PeriodicRegion.GroupingFolder)                     | GroupingFolder property.                                      |
| [`HighBoundaryLocation`](#PeriodicRegion.HighBoundaryLocation)         | Gets or sets the HighBoundaryLocation.                        |
| [`IconName`](#PeriodicRegion.IconName)                                 | IconName property.                                            |
| [`Images`](#PeriodicRegion.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#PeriodicRegion.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#PeriodicRegion.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#PeriodicRegion.Location)                                 | Gets or sets the Location.                                    |
| [`LowBoundaryLocation`](#PeriodicRegion.LowBoundaryLocation)           | Gets or sets the LowBoundaryLocation.                         |
| [`Name`](#PeriodicRegion.Name)                                         | Name property.                                                |
| [`ObjectId`](#PeriodicRegion.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#PeriodicRegion.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#PeriodicRegion.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#PeriodicRegion.Parent)                                     | Parent property.                                              |
| [`Properties`](#PeriodicRegion.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#PeriodicRegion.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`ScopeMode`](#PeriodicRegion.ScopeMode)                               | Gets the ScopeMode.                                           |
| [`SectorsNumber`](#PeriodicRegion.SectorsNumber)                       | Sectors Number.                                               |
| [`State`](#PeriodicRegion.State)                                       | State property.                                               |
| [`Suppressed`](#PeriodicRegion.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#PeriodicRegion.TransferableObjectId)         | TransferableObjectId property.                                |
| [`Type`](#PeriodicRegion.Type)                                         | Gets or sets the Type.                                        |
| [`VisibleProperties`](#PeriodicRegion.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PeriodicRegion.AttachedRefs"></a>

### *property* PeriodicRegion.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Children"></a>

### *property* PeriodicRegion.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.ClsId"></a>

### *property* PeriodicRegion.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Comments"></a>

### *property* PeriodicRegion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.CoordinateSystem"></a>

### *property* PeriodicRegion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.DataModelObjectCategory"></a>

### *property* PeriodicRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Figures"></a>

### *property* PeriodicRegion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GroupingFolder"></a>

### *property* PeriodicRegion.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.HighBoundaryLocation"></a>

### *property* PeriodicRegion.HighBoundaryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HighBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.IconName"></a>

### *property* PeriodicRegion.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Images"></a>

### *property* PeriodicRegion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.ImportableObjectSourceId"></a>

### *property* PeriodicRegion.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.InternalObject"></a>

### *property* PeriodicRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGeneralAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Location"></a>

### *property* PeriodicRegion.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.LowBoundaryLocation"></a>

### *property* PeriodicRegion.LowBoundaryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LowBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Name"></a>

### *property* PeriodicRegion.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.ObjectId"></a>

### *property* PeriodicRegion.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.ObjectState"></a>

### *property* PeriodicRegion.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.ObjectTags"></a>

### *property* PeriodicRegion.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Parent"></a>

### *property* PeriodicRegion.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Properties"></a>

### *property* PeriodicRegion.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.ReadOnly"></a>

### *property* PeriodicRegion.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.ScopeMode"></a>

### *property* PeriodicRegion.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.SectorsNumber"></a>

### *property* PeriodicRegion.SectorsNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Sectors Number.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.State"></a>

### *property* PeriodicRegion.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Suppressed"></a>

### *property* PeriodicRegion.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.TransferableObjectId"></a>

### *property* PeriodicRegion.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Type"></a>

### *property* PeriodicRegion.Type *: [Ansys.Mechanical.DataModel.Enums.PeriodicRegionType](../../../Mechanical/DataModel/Enums/PeriodicRegionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PeriodicRegionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.VisibleProperties"></a>

### *property* PeriodicRegion.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PeriodicRegion.Activate"></a>

### PeriodicRegion.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.AddComment"></a>

### PeriodicRegion.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.AddFigure"></a>

### PeriodicRegion.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.AddImage"></a>

### PeriodicRegion.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Copy"></a>

### PeriodicRegion.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.CopyTo"></a>

### PeriodicRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.CreateObjRef"></a>

### PeriodicRegion.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.CreateParameter"></a>

### PeriodicRegion.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Cut"></a>

### PeriodicRegion.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Delete"></a>

### PeriodicRegion.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Duplicate"></a>

### PeriodicRegion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Equals"></a>

### PeriodicRegion.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.FlipHighLow"></a>

### PeriodicRegion.FlipHighLow() → [None](https://docs.python.org/3/builtins/constants.html#None)

Flips the High and Low Boundaries.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetAPIName"></a>

### PeriodicRegion.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetAllProperties"></a>

### PeriodicRegion.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetChildren"></a>

### PeriodicRegion.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PeriodicRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetDetailsView"></a>

### PeriodicRegion.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetEnumName"></a>

### PeriodicRegion.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetHashCode"></a>

### PeriodicRegion.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetIconFile"></a>

### PeriodicRegion.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetLifetimeService"></a>

### PeriodicRegion.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetObjectData"></a>

### PeriodicRegion.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetParameter"></a>

### PeriodicRegion.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetPath"></a>

### PeriodicRegion.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetPropertyName"></a>

### PeriodicRegion.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetPropertyValue"></a>

### PeriodicRegion.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetVisibleProperties"></a>

### PeriodicRegion.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetVisiblePropertyNames"></a>

### PeriodicRegion.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GroupAllSimilarChildren"></a>

### PeriodicRegion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GroupSimilarObjects"></a>

### PeriodicRegion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.InitializeLifetimeService"></a>

### PeriodicRegion.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.IsPropertyEditable"></a>

### PeriodicRegion.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PeriodicRegion.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.IsPropertyVisible"></a>

### PeriodicRegion.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PeriodicRegion.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Paste"></a>

### PeriodicRegion.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.PropertyByAPIName"></a>

### PeriodicRegion.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.PropertyById"></a>

### PeriodicRegion.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.PropertyByName"></a>

### PeriodicRegion.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.RemoveFromGroup"></a>

### PeriodicRegion.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.RemoveParameter"></a>

### PeriodicRegion.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

