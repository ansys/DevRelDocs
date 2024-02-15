# DetonationPoint

### *class* DetonationPoint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DetonationPoint.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#DetonationPoint.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#DetonationPoint.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DetonationPoint.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#DetonationPoint.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#DetonationPoint.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#DetonationPoint.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#DetonationPoint.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DetonationPoint.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DetonationPoint.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DetonationPoint.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DetonationPoint.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DetonationPoint.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#DetonationPoint.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#DetonationPoint.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DetonationPoint.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Location`](#DetonationPoint.Location)                                                                                | Gets or sets the Direction.                                   |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`DetonationTime`](#DetonationPoint.DetonationTime)                                                                    | Gets or sets the DetonationTime.                              |
| [`XCoordinate`](#DetonationPoint.XCoordinate)                                                                          | Gets or sets the XCoordinate.                                 |
| [`YCoordinate`](#DetonationPoint.YCoordinate)                                                                          | Gets or sets the YCoordinate.                                 |
| [`ZCoordinate`](#DetonationPoint.ZCoordinate)                                                                          | Gets or sets the ZCoordinate.                                 |
| [`BurnInstantaneously`](#DetonationPoint.BurnInstantaneously)                                                          | Gets or sets the BurnInstantaneously.                         |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#DetonationPoint.Suppressed)                                                                            | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#DetonationPoint.SharedRefBody)                                                                      | Gets or sets the SharedRefBody.                               |
| [`Children`](#DetonationPoint.Children)                                                                                | Gets the list of children.                                    |
| [`Comments`](#DetonationPoint.Comments)                                                                                | Gets the list of associated comments.                         |
| [`Figures`](#DetonationPoint.Figures)                                                                                  | Gets the list of associated figures.                          |
| [`Images`](#DetonationPoint.Images)                                                                                    | Gets the list of associated images.                           |
| [`ReadOnly`](#DetonationPoint.ReadOnly)                                                                                | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#DetonationPoint.Properties)                                                                            | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#DetonationPoint.VisibleProperties)                                                              | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import DetonationPoint
```

## Property detail

### *property* DetonationPoint.Location *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

### *property* DetonationPoint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DetonationPoint.DetonationTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DetonationTime.

<!-- !! processed by numpydoc !! -->

### *property* DetonationPoint.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* DetonationPoint.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* DetonationPoint.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* DetonationPoint.BurnInstantaneously *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BurnInstantaneously.

<!-- !! processed by numpydoc !! -->

### *property* DetonationPoint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* DetonationPoint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* DetonationPoint.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* DetonationPoint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* DetonationPoint.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* DetonationPoint.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* DetonationPoint.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* DetonationPoint.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* DetonationPoint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DetonationPoint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* DetonationPoint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### DetonationPoint.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### DetonationPoint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### DetonationPoint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DetonationPoint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DetonationPoint.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### DetonationPoint.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### DetonationPoint.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### DetonationPoint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### DetonationPoint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### DetonationPoint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### DetonationPoint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### DetonationPoint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### DetonationPoint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### DetonationPoint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### DetonationPoint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### DetonationPoint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### DetonationPoint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
