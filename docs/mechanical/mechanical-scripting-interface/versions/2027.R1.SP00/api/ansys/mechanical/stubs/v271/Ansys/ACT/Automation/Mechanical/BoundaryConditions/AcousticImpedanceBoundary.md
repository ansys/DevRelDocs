# `AcousticImpedanceBoundary`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticImpedanceBoundary"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticImpedanceBoundary(internalObject: Any)

<a id="AcousticImpedanceBoundary"></a>

### *class* AcousticImpedanceBoundary(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticImpedanceBoundary.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticImpedanceBoundary.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticImpedanceBoundary.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AcousticImpedanceBoundary.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticImpedanceBoundary.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AcousticImpedanceBoundary.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticImpedanceBoundary.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticImpedanceBoundary.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticImpedanceBoundary.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticImpedanceBoundary.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticImpedanceBoundary.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticImpedanceBoundary.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticImpedanceBoundary.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AcousticImpedanceBoundary.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticImpedanceBoundary.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticImpedanceBoundary.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticImpedanceBoundary.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticImpedanceBoundary.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticImpedanceBoundary.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticImpedanceBoundary.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticImpedanceBoundary.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticImpedanceBoundary.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticImpedanceBoundary.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticImpedanceBoundary.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticImpedanceBoundary.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticImpedanceBoundary.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AcousticImpedanceBoundary.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticImpedanceBoundary.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticImpedanceBoundary.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticImpedanceBoundary.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticImpedanceBoundary.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticImpedanceBoundary.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticImpedanceBoundary.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticImpedanceBoundary.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticImpedanceBoundary.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticImpedanceBoundary.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticImpedanceBoundary.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticImpedanceBoundary.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticImpedanceBoundary.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticImpedanceBoundary.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AcousticImpedanceBoundary.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#AcousticImpedanceBoundary.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#AcousticImpedanceBoundary.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#AcousticImpedanceBoundary.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticImpedanceBoundary.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#AcousticImpedanceBoundary.Figures)                                   | Gets the list of associated figures.                          |
| [`Frequency`](#AcousticImpedanceBoundary.Frequency)                               | Gets or sets the Frequency.                                   |
| [`GroupingFolder`](#AcousticImpedanceBoundary.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#AcousticImpedanceBoundary.IconName)                                 | IconName property.                                            |
| [`Images`](#AcousticImpedanceBoundary.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AcousticImpedanceBoundary.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#AcousticImpedanceBoundary.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticImpedanceBoundary.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#AcousticImpedanceBoundary.Name)                                         | Name property.                                                |
| [`ObjectId`](#AcousticImpedanceBoundary.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#AcousticImpedanceBoundary.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#AcousticImpedanceBoundary.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#AcousticImpedanceBoundary.Parent)                                     | Parent property.                                              |
| [`Properties`](#AcousticImpedanceBoundary.Properties)                             | Gets the list of properties for this object.                  |
| [`Reactance`](#AcousticImpedanceBoundary.Reactance)                               | Gets or sets the Reactance.                                   |
| [`ReadOnly`](#AcousticImpedanceBoundary.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`Resistance`](#AcousticImpedanceBoundary.Resistance)                             | Gets or sets the Resistance.                                  |
| [`SharedRefBody`](#AcousticImpedanceBoundary.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#AcousticImpedanceBoundary.State)                                       | State property.                                               |
| [`Suppressed`](#AcousticImpedanceBoundary.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#AcousticImpedanceBoundary.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#AcousticImpedanceBoundary.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticImpedanceBoundary.AttachedRefs"></a>

### *property* AcousticImpedanceBoundary.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Children"></a>

### *property* AcousticImpedanceBoundary.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.ClsId"></a>

### *property* AcousticImpedanceBoundary.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Comments"></a>

### *property* AcousticImpedanceBoundary.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.DataModelObjectCategory"></a>

### *property* AcousticImpedanceBoundary.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Figures"></a>

### *property* AcousticImpedanceBoundary.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Frequency"></a>

### *property* AcousticImpedanceBoundary.Frequency *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GroupingFolder"></a>

### *property* AcousticImpedanceBoundary.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.IconName"></a>

### *property* AcousticImpedanceBoundary.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Images"></a>

### *property* AcousticImpedanceBoundary.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.ImportableObjectSourceId"></a>

### *property* AcousticImpedanceBoundary.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.InternalObject"></a>

### *property* AcousticImpedanceBoundary.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Location"></a>

### *property* AcousticImpedanceBoundary.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Name"></a>

### *property* AcousticImpedanceBoundary.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.ObjectId"></a>

### *property* AcousticImpedanceBoundary.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.ObjectState"></a>

### *property* AcousticImpedanceBoundary.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.ObjectTags"></a>

### *property* AcousticImpedanceBoundary.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Parent"></a>

### *property* AcousticImpedanceBoundary.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Properties"></a>

### *property* AcousticImpedanceBoundary.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Reactance"></a>

### *property* AcousticImpedanceBoundary.Reactance *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Reactance.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.ReadOnly"></a>

### *property* AcousticImpedanceBoundary.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Resistance"></a>

### *property* AcousticImpedanceBoundary.Resistance *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Resistance.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.SharedRefBody"></a>

### *property* AcousticImpedanceBoundary.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.State"></a>

### *property* AcousticImpedanceBoundary.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Suppressed"></a>

### *property* AcousticImpedanceBoundary.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.TransferableObjectId"></a>

### *property* AcousticImpedanceBoundary.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.VisibleProperties"></a>

### *property* AcousticImpedanceBoundary.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticImpedanceBoundary.Activate"></a>

### AcousticImpedanceBoundary.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.AddComment"></a>

### AcousticImpedanceBoundary.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.AddFigure"></a>

### AcousticImpedanceBoundary.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.AddImage"></a>

### AcousticImpedanceBoundary.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Copy"></a>

### AcousticImpedanceBoundary.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.CopyTo"></a>

### AcousticImpedanceBoundary.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.CreateObjRef"></a>

### AcousticImpedanceBoundary.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.CreateParameter"></a>

### AcousticImpedanceBoundary.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Cut"></a>

### AcousticImpedanceBoundary.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Delete"></a>

### AcousticImpedanceBoundary.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Duplicate"></a>

### AcousticImpedanceBoundary.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Equals"></a>

### AcousticImpedanceBoundary.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GetAPIName"></a>

### AcousticImpedanceBoundary.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GetAllProperties"></a>

### AcousticImpedanceBoundary.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GetChildren"></a>

### AcousticImpedanceBoundary.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticImpedanceBoundary.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GetDetailsView"></a>

### AcousticImpedanceBoundary.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GetEnumName"></a>

### AcousticImpedanceBoundary.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GetHashCode"></a>

### AcousticImpedanceBoundary.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GetIconFile"></a>

### AcousticImpedanceBoundary.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GetLifetimeService"></a>

### AcousticImpedanceBoundary.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GetObjectData"></a>

### AcousticImpedanceBoundary.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GetParameter"></a>

### AcousticImpedanceBoundary.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GetPath"></a>

### AcousticImpedanceBoundary.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GetPropertyName"></a>

### AcousticImpedanceBoundary.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GetPropertyValue"></a>

### AcousticImpedanceBoundary.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GetVisibleProperties"></a>

### AcousticImpedanceBoundary.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GetVisiblePropertyNames"></a>

### AcousticImpedanceBoundary.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GroupAllSimilarChildren"></a>

### AcousticImpedanceBoundary.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GroupSimilarObjects"></a>

### AcousticImpedanceBoundary.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.InitializeLifetimeService"></a>

### AcousticImpedanceBoundary.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.IsPropertyEditable"></a>

### AcousticImpedanceBoundary.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticImpedanceBoundary.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.IsPropertyVisible"></a>

### AcousticImpedanceBoundary.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticImpedanceBoundary.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Paste"></a>

### AcousticImpedanceBoundary.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.PromoteToNamedSelection"></a>

### AcousticImpedanceBoundary.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.PropertyByAPIName"></a>

### AcousticImpedanceBoundary.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.PropertyById"></a>

### AcousticImpedanceBoundary.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.PropertyByName"></a>

### AcousticImpedanceBoundary.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.RemoveFromGroup"></a>

### AcousticImpedanceBoundary.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.RemoveParameter"></a>

### AcousticImpedanceBoundary.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

