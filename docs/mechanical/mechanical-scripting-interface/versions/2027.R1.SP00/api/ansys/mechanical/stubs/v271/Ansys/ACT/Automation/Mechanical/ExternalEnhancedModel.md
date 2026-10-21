# `ExternalEnhancedModel`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ExternalEnhancedModel"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ExternalEnhancedModel(internalObject: Any)

<a id="ExternalEnhancedModel"></a>

### *class* ExternalEnhancedModel(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ExternalEnhancedModel.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ExternalEnhancedModel.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ExternalEnhancedModel.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ExternalEnhancedModel.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ExternalEnhancedModel.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ExternalEnhancedModel.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ExternalEnhancedModel.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ExternalEnhancedModel.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ExternalEnhancedModel.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ExternalEnhancedModel.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#ExternalEnhancedModel.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ExternalEnhancedModel.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ExternalEnhancedModel.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ExternalEnhancedModel.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ExternalEnhancedModel.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ExternalEnhancedModel.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ExternalEnhancedModel.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ExternalEnhancedModel.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ExternalEnhancedModel.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ExternalEnhancedModel.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ExternalEnhancedModel.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ExternalEnhancedModel.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ExternalEnhancedModel.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ExternalEnhancedModel.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ExternalEnhancedModel.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ExternalEnhancedModel.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ExternalEnhancedModel.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ExternalEnhancedModel.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ExternalEnhancedModel.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ExternalEnhancedModel.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ExternalEnhancedModel.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ExternalEnhancedModel.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ExternalEnhancedModel.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ExternalEnhancedModel.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ExternalEnhancedModel.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ExternalEnhancedModel.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RegroupToDefault`](#ExternalEnhancedModel.RegroupToDefault)                   | Run the RegroupToDefault action.                                                            |
| [`RemoveFromGroup`](#ExternalEnhancedModel.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ExternalEnhancedModel.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ExternalEnhancedModel.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ExternalEnhancedModel.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ExternalEnhancedModel.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#ExternalEnhancedModel.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ExternalEnhancedModel.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#ExternalEnhancedModel.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ExternalEnhancedModel.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ExternalEnhancedModel.IconName)                               | IconName property.                                            |
| [`Images`](#ExternalEnhancedModel.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ExternalEnhancedModel.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LayerToDisplay`](#ExternalEnhancedModel.LayerToDisplay)                   | Gets or sets the LayerToDisplay.                              |
| [`MaximumNumberOfLayers`](#ExternalEnhancedModel.MaximumNumberOfLayers)     | Gets the MaximumNumberOfLayers.                               |
| [`Name`](#ExternalEnhancedModel.Name)                                       | Name property.                                                |
| [`NonlinearEffects`](#ExternalEnhancedModel.NonlinearEffects)               | Gets or sets the NonlinearEffects.                            |
| [`ObjectId`](#ExternalEnhancedModel.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ExternalEnhancedModel.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ExternalEnhancedModel.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ExternalEnhancedModel.Parent)                                   | Parent property.                                              |
| [`Properties`](#ExternalEnhancedModel.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#ExternalEnhancedModel.State)                                     | State property.                                               |
| [`Suppressed`](#ExternalEnhancedModel.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`ThermalStrainEffects`](#ExternalEnhancedModel.ThermalStrainEffects)       | Gets or sets the ThermalStrainEffects.                        |
| [`Type`](#ExternalEnhancedModel.Type)                                       | Gets the Type.                                                |
| [`VisibleProperties`](#ExternalEnhancedModel.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ExternalEnhancedModel.AttachedRefs"></a>

### *property* ExternalEnhancedModel.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Children"></a>

### *property* ExternalEnhancedModel.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.ClsId"></a>

### *property* ExternalEnhancedModel.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Comments"></a>

### *property* ExternalEnhancedModel.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.DataModelObjectCategory"></a>

### *property* ExternalEnhancedModel.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Figures"></a>

### *property* ExternalEnhancedModel.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GroupingFolder"></a>

### *property* ExternalEnhancedModel.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.IconName"></a>

### *property* ExternalEnhancedModel.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Images"></a>

### *property* ExternalEnhancedModel.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.InternalObject"></a>

### *property* ExternalEnhancedModel.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalEnhancedModelAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.LayerToDisplay"></a>

### *property* ExternalEnhancedModel.LayerToDisplay *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LayerToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.MaximumNumberOfLayers"></a>

### *property* ExternalEnhancedModel.MaximumNumberOfLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumNumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Name"></a>

### *property* ExternalEnhancedModel.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.NonlinearEffects"></a>

### *property* ExternalEnhancedModel.NonlinearEffects *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.ObjectId"></a>

### *property* ExternalEnhancedModel.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.ObjectState"></a>

### *property* ExternalEnhancedModel.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.ObjectTags"></a>

### *property* ExternalEnhancedModel.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Parent"></a>

### *property* ExternalEnhancedModel.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Properties"></a>

### *property* ExternalEnhancedModel.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.State"></a>

### *property* ExternalEnhancedModel.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Suppressed"></a>

### *property* ExternalEnhancedModel.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.ThermalStrainEffects"></a>

### *property* ExternalEnhancedModel.ThermalStrainEffects *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Type"></a>

### *property* ExternalEnhancedModel.Type *: [Ansys.Mechanical.DataModel.Enums.ExternalEnhancedModelType](../../../Mechanical/DataModel/Enums/ExternalEnhancedModelType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExternalEnhancedModelType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.VisibleProperties"></a>

### *property* ExternalEnhancedModel.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ExternalEnhancedModel.Activate"></a>

### ExternalEnhancedModel.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.AddComment"></a>

### ExternalEnhancedModel.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.AddFigure"></a>

### ExternalEnhancedModel.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.AddImage"></a>

### ExternalEnhancedModel.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Copy"></a>

### ExternalEnhancedModel.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.CopyTo"></a>

### ExternalEnhancedModel.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.CreateObjRef"></a>

### ExternalEnhancedModel.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.CreateParameter"></a>

### ExternalEnhancedModel.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Cut"></a>

### ExternalEnhancedModel.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Duplicate"></a>

### ExternalEnhancedModel.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Equals"></a>

### ExternalEnhancedModel.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GetAPIName"></a>

### ExternalEnhancedModel.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GetAllProperties"></a>

### ExternalEnhancedModel.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GetChildren"></a>

### ExternalEnhancedModel.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ExternalEnhancedModel.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GetDetailsView"></a>

### ExternalEnhancedModel.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GetEnumName"></a>

### ExternalEnhancedModel.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GetHashCode"></a>

### ExternalEnhancedModel.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GetIconFile"></a>

### ExternalEnhancedModel.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GetLifetimeService"></a>

### ExternalEnhancedModel.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GetObjectData"></a>

### ExternalEnhancedModel.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GetParameter"></a>

### ExternalEnhancedModel.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GetPath"></a>

### ExternalEnhancedModel.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GetPropertyName"></a>

### ExternalEnhancedModel.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GetPropertyValue"></a>

### ExternalEnhancedModel.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GetVisibleProperties"></a>

### ExternalEnhancedModel.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GetVisiblePropertyNames"></a>

### ExternalEnhancedModel.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GroupAllSimilarChildren"></a>

### ExternalEnhancedModel.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GroupSimilarObjects"></a>

### ExternalEnhancedModel.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.InitializeLifetimeService"></a>

### ExternalEnhancedModel.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.IsPropertyEditable"></a>

### ExternalEnhancedModel.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ExternalEnhancedModel.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.IsPropertyVisible"></a>

### ExternalEnhancedModel.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ExternalEnhancedModel.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Paste"></a>

### ExternalEnhancedModel.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.PropertyByAPIName"></a>

### ExternalEnhancedModel.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.PropertyById"></a>

### ExternalEnhancedModel.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.PropertyByName"></a>

### ExternalEnhancedModel.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.RegroupToDefault"></a>

### ExternalEnhancedModel.RegroupToDefault() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RegroupToDefault action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.RemoveFromGroup"></a>

### ExternalEnhancedModel.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.RemoveParameter"></a>

### ExternalEnhancedModel.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

