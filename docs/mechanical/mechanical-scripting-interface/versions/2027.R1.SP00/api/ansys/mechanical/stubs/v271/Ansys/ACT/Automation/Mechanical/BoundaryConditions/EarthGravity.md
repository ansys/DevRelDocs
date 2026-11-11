# `EarthGravity`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.EarthGravity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.EarthGravity(internalObject: Any)

<a id="EarthGravity"></a>

### *class* EarthGravity(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a EarthGravity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#EarthGravity.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#EarthGravity.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#EarthGravity.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#EarthGravity.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#EarthGravity.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#EarthGravity.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#EarthGravity.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#EarthGravity.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#EarthGravity.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#EarthGravity.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#EarthGravity.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#EarthGravity.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#EarthGravity.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#EarthGravity.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#EarthGravity.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#EarthGravity.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#EarthGravity.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#EarthGravity.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#EarthGravity.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#EarthGravity.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#EarthGravity.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#EarthGravity.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#EarthGravity.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#EarthGravity.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#EarthGravity.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#EarthGravity.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#EarthGravity.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#EarthGravity.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#EarthGravity.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#EarthGravity.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#EarthGravity.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#EarthGravity.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#EarthGravity.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#EarthGravity.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#EarthGravity.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#EarthGravity.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#EarthGravity.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#EarthGravity.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#EarthGravity.AttachedRefs)                       | AttachedRefs property.                                                                                                  |
| [`Children`](#EarthGravity.Children)                               | Gets the list of children.                                                                                              |
| [`ClsId`](#EarthGravity.ClsId)                                     | ClsId property.                                                                                                         |
| [`Comments`](#EarthGravity.Comments)                               | Gets the list of associated comments.                                                                                   |
| [`CoordinateSystem`](#CoordinateSystem)      | Gets or sets the CoordinateSystem.                                                                                      |
| [`DataModelObjectCategory`](#EarthGravity.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                            |
| [`Direction`](#EarthGravity.Direction)                             | Gets or sets the Direction.                                                                                             |
| [`Figures`](#EarthGravity.Figures)                                 | Gets the list of associated figures.                                                                                    |
| [`GeometrySelection`](#EarthGravity.GeometrySelection)             | Gets the GeometrySelection.                                                                                             |
| [`GroupingFolder`](#EarthGravity.GroupingFolder)                   | GroupingFolder property.                                                                                                |
| [`IconName`](#EarthGravity.IconName)                               | IconName property.                                                                                                      |
| [`Images`](#EarthGravity.Images)                                   | Gets the list of associated images.                                                                                     |
| [`InternalObject`](#EarthGravity.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                      |
| [`LoadVectorAssignment`](#EarthGravity.LoadVectorAssignment)       | Gets or sets whether the LoadVectorAssignment is LoadVectorAssignment_ProgramControlled or LoadVectorAssignment_Manual. |
| [`LoadVectorNumberX`](#EarthGravity.LoadVectorNumberX)             | Gets or sets the load vector number for the standard earth gravity.                                                     |
| [`LoadVectorNumberY`](#EarthGravity.LoadVectorNumberY)             | Gets or sets the load vector number for the standard earth gravity.                                                     |
| [`LoadVectorNumberZ`](#EarthGravity.LoadVectorNumberZ)             | Gets or sets the load vector number for the standard earth gravity.                                                     |
| [`Name`](#EarthGravity.Name)                                       | Name property.                                                                                                          |
| [`ObjectId`](#EarthGravity.ObjectId)                               | ObjectId property.                                                                                                      |
| [`ObjectState`](#EarthGravity.ObjectState)                         | ObjectState property.                                                                                                   |
| [`ObjectTags`](#EarthGravity.ObjectTags)                           | ObjectTags property.                                                                                                    |
| [`Parent`](#EarthGravity.Parent)                                   | Parent property.                                                                                                        |
| [`Properties`](#EarthGravity.Properties)                           | Gets the list of properties for this object.                                                                            |
| [`State`](#EarthGravity.State)                                     | State property.                                                                                                         |
| [`Suppressed`](#EarthGravity.Suppressed)                           | Gets or sets the Suppressed.                                                                                            |
| [`VisibleProperties`](#EarthGravity.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                           |
| [`XComponent`](#EarthGravity.XComponent)                           | Gets the XComponent.                                                                                                    |
| [`YComponent`](#EarthGravity.YComponent)                           | Gets the YComponent.                                                                                                    |
| [`ZComponent`](#EarthGravity.ZComponent)                           | Gets the ZComponent.                                                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="EarthGravity.AttachedRefs"></a>

### *property* EarthGravity.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Children"></a>

### *property* EarthGravity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.ClsId"></a>

### *property* EarthGravity.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Comments"></a>

### *property* EarthGravity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.CoordinateSystem"></a>

### *property* EarthGravity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.DataModelObjectCategory"></a>

### *property* EarthGravity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Direction"></a>

### *property* EarthGravity.Direction *: [Ansys.Mechanical.DataModel.Enums.GravityOrientationType](../../../../Mechanical/DataModel/Enums/GravityOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GravityOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Figures"></a>

### *property* EarthGravity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GeometrySelection"></a>

### *property* EarthGravity.GeometrySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GroupingFolder"></a>

### *property* EarthGravity.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.IconName"></a>

### *property* EarthGravity.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Images"></a>

### *property* EarthGravity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.InternalObject"></a>

### *property* EarthGravity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAccelerationAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.LoadVectorAssignment"></a>

### *property* EarthGravity.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the LoadVectorAssignment is LoadVectorAssignment_ProgramControlled or LoadVectorAssignment_Manual.
: Default: LoadVectorAssignment_ProgramControlled.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.LoadVectorNumberX"></a>

### *property* EarthGravity.LoadVectorNumberX *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the standard earth gravity.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.LoadVectorNumberY"></a>

### *property* EarthGravity.LoadVectorNumberY *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the standard earth gravity.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.LoadVectorNumberZ"></a>

### *property* EarthGravity.LoadVectorNumberZ *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the standard earth gravity.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Name"></a>

### *property* EarthGravity.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.ObjectId"></a>

### *property* EarthGravity.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.ObjectState"></a>

### *property* EarthGravity.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.ObjectTags"></a>

### *property* EarthGravity.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Parent"></a>

### *property* EarthGravity.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Properties"></a>

### *property* EarthGravity.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.State"></a>

### *property* EarthGravity.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Suppressed"></a>

### *property* EarthGravity.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.VisibleProperties"></a>

### *property* EarthGravity.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.XComponent"></a>

### *property* EarthGravity.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.YComponent"></a>

### *property* EarthGravity.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.ZComponent"></a>

### *property* EarthGravity.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EarthGravity.Activate"></a>

### EarthGravity.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.AddComment"></a>

### EarthGravity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.AddFigure"></a>

### EarthGravity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.AddImage"></a>

### EarthGravity.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Copy"></a>

### EarthGravity.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.CopyTo"></a>

### EarthGravity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.CreateObjRef"></a>

### EarthGravity.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.CreateParameter"></a>

### EarthGravity.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Cut"></a>

### EarthGravity.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Delete"></a>

### EarthGravity.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Duplicate"></a>

### EarthGravity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Equals"></a>

### EarthGravity.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GetAPIName"></a>

### EarthGravity.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GetAllProperties"></a>

### EarthGravity.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GetChildren"></a>

### EarthGravity.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### EarthGravity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GetDetailsView"></a>

### EarthGravity.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GetEnumName"></a>

### EarthGravity.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GetHashCode"></a>

### EarthGravity.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GetIconFile"></a>

### EarthGravity.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GetLifetimeService"></a>

### EarthGravity.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GetObjectData"></a>

### EarthGravity.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GetParameter"></a>

### EarthGravity.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GetPath"></a>

### EarthGravity.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GetPropertyName"></a>

### EarthGravity.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GetPropertyValue"></a>

### EarthGravity.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GetVisibleProperties"></a>

### EarthGravity.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GetVisiblePropertyNames"></a>

### EarthGravity.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GroupAllSimilarChildren"></a>

### EarthGravity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GroupSimilarObjects"></a>

### EarthGravity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.InitializeLifetimeService"></a>

### EarthGravity.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.IsPropertyEditable"></a>

### EarthGravity.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EarthGravity.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.IsPropertyVisible"></a>

### EarthGravity.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EarthGravity.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Paste"></a>

### EarthGravity.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.PropertyByAPIName"></a>

### EarthGravity.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.PropertyById"></a>

### EarthGravity.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.PropertyByName"></a>

### EarthGravity.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.RemoveFromGroup"></a>

### EarthGravity.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.RemoveParameter"></a>

### EarthGravity.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

