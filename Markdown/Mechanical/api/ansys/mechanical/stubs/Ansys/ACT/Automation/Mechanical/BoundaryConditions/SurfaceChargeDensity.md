# SurfaceChargeDensity

### *class* SurfaceChargeDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a SurfaceChargeDensity.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#SurfaceChargeDensity.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#SurfaceChargeDensity.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#SurfaceChargeDensity.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#SurfaceChargeDensity.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#SurfaceChargeDensity.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#SurfaceChargeDensity.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#SurfaceChargeDensity.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#SurfaceChargeDensity.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#SurfaceChargeDensity.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SurfaceChargeDensity.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#SurfaceChargeDensity.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#SurfaceChargeDensity.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#SurfaceChargeDensity.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#SurfaceChargeDensity.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#SurfaceChargeDensity.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Magnitude`](#SurfaceChargeDensity.Magnitude)                                                                         | Gets or sets the Magnitude.                                   |
| [`Location`](#SurfaceChargeDensity.Location)                                                                           | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#SurfaceChargeDensity.Suppressed)                                                                       | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#SurfaceChargeDensity.SharedRefBody)                                                                 | Gets or sets the SharedRefBody.                               |
| [`Children`](#SurfaceChargeDensity.Children)                                                                           | Gets the list of children.                                    |
| [`Comments`](#SurfaceChargeDensity.Comments)                                                                           | Gets the list of associated comments.                         |
| [`Figures`](#SurfaceChargeDensity.Figures)                                                                             | Gets the list of associated figures.                          |
| [`Images`](#SurfaceChargeDensity.Images)                                                                               | Gets the list of associated images.                           |
| [`ReadOnly`](#SurfaceChargeDensity.ReadOnly)                                                                           | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#SurfaceChargeDensity.Properties)                                                                       | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#SurfaceChargeDensity.VisibleProperties)                                                         | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import SurfaceChargeDensity
```

## Property detail

### *property* SurfaceChargeDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SurfaceChargeDensity.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* SurfaceChargeDensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* SurfaceChargeDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* SurfaceChargeDensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* SurfaceChargeDensity.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* SurfaceChargeDensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* SurfaceChargeDensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* SurfaceChargeDensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* SurfaceChargeDensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* SurfaceChargeDensity.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* SurfaceChargeDensity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SurfaceChargeDensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* SurfaceChargeDensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### SurfaceChargeDensity.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### SurfaceChargeDensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### SurfaceChargeDensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SurfaceChargeDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SurfaceChargeDensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### SurfaceChargeDensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### SurfaceChargeDensity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### SurfaceChargeDensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### SurfaceChargeDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### SurfaceChargeDensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### SurfaceChargeDensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### SurfaceChargeDensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### SurfaceChargeDensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### SurfaceChargeDensity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### SurfaceChargeDensity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### SurfaceChargeDensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### SurfaceChargeDensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
