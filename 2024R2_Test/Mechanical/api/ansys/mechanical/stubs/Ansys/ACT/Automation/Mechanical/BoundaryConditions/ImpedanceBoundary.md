# ImpedanceBoundary

### *class* ImpedanceBoundary

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImpedanceBoundary.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#ImpedanceBoundary.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ImpedanceBoundary.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImpedanceBoundary.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImpedanceBoundary.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#ImpedanceBoundary.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#ImpedanceBoundary.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#ImpedanceBoundary.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImpedanceBoundary.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImpedanceBoundary.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImpedanceBoundary.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImpedanceBoundary.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImpedanceBoundary.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImpedanceBoundary.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImpedanceBoundary.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImpedanceBoundary.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`MaterialImpedance`](#ImpedanceBoundary.MaterialImpedance)                                                            | Gets or sets the MaterialImpedance.                           |
| [`ReferencePressure`](#ImpedanceBoundary.ReferencePressure)                                                            | Gets or sets the ReferencePressure.                           |
| [`ReferenceVelocity`](#ImpedanceBoundary.ReferenceVelocity)                                                            | Gets or sets the ReferenceVelocity.                           |
| [`Location`](#ImpedanceBoundary.Location)                                                                              | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#ImpedanceBoundary.Suppressed)                                                                          | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#ImpedanceBoundary.SharedRefBody)                                                                    | Gets or sets the SharedRefBody.                               |
| [`Children`](#ImpedanceBoundary.Children)                                                                              | Gets the list of children.                                    |
| [`Comments`](#ImpedanceBoundary.Comments)                                                                              | Gets the list of associated comments.                         |
| [`Figures`](#ImpedanceBoundary.Figures)                                                                                | Gets the list of associated figures.                          |
| [`Images`](#ImpedanceBoundary.Images)                                                                                  | Gets the list of associated images.                           |
| [`ReadOnly`](#ImpedanceBoundary.ReadOnly)                                                                              | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImpedanceBoundary.Properties)                                                                          | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImpedanceBoundary.VisibleProperties)                                                            | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import ImpedanceBoundary
```

## Property detail

### *property* ImpedanceBoundary.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImpedanceBoundary.MaterialImpedance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialImpedance.

<!-- !! processed by numpydoc !! -->

### *property* ImpedanceBoundary.ReferencePressure *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePressure.

<!-- !! processed by numpydoc !! -->

### *property* ImpedanceBoundary.ReferenceVelocity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceVelocity.

<!-- !! processed by numpydoc !! -->

### *property* ImpedanceBoundary.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ImpedanceBoundary.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImpedanceBoundary.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImpedanceBoundary.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* ImpedanceBoundary.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImpedanceBoundary.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImpedanceBoundary.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImpedanceBoundary.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImpedanceBoundary.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ImpedanceBoundary.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImpedanceBoundary.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImpedanceBoundary.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImpedanceBoundary.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### ImpedanceBoundary.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImpedanceBoundary.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImpedanceBoundary.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImpedanceBoundary.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImpedanceBoundary.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImpedanceBoundary.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImpedanceBoundary.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImpedanceBoundary.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImpedanceBoundary.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImpedanceBoundary.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImpedanceBoundary.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImpedanceBoundary.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImpedanceBoundary.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImpedanceBoundary.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImpedanceBoundary.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImpedanceBoundary.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
