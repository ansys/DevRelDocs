# `FixedRotation`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FixedRotation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FixedRotation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#FixedRotation.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#FixedRotation.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FixedRotation.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#FixedRotation.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#FixedRotation.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#FixedRotation.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#FixedRotation.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FixedRotation.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FixedRotation.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FixedRotation.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FixedRotation.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FixedRotation.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#FixedRotation.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FixedRotation.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FixedRotation.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                            | Gets the internal object. For advanced usage only.            |
| [`RotationX`](#FixedRotation.RotationX)                             | Gets or sets the RotationX.                                   |
| [`RotationY`](#FixedRotation.RotationY)                             | Gets or sets the RotationY.                                   |
| [`RotationZ`](#FixedRotation.RotationZ)                             | Gets or sets the RotationZ.                                   |
| [`CoordinateSystem`](#FixedRotation.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`Location`](#FixedRotation.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#FixedRotation.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Suppressed`](#FixedRotation.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#FixedRotation.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Children`](#FixedRotation.Children)                               | Gets the list of children.                                    |
| [`Comments`](#FixedRotation.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#FixedRotation.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#FixedRotation.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#FixedRotation.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#FixedRotation.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#FixedRotation.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FixedRotation.InternalObject"></a>

### *property* FixedRotation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.RotationX"></a>

### *property* FixedRotation.RotationX *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationX.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.RotationY"></a>

### *property* FixedRotation.RotationY *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationY.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.RotationZ"></a>

### *property* FixedRotation.RotationZ *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationZ.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.CoordinateSystem"></a>

### *property* FixedRotation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Location"></a>

### *property* FixedRotation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.DataModelObjectCategory"></a>

### *property* FixedRotation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Suppressed"></a>

### *property* FixedRotation.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.SharedRefBody"></a>

### *property* FixedRotation.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Children"></a>

### *property* FixedRotation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Comments"></a>

### *property* FixedRotation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Figures"></a>

### *property* FixedRotation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Images"></a>

### *property* FixedRotation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.ReadOnly"></a>

### *property* FixedRotation.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FixedRotation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Properties"></a>

### *property* FixedRotation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.VisibleProperties"></a>

### *property* FixedRotation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FixedRotation.PromoteToNamedSelection"></a>

### FixedRotation.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Delete"></a>

### FixedRotation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetChildren"></a>

### FixedRotation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FixedRotation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.AddComment"></a>

### FixedRotation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.AddFigure"></a>

### FixedRotation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.AddImage"></a>

### FixedRotation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Activate"></a>

### FixedRotation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.CopyTo"></a>

### FixedRotation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Duplicate"></a>

### FixedRotation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GroupAllSimilarChildren"></a>

### FixedRotation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GroupSimilarObjects"></a>

### FixedRotation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.PropertyByName"></a>

### FixedRotation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.PropertyByAPIName"></a>

### FixedRotation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.CreateParameter"></a>

### FixedRotation.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetParameter"></a>

### FixedRotation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.RemoveParameter"></a>

### FixedRotation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

