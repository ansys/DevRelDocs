# `ImportedLayeredSection`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedLayeredSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLayeredSection(internalObject: Any)

<a id="ImportedLayeredSection"></a>

### *class* ImportedLayeredSection(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ImportedLayeredSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedLayeredSection.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ImportedLayeredSection.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ImportedLayeredSection.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ImportedLayeredSection.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ImportedLayeredSection.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ImportedLayeredSection.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ImportedLayeredSection.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ImportedLayeredSection.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ImportedLayeredSection.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#ImportedLayeredSection.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ImportedLayeredSection.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ImportedLayeredSection.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ImportedLayeredSection.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ImportedLayeredSection.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ImportedLayeredSection.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ImportedLayeredSection.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ImportedLayeredSection.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ImportedLayeredSection.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ImportedLayeredSection.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ImportedLayeredSection.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ImportedLayeredSection.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ImportedLayeredSection.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ImportedLayeredSection.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ImportedLayeredSection.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ImportedLayeredSection.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ImportedLayeredSection.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ImportedLayeredSection.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ImportedLayeredSection.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ImportedLayeredSection.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ImportedLayeredSection.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ImportedLayeredSection.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ImportedLayeredSection.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ImportedLayeredSection.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ImportedLayeredSection.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ImportedLayeredSection.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RegroupToDefault`](#ImportedLayeredSection.RegroupToDefault)                   | Run the RegroupToDefault action.                                                            |
| [`RemoveFromGroup`](#ImportedLayeredSection.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ImportedLayeredSection.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ImportedLayeredSection.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ImportedLayeredSection.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ImportedLayeredSection.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#ImportedLayeredSection.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ImportedLayeredSection.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#ImportedLayeredSection.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ImportedLayeredSection.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ImportedLayeredSection.IconName)                               | IconName property.                                            |
| [`Images`](#ImportedLayeredSection.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedLayeredSection.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LayerToDisplay`](#ImportedLayeredSection.LayerToDisplay)                   | Gets or sets the LayerToDisplay.                              |
| [`MaximumNumberOfLayers`](#ImportedLayeredSection.MaximumNumberOfLayers)     | Gets the MaximumNumberOfLayers.                               |
| [`Name`](#ImportedLayeredSection.Name)                                       | Name property.                                                |
| [`NonlinearEffects`](#ImportedLayeredSection.NonlinearEffects)               | Gets or sets the NonlinearEffects.                            |
| [`ObjectId`](#ImportedLayeredSection.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ImportedLayeredSection.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ImportedLayeredSection.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ImportedLayeredSection.Parent)                                   | Parent property.                                              |
| [`Properties`](#ImportedLayeredSection.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#ImportedLayeredSection.State)                                     | State property.                                               |
| [`Suppressed`](#ImportedLayeredSection.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`ThermalStrainEffects`](#ImportedLayeredSection.ThermalStrainEffects)       | Gets or sets the ThermalStrainEffects.                        |
| [`Type`](#ImportedLayeredSection.Type)                                       | Gets the Type.                                                |
| [`VisibleProperties`](#ImportedLayeredSection.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedLayeredSection.AttachedRefs"></a>

### *property* ImportedLayeredSection.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Children"></a>

### *property* ImportedLayeredSection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.ClsId"></a>

### *property* ImportedLayeredSection.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Comments"></a>

### *property* ImportedLayeredSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.DataModelObjectCategory"></a>

### *property* ImportedLayeredSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Figures"></a>

### *property* ImportedLayeredSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GroupingFolder"></a>

### *property* ImportedLayeredSection.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.IconName"></a>

### *property* ImportedLayeredSection.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Images"></a>

### *property* ImportedLayeredSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.InternalObject"></a>

### *property* ImportedLayeredSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalEnhancedModelAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.LayerToDisplay"></a>

### *property* ImportedLayeredSection.LayerToDisplay *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LayerToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.MaximumNumberOfLayers"></a>

### *property* ImportedLayeredSection.MaximumNumberOfLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumNumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Name"></a>

### *property* ImportedLayeredSection.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.NonlinearEffects"></a>

### *property* ImportedLayeredSection.NonlinearEffects *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.ObjectId"></a>

### *property* ImportedLayeredSection.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.ObjectState"></a>

### *property* ImportedLayeredSection.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.ObjectTags"></a>

### *property* ImportedLayeredSection.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Parent"></a>

### *property* ImportedLayeredSection.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Properties"></a>

### *property* ImportedLayeredSection.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.State"></a>

### *property* ImportedLayeredSection.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Suppressed"></a>

### *property* ImportedLayeredSection.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.ThermalStrainEffects"></a>

### *property* ImportedLayeredSection.ThermalStrainEffects *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Type"></a>

### *property* ImportedLayeredSection.Type *: [Ansys.Mechanical.DataModel.Enums.ExternalEnhancedModelType](../../../Mechanical/DataModel/Enums/ExternalEnhancedModelType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExternalEnhancedModelType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.VisibleProperties"></a>

### *property* ImportedLayeredSection.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedLayeredSection.Activate"></a>

### ImportedLayeredSection.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.AddComment"></a>

### ImportedLayeredSection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.AddFigure"></a>

### ImportedLayeredSection.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.AddImage"></a>

### ImportedLayeredSection.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Copy"></a>

### ImportedLayeredSection.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.CopyTo"></a>

### ImportedLayeredSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.CreateObjRef"></a>

### ImportedLayeredSection.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.CreateParameter"></a>

### ImportedLayeredSection.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Cut"></a>

### ImportedLayeredSection.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Duplicate"></a>

### ImportedLayeredSection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Equals"></a>

### ImportedLayeredSection.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GetAPIName"></a>

### ImportedLayeredSection.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GetAllProperties"></a>

### ImportedLayeredSection.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GetChildren"></a>

### ImportedLayeredSection.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ImportedLayeredSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GetDetailsView"></a>

### ImportedLayeredSection.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GetEnumName"></a>

### ImportedLayeredSection.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GetHashCode"></a>

### ImportedLayeredSection.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GetIconFile"></a>

### ImportedLayeredSection.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GetLifetimeService"></a>

### ImportedLayeredSection.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GetObjectData"></a>

### ImportedLayeredSection.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GetParameter"></a>

### ImportedLayeredSection.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GetPath"></a>

### ImportedLayeredSection.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GetPropertyName"></a>

### ImportedLayeredSection.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GetPropertyValue"></a>

### ImportedLayeredSection.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GetVisibleProperties"></a>

### ImportedLayeredSection.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GetVisiblePropertyNames"></a>

### ImportedLayeredSection.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GroupAllSimilarChildren"></a>

### ImportedLayeredSection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.GroupSimilarObjects"></a>

### ImportedLayeredSection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.InitializeLifetimeService"></a>

### ImportedLayeredSection.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.IsPropertyEditable"></a>

### ImportedLayeredSection.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedLayeredSection.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.IsPropertyVisible"></a>

### ImportedLayeredSection.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedLayeredSection.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.Paste"></a>

### ImportedLayeredSection.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.PropertyByAPIName"></a>

### ImportedLayeredSection.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.PropertyById"></a>

### ImportedLayeredSection.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.PropertyByName"></a>

### ImportedLayeredSection.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.RegroupToDefault"></a>

### ImportedLayeredSection.RegroupToDefault() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RegroupToDefault action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.RemoveFromGroup"></a>

### ImportedLayeredSection.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLayeredSection.RemoveParameter"></a>

### ImportedLayeredSection.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

