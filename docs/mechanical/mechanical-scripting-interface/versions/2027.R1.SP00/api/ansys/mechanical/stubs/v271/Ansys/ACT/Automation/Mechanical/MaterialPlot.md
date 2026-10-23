# `MaterialPlot`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MaterialPlot"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MaterialPlot(internalObject: Any)

<a id="MaterialPlot"></a>

### *class* MaterialPlot(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MaterialPlot.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MaterialPlot.Activate)                                   | Activate the current object.                                                                |
| [`Clear`](#MaterialPlot.Clear)                                         | Run the Clear action.                                                                       |
| [`Copy`](#MaterialPlot.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MaterialPlot.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MaterialPlot.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MaterialPlot.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MaterialPlot.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MaterialPlot.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MaterialPlot.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MaterialPlot.Equals)                                       | Equals method.                                                                              |
| [`Generate`](#MaterialPlot.Generate)                                   | Run the Generate action.                                                                    |
| [`GetAPIName`](#MaterialPlot.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MaterialPlot.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MaterialPlot.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MaterialPlot.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MaterialPlot.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MaterialPlot.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MaterialPlot.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MaterialPlot.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MaterialPlot.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MaterialPlot.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MaterialPlot.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MaterialPlot.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MaterialPlot.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#MaterialPlot.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MaterialPlot.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MaterialPlot.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MaterialPlot.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MaterialPlot.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MaterialPlot.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MaterialPlot.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MaterialPlot.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#MaterialPlot.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MaterialPlot.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MaterialPlot.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MaterialPlot.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MaterialPlot.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#MaterialPlot.AttachedRefs)                           | AttachedRefs property.                                        |
| [`Children`](#MaterialPlot.Children)                                   | Gets the list of children.                                    |
| [`ClsId`](#MaterialPlot.ClsId)                                         | ClsId property.                                               |
| [`DataModelObjectCategory`](#MaterialPlot.DataModelObjectCategory)     | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#MaterialPlot.GroupingFolder)                       | GroupingFolder property.                                      |
| [`IconName`](#MaterialPlot.IconName)                                   | IconName property.                                            |
| [`InternalObject`](#MaterialPlot.InternalObject)                       | Gets the internal object. For advanced usage only.            |
| [`Location`](#MaterialPlot.Location)                                   | Gets or sets the Location.                                    |
| [`MaterialProperty`](#MaterialPlot.MaterialProperty)                   | Gets or sets the MaterialProperty.                            |
| [`MaterialPropertyComponent`](#MaterialPlot.MaterialPropertyComponent) | Gets or sets the MaterialPropertyComponent.                   |
| [`Name`](#MaterialPlot.Name)                                           | Name property.                                                |
| [`ObjectId`](#MaterialPlot.ObjectId)                                   | ObjectId property.                                            |
| [`ObjectState`](#MaterialPlot.ObjectState)                             | ObjectState property.                                         |
| [`ObjectTags`](#MaterialPlot.ObjectTags)                               | ObjectTags property.                                          |
| [`Parent`](#MaterialPlot.Parent)                                       | Parent property.                                              |
| [`Properties`](#MaterialPlot.Properties)                               | Gets the list of properties for this object.                  |
| [`State`](#MaterialPlot.State)                                         | State property.                                               |
| [`Suppressed`](#MaterialPlot.Suppressed)                               | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#MaterialPlot.VisibleProperties)                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MaterialPlot.AttachedRefs"></a>

### *property* MaterialPlot.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Children"></a>

### *property* MaterialPlot.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.ClsId"></a>

### *property* MaterialPlot.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.DataModelObjectCategory"></a>

### *property* MaterialPlot.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GroupingFolder"></a>

### *property* MaterialPlot.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.IconName"></a>

### *property* MaterialPlot.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.InternalObject"></a>

### *property* MaterialPlot.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialPlotAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Location"></a>

### *property* MaterialPlot.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.MaterialProperty"></a>

### *property* MaterialPlot.MaterialProperty *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaterialProperty.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.MaterialPropertyComponent"></a>

### *property* MaterialPlot.MaterialPropertyComponent *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaterialPropertyComponent.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Name"></a>

### *property* MaterialPlot.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.ObjectId"></a>

### *property* MaterialPlot.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.ObjectState"></a>

### *property* MaterialPlot.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.ObjectTags"></a>

### *property* MaterialPlot.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Parent"></a>

### *property* MaterialPlot.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Properties"></a>

### *property* MaterialPlot.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.State"></a>

### *property* MaterialPlot.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Suppressed"></a>

### *property* MaterialPlot.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.VisibleProperties"></a>

### *property* MaterialPlot.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MaterialPlot.Activate"></a>

### MaterialPlot.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Clear"></a>

### MaterialPlot.Clear() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Clear action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Copy"></a>

### MaterialPlot.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.CopyTo"></a>

### MaterialPlot.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.CreateObjRef"></a>

### MaterialPlot.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.CreateParameter"></a>

### MaterialPlot.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Cut"></a>

### MaterialPlot.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Delete"></a>

### MaterialPlot.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Duplicate"></a>

### MaterialPlot.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Equals"></a>

### MaterialPlot.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Generate"></a>

### MaterialPlot.Generate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Generate action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetAPIName"></a>

### MaterialPlot.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetAllProperties"></a>

### MaterialPlot.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetChildren"></a>

### MaterialPlot.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MaterialPlot.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetDetailsView"></a>

### MaterialPlot.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetEnumName"></a>

### MaterialPlot.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetHashCode"></a>

### MaterialPlot.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetIconFile"></a>

### MaterialPlot.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetLifetimeService"></a>

### MaterialPlot.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetObjectData"></a>

### MaterialPlot.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetParameter"></a>

### MaterialPlot.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetPath"></a>

### MaterialPlot.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetPropertyName"></a>

### MaterialPlot.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetPropertyValue"></a>

### MaterialPlot.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetVisibleProperties"></a>

### MaterialPlot.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetVisiblePropertyNames"></a>

### MaterialPlot.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GroupAllSimilarChildren"></a>

### MaterialPlot.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GroupSimilarObjects"></a>

### MaterialPlot.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.InitializeLifetimeService"></a>

### MaterialPlot.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.IsPropertyEditable"></a>

### MaterialPlot.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MaterialPlot.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.IsPropertyVisible"></a>

### MaterialPlot.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MaterialPlot.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Paste"></a>

### MaterialPlot.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.PropertyByAPIName"></a>

### MaterialPlot.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.PropertyById"></a>

### MaterialPlot.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.PropertyByName"></a>

### MaterialPlot.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.RemoveFromGroup"></a>

### MaterialPlot.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.RemoveParameter"></a>

### MaterialPlot.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

