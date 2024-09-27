# `ImportedShellThicknesses`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ImportedShellThicknesses"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ImportedShellThicknesses

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedShellThicknesses.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedShellThicknesses.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImportedShellThicknesses.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedShellThicknesses.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedShellThicknesses.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ImportedShellThicknesses.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImportedShellThicknesses.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ImportedShellThicknesses.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ImportedShellThicknesses.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ImportedShellThicknesses.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImportedShellThicknesses.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImportedShellThicknesses.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedShellThicknesses.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ImportedShellThicknesses.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedShellThicknesses.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ImportedShellThicknesses.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ImportedShellThicknesses.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedShellThicknesses.Comments)                               | Gets the list of associated comments.                         |
| [`Count`](#ImportedShellThicknesses.Count)                                     | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ImportedShellThicknesses.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ImportedShellThicknesses.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedShellThicknesses.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedShellThicknesses.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedShellThicknesses.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ImportedShellThicknesses.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#ImportedShellThicknesses.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ImportedShellThicknesses.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedShellThicknesses.Children"></a>

### *property* ImportedShellThicknesses.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Comments"></a>

### *property* ImportedShellThicknesses.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Count"></a>

### *property* ImportedShellThicknesses.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.DataModelObjectCategory"></a>

### *property* ImportedShellThicknesses.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Figures"></a>

### *property* ImportedShellThicknesses.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Images"></a>

### *property* ImportedShellThicknesses.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.InternalObject"></a>

### *property* ImportedShellThicknesses.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Properties"></a>

### *property* ImportedShellThicknesses.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.ReadOnly"></a>

### *property* ImportedShellThicknesses.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Suppressed"></a>

### *property* ImportedShellThicknesses.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.VisibleProperties"></a>

### *property* ImportedShellThicknesses.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedShellThicknesses.Activate"></a>

### ImportedShellThicknesses.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.AddComment"></a>

### ImportedShellThicknesses.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.AddFigure"></a>

### ImportedShellThicknesses.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.AddImage"></a>

### ImportedShellThicknesses.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.CopyTo"></a>

### ImportedShellThicknesses.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.CreateParameter"></a>

### ImportedShellThicknesses.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Delete"></a>

### ImportedShellThicknesses.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Duplicate"></a>

### ImportedShellThicknesses.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetChildren"></a>

### ImportedShellThicknesses.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetParameter"></a>

### ImportedShellThicknesses.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GroupAllSimilarChildren"></a>

### ImportedShellThicknesses.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GroupSimilarObjects"></a>

### ImportedShellThicknesses.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.PropertyByAPIName"></a>

### ImportedShellThicknesses.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.PropertyByName"></a>

### ImportedShellThicknesses.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.RemoveParameter"></a>

### ImportedShellThicknesses.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

