# PointMass

### *class* PointMass

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PointMass.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToRemotePoint`](#PointMass.PromoteToRemotePoint)       | Run the PromoteToRemotePoint action.                                              |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](#PointMass.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](#PointMass.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PointMass.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PointMass.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PointMass.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#PointMass.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PointMass.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PointMass.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PointMass.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PointMass.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PointMass.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PointMass.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#PointMass.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PointMass.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PointMass.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ElementAPDLName`](#PointMass.ElementAPDLName)                                                                     | Gets or sets the ElementAPDLName.                             |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Material`](Material.md#Material)                                                                                  | Gets or sets the Material.                                    |
| [`BeamRadius`](#PointMass.BeamRadius)                                                                               | Gets or sets the BeamRadius.                                  |
| [`XCoordinate`](#PointMass.XCoordinate)                                                                             | Gets or sets the XCoordinate.                                 |
| [`YCoordinate`](#PointMass.YCoordinate)                                                                             | Gets or sets the YCoordinate.                                 |
| [`ZCoordinate`](#PointMass.ZCoordinate)                                                                             | Gets or sets the ZCoordinate.                                 |
| [`Mass`](#PointMass.Mass)                                                                                           | Gets or sets the Mass.                                        |
| [`MassMomentOfInertiaX`](#PointMass.MassMomentOfInertiaX)                                                           | Gets or sets the MassMomentOfInertiaX.                        |
| [`MassMomentOfInertiaY`](#PointMass.MassMomentOfInertiaY)                                                           | Gets or sets the MassMomentOfInertiaY.                        |
| [`MassMomentOfInertiaZ`](#PointMass.MassMomentOfInertiaZ)                                                           | Gets or sets the MassMomentOfInertiaZ.                        |
| [`PinballRegion`](#PointMass.PinballRegion)                                                                         | Gets or sets the PinballRegion.                               |
| [`AppliedBy`](#PointMass.AppliedBy)                                                                                 | Gets or sets the AppliedBy.                                   |
| [`Behavior`](#PointMass.Behavior)                                                                                   | Gets or sets the Behavior.                                    |
| [`Suppressed`](#PointMass.Suppressed)                                                                               | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`NodalCoordinateSystem`](#PointMass.NodalCoordinateSystem)                                                         | Gets the NodalCoordinateSystem.                               |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`RemotePoint`](RemotePoint.md#RemotePoint)                                                                         | Gets the remote point associated to the point mass.           |
| [`IsDistributedMass`](#PointMass.IsDistributedMass)                                                                 | Gets the IsDistributedMass.                                   |
| [`Location`](#PointMass.Location)                                                                                   | Gets or sets the Geometry.                                    |
| [`Children`](#PointMass.Children)                                                                                   | Gets the list of children.                                    |
| [`Comments`](#PointMass.Comments)                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#PointMass.Figures)                                                                                     | Gets the list of associated figures.                          |
| [`Images`](#PointMass.Images)                                                                                       | Gets the list of associated images.                           |
| [`ReadOnly`](#PointMass.ReadOnly)                                                                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PointMass.Properties)                                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PointMass.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import PointMass
```

## Property detail

### *property* PointMass.ElementAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementAPDLName.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPointMassAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.BeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamRadius.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.Mass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mass.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.MassMomentOfInertiaX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassMomentOfInertiaX.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.MassMomentOfInertiaY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassMomentOfInertiaY.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.MassMomentOfInertiaZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassMomentOfInertiaZ.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.PinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.AppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.NodalCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NodalCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.IsDistributedMass *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsDistributedMass.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PointMass.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### PointMass.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

### PointMass.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### PointMass.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PointMass.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PointMass.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PointMass.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### PointMass.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### PointMass.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### PointMass.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PointMass.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PointMass.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PointMass.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PointMass.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PointMass.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PointMass.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### PointMass.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PointMass.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PointMass.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
