# `ComplexityIndexConstraint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ComplexityIndexConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ComplexityIndexConstraint(internalObject: Any)

<a id="ComplexityIndexConstraint"></a>

### *class* ComplexityIndexConstraint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ComplexityIndexConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ComplexityIndexConstraint.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#ComplexityIndexConstraint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ComplexityIndexConstraint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ComplexityIndexConstraint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ComplexityIndexConstraint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ComplexityIndexConstraint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ComplexityIndexConstraint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ComplexityIndexConstraint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ComplexityIndexConstraint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ComplexityIndexConstraint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ComplexityIndexConstraint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ComplexityIndexConstraint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ComplexityIndexConstraint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ComplexityIndexConstraint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ComplexityIndexConstraint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ComplexityIndexConstraint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ComplexityIndexConstraint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ComplexityIndexConstraint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ComplexityIndexConstraint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ComplexityIndexConstraint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ComplexityIndexConstraint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ComplexityIndexConstraint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ComplexityIndexConstraint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ComplexityIndexConstraint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ComplexityIndexConstraint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ComplexityIndexConstraint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ComplexityIndexConstraint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ComplexityIndexConstraint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ComplexityIndexConstraint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ComplexityIndexConstraint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ComplexityIndexConstraint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ComplexityIndexConstraint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ComplexityIndexConstraint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ComplexityIndexConstraint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ComplexityIndexConstraint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#ComplexityIndexConstraint.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ComplexityIndexConstraint.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ComplexityIndexConstraint.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ComplexityIndexConstraint.ClsId)                                     | ClsId property.                                               |
| [`DataModelObjectCategory`](#ComplexityIndexConstraint.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#ComplexityIndexConstraint.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ComplexityIndexConstraint.IconName)                               | IconName property.                                            |
| [`InternalObject`](#ComplexityIndexConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#ComplexityIndexConstraint.Location)                               | Gets or sets the Location.                                    |
| [`MaximumValue`](#ComplexityIndexConstraint.MaximumValue)                       | Gets or sets the MaximumValue.                                |
| [`Name`](#ComplexityIndexConstraint.Name)                                       | Name property.                                                |
| [`ObjectId`](#ComplexityIndexConstraint.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ComplexityIndexConstraint.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ComplexityIndexConstraint.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ComplexityIndexConstraint.Parent)                                   | Parent property.                                              |
| [`Properties`](#ComplexityIndexConstraint.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#ComplexityIndexConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Selection`](#ComplexityIndexConstraint.Selection)                             | Gets or sets the Selection.                                   |
| [`State`](#ComplexityIndexConstraint.State)                                     | State property.                                               |
| [`Suppressed`](#ComplexityIndexConstraint.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ComplexityIndexConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ComplexityIndexConstraint.AttachedRefs"></a>

### *property* ComplexityIndexConstraint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.Children"></a>

### *property* ComplexityIndexConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.ClsId"></a>

### *property* ComplexityIndexConstraint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.DataModelObjectCategory"></a>

### *property* ComplexityIndexConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GroupingFolder"></a>

### *property* ComplexityIndexConstraint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.IconName"></a>

### *property* ComplexityIndexConstraint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.InternalObject"></a>

### *property* ComplexityIndexConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.Location"></a>

### *property* ComplexityIndexConstraint.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.MaximumValue"></a>

### *property* ComplexityIndexConstraint.MaximumValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumValue.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.Name"></a>

### *property* ComplexityIndexConstraint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.ObjectId"></a>

### *property* ComplexityIndexConstraint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.ObjectState"></a>

### *property* ComplexityIndexConstraint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.ObjectTags"></a>

### *property* ComplexityIndexConstraint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.Parent"></a>

### *property* ComplexityIndexConstraint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.Properties"></a>

### *property* ComplexityIndexConstraint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.ScopingMethod"></a>

### *property* ComplexityIndexConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.Selection"></a>

### *property* ComplexityIndexConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.State"></a>

### *property* ComplexityIndexConstraint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.Suppressed"></a>

### *property* ComplexityIndexConstraint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.VisibleProperties"></a>

### *property* ComplexityIndexConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ComplexityIndexConstraint.Activate"></a>

### ComplexityIndexConstraint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.Copy"></a>

### ComplexityIndexConstraint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.CopyTo"></a>

### ComplexityIndexConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.CreateObjRef"></a>

### ComplexityIndexConstraint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.CreateParameter"></a>

### ComplexityIndexConstraint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.Cut"></a>

### ComplexityIndexConstraint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.Delete"></a>

### ComplexityIndexConstraint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.Duplicate"></a>

### ComplexityIndexConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.Equals"></a>

### ComplexityIndexConstraint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GetAPIName"></a>

### ComplexityIndexConstraint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GetAllProperties"></a>

### ComplexityIndexConstraint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GetChildren"></a>

### ComplexityIndexConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ComplexityIndexConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GetDetailsView"></a>

### ComplexityIndexConstraint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GetEnumName"></a>

### ComplexityIndexConstraint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GetHashCode"></a>

### ComplexityIndexConstraint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GetIconFile"></a>

### ComplexityIndexConstraint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GetLifetimeService"></a>

### ComplexityIndexConstraint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GetObjectData"></a>

### ComplexityIndexConstraint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GetParameter"></a>

### ComplexityIndexConstraint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GetPath"></a>

### ComplexityIndexConstraint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GetPropertyName"></a>

### ComplexityIndexConstraint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GetPropertyValue"></a>

### ComplexityIndexConstraint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GetVisibleProperties"></a>

### ComplexityIndexConstraint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GetVisiblePropertyNames"></a>

### ComplexityIndexConstraint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GroupAllSimilarChildren"></a>

### ComplexityIndexConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.GroupSimilarObjects"></a>

### ComplexityIndexConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.InitializeLifetimeService"></a>

### ComplexityIndexConstraint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.IsPropertyEditable"></a>

### ComplexityIndexConstraint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ComplexityIndexConstraint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.IsPropertyVisible"></a>

### ComplexityIndexConstraint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ComplexityIndexConstraint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.Paste"></a>

### ComplexityIndexConstraint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.PropertyByAPIName"></a>

### ComplexityIndexConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.PropertyById"></a>

### ComplexityIndexConstraint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.PropertyByName"></a>

### ComplexityIndexConstraint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.RemoveFromGroup"></a>

### ComplexityIndexConstraint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.RemoveParameter"></a>

### ComplexityIndexConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ComplexityIndexConstraint.RenameBasedOnDefinition"></a>

### ComplexityIndexConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

