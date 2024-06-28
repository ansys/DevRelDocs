<!-- vale off -->

<a id="importedconstraintequations"></a>

# `ImportedConstraintEquations`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedConstraintEquations"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedConstraintEquations

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedConstraintEquations.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ImportedConstraintEquations.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedConstraintEquations.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedConstraintEquations.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedConstraintEquations.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedConstraintEquations.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedConstraintEquations.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedConstraintEquations.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedConstraintEquations.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedConstraintEquations.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedConstraintEquations.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedConstraintEquations.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedConstraintEquations.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedConstraintEquations.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedConstraintEquations.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                          | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#ImportedConstraintEquations.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Count`](#ImportedConstraintEquations.Count)                                     | Gets the NumberOfRows.                                        |
| [`Suppressed`](#ImportedConstraintEquations.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Children`](#ImportedConstraintEquations.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedConstraintEquations.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#ImportedConstraintEquations.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedConstraintEquations.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#ImportedConstraintEquations.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                          | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedConstraintEquations.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImportedConstraintEquations.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedConstraintEquations.InternalObject"></a>

### *property* ImportedConstraintEquations.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.DataModelObjectCategory"></a>

### *property* ImportedConstraintEquations.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.Count"></a>

### *property* ImportedConstraintEquations.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.Suppressed"></a>

### *property* ImportedConstraintEquations.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.Children"></a>

### *property* ImportedConstraintEquations.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.Comments"></a>

### *property* ImportedConstraintEquations.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.Figures"></a>

### *property* ImportedConstraintEquations.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.Images"></a>

### *property* ImportedConstraintEquations.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.ReadOnly"></a>

### *property* ImportedConstraintEquations.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedConstraintEquations.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.Properties"></a>

### *property* ImportedConstraintEquations.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.VisibleProperties"></a>

### *property* ImportedConstraintEquations.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedConstraintEquations.Delete"></a>

### ImportedConstraintEquations.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.GetChildren"></a>

### ImportedConstraintEquations.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedConstraintEquations.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.AddComment"></a>

### ImportedConstraintEquations.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.AddFigure"></a>

### ImportedConstraintEquations.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.AddImage"></a>

### ImportedConstraintEquations.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.Activate"></a>

### ImportedConstraintEquations.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.CopyTo"></a>

### ImportedConstraintEquations.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.Duplicate"></a>

### ImportedConstraintEquations.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.GroupAllSimilarChildren"></a>

### ImportedConstraintEquations.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.GroupSimilarObjects"></a>

### ImportedConstraintEquations.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.PropertyByName"></a>

### ImportedConstraintEquations.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.PropertyByAPIName"></a>

### ImportedConstraintEquations.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.CreateParameter"></a>

### ImportedConstraintEquations.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.GetParameter"></a>

### ImportedConstraintEquations.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedConstraintEquations.RemoveParameter"></a>

### ImportedConstraintEquations.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
