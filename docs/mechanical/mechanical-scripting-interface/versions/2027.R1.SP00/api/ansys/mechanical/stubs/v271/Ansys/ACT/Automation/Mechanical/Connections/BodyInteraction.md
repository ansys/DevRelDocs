# `BodyInteraction`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.BodyInteraction"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.BodyInteraction(internalObject: Any)

<a id="BodyInteraction"></a>

### *class* BodyInteraction(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a BodyInteraction.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#BodyInteraction.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#BodyInteraction.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#BodyInteraction.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#BodyInteraction.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#BodyInteraction.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#BodyInteraction.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#BodyInteraction.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#BodyInteraction.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#BodyInteraction.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#BodyInteraction.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#BodyInteraction.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#BodyInteraction.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#BodyInteraction.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#BodyInteraction.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#BodyInteraction.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#BodyInteraction.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#BodyInteraction.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#BodyInteraction.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#BodyInteraction.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#BodyInteraction.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#BodyInteraction.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#BodyInteraction.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#BodyInteraction.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#BodyInteraction.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#BodyInteraction.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#BodyInteraction.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#BodyInteraction.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#BodyInteraction.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#BodyInteraction.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#BodyInteraction.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#BodyInteraction.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#BodyInteraction.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#BodyInteraction.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#BodyInteraction.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#BodyInteraction.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#BodyInteraction.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#BodyInteraction.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#BodyInteraction.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#BodyInteraction.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#BodyInteraction.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Breakable`](#BodyInteraction.Breakable)                             | Gets or sets the Breakable.                                   |
| [`Children`](#BodyInteraction.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#BodyInteraction.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#BodyInteraction.Comments)                               | Gets the list of associated comments.                         |
| [`ContactType`](#BodyInteraction.ContactType)                         | Gets or sets the ContactType.                                 |
| [`DataModelObjectCategory`](#BodyInteraction.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`DecayConstant`](#BodyInteraction.DecayConstant)                     | Gets or sets the DecayConstant.                               |
| [`DynamicCoefficient`](#BodyInteraction.DynamicCoefficient)           | Gets or sets the DynamicCoefficient.                          |
| [`Figures`](#BodyInteraction.Figures)                                 | Gets the list of associated figures.                          |
| [`FrictionCoefficient`](#BodyInteraction.FrictionCoefficient)         | Gets or sets the FrictionCoefficient.                         |
| [`GroupingFolder`](#BodyInteraction.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#BodyInteraction.IconName)                               | IconName property.                                            |
| [`Images`](#BodyInteraction.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#BodyInteraction.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#BodyInteraction.Location)                               | Gets or sets the Location.                                    |
| [`MaximumOffset`](#BodyInteraction.MaximumOffset)                     | Gets or sets the MaximumOffset.                               |
| [`Name`](#BodyInteraction.Name)                                       | Name property.                                                |
| [`NormalForceExponent`](#BodyInteraction.NormalForceExponent)         | Gets or sets the NormalForceExponent.                         |
| [`NormalForceLimit`](#BodyInteraction.NormalForceLimit)               | Gets or sets the NormalForceLimit.                            |
| [`NormalStressExponent`](#BodyInteraction.NormalStressExponent)       | Gets or sets the NormalStressExponent.                        |
| [`NormalStressLimit`](#BodyInteraction.NormalStressLimit)             | Gets or sets the NormalStressLimit.                           |
| [`ObjectId`](#BodyInteraction.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#BodyInteraction.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#BodyInteraction.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#BodyInteraction.Parent)                                   | Parent property.                                              |
| [`Properties`](#BodyInteraction.Properties)                           | Gets the list of properties for this object.                  |
| [`ShearForceExponent`](#BodyInteraction.ShearForceExponent)           | Gets or sets the ShearForceExponent.                          |
| [`ShearForceLimit`](#BodyInteraction.ShearForceLimit)                 | Gets or sets the ShearForceLimit.                             |
| [`ShearStressExponent`](#BodyInteraction.ShearStressExponent)         | Gets or sets the ShearStressExponent.                         |
| [`ShearStressLimit`](#BodyInteraction.ShearStressLimit)               | Gets or sets the ShearStressLimit.                            |
| [`State`](#BodyInteraction.State)                                     | State property.                                               |
| [`Suppressed`](#BodyInteraction.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#BodyInteraction.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="BodyInteraction.AttachedRefs"></a>

### *property* BodyInteraction.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Breakable"></a>

### *property* BodyInteraction.Breakable *: [Ansys.Mechanical.DataModel.Enums.BondedBreakableType](../../../../Mechanical/DataModel/Enums/BondedBreakableType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.BondedBreakableType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Breakable.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Children"></a>

### *property* BodyInteraction.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ClsId"></a>

### *property* BodyInteraction.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Comments"></a>

### *property* BodyInteraction.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ContactType"></a>

### *property* BodyInteraction.ContactType *: [Ansys.Mechanical.DataModel.Enums.ContactType](../../../../Mechanical/DataModel/Enums/ContactType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactType.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.DataModelObjectCategory"></a>

### *property* BodyInteraction.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.DecayConstant"></a>

### *property* BodyInteraction.DecayConstant *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DecayConstant.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.DynamicCoefficient"></a>

### *property* BodyInteraction.DynamicCoefficient *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DynamicCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Figures"></a>

### *property* BodyInteraction.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.FrictionCoefficient"></a>

### *property* BodyInteraction.FrictionCoefficient *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrictionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GroupingFolder"></a>

### *property* BodyInteraction.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.IconName"></a>

### *property* BodyInteraction.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Images"></a>

### *property* BodyInteraction.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.InternalObject"></a>

### *property* BodyInteraction.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBodyInteractionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Location"></a>

### *property* BodyInteraction.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.MaximumOffset"></a>

### *property* BodyInteraction.MaximumOffset *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumOffset.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Name"></a>

### *property* BodyInteraction.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.NormalForceExponent"></a>

### *property* BodyInteraction.NormalForceExponent *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalForceExponent.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.NormalForceLimit"></a>

### *property* BodyInteraction.NormalForceLimit *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalForceLimit.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.NormalStressExponent"></a>

### *property* BodyInteraction.NormalStressExponent *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalStressExponent.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.NormalStressLimit"></a>

### *property* BodyInteraction.NormalStressLimit *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalStressLimit.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ObjectId"></a>

### *property* BodyInteraction.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ObjectState"></a>

### *property* BodyInteraction.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ObjectTags"></a>

### *property* BodyInteraction.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Parent"></a>

### *property* BodyInteraction.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Properties"></a>

### *property* BodyInteraction.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ShearForceExponent"></a>

### *property* BodyInteraction.ShearForceExponent *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearForceExponent.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ShearForceLimit"></a>

### *property* BodyInteraction.ShearForceLimit *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearForceLimit.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ShearStressExponent"></a>

### *property* BodyInteraction.ShearStressExponent *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearStressExponent.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ShearStressLimit"></a>

### *property* BodyInteraction.ShearStressLimit *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearStressLimit.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.State"></a>

### *property* BodyInteraction.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Suppressed"></a>

### *property* BodyInteraction.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.VisibleProperties"></a>

### *property* BodyInteraction.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BodyInteraction.Activate"></a>

### BodyInteraction.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.AddCommandSnippet"></a>

### BodyInteraction.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](../CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.AddComment"></a>

### BodyInteraction.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.AddFigure"></a>

### BodyInteraction.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.AddImage"></a>

### BodyInteraction.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Copy"></a>

### BodyInteraction.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.CopyTo"></a>

### BodyInteraction.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.CreateObjRef"></a>

### BodyInteraction.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.CreateParameter"></a>

### BodyInteraction.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Cut"></a>

### BodyInteraction.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Delete"></a>

### BodyInteraction.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Duplicate"></a>

### BodyInteraction.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Equals"></a>

### BodyInteraction.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetAPIName"></a>

### BodyInteraction.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetAllProperties"></a>

### BodyInteraction.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetChildren"></a>

### BodyInteraction.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### BodyInteraction.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetDetailsView"></a>

### BodyInteraction.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetEnumName"></a>

### BodyInteraction.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetHashCode"></a>

### BodyInteraction.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetIconFile"></a>

### BodyInteraction.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetLifetimeService"></a>

### BodyInteraction.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetObjectData"></a>

### BodyInteraction.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetParameter"></a>

### BodyInteraction.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetPath"></a>

### BodyInteraction.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetPropertyName"></a>

### BodyInteraction.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetPropertyValue"></a>

### BodyInteraction.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetVisibleProperties"></a>

### BodyInteraction.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetVisiblePropertyNames"></a>

### BodyInteraction.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GroupAllSimilarChildren"></a>

### BodyInteraction.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GroupSimilarObjects"></a>

### BodyInteraction.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.InitializeLifetimeService"></a>

### BodyInteraction.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.IsPropertyEditable"></a>

### BodyInteraction.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BodyInteraction.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.IsPropertyVisible"></a>

### BodyInteraction.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BodyInteraction.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Paste"></a>

### BodyInteraction.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.PropertyByAPIName"></a>

### BodyInteraction.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.PropertyById"></a>

### BodyInteraction.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.PropertyByName"></a>

### BodyInteraction.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.RemoveFromGroup"></a>

### BodyInteraction.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.RemoveParameter"></a>

### BodyInteraction.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

