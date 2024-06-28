<!-- vale off -->

<a id="importedshellthicknesses"></a>

# `ImportedShellThicknesses`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedShellThicknesses"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedShellThicknesses

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedShellThicknesses.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ImportedShellThicknesses.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedShellThicknesses.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedShellThicknesses.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedShellThicknesses.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedShellThicknesses.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedShellThicknesses.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedShellThicknesses.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedShellThicknesses.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedShellThicknesses.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedShellThicknesses.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedShellThicknesses.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedShellThicknesses.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedShellThicknesses.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedShellThicknesses.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                       | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#ImportedShellThicknesses.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Count`](#ImportedShellThicknesses.Count)                                     | Gets the NumberOfRows.                                        |
| [`Suppressed`](#ImportedShellThicknesses.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Children`](#ImportedShellThicknesses.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedShellThicknesses.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#ImportedShellThicknesses.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedShellThicknesses.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#ImportedShellThicknesses.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                       | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedShellThicknesses.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImportedShellThicknesses.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedShellThicknesses.InternalObject"></a>

### *property* ImportedShellThicknesses.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.DataModelObjectCategory"></a>

### *property* ImportedShellThicknesses.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Count"></a>

### *property* ImportedShellThicknesses.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Suppressed"></a>

### *property* ImportedShellThicknesses.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Children"></a>

### *property* ImportedShellThicknesses.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Comments"></a>

### *property* ImportedShellThicknesses.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Figures"></a>

### *property* ImportedShellThicknesses.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Images"></a>

### *property* ImportedShellThicknesses.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.ReadOnly"></a>

### *property* ImportedShellThicknesses.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedShellThicknesses.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Properties"></a>

### *property* ImportedShellThicknesses.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.VisibleProperties"></a>

### *property* ImportedShellThicknesses.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedShellThicknesses.Delete"></a>

### ImportedShellThicknesses.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetChildren"></a>

### ImportedShellThicknesses.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedShellThicknesses.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Activate"></a>

### ImportedShellThicknesses.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.CopyTo"></a>

### ImportedShellThicknesses.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Duplicate"></a>

### ImportedShellThicknesses.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GroupAllSimilarChildren"></a>

### ImportedShellThicknesses.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GroupSimilarObjects"></a>

### ImportedShellThicknesses.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.PropertyByName"></a>

### ImportedShellThicknesses.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.PropertyByAPIName"></a>

### ImportedShellThicknesses.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.CreateParameter"></a>

### ImportedShellThicknesses.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetParameter"></a>

### ImportedShellThicknesses.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.RemoveParameter"></a>

### ImportedShellThicknesses.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
