# `FileBasedImportedLoads`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.FileBasedImportedLoads"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FileBasedImportedLoads(internalObject: Any)

<a id="FileBasedImportedLoads"></a>

### *class* FileBasedImportedLoads(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FileBasedImportedLoads

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FileBasedImportedLoads.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#FileBasedImportedLoads.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FileBasedImportedLoads.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FileBasedImportedLoads.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FileBasedImportedLoads.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#FileBasedImportedLoads.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#FileBasedImportedLoads.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#FileBasedImportedLoads.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#FileBasedImportedLoads.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#FileBasedImportedLoads.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetDetailsView`](#FileBasedImportedLoads.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FileBasedImportedLoads.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FileBasedImportedLoads.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FileBasedImportedLoads.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FileBasedImportedLoads.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#FileBasedImportedLoads.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FileBasedImportedLoads.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FileBasedImportedLoads.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FileBasedImportedLoads.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FileBasedImportedLoads.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#FileBasedImportedLoads.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FileBasedImportedLoads.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FileBasedImportedLoads.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FileBasedImportedLoads.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FileBasedImportedLoads.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FileBasedImportedLoads.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FileBasedImportedLoads.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FileBasedImportedLoads.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#FileBasedImportedLoads.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FileBasedImportedLoads.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FileBasedImportedLoads.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FileBasedImportedLoads.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FileBasedImportedLoads.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#FileBasedImportedLoads.AttachedRefs)                       | AttachedRefs property.                                        |
| [`BCType`](#FileBasedImportedLoads.BCType)                                   | Gets or sets the BCType                                       |
| [`ClsId`](#FileBasedImportedLoads.ClsId)                                     | ClsId property.                                               |
| [`DataModelObjectCategory`](#FileBasedImportedLoads.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#FileBasedImportedLoads.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#FileBasedImportedLoads.IconName)                               | IconName property.                                            |
| [`InternalObject`](#FileBasedImportedLoads.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Magnitude`](#FileBasedImportedLoads.Magnitude)                             | Gets the Magnitude.                                           |
| [`MagnitudeImag`](#FileBasedImportedLoads.MagnitudeImag)                     | Gets the MagnitudeImag.                                       |
| [`Name`](#FileBasedImportedLoads.Name)                                       | Name property.                                                |
| [`ObjectId`](#FileBasedImportedLoads.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#FileBasedImportedLoads.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#FileBasedImportedLoads.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#FileBasedImportedLoads.Parent)                                   | Parent property.                                              |
| [`Properties`](#FileBasedImportedLoads.Properties)                           | Gets the list of properties for this object.                  |
| [`RemotePoint`](RemotePoint.md#RemotePoint)                                  | Get and set the remote point.                                 |
| [`RpmSelection`](#FileBasedImportedLoads.RpmSelection)                       | Gets or sets the RPMSelection.                                |
| [`State`](#FileBasedImportedLoads.State)                                     | State property.                                               |
| [`VisibleProperties`](#FileBasedImportedLoads.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`XComponent`](#FileBasedImportedLoads.XComponent)                           | Gets the XComponent.                                          |
| [`XComponentForce`](#FileBasedImportedLoads.XComponentForce)                 | XComponentForce property.                                     |
| [`XComponentImag`](#FileBasedImportedLoads.XComponentImag)                   | Gets the XComponentImag.                                      |
| [`XComponentImagForce`](#FileBasedImportedLoads.XComponentImagForce)         | XComponentImagForce property.                                 |
| [`XComponentImagMoment`](#FileBasedImportedLoads.XComponentImagMoment)       | XComponentImagMoment property.                                |
| [`XComponentMoment`](#FileBasedImportedLoads.XComponentMoment)               | XComponentMoment property.                                    |
| [`YComponent`](#FileBasedImportedLoads.YComponent)                           | Gets the YComponent.                                          |
| [`YComponentForce`](#FileBasedImportedLoads.YComponentForce)                 | YComponentForce property.                                     |
| [`YComponentImag`](#FileBasedImportedLoads.YComponentImag)                   | Gets the YComponentImag.                                      |
| [`YComponentImagForce`](#FileBasedImportedLoads.YComponentImagForce)         | YComponentImagForce property.                                 |
| [`YComponentImagMoment`](#FileBasedImportedLoads.YComponentImagMoment)       | YComponentImagMoment property.                                |
| [`YComponentMoment`](#FileBasedImportedLoads.YComponentMoment)               | YComponentMoment property.                                    |
| [`ZComponent`](#FileBasedImportedLoads.ZComponent)                           | Gets the ZComponent.                                          |
| [`ZComponentForce`](#FileBasedImportedLoads.ZComponentForce)                 | ZComponentForce property.                                     |
| [`ZComponentImag`](#FileBasedImportedLoads.ZComponentImag)                   | Gets the ZComponentImag.                                      |
| [`ZComponentImagForce`](#FileBasedImportedLoads.ZComponentImagForce)         | ZComponentImagForce property.                                 |
| [`ZComponentImagMoment`](#FileBasedImportedLoads.ZComponentImagMoment)       | ZComponentImagMoment property.                                |
| [`ZComponentMoment`](#FileBasedImportedLoads.ZComponentMoment)               | ZComponentMoment property.                                    |

<a id="property-detail"></a>

## Property detail

<a id="FileBasedImportedLoads.AttachedRefs"></a>

### *property* FileBasedImportedLoads.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.BCType"></a>

### *property* FileBasedImportedLoads.BCType *: [Ansys.Mechanical.DataModel.Enums.ImportedRemoteLoadType](../../../Mechanical/DataModel/Enums/ImportedRemoteLoadType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ImportedRemoteLoadType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BCType

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.ClsId"></a>

### *property* FileBasedImportedLoads.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.DataModelObjectCategory"></a>

### *property* FileBasedImportedLoads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.GroupingFolder"></a>

### *property* FileBasedImportedLoads.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.IconName"></a>

### *property* FileBasedImportedLoads.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.InternalObject"></a>

### *property* FileBasedImportedLoads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFileBasedImportedLoadsAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.Magnitude"></a>

### *property* FileBasedImportedLoads.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.MagnitudeImag"></a>

### *property* FileBasedImportedLoads.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.Name"></a>

### *property* FileBasedImportedLoads.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.ObjectId"></a>

### *property* FileBasedImportedLoads.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.ObjectState"></a>

### *property* FileBasedImportedLoads.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.ObjectTags"></a>

### *property* FileBasedImportedLoads.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.Parent"></a>

### *property* FileBasedImportedLoads.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.Properties"></a>

### *property* FileBasedImportedLoads.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.RemotePoint"></a>

### *property* FileBasedImportedLoads.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get and set the remote point.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.RpmSelection"></a>

### *property* FileBasedImportedLoads.RpmSelection *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPMSelection.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.State"></a>

### *property* FileBasedImportedLoads.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.VisibleProperties"></a>

### *property* FileBasedImportedLoads.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.XComponent"></a>

### *property* FileBasedImportedLoads.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.XComponentForce"></a>

### *property* FileBasedImportedLoads.XComponentForce *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

XComponentForce property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.XComponentImag"></a>

### *property* FileBasedImportedLoads.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.XComponentImagForce"></a>

### *property* FileBasedImportedLoads.XComponentImagForce *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

XComponentImagForce property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.XComponentImagMoment"></a>

### *property* FileBasedImportedLoads.XComponentImagMoment *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

XComponentImagMoment property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.XComponentMoment"></a>

### *property* FileBasedImportedLoads.XComponentMoment *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

XComponentMoment property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.YComponent"></a>

### *property* FileBasedImportedLoads.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.YComponentForce"></a>

### *property* FileBasedImportedLoads.YComponentForce *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

YComponentForce property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.YComponentImag"></a>

### *property* FileBasedImportedLoads.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.YComponentImagForce"></a>

### *property* FileBasedImportedLoads.YComponentImagForce *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

YComponentImagForce property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.YComponentImagMoment"></a>

### *property* FileBasedImportedLoads.YComponentImagMoment *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

YComponentImagMoment property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.YComponentMoment"></a>

### *property* FileBasedImportedLoads.YComponentMoment *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

YComponentMoment property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.ZComponent"></a>

### *property* FileBasedImportedLoads.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.ZComponentForce"></a>

### *property* FileBasedImportedLoads.ZComponentForce *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ZComponentForce property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.ZComponentImag"></a>

### *property* FileBasedImportedLoads.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.ZComponentImagForce"></a>

### *property* FileBasedImportedLoads.ZComponentImagForce *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ZComponentImagForce property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.ZComponentImagMoment"></a>

### *property* FileBasedImportedLoads.ZComponentImagMoment *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ZComponentImagMoment property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.ZComponentMoment"></a>

### *property* FileBasedImportedLoads.ZComponentMoment *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ZComponentMoment property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FileBasedImportedLoads.Activate"></a>

### FileBasedImportedLoads.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.Copy"></a>

### FileBasedImportedLoads.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.CopyTo"></a>

### FileBasedImportedLoads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.CreateObjRef"></a>

### FileBasedImportedLoads.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.CreateParameter"></a>

### FileBasedImportedLoads.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.Cut"></a>

### FileBasedImportedLoads.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.Duplicate"></a>

### FileBasedImportedLoads.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.Equals"></a>

### FileBasedImportedLoads.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.GetAPIName"></a>

### FileBasedImportedLoads.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.GetAllProperties"></a>

### FileBasedImportedLoads.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.GetDetailsView"></a>

### FileBasedImportedLoads.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.GetEnumName"></a>

### FileBasedImportedLoads.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.GetHashCode"></a>

### FileBasedImportedLoads.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.GetIconFile"></a>

### FileBasedImportedLoads.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.GetLifetimeService"></a>

### FileBasedImportedLoads.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.GetObjectData"></a>

### FileBasedImportedLoads.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.GetParameter"></a>

### FileBasedImportedLoads.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.GetPath"></a>

### FileBasedImportedLoads.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.GetPropertyName"></a>

### FileBasedImportedLoads.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.GetPropertyValue"></a>

### FileBasedImportedLoads.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.GetVisibleProperties"></a>

### FileBasedImportedLoads.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.GetVisiblePropertyNames"></a>

### FileBasedImportedLoads.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.GroupAllSimilarChildren"></a>

### FileBasedImportedLoads.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.GroupSimilarObjects"></a>

### FileBasedImportedLoads.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.InitializeLifetimeService"></a>

### FileBasedImportedLoads.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.IsPropertyEditable"></a>

### FileBasedImportedLoads.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FileBasedImportedLoads.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.IsPropertyVisible"></a>

### FileBasedImportedLoads.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FileBasedImportedLoads.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.Paste"></a>

### FileBasedImportedLoads.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.PropertyByAPIName"></a>

### FileBasedImportedLoads.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.PropertyById"></a>

### FileBasedImportedLoads.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.PropertyByName"></a>

### FileBasedImportedLoads.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.RemoveFromGroup"></a>

### FileBasedImportedLoads.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FileBasedImportedLoads.RemoveParameter"></a>

### FileBasedImportedLoads.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

