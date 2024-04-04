# Symmetry

### *class* Symmetry

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Symmetry.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddLinearPeriodicRegion`](#Symmetry.AddLinearPeriodicRegion)   | Creates a new SymmetryRegion                                                      |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Symmetry.Children)                                                                                    | Gets the list of children.                                    |
| [`Comments`](#Symmetry.Comments)                                                                                    | Gets the list of associated comments.                         |
| [`Figures`](#Symmetry.Figures)                                                                                      | Gets the list of associated figures.                          |
| [`Images`](#Symmetry.Images)                                                                                        | Gets the list of associated images.                           |
| [`ReadOnly`](#Symmetry.ReadOnly)                                                                                    | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Symmetry.Properties)                                                                                | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Symmetry.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Symmetry
```

## Property detail

### *property* Symmetry.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Symmetry.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Symmetry.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Symmetry.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Symmetry.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Symmetry.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Symmetry.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Symmetry.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Symmetry.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Symmetry.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Symmetry.AddLinearPeriodicRegion()

Creates a new SymmetryRegion

<!-- !! processed by numpydoc !! -->

### Symmetry.AddCyclicRegion()

Creates a new CyclicRegion

<!-- !! processed by numpydoc !! -->

### Symmetry.AddGeneralAxisymmetric()

Creates a new GeneralAxisymmetric

<!-- !! processed by numpydoc !! -->

### Symmetry.AddPeriodicRegion()

Creates a new PeriodicRegion

<!-- !! processed by numpydoc !! -->

### Symmetry.AddPreMeshedCyclicRegion()

Creates a new PreMeshedCyclicRegion

<!-- !! processed by numpydoc !! -->

### Symmetry.AddStage()

Creates a new Stage

<!-- !! processed by numpydoc !! -->

### Symmetry.AddSymmetryRegion()

Creates a new SymmetryRegion

<!-- !! processed by numpydoc !! -->

### Symmetry.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Symmetry.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Symmetry.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Symmetry.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Symmetry.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Symmetry.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Symmetry.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Symmetry.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Symmetry.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Symmetry.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Symmetry.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Symmetry.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Symmetry.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Symmetry.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Symmetry.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Symmetry.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
