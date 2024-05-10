# ThermalPointMass

<a id="ThermalPointMass"></a>

### *class* ThermalPointMass

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ThermalPointMass.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToRemotePoint`](#ThermalPointMass.PromoteToRemotePoint)       | Run the PromoteToRemotePoint action.                                              |
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

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Behavior`](#ThermalPointMass.Behavior)                                                                            | Gets or sets the Behavior.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`PinballRegion`](#ThermalPointMass.PinballRegion)                                                                  | Gets or sets the PinballRegion.                               |
| [`ThermalCapacitance`](#ThermalPointMass.ThermalCapacitance)                                                        | Gets or sets the ThermalCapacitance.                          |
| [`AppliedBy`](#ThermalPointMass.AppliedBy)                                                                          | Gets or sets the AppliedBy.                                   |
| [`Suppressed`](#ThermalPointMass.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](./../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
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

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ThermalPointMass
```

<a id="property-detail"></a>

## Property detail

<a id="ThermalPointMass.Behavior"></a>

### *property* ThermalPointMass.Behavior *: [Ansys.Mechanical.DataModel.Enums.ThermalPointMassBehavior](./../../../Mechanical/DataModel/Enums/ThermalPointMassBehavior.md#ThermalPointMassBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.InternalObject"></a>

### *property* ThermalPointMass.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPointMassAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.PinballRegion"></a>

### *property* ThermalPointMass.PinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.ThermalCapacitance"></a>

### *property* ThermalPointMass.ThermalCapacitance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalCapacitance.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.AppliedBy"></a>

### *property* ThermalPointMass.AppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](./../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Suppressed"></a>

### *property* ThermalPointMass.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.CoordinateSystem"></a>

### *property* ThermalPointMass.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.DataModelObjectCategory"></a>

### *property* ThermalPointMass.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.RemotePoint"></a>

### *property* ThermalPointMass.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.IsDistributedMass"></a>

### *property* ThermalPointMass.IsDistributedMass *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsDistributedMass.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Location"></a>

### *property* ThermalPointMass.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Children"></a>

### *property* ThermalPointMass.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Comments"></a>

### *property* ThermalPointMass.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Figures"></a>

### *property* ThermalPointMass.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Images"></a>

### *property* ThermalPointMass.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.ReadOnly"></a>

### *property* ThermalPointMass.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ThermalPointMass.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Properties"></a>

### *property* ThermalPointMass.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.VisibleProperties"></a>

### *property* ThermalPointMass.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ThermalPointMass.PromoteToRemotePoint"></a>

### ThermalPointMass.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.AddCommandSnippet"></a>

### ThermalPointMass.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Delete"></a>

### ThermalPointMass.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetChildren"></a>

### ThermalPointMass.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ThermalPointMass.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.AddComment"></a>

### ThermalPointMass.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.AddFigure"></a>

### ThermalPointMass.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.AddImage"></a>

### ThermalPointMass.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Activate"></a>

### ThermalPointMass.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.CopyTo"></a>

### ThermalPointMass.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Duplicate"></a>

### ThermalPointMass.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GroupAllSimilarChildren"></a>

### ThermalPointMass.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GroupSimilarObjects"></a>

### ThermalPointMass.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.PropertyByName"></a>

### ThermalPointMass.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.PropertyByAPIName"></a>

### ThermalPointMass.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.CreateParameter"></a>

### ThermalPointMass.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetParameter"></a>

### ThermalPointMass.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.RemoveParameter"></a>

### ThermalPointMass.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
