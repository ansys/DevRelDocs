# `LineChart2D`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.LineChart2D"></a>

#### *class* Ansys.ACT.Automation.Mechanical.LineChart2D(internalObject: Any)

<a id="LineChart2D"></a>

### *class* LineChart2D(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

An object in the Tree to display data imported from various source objects under “Solution” or from files.
It utilizes Ansys.Mechanical.DataModel.Utilities.Charts.Chart for displaying the imported data and provides users with the flexibility to modify the data to some extent
(eg. deleting, hiding/showing, modifying their display and applying operations on them).

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#LineChart2D.Activate)                                               | Activate the current object.                                                                |
| [`CanDoUpdateOutdatedChartSources`](#LineChart2D.CanDoUpdateOutdatedChartSources) | CanDoUpdateOutdatedChartSources method.                                                     |
| [`Copy`](#LineChart2D.Copy)                                                       | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#LineChart2D.CopyTo)                                                   | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#LineChart2D.CreateObjRef)                                       | CreateObjRef method.                                                                        |
| [`CreateParameter`](#LineChart2D.CreateParameter)                                 | Creates a new parameter for a Property.                                                     |
| [`Cut`](#LineChart2D.Cut)                                                         | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#LineChart2D.Duplicate)                                             | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#LineChart2D.Equals)                                                   | Equals method.                                                                              |
| [`GetAPIName`](#LineChart2D.GetAPIName)                                           | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#LineChart2D.GetAllProperties)                               | GetAllProperties method.                                                                    |
| [`GetChartAxisDisplayUnit`](#LineChart2D.GetChartAxisDisplayUnit)                 | GetChartAxisDisplayUnit method.                                                             |
| [`GetChildren`](#LineChart2D.GetChildren)                                         | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#LineChart2D.GetDetailsView)                                   | GetDetailsView method.                                                                      |
| [`GetEnumName`](#LineChart2D.GetEnumName)                                         | Enum name bound to value                                                                    |
| [`GetGraphInteractionEvent`](#LineChart2D.GetGraphInteractionEvent)               | GetGraphInteractionEvent method.                                                            |
| [`GetHashCode`](#LineChart2D.GetHashCode)                                         | GetHashCode method.                                                                         |
| [`GetIconFile`](#LineChart2D.GetIconFile)                                         | GetIconFile method.                                                                         |
| [`GetIndependentVariable`](#LineChart2D.GetIndependentVariable)                   | Returns the Dataset2D object chosen as the Independent Variable of the Chart.               |
| [`GetLifetimeService`](#LineChart2D.GetLifetimeService)                           | GetLifetimeService method.                                                                  |
| [`GetNumberOfCharts`](#LineChart2D.GetNumberOfCharts)                             | GetNumberOfCharts method.                                                                   |
| [`GetObjectData`](#LineChart2D.GetObjectData)                                     | GetObjectData method.                                                                       |
| [`GetParameter`](#LineChart2D.GetParameter)                                       | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#LineChart2D.GetPath)                                                 | GetPath method.                                                                             |
| [`GetPropertyName`](#LineChart2D.GetPropertyName)                                 | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#LineChart2D.GetPropertyValue)                               | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#LineChart2D.GetVisibleProperties)                       | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#LineChart2D.GetVisiblePropertyNames)                 | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#LineChart2D.GroupAllSimilarChildren)                 | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#LineChart2D.GroupSimilarObjects)                         | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#LineChart2D.InitializeLifetimeService)             | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#LineChart2D.IsPropertyEditable)                           | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#LineChart2D.IsPropertyVisible)                             | IsPropertyVisible method.                                                                   |
| [`Paste`](#LineChart2D.Paste)                                                     | Pastes to the current DataModelObject context.                                              |
| [`PromoteXAxisChart`](#LineChart2D.PromoteXAxisChart)                             | PromoteXAxisChart method.                                                                   |
| [`PropertyByAPIName`](#LineChart2D.PropertyByAPIName)                             | Get a property by its API name.                                                             |
| [`PropertyById`](#LineChart2D.PropertyById)                                       | PropertyById method.                                                                        |
| [`PropertyByName`](#LineChart2D.PropertyByName)                                   | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#LineChart2D.RemoveFromGroup)                                 | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#LineChart2D.RemoveParameter)                                 | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetGraphInteractionEvent`](#LineChart2D.SetGraphInteractionEvent)               | SetGraphInteractionEvent method.                                                            |
| [`SetIndependentVariable`](#LineChart2D.SetIndependentVariable)                   | Sets the Dataset2D object chosen as the Independent Variable of the Chart.                  |
| [`Update`](#LineChart2D.Update)                                                   | Fetches the latest results from the modified Source object(s)                               |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#LineChart2D.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Chart`](Chart.md#Chart)                                         | Gets the chart object on Line Chart.                          |
| [`Charts`](#LineChart2D.Charts)                                   | Gets the chart object on Line Chart.                          |
| [`Children`](#LineChart2D.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#LineChart2D.ClsId)                                     | ClsId property.                                               |
| [`DataModelObjectCategory`](#LineChart2D.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#LineChart2D.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#LineChart2D.IconName)                               | IconName property.                                            |
| [`InternalObject`](#LineChart2D.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#LineChart2D.Name)                                       | Name property.                                                |
| [`ObjectId`](#LineChart2D.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#LineChart2D.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#LineChart2D.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#LineChart2D.Parent)                                   | Parent property.                                              |
| [`Properties`](#LineChart2D.Properties)                           | Gets the list of properties for this object.                  |
| [`Source`](#LineChart2D.Source)                                   | Gets or sets source objects.                                  |
| [`State`](#LineChart2D.State)                                     | State property.                                               |
| [`Suppressed`](#LineChart2D.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#LineChart2D.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="LineChart2D.AttachedRefs"></a>

### *property* LineChart2D.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Chart"></a>

### *property* LineChart2D.Chart *: Ansys.ACT.Interfaces.Mechanical.IChart | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the chart object on Line Chart.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Charts"></a>

### *property* LineChart2D.Charts *: List[Ansys.ACT.Interfaces.Mechanical.IReadOnlyChart] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the chart object on Line Chart.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Children"></a>

### *property* LineChart2D.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.ClsId"></a>

### *property* LineChart2D.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.DataModelObjectCategory"></a>

### *property* LineChart2D.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GroupingFolder"></a>

### *property* LineChart2D.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.IconName"></a>

### *property* LineChart2D.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.InternalObject"></a>

### *property* LineChart2D.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBasicResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Name"></a>

### *property* LineChart2D.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.ObjectId"></a>

### *property* LineChart2D.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.ObjectState"></a>

### *property* LineChart2D.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.ObjectTags"></a>

### *property* LineChart2D.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Parent"></a>

### *property* LineChart2D.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Properties"></a>

### *property* LineChart2D.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Source"></a>

### *property* LineChart2D.Source *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets source objects.
When setting, all datasets are copied from the specified sources and added to the chart object owned by LineChart2D.
We will ignore unsupported objects and import the ones that are supported.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.State"></a>

### *property* LineChart2D.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Suppressed"></a>

### *property* LineChart2D.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.VisibleProperties"></a>

### *property* LineChart2D.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LineChart2D.Activate"></a>

### LineChart2D.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.CanDoUpdateOutdatedChartSources"></a>

### LineChart2D.CanDoUpdateOutdatedChartSources() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

CanDoUpdateOutdatedChartSources method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Copy"></a>

### LineChart2D.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.CopyTo"></a>

### LineChart2D.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.CreateObjRef"></a>

### LineChart2D.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.CreateParameter"></a>

### LineChart2D.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Cut"></a>

### LineChart2D.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Duplicate"></a>

### LineChart2D.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Equals"></a>

### LineChart2D.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetAPIName"></a>

### LineChart2D.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetAllProperties"></a>

### LineChart2D.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetChartAxisDisplayUnit"></a>

### LineChart2D.GetChartAxisDisplayUnit(chart_idx: [int](https://docs.python.org/3/builtins/functions.html#int), axis_id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetChartAxisDisplayUnit method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetChildren"></a>

### LineChart2D.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### LineChart2D.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetDetailsView"></a>

### LineChart2D.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetEnumName"></a>

### LineChart2D.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetGraphInteractionEvent"></a>

### LineChart2D.GetGraphInteractionEvent(ppEventArgs: Any, chartIndex: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetGraphInteractionEvent method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetHashCode"></a>

### LineChart2D.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetIconFile"></a>

### LineChart2D.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetIndependentVariable"></a>

### LineChart2D.GetIndependentVariable() → [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](../../../Mechanical/DataModel/Utilities/Dataset/Dataset2D.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)

Returns the Dataset2D object chosen as the Independent Variable of the Chart.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetLifetimeService"></a>

### LineChart2D.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetNumberOfCharts"></a>

### LineChart2D.GetNumberOfCharts() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetNumberOfCharts method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetObjectData"></a>

### LineChart2D.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetParameter"></a>

### LineChart2D.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetPath"></a>

### LineChart2D.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetPropertyName"></a>

### LineChart2D.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetPropertyValue"></a>

### LineChart2D.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetVisibleProperties"></a>

### LineChart2D.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GetVisiblePropertyNames"></a>

### LineChart2D.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GroupAllSimilarChildren"></a>

### LineChart2D.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.GroupSimilarObjects"></a>

### LineChart2D.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.InitializeLifetimeService"></a>

### LineChart2D.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.IsPropertyEditable"></a>

### LineChart2D.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LineChart2D.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.IsPropertyVisible"></a>

### LineChart2D.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LineChart2D.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Paste"></a>

### LineChart2D.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.PromoteXAxisChart"></a>

### LineChart2D.PromoteXAxisChart() → [None](https://docs.python.org/3/builtins/constants.html#None)

PromoteXAxisChart method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.PropertyByAPIName"></a>

### LineChart2D.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.PropertyById"></a>

### LineChart2D.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.PropertyByName"></a>

### LineChart2D.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.RemoveFromGroup"></a>

### LineChart2D.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.RemoveParameter"></a>

### LineChart2D.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.SetGraphInteractionEvent"></a>

### LineChart2D.SetGraphInteractionEvent(pEventArgs: Any, chartIndex: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetGraphInteractionEvent method.

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.SetIndependentVariable"></a>

### LineChart2D.SetIndependentVariable(input_dataset: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](../../../Mechanical/DataModel/Utilities/Dataset/Dataset2D.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the Dataset2D object chosen as the Independent Variable of the Chart.

Chart data are constructed using the chosen Dataset2D's Y-values as the Independent Variable and
the Y-values from the other datasets as the Dependent Variable. Only Y-values at intersecting X-values from the datasets are picked;
no interpolation is performed for missing X-values.

An input of "None" returns the chart to its original state.
If any dataset contains negative values that conflict with the Logarithmic setting of a chart axis, then Logarithmic for that axis is disabled.
An InvalidOperationException is thrown if any Dataset on the Chart is not strictly monotonic.
An ArgumentException is thrown if the chosen Independent Variable is not a Dataset on the Chart.
```

<!-- !! processed by numpydoc !! -->

<a id="LineChart2D.Update"></a>

### LineChart2D.Update() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Fetches the latest results from the modified Source object(s)
and replaces the Datasets originally imported from the respective Source(s).
If any dataset contains negative values that conflict with the Logarithmic setting of a chart axis, then Logarithmic for that axis is disabled.
If the revised datasets from the Update operation conflict with the existing X-axis quantity on the chart,
the Update operation is aborted with an InvalidOperationException and the old data is restored.
```

<!-- !! processed by numpydoc !! -->

