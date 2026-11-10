# `ReinforcingPly`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ReinforcingPly"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ReinforcingPly(internalObject: Any)

<a id="ReinforcingPly"></a>

### *class* ReinforcingPly(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

This class provides access to the reinforcing ply data that has been imported from an external upstream system of Ansys Composite Prep.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ReinforcingPly.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ReinforcingPly.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ReinforcingPly.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ReinforcingPly.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ReinforcingPly.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ReinforcingPly.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ReinforcingPly.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ReinforcingPly.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ReinforcingPly.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#ReinforcingPly.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ReinforcingPly.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ReinforcingPly.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ReinforcingPly.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ReinforcingPly.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ReinforcingPly.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ReinforcingPly.GetEnumName)                             |                                                                                             |
| [`GetHashCode`](#ReinforcingPly.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ReinforcingPly.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ReinforcingPly.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ReinforcingPly.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ReinforcingPly.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ReinforcingPly.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ReinforcingPly.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ReinforcingPly.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ReinforcingPly.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ReinforcingPly.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ReinforcingPly.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ReinforcingPly.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ReinforcingPly.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ReinforcingPly.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ReinforcingPly.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ReinforcingPly.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ReinforcingPly.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ReinforcingPly.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ReinforcingPly.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ReinforcingPly.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ReinforcingPly.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Angle`](#ReinforcingPly.Angle)                                       | Gets the Angle of the reinforcing ply.                                                                                                                                                                                                                       |
| [`AttachedRefs`](#ReinforcingPly.AttachedRefs)                         | AttachedRefs property.                                                                                                                                                                                                                                       |
| [`BaseMaterialHandling`](#ReinforcingPly.BaseMaterialHandling)         | Gets the BaseMaterialHandling of the reinforcing ply. This specifies whether the base-element material                                                                                                                                                       |
| [`Children`](#ReinforcingPly.Children)                                 | Gets the list of children.                                                                                                                                                                                                                                   |
| [`ClsId`](#ReinforcingPly.ClsId)                                       | ClsId property.                                                                                                                                                                                                                                              |
| [`Comments`](#ReinforcingPly.Comments)                                 | Gets the list of associated comments.                                                                                                                                                                                                                        |
| [`DataModelObjectCategory`](#ReinforcingPly.DataModelObjectCategory)   | Gets the current DataModelObject's category.                                                                                                                                                                                                                 |
| [`Figures`](#ReinforcingPly.Figures)                                   | Gets the list of associated figures.                                                                                                                                                                                                                         |
| [`GlobalID`](#ReinforcingPly.GlobalID)                                 | Gets the GlobalID assigned to the base MESH200 elements for the corresponding Reinforcing Ply. This ID is propagated to the reinforcing elements generated by the REINF command and can be used during post-processing to select those reinforcing elements. |
| [`GroupingFolder`](#ReinforcingPly.GroupingFolder)                     | GroupingFolder property.                                                                                                                                                                                                                                     |
| [`IDInSource`](#ReinforcingPly.IDInSource)                             | Gets the IDInSource as defined in the upstream ACP system.                                                                                                                                                                                                   |
| [`IconName`](#ReinforcingPly.IconName)                                 | IconName property.                                                                                                                                                                                                                                           |
| [`Images`](#ReinforcingPly.Images)                                     | Gets the list of associated images.                                                                                                                                                                                                                          |
| [`ImportableObjectSourceId`](#ReinforcingPly.ImportableObjectSourceId) | ImportableObjectSourceId property.                                                                                                                                                                                                                           |
| [`InternalObject`](#ReinforcingPly.InternalObject)                     | Gets the internal object. For advanced usage only.                                                                                                                                                                                                           |
| [`Material`](Material.md#Material)                                     | Gets the Material of the reinforcing ply.                                                                                                                                                                                                                    |
| [`Name`](#ReinforcingPly.Name)                                         | Name property.                                                                                                                                                                                                                                               |
| [`NameInSource`](#ReinforcingPly.NameInSource)                         | Gets the NameInSource as defined in the upstream ACP system.                                                                                                                                                                                                 |
| [`NumberOfElements`](#ReinforcingPly.NumberOfElements)                 | Gets the NumberOfElements of the reinforcing ply.                                                                                                                                                                                                            |
| [`NumberOfSections`](#ReinforcingPly.NumberOfSections)                 | Gets the NumberOfSections of the reinforcing ply.                                                                                                                                                                                                            |
| [`ObjectId`](#ReinforcingPly.ObjectId)                                 | ObjectId property.                                                                                                                                                                                                                                           |
| [`ObjectState`](#ReinforcingPly.ObjectState)                           | ObjectState property.                                                                                                                                                                                                                                        |
| [`ObjectTags`](#ReinforcingPly.ObjectTags)                             | ObjectTags property.                                                                                                                                                                                                                                         |
| [`Parent`](#ReinforcingPly.Parent)                                     | Parent property.                                                                                                                                                                                                                                             |
| [`Properties`](#ReinforcingPly.Properties)                             | Gets the list of properties for this object.                                                                                                                                                                                                                 |
| [`ReadOnly`](#ReinforcingPly.ReadOnly)                                 | Gets or sets the ReadOnly.                                                                                                                                                                                                                                   |
| [`ReinforcingBehavior`](#ReinforcingPly.ReinforcingBehavior)           | Gets the ReinforcingBehavior of the reinforcing ply.                                                                                                                                                                                                         |
| [`ReinforcingType`](#ReinforcingPly.ReinforcingType)                   | Gets the ReinforcingType of the reinforcing ply.                                                                                                                                                                                                             |
| [`State`](#ReinforcingPly.State)                                       | State property.                                                                                                                                                                                                                                              |
| [`StressState`](#ReinforcingPly.StressState)                           | Gets the StressState of the reinforcing ply.                                                                                                                                                                                                                 |
| [`Thickness`](Thickness.md#Thickness)                                  | Gets the Thickness of the reinforcing ply.                                                                                                                                                                                                                   |
| [`TransferableObjectId`](#ReinforcingPly.TransferableObjectId)         | TransferableObjectId property.                                                                                                                                                                                                                               |
| [`VisibleProperties`](#ReinforcingPly.VisibleProperties)               | Gets the list of properties that are visible for this object.                                                                                                                                                                                                |

<a id="property-detail"></a>

## Property detail

<a id="ReinforcingPly.Angle"></a>

### *property* ReinforcingPly.Angle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Angle of the reinforcing ply.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.AttachedRefs"></a>

### *property* ReinforcingPly.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.BaseMaterialHandling"></a>

### *property* ReinforcingPly.BaseMaterialHandling *: [Ansys.Mechanical.DataModel.Enums.ReinforcingBaseMaterialHandling](../../../Mechanical/DataModel/Enums/ReinforcingBaseMaterialHandling.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ReinforcingBaseMaterialHandling) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the BaseMaterialHandling of the reinforcing ply. This specifies whether the base-element material
: in the space occupied by the reinforcing fibers should be retained or removed.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Children"></a>

### *property* ReinforcingPly.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.ClsId"></a>

### *property* ReinforcingPly.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Comments"></a>

### *property* ReinforcingPly.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.DataModelObjectCategory"></a>

### *property* ReinforcingPly.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Figures"></a>

### *property* ReinforcingPly.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GlobalID"></a>

### *property* ReinforcingPly.GlobalID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the GlobalID assigned to the base MESH200 elements for the corresponding Reinforcing Ply. This ID is propagated to the reinforcing elements generated by the REINF command and can be used during post-processing to select those reinforcing elements.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GroupingFolder"></a>

### *property* ReinforcingPly.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.IDInSource"></a>

### *property* ReinforcingPly.IDInSource *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IDInSource as defined in the upstream ACP system.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.IconName"></a>

### *property* ReinforcingPly.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Images"></a>

### *property* ReinforcingPly.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.ImportableObjectSourceId"></a>

### *property* ReinforcingPly.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.InternalObject"></a>

### *property* ReinforcingPly.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSReinforcingPlyAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Material"></a>

### *property* ReinforcingPly.Material *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Material of the reinforcing ply.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Name"></a>

### *property* ReinforcingPly.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.NameInSource"></a>

### *property* ReinforcingPly.NameInSource *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NameInSource as defined in the upstream ACP system.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.NumberOfElements"></a>

### *property* ReinforcingPly.NumberOfElements *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfElements of the reinforcing ply.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.NumberOfSections"></a>

### *property* ReinforcingPly.NumberOfSections *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfSections of the reinforcing ply.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.ObjectId"></a>

### *property* ReinforcingPly.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.ObjectState"></a>

### *property* ReinforcingPly.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.ObjectTags"></a>

### *property* ReinforcingPly.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Parent"></a>

### *property* ReinforcingPly.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Properties"></a>

### *property* ReinforcingPly.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.ReadOnly"></a>

### *property* ReinforcingPly.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.ReinforcingBehavior"></a>

### *property* ReinforcingPly.ReinforcingBehavior *: [Ansys.Mechanical.DataModel.Enums.ReinforcingBehavior](../../../Mechanical/DataModel/Enums/ReinforcingBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ReinforcingBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReinforcingBehavior of the reinforcing ply.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.ReinforcingType"></a>

### *property* ReinforcingPly.ReinforcingType *: [Ansys.Mechanical.DataModel.Enums.ReinforcingType](../../../Mechanical/DataModel/Enums/ReinforcingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ReinforcingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReinforcingType of the reinforcing ply.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.State"></a>

### *property* ReinforcingPly.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.StressState"></a>

### *property* ReinforcingPly.StressState *: [Ansys.Mechanical.DataModel.Enums.ReinforcingStressState](../../../Mechanical/DataModel/Enums/ReinforcingStressState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ReinforcingStressState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the StressState of the reinforcing ply.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Thickness"></a>

### *property* ReinforcingPly.Thickness *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Thickness of the reinforcing ply.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.TransferableObjectId"></a>

### *property* ReinforcingPly.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.VisibleProperties"></a>

### *property* ReinforcingPly.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ReinforcingPly.Activate"></a>

### ReinforcingPly.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.AddComment"></a>

### ReinforcingPly.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.AddFigure"></a>

### ReinforcingPly.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.AddImage"></a>

### ReinforcingPly.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Copy"></a>

### ReinforcingPly.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.CopyTo"></a>

### ReinforcingPly.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.CreateObjRef"></a>

### ReinforcingPly.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.CreateParameter"></a>

### ReinforcingPly.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Cut"></a>

### ReinforcingPly.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Duplicate"></a>

### ReinforcingPly.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Equals"></a>

### ReinforcingPly.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GetAPIName"></a>

### ReinforcingPly.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GetAllProperties"></a>

### ReinforcingPly.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GetChildren"></a>

### ReinforcingPly.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ReinforcingPly.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GetDetailsView"></a>

### ReinforcingPly.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GetEnumName"></a>

### ReinforcingPly.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

<a id="ReinforcingPly.GetHashCode"></a>

### ReinforcingPly.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GetIconFile"></a>

### ReinforcingPly.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GetLifetimeService"></a>

### ReinforcingPly.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GetObjectData"></a>

### ReinforcingPly.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GetParameter"></a>

### ReinforcingPly.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GetPath"></a>

### ReinforcingPly.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GetPropertyName"></a>

### ReinforcingPly.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GetPropertyValue"></a>

### ReinforcingPly.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GetVisibleProperties"></a>

### ReinforcingPly.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GetVisiblePropertyNames"></a>

### ReinforcingPly.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GroupAllSimilarChildren"></a>

### ReinforcingPly.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.GroupSimilarObjects"></a>

### ReinforcingPly.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.InitializeLifetimeService"></a>

### ReinforcingPly.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.IsPropertyEditable"></a>

### ReinforcingPly.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ReinforcingPly.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.IsPropertyVisible"></a>

### ReinforcingPly.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ReinforcingPly.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.Paste"></a>

### ReinforcingPly.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.PropertyByAPIName"></a>

### ReinforcingPly.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.PropertyById"></a>

### ReinforcingPly.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.PropertyByName"></a>

### ReinforcingPly.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.RemoveFromGroup"></a>

### ReinforcingPly.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ReinforcingPly.RemoveParameter"></a>

### ReinforcingPly.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

