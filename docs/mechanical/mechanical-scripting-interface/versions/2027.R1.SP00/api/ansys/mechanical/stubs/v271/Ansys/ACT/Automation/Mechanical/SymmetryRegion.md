# `SymmetryRegion`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SymmetryRegion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.SymmetryRegion(internalObject: Any)

<a id="SymmetryRegion"></a>

### *class* SymmetryRegion(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a SymmetryRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#SymmetryRegion.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#SymmetryRegion.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#SymmetryRegion.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#SymmetryRegion.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#SymmetryRegion.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#SymmetryRegion.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#SymmetryRegion.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#SymmetryRegion.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#SymmetryRegion.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#SymmetryRegion.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#SymmetryRegion.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#SymmetryRegion.Equals)                                       | Equals method.                                                                              |
| [`FlipHighLow`](#SymmetryRegion.FlipHighLow)                             | Flips the High and Low Boundaries.                                                          |
| [`GetAPIName`](#SymmetryRegion.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#SymmetryRegion.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#SymmetryRegion.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#SymmetryRegion.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#SymmetryRegion.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#SymmetryRegion.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#SymmetryRegion.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#SymmetryRegion.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#SymmetryRegion.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#SymmetryRegion.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#SymmetryRegion.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#SymmetryRegion.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#SymmetryRegion.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#SymmetryRegion.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#SymmetryRegion.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#SymmetryRegion.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#SymmetryRegion.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#SymmetryRegion.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#SymmetryRegion.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#SymmetryRegion.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#SymmetryRegion.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#SymmetryRegion.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#SymmetryRegion.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#SymmetryRegion.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#SymmetryRegion.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#SymmetryRegion.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ApplyTo`](#SymmetryRegion.ApplyTo)                                   | Gets or sets the ApplyTo.                                     |
| [`AttachedRefs`](#SymmetryRegion.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Behavior`](#SymmetryRegion.Behavior)                                 | Gets or sets the Behavior.                                    |
| [`Children`](#SymmetryRegion.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#SymmetryRegion.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#SymmetryRegion.Comments)                                 | Gets the list of associated comments.                         |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)             | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#SymmetryRegion.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#SymmetryRegion.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#SymmetryRegion.GroupingFolder)                     | GroupingFolder property.                                      |
| [`HighBoundaryLocation`](#SymmetryRegion.HighBoundaryLocation)         | Gets or sets the HighBoundaryLocation.                        |
| [`IconName`](#SymmetryRegion.IconName)                                 | IconName property.                                            |
| [`Images`](#SymmetryRegion.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#SymmetryRegion.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#SymmetryRegion.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`LinearShift`](#SymmetryRegion.LinearShift)                           | Gets or sets the LinearShift.                                 |
| [`Location`](#SymmetryRegion.Location)                                 | Gets or sets the Location.                                    |
| [`LowBoundaryLocation`](#SymmetryRegion.LowBoundaryLocation)           | Gets or sets the LowBoundaryLocation.                         |
| [`Name`](#SymmetryRegion.Name)                                         | Name property.                                                |
| [`ObjectId`](#SymmetryRegion.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#SymmetryRegion.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#SymmetryRegion.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#SymmetryRegion.Parent)                                     | Parent property.                                              |
| [`PeriodicityDirection`](#SymmetryRegion.PeriodicityDirection)         | Gets or sets the PeriodicityDirection.                        |
| [`Properties`](#SymmetryRegion.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#SymmetryRegion.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`ScopeMode`](#SymmetryRegion.ScopeMode)                               | Gets the ScopeMode.                                           |
| [`SectorsNumber`](#SymmetryRegion.SectorsNumber)                       | Sectors Number.                                               |
| [`State`](#SymmetryRegion.State)                                       | State property.                                               |
| [`Suppressed`](#SymmetryRegion.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`SymmetryNormal`](#SymmetryRegion.SymmetryNormal)                     | Gets or sets the SymmetryNormal.                              |
| [`TransferableObjectId`](#SymmetryRegion.TransferableObjectId)         | TransferableObjectId property.                                |
| [`Type`](#SymmetryRegion.Type)                                         | Gets or sets the Type.                                        |
| [`VisibleProperties`](#SymmetryRegion.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SymmetryRegion.ApplyTo"></a>

### *property* SymmetryRegion.ApplyTo *: [Ansys.Mechanical.DataModel.Enums.PeriodicApplyTo](../../../Mechanical/DataModel/Enums/PeriodicApplyTo.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PeriodicApplyTo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ApplyTo.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.AttachedRefs"></a>

### *property* SymmetryRegion.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Behavior"></a>

### *property* SymmetryRegion.Behavior *: [Ansys.Mechanical.DataModel.Enums.SymmetryBehavior](../../../Mechanical/DataModel/Enums/SymmetryBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SymmetryBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Children"></a>

### *property* SymmetryRegion.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.ClsId"></a>

### *property* SymmetryRegion.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Comments"></a>

### *property* SymmetryRegion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.CoordinateSystem"></a>

### *property* SymmetryRegion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.DataModelObjectCategory"></a>

### *property* SymmetryRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Figures"></a>

### *property* SymmetryRegion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GroupingFolder"></a>

### *property* SymmetryRegion.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.HighBoundaryLocation"></a>

### *property* SymmetryRegion.HighBoundaryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HighBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.IconName"></a>

### *property* SymmetryRegion.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Images"></a>

### *property* SymmetryRegion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.ImportableObjectSourceId"></a>

### *property* SymmetryRegion.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.InternalObject"></a>

### *property* SymmetryRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGeneralAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.LinearShift"></a>

### *property* SymmetryRegion.LinearShift *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LinearShift.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Location"></a>

### *property* SymmetryRegion.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.LowBoundaryLocation"></a>

### *property* SymmetryRegion.LowBoundaryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LowBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Name"></a>

### *property* SymmetryRegion.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.ObjectId"></a>

### *property* SymmetryRegion.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.ObjectState"></a>

### *property* SymmetryRegion.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.ObjectTags"></a>

### *property* SymmetryRegion.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Parent"></a>

### *property* SymmetryRegion.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.PeriodicityDirection"></a>

### *property* SymmetryRegion.PeriodicityDirection *: [Ansys.Mechanical.DataModel.Enums.PeriodicityDirectionType](../../../Mechanical/DataModel/Enums/PeriodicityDirectionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PeriodicityDirectionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PeriodicityDirection.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Properties"></a>

### *property* SymmetryRegion.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.ReadOnly"></a>

### *property* SymmetryRegion.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.ScopeMode"></a>

### *property* SymmetryRegion.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.SectorsNumber"></a>

### *property* SymmetryRegion.SectorsNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Sectors Number.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.State"></a>

### *property* SymmetryRegion.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Suppressed"></a>

### *property* SymmetryRegion.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.SymmetryNormal"></a>

### *property* SymmetryRegion.SymmetryNormal *: [Ansys.Mechanical.DataModel.Enums.SymmetryNormalType](../../../Mechanical/DataModel/Enums/SymmetryNormalType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SymmetryNormalType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SymmetryNormal.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.TransferableObjectId"></a>

### *property* SymmetryRegion.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Type"></a>

### *property* SymmetryRegion.Type *: [Ansys.Mechanical.DataModel.Enums.SymmetryRegionType](../../../Mechanical/DataModel/Enums/SymmetryRegionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SymmetryRegionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.VisibleProperties"></a>

### *property* SymmetryRegion.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SymmetryRegion.Activate"></a>

### SymmetryRegion.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.AddComment"></a>

### SymmetryRegion.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.AddFigure"></a>

### SymmetryRegion.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.AddImage"></a>

### SymmetryRegion.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Copy"></a>

### SymmetryRegion.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.CopyTo"></a>

### SymmetryRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.CreateObjRef"></a>

### SymmetryRegion.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.CreateParameter"></a>

### SymmetryRegion.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Cut"></a>

### SymmetryRegion.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Delete"></a>

### SymmetryRegion.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Duplicate"></a>

### SymmetryRegion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Equals"></a>

### SymmetryRegion.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.FlipHighLow"></a>

### SymmetryRegion.FlipHighLow() → [None](https://docs.python.org/3/builtins/constants.html#None)

Flips the High and Low Boundaries.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetAPIName"></a>

### SymmetryRegion.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetAllProperties"></a>

### SymmetryRegion.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetChildren"></a>

### SymmetryRegion.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### SymmetryRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetDetailsView"></a>

### SymmetryRegion.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetEnumName"></a>

### SymmetryRegion.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetHashCode"></a>

### SymmetryRegion.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetIconFile"></a>

### SymmetryRegion.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetLifetimeService"></a>

### SymmetryRegion.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetObjectData"></a>

### SymmetryRegion.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetParameter"></a>

### SymmetryRegion.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetPath"></a>

### SymmetryRegion.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetPropertyName"></a>

### SymmetryRegion.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetPropertyValue"></a>

### SymmetryRegion.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetVisibleProperties"></a>

### SymmetryRegion.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetVisiblePropertyNames"></a>

### SymmetryRegion.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GroupAllSimilarChildren"></a>

### SymmetryRegion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GroupSimilarObjects"></a>

### SymmetryRegion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.InitializeLifetimeService"></a>

### SymmetryRegion.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.IsPropertyEditable"></a>

### SymmetryRegion.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SymmetryRegion.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.IsPropertyVisible"></a>

### SymmetryRegion.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SymmetryRegion.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Paste"></a>

### SymmetryRegion.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.PropertyByAPIName"></a>

### SymmetryRegion.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.PropertyById"></a>

### SymmetryRegion.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.PropertyByName"></a>

### SymmetryRegion.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.RemoveFromGroup"></a>

### SymmetryRegion.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.RemoveParameter"></a>

### SymmetryRegion.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

