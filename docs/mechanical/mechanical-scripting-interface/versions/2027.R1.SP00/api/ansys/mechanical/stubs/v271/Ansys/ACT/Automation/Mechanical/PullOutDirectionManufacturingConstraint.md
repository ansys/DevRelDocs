# `PullOutDirectionManufacturingConstraint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PullOutDirectionManufacturingConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PullOutDirectionManufacturingConstraint(internalObject: Any)

<a id="PullOutDirectionManufacturingConstraint"></a>

### *class* PullOutDirectionManufacturingConstraint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PullOutDirectionManufacturingConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PullOutDirectionManufacturingConstraint.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#PullOutDirectionManufacturingConstraint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PullOutDirectionManufacturingConstraint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PullOutDirectionManufacturingConstraint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PullOutDirectionManufacturingConstraint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PullOutDirectionManufacturingConstraint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PullOutDirectionManufacturingConstraint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#PullOutDirectionManufacturingConstraint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PullOutDirectionManufacturingConstraint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#PullOutDirectionManufacturingConstraint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PullOutDirectionManufacturingConstraint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#PullOutDirectionManufacturingConstraint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PullOutDirectionManufacturingConstraint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PullOutDirectionManufacturingConstraint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PullOutDirectionManufacturingConstraint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PullOutDirectionManufacturingConstraint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PullOutDirectionManufacturingConstraint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PullOutDirectionManufacturingConstraint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PullOutDirectionManufacturingConstraint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PullOutDirectionManufacturingConstraint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PullOutDirectionManufacturingConstraint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PullOutDirectionManufacturingConstraint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PullOutDirectionManufacturingConstraint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PullOutDirectionManufacturingConstraint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PullOutDirectionManufacturingConstraint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PullOutDirectionManufacturingConstraint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PullOutDirectionManufacturingConstraint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PullOutDirectionManufacturingConstraint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PullOutDirectionManufacturingConstraint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PullOutDirectionManufacturingConstraint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#PullOutDirectionManufacturingConstraint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PullOutDirectionManufacturingConstraint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PullOutDirectionManufacturingConstraint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PullOutDirectionManufacturingConstraint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PullOutDirectionManufacturingConstraint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#PullOutDirectionManufacturingConstraint.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#PullOutDirectionManufacturingConstraint.AttachedRefs)                                     | AttachedRefs property.                                                                                                                                         |
| [`Axis`](#PullOutDirectionManufacturingConstraint.Axis)                                                     | Gets or sets the Axis for pullout direction. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”).               |
| [`Children`](#PullOutDirectionManufacturingConstraint.Children)                                             | Gets the list of children.                                                                                                                                     |
| [`ClsId`](#PullOutDirectionManufacturingConstraint.ClsId)                                                   | ClsId property.                                                                                                                                                |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                                                  | Gets or sets the CoordinateSystem.                                                                                                                             |
| [`DataModelObjectCategory`](#PullOutDirectionManufacturingConstraint.DataModelObjectCategory)               | Gets the current DataModelObject's category.                                                                                                                   |
| [`Direction`](#PullOutDirectionManufacturingConstraint.Direction)                                           | Gets or sets the Direction.                                                                                                                                    |
| [`GroupingFolder`](#PullOutDirectionManufacturingConstraint.GroupingFolder)                                 | GroupingFolder property.                                                                                                                                       |
| [`IconName`](#PullOutDirectionManufacturingConstraint.IconName)                                             | IconName property.                                                                                                                                             |
| [`InternalObject`](#PullOutDirectionManufacturingConstraint.InternalObject)                                 | Gets the internal object. For advanced usage only.                                                                                                             |
| [`Location`](#PullOutDirectionManufacturingConstraint.Location)                                             | Gets or sets the Location.                                                                                                                                     |
| [`Name`](#PullOutDirectionManufacturingConstraint.Name)                                                     | Name property.                                                                                                                                                 |
| [`ObjectId`](#PullOutDirectionManufacturingConstraint.ObjectId)                                             | ObjectId property.                                                                                                                                             |
| [`ObjectState`](#PullOutDirectionManufacturingConstraint.ObjectState)                                       | ObjectState property.                                                                                                                                          |
| [`ObjectTags`](#PullOutDirectionManufacturingConstraint.ObjectTags)                                         | ObjectTags property.                                                                                                                                           |
| [`Parent`](#PullOutDirectionManufacturingConstraint.Parent)                                                 | Parent property.                                                                                                                                               |
| [`PartingSurfaceControl`](#PullOutDirectionManufacturingConstraint.PartingSurfaceControl)                   | Gets or sets the control strategy for the parting surface.                                                                                                     |
| [`PartingSurfaceCoordinateSystem`](#PullOutDirectionManufacturingConstraint.PartingSurfaceCoordinateSystem) | Gets or sets the Coordinate system used to define the parting plane                                                                                            |
| [`PartingSurfacePlane`](#PullOutDirectionManufacturingConstraint.PartingSurfacePlane)                       | Gets or sets the normal axis to the parting surface plane. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”). |
| [`Properties`](#PullOutDirectionManufacturingConstraint.Properties)                                         | Gets the list of properties for this object.                                                                                                                   |
| [`ScopingMethod`](#PullOutDirectionManufacturingConstraint.ScopingMethod)                                   | Gets or sets the ScopingMethod.                                                                                                                                |
| [`Selection`](#PullOutDirectionManufacturingConstraint.Selection)                                           | Gets or sets the Selection.                                                                                                                                    |
| [`State`](#PullOutDirectionManufacturingConstraint.State)                                                   | State property.                                                                                                                                                |
| [`Subtype`](#PullOutDirectionManufacturingConstraint.Subtype)                                               | Gets or sets the Subtype.                                                                                                                                      |
| [`Suppressed`](#PullOutDirectionManufacturingConstraint.Suppressed)                                         | Gets or sets the Suppressed.                                                                                                                                   |
| [`VisibleProperties`](#PullOutDirectionManufacturingConstraint.VisibleProperties)                           | Gets the list of properties that are visible for this object.                                                                                                  |

<a id="property-detail"></a>

## Property detail

<a id="PullOutDirectionManufacturingConstraint.AttachedRefs"></a>

### *property* PullOutDirectionManufacturingConstraint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Axis"></a>

### *property* PullOutDirectionManufacturingConstraint.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Axis for pullout direction. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”).
: InvalidArgumentException: Any unsupported enum value.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Children"></a>

### *property* PullOutDirectionManufacturingConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.ClsId"></a>

### *property* PullOutDirectionManufacturingConstraint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.CoordinateSystem"></a>

### *property* PullOutDirectionManufacturingConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.DataModelObjectCategory"></a>

### *property* PullOutDirectionManufacturingConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Direction"></a>

### *property* PullOutDirectionManufacturingConstraint.Direction *: [Ansys.Mechanical.DataModel.Enums.PullOutDirectionType](../../../Mechanical/DataModel/Enums/PullOutDirectionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PullOutDirectionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GroupingFolder"></a>

### *property* PullOutDirectionManufacturingConstraint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.IconName"></a>

### *property* PullOutDirectionManufacturingConstraint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.InternalObject"></a>

### *property* PullOutDirectionManufacturingConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Location"></a>

### *property* PullOutDirectionManufacturingConstraint.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Name"></a>

### *property* PullOutDirectionManufacturingConstraint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.ObjectId"></a>

### *property* PullOutDirectionManufacturingConstraint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.ObjectState"></a>

### *property* PullOutDirectionManufacturingConstraint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.ObjectTags"></a>

### *property* PullOutDirectionManufacturingConstraint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Parent"></a>

### *property* PullOutDirectionManufacturingConstraint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.PartingSurfaceControl"></a>

### *property* PullOutDirectionManufacturingConstraint.PartingSurfaceControl *: [Ansys.Mechanical.DataModel.Enums.PartingSurfaceControl](../../../Mechanical/DataModel/Enums/PartingSurfaceControl.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PartingSurfaceControl) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the control strategy for the parting surface.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.PartingSurfaceCoordinateSystem"></a>

### *property* PullOutDirectionManufacturingConstraint.PartingSurfaceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate system used to define the parting plane

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.PartingSurfacePlane"></a>

### *property* PullOutDirectionManufacturingConstraint.PartingSurfacePlane *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the normal axis to the parting surface plane. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”).
: InvalidArgumentException: Any unsupported enum value.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Properties"></a>

### *property* PullOutDirectionManufacturingConstraint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.ScopingMethod"></a>

### *property* PullOutDirectionManufacturingConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Selection"></a>

### *property* PullOutDirectionManufacturingConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.State"></a>

### *property* PullOutDirectionManufacturingConstraint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Subtype"></a>

### *property* PullOutDirectionManufacturingConstraint.Subtype *: [Ansys.Mechanical.DataModel.Enums.PullOutConstraintSubtype](../../../Mechanical/DataModel/Enums/PullOutConstraintSubtype.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PullOutConstraintSubtype) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Suppressed"></a>

### *property* PullOutDirectionManufacturingConstraint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.VisibleProperties"></a>

### *property* PullOutDirectionManufacturingConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PullOutDirectionManufacturingConstraint.Activate"></a>

### PullOutDirectionManufacturingConstraint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Copy"></a>

### PullOutDirectionManufacturingConstraint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.CopyTo"></a>

### PullOutDirectionManufacturingConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.CreateObjRef"></a>

### PullOutDirectionManufacturingConstraint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.CreateParameter"></a>

### PullOutDirectionManufacturingConstraint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Cut"></a>

### PullOutDirectionManufacturingConstraint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Delete"></a>

### PullOutDirectionManufacturingConstraint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Duplicate"></a>

### PullOutDirectionManufacturingConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Equals"></a>

### PullOutDirectionManufacturingConstraint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetAPIName"></a>

### PullOutDirectionManufacturingConstraint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetAllProperties"></a>

### PullOutDirectionManufacturingConstraint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetChildren"></a>

### PullOutDirectionManufacturingConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PullOutDirectionManufacturingConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetDetailsView"></a>

### PullOutDirectionManufacturingConstraint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetEnumName"></a>

### PullOutDirectionManufacturingConstraint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetHashCode"></a>

### PullOutDirectionManufacturingConstraint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetIconFile"></a>

### PullOutDirectionManufacturingConstraint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetLifetimeService"></a>

### PullOutDirectionManufacturingConstraint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetObjectData"></a>

### PullOutDirectionManufacturingConstraint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetParameter"></a>

### PullOutDirectionManufacturingConstraint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetPath"></a>

### PullOutDirectionManufacturingConstraint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetPropertyName"></a>

### PullOutDirectionManufacturingConstraint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetPropertyValue"></a>

### PullOutDirectionManufacturingConstraint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetVisibleProperties"></a>

### PullOutDirectionManufacturingConstraint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GetVisiblePropertyNames"></a>

### PullOutDirectionManufacturingConstraint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GroupAllSimilarChildren"></a>

### PullOutDirectionManufacturingConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.GroupSimilarObjects"></a>

### PullOutDirectionManufacturingConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.InitializeLifetimeService"></a>

### PullOutDirectionManufacturingConstraint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.IsPropertyEditable"></a>

### PullOutDirectionManufacturingConstraint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PullOutDirectionManufacturingConstraint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.IsPropertyVisible"></a>

### PullOutDirectionManufacturingConstraint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PullOutDirectionManufacturingConstraint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.Paste"></a>

### PullOutDirectionManufacturingConstraint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.PropertyByAPIName"></a>

### PullOutDirectionManufacturingConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.PropertyById"></a>

### PullOutDirectionManufacturingConstraint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.PropertyByName"></a>

### PullOutDirectionManufacturingConstraint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.RemoveFromGroup"></a>

### PullOutDirectionManufacturingConstraint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.RemoveParameter"></a>

### PullOutDirectionManufacturingConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PullOutDirectionManufacturingConstraint.RenameBasedOnDefinition"></a>

### PullOutDirectionManufacturingConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

