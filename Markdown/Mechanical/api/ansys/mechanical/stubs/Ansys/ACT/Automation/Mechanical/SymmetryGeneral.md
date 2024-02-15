# SymmetryGeneral

### *class* SymmetryGeneral

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a SymmetryGeneral.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`FlipHighLow`](#SymmetryGeneral.FlipHighLow)                         | Flips the High and Low Boundaries.                                                |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#SymmetryGeneral.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#SymmetryGeneral.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#SymmetryGeneral.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#SymmetryGeneral.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#SymmetryGeneral.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#SymmetryGeneral.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#SymmetryGeneral.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#SymmetryGeneral.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SymmetryGeneral.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#SymmetryGeneral.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#SymmetryGeneral.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#SymmetryGeneral.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#SymmetryGeneral.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#SymmetryGeneral.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ScopeMode`](#SymmetryGeneral.ScopeMode)                                                                           | Gets the ScopeMode.                                           |
| [`Suppressed`](#SymmetryGeneral.Suppressed)                                                                         | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#SymmetryGeneral.Location)                                                                             | Gets or sets the Location.                                    |
| [`HighBoundaryLocation`](#SymmetryGeneral.HighBoundaryLocation)                                                     | Gets or sets the HighBoundaryLocation.                        |
| [`LowBoundaryLocation`](#SymmetryGeneral.LowBoundaryLocation)                                                       | Gets or sets the LowBoundaryLocation.                         |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#SymmetryGeneral.Children)                                                                             | Gets the list of children.                                    |
| [`Comments`](#SymmetryGeneral.Comments)                                                                             | Gets the list of associated comments.                         |
| [`Figures`](#SymmetryGeneral.Figures)                                                                               | Gets the list of associated figures.                          |
| [`Images`](#SymmetryGeneral.Images)                                                                                 | Gets the list of associated images.                           |
| [`ReadOnly`](#SymmetryGeneral.ReadOnly)                                                                             | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#SymmetryGeneral.Properties)                                                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#SymmetryGeneral.VisibleProperties)                                                           | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import SymmetryGeneral
```

## Property detail

### *property* SymmetryGeneral.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGeneralAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SymmetryGeneral.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

### *property* SymmetryGeneral.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* SymmetryGeneral.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* SymmetryGeneral.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* SymmetryGeneral.HighBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighBoundaryLocation.

<!-- !! processed by numpydoc !! -->

### *property* SymmetryGeneral.LowBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowBoundaryLocation.

<!-- !! processed by numpydoc !! -->

### *property* SymmetryGeneral.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* SymmetryGeneral.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* SymmetryGeneral.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* SymmetryGeneral.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* SymmetryGeneral.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* SymmetryGeneral.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* SymmetryGeneral.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SymmetryGeneral.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* SymmetryGeneral.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### SymmetryGeneral.FlipHighLow()

Flips the High and Low Boundaries.

<!-- !! processed by numpydoc !! -->

### SymmetryGeneral.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### SymmetryGeneral.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SymmetryGeneral.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SymmetryGeneral.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### SymmetryGeneral.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### SymmetryGeneral.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### SymmetryGeneral.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### SymmetryGeneral.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### SymmetryGeneral.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### SymmetryGeneral.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### SymmetryGeneral.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### SymmetryGeneral.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### SymmetryGeneral.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### SymmetryGeneral.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### SymmetryGeneral.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### SymmetryGeneral.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
