# `Thickness`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Thickness"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Thickness(internalObject: Any)

<a id="Thickness"></a>

### *class* Thickness(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Thickness.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Thickness.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Thickness.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Thickness.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Thickness.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Thickness.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Thickness.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Thickness.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Thickness.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Thickness.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Thickness.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Thickness.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Thickness.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#Thickness.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Thickness.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Thickness.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Thickness.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Thickness.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Thickness.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Thickness.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Thickness.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Thickness.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Thickness.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Thickness.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Thickness.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Thickness.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Thickness.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Thickness.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Thickness.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Thickness.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Thickness.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Thickness.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Thickness.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Thickness.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Thickness.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Thickness.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Thickness.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Thickness.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Thickness.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Thickness.AttachedRefs)                               | AttachedRefs property.                                        |
| [`Children`](#Thickness.Children)                                       | Gets the list of children.                                    |
| [`ClsId`](#Thickness.ClsId)                                             | ClsId property.                                               |
| [`Comments`](#Thickness.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Thickness.DataModelObjectCategory)         | Gets the current DataModelObject's category.                  |
| [`Figures`](#Thickness.Figures)                                         | Gets the list of associated figures.                          |
| [`GroupingFolder`](#Thickness.GroupingFolder)                           | GroupingFolder property.                                      |
| [`IconName`](#Thickness.IconName)                                       | IconName property.                                            |
| [`Images`](#Thickness.Images)                                           | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#Thickness.ImportableObjectSourceId)       | ImportableObjectSourceId property.                            |
| [`IndependentVariable`](#Thickness.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#Thickness.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`Location`](#Thickness.Location)                                       | Gets or sets the Location.                                    |
| [`MembraneOffset`](#Thickness.MembraneOffset)                           | Gets or sets the MembraneOffset.                              |
| [`Name`](#Thickness.Name)                                               | Name property.                                                |
| [`NumberOfSegments`](#Thickness.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`ObjectId`](#Thickness.ObjectId)                                       | ObjectId property.                                            |
| [`ObjectState`](#Thickness.ObjectState)                                 | ObjectState property.                                         |
| [`ObjectTags`](#Thickness.ObjectTags)                                   | ObjectTags property.                                          |
| [`OffsetType`](#Thickness.OffsetType)                                   | Gets or sets the OffsetType.                                  |
| [`Parent`](#Thickness.Parent)                                           | Parent property.                                              |
| [`Properties`](#Thickness.Properties)                                   | Gets the list of properties for this object.                  |
| [`RangeMaximum`](#Thickness.RangeMaximum)                               | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#Thickness.RangeMinimum)                               | Gets or sets the RangeMinimum.                                |
| [`ReadOnly`](#Thickness.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`ScopeMode`](#Thickness.ScopeMode)                                     | Gets the ScopeMode.                                           |
| [`State`](#Thickness.State)                                             | State property.                                               |
| [`Suppressed`](#Thickness.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`ThicknessField`](#Thickness.ThicknessField)                           | Gets or sets the ThicknessField.                              |
| [`TransferableObjectId`](#Thickness.TransferableObjectId)               | TransferableObjectId property.                                |
| [`VisibleProperties`](#Thickness.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XYZFunctionCoordinateSystem`](#Thickness.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |

<a id="property-detail"></a>

## Property detail

<a id="Thickness.AttachedRefs"></a>

### *property* Thickness.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Children"></a>

### *property* Thickness.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.ClsId"></a>

### *property* Thickness.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Comments"></a>

### *property* Thickness.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.DataModelObjectCategory"></a>

### *property* Thickness.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Figures"></a>

### *property* Thickness.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GroupingFolder"></a>

### *property* Thickness.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.IconName"></a>

### *property* Thickness.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Images"></a>

### *property* Thickness.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.ImportableObjectSourceId"></a>

### *property* Thickness.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.IndependentVariable"></a>

### *property* Thickness.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.InternalObject"></a>

### *property* Thickness.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSThicknessAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Location"></a>

### *property* Thickness.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.MembraneOffset"></a>

### *property* Thickness.MembraneOffset *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MembraneOffset.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Name"></a>

### *property* Thickness.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.NumberOfSegments"></a>

### *property* Thickness.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.ObjectId"></a>

### *property* Thickness.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.ObjectState"></a>

### *property* Thickness.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.ObjectTags"></a>

### *property* Thickness.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.OffsetType"></a>

### *property* Thickness.OffsetType *: [Ansys.Mechanical.DataModel.Enums.ShellOffsetType](../../../Mechanical/DataModel/Enums/ShellOffsetType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellOffsetType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OffsetType.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Parent"></a>

### *property* Thickness.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Properties"></a>

### *property* Thickness.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.RangeMaximum"></a>

### *property* Thickness.RangeMaximum *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.RangeMinimum"></a>

### *property* Thickness.RangeMinimum *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.ReadOnly"></a>

### *property* Thickness.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.ScopeMode"></a>

### *property* Thickness.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.State"></a>

### *property* Thickness.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Suppressed"></a>

### *property* Thickness.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.ThicknessField"></a>

### *property* Thickness.ThicknessField *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThicknessField.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.TransferableObjectId"></a>

### *property* Thickness.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.VisibleProperties"></a>

### *property* Thickness.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.XYZFunctionCoordinateSystem"></a>

### *property* Thickness.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Thickness.Activate"></a>

### Thickness.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.AddComment"></a>

### Thickness.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.AddFigure"></a>

### Thickness.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.AddImage"></a>

### Thickness.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Copy"></a>

### Thickness.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.CopyTo"></a>

### Thickness.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.CreateObjRef"></a>

### Thickness.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.CreateParameter"></a>

### Thickness.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Cut"></a>

### Thickness.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Delete"></a>

### Thickness.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Duplicate"></a>

### Thickness.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Equals"></a>

### Thickness.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GetAPIName"></a>

### Thickness.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GetAllProperties"></a>

### Thickness.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GetChildren"></a>

### Thickness.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Thickness.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GetDetailsView"></a>

### Thickness.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GetEnumName"></a>

### Thickness.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GetHashCode"></a>

### Thickness.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GetIconFile"></a>

### Thickness.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GetLifetimeService"></a>

### Thickness.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GetObjectData"></a>

### Thickness.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GetParameter"></a>

### Thickness.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GetPath"></a>

### Thickness.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GetPropertyName"></a>

### Thickness.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GetPropertyValue"></a>

### Thickness.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GetVisibleProperties"></a>

### Thickness.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GetVisiblePropertyNames"></a>

### Thickness.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GroupAllSimilarChildren"></a>

### Thickness.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.GroupSimilarObjects"></a>

### Thickness.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.InitializeLifetimeService"></a>

### Thickness.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.IsPropertyEditable"></a>

### Thickness.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Thickness.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.IsPropertyVisible"></a>

### Thickness.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Thickness.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.Paste"></a>

### Thickness.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.PropertyByAPIName"></a>

### Thickness.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Thickness.PropertyById"></a>

### Thickness.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.PropertyByName"></a>

### Thickness.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.RemoveFromGroup"></a>

### Thickness.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Thickness.RemoveParameter"></a>

### Thickness.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

