# `ContactSizing`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshControls.ContactSizing"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.ContactSizing

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactSizing.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactSizing.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ContactSizing.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ContactSizing.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ContactSizing.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ContactSizing.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactSizing.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ContactSizing.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ContactSizing.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#ContactSizing.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#ContactSizing.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactSizing.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactSizing.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactSizing.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ContactSizing.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactSizing.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactSizing.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ContactSizing.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ContactSizing.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ContactSizing.Comments)                               | Gets the list of associated comments.                         |
| [`ContactRegion`](#ContactSizing.ContactRegion)                     | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](#ContactSizing.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ElementSize`](#ContactSizing.ElementSize)                         | Gets or sets the ElementSize.                                 |
| [`Figures`](#ContactSizing.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ContactSizing.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ContactSizing.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactSizing.Properties)                           | Gets the list of properties for this object.                  |
| [`Relevance`](#ContactSizing.Relevance)                             | Gets or sets the Relevance.                                   |
| [`ScopingMethod`](#ContactSizing.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#ContactSizing.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Type`](#ContactSizing.Type)                                       | Gets or sets the Type.                                        |
| [`VisibleProperties`](#ContactSizing.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactSizing.Children"></a>

### *property* ContactSizing.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Comments"></a>

### *property* ContactSizing.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.ContactRegion"></a>

### *property* ContactSizing.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../Connections/ContactRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.DataModelObjectCategory"></a>

### *property* ContactSizing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.ElementSize"></a>

### *property* ContactSizing.ElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSize.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Figures"></a>

### *property* ContactSizing.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Images"></a>

### *property* ContactSizing.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.InternalObject"></a>

### *property* ContactSizing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Properties"></a>

### *property* ContactSizing.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Relevance"></a>

### *property* ContactSizing.Relevance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Relevance.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.ScopingMethod"></a>

### *property* ContactSizing.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Suppressed"></a>

### *property* ContactSizing.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Type"></a>

### *property* ContactSizing.Type *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.VisibleProperties"></a>

### *property* ContactSizing.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactSizing.Activate"></a>

### ContactSizing.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.AddComment"></a>

### ContactSizing.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.AddFigure"></a>

### ContactSizing.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.AddImage"></a>

### ContactSizing.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.CopyTo"></a>

### ContactSizing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.CreateParameter"></a>

### ContactSizing.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Delete"></a>

### ContactSizing.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Duplicate"></a>

### ContactSizing.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GenerateMesh"></a>

### ContactSizing.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GetChildren"></a>

### ContactSizing.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GetParameter"></a>

### ContactSizing.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GroupAllSimilarChildren"></a>

### ContactSizing.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GroupSimilarObjects"></a>

### ContactSizing.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.PropertyByAPIName"></a>

### ContactSizing.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.PropertyByName"></a>

### ContactSizing.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.RemoveParameter"></a>

### ContactSizing.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.RenameBasedOnDefinition"></a>

### ContactSizing.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

