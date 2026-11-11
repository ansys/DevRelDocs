# `BodyInteractions`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.BodyInteractions"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.BodyInteractions(internalObject: Any)

<a id="BodyInteractions"></a>

### *class* BodyInteractions(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a BodyInteractions.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#BodyInteractions.Activate)                                   | Activate the current object.                                                                |
| [`AddBodyInteraction`](#BodyInteractions.AddBodyInteraction)               | Creates a new child BodyInteraction.                                                        |
| [`AddComment`](#BodyInteractions.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#BodyInteractions.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#BodyInteractions.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#BodyInteractions.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#BodyInteractions.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#BodyInteractions.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#BodyInteractions.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#BodyInteractions.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#BodyInteractions.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#BodyInteractions.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#BodyInteractions.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#BodyInteractions.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#BodyInteractions.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#BodyInteractions.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#BodyInteractions.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#BodyInteractions.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#BodyInteractions.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#BodyInteractions.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#BodyInteractions.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#BodyInteractions.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#BodyInteractions.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#BodyInteractions.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#BodyInteractions.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#BodyInteractions.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#BodyInteractions.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#BodyInteractions.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#BodyInteractions.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#BodyInteractions.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#BodyInteractions.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#BodyInteractions.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#BodyInteractions.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#BodyInteractions.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#BodyInteractions.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#BodyInteractions.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#BodyInteractions.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#BodyInteractions.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#BodyInteractions.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#BodyInteractions.AttachedRefs)                         | AttachedRefs property.                                        |
| [`BodySelfContact`](#BodyInteractions.BodySelfContact)                   | Gets or sets the BodySelfContact.                             |
| [`Children`](#BodyInteractions.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#BodyInteractions.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#BodyInteractions.Comments)                                 | Gets the list of associated comments.                         |
| [`ContactDetection`](#BodyInteractions.ContactDetection)                 | Gets or sets the ContactDetection.                            |
| [`DataModelObjectCategory`](#BodyInteractions.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`EdgeOnEdgeContact`](#BodyInteractions.EdgeOnEdgeContact)               | Gets or sets the EdgeOnEdgeContact.                           |
| [`ElementSelfContact`](#BodyInteractions.ElementSelfContact)             | Gets or sets the ElementSelfContact.                          |
| [`Figures`](#BodyInteractions.Figures)                                   | Gets the list of associated figures.                          |
| [`Formulation`](#BodyInteractions.Formulation)                           | Gets or sets the Formulation.                                 |
| [`GroupingFolder`](#BodyInteractions.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#BodyInteractions.IconName)                                 | IconName property.                                            |
| [`Images`](#BodyInteractions.Images)                                     | Gets the list of associated images.                           |
| [`InternalObject`](#BodyInteractions.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`LimitingTimestepVelocity`](#BodyInteractions.LimitingTimestepVelocity) | Gets or sets the LimitingTimestepVelocity.                    |
| [`ManualContactTreatment`](#BodyInteractions.ManualContactTreatment)     | Gets or sets the ManualContactTreatment.                      |
| [`Name`](#BodyInteractions.Name)                                         | Name property.                                                |
| [`NodalShellThickness`](#BodyInteractions.NodalShellThickness)           | Gets or sets the NodalShellThickness.                         |
| [`ObjectId`](#BodyInteractions.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#BodyInteractions.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#BodyInteractions.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#BodyInteractions.Parent)                                     | Parent property.                                              |
| [`PinballFactor`](#BodyInteractions.PinballFactor)                       | Gets or sets the PinballFactor.                               |
| [`Properties`](#BodyInteractions.Properties)                             | Gets the list of properties for this object.                  |
| [`ShellThicknessFactor`](#BodyInteractions.ShellThicknessFactor)         | Gets or sets the ShellThicknessFactor.                        |
| [`SlidingContact`](#BodyInteractions.SlidingContact)                     | Gets or sets the SlidingContact.                              |
| [`State`](#BodyInteractions.State)                                       | State property.                                               |
| [`TimestepSafetyFactor`](#BodyInteractions.TimestepSafetyFactor)         | Gets or sets the TimestepSafetyFactor.                        |
| [`Tolerance`](#BodyInteractions.Tolerance)                               | Gets or sets the Tolerance.                                   |
| [`VisibleProperties`](#BodyInteractions.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="BodyInteractions.AttachedRefs"></a>

### *property* BodyInteractions.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.BodySelfContact"></a>

### *property* BodyInteractions.BodySelfContact *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BodySelfContact.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Children"></a>

### *property* BodyInteractions.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.ClsId"></a>

### *property* BodyInteractions.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Comments"></a>

### *property* BodyInteractions.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.ContactDetection"></a>

### *property* BodyInteractions.ContactDetection *: [Ansys.Mechanical.DataModel.Enums.ContactDetection](../../../../Mechanical/DataModel/Enums/ContactDetection.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactDetection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactDetection.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.DataModelObjectCategory"></a>

### *property* BodyInteractions.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.EdgeOnEdgeContact"></a>

### *property* BodyInteractions.EdgeOnEdgeContact *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EdgeOnEdgeContact.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.ElementSelfContact"></a>

### *property* BodyInteractions.ElementSelfContact *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElementSelfContact.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Figures"></a>

### *property* BodyInteractions.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Formulation"></a>

### *property* BodyInteractions.Formulation *: [Ansys.Mechanical.DataModel.Enums.BodyInteractionFormulation](../../../../Mechanical/DataModel/Enums/BodyInteractionFormulation.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.BodyInteractionFormulation) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GroupingFolder"></a>

### *property* BodyInteractions.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.IconName"></a>

### *property* BodyInteractions.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Images"></a>

### *property* BodyInteractions.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.InternalObject"></a>

### *property* BodyInteractions.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBodyInteractionGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.LimitingTimestepVelocity"></a>

### *property* BodyInteractions.LimitingTimestepVelocity *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LimitingTimestepVelocity.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.ManualContactTreatment"></a>

### *property* BodyInteractions.ManualContactTreatment *: [Ansys.Mechanical.DataModel.Enums.ManualContactTreatmentType](../../../../Mechanical/DataModel/Enums/ManualContactTreatmentType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ManualContactTreatmentType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ManualContactTreatment.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Name"></a>

### *property* BodyInteractions.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.NodalShellThickness"></a>

### *property* BodyInteractions.NodalShellThickness *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NodalShellThickness.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.ObjectId"></a>

### *property* BodyInteractions.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.ObjectState"></a>

### *property* BodyInteractions.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.ObjectTags"></a>

### *property* BodyInteractions.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Parent"></a>

### *property* BodyInteractions.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.PinballFactor"></a>

### *property* BodyInteractions.PinballFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PinballFactor.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Properties"></a>

### *property* BodyInteractions.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.ShellThicknessFactor"></a>

### *property* BodyInteractions.ShellThicknessFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShellThicknessFactor.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.SlidingContact"></a>

### *property* BodyInteractions.SlidingContact *: [Ansys.Mechanical.DataModel.Enums.SlidingContactType](../../../../Mechanical/DataModel/Enums/SlidingContactType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SlidingContactType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SlidingContact.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.State"></a>

### *property* BodyInteractions.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.TimestepSafetyFactor"></a>

### *property* BodyInteractions.TimestepSafetyFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimestepSafetyFactor.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Tolerance"></a>

### *property* BodyInteractions.Tolerance *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Tolerance.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.VisibleProperties"></a>

### *property* BodyInteractions.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BodyInteractions.Activate"></a>

### BodyInteractions.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.AddBodyInteraction"></a>

### BodyInteractions.AddBodyInteraction() → [Ansys.ACT.Automation.Mechanical.Connections.BodyInteraction](BodyInteraction.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.BodyInteraction)

Creates a new child BodyInteraction.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.AddComment"></a>

### BodyInteractions.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.AddFigure"></a>

### BodyInteractions.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.AddImage"></a>

### BodyInteractions.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Copy"></a>

### BodyInteractions.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.CopyTo"></a>

### BodyInteractions.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.CreateObjRef"></a>

### BodyInteractions.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.CreateParameter"></a>

### BodyInteractions.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Cut"></a>

### BodyInteractions.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Delete"></a>

### BodyInteractions.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Duplicate"></a>

### BodyInteractions.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Equals"></a>

### BodyInteractions.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetAPIName"></a>

### BodyInteractions.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetAllProperties"></a>

### BodyInteractions.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetChildren"></a>

### BodyInteractions.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### BodyInteractions.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetDetailsView"></a>

### BodyInteractions.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetEnumName"></a>

### BodyInteractions.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetHashCode"></a>

### BodyInteractions.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetIconFile"></a>

### BodyInteractions.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetLifetimeService"></a>

### BodyInteractions.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetObjectData"></a>

### BodyInteractions.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetParameter"></a>

### BodyInteractions.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetPath"></a>

### BodyInteractions.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetPropertyName"></a>

### BodyInteractions.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetPropertyValue"></a>

### BodyInteractions.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetVisibleProperties"></a>

### BodyInteractions.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetVisiblePropertyNames"></a>

### BodyInteractions.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GroupAllSimilarChildren"></a>

### BodyInteractions.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GroupSimilarObjects"></a>

### BodyInteractions.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.InitializeLifetimeService"></a>

### BodyInteractions.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.IsPropertyEditable"></a>

### BodyInteractions.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BodyInteractions.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.IsPropertyVisible"></a>

### BodyInteractions.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BodyInteractions.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Paste"></a>

### BodyInteractions.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.PropertyByAPIName"></a>

### BodyInteractions.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.PropertyById"></a>

### BodyInteractions.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.PropertyByName"></a>

### BodyInteractions.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.RemoveFromGroup"></a>

### BodyInteractions.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.RemoveParameter"></a>

### BodyInteractions.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

