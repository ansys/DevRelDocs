# MassFlowRate

### *class* MassFlowRate

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MassFlowRate.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#MassFlowRate.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#MassFlowRate.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MassFlowRate.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#MassFlowRate.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#MassFlowRate.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#MassFlowRate.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#MassFlowRate.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MassFlowRate.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MassFlowRate.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MassFlowRate.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MassFlowRate.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MassFlowRate.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#MassFlowRate.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MassFlowRate.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MassFlowRate.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Magnitude`](#MassFlowRate.Magnitude)                                                                                 | Gets the Magnitude.                                           |
| [`Location`](#MassFlowRate.Location)                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#MassFlowRate.Suppressed)                                                                               | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#MassFlowRate.SharedRefBody)                                                                         | Gets or sets the SharedRefBody.                               |
| [`Children`](#MassFlowRate.Children)                                                                                   | Gets the list of children.                                    |
| [`Comments`](#MassFlowRate.Comments)                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#MassFlowRate.Figures)                                                                                     | Gets the list of associated figures.                          |
| [`Images`](#MassFlowRate.Images)                                                                                       | Gets the list of associated images.                           |
| [`ReadOnly`](#MassFlowRate.ReadOnly)                                                                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MassFlowRate.Properties)                                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MassFlowRate.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import MassFlowRate
```

## Property detail

### *property* MassFlowRate.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MassFlowRate.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* MassFlowRate.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* MassFlowRate.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MassFlowRate.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MassFlowRate.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* MassFlowRate.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MassFlowRate.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MassFlowRate.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MassFlowRate.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MassFlowRate.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* MassFlowRate.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MassFlowRate.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MassFlowRate.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MassFlowRate.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### MassFlowRate.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MassFlowRate.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MassFlowRate.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MassFlowRate.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MassFlowRate.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MassFlowRate.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MassFlowRate.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MassFlowRate.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MassFlowRate.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MassFlowRate.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MassFlowRate.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MassFlowRate.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MassFlowRate.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MassFlowRate.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MassFlowRate.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MassFlowRate.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
