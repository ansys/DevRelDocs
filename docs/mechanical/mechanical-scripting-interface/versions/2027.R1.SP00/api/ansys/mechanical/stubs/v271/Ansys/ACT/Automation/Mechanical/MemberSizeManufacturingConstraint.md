# `MemberSizeManufacturingConstraint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MemberSizeManufacturingConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MemberSizeManufacturingConstraint(internalObject: Any)

<a id="MemberSizeManufacturingConstraint"></a>

### *class* MemberSizeManufacturingConstraint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MemberSizeManufacturingConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MemberSizeManufacturingConstraint.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#MemberSizeManufacturingConstraint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MemberSizeManufacturingConstraint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MemberSizeManufacturingConstraint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MemberSizeManufacturingConstraint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MemberSizeManufacturingConstraint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MemberSizeManufacturingConstraint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MemberSizeManufacturingConstraint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MemberSizeManufacturingConstraint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#MemberSizeManufacturingConstraint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MemberSizeManufacturingConstraint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MemberSizeManufacturingConstraint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MemberSizeManufacturingConstraint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MemberSizeManufacturingConstraint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MemberSizeManufacturingConstraint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MemberSizeManufacturingConstraint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MemberSizeManufacturingConstraint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MemberSizeManufacturingConstraint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MemberSizeManufacturingConstraint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MemberSizeManufacturingConstraint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MemberSizeManufacturingConstraint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MemberSizeManufacturingConstraint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#MemberSizeManufacturingConstraint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MemberSizeManufacturingConstraint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MemberSizeManufacturingConstraint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MemberSizeManufacturingConstraint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MemberSizeManufacturingConstraint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MemberSizeManufacturingConstraint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MemberSizeManufacturingConstraint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MemberSizeManufacturingConstraint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#MemberSizeManufacturingConstraint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MemberSizeManufacturingConstraint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MemberSizeManufacturingConstraint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MemberSizeManufacturingConstraint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MemberSizeManufacturingConstraint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#MemberSizeManufacturingConstraint.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#MemberSizeManufacturingConstraint.AttachedRefs)                                               | AttachedRefs property.                                                                                                                                                             |
| [`Children`](#MemberSizeManufacturingConstraint.Children)                                                       | Gets the list of children.                                                                                                                                                         |
| [`ClsId`](#MemberSizeManufacturingConstraint.ClsId)                                                             | ClsId property.                                                                                                                                                                    |
| [`CoordinateSystemForThicknessMeasure`](#MemberSizeManufacturingConstraint.CoordinateSystemForThicknessMeasure) | Gets or sets the Coordinate system used as the basis for measurements (only used when ThicknessMeasureType is InPlane).                                                            |
| [`DataModelObjectCategory`](#MemberSizeManufacturingConstraint.DataModelObjectCategory)                         | Gets the current DataModelObject's category.                                                                                                                                       |
| [`GapSize`](#MemberSizeManufacturingConstraint.GapSize)                                                         | Gets or sets the GapSize.                                                                                                                                                          |
| [`GapSizeControlledType`](#MemberSizeManufacturingConstraint.GapSizeControlledType)                             | Gets or sets the GapSizeControlledType.                                                                                                                                            |
| [`GroupingFolder`](#MemberSizeManufacturingConstraint.GroupingFolder)                                           | GroupingFolder property.                                                                                                                                                           |
| [`IconName`](#MemberSizeManufacturingConstraint.IconName)                                                       | IconName property.                                                                                                                                                                 |
| [`InternalObject`](#MemberSizeManufacturingConstraint.InternalObject)                                           | Gets the internal object. For advanced usage only.                                                                                                                                 |
| [`Location`](#MemberSizeManufacturingConstraint.Location)                                                       | Gets or sets the Location.                                                                                                                                                         |
| [`MaxSize`](#MemberSizeManufacturingConstraint.MaxSize)                                                         | Gets or sets the MaxSize.                                                                                                                                                          |
| [`Maximum`](#MemberSizeManufacturingConstraint.Maximum)                                                         | Gets or sets the Maximum.                                                                                                                                                          |
| [`MinSize`](#MemberSizeManufacturingConstraint.MinSize)                                                         | Gets or sets the MinSize.                                                                                                                                                          |
| [`Minimum`](#MemberSizeManufacturingConstraint.Minimum)                                                         | Gets or sets the Minimum.                                                                                                                                                          |
| [`Name`](#MemberSizeManufacturingConstraint.Name)                                                               | Name property.                                                                                                                                                                     |
| [`NormalAxisForInPlaneMeasure`](#MemberSizeManufacturingConstraint.NormalAxisForInPlaneMeasure)                 | Gets or sets the normal axis to plane considered for InPlane measurement type. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”). |
| [`ObjectId`](#MemberSizeManufacturingConstraint.ObjectId)                                                       | ObjectId property.                                                                                                                                                                 |
| [`ObjectState`](#MemberSizeManufacturingConstraint.ObjectState)                                                 | ObjectState property.                                                                                                                                                              |
| [`ObjectTags`](#MemberSizeManufacturingConstraint.ObjectTags)                                                   | ObjectTags property.                                                                                                                                                               |
| [`Parent`](#MemberSizeManufacturingConstraint.Parent)                                                           | Parent property.                                                                                                                                                                   |
| [`Properties`](#MemberSizeManufacturingConstraint.Properties)                                                   | Gets the list of properties for this object.                                                                                                                                       |
| [`ScopingMethod`](#MemberSizeManufacturingConstraint.ScopingMethod)                                             | Gets or sets the ScopingMethod.                                                                                                                                                    |
| [`Selection`](#MemberSizeManufacturingConstraint.Selection)                                                     | Gets or sets the Selection.                                                                                                                                                        |
| [`State`](#MemberSizeManufacturingConstraint.State)                                                             | State property.                                                                                                                                                                    |
| [`Suppressed`](#MemberSizeManufacturingConstraint.Suppressed)                                                   | Gets or sets the Suppressed.                                                                                                                                                       |
| [`ThicknessMeasureType`](#MemberSizeManufacturingConstraint.ThicknessMeasureType)                               | Gets or sets the thickness measurement type (applicable for the MaxSize and GapSize properties). The default type is Isotropic.                                                    |
| [`VisibleProperties`](#MemberSizeManufacturingConstraint.VisibleProperties)                                     | Gets the list of properties that are visible for this object.                                                                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="MemberSizeManufacturingConstraint.AttachedRefs"></a>

### *property* MemberSizeManufacturingConstraint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Children"></a>

### *property* MemberSizeManufacturingConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.ClsId"></a>

### *property* MemberSizeManufacturingConstraint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.CoordinateSystemForThicknessMeasure"></a>

### *property* MemberSizeManufacturingConstraint.CoordinateSystemForThicknessMeasure *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate system used as the basis for measurements (only used when ThicknessMeasureType is InPlane).

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.DataModelObjectCategory"></a>

### *property* MemberSizeManufacturingConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GapSize"></a>

### *property* MemberSizeManufacturingConstraint.GapSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GapSize.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GapSizeControlledType"></a>

### *property* MemberSizeManufacturingConstraint.GapSizeControlledType *: [Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType](../../../Mechanical/DataModel/Enums/ManuMemberSizeControlledType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GapSizeControlledType.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GroupingFolder"></a>

### *property* MemberSizeManufacturingConstraint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.IconName"></a>

### *property* MemberSizeManufacturingConstraint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.InternalObject"></a>

### *property* MemberSizeManufacturingConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Location"></a>

### *property* MemberSizeManufacturingConstraint.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.MaxSize"></a>

### *property* MemberSizeManufacturingConstraint.MaxSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaxSize.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Maximum"></a>

### *property* MemberSizeManufacturingConstraint.Maximum *: [Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType](../../../Mechanical/DataModel/Enums/ManuMemberSizeControlledType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.MinSize"></a>

### *property* MemberSizeManufacturingConstraint.MinSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinSize.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Minimum"></a>

### *property* MemberSizeManufacturingConstraint.Minimum *: [Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType](../../../Mechanical/DataModel/Enums/ManuMemberSizeControlledType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ManuMemberSizeControlledType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Name"></a>

### *property* MemberSizeManufacturingConstraint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.NormalAxisForInPlaneMeasure"></a>

### *property* MemberSizeManufacturingConstraint.NormalAxisForInPlaneMeasure *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the normal axis to plane considered for InPlane measurement type. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”).
: InvalidArgumentException: Any unsupported enum value.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.ObjectId"></a>

### *property* MemberSizeManufacturingConstraint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.ObjectState"></a>

### *property* MemberSizeManufacturingConstraint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.ObjectTags"></a>

### *property* MemberSizeManufacturingConstraint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Parent"></a>

### *property* MemberSizeManufacturingConstraint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Properties"></a>

### *property* MemberSizeManufacturingConstraint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.ScopingMethod"></a>

### *property* MemberSizeManufacturingConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Selection"></a>

### *property* MemberSizeManufacturingConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.State"></a>

### *property* MemberSizeManufacturingConstraint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Suppressed"></a>

### *property* MemberSizeManufacturingConstraint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.ThicknessMeasureType"></a>

### *property* MemberSizeManufacturingConstraint.ThicknessMeasureType *: [Ansys.Mechanical.DataModel.Enums.MemberSizeMeasurementType](../../../Mechanical/DataModel/Enums/MemberSizeMeasurementType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MemberSizeMeasurementType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the thickness measurement type (applicable for the MaxSize and GapSize properties). The default type is Isotropic.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.VisibleProperties"></a>

### *property* MemberSizeManufacturingConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MemberSizeManufacturingConstraint.Activate"></a>

### MemberSizeManufacturingConstraint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Copy"></a>

### MemberSizeManufacturingConstraint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.CopyTo"></a>

### MemberSizeManufacturingConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.CreateObjRef"></a>

### MemberSizeManufacturingConstraint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.CreateParameter"></a>

### MemberSizeManufacturingConstraint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Cut"></a>

### MemberSizeManufacturingConstraint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Delete"></a>

### MemberSizeManufacturingConstraint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Duplicate"></a>

### MemberSizeManufacturingConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Equals"></a>

### MemberSizeManufacturingConstraint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetAPIName"></a>

### MemberSizeManufacturingConstraint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetAllProperties"></a>

### MemberSizeManufacturingConstraint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetChildren"></a>

### MemberSizeManufacturingConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MemberSizeManufacturingConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetDetailsView"></a>

### MemberSizeManufacturingConstraint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetEnumName"></a>

### MemberSizeManufacturingConstraint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetHashCode"></a>

### MemberSizeManufacturingConstraint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetIconFile"></a>

### MemberSizeManufacturingConstraint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetLifetimeService"></a>

### MemberSizeManufacturingConstraint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetObjectData"></a>

### MemberSizeManufacturingConstraint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetParameter"></a>

### MemberSizeManufacturingConstraint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetPath"></a>

### MemberSizeManufacturingConstraint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetPropertyName"></a>

### MemberSizeManufacturingConstraint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetPropertyValue"></a>

### MemberSizeManufacturingConstraint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetVisibleProperties"></a>

### MemberSizeManufacturingConstraint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GetVisiblePropertyNames"></a>

### MemberSizeManufacturingConstraint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GroupAllSimilarChildren"></a>

### MemberSizeManufacturingConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.GroupSimilarObjects"></a>

### MemberSizeManufacturingConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.InitializeLifetimeService"></a>

### MemberSizeManufacturingConstraint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.IsPropertyEditable"></a>

### MemberSizeManufacturingConstraint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MemberSizeManufacturingConstraint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.IsPropertyVisible"></a>

### MemberSizeManufacturingConstraint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MemberSizeManufacturingConstraint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.Paste"></a>

### MemberSizeManufacturingConstraint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.PropertyByAPIName"></a>

### MemberSizeManufacturingConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.PropertyById"></a>

### MemberSizeManufacturingConstraint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.PropertyByName"></a>

### MemberSizeManufacturingConstraint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.RemoveFromGroup"></a>

### MemberSizeManufacturingConstraint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.RemoveParameter"></a>

### MemberSizeManufacturingConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MemberSizeManufacturingConstraint.RenameBasedOnDefinition"></a>

### MemberSizeManufacturingConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

