# AcousticImpedanceBoundary

### *class* AcousticImpedanceBoundary

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticImpedanceBoundary.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#AcousticImpedanceBoundary.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#AcousticImpedanceBoundary.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticImpedanceBoundary.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticImpedanceBoundary.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticImpedanceBoundary.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#AcousticImpedanceBoundary.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#AcousticImpedanceBoundary.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticImpedanceBoundary.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticImpedanceBoundary.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticImpedanceBoundary.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticImpedanceBoundary.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticImpedanceBoundary.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticImpedanceBoundary.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticImpedanceBoundary.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticImpedanceBoundary.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Reactance`](#AcousticImpedanceBoundary.Reactance)                                                                    | Gets or sets the Reactance.                                   |
| [`Resistance`](#AcousticImpedanceBoundary.Resistance)                                                                  | Gets or sets the Resistance.                                  |
| [`Frequency`](#AcousticImpedanceBoundary.Frequency)                                                                    | Gets or sets the Frequency.                                   |
| [`Location`](#AcousticImpedanceBoundary.Location)                                                                      | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#AcousticImpedanceBoundary.Suppressed)                                                                  | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#AcousticImpedanceBoundary.SharedRefBody)                                                            | Gets or sets the SharedRefBody.                               |
| [`Children`](#AcousticImpedanceBoundary.Children)                                                                      | Gets the list of children.                                    |
| [`Comments`](#AcousticImpedanceBoundary.Comments)                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#AcousticImpedanceBoundary.Figures)                                                                        | Gets the list of associated figures.                          |
| [`Images`](#AcousticImpedanceBoundary.Images)                                                                          | Gets the list of associated images.                           |
| [`ReadOnly`](#AcousticImpedanceBoundary.ReadOnly)                                                                      | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticImpedanceBoundary.Properties)                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticImpedanceBoundary.VisibleProperties)                                                    | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import AcousticImpedanceBoundary
```

## Property detail

### *property* AcousticImpedanceBoundary.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticImpedanceBoundary.Reactance *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Reactance.

<!-- !! processed by numpydoc !! -->

### *property* AcousticImpedanceBoundary.Resistance *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Resistance.

<!-- !! processed by numpydoc !! -->

### *property* AcousticImpedanceBoundary.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticImpedanceBoundary.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AcousticImpedanceBoundary.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticImpedanceBoundary.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticImpedanceBoundary.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* AcousticImpedanceBoundary.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticImpedanceBoundary.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticImpedanceBoundary.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AcousticImpedanceBoundary.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticImpedanceBoundary.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* AcousticImpedanceBoundary.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticImpedanceBoundary.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticImpedanceBoundary.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticImpedanceBoundary.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AcousticImpedanceBoundary.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticImpedanceBoundary.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticImpedanceBoundary.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticImpedanceBoundary.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticImpedanceBoundary.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AcousticImpedanceBoundary.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticImpedanceBoundary.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticImpedanceBoundary.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticImpedanceBoundary.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticImpedanceBoundary.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticImpedanceBoundary.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticImpedanceBoundary.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticImpedanceBoundary.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticImpedanceBoundary.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### AcousticImpedanceBoundary.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticImpedanceBoundary.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
