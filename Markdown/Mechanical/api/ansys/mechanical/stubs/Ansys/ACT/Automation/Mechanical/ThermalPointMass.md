# ThermalPointMass

### *class* ThermalPointMass

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ThermalPointMass.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToRemotePoint`](#ThermalPointMass.PromoteToRemotePoint)       | Run the PromoteToRemotePoint action.                                              |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](#ThermalPointMass.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](#ThermalPointMass.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ThermalPointMass.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ThermalPointMass.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ThermalPointMass.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ThermalPointMass.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ThermalPointMass.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ThermalPointMass.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ThermalPointMass.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ThermalPointMass.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ThermalPointMass.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ThermalPointMass.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ThermalPointMass.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ThermalPointMass.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ThermalPointMass.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Behavior`](#ThermalPointMass.Behavior)                                                                            | Gets or sets the Behavior.                                    |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`PinballRegion`](#ThermalPointMass.PinballRegion)                                                                  | Gets or sets the PinballRegion.                               |
| [`ThermalCapacitance`](#ThermalPointMass.ThermalCapacitance)                                                        | Gets or sets the ThermalCapacitance.                          |
| [`AppliedBy`](#ThermalPointMass.AppliedBy)                                                                          | Gets or sets the AppliedBy.                                   |
| [`Suppressed`](#ThermalPointMass.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`RemotePoint`](RemotePoint.md#RemotePoint)                                                                         | Gets the remote point associated to the point mass.           |
| [`IsDistributedMass`](#ThermalPointMass.IsDistributedMass)                                                          | Gets the IsDistributedMass.                                   |
| [`Location`](#ThermalPointMass.Location)                                                                            | Gets or sets the Geometry.                                    |
| [`Children`](#ThermalPointMass.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#ThermalPointMass.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Figures`](#ThermalPointMass.Figures)                                                                              | Gets the list of associated figures.                          |
| [`Images`](#ThermalPointMass.Images)                                                                                | Gets the list of associated images.                           |
| [`ReadOnly`](#ThermalPointMass.ReadOnly)                                                                            | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ThermalPointMass.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ThermalPointMass.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ThermalPointMass
```

## Property detail

### *property* ThermalPointMass.Behavior *: [Ansys.Mechanical.DataModel.Enums.ThermalPointMassBehavior](../../../Mechanical/DataModel/Enums/ThermalPointMassBehavior.md#ThermalPointMassBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

### *property* ThermalPointMass.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPointMassAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ThermalPointMass.PinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

### *property* ThermalPointMass.ThermalCapacitance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalCapacitance.

<!-- !! processed by numpydoc !! -->

### *property* ThermalPointMass.AppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

### *property* ThermalPointMass.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ThermalPointMass.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* ThermalPointMass.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ThermalPointMass.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

### *property* ThermalPointMass.IsDistributedMass *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsDistributedMass.

<!-- !! processed by numpydoc !! -->

### *property* ThermalPointMass.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

### *property* ThermalPointMass.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ThermalPointMass.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ThermalPointMass.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ThermalPointMass.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ThermalPointMass.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ThermalPointMass.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ThermalPointMass.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ThermalPointMass.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ThermalPointMass.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

### ThermalPointMass.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### ThermalPointMass.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ThermalPointMass.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ThermalPointMass.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ThermalPointMass.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ThermalPointMass.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ThermalPointMass.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ThermalPointMass.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ThermalPointMass.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ThermalPointMass.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ThermalPointMass.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ThermalPointMass.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ThermalPointMass.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ThermalPointMass.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ThermalPointMass.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ThermalPointMass.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ThermalPointMass.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
