# `ImportedPlies`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedPlies"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedPlies(internalObject: Any)

<a id="ImportedPlies"></a>

### *class* ImportedPlies(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ImportedPlies.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedPlies.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ImportedPlies.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ImportedPlies.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ImportedPlies.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ImportedPlies.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ImportedPlies.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ImportedPlies.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ImportedPlies.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ImportedPlies.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#ImportedPlies.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ImportedPlies.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ImportedPlies.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ImportedPlies.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ImportedPlies.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ImportedPlies.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ImportedPlies.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ImportedPlies.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ImportedPlies.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ImportedPlies.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ImportedPlies.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ImportedPlies.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ImportedPlies.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ImportedPlies.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ImportedPlies.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ImportedPlies.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ImportedPlies.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ImportedPlies.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ImportedPlies.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ImportedPlies.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ImportedPlies.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ImportedPlies.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ImportedPlies.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ImportedPlies.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ImportedPlies.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ImportedPlies.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RegroupToDefault`](#ImportedPlies.RegroupToDefault)                   | Run the RegroupToDefault action.                                                            |
| [`RemoveFromGroup`](#ImportedPlies.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ImportedPlies.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ImportedPlies.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ImportedPlies.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ImportedPlies.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#ImportedPlies.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ImportedPlies.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#ImportedPlies.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ImportedPlies.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ImportedPlies.IconName)                               | IconName property.                                            |
| [`Images`](#ImportedPlies.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedPlies.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LayerToDisplay`](#ImportedPlies.LayerToDisplay)                   | Gets or sets the LayerToDisplay.                              |
| [`MaximumNumberOfLayers`](#ImportedPlies.MaximumNumberOfLayers)     | Gets the MaximumNumberOfLayers.                               |
| [`Name`](#ImportedPlies.Name)                                       | Name property.                                                |
| [`NonlinearEffects`](#ImportedPlies.NonlinearEffects)               | Gets or sets the NonlinearEffects.                            |
| [`ObjectId`](#ImportedPlies.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ImportedPlies.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ImportedPlies.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ImportedPlies.Parent)                                   | Parent property.                                              |
| [`Properties`](#ImportedPlies.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#ImportedPlies.State)                                     | State property.                                               |
| [`Suppressed`](#ImportedPlies.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`ThermalStrainEffects`](#ImportedPlies.ThermalStrainEffects)       | Gets or sets the ThermalStrainEffects.                        |
| [`Type`](#ImportedPlies.Type)                                       | Gets the Type.                                                |
| [`VisibleProperties`](#ImportedPlies.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedPlies.AttachedRefs"></a>

### *property* ImportedPlies.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Children"></a>

### *property* ImportedPlies.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.ClsId"></a>

### *property* ImportedPlies.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Comments"></a>

### *property* ImportedPlies.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.DataModelObjectCategory"></a>

### *property* ImportedPlies.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Figures"></a>

### *property* ImportedPlies.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GroupingFolder"></a>

### *property* ImportedPlies.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.IconName"></a>

### *property* ImportedPlies.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Images"></a>

### *property* ImportedPlies.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.InternalObject"></a>

### *property* ImportedPlies.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalEnhancedModelAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.LayerToDisplay"></a>

### *property* ImportedPlies.LayerToDisplay *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LayerToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.MaximumNumberOfLayers"></a>

### *property* ImportedPlies.MaximumNumberOfLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumNumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Name"></a>

### *property* ImportedPlies.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.NonlinearEffects"></a>

### *property* ImportedPlies.NonlinearEffects *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.ObjectId"></a>

### *property* ImportedPlies.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.ObjectState"></a>

### *property* ImportedPlies.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.ObjectTags"></a>

### *property* ImportedPlies.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Parent"></a>

### *property* ImportedPlies.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Properties"></a>

### *property* ImportedPlies.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.State"></a>

### *property* ImportedPlies.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Suppressed"></a>

### *property* ImportedPlies.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.ThermalStrainEffects"></a>

### *property* ImportedPlies.ThermalStrainEffects *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Type"></a>

### *property* ImportedPlies.Type *: [Ansys.Mechanical.DataModel.Enums.ExternalEnhancedModelType](../../../Mechanical/DataModel/Enums/ExternalEnhancedModelType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExternalEnhancedModelType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.VisibleProperties"></a>

### *property* ImportedPlies.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedPlies.Activate"></a>

### ImportedPlies.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.AddComment"></a>

### ImportedPlies.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.AddFigure"></a>

### ImportedPlies.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.AddImage"></a>

### ImportedPlies.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Copy"></a>

### ImportedPlies.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.CopyTo"></a>

### ImportedPlies.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.CreateObjRef"></a>

### ImportedPlies.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.CreateParameter"></a>

### ImportedPlies.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Cut"></a>

### ImportedPlies.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Duplicate"></a>

### ImportedPlies.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Equals"></a>

### ImportedPlies.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GetAPIName"></a>

### ImportedPlies.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GetAllProperties"></a>

### ImportedPlies.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GetChildren"></a>

### ImportedPlies.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ImportedPlies.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GetDetailsView"></a>

### ImportedPlies.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GetEnumName"></a>

### ImportedPlies.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GetHashCode"></a>

### ImportedPlies.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GetIconFile"></a>

### ImportedPlies.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GetLifetimeService"></a>

### ImportedPlies.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GetObjectData"></a>

### ImportedPlies.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GetParameter"></a>

### ImportedPlies.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GetPath"></a>

### ImportedPlies.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GetPropertyName"></a>

### ImportedPlies.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GetPropertyValue"></a>

### ImportedPlies.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GetVisibleProperties"></a>

### ImportedPlies.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GetVisiblePropertyNames"></a>

### ImportedPlies.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GroupAllSimilarChildren"></a>

### ImportedPlies.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.GroupSimilarObjects"></a>

### ImportedPlies.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.InitializeLifetimeService"></a>

### ImportedPlies.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.IsPropertyEditable"></a>

### ImportedPlies.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedPlies.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.IsPropertyVisible"></a>

### ImportedPlies.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedPlies.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.Paste"></a>

### ImportedPlies.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.PropertyByAPIName"></a>

### ImportedPlies.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.PropertyById"></a>

### ImportedPlies.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.PropertyByName"></a>

### ImportedPlies.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.RegroupToDefault"></a>

### ImportedPlies.RegroupToDefault() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RegroupToDefault action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.RemoveFromGroup"></a>

### ImportedPlies.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPlies.RemoveParameter"></a>

### ImportedPlies.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

