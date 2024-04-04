# PeriodicRegion

### *class* PeriodicRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PeriodicRegion.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`FlipHighLow`](#PeriodicRegion.FlipHighLow)                         | Flips the High and Low Boundaries.                                                |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#PeriodicRegion.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PeriodicRegion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PeriodicRegion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PeriodicRegion.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#PeriodicRegion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PeriodicRegion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PeriodicRegion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PeriodicRegion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PeriodicRegion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PeriodicRegion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PeriodicRegion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#PeriodicRegion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PeriodicRegion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PeriodicRegion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Type`](#PeriodicRegion.Type)                                                                                      | Gets or sets the Type.                                        |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopeMode`](#PeriodicRegion.ScopeMode)                                                                            | Gets the ScopeMode.                                           |
| [`Suppressed`](#PeriodicRegion.Suppressed)                                                                          | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#PeriodicRegion.Location)                                                                              | Gets or sets the Location.                                    |
| [`HighBoundaryLocation`](#PeriodicRegion.HighBoundaryLocation)                                                      | Gets or sets the HighBoundaryLocation.                        |
| [`LowBoundaryLocation`](#PeriodicRegion.LowBoundaryLocation)                                                        | Gets or sets the LowBoundaryLocation.                         |
| [`Children`](#PeriodicRegion.Children)                                                                              | Gets the list of children.                                    |
| [`Comments`](#PeriodicRegion.Comments)                                                                              | Gets the list of associated comments.                         |
| [`Figures`](#PeriodicRegion.Figures)                                                                                | Gets the list of associated figures.                          |
| [`Images`](#PeriodicRegion.Images)                                                                                  | Gets the list of associated images.                           |
| [`ReadOnly`](#PeriodicRegion.ReadOnly)                                                                              | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PeriodicRegion.Properties)                                                                          | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PeriodicRegion.VisibleProperties)                                                            | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import PeriodicRegion
```

## Property detail

### *property* PeriodicRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGeneralAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PeriodicRegion.Type *: [Ansys.Mechanical.DataModel.Enums.PeriodicRegionType](../../../Mechanical/DataModel/Enums/PeriodicRegionType.md#PeriodicRegionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

### *property* PeriodicRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* PeriodicRegion.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

### *property* PeriodicRegion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* PeriodicRegion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* PeriodicRegion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* PeriodicRegion.HighBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighBoundaryLocation.

<!-- !! processed by numpydoc !! -->

### *property* PeriodicRegion.LowBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowBoundaryLocation.

<!-- !! processed by numpydoc !! -->

### *property* PeriodicRegion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PeriodicRegion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* PeriodicRegion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* PeriodicRegion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* PeriodicRegion.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* PeriodicRegion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PeriodicRegion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PeriodicRegion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### PeriodicRegion.FlipHighLow()

Flips the High and Low Boundaries.

<!-- !! processed by numpydoc !! -->

### PeriodicRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PeriodicRegion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PeriodicRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PeriodicRegion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### PeriodicRegion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### PeriodicRegion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### PeriodicRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PeriodicRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PeriodicRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PeriodicRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PeriodicRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PeriodicRegion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PeriodicRegion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### PeriodicRegion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PeriodicRegion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PeriodicRegion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
