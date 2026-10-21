# `ElementOrientation`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ElementOrientation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ElementOrientation(internalObject: Any)

<a id="ElementOrientation"></a>

### *class* ElementOrientation(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ElementOrientation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ElementOrientation.Activate)                                         | Activate the current object.                                                                |
| [`AddComment`](#ElementOrientation.AddComment)                                     | Creates a new child Comment.                                                                |
| [`AddFigure`](#ElementOrientation.AddFigure)                                       | Creates a new child Figure.                                                                 |
| [`AddImage`](#ElementOrientation.AddImage)                                         | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#ElementOrientation.ClearGeneratedData)                     | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#ElementOrientation.Copy)                                                 | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ElementOrientation.CopyTo)                                             | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ElementOrientation.CreateObjRef)                                 | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ElementOrientation.CreateParameter)                           | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ElementOrientation.Cut)                                                   | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ElementOrientation.Delete)                                             | Run the Delete action.                                                                      |
| [`Duplicate`](#ElementOrientation.Duplicate)                                       | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ElementOrientation.Equals)                                             | Equals method.                                                                              |
| [`GenerateOrientations`](#ElementOrientation.GenerateOrientations)                 | Runs the GenerateOrientations action.                                                       |
| [`GetAPIName`](#ElementOrientation.GetAPIName)                                     | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ElementOrientation.GetAllProperties)                         | GetAllProperties method.                                                                    |
| [`GetChildren`](#ElementOrientation.GetChildren)                                   | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ElementOrientation.GetDetailsView)                             | GetDetailsView method.                                                                      |
| [`GetElementsCoordinateSystems`](#ElementOrientation.GetElementsCoordinateSystems) | Get  the elements coordinate systems dictionary.                                            |
| [`GetElementsOrientations`](#ElementOrientation.GetElementsOrientations)           | Get  the elements orientations dictionary.                                                  |
| [`GetEnumName`](#ElementOrientation.GetEnumName)                                   | Enum name bound to value                                                                    |
| [`GetHashCode`](#ElementOrientation.GetHashCode)                                   | GetHashCode method.                                                                         |
| [`GetIconFile`](#ElementOrientation.GetIconFile)                                   | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ElementOrientation.GetLifetimeService)                     | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ElementOrientation.GetObjectData)                               | GetObjectData method.                                                                       |
| [`GetParameter`](#ElementOrientation.GetParameter)                                 | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ElementOrientation.GetPath)                                           | GetPath method.                                                                             |
| [`GetPropertyName`](#ElementOrientation.GetPropertyName)                           | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ElementOrientation.GetPropertyValue)                         | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ElementOrientation.GetVisibleProperties)                 | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ElementOrientation.GetVisiblePropertyNames)           | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ElementOrientation.GroupAllSimilarChildren)           | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ElementOrientation.GroupSimilarObjects)                   | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ElementOrientation.InitializeLifetimeService)       | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ElementOrientation.IsPropertyEditable)                     | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ElementOrientation.IsPropertyVisible)                       | IsPropertyVisible method.                                                                   |
| [`Paste`](#ElementOrientation.Paste)                                               | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ElementOrientation.PropertyByAPIName)                       | Get a property by its API name.                                                             |
| [`PropertyById`](#ElementOrientation.PropertyById)                                 | PropertyById method.                                                                        |
| [`PropertyByName`](#ElementOrientation.PropertyByName)                             | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ElementOrientation.RemoveFromGroup)                           | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ElementOrientation.RemoveParameter)                           | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ElementOrientation.AttachedRefs)                           | AttachedRefs property.                                        |
| [`AxisEdgeOrientation`](#ElementOrientation.AxisEdgeOrientation)             | Gets or sets the AxisEdgeOrientation.                         |
| [`AxisSurfaceOrientation`](#ElementOrientation.AxisSurfaceOrientation)       | Gets or sets the AxisSurfaceOrientation.                      |
| [`BodyLocation`](#ElementOrientation.BodyLocation)                           | Gets or sets the BodyLocation.                                |
| [`Children`](#ElementOrientation.Children)                                   | Gets the list of children.                                    |
| [`ClsId`](#ElementOrientation.ClsId)                                         | ClsId property.                                               |
| [`Comments`](#ElementOrientation.Comments)                                   | Gets the list of associated comments.                         |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                   | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#ElementOrientation.DataModelObjectCategory)     | Gets the current DataModelObject's category.                  |
| [`EdgeLocation`](#ElementOrientation.EdgeLocation)                           | Gets or sets the EdgeLocation.                                |
| [`Figures`](#ElementOrientation.Figures)                                     | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ElementOrientation.GroupingFolder)                       | GroupingFolder property.                                      |
| [`IconName`](#ElementOrientation.IconName)                                   | IconName property.                                            |
| [`Images`](#ElementOrientation.Images)                                       | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#ElementOrientation.ImportableObjectSourceId)   | ImportableObjectSourceId property.                            |
| [`InternalObject`](#ElementOrientation.InternalObject)                       | Gets the internal object. For advanced usage only.            |
| [`Name`](#ElementOrientation.Name)                                           | Name property.                                                |
| [`ObjectId`](#ElementOrientation.ObjectId)                                   | ObjectId property.                                            |
| [`ObjectState`](#ElementOrientation.ObjectState)                             | ObjectState property.                                         |
| [`ObjectTags`](#ElementOrientation.ObjectTags)                               | ObjectTags property.                                          |
| [`OrientationGuideDefinedBy`](#ElementOrientation.OrientationGuideDefinedBy) | Gets or sets the OrientationGuideDefinedBy.                   |
| [`Parent`](#ElementOrientation.Parent)                                       | Parent property.                                              |
| [`Properties`](#ElementOrientation.Properties)                               | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ElementOrientation.ReadOnly)                                   | Gets or sets the ReadOnly.                                    |
| [`State`](#ElementOrientation.State)                                         | State property.                                               |
| [`Suppressed`](#ElementOrientation.Suppressed)                               | Gets or sets the Suppressed.                                  |
| [`SurfaceLocation`](#ElementOrientation.SurfaceLocation)                     | Gets or sets the SurfaceLocation.                             |
| [`TransferableObjectId`](#ElementOrientation.TransferableObjectId)           | TransferableObjectId property.                                |
| [`VisibleProperties`](#ElementOrientation.VisibleProperties)                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ElementOrientation.AttachedRefs"></a>

### *property* ElementOrientation.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.AxisEdgeOrientation"></a>

### *property* ElementOrientation.AxisEdgeOrientation *: [Ansys.Mechanical.DataModel.Enums.ElementOrientationAxisType](../../../Mechanical/DataModel/Enums/ElementOrientationAxisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ElementOrientationAxisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AxisEdgeOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.AxisSurfaceOrientation"></a>

### *property* ElementOrientation.AxisSurfaceOrientation *: [Ansys.Mechanical.DataModel.Enums.ElementOrientationAxisType](../../../Mechanical/DataModel/Enums/ElementOrientationAxisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ElementOrientationAxisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AxisSurfaceOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.BodyLocation"></a>

### *property* ElementOrientation.BodyLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BodyLocation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Children"></a>

### *property* ElementOrientation.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.ClsId"></a>

### *property* ElementOrientation.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Comments"></a>

### *property* ElementOrientation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.CoordinateSystem"></a>

### *property* ElementOrientation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.DataModelObjectCategory"></a>

### *property* ElementOrientation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.EdgeLocation"></a>

### *property* ElementOrientation.EdgeLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EdgeLocation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Figures"></a>

### *property* ElementOrientation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GroupingFolder"></a>

### *property* ElementOrientation.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.IconName"></a>

### *property* ElementOrientation.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Images"></a>

### *property* ElementOrientation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.ImportableObjectSourceId"></a>

### *property* ElementOrientation.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.InternalObject"></a>

### *property* ElementOrientation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSElementOrientationAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Name"></a>

### *property* ElementOrientation.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.ObjectId"></a>

### *property* ElementOrientation.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.ObjectState"></a>

### *property* ElementOrientation.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.ObjectTags"></a>

### *property* ElementOrientation.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.OrientationGuideDefinedBy"></a>

### *property* ElementOrientation.OrientationGuideDefinedBy *: [Ansys.Mechanical.DataModel.Enums.ElementOrientationGuide](../../../Mechanical/DataModel/Enums/ElementOrientationGuide.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ElementOrientationGuide) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OrientationGuideDefinedBy.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Parent"></a>

### *property* ElementOrientation.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Properties"></a>

### *property* ElementOrientation.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.ReadOnly"></a>

### *property* ElementOrientation.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.State"></a>

### *property* ElementOrientation.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Suppressed"></a>

### *property* ElementOrientation.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.SurfaceLocation"></a>

### *property* ElementOrientation.SurfaceLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SurfaceLocation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.TransferableObjectId"></a>

### *property* ElementOrientation.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.VisibleProperties"></a>

### *property* ElementOrientation.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElementOrientation.Activate"></a>

### ElementOrientation.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.AddComment"></a>

### ElementOrientation.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.AddFigure"></a>

### ElementOrientation.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.AddImage"></a>

### ElementOrientation.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.ClearGeneratedData"></a>

### ElementOrientation.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Copy"></a>

### ElementOrientation.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.CopyTo"></a>

### ElementOrientation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.CreateObjRef"></a>

### ElementOrientation.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.CreateParameter"></a>

### ElementOrientation.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Cut"></a>

### ElementOrientation.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Delete"></a>

### ElementOrientation.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Duplicate"></a>

### ElementOrientation.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Equals"></a>

### ElementOrientation.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GenerateOrientations"></a>

### ElementOrientation.GenerateOrientations() → [None](https://docs.python.org/3/builtins/constants.html#None)

Runs the GenerateOrientations action.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetAPIName"></a>

### ElementOrientation.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetAllProperties"></a>

### ElementOrientation.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetChildren"></a>

### ElementOrientation.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ElementOrientation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetDetailsView"></a>

### ElementOrientation.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetElementsCoordinateSystems"></a>

### ElementOrientation.GetElementsCoordinateSystems() → System.Collections.Generic.Dictionary[System.Int64, [Ansys.ACT.Common.CoordinateSystem](../../Common/CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Common.CoordinateSystem)]

Get  the elements coordinate systems dictionary.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetElementsOrientations"></a>

### ElementOrientation.GetElementsOrientations() → System.Collections.Generic.Dictionary[System.Int64, Ansys.ACT.Automation.Mechanical.ElementOrientationInfo]

Get  the elements orientations dictionary.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetEnumName"></a>

### ElementOrientation.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetHashCode"></a>

### ElementOrientation.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetIconFile"></a>

### ElementOrientation.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetLifetimeService"></a>

### ElementOrientation.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetObjectData"></a>

### ElementOrientation.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetParameter"></a>

### ElementOrientation.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetPath"></a>

### ElementOrientation.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetPropertyName"></a>

### ElementOrientation.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetPropertyValue"></a>

### ElementOrientation.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetVisibleProperties"></a>

### ElementOrientation.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetVisiblePropertyNames"></a>

### ElementOrientation.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GroupAllSimilarChildren"></a>

### ElementOrientation.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GroupSimilarObjects"></a>

### ElementOrientation.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.InitializeLifetimeService"></a>

### ElementOrientation.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.IsPropertyEditable"></a>

### ElementOrientation.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ElementOrientation.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.IsPropertyVisible"></a>

### ElementOrientation.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ElementOrientation.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Paste"></a>

### ElementOrientation.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.PropertyByAPIName"></a>

### ElementOrientation.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.PropertyById"></a>

### ElementOrientation.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.PropertyByName"></a>

### ElementOrientation.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.RemoveFromGroup"></a>

### ElementOrientation.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.RemoveParameter"></a>

### ElementOrientation.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

