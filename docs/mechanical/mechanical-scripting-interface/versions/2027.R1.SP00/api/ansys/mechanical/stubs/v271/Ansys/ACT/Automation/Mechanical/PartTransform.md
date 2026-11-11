# `PartTransform`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PartTransform"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PartTransform(internalObject: Any)

<a id="PartTransform"></a>

### *class* PartTransform(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PartTransform.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PartTransform.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#PartTransform.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#PartTransform.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#PartTransform.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#PartTransform.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PartTransform.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PartTransform.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PartTransform.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PartTransform.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PartTransform.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#PartTransform.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PartTransform.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#PartTransform.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PartTransform.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#PartTransform.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PartTransform.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PartTransform.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PartTransform.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PartTransform.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PartTransform.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PartTransform.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PartTransform.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PartTransform.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PartTransform.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PartTransform.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PartTransform.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PartTransform.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PartTransform.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PartTransform.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PartTransform.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PartTransform.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PartTransform.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PartTransform.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#PartTransform.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PartTransform.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PartTransform.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PartTransform.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PartTransform.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`TransformGeometry`](#PartTransform.TransformGeometry)                 | TransformGeometry method.                                                                   |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#PartTransform.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#PartTransform.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#PartTransform.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#PartTransform.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)          | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#PartTransform.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`DefineBy`](#PartTransform.DefineBy)                               | Gets or sets the DefineBy.                                    |
| [`Figures`](#PartTransform.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#PartTransform.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#PartTransform.IconName)                               | IconName property.                                            |
| [`Images`](#PartTransform.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#PartTransform.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#PartTransform.Location)                               | Gets or sets the Location.                                    |
| [`Name`](#PartTransform.Name)                                       | Name property.                                                |
| [`ObjectId`](#PartTransform.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#PartTransform.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#PartTransform.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#PartTransform.Parent)                                   | Parent property.                                              |
| [`Parts`](#PartTransform.Parts)                                     | Gets or sets the OutlineSelection.                            |
| [`Properties`](#PartTransform.Properties)                           | Gets the list of properties for this object.                  |
| [`RawTransformMKS`](#PartTransform.RawTransformMKS)                 | RawTransformMKS property.                                     |
| [`RotationX`](#PartTransform.RotationX)                             | Gets or sets the RotationX.                                   |
| [`RotationY`](#PartTransform.RotationY)                             | Gets or sets the RotationY.                                   |
| [`RotationZ`](#PartTransform.RotationZ)                             | Gets or sets the RotationZ.                                   |
| [`ScopingMethod`](#PartTransform.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`SourceCoordinateSystem`](#PartTransform.SourceCoordinateSystem)   | Gets or sets the SourceCoordinateSystem.                      |
| [`State`](#PartTransform.State)                                     | State property.                                               |
| [`Suppressed`](#PartTransform.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`TargetCoordinateSystem`](#PartTransform.TargetCoordinateSystem)   | Gets or sets the TargetCoordinateSystem.                      |
| [`TranslationX`](#PartTransform.TranslationX)                       | Gets or sets the TranslationX.                                |
| [`TranslationY`](#PartTransform.TranslationY)                       | Gets or sets the TranslationY.                                |
| [`TranslationZ`](#PartTransform.TranslationZ)                       | Gets or sets the TranslationZ.                                |
| [`VisibleProperties`](#PartTransform.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PartTransform.AttachedRefs"></a>

### *property* PartTransform.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Children"></a>

### *property* PartTransform.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.ClsId"></a>

### *property* PartTransform.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Comments"></a>

### *property* PartTransform.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.CoordinateSystem"></a>

### *property* PartTransform.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.DataModelObjectCategory"></a>

### *property* PartTransform.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.DefineBy"></a>

### *property* PartTransform.DefineBy *: [Ansys.Mechanical.DataModel.Enums.PartTransformationDefinitionType](../../../Mechanical/DataModel/Enums/PartTransformationDefinitionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PartTransformationDefinitionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Figures"></a>

### *property* PartTransform.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GroupingFolder"></a>

### *property* PartTransform.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.IconName"></a>

### *property* PartTransform.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Images"></a>

### *property* PartTransform.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.InternalObject"></a>

### *property* PartTransform.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPartTransformAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Location"></a>

### *property* PartTransform.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Name"></a>

### *property* PartTransform.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.ObjectId"></a>

### *property* PartTransform.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.ObjectState"></a>

### *property* PartTransform.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.ObjectTags"></a>

### *property* PartTransform.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Parent"></a>

### *property* PartTransform.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Parts"></a>

### *property* PartTransform.Parts *: Iterable[Ansys.ACT.Automation.Mechanical.DataModelObject] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OutlineSelection.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Properties"></a>

### *property* PartTransform.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.RawTransformMKS"></a>

### *property* PartTransform.RawTransformMKS *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RawTransformMKS property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.RotationX"></a>

### *property* PartTransform.RotationX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RotationX.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.RotationY"></a>

### *property* PartTransform.RotationY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RotationY.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.RotationZ"></a>

### *property* PartTransform.RotationZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RotationZ.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.ScopingMethod"></a>

### *property* PartTransform.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.SourceCoordinateSystem"></a>

### *property* PartTransform.SourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SourceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.State"></a>

### *property* PartTransform.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Suppressed"></a>

### *property* PartTransform.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.TargetCoordinateSystem"></a>

### *property* PartTransform.TargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TargetCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.TranslationX"></a>

### *property* PartTransform.TranslationX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TranslationX.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.TranslationY"></a>

### *property* PartTransform.TranslationY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TranslationY.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.TranslationZ"></a>

### *property* PartTransform.TranslationZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TranslationZ.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.VisibleProperties"></a>

### *property* PartTransform.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PartTransform.Activate"></a>

### PartTransform.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.AddComment"></a>

### PartTransform.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.AddFigure"></a>

### PartTransform.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.AddImage"></a>

### PartTransform.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Copy"></a>

### PartTransform.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.CopyTo"></a>

### PartTransform.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.CreateObjRef"></a>

### PartTransform.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.CreateParameter"></a>

### PartTransform.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Cut"></a>

### PartTransform.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Delete"></a>

### PartTransform.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Duplicate"></a>

### PartTransform.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Equals"></a>

### PartTransform.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetAPIName"></a>

### PartTransform.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetAllProperties"></a>

### PartTransform.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetChildren"></a>

### PartTransform.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PartTransform.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetDetailsView"></a>

### PartTransform.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetEnumName"></a>

### PartTransform.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetHashCode"></a>

### PartTransform.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetIconFile"></a>

### PartTransform.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetLifetimeService"></a>

### PartTransform.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetObjectData"></a>

### PartTransform.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetParameter"></a>

### PartTransform.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetPath"></a>

### PartTransform.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetPropertyName"></a>

### PartTransform.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetPropertyValue"></a>

### PartTransform.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetVisibleProperties"></a>

### PartTransform.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetVisiblePropertyNames"></a>

### PartTransform.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GroupAllSimilarChildren"></a>

### PartTransform.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GroupSimilarObjects"></a>

### PartTransform.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.InitializeLifetimeService"></a>

### PartTransform.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.IsPropertyEditable"></a>

### PartTransform.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PartTransform.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.IsPropertyVisible"></a>

### PartTransform.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PartTransform.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Paste"></a>

### PartTransform.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.PropertyByAPIName"></a>

### PartTransform.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.PropertyById"></a>

### PartTransform.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.PropertyByName"></a>

### PartTransform.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.RemoveFromGroup"></a>

### PartTransform.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.RemoveParameter"></a>

### PartTransform.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.TransformGeometry"></a>

### PartTransform.TransformGeometry() → [None](https://docs.python.org/3/builtins/constants.html#None)

TransformGeometry method.

<!-- !! processed by numpydoc !! -->

