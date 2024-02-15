# VolumeChargeDensity

### *class* VolumeChargeDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VolumeChargeDensity.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#VolumeChargeDensity.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#VolumeChargeDensity.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#VolumeChargeDensity.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#VolumeChargeDensity.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#VolumeChargeDensity.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#VolumeChargeDensity.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#VolumeChargeDensity.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#VolumeChargeDensity.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#VolumeChargeDensity.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VolumeChargeDensity.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#VolumeChargeDensity.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#VolumeChargeDensity.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#VolumeChargeDensity.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#VolumeChargeDensity.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#VolumeChargeDensity.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Magnitude`](#VolumeChargeDensity.Magnitude)                                                                          | Gets or sets the Magnitude.                                   |
| [`Location`](#VolumeChargeDensity.Location)                                                                            | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#VolumeChargeDensity.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#VolumeChargeDensity.SharedRefBody)                                                                  | Gets or sets the SharedRefBody.                               |
| [`Children`](#VolumeChargeDensity.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#VolumeChargeDensity.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Figures`](#VolumeChargeDensity.Figures)                                                                              | Gets the list of associated figures.                          |
| [`Images`](#VolumeChargeDensity.Images)                                                                                | Gets the list of associated images.                           |
| [`ReadOnly`](#VolumeChargeDensity.ReadOnly)                                                                            | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#VolumeChargeDensity.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#VolumeChargeDensity.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import VolumeChargeDensity
```

## Property detail

### *property* VolumeChargeDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* VolumeChargeDensity.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* VolumeChargeDensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* VolumeChargeDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* VolumeChargeDensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* VolumeChargeDensity.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* VolumeChargeDensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* VolumeChargeDensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* VolumeChargeDensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* VolumeChargeDensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* VolumeChargeDensity.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* VolumeChargeDensity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* VolumeChargeDensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* VolumeChargeDensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### VolumeChargeDensity.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### VolumeChargeDensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### VolumeChargeDensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### VolumeChargeDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### VolumeChargeDensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### VolumeChargeDensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### VolumeChargeDensity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### VolumeChargeDensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### VolumeChargeDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### VolumeChargeDensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### VolumeChargeDensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### VolumeChargeDensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### VolumeChargeDensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### VolumeChargeDensity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### VolumeChargeDensity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### VolumeChargeDensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### VolumeChargeDensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
