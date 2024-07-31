# `PointMass`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.PointMass

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PointMass.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToRemotePoint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.PromoteToRemotePoint)       | Run the PromoteToRemotePoint action.                                              |
| [`AddCommandSnippet`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ElementAPDLName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.ElementAPDLName)                 | Gets or sets the ElementAPDLName.                             |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#id0)                                        | Gets the internal object. For advanced usage only.            |
| [`Material`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.Material)                               | Gets or sets the Material.                                    |
| [`BeamRadius`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.BeamRadius)                           | Gets or sets the BeamRadius.                                  |
| [`XCoordinate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.XCoordinate)                         | Gets or sets the XCoordinate.                                 |
| [`YCoordinate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.YCoordinate)                         | Gets or sets the YCoordinate.                                 |
| [`ZCoordinate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.ZCoordinate)                         | Gets or sets the ZCoordinate.                                 |
| [`Mass`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.Mass)                                       | Gets or sets the Mass.                                        |
| [`MassMomentOfInertiaX`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.MassMomentOfInertiaX)       | Gets or sets the MassMomentOfInertiaX.                        |
| [`MassMomentOfInertiaY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.MassMomentOfInertiaY)       | Gets or sets the MassMomentOfInertiaY.                        |
| [`MassMomentOfInertiaZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.MassMomentOfInertiaZ)       | Gets or sets the MassMomentOfInertiaZ.                        |
| [`PinballRegion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.PinballRegion)                     | Gets or sets the PinballRegion.                               |
| [`AppliedBy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.AppliedBy)                             | Gets or sets the AppliedBy.                                   |
| [`Behavior`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.Behavior)                               | Gets or sets the Behavior.                                    |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`NodalCoordinateSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.NodalCoordinateSystem)     | Gets the NodalCoordinateSystem.                               |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`RemotePoint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.RemotePoint)                         | Gets the remote point associated to the point mass.           |
| [`IsDistributedMass`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.IsDistributedMass)             | Gets the IsDistributedMass.                                   |
| [`Location`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.Location)                               | Gets or sets the Geometry.                                    |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#id0)                                        | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PointMass.md#PointMass.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PointMass.ElementAPDLName"></a>

### *property* PointMass.ElementAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.InternalObject"></a>

### *property* PointMass.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPointMassAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Material"></a>

### *property* PointMass.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.BeamRadius"></a>

### *property* PointMass.BeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.XCoordinate"></a>

### *property* PointMass.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.YCoordinate"></a>

### *property* PointMass.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.ZCoordinate"></a>

### *property* PointMass.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Mass"></a>

### *property* PointMass.Mass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mass.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.MassMomentOfInertiaX"></a>

### *property* PointMass.MassMomentOfInertiaX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassMomentOfInertiaX.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.MassMomentOfInertiaY"></a>

### *property* PointMass.MassMomentOfInertiaY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassMomentOfInertiaY.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.MassMomentOfInertiaZ"></a>

### *property* PointMass.MassMomentOfInertiaZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassMomentOfInertiaZ.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.PinballRegion"></a>

### *property* PointMass.PinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.AppliedBy"></a>

### *property* PointMass.AppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Behavior"></a>

### *property* PointMass.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Suppressed"></a>

### *property* PointMass.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.CoordinateSystem"></a>

### *property* PointMass.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.NodalCoordinateSystem"></a>

### *property* PointMass.NodalCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NodalCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.DataModelObjectCategory"></a>

### *property* PointMass.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.RemotePoint"></a>

### *property* PointMass.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.IsDistributedMass"></a>

### *property* PointMass.IsDistributedMass *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsDistributedMass.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Location"></a>

### *property* PointMass.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Children"></a>

### *property* PointMass.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Comments"></a>

### *property* PointMass.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Figures"></a>

### *property* PointMass.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Images"></a>

### *property* PointMass.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.ReadOnly"></a>

### *property* PointMass.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PointMass.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Properties"></a>

### *property* PointMass.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.VisibleProperties"></a>

### *property* PointMass.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PointMass.PromoteToRemotePoint"></a>

### PointMass.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.AddCommandSnippet"></a>

### PointMass.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Delete"></a>

### PointMass.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.GetChildren"></a>

### PointMass.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### PointMass.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.AddComment"></a>

### PointMass.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.AddFigure"></a>

### PointMass.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.AddImage"></a>

### PointMass.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Activate"></a>

### PointMass.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.CopyTo"></a>

### PointMass.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Duplicate"></a>

### PointMass.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.GroupAllSimilarChildren"></a>

### PointMass.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.GroupSimilarObjects"></a>

### PointMass.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.PropertyByName"></a>

### PointMass.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.PropertyByAPIName"></a>

### PointMass.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.CreateParameter"></a>

### PointMass.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.GetParameter"></a>

### PointMass.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.RemoveParameter"></a>

### PointMass.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

