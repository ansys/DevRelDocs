# ElementBirthAndDeath

### *class* ElementBirthAndDeath

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElementBirthAndDeath.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#ElementBirthAndDeath.Delete)                                   | Run the Delete action.                                                            |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ElementBirthAndDeath.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElementBirthAndDeath.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElementBirthAndDeath.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ElementBirthAndDeath.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ElementBirthAndDeath.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ElementBirthAndDeath.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ElementBirthAndDeath.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElementBirthAndDeath.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ElementBirthAndDeath.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ElementBirthAndDeath.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ElementBirthAndDeath.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ElementBirthAndDeath.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ElementBirthAndDeath.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`CurrentStep`](#ElementBirthAndDeath.CurrentStep)                                                                     | Gets or sets the CurrentStep.                                 |
| [`Status`](#ElementBirthAndDeath.Status)                                                                               | Gets or sets the Status.                                      |
| [`Location`](#ElementBirthAndDeath.Location)                                                                           | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#ElementBirthAndDeath.Suppressed)                                                                       | Gets or sets the Suppressed.                                  |
| [`Children`](#ElementBirthAndDeath.Children)                                                                           | Gets the list of children.                                    |
| [`Comments`](#ElementBirthAndDeath.Comments)                                                                           | Gets the list of associated comments.                         |
| [`Figures`](#ElementBirthAndDeath.Figures)                                                                             | Gets the list of associated figures.                          |
| [`Images`](#ElementBirthAndDeath.Images)                                                                               | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ElementBirthAndDeath.Properties)                                                                       | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ElementBirthAndDeath.VisibleProperties)                                                         | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import ElementBirthAndDeath
```

## Property detail

### *property* ElementBirthAndDeath.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSElementControlsAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ElementBirthAndDeath.CurrentStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStep.

<!-- !! processed by numpydoc !! -->

### *property* ElementBirthAndDeath.Status *: [Ansys.Mechanical.DataModel.Enums.ElementControlsStatus](../../../../Mechanical/DataModel/Enums/ElementControlsStatus.md#ElementControlsStatus) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Status.

<!-- !! processed by numpydoc !! -->

### *property* ElementBirthAndDeath.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ElementBirthAndDeath.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ElementBirthAndDeath.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ElementBirthAndDeath.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ElementBirthAndDeath.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ElementBirthAndDeath.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ElementBirthAndDeath.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ElementBirthAndDeath.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ElementBirthAndDeath.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ElementBirthAndDeath.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ElementBirthAndDeath.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ElementBirthAndDeath.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ElementBirthAndDeath.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ElementBirthAndDeath.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ElementBirthAndDeath.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ElementBirthAndDeath.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ElementBirthAndDeath.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ElementBirthAndDeath.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ElementBirthAndDeath.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ElementBirthAndDeath.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ElementBirthAndDeath.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ElementBirthAndDeath.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ElementBirthAndDeath.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ElementBirthAndDeath.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ElementBirthAndDeath.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ElementBirthAndDeath.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
