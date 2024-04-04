# AcousticRadiationBoundary

### *class* AcousticRadiationBoundary

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticRadiationBoundary.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#AcousticRadiationBoundary.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#AcousticRadiationBoundary.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticRadiationBoundary.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticRadiationBoundary.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticRadiationBoundary.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#AcousticRadiationBoundary.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#AcousticRadiationBoundary.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticRadiationBoundary.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticRadiationBoundary.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticRadiationBoundary.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticRadiationBoundary.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticRadiationBoundary.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticRadiationBoundary.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticRadiationBoundary.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticRadiationBoundary.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Location`](#AcousticRadiationBoundary.Location)                                                                      | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#AcousticRadiationBoundary.Suppressed)                                                                  | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#AcousticRadiationBoundary.SharedRefBody)                                                            | Gets or sets the SharedRefBody.                               |
| [`Children`](#AcousticRadiationBoundary.Children)                                                                      | Gets the list of children.                                    |
| [`Comments`](#AcousticRadiationBoundary.Comments)                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#AcousticRadiationBoundary.Figures)                                                                        | Gets the list of associated figures.                          |
| [`Images`](#AcousticRadiationBoundary.Images)                                                                          | Gets the list of associated images.                           |
| [`ReadOnly`](#AcousticRadiationBoundary.ReadOnly)                                                                      | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticRadiationBoundary.Properties)                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticRadiationBoundary.VisibleProperties)                                                    | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import AcousticRadiationBoundary
```

## Property detail

### *property* AcousticRadiationBoundary.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticRadiationBoundary.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AcousticRadiationBoundary.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticRadiationBoundary.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticRadiationBoundary.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* AcousticRadiationBoundary.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticRadiationBoundary.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticRadiationBoundary.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AcousticRadiationBoundary.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticRadiationBoundary.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* AcousticRadiationBoundary.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticRadiationBoundary.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticRadiationBoundary.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticRadiationBoundary.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AcousticRadiationBoundary.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticRadiationBoundary.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticRadiationBoundary.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticRadiationBoundary.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticRadiationBoundary.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AcousticRadiationBoundary.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticRadiationBoundary.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticRadiationBoundary.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticRadiationBoundary.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticRadiationBoundary.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticRadiationBoundary.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticRadiationBoundary.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticRadiationBoundary.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticRadiationBoundary.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### AcousticRadiationBoundary.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticRadiationBoundary.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
