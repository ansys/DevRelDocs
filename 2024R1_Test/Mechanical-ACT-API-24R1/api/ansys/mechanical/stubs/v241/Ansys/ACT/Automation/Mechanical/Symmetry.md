<!-- vale off -->

<a id="symmetry"></a>

# `Symmetry`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Symmetry"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Symmetry

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Symmetry.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddLinearPeriodicRegion`](#Symmetry.AddLinearPeriodicRegion)   | Creates a new SymmetryRegion                                                      |
| [`AddCyclicRegion`](#Symmetry.AddCyclicRegion)                   | Creates a new CyclicRegion                                                        |
| [`AddGeneralAxisymmetric`](#Symmetry.AddGeneralAxisymmetric)     | Creates a new GeneralAxisymmetric                                                 |
| [`AddPeriodicRegion`](#Symmetry.AddPeriodicRegion)               | Creates a new PeriodicRegion                                                      |
| [`AddPreMeshedCyclicRegion`](#Symmetry.AddPreMeshedCyclicRegion) | Creates a new PreMeshedCyclicRegion                                               |
| [`AddStage`](#Symmetry.AddStage)                                 | Creates a new Stage                                                               |
| [`AddSymmetryRegion`](#Symmetry.AddSymmetryRegion)               | Creates a new SymmetryRegion                                                      |
| [`Delete`](#Symmetry.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Symmetry.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#Symmetry.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#Symmetry.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#Symmetry.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#Symmetry.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Symmetry.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Symmetry.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Symmetry.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Symmetry.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Symmetry.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#Symmetry.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Symmetry.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Symmetry.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                       | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#Symmetry.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Symmetry.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Symmetry.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#Symmetry.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Symmetry.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#Symmetry.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                       | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Symmetry.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Symmetry.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Symmetry.InternalObject"></a>

### *property* Symmetry.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.DataModelObjectCategory"></a>

### *property* Symmetry.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Children"></a>

### *property* Symmetry.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Comments"></a>

### *property* Symmetry.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Figures"></a>

### *property* Symmetry.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Images"></a>

### *property* Symmetry.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.ReadOnly"></a>

### *property* Symmetry.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Symmetry.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Properties"></a>

### *property* Symmetry.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.VisibleProperties"></a>

### *property* Symmetry.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Symmetry.AddLinearPeriodicRegion"></a>

### Symmetry.AddLinearPeriodicRegion()

Creates a new SymmetryRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddCyclicRegion"></a>

### Symmetry.AddCyclicRegion()

Creates a new CyclicRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddGeneralAxisymmetric"></a>

### Symmetry.AddGeneralAxisymmetric()

Creates a new GeneralAxisymmetric

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddPeriodicRegion"></a>

### Symmetry.AddPeriodicRegion()

Creates a new PeriodicRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddPreMeshedCyclicRegion"></a>

### Symmetry.AddPreMeshedCyclicRegion()

Creates a new PreMeshedCyclicRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddStage"></a>

### Symmetry.AddStage()

Creates a new Stage

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddSymmetryRegion"></a>

### Symmetry.AddSymmetryRegion()

Creates a new SymmetryRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Delete"></a>

### Symmetry.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetChildren"></a>

### Symmetry.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Symmetry.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddComment"></a>

### Symmetry.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddFigure"></a>

### Symmetry.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddImage"></a>

### Symmetry.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Activate"></a>

### Symmetry.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.CopyTo"></a>

### Symmetry.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Duplicate"></a>

### Symmetry.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GroupAllSimilarChildren"></a>

### Symmetry.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GroupSimilarObjects"></a>

### Symmetry.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.PropertyByName"></a>

### Symmetry.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.PropertyByAPIName"></a>

### Symmetry.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.CreateParameter"></a>

### Symmetry.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetParameter"></a>

### Symmetry.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.RemoveParameter"></a>

### Symmetry.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
