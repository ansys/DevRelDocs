# `MeshNumbering`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshNumbering"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshNumbering

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MeshNumbering.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MeshNumbering.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#MeshNumbering.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MeshNumbering.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshNumbering.AddImage)                               | Creates a new child Image.                                                        |
| [`AddNumberingControl`](#MeshNumbering.AddNumberingControl)         | Creates a new NumberingControl                                                    |
| [`CopyTo`](#MeshNumbering.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MeshNumbering.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MeshNumbering.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MeshNumbering.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#MeshNumbering.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MeshNumbering.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MeshNumbering.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshNumbering.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MeshNumbering.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MeshNumbering.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MeshNumbering.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenumberMesh`](#MeshNumbering.RenumberMesh)                       | Run the RenumberMesh action.                                                      |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#MeshNumbering.Children)                               | Gets the list of children.                                    |
| [`Comments`](#MeshNumbering.Comments)                               | Gets the list of associated comments.                         |
| [`CompressNodeNumbers`](#MeshNumbering.CompressNodeNumbers)         | Gets or sets the CompressNodeNumbers.                         |
| [`DataModelObjectCategory`](#MeshNumbering.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ElementOffset`](#MeshNumbering.ElementOffset)                     | Gets or sets the ElementOffset.                               |
| [`Figures`](#MeshNumbering.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#MeshNumbering.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#MeshNumbering.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`NodeOffset`](#MeshNumbering.NodeOffset)                           | Gets or sets the NodeOffset.                                  |
| [`Properties`](#MeshNumbering.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#MeshNumbering.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#MeshNumbering.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshNumbering.Children"></a>

### *property* MeshNumbering.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Comments"></a>

### *property* MeshNumbering.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.CompressNodeNumbers"></a>

### *property* MeshNumbering.CompressNodeNumbers *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CompressNodeNumbers.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.DataModelObjectCategory"></a>

### *property* MeshNumbering.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.ElementOffset"></a>

### *property* MeshNumbering.ElementOffset *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOffset.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Figures"></a>

### *property* MeshNumbering.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Images"></a>

### *property* MeshNumbering.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.InternalObject"></a>

### *property* MeshNumbering.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshRenumberingControlGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.NodeOffset"></a>

### *property* MeshNumbering.NodeOffset *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeOffset.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Properties"></a>

### *property* MeshNumbering.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Suppressed"></a>

### *property* MeshNumbering.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.VisibleProperties"></a>

### *property* MeshNumbering.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshNumbering.Activate"></a>

### MeshNumbering.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.AddComment"></a>

### MeshNumbering.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.AddFigure"></a>

### MeshNumbering.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.AddImage"></a>

### MeshNumbering.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.AddNumberingControl"></a>

### MeshNumbering.AddNumberingControl()

Creates a new NumberingControl

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.CopyTo"></a>

### MeshNumbering.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.CreateParameter"></a>

### MeshNumbering.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Delete"></a>

### MeshNumbering.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Duplicate"></a>

### MeshNumbering.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetChildren"></a>

### MeshNumbering.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetParameter"></a>

### MeshNumbering.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GroupAllSimilarChildren"></a>

### MeshNumbering.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GroupSimilarObjects"></a>

### MeshNumbering.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.PropertyByAPIName"></a>

### MeshNumbering.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.PropertyByName"></a>

### MeshNumbering.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.RemoveParameter"></a>

### MeshNumbering.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.RenumberMesh"></a>

### MeshNumbering.RenumberMesh()

Run the RenumberMesh action.

<!-- !! processed by numpydoc !! -->

