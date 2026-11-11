# `ConstructionLine`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine(internalObject: Any)

<a id="ConstructionLine"></a>

### *class* ConstructionLine(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Enables the construction and generation of straight line edges directly within
Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ConstructionLine.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ConstructionLine.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ConstructionLine.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ConstructionLine.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddToGeometry`](#ConstructionLine.AddToGeometry)                         | Add a part to Geometry with line bodies as contained in this ConstructionLine instance.     |
| [`Copy`](#ConstructionLine.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ConstructionLine.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ConstructionLine.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ConstructionLine.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`CreatePlanarPoints`](#ConstructionLine.CreatePlanarPoints)               | CreatePlanarPoints method.                                                                  |
| [`CreatePlane`](#ConstructionLine.CreatePlane)                             | Create a plane.                                                                             |
| [`CreatePoints`](#ConstructionLine.CreatePoints)                           | CreatePoints method.                                                                        |
| [`CreateStraightLines`](#ConstructionLine.CreateStraightLines)             | CreateStraightLines method.                                                                 |
| [`Cut`](#ConstructionLine.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`DeleteEdges`](#ConstructionLine.DeleteEdges)                             | DeleteEdges method.                                                                         |
| [`DeletePlane`](#ConstructionLine.DeletePlane)                             | Delete a plane associated with this construction line.                                      |
| [`Duplicate`](#ConstructionLine.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ConstructionLine.Equals)                                       | Equals method.                                                                              |
| [`FlipEdges`](#ConstructionLine.FlipEdges)                                 | FlipEdges method.                                                                           |
| [`GetAPIName`](#ConstructionLine.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ConstructionLine.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetDetailsView`](#ConstructionLine.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ConstructionLine.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ConstructionLine.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ConstructionLine.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ConstructionLine.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ConstructionLine.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ConstructionLine.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPartFromGeometry`](#ConstructionLine.GetPartFromGeometry)             | Get the corresponding part for a ConstructionLine instance.                                 |
| [`GetPath`](#ConstructionLine.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ConstructionLine.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ConstructionLine.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ConstructionLine.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ConstructionLine.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ConstructionLine.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ConstructionLine.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ConstructionLine.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ConstructionLine.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ConstructionLine.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ConstructionLine.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ConstructionLine.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ConstructionLine.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ConstructionLine.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`Redo`](#ConstructionLine.Redo)                                           | Redo and undone operation in this Construction Line instance.                               |
| [`RemoveFromGeometry`](#ConstructionLine.RemoveFromGeometry)               | Remove the corresponding part from the geometry.                                            |
| [`RemoveFromGroup`](#ConstructionLine.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ConstructionLine.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`Undo`](#ConstructionLine.Undo)                                           | Undo the last operation in this Construction Line instance.                                 |
| [`UpdateGeometry`](#ConstructionLine.UpdateGeometry)                       | Update the corresponding part with any changes made in this ConstructionLine instance.      |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`AttachedRefs`](#ConstructionLine.AttachedRefs)                         | AttachedRefs property.                                                                |
| [`ClsId`](#ConstructionLine.ClsId)                                       | ClsId property.                                                                       |
| [`Comments`](#ConstructionLine.Comments)                                 | Gets the list of associated comments.                                                 |
| [`DataModelObjectCategory`](#ConstructionLine.DataModelObjectCategory)   | Gets the current DataModelObject's category.                                          |
| [`Edges`](#ConstructionLine.Edges)                                       | Creates for the user an IEdge representation of each edge in this Construction Line.  |
| [`Figures`](#ConstructionLine.Figures)                                   | Gets the list of associated figures.                                                  |
| [`GroupingFolder`](#ConstructionLine.GroupingFolder)                     | GroupingFolder property.                                                              |
| [`IconName`](#ConstructionLine.IconName)                                 | IconName property.                                                                    |
| [`Images`](#ConstructionLine.Images)                                     | Gets the list of associated images.                                                   |
| [`ImportableObjectSourceId`](#ConstructionLine.ImportableObjectSourceId) | ImportableObjectSourceId property.                                                    |
| [`InternalObject`](#ConstructionLine.InternalObject)                     | Gets the internal object. For advanced usage only.                                    |
| [`Name`](#ConstructionLine.Name)                                         | Name property.                                                                        |
| [`ObjectId`](#ConstructionLine.ObjectId)                                 | ObjectId property.                                                                    |
| [`ObjectState`](#ConstructionLine.ObjectState)                           | ObjectState property.                                                                 |
| [`ObjectTags`](#ConstructionLine.ObjectTags)                             | ObjectTags property.                                                                  |
| [`Parent`](#ConstructionLine.Parent)                                     | Parent property.                                                                      |
| [`Planes`](#ConstructionLine.Planes)                                     | Creates for the user an Plane representation of each plane in this Construction Line. |
| [`Points`](#ConstructionLine.Points)                                     | Returns all points in this Construction Line, both those that have been created       |
| [`Properties`](#ConstructionLine.Properties)                             | Gets the list of properties for this object.                                          |
| [`ReadOnly`](#ConstructionLine.ReadOnly)                                 | Gets or sets the ReadOnly.                                                            |
| [`State`](#ConstructionLine.State)                                       | State property.                                                                       |
| [`TransferableObjectId`](#ConstructionLine.TransferableObjectId)         | TransferableObjectId property.                                                        |
| [`VisibleProperties`](#ConstructionLine.VisibleProperties)               | Gets the list of properties that are visible for this object.                         |

<a id="property-detail"></a>

## Property detail

<a id="ConstructionLine.AttachedRefs"></a>

### *property* ConstructionLine.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.ClsId"></a>

### *property* ConstructionLine.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Comments"></a>

### *property* ConstructionLine.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.DataModelObjectCategory"></a>

### *property* ConstructionLine.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Edges"></a>

### *property* ConstructionLine.Edges *: List[Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Creates for the user an IEdge representation of each edge in this Construction Line.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Figures"></a>

### *property* ConstructionLine.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GroupingFolder"></a>

### *property* ConstructionLine.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.IconName"></a>

### *property* ConstructionLine.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Images"></a>

### *property* ConstructionLine.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.ImportableObjectSourceId"></a>

### *property* ConstructionLine.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.InternalObject"></a>

### *property* ConstructionLine.InternalObject *: Ansys.Common.Interop.DSLines.IDSLinesPythonInteraction | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Name"></a>

### *property* ConstructionLine.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.ObjectId"></a>

### *property* ConstructionLine.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.ObjectState"></a>

### *property* ConstructionLine.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.ObjectTags"></a>

### *property* ConstructionLine.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Parent"></a>

### *property* ConstructionLine.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Planes"></a>

### *property* ConstructionLine.Planes *: List[Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Creates for the user an Plane representation of each plane in this Construction Line.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Points"></a>

### *property* ConstructionLine.Points *: List[Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns all points in this Construction Line, both those that have been created
as well as virtual representations.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Properties"></a>

### *property* ConstructionLine.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.ReadOnly"></a>

### *property* ConstructionLine.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.State"></a>

### *property* ConstructionLine.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.TransferableObjectId"></a>

### *property* ConstructionLine.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.VisibleProperties"></a>

### *property* ConstructionLine.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ConstructionLine.Activate"></a>

### ConstructionLine.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.AddComment"></a>

### ConstructionLine.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.AddFigure"></a>

### ConstructionLine.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.AddImage"></a>

### ConstructionLine.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.AddToGeometry"></a>

### ConstructionLine.AddToGeometry() → Ansys.ACT.Interfaces.Geometry.IGeoPart

Add a part to Geometry with line bodies as contained in this ConstructionLine instance.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Copy"></a>

### ConstructionLine.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.CopyTo"></a>

### ConstructionLine.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.CreateObjRef"></a>

### ConstructionLine.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.CreateParameter"></a>

### ConstructionLine.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.CreatePlanarPoints"></a>

### ConstructionLine.CreatePlanarPoints(plane: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](../../../../Mechanical/DataModel/ConstructionLines/Plane.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.ConstructionLines.Plane), pointDefinitionCollection: Iterable[Any]) → List[Any]

CreatePlanarPoints method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.CreatePlane"></a>

### ConstructionLine.CreatePlane(sketchPlaneDefinition: Any) → [Ansys.Mechanical.DataModel.ConstructionLines.Plane](../../../../Mechanical/DataModel/ConstructionLines/Plane.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.ConstructionLines.Plane)

Create a plane.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.CreatePoints"></a>

### ConstructionLine.CreatePoints(pointDefinitionCollection: Iterable[Any]) → List[Any]

CreatePoints method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.CreateStraightLines"></a>

### ConstructionLine.CreateStraightLines(pointCollection: Iterable[[Ansys.Mechanical.DataModel.ConstructionLines.Point](../../../../Mechanical/DataModel/ConstructionLines/Point.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.ConstructionLines.Point)]) → List[Any]

### ConstructionLine.CreateStraightLines(pointCollection: Iterable[[Ansys.Mechanical.DataModel.ConstructionLines.Point](../../../../Mechanical/DataModel/ConstructionLines/Point.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.ConstructionLines.Point)], connectionCollection: Iterable[Iterable[Any]]) → List[Any]

CreateStraightLines method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Cut"></a>

### ConstructionLine.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.DeleteEdges"></a>

### ConstructionLine.DeleteEdges(edgeCollection: Iterable[[Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge](../../../../Mechanical/DataModel/ConstructionLines/Edges/IEdge.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

DeleteEdges method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.DeletePlane"></a>

### ConstructionLine.DeletePlane(plane: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](../../../../Mechanical/DataModel/ConstructionLines/Plane.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.ConstructionLines.Plane), forceDelete: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Delete a plane associated with this construction line.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Duplicate"></a>

### ConstructionLine.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Equals"></a>

### ConstructionLine.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.FlipEdges"></a>

### ConstructionLine.FlipEdges(edgesToFlip: Iterable[[Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge](../../../../Mechanical/DataModel/ConstructionLines/Edges/IEdge.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

FlipEdges method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetAPIName"></a>

### ConstructionLine.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetAllProperties"></a>

### ConstructionLine.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetDetailsView"></a>

### ConstructionLine.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetEnumName"></a>

### ConstructionLine.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetHashCode"></a>

### ConstructionLine.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetIconFile"></a>

### ConstructionLine.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetLifetimeService"></a>

### ConstructionLine.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetObjectData"></a>

### ConstructionLine.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetParameter"></a>

### ConstructionLine.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetPartFromGeometry"></a>

### ConstructionLine.GetPartFromGeometry() → Ansys.ACT.Interfaces.Geometry.IGeoPart

Get the corresponding part for a ConstructionLine instance.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetPath"></a>

### ConstructionLine.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetPropertyName"></a>

### ConstructionLine.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetPropertyValue"></a>

### ConstructionLine.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetVisibleProperties"></a>

### ConstructionLine.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetVisiblePropertyNames"></a>

### ConstructionLine.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GroupAllSimilarChildren"></a>

### ConstructionLine.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GroupSimilarObjects"></a>

### ConstructionLine.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.InitializeLifetimeService"></a>

### ConstructionLine.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.IsPropertyEditable"></a>

### ConstructionLine.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ConstructionLine.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.IsPropertyVisible"></a>

### ConstructionLine.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ConstructionLine.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Paste"></a>

### ConstructionLine.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.PropertyByAPIName"></a>

### ConstructionLine.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.PropertyById"></a>

### ConstructionLine.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.PropertyByName"></a>

### ConstructionLine.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Redo"></a>

### ConstructionLine.Redo() → [None](https://docs.python.org/3/builtins/constants.html#None)

Redo and undone operation in this Construction Line instance.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.RemoveFromGeometry"></a>

### ConstructionLine.RemoveFromGeometry() → [None](https://docs.python.org/3/builtins/constants.html#None)

Remove the corresponding part from the geometry.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.RemoveFromGroup"></a>

### ConstructionLine.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.RemoveParameter"></a>

### ConstructionLine.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Undo"></a>

### ConstructionLine.Undo() → [None](https://docs.python.org/3/builtins/constants.html#None)

Undo the last operation in this Construction Line instance.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.UpdateGeometry"></a>

### ConstructionLine.UpdateGeometry() → [None](https://docs.python.org/3/builtins/constants.html#None)

Update the corresponding part with any changes made in this ConstructionLine instance.

<!-- !! processed by numpydoc !! -->

