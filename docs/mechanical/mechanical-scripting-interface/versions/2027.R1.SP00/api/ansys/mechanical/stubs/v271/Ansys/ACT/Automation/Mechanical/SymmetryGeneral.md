# `SymmetryGeneral`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SymmetryGeneral"></a>

#### *class* Ansys.ACT.Automation.Mechanical.SymmetryGeneral(internalObject: Any)

<a id="SymmetryGeneral"></a>

### *class* SymmetryGeneral(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a SymmetryGeneral.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#SymmetryGeneral.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#SymmetryGeneral.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#SymmetryGeneral.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#SymmetryGeneral.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#SymmetryGeneral.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#SymmetryGeneral.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#SymmetryGeneral.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#SymmetryGeneral.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#SymmetryGeneral.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#SymmetryGeneral.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#SymmetryGeneral.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#SymmetryGeneral.Equals)                                       | Equals method.                                                                              |
| [`FlipHighLow`](#SymmetryGeneral.FlipHighLow)                             | Flips the High and Low Boundaries.                                                          |
| [`GetAPIName`](#SymmetryGeneral.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#SymmetryGeneral.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#SymmetryGeneral.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#SymmetryGeneral.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#SymmetryGeneral.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#SymmetryGeneral.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#SymmetryGeneral.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#SymmetryGeneral.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#SymmetryGeneral.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#SymmetryGeneral.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#SymmetryGeneral.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#SymmetryGeneral.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#SymmetryGeneral.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#SymmetryGeneral.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#SymmetryGeneral.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#SymmetryGeneral.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#SymmetryGeneral.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#SymmetryGeneral.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#SymmetryGeneral.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#SymmetryGeneral.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#SymmetryGeneral.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#SymmetryGeneral.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#SymmetryGeneral.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#SymmetryGeneral.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#SymmetryGeneral.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#SymmetryGeneral.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#SymmetryGeneral.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#SymmetryGeneral.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#SymmetryGeneral.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#SymmetryGeneral.Comments)                                 | Gets the list of associated comments.                         |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)              | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#SymmetryGeneral.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#SymmetryGeneral.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#SymmetryGeneral.GroupingFolder)                     | GroupingFolder property.                                      |
| [`HighBoundaryLocation`](#SymmetryGeneral.HighBoundaryLocation)         | Gets or sets the HighBoundaryLocation.                        |
| [`IconName`](#SymmetryGeneral.IconName)                                 | IconName property.                                            |
| [`Images`](#SymmetryGeneral.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#SymmetryGeneral.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#SymmetryGeneral.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#SymmetryGeneral.Location)                                 | Gets or sets the Location.                                    |
| [`LowBoundaryLocation`](#SymmetryGeneral.LowBoundaryLocation)           | Gets or sets the LowBoundaryLocation.                         |
| [`Name`](#SymmetryGeneral.Name)                                         | Name property.                                                |
| [`ObjectId`](#SymmetryGeneral.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#SymmetryGeneral.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#SymmetryGeneral.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#SymmetryGeneral.Parent)                                     | Parent property.                                              |
| [`Properties`](#SymmetryGeneral.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#SymmetryGeneral.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`ScopeMode`](#SymmetryGeneral.ScopeMode)                               | Gets the ScopeMode.                                           |
| [`SectorsNumber`](#SymmetryGeneral.SectorsNumber)                       | Sectors Number.                                               |
| [`State`](#SymmetryGeneral.State)                                       | State property.                                               |
| [`Suppressed`](#SymmetryGeneral.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#SymmetryGeneral.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#SymmetryGeneral.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SymmetryGeneral.AttachedRefs"></a>

### *property* SymmetryGeneral.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Children"></a>

### *property* SymmetryGeneral.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.ClsId"></a>

### *property* SymmetryGeneral.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Comments"></a>

### *property* SymmetryGeneral.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.CoordinateSystem"></a>

### *property* SymmetryGeneral.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.DataModelObjectCategory"></a>

### *property* SymmetryGeneral.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Figures"></a>

### *property* SymmetryGeneral.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GroupingFolder"></a>

### *property* SymmetryGeneral.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.HighBoundaryLocation"></a>

### *property* SymmetryGeneral.HighBoundaryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HighBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.IconName"></a>

### *property* SymmetryGeneral.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Images"></a>

### *property* SymmetryGeneral.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.ImportableObjectSourceId"></a>

### *property* SymmetryGeneral.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.InternalObject"></a>

### *property* SymmetryGeneral.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGeneralAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Location"></a>

### *property* SymmetryGeneral.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.LowBoundaryLocation"></a>

### *property* SymmetryGeneral.LowBoundaryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LowBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Name"></a>

### *property* SymmetryGeneral.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.ObjectId"></a>

### *property* SymmetryGeneral.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.ObjectState"></a>

### *property* SymmetryGeneral.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.ObjectTags"></a>

### *property* SymmetryGeneral.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Parent"></a>

### *property* SymmetryGeneral.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Properties"></a>

### *property* SymmetryGeneral.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.ReadOnly"></a>

### *property* SymmetryGeneral.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.ScopeMode"></a>

### *property* SymmetryGeneral.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.SectorsNumber"></a>

### *property* SymmetryGeneral.SectorsNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Sectors Number.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.State"></a>

### *property* SymmetryGeneral.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Suppressed"></a>

### *property* SymmetryGeneral.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.TransferableObjectId"></a>

### *property* SymmetryGeneral.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.VisibleProperties"></a>

### *property* SymmetryGeneral.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SymmetryGeneral.Activate"></a>

### SymmetryGeneral.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.AddComment"></a>

### SymmetryGeneral.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.AddFigure"></a>

### SymmetryGeneral.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.AddImage"></a>

### SymmetryGeneral.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Copy"></a>

### SymmetryGeneral.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.CopyTo"></a>

### SymmetryGeneral.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.CreateObjRef"></a>

### SymmetryGeneral.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.CreateParameter"></a>

### SymmetryGeneral.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Cut"></a>

### SymmetryGeneral.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Delete"></a>

### SymmetryGeneral.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Duplicate"></a>

### SymmetryGeneral.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Equals"></a>

### SymmetryGeneral.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.FlipHighLow"></a>

### SymmetryGeneral.FlipHighLow() → [None](https://docs.python.org/3/builtins/constants.html#None)

Flips the High and Low Boundaries.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetAPIName"></a>

### SymmetryGeneral.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetAllProperties"></a>

### SymmetryGeneral.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetChildren"></a>

### SymmetryGeneral.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### SymmetryGeneral.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetDetailsView"></a>

### SymmetryGeneral.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetEnumName"></a>

### SymmetryGeneral.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetHashCode"></a>

### SymmetryGeneral.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetIconFile"></a>

### SymmetryGeneral.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetLifetimeService"></a>

### SymmetryGeneral.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetObjectData"></a>

### SymmetryGeneral.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetParameter"></a>

### SymmetryGeneral.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetPath"></a>

### SymmetryGeneral.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetPropertyName"></a>

### SymmetryGeneral.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetPropertyValue"></a>

### SymmetryGeneral.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetVisibleProperties"></a>

### SymmetryGeneral.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GetVisiblePropertyNames"></a>

### SymmetryGeneral.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GroupAllSimilarChildren"></a>

### SymmetryGeneral.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.GroupSimilarObjects"></a>

### SymmetryGeneral.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.InitializeLifetimeService"></a>

### SymmetryGeneral.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.IsPropertyEditable"></a>

### SymmetryGeneral.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SymmetryGeneral.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.IsPropertyVisible"></a>

### SymmetryGeneral.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SymmetryGeneral.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.Paste"></a>

### SymmetryGeneral.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.PropertyByAPIName"></a>

### SymmetryGeneral.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.PropertyById"></a>

### SymmetryGeneral.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.PropertyByName"></a>

### SymmetryGeneral.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.RemoveFromGroup"></a>

### SymmetryGeneral.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryGeneral.RemoveParameter"></a>

### SymmetryGeneral.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

