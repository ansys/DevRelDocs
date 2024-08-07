# `LimitBoundary`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.LimitBoundary

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a LimitBoundary.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#LimitBoundary.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#LimitBoundary.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#LimitBoundary.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#LimitBoundary.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#LimitBoundary.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#LimitBoundary.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#LimitBoundary.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#LimitBoundary.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#LimitBoundary.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LimitBoundary.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#LimitBoundary.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#LimitBoundary.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#LimitBoundary.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#LimitBoundary.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#LimitBoundary.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                            | Gets the internal object. For advanced usage only.            |
| [`LimitBCMax`](#LimitBoundary.LimitBCMax)                           | Gets or sets the LimitBCMax.                                  |
| [`LimitBCMaxX`](#LimitBoundary.LimitBCMaxX)                         | Gets or sets the LimitBCMaxX.                                 |
| [`LimitBCMaxY`](#LimitBoundary.LimitBCMaxY)                         | Gets or sets the LimitBCMaxY.                                 |
| [`LimitBCMaxZ`](#LimitBoundary.LimitBCMaxZ)                         | Gets or sets the LimitBCMaxZ.                                 |
| [`LimitBCMin`](#LimitBoundary.LimitBCMin)                           | Gets or sets the LimitBCMin.                                  |
| [`LimitBCMinX`](#LimitBoundary.LimitBCMinX)                         | Gets or sets the LimitBCMinX.                                 |
| [`LimitBCMinY`](#LimitBoundary.LimitBCMinY)                         | Gets or sets the LimitBCMinY.                                 |
| [`LimitBCMinZ`](#LimitBoundary.LimitBCMinZ)                         | Gets or sets the LimitBCMinZ.                                 |
| [`LimitBCDirection`](#LimitBoundary.LimitBCDirection)               | Gets or sets the LimitBCDirection.                            |
| [`Location`](#LimitBoundary.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#LimitBoundary.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Suppressed`](#LimitBoundary.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#LimitBoundary.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Children`](#LimitBoundary.Children)                               | Gets the list of children.                                    |
| [`Comments`](#LimitBoundary.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#LimitBoundary.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#LimitBoundary.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#LimitBoundary.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#LimitBoundary.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#LimitBoundary.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="LimitBoundary.InternalObject"></a>

### *property* LimitBoundary.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.LimitBCMax"></a>

### *property* LimitBoundary.LimitBCMax *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMax.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.LimitBCMaxX"></a>

### *property* LimitBoundary.LimitBCMaxX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMaxX.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.LimitBCMaxY"></a>

### *property* LimitBoundary.LimitBCMaxY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMaxY.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.LimitBCMaxZ"></a>

### *property* LimitBoundary.LimitBCMaxZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMaxZ.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.LimitBCMin"></a>

### *property* LimitBoundary.LimitBCMin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMin.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.LimitBCMinX"></a>

### *property* LimitBoundary.LimitBCMinX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMinX.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.LimitBCMinY"></a>

### *property* LimitBoundary.LimitBCMinY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMinY.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.LimitBCMinZ"></a>

### *property* LimitBoundary.LimitBCMinZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMinZ.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.LimitBCDirection"></a>

### *property* LimitBoundary.LimitBCDirection *: [Ansys.Mechanical.DataModel.Enums.LimitBCDirection](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LimitBCDirection.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LimitBCDirection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCDirection.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.Location"></a>

### *property* LimitBoundary.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.DataModelObjectCategory"></a>

### *property* LimitBoundary.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.Suppressed"></a>

### *property* LimitBoundary.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.SharedRefBody"></a>

### *property* LimitBoundary.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.Children"></a>

### *property* LimitBoundary.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.Comments"></a>

### *property* LimitBoundary.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.Figures"></a>

### *property* LimitBoundary.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.Images"></a>

### *property* LimitBoundary.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.ReadOnly"></a>

### *property* LimitBoundary.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* LimitBoundary.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.Properties"></a>

### *property* LimitBoundary.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.VisibleProperties"></a>

### *property* LimitBoundary.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LimitBoundary.PromoteToNamedSelection"></a>

### LimitBoundary.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.Delete"></a>

### LimitBoundary.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.GetChildren"></a>

### LimitBoundary.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### LimitBoundary.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.AddComment"></a>

### LimitBoundary.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.AddFigure"></a>

### LimitBoundary.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.AddImage"></a>

### LimitBoundary.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.Activate"></a>

### LimitBoundary.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.CopyTo"></a>

### LimitBoundary.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.Duplicate"></a>

### LimitBoundary.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.GroupAllSimilarChildren"></a>

### LimitBoundary.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.GroupSimilarObjects"></a>

### LimitBoundary.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.PropertyByName"></a>

### LimitBoundary.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.PropertyByAPIName"></a>

### LimitBoundary.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.CreateParameter"></a>

### LimitBoundary.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.GetParameter"></a>

### LimitBoundary.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.RemoveParameter"></a>

### LimitBoundary.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

