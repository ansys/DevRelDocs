# `PeriodicRegion`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.PeriodicRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PeriodicRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`FlipHighLow`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.FlipHighLow)                         | Flips the High and Low Boundaries.                                                |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`Type`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.Type)                                       | Gets or sets the Type.                                        |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopeMode`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.ScopeMode)                             | Gets the ScopeMode.                                           |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`Location`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.Location)                               | Gets or sets the Location.                                    |
| [`HighBoundaryLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.HighBoundaryLocation)       | Gets or sets the HighBoundaryLocation.                        |
| [`LowBoundaryLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.LowBoundaryLocation)         | Gets or sets the LowBoundaryLocation.                         |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PeriodicRegion.md#PeriodicRegion.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PeriodicRegion.InternalObject"></a>

### *property* PeriodicRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGeneralAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Type"></a>

### *property* PeriodicRegion.Type *: [Ansys.Mechanical.DataModel.Enums.PeriodicRegionType](../../../Mechanical/DataModel/Enums/PeriodicRegionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PeriodicRegionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.DataModelObjectCategory"></a>

### *property* PeriodicRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.ScopeMode"></a>

### *property* PeriodicRegion.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Suppressed"></a>

### *property* PeriodicRegion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.CoordinateSystem"></a>

### *property* PeriodicRegion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Location"></a>

### *property* PeriodicRegion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.HighBoundaryLocation"></a>

### *property* PeriodicRegion.HighBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.LowBoundaryLocation"></a>

### *property* PeriodicRegion.LowBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Children"></a>

### *property* PeriodicRegion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Comments"></a>

### *property* PeriodicRegion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Figures"></a>

### *property* PeriodicRegion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Images"></a>

### *property* PeriodicRegion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.ReadOnly"></a>

### *property* PeriodicRegion.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PeriodicRegion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Properties"></a>

### *property* PeriodicRegion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.VisibleProperties"></a>

### *property* PeriodicRegion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PeriodicRegion.FlipHighLow"></a>

### PeriodicRegion.FlipHighLow()

Flips the High and Low Boundaries.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Delete"></a>

### PeriodicRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetChildren"></a>

### PeriodicRegion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### PeriodicRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.AddComment"></a>

### PeriodicRegion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.AddFigure"></a>

### PeriodicRegion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.AddImage"></a>

### PeriodicRegion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Activate"></a>

### PeriodicRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.CopyTo"></a>

### PeriodicRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Duplicate"></a>

### PeriodicRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GroupAllSimilarChildren"></a>

### PeriodicRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GroupSimilarObjects"></a>

### PeriodicRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.PropertyByName"></a>

### PeriodicRegion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.PropertyByAPIName"></a>

### PeriodicRegion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.CreateParameter"></a>

### PeriodicRegion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetParameter"></a>

### PeriodicRegion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.RemoveParameter"></a>

### PeriodicRegion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

