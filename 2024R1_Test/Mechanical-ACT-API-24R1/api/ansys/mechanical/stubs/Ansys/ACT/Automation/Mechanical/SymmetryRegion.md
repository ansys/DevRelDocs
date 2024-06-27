# SymmetryRegion

<a id="SymmetryRegion"></a>

### *class* SymmetryRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a SymmetryRegion.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`FlipHighLow`](#SymmetryRegion.FlipHighLow)                         | Flips the High and Low Boundaries.                                                |
| [`Delete`](#SymmetryRegion.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#SymmetryRegion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#SymmetryRegion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#SymmetryRegion.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#SymmetryRegion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#SymmetryRegion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#SymmetryRegion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#SymmetryRegion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SymmetryRegion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#SymmetryRegion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#SymmetryRegion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#SymmetryRegion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#SymmetryRegion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#SymmetryRegion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`PeriodicityDirection`](#SymmetryRegion.PeriodicityDirection)                                                      | Gets or sets the PeriodicityDirection.                        |
| [`Location`](#SymmetryRegion.Location)                                                                              | Gets or sets the Location.                                    |
| [`LinearShift`](#SymmetryRegion.LinearShift)                                                                        | Gets or sets the LinearShift.                                 |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`ApplyTo`](#SymmetryRegion.ApplyTo)                                                                                | Gets or sets the ApplyTo.                                     |
| [`Behavior`](#SymmetryRegion.Behavior)                                                                              | Gets or sets the Behavior.                                    |
| [`SymmetryNormal`](#SymmetryRegion.SymmetryNormal)                                                                  | Gets or sets the SymmetryNormal.                              |
| [`Type`](#SymmetryRegion.Type)                                                                                      | Gets or sets the Type.                                        |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopeMode`](#SymmetryRegion.ScopeMode)                                                                            | Gets the ScopeMode.                                           |
| [`Suppressed`](#SymmetryRegion.Suppressed)                                                                          | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`HighBoundaryLocation`](#SymmetryRegion.HighBoundaryLocation)                                                      | Gets or sets the HighBoundaryLocation.                        |
| [`LowBoundaryLocation`](#SymmetryRegion.LowBoundaryLocation)                                                        | Gets or sets the LowBoundaryLocation.                         |
| [`Children`](#SymmetryRegion.Children)                                                                              | Gets the list of children.                                    |
| [`Comments`](#SymmetryRegion.Comments)                                                                              | Gets the list of associated comments.                         |
| [`Figures`](#SymmetryRegion.Figures)                                                                                | Gets the list of associated figures.                          |
| [`Images`](#SymmetryRegion.Images)                                                                                  | Gets the list of associated images.                           |
| [`ReadOnly`](#SymmetryRegion.ReadOnly)                                                                              | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#SymmetryRegion.Properties)                                                                          | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#SymmetryRegion.VisibleProperties)                                                            | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import SymmetryRegion
```

<a id="property-detail"></a>

## Property detail

<a id="SymmetryRegion.PeriodicityDirection"></a>

### *property* SymmetryRegion.PeriodicityDirection *: [Ansys.Mechanical.DataModel.Enums.PeriodicityDirectionType](../../../Mechanical/DataModel/Enums/PeriodicityDirectionType.md#PeriodicityDirectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PeriodicityDirection.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Location"></a>

### *property* SymmetryRegion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.LinearShift"></a>

### *property* SymmetryRegion.LinearShift *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LinearShift.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.InternalObject"></a>

### *property* SymmetryRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGeneralAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.ApplyTo"></a>

### *property* SymmetryRegion.ApplyTo *: [Ansys.Mechanical.DataModel.Enums.PeriodicApplyTo](../../../Mechanical/DataModel/Enums/PeriodicApplyTo.md#PeriodicApplyTo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ApplyTo.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Behavior"></a>

### *property* SymmetryRegion.Behavior *: [Ansys.Mechanical.DataModel.Enums.SymmetryBehavior](../../../Mechanical/DataModel/Enums/SymmetryBehavior.md#SymmetryBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.SymmetryNormal"></a>

### *property* SymmetryRegion.SymmetryNormal *: [Ansys.Mechanical.DataModel.Enums.SymmetryNormalType](../../../Mechanical/DataModel/Enums/SymmetryNormalType.md#SymmetryNormalType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SymmetryNormal.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Type"></a>

### *property* SymmetryRegion.Type *: [Ansys.Mechanical.DataModel.Enums.SymmetryRegionType](../../../Mechanical/DataModel/Enums/SymmetryRegionType.md#SymmetryRegionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.DataModelObjectCategory"></a>

### *property* SymmetryRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.ScopeMode"></a>

### *property* SymmetryRegion.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Suppressed"></a>

### *property* SymmetryRegion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.CoordinateSystem"></a>

### *property* SymmetryRegion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.HighBoundaryLocation"></a>

### *property* SymmetryRegion.HighBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.LowBoundaryLocation"></a>

### *property* SymmetryRegion.LowBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Children"></a>

### *property* SymmetryRegion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Comments"></a>

### *property* SymmetryRegion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Figures"></a>

### *property* SymmetryRegion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Images"></a>

### *property* SymmetryRegion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.ReadOnly"></a>

### *property* SymmetryRegion.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* SymmetryRegion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Properties"></a>

### *property* SymmetryRegion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.VisibleProperties"></a>

### *property* SymmetryRegion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SymmetryRegion.FlipHighLow"></a>

### SymmetryRegion.FlipHighLow()

Flips the High and Low Boundaries.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Delete"></a>

### SymmetryRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetChildren"></a>

### SymmetryRegion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### SymmetryRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.AddComment"></a>

### SymmetryRegion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.AddFigure"></a>

### SymmetryRegion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.AddImage"></a>

### SymmetryRegion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Activate"></a>

### SymmetryRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.CopyTo"></a>

### SymmetryRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Duplicate"></a>

### SymmetryRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GroupAllSimilarChildren"></a>

### SymmetryRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GroupSimilarObjects"></a>

### SymmetryRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.PropertyByName"></a>

### SymmetryRegion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.PropertyByAPIName"></a>

### SymmetryRegion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.CreateParameter"></a>

### SymmetryRegion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetParameter"></a>

### SymmetryRegion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.RemoveParameter"></a>

### SymmetryRegion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
