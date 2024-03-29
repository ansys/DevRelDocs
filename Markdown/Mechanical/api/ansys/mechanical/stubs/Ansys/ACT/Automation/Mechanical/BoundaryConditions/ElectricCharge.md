# ElectricCharge

### *class* ElectricCharge

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElectricCharge.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#ElectricCharge.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ElectricCharge.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ElectricCharge.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElectricCharge.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#ElectricCharge.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#ElectricCharge.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#ElectricCharge.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ElectricCharge.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ElectricCharge.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElectricCharge.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ElectricCharge.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ElectricCharge.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#ElectricCharge.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ElectricCharge.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ElectricCharge.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Location`](#ElectricCharge.Location)                                                                                 | Gets or sets the Location.                                    |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Magnitude`](#ElectricCharge.Magnitude)                                                                               | Gets or sets the Magnitude.                                   |
| [`VoltageCoupling`](#ElectricCharge.VoltageCoupling)                                                                   | Gets or sets the VoltageCoupling.                             |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#ElectricCharge.Suppressed)                                                                             | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#ElectricCharge.SharedRefBody)                                                                       | Gets or sets the SharedRefBody.                               |
| [`Children`](#ElectricCharge.Children)                                                                                 | Gets the list of children.                                    |
| [`Comments`](#ElectricCharge.Comments)                                                                                 | Gets the list of associated comments.                         |
| [`Figures`](#ElectricCharge.Figures)                                                                                   | Gets the list of associated figures.                          |
| [`Images`](#ElectricCharge.Images)                                                                                     | Gets the list of associated images.                           |
| [`ReadOnly`](#ElectricCharge.ReadOnly)                                                                                 | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ElectricCharge.Properties)                                                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ElectricCharge.VisibleProperties)                                                               | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import ElectricCharge
```

## Property detail

### *property* ElectricCharge.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ElectricCharge.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ElectricCharge.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* ElectricCharge.VoltageCoupling *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling](Coupling.md#Coupling) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageCoupling.

<!-- !! processed by numpydoc !! -->

### *property* ElectricCharge.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ElectricCharge.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ElectricCharge.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* ElectricCharge.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ElectricCharge.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ElectricCharge.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ElectricCharge.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ElectricCharge.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ElectricCharge.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ElectricCharge.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ElectricCharge.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ElectricCharge.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### ElectricCharge.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ElectricCharge.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ElectricCharge.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ElectricCharge.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ElectricCharge.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ElectricCharge.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ElectricCharge.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ElectricCharge.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ElectricCharge.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ElectricCharge.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ElectricCharge.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ElectricCharge.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ElectricCharge.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ElectricCharge.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ElectricCharge.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ElectricCharge.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
