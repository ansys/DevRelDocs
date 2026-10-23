# `Chart`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Chart"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Chart(internalObject: Any)

<a id="Chart"></a>

### *class* Chart(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Chart.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Chart.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Chart.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#Chart.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Chart.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Chart.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Chart.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Chart.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Chart.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Chart.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Chart.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Chart.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#Chart.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Chart.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Chart.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Chart.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Chart.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Chart.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Chart.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Chart.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Chart.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Chart.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Chart.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Chart.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Chart.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Chart.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Chart.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Chart.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Chart.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Chart.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Chart.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Chart.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Chart.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Chart.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Chart.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Chart.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Chart.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Chart.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Chart.AttachedRefs)                                                            | AttachedRefs property.                                        |
| [`Caption`](#Chart.Caption)                                                                      | Gets or sets the Caption.                                     |
| [`Children`](#Chart.Children)                                                                    | Gets the list of children.                                    |
| [`ClsId`](#Chart.ClsId)                                                                          | ClsId property.                                               |
| [`Comments`](#Chart.Comments)                                                                    | Gets the list of associated comments.                         |
| [`Content`](#Chart.Content)                                                                      | Gets or sets the Content.                                     |
| [`DataModelObjectCategory`](#Chart.DataModelObjectCategory)                                      | Gets the current DataModelObject's category.                  |
| [`Gridlines`](#Chart.Gridlines)                                                                  | Gets or sets the Gridlines.                                   |
| [`GroupingFolder`](#Chart.GroupingFolder)                                                        | GroupingFolder property.                                      |
| [`IconName`](#Chart.IconName)                                                                    | IconName property.                                            |
| [`Images`](#Chart.Images)                                                                        | Gets the list of associated images.                           |
| [`IndependentAxis`](#Chart.IndependentAxis)                                                      | Gets or sets the IndependentAxis.                             |
| [`InternalObject`](#Chart.InternalObject) | Gets the internal object. For advanced usage only.            |
| [`ModalDisplayType`](#Chart.ModalDisplayType)                                                    | Gets or sets the ModalDisplayType.                            |
| [`Name`](#Chart.Name)                                                                            | Name property.                                                |
| [`ObjectId`](#Chart.ObjectId)                                                                    | ObjectId property.                                            |
| [`ObjectState`](#Chart.ObjectState)                                                              | ObjectState property.                                         |
| [`ObjectTags`](#Chart.ObjectTags)                                                                | ObjectTags property.                                          |
| [`OutlineSelection`](#Chart.OutlineSelection)                                                    | Gets or sets the OutlineSelection.                            |
| [`Parent`](#Chart.Parent)                                                                        | Parent property.                                              |
| [`PlotStyle`](#Chart.PlotStyle)                                                                  | Gets or sets the PlotStyle.                                   |
| [`Properties`](#Chart.Properties)                                                                | Gets the list of properties for this object.                  |
| [`Scale`](#Chart.Scale)                                                                          | Gets or sets the Scale.                                       |
| [`State`](#Chart.State)                                                                          | State property.                                               |
| [`VisibleProperties`](#Chart.VisibleProperties)                                                  | Gets the list of properties that are visible for this object. |
| [`XAxis`](#Chart.XAxis)                                                                          | Use to control the X Axis property of the chart.              |
| [`XAxisLabel`](#Chart.XAxisLabel)                                                                | Gets or sets the XAxisLabel.                                  |
| [`YAxisLabel`](#Chart.YAxisLabel)                                                                | Gets or sets the YAxisLabel.                                  |

<a id="property-detail"></a>

## Property detail

<a id="Chart.AttachedRefs"></a>

### *property* Chart.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Caption"></a>

### *property* Chart.Caption *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Caption.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Children"></a>

### *property* Chart.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Chart.ClsId"></a>

### *property* Chart.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Comments"></a>

### *property* Chart.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Content"></a>

### *property* Chart.Content *: [Ansys.Mechanical.DataModel.Enums.ChartReportType](../../../Mechanical/DataModel/Enums/ChartReportType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartReportType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Content.

<!-- !! processed by numpydoc !! -->

<a id="Chart.DataModelObjectCategory"></a>

### *property* Chart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Gridlines"></a>

### *property* Chart.Gridlines *: [Ansys.Mechanical.DataModel.Enums.ChartGridlines](../../../Mechanical/DataModel/Enums/ChartGridlines.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartGridlines) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Gridlines.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GroupingFolder"></a>

### *property* Chart.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Chart.IconName"></a>

### *property* Chart.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Images"></a>

### *property* Chart.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Chart.IndependentAxis"></a>

### *property* Chart.IndependentAxis *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentAxis.

<!-- !! processed by numpydoc !! -->

<a id="Chart.InternalObject"></a>

### *property* Chart.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Chart.ModalDisplayType"></a>

### *property* Chart.ModalDisplayType *: [Ansys.Mechanical.DataModel.Enums.ChartModalType](../../../Mechanical/DataModel/Enums/ChartModalType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartModalType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ModalDisplayType.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Name"></a>

### *property* Chart.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Chart.ObjectId"></a>

### *property* Chart.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Chart.ObjectState"></a>

### *property* Chart.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Chart.ObjectTags"></a>

### *property* Chart.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Chart.OutlineSelection"></a>

### *property* Chart.OutlineSelection *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OutlineSelection.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Parent"></a>

### *property* Chart.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Chart.PlotStyle"></a>

### *property* Chart.PlotStyle *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PlotStyle.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Properties"></a>

### *property* Chart.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Scale"></a>

### *property* Chart.Scale *: [Ansys.Mechanical.DataModel.Enums.ChartScale](../../../Mechanical/DataModel/Enums/ChartScale.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartScale) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scale.

<!-- !! processed by numpydoc !! -->

<a id="Chart.State"></a>

### *property* Chart.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Chart.VisibleProperties"></a>

### *property* Chart.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Chart.XAxis"></a>

### *property* Chart.XAxis *: [Ansys.ACT.Automation.Mechanical.ChartXAxis](ChartXAxis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ChartXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Use to control the X Axis property of the chart.

<!-- !! processed by numpydoc !! -->

<a id="Chart.XAxisLabel"></a>

### *property* Chart.XAxisLabel *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisLabel.

<!-- !! processed by numpydoc !! -->

<a id="Chart.YAxisLabel"></a>

### *property* Chart.YAxisLabel *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YAxisLabel.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Chart.Activate"></a>

### Chart.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Chart.AddComment"></a>

### Chart.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Chart.AddImage"></a>

### Chart.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Chart.Copy"></a>

### Chart.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Chart.CopyTo"></a>

### Chart.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Chart.CreateObjRef"></a>

### Chart.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Chart.CreateParameter"></a>

### Chart.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Cut"></a>

### Chart.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Delete"></a>

### Chart.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Duplicate"></a>

### Chart.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Equals"></a>

### Chart.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetAPIName"></a>

### Chart.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetAllProperties"></a>

### Chart.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetChildren"></a>

### Chart.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Chart.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetDetailsView"></a>

### Chart.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetEnumName"></a>

### Chart.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetHashCode"></a>

### Chart.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetIconFile"></a>

### Chart.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetLifetimeService"></a>

### Chart.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetObjectData"></a>

### Chart.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetParameter"></a>

### Chart.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetPath"></a>

### Chart.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetPropertyName"></a>

### Chart.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetPropertyValue"></a>

### Chart.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetVisibleProperties"></a>

### Chart.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GetVisiblePropertyNames"></a>

### Chart.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GroupAllSimilarChildren"></a>

### Chart.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Chart.GroupSimilarObjects"></a>

### Chart.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Chart.InitializeLifetimeService"></a>

### Chart.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Chart.IsPropertyEditable"></a>

### Chart.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Chart.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Chart.IsPropertyVisible"></a>

### Chart.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Chart.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Chart.Paste"></a>

### Chart.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Chart.PropertyByAPIName"></a>

### Chart.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Chart.PropertyById"></a>

### Chart.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Chart.PropertyByName"></a>

### Chart.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Chart.RemoveFromGroup"></a>

### Chart.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Chart.RemoveParameter"></a>

### Chart.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

