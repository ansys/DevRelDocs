# `ThermalPointMass`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ThermalPointMass"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ThermalPointMass(internalObject: Any)

<a id="ThermalPointMass"></a>

### *class* ThermalPointMass(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ThermalPointMass.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ThermalPointMass.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#ThermalPointMass.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#ThermalPointMass.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ThermalPointMass.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ThermalPointMass.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ThermalPointMass.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ThermalPointMass.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ThermalPointMass.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ThermalPointMass.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ThermalPointMass.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ThermalPointMass.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ThermalPointMass.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ThermalPointMass.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ThermalPointMass.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ThermalPointMass.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ThermalPointMass.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ThermalPointMass.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ThermalPointMass.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ThermalPointMass.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ThermalPointMass.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ThermalPointMass.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ThermalPointMass.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ThermalPointMass.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ThermalPointMass.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ThermalPointMass.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ThermalPointMass.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ThermalPointMass.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ThermalPointMass.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ThermalPointMass.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ThermalPointMass.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ThermalPointMass.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ThermalPointMass.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ThermalPointMass.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ThermalPointMass.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToRemotePoint`](#ThermalPointMass.PromoteToRemotePoint)           | Run the PromoteToRemotePoint action.                                                        |
| [`PropertyByAPIName`](#ThermalPointMass.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ThermalPointMass.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ThermalPointMass.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ThermalPointMass.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ThermalPointMass.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AppliedBy`](#ThermalPointMass.AppliedBy)                               | Gets or sets the AppliedBy.                                   |
| [`AttachedRefs`](#ThermalPointMass.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Behavior`](#ThermalPointMass.Behavior)                                 | Gets or sets the Behavior.                                    |
| [`Children`](#ThermalPointMass.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#ThermalPointMass.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#ThermalPointMass.Comments)                                 | Gets the list of associated comments.                         |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#ThermalPointMass.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#ThermalPointMass.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ThermalPointMass.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#ThermalPointMass.IconName)                                 | IconName property.                                            |
| [`Images`](#ThermalPointMass.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#ThermalPointMass.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#ThermalPointMass.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`IsDistributedMass`](#ThermalPointMass.IsDistributedMass)               | Gets the IsDistributedMass.                                   |
| [`Location`](#ThermalPointMass.Location)                                 | Gets or sets the Geometry.                                    |
| [`Name`](#ThermalPointMass.Name)                                         | Name property.                                                |
| [`ObjectId`](#ThermalPointMass.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#ThermalPointMass.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#ThermalPointMass.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#ThermalPointMass.Parent)                                     | Parent property.                                              |
| [`PinballRegion`](#ThermalPointMass.PinballRegion)                       | Gets or sets the PinballRegion.                               |
| [`Properties`](#ThermalPointMass.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ThermalPointMass.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`RemotePoint`](RemotePoint.md#RemotePoint)                              | Gets the remote point associated to the point mass.           |
| [`State`](#ThermalPointMass.State)                                       | State property.                                               |
| [`Suppressed`](#ThermalPointMass.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`ThermalCapacitance`](#ThermalPointMass.ThermalCapacitance)             | Gets or sets the ThermalCapacitance.                          |
| [`TransferableObjectId`](#ThermalPointMass.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#ThermalPointMass.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`XCoordinate`](#ThermalPointMass.XCoordinate)                           | Gets or sets the XCoordinate.                                 |
| [`YCoordinate`](#ThermalPointMass.YCoordinate)                           | Gets or sets the YCoordinate.                                 |
| [`ZCoordinate`](#ThermalPointMass.ZCoordinate)                           | Gets or sets the ZCoordinate.                                 |

<a id="property-detail"></a>

## Property detail

<a id="ThermalPointMass.AppliedBy"></a>

### *property* ThermalPointMass.AppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.AttachedRefs"></a>

### *property* ThermalPointMass.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Behavior"></a>

### *property* ThermalPointMass.Behavior *: [Ansys.Mechanical.DataModel.Enums.ThermalPointMassBehavior](../../../Mechanical/DataModel/Enums/ThermalPointMassBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ThermalPointMassBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Children"></a>

### *property* ThermalPointMass.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.ClsId"></a>

### *property* ThermalPointMass.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Comments"></a>

### *property* ThermalPointMass.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.CoordinateSystem"></a>

### *property* ThermalPointMass.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.DataModelObjectCategory"></a>

### *property* ThermalPointMass.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Figures"></a>

### *property* ThermalPointMass.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GroupingFolder"></a>

### *property* ThermalPointMass.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.IconName"></a>

### *property* ThermalPointMass.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Images"></a>

### *property* ThermalPointMass.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.ImportableObjectSourceId"></a>

### *property* ThermalPointMass.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.InternalObject"></a>

### *property* ThermalPointMass.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPointMassAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.IsDistributedMass"></a>

### *property* ThermalPointMass.IsDistributedMass *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsDistributedMass.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Location"></a>

### *property* ThermalPointMass.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Name"></a>

### *property* ThermalPointMass.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.ObjectId"></a>

### *property* ThermalPointMass.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.ObjectState"></a>

### *property* ThermalPointMass.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.ObjectTags"></a>

### *property* ThermalPointMass.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Parent"></a>

### *property* ThermalPointMass.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.PinballRegion"></a>

### *property* ThermalPointMass.PinballRegion *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Properties"></a>

### *property* ThermalPointMass.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.ReadOnly"></a>

### *property* ThermalPointMass.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.RemotePoint"></a>

### *property* ThermalPointMass.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.State"></a>

### *property* ThermalPointMass.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Suppressed"></a>

### *property* ThermalPointMass.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.ThermalCapacitance"></a>

### *property* ThermalPointMass.ThermalCapacitance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThermalCapacitance.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.TransferableObjectId"></a>

### *property* ThermalPointMass.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.VisibleProperties"></a>

### *property* ThermalPointMass.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.XCoordinate"></a>

### *property* ThermalPointMass.XCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.YCoordinate"></a>

### *property* ThermalPointMass.YCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.ZCoordinate"></a>

### *property* ThermalPointMass.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ThermalPointMass.Activate"></a>

### ThermalPointMass.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.AddCommandSnippet"></a>

### ThermalPointMass.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.AddComment"></a>

### ThermalPointMass.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.AddFigure"></a>

### ThermalPointMass.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.AddImage"></a>

### ThermalPointMass.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Copy"></a>

### ThermalPointMass.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.CopyTo"></a>

### ThermalPointMass.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.CreateObjRef"></a>

### ThermalPointMass.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.CreateParameter"></a>

### ThermalPointMass.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Cut"></a>

### ThermalPointMass.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Delete"></a>

### ThermalPointMass.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Duplicate"></a>

### ThermalPointMass.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Equals"></a>

### ThermalPointMass.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetAPIName"></a>

### ThermalPointMass.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetAllProperties"></a>

### ThermalPointMass.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetChildren"></a>

### ThermalPointMass.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ThermalPointMass.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetDetailsView"></a>

### ThermalPointMass.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetEnumName"></a>

### ThermalPointMass.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetHashCode"></a>

### ThermalPointMass.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetIconFile"></a>

### ThermalPointMass.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetLifetimeService"></a>

### ThermalPointMass.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetObjectData"></a>

### ThermalPointMass.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetParameter"></a>

### ThermalPointMass.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetPath"></a>

### ThermalPointMass.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetPropertyName"></a>

### ThermalPointMass.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetPropertyValue"></a>

### ThermalPointMass.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetVisibleProperties"></a>

### ThermalPointMass.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetVisiblePropertyNames"></a>

### ThermalPointMass.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GroupAllSimilarChildren"></a>

### ThermalPointMass.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GroupSimilarObjects"></a>

### ThermalPointMass.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.InitializeLifetimeService"></a>

### ThermalPointMass.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.IsPropertyEditable"></a>

### ThermalPointMass.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ThermalPointMass.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.IsPropertyVisible"></a>

### ThermalPointMass.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ThermalPointMass.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Paste"></a>

### ThermalPointMass.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.PromoteToRemotePoint"></a>

### ThermalPointMass.PromoteToRemotePoint() → Iterable[[Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint)]

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.PropertyByAPIName"></a>

### ThermalPointMass.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.PropertyById"></a>

### ThermalPointMass.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.PropertyByName"></a>

### ThermalPointMass.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.RemoveFromGroup"></a>

### ThermalPointMass.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.RemoveParameter"></a>

### ThermalPointMass.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

