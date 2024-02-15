# PreMeshedCyclicRegion

### *class* PreMeshedCyclicRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PreMeshedCyclicRegion.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`FlipHighLow`](#PreMeshedCyclicRegion.FlipHighLow)                         | Flips the High and Low Boundaries.                                                |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#PreMeshedCyclicRegion.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PreMeshedCyclicRegion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PreMeshedCyclicRegion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PreMeshedCyclicRegion.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#PreMeshedCyclicRegion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PreMeshedCyclicRegion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PreMeshedCyclicRegion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PreMeshedCyclicRegion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PreMeshedCyclicRegion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PreMeshedCyclicRegion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PreMeshedCyclicRegion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#PreMeshedCyclicRegion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PreMeshedCyclicRegion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PreMeshedCyclicRegion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`RelativeDistanceTolerance`](#PreMeshedCyclicRegion.RelativeDistanceTolerance)                                     | Gets or sets the RelativeDistanceTolerance.                   |
| [`NumberOfSectors`](#PreMeshedCyclicRegion.NumberOfSectors)                                                         | Gets or sets the NumberOfSectors.                             |
| [`BoundaryDOFOrientation`](#PreMeshedCyclicRegion.BoundaryDOFOrientation)                                           | Gets or sets the BoundaryDOFOrientation.                      |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopeMode`](#PreMeshedCyclicRegion.ScopeMode)                                                                     | Gets the ScopeMode.                                           |
| [`Suppressed`](#PreMeshedCyclicRegion.Suppressed)                                                                   | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#PreMeshedCyclicRegion.Location)                                                                       | Gets or sets the Location.                                    |
| [`HighBoundaryLocation`](#PreMeshedCyclicRegion.HighBoundaryLocation)                                               | Gets or sets the HighBoundaryLocation.                        |
| [`LowBoundaryLocation`](#PreMeshedCyclicRegion.LowBoundaryLocation)                                                 | Gets or sets the LowBoundaryLocation.                         |
| [`Children`](#PreMeshedCyclicRegion.Children)                                                                       | Gets the list of children.                                    |
| [`Comments`](#PreMeshedCyclicRegion.Comments)                                                                       | Gets the list of associated comments.                         |
| [`Figures`](#PreMeshedCyclicRegion.Figures)                                                                         | Gets the list of associated figures.                          |
| [`Images`](#PreMeshedCyclicRegion.Images)                                                                           | Gets the list of associated images.                           |
| [`ReadOnly`](#PreMeshedCyclicRegion.ReadOnly)                                                                       | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PreMeshedCyclicRegion.Properties)                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PreMeshedCyclicRegion.VisibleProperties)                                                     | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import PreMeshedCyclicRegion
```

## Property detail

### *property* PreMeshedCyclicRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGeneralAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PreMeshedCyclicRegion.RelativeDistanceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelativeDistanceTolerance.

<!-- !! processed by numpydoc !! -->

### *property* PreMeshedCyclicRegion.NumberOfSectors *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSectors.

<!-- !! processed by numpydoc !! -->

### *property* PreMeshedCyclicRegion.BoundaryDOFOrientation *: [Ansys.Mechanical.DataModel.Enums.SymmetryBoundaryDOFOrientation](../../../Mechanical/DataModel/Enums/SymmetryBoundaryDOFOrientation.md#SymmetryBoundaryDOFOrientation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryDOFOrientation.

<!-- !! processed by numpydoc !! -->

### *property* PreMeshedCyclicRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* PreMeshedCyclicRegion.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

### *property* PreMeshedCyclicRegion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* PreMeshedCyclicRegion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* PreMeshedCyclicRegion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* PreMeshedCyclicRegion.HighBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighBoundaryLocation.

<!-- !! processed by numpydoc !! -->

### *property* PreMeshedCyclicRegion.LowBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowBoundaryLocation.

<!-- !! processed by numpydoc !! -->

### *property* PreMeshedCyclicRegion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PreMeshedCyclicRegion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* PreMeshedCyclicRegion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* PreMeshedCyclicRegion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* PreMeshedCyclicRegion.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* PreMeshedCyclicRegion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PreMeshedCyclicRegion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PreMeshedCyclicRegion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### PreMeshedCyclicRegion.FlipHighLow()

Flips the High and Low Boundaries.

<!-- !! processed by numpydoc !! -->

### PreMeshedCyclicRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PreMeshedCyclicRegion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PreMeshedCyclicRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PreMeshedCyclicRegion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### PreMeshedCyclicRegion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### PreMeshedCyclicRegion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### PreMeshedCyclicRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PreMeshedCyclicRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PreMeshedCyclicRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PreMeshedCyclicRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PreMeshedCyclicRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PreMeshedCyclicRegion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PreMeshedCyclicRegion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### PreMeshedCyclicRegion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PreMeshedCyclicRegion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PreMeshedCyclicRegion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
