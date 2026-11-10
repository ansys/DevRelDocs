# `ImportedReinforcements`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedReinforcements"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedReinforcements(internalObject: Any)

<a id="ImportedReinforcements"></a>

### *class* ImportedReinforcements(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ImportedReinforcements.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedReinforcements.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ImportedReinforcements.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ImportedReinforcements.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ImportedReinforcements.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ImportedReinforcements.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ImportedReinforcements.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ImportedReinforcements.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ImportedReinforcements.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ImportedReinforcements.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#ImportedReinforcements.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ImportedReinforcements.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ImportedReinforcements.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ImportedReinforcements.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ImportedReinforcements.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ImportedReinforcements.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ImportedReinforcements.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ImportedReinforcements.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ImportedReinforcements.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ImportedReinforcements.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ImportedReinforcements.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ImportedReinforcements.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ImportedReinforcements.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ImportedReinforcements.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ImportedReinforcements.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ImportedReinforcements.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ImportedReinforcements.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ImportedReinforcements.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ImportedReinforcements.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ImportedReinforcements.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ImportedReinforcements.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ImportedReinforcements.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ImportedReinforcements.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ImportedReinforcements.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ImportedReinforcements.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ImportedReinforcements.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RegroupToDefault`](#ImportedReinforcements.RegroupToDefault)                   | Run the RegroupToDefault action.                                                            |
| [`RemoveFromGroup`](#ImportedReinforcements.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ImportedReinforcements.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ImportedReinforcements.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ImportedReinforcements.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ImportedReinforcements.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#ImportedReinforcements.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ImportedReinforcements.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#ImportedReinforcements.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ImportedReinforcements.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ImportedReinforcements.IconName)                               | IconName property.                                            |
| [`Images`](#ImportedReinforcements.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedReinforcements.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LayerToDisplay`](#ImportedReinforcements.LayerToDisplay)                   | Gets or sets the LayerToDisplay.                              |
| [`MaximumNumberOfLayers`](#ImportedReinforcements.MaximumNumberOfLayers)     | Gets the MaximumNumberOfLayers.                               |
| [`Name`](#ImportedReinforcements.Name)                                       | Name property.                                                |
| [`NonlinearEffects`](#ImportedReinforcements.NonlinearEffects)               | Gets or sets the NonlinearEffects.                            |
| [`ObjectId`](#ImportedReinforcements.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ImportedReinforcements.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ImportedReinforcements.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ImportedReinforcements.Parent)                                   | Parent property.                                              |
| [`Properties`](#ImportedReinforcements.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#ImportedReinforcements.State)                                     | State property.                                               |
| [`Suppressed`](#ImportedReinforcements.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`ThermalStrainEffects`](#ImportedReinforcements.ThermalStrainEffects)       | Gets or sets the ThermalStrainEffects.                        |
| [`Type`](#ImportedReinforcements.Type)                                       | Gets the Type.                                                |
| [`VisibleProperties`](#ImportedReinforcements.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedReinforcements.AttachedRefs"></a>

### *property* ImportedReinforcements.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Children"></a>

### *property* ImportedReinforcements.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.ClsId"></a>

### *property* ImportedReinforcements.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Comments"></a>

### *property* ImportedReinforcements.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.DataModelObjectCategory"></a>

### *property* ImportedReinforcements.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Figures"></a>

### *property* ImportedReinforcements.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GroupingFolder"></a>

### *property* ImportedReinforcements.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.IconName"></a>

### *property* ImportedReinforcements.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Images"></a>

### *property* ImportedReinforcements.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.InternalObject"></a>

### *property* ImportedReinforcements.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalEnhancedModelAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.LayerToDisplay"></a>

### *property* ImportedReinforcements.LayerToDisplay *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LayerToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.MaximumNumberOfLayers"></a>

### *property* ImportedReinforcements.MaximumNumberOfLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumNumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Name"></a>

### *property* ImportedReinforcements.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.NonlinearEffects"></a>

### *property* ImportedReinforcements.NonlinearEffects *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.ObjectId"></a>

### *property* ImportedReinforcements.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.ObjectState"></a>

### *property* ImportedReinforcements.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.ObjectTags"></a>

### *property* ImportedReinforcements.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Parent"></a>

### *property* ImportedReinforcements.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Properties"></a>

### *property* ImportedReinforcements.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.State"></a>

### *property* ImportedReinforcements.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Suppressed"></a>

### *property* ImportedReinforcements.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.ThermalStrainEffects"></a>

### *property* ImportedReinforcements.ThermalStrainEffects *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Type"></a>

### *property* ImportedReinforcements.Type *: [Ansys.Mechanical.DataModel.Enums.ExternalEnhancedModelType](../../../Mechanical/DataModel/Enums/ExternalEnhancedModelType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExternalEnhancedModelType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.VisibleProperties"></a>

### *property* ImportedReinforcements.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedReinforcements.Activate"></a>

### ImportedReinforcements.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.AddComment"></a>

### ImportedReinforcements.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.AddFigure"></a>

### ImportedReinforcements.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.AddImage"></a>

### ImportedReinforcements.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Copy"></a>

### ImportedReinforcements.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.CopyTo"></a>

### ImportedReinforcements.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.CreateObjRef"></a>

### ImportedReinforcements.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.CreateParameter"></a>

### ImportedReinforcements.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Cut"></a>

### ImportedReinforcements.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Duplicate"></a>

### ImportedReinforcements.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Equals"></a>

### ImportedReinforcements.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GetAPIName"></a>

### ImportedReinforcements.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GetAllProperties"></a>

### ImportedReinforcements.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GetChildren"></a>

### ImportedReinforcements.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ImportedReinforcements.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GetDetailsView"></a>

### ImportedReinforcements.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GetEnumName"></a>

### ImportedReinforcements.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GetHashCode"></a>

### ImportedReinforcements.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GetIconFile"></a>

### ImportedReinforcements.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GetLifetimeService"></a>

### ImportedReinforcements.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GetObjectData"></a>

### ImportedReinforcements.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GetParameter"></a>

### ImportedReinforcements.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GetPath"></a>

### ImportedReinforcements.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GetPropertyName"></a>

### ImportedReinforcements.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GetPropertyValue"></a>

### ImportedReinforcements.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GetVisibleProperties"></a>

### ImportedReinforcements.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GetVisiblePropertyNames"></a>

### ImportedReinforcements.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GroupAllSimilarChildren"></a>

### ImportedReinforcements.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.GroupSimilarObjects"></a>

### ImportedReinforcements.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.InitializeLifetimeService"></a>

### ImportedReinforcements.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.IsPropertyEditable"></a>

### ImportedReinforcements.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedReinforcements.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.IsPropertyVisible"></a>

### ImportedReinforcements.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedReinforcements.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.Paste"></a>

### ImportedReinforcements.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.PropertyByAPIName"></a>

### ImportedReinforcements.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.PropertyById"></a>

### ImportedReinforcements.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.PropertyByName"></a>

### ImportedReinforcements.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.RegroupToDefault"></a>

### ImportedReinforcements.RegroupToDefault() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RegroupToDefault action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.RemoveFromGroup"></a>

### ImportedReinforcements.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ImportedReinforcements.RemoveParameter"></a>

### ImportedReinforcements.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

