# MagneticFluxParallel

### *class* MagneticFluxParallel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MagneticFluxParallel.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#MagneticFluxParallel.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#MagneticFluxParallel.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MagneticFluxParallel.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#MagneticFluxParallel.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#MagneticFluxParallel.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#MagneticFluxParallel.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#MagneticFluxParallel.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MagneticFluxParallel.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MagneticFluxParallel.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MagneticFluxParallel.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MagneticFluxParallel.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MagneticFluxParallel.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#MagneticFluxParallel.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MagneticFluxParallel.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MagneticFluxParallel.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Location`](#MagneticFluxParallel.Location)                                                                           | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#MagneticFluxParallel.Suppressed)                                                                       | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#MagneticFluxParallel.SharedRefBody)                                                                 | Gets or sets the SharedRefBody.                               |
| [`Children`](#MagneticFluxParallel.Children)                                                                           | Gets the list of children.                                    |
| [`Comments`](#MagneticFluxParallel.Comments)                                                                           | Gets the list of associated comments.                         |
| [`Figures`](#MagneticFluxParallel.Figures)                                                                             | Gets the list of associated figures.                          |
| [`Images`](#MagneticFluxParallel.Images)                                                                               | Gets the list of associated images.                           |
| [`ReadOnly`](#MagneticFluxParallel.ReadOnly)                                                                           | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MagneticFluxParallel.Properties)                                                                       | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MagneticFluxParallel.VisibleProperties)                                                         | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import MagneticFluxParallel
```

## Property detail

### *property* MagneticFluxParallel.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxParallel.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxParallel.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxParallel.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxParallel.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxParallel.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxParallel.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxParallel.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxParallel.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxParallel.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxParallel.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxParallel.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxParallel.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MagneticFluxParallel.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### MagneticFluxParallel.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MagneticFluxParallel.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MagneticFluxParallel.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MagneticFluxParallel.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MagneticFluxParallel.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MagneticFluxParallel.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MagneticFluxParallel.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MagneticFluxParallel.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MagneticFluxParallel.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MagneticFluxParallel.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MagneticFluxParallel.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MagneticFluxParallel.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MagneticFluxParallel.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MagneticFluxParallel.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MagneticFluxParallel.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MagneticFluxParallel.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
