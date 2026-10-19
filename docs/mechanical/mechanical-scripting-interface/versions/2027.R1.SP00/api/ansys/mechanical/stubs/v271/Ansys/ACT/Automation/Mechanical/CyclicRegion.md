# `CyclicRegion`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CyclicRegion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CyclicRegion(internalObject: Any)

<a id="CyclicRegion"></a>

### *class* CyclicRegion(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CyclicRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CyclicRegion.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#CyclicRegion.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#CyclicRegion.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#CyclicRegion.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#CyclicRegion.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CyclicRegion.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CyclicRegion.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CyclicRegion.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CyclicRegion.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CyclicRegion.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#CyclicRegion.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CyclicRegion.Equals)                                       | Equals method.                                                                              |
| [`FlipHighLow`](#CyclicRegion.FlipHighLow)                             | Flips the High and Low Boundaries.                                                          |
| [`GetAPIName`](#CyclicRegion.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CyclicRegion.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#CyclicRegion.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CyclicRegion.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CyclicRegion.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#CyclicRegion.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#CyclicRegion.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CyclicRegion.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CyclicRegion.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#CyclicRegion.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CyclicRegion.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#CyclicRegion.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CyclicRegion.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CyclicRegion.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CyclicRegion.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CyclicRegion.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CyclicRegion.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CyclicRegion.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CyclicRegion.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CyclicRegion.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#CyclicRegion.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CyclicRegion.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#CyclicRegion.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#CyclicRegion.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CyclicRegion.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CyclicRegion.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#CyclicRegion.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#CyclicRegion.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#CyclicRegion.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#CyclicRegion.Comments)                                 | Gets the list of associated comments.                         |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)           | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#CyclicRegion.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#CyclicRegion.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#CyclicRegion.GroupingFolder)                     | GroupingFolder property.                                      |
| [`HighBoundaryLocation`](#CyclicRegion.HighBoundaryLocation)         | Gets or sets the HighBoundaryLocation.                        |
| [`IconName`](#CyclicRegion.IconName)                                 | IconName property.                                            |
| [`Images`](#CyclicRegion.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#CyclicRegion.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#CyclicRegion.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#CyclicRegion.Location)                                 | Gets or sets the Location.                                    |
| [`LowBoundaryLocation`](#CyclicRegion.LowBoundaryLocation)           | Gets or sets the LowBoundaryLocation.                         |
| [`Name`](#CyclicRegion.Name)                                         | Name property.                                                |
| [`ObjectId`](#CyclicRegion.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#CyclicRegion.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#CyclicRegion.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#CyclicRegion.Parent)                                     | Parent property.                                              |
| [`Properties`](#CyclicRegion.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#CyclicRegion.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`ScopeMode`](#CyclicRegion.ScopeMode)                               | Gets the ScopeMode.                                           |
| [`SectorsNumber`](#CyclicRegion.SectorsNumber)                       | Sectors Number.                                               |
| [`State`](#CyclicRegion.State)                                       | State property.                                               |
| [`Suppressed`](#CyclicRegion.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#CyclicRegion.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#CyclicRegion.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CyclicRegion.AttachedRefs"></a>

### *property* CyclicRegion.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Children"></a>

### *property* CyclicRegion.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.ClsId"></a>

### *property* CyclicRegion.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Comments"></a>

### *property* CyclicRegion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.CoordinateSystem"></a>

### *property* CyclicRegion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.DataModelObjectCategory"></a>

### *property* CyclicRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Figures"></a>

### *property* CyclicRegion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GroupingFolder"></a>

### *property* CyclicRegion.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.HighBoundaryLocation"></a>

### *property* CyclicRegion.HighBoundaryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HighBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.IconName"></a>

### *property* CyclicRegion.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Images"></a>

### *property* CyclicRegion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.ImportableObjectSourceId"></a>

### *property* CyclicRegion.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.InternalObject"></a>

### *property* CyclicRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGeneralAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Location"></a>

### *property* CyclicRegion.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.LowBoundaryLocation"></a>

### *property* CyclicRegion.LowBoundaryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LowBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Name"></a>

### *property* CyclicRegion.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.ObjectId"></a>

### *property* CyclicRegion.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.ObjectState"></a>

### *property* CyclicRegion.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.ObjectTags"></a>

### *property* CyclicRegion.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Parent"></a>

### *property* CyclicRegion.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Properties"></a>

### *property* CyclicRegion.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.ReadOnly"></a>

### *property* CyclicRegion.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.ScopeMode"></a>

### *property* CyclicRegion.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.SectorsNumber"></a>

### *property* CyclicRegion.SectorsNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Sectors Number.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.State"></a>

### *property* CyclicRegion.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Suppressed"></a>

### *property* CyclicRegion.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.TransferableObjectId"></a>

### *property* CyclicRegion.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.VisibleProperties"></a>

### *property* CyclicRegion.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CyclicRegion.Activate"></a>

### CyclicRegion.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.AddComment"></a>

### CyclicRegion.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.AddFigure"></a>

### CyclicRegion.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.AddImage"></a>

### CyclicRegion.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Copy"></a>

### CyclicRegion.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.CopyTo"></a>

### CyclicRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.CreateObjRef"></a>

### CyclicRegion.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.CreateParameter"></a>

### CyclicRegion.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Cut"></a>

### CyclicRegion.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Delete"></a>

### CyclicRegion.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Duplicate"></a>

### CyclicRegion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Equals"></a>

### CyclicRegion.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.FlipHighLow"></a>

### CyclicRegion.FlipHighLow() → [None](https://docs.python.org/3/builtins/constants.html#None)

Flips the High and Low Boundaries.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GetAPIName"></a>

### CyclicRegion.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GetAllProperties"></a>

### CyclicRegion.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GetChildren"></a>

### CyclicRegion.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CyclicRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GetDetailsView"></a>

### CyclicRegion.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GetEnumName"></a>

### CyclicRegion.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GetHashCode"></a>

### CyclicRegion.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GetIconFile"></a>

### CyclicRegion.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GetLifetimeService"></a>

### CyclicRegion.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GetObjectData"></a>

### CyclicRegion.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GetParameter"></a>

### CyclicRegion.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GetPath"></a>

### CyclicRegion.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GetPropertyName"></a>

### CyclicRegion.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GetPropertyValue"></a>

### CyclicRegion.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GetVisibleProperties"></a>

### CyclicRegion.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GetVisiblePropertyNames"></a>

### CyclicRegion.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GroupAllSimilarChildren"></a>

### CyclicRegion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.GroupSimilarObjects"></a>

### CyclicRegion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.InitializeLifetimeService"></a>

### CyclicRegion.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.IsPropertyEditable"></a>

### CyclicRegion.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CyclicRegion.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.IsPropertyVisible"></a>

### CyclicRegion.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CyclicRegion.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.Paste"></a>

### CyclicRegion.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.PropertyByAPIName"></a>

### CyclicRegion.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.PropertyById"></a>

### CyclicRegion.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.PropertyByName"></a>

### CyclicRegion.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.RemoveFromGroup"></a>

### CyclicRegion.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CyclicRegion.RemoveParameter"></a>

### CyclicRegion.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

