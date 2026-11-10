# `ResponsePSDTool`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ResponsePSDTool"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ResponsePSDTool(internalObject: Any)

<a id="ResponsePSDTool"></a>

### *class* ResponsePSDTool(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ResponsePSDTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ResponsePSDTool.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ResponsePSDTool.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ResponsePSDTool.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ResponsePSDTool.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddResponsePSD`](#ResponsePSDTool.AddResponsePSD)                       | Creates a new ResponsePSD                                                                   |
| [`Copy`](#ResponsePSDTool.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ResponsePSDTool.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ResponsePSDTool.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ResponsePSDTool.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ResponsePSDTool.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ResponsePSDTool.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ResponsePSDTool.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ResponsePSDTool.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#ResponsePSDTool.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`GetAPIName`](#ResponsePSDTool.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ResponsePSDTool.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ResponsePSDTool.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ResponsePSDTool.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ResponsePSDTool.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ResponsePSDTool.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ResponsePSDTool.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ResponsePSDTool.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ResponsePSDTool.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ResponsePSDTool.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ResponsePSDTool.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ResponsePSDTool.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ResponsePSDTool.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ResponsePSDTool.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ResponsePSDTool.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ResponsePSDTool.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ResponsePSDTool.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ResponsePSDTool.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ResponsePSDTool.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ResponsePSDTool.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ResponsePSDTool.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ResponsePSDTool.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ResponsePSDTool.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ResponsePSDTool.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ResponsePSDTool.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ResponsePSDTool.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ResponsePSDTool.AttachedRefs)                                       | AttachedRefs property.                                        |
| [`Children`](#ResponsePSDTool.Children)                                               | Gets the list of children.                                    |
| [`ClsId`](#ResponsePSDTool.ClsId)                                                     | ClsId property.                                               |
| [`ClusteringFrequencyPoints`](#ResponsePSDTool.ClusteringFrequencyPoints)             | Gets or sets the ClusteringFrequencyPoints.                   |
| [`Comments`](#ResponsePSDTool.Comments)                                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ResponsePSDTool.DataModelObjectCategory)                 | Gets the current DataModelObject's category.                  |
| [`Figures`](#ResponsePSDTool.Figures)                                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ResponsePSDTool.GroupingFolder)                                   | GroupingFolder property.                                      |
| [`IconName`](#ResponsePSDTool.IconName)                                               | IconName property.                                            |
| [`Images`](#ResponsePSDTool.Images)                                                   | Gets the list of associated images.                           |
| [`IncludeAllExcitationFrequencies`](#ResponsePSDTool.IncludeAllExcitationFrequencies) | Gets or sets the IncludeAllExcitationFrequencies.             |
| [`IncludeUserDefinedFrequencies`](#ResponsePSDTool.IncludeUserDefinedFrequencies)     | Gets or sets the IncludeUserDefinedFrequencies.               |
| [`InternalObject`](#ResponsePSDTool.InternalObject)                                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#ResponsePSDTool.Name)                                                       | Name property.                                                |
| [`ObjectId`](#ResponsePSDTool.ObjectId)                                               | ObjectId property.                                            |
| [`ObjectState`](#ResponsePSDTool.ObjectState)                                         | ObjectState property.                                         |
| [`ObjectTags`](#ResponsePSDTool.ObjectTags)                                           | ObjectTags property.                                          |
| [`Parent`](#ResponsePSDTool.Parent)                                                   | Parent property.                                              |
| [`Properties`](#ResponsePSDTool.Properties)                                           | Gets the list of properties for this object.                  |
| [`State`](#ResponsePSDTool.State)                                                     | State property.                                               |
| [`VisibleProperties`](#ResponsePSDTool.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ResponsePSDTool.AttachedRefs"></a>

### *property* ResponsePSDTool.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Children"></a>

### *property* ResponsePSDTool.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.ClsId"></a>

### *property* ResponsePSDTool.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.ClusteringFrequencyPoints"></a>

### *property* ResponsePSDTool.ClusteringFrequencyPoints *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ClusteringFrequencyPoints.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Comments"></a>

### *property* ResponsePSDTool.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.DataModelObjectCategory"></a>

### *property* ResponsePSDTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Figures"></a>

### *property* ResponsePSDTool.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GroupingFolder"></a>

### *property* ResponsePSDTool.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.IconName"></a>

### *property* ResponsePSDTool.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Images"></a>

### *property* ResponsePSDTool.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.IncludeAllExcitationFrequencies"></a>

### *property* ResponsePSDTool.IncludeAllExcitationFrequencies *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IncludeAllExcitationFrequencies.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.IncludeUserDefinedFrequencies"></a>

### *property* ResponsePSDTool.IncludeUserDefinedFrequencies *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IncludeUserDefinedFrequencies.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.InternalObject"></a>

### *property* ResponsePSDTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResponsePSDToolAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Name"></a>

### *property* ResponsePSDTool.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.ObjectId"></a>

### *property* ResponsePSDTool.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.ObjectState"></a>

### *property* ResponsePSDTool.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.ObjectTags"></a>

### *property* ResponsePSDTool.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Parent"></a>

### *property* ResponsePSDTool.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Properties"></a>

### *property* ResponsePSDTool.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.State"></a>

### *property* ResponsePSDTool.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.VisibleProperties"></a>

### *property* ResponsePSDTool.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ResponsePSDTool.Activate"></a>

### ResponsePSDTool.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.AddComment"></a>

### ResponsePSDTool.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.AddFigure"></a>

### ResponsePSDTool.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.AddImage"></a>

### ResponsePSDTool.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.AddResponsePSD"></a>

### ResponsePSDTool.AddResponsePSD() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ResponsePSD](Results/ProbeResults/ResponsePSD.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ResponsePSD)

Creates a new ResponsePSD

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Copy"></a>

### ResponsePSDTool.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.CopyTo"></a>

### ResponsePSDTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.CreateObjRef"></a>

### ResponsePSDTool.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.CreateParameter"></a>

### ResponsePSDTool.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Cut"></a>

### ResponsePSDTool.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Delete"></a>

### ResponsePSDTool.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Duplicate"></a>

### ResponsePSDTool.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Equals"></a>

### ResponsePSDTool.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.EvaluateAllResults"></a>

### ResponsePSDTool.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GetAPIName"></a>

### ResponsePSDTool.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GetAllProperties"></a>

### ResponsePSDTool.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GetChildren"></a>

### ResponsePSDTool.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ResponsePSDTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GetDetailsView"></a>

### ResponsePSDTool.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GetEnumName"></a>

### ResponsePSDTool.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GetHashCode"></a>

### ResponsePSDTool.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GetIconFile"></a>

### ResponsePSDTool.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GetLifetimeService"></a>

### ResponsePSDTool.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GetObjectData"></a>

### ResponsePSDTool.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GetParameter"></a>

### ResponsePSDTool.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GetPath"></a>

### ResponsePSDTool.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GetPropertyName"></a>

### ResponsePSDTool.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GetPropertyValue"></a>

### ResponsePSDTool.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GetVisibleProperties"></a>

### ResponsePSDTool.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GetVisiblePropertyNames"></a>

### ResponsePSDTool.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GroupAllSimilarChildren"></a>

### ResponsePSDTool.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GroupSimilarObjects"></a>

### ResponsePSDTool.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.InitializeLifetimeService"></a>

### ResponsePSDTool.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.IsPropertyEditable"></a>

### ResponsePSDTool.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ResponsePSDTool.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.IsPropertyVisible"></a>

### ResponsePSDTool.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ResponsePSDTool.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Paste"></a>

### ResponsePSDTool.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.PropertyByAPIName"></a>

### ResponsePSDTool.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.PropertyById"></a>

### ResponsePSDTool.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.PropertyByName"></a>

### ResponsePSDTool.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.RemoveFromGroup"></a>

### ResponsePSDTool.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.RemoveParameter"></a>

### ResponsePSDTool.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

