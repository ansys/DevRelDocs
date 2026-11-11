# `PreMeshedCrack`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PreMeshedCrack"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PreMeshedCrack(internalObject: Any)

<a id="PreMeshedCrack"></a>

### *class* PreMeshedCrack(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PreMeshedCrack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PreMeshedCrack.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#PreMeshedCrack.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#PreMeshedCrack.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#PreMeshedCrack.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#PreMeshedCrack.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#PreMeshedCrack.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PreMeshedCrack.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PreMeshedCrack.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PreMeshedCrack.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PreMeshedCrack.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PreMeshedCrack.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#PreMeshedCrack.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PreMeshedCrack.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#PreMeshedCrack.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PreMeshedCrack.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#PreMeshedCrack.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PreMeshedCrack.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PreMeshedCrack.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PreMeshedCrack.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PreMeshedCrack.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PreMeshedCrack.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PreMeshedCrack.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PreMeshedCrack.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PreMeshedCrack.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PreMeshedCrack.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PreMeshedCrack.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PreMeshedCrack.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PreMeshedCrack.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PreMeshedCrack.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PreMeshedCrack.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PreMeshedCrack.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PreMeshedCrack.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PreMeshedCrack.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PreMeshedCrack.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#PreMeshedCrack.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PreMeshedCrack.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PreMeshedCrack.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PreMeshedCrack.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PreMeshedCrack.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#PreMeshedCrack.AttachedRefs)                         | AttachedRefs property.                                        |
| [`BottomFaceNodes`](#PreMeshedCrack.BottomFaceNodes)                   | Gets or sets the BottomFaceNodes.                             |
| [`Children`](#PreMeshedCrack.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#PreMeshedCrack.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#PreMeshedCrack.Comments)                                 | Gets the list of associated comments.                         |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)             | Gets or sets the CoordinateSystem.                            |
| [`CrackFacesNodes`](#PreMeshedCrack.CrackFacesNodes)                   | Gets or sets the CrackFacesNodes.                             |
| [`CrackFront`](#PreMeshedCrack.CrackFront)                             | Gets or sets the CrackFront.                                  |
| [`CrackID`](#PreMeshedCrack.CrackID)                                   | Gets the CrackID.                                             |
| [`CrackSourceType`](#PreMeshedCrack.CrackSourceType)                   | Gets the CrackSourceType.                                     |
| [`CrackSurface`](#PreMeshedCrack.CrackSurface)                         | Gets or sets the type of crack surface. Default: Planar       |
| [`CrackSymmetry`](#PreMeshedCrack.CrackSymmetry)                       | Gets or sets the CrackSymmetry.                               |
| [`DataModelObjectCategory`](#PreMeshedCrack.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#PreMeshedCrack.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#PreMeshedCrack.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#PreMeshedCrack.IconName)                                 | IconName property.                                            |
| [`Images`](#PreMeshedCrack.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#PreMeshedCrack.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#PreMeshedCrack.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#PreMeshedCrack.Name)                                         | Name property.                                                |
| [`ObjectId`](#PreMeshedCrack.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#PreMeshedCrack.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#PreMeshedCrack.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#PreMeshedCrack.Parent)                                     | Parent property.                                              |
| [`Properties`](#PreMeshedCrack.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#PreMeshedCrack.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`ScopingMethod`](#PreMeshedCrack.ScopingMethod)                       | Gets the ScopingMethod.                                       |
| [`SolutionContours`](#PreMeshedCrack.SolutionContours)                 | Gets or sets the SolutionContours.                            |
| [`State`](#PreMeshedCrack.State)                                       | State property.                                               |
| [`Suppressed`](#PreMeshedCrack.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TopFaceNodes`](#PreMeshedCrack.TopFaceNodes)                         | Gets or sets the TopFaceNodes.                                |
| [`TransferableObjectId`](#PreMeshedCrack.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#PreMeshedCrack.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PreMeshedCrack.AttachedRefs"></a>

### *property* PreMeshedCrack.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.BottomFaceNodes"></a>

### *property* PreMeshedCrack.BottomFaceNodes *: [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Children"></a>

### *property* PreMeshedCrack.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.ClsId"></a>

### *property* PreMeshedCrack.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Comments"></a>

### *property* PreMeshedCrack.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.CoordinateSystem"></a>

### *property* PreMeshedCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.CrackFacesNodes"></a>

### *property* PreMeshedCrack.CrackFacesNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.CrackFront"></a>

### *property* PreMeshedCrack.CrackFront *: [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFront.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.CrackID"></a>

### *property* PreMeshedCrack.CrackID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.CrackSourceType"></a>

### *property* PreMeshedCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.CrackSurface"></a>

### *property* PreMeshedCrack.CrackSurface *: [Ansys.Mechanical.DataModel.MechanicalEnums.Fracture.CrackSurfaceType](../../../Mechanical/DataModel/MechanicalEnums/Fracture/CrackSurfaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Fracture.CrackSurfaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of crack surface. Default: Planar

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.CrackSymmetry"></a>

### *property* PreMeshedCrack.CrackSymmetry *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackSymmetry.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.DataModelObjectCategory"></a>

### *property* PreMeshedCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Figures"></a>

### *property* PreMeshedCrack.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GroupingFolder"></a>

### *property* PreMeshedCrack.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.IconName"></a>

### *property* PreMeshedCrack.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Images"></a>

### *property* PreMeshedCrack.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.ImportableObjectSourceId"></a>

### *property* PreMeshedCrack.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.InternalObject"></a>

### *property* PreMeshedCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Name"></a>

### *property* PreMeshedCrack.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.ObjectId"></a>

### *property* PreMeshedCrack.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.ObjectState"></a>

### *property* PreMeshedCrack.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.ObjectTags"></a>

### *property* PreMeshedCrack.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Parent"></a>

### *property* PreMeshedCrack.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Properties"></a>

### *property* PreMeshedCrack.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.ReadOnly"></a>

### *property* PreMeshedCrack.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.ScopingMethod"></a>

### *property* PreMeshedCrack.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.SolutionContours"></a>

### *property* PreMeshedCrack.SolutionContours *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.State"></a>

### *property* PreMeshedCrack.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Suppressed"></a>

### *property* PreMeshedCrack.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.TopFaceNodes"></a>

### *property* PreMeshedCrack.TopFaceNodes *: [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.TransferableObjectId"></a>

### *property* PreMeshedCrack.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.VisibleProperties"></a>

### *property* PreMeshedCrack.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PreMeshedCrack.Activate"></a>

### PreMeshedCrack.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.AddCommandSnippet"></a>

### PreMeshedCrack.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.AddComment"></a>

### PreMeshedCrack.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.AddFigure"></a>

### PreMeshedCrack.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.AddImage"></a>

### PreMeshedCrack.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Copy"></a>

### PreMeshedCrack.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.CopyTo"></a>

### PreMeshedCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.CreateObjRef"></a>

### PreMeshedCrack.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.CreateParameter"></a>

### PreMeshedCrack.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Cut"></a>

### PreMeshedCrack.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Delete"></a>

### PreMeshedCrack.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Duplicate"></a>

### PreMeshedCrack.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Equals"></a>

### PreMeshedCrack.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GetAPIName"></a>

### PreMeshedCrack.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GetAllProperties"></a>

### PreMeshedCrack.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GetChildren"></a>

### PreMeshedCrack.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PreMeshedCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GetDetailsView"></a>

### PreMeshedCrack.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GetEnumName"></a>

### PreMeshedCrack.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GetHashCode"></a>

### PreMeshedCrack.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GetIconFile"></a>

### PreMeshedCrack.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GetLifetimeService"></a>

### PreMeshedCrack.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GetObjectData"></a>

### PreMeshedCrack.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GetParameter"></a>

### PreMeshedCrack.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GetPath"></a>

### PreMeshedCrack.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GetPropertyName"></a>

### PreMeshedCrack.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GetPropertyValue"></a>

### PreMeshedCrack.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GetVisibleProperties"></a>

### PreMeshedCrack.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GetVisiblePropertyNames"></a>

### PreMeshedCrack.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GroupAllSimilarChildren"></a>

### PreMeshedCrack.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GroupSimilarObjects"></a>

### PreMeshedCrack.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.InitializeLifetimeService"></a>

### PreMeshedCrack.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.IsPropertyEditable"></a>

### PreMeshedCrack.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PreMeshedCrack.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.IsPropertyVisible"></a>

### PreMeshedCrack.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PreMeshedCrack.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Paste"></a>

### PreMeshedCrack.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.PropertyByAPIName"></a>

### PreMeshedCrack.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.PropertyById"></a>

### PreMeshedCrack.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.PropertyByName"></a>

### PreMeshedCrack.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.RemoveFromGroup"></a>

### PreMeshedCrack.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.RemoveParameter"></a>

### PreMeshedCrack.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

