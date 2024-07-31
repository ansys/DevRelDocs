# `NodalRotation`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalRotation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NodalRotation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#NodalRotation.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#NodalRotation.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NodalRotation.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#NodalRotation.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#NodalRotation.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#NodalRotation.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#NodalRotation.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NodalRotation.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NodalRotation.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NodalRotation.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NodalRotation.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NodalRotation.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#NodalRotation.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#NodalRotation.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NodalRotation.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                            | Gets the internal object. For advanced usage only.            |
| [`RotationX`](#NodalRotation.RotationX)                             | Gets or sets the RotationX.                                   |
| [`RotationY`](#NodalRotation.RotationY)                             | Gets or sets the RotationY.                                   |
| [`RotationZ`](#NodalRotation.RotationZ)                             | Gets or sets the RotationZ.                                   |
| [`CoordinateSystem`](#NodalRotation.CoordinateSystem)               | Gets the CoordinateSystem.                                    |
| [`Location`](#NodalRotation.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#NodalRotation.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#NodalRotation.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#NodalRotation.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Children`](#NodalRotation.Children)                               | Gets the list of children.                                    |
| [`Comments`](#NodalRotation.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#NodalRotation.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#NodalRotation.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#NodalRotation.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#NodalRotation.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#NodalRotation.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NodalRotation.InternalObject"></a>

### *property* NodalRotation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.RotationX"></a>

### *property* NodalRotation.RotationX *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationX.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.RotationY"></a>

### *property* NodalRotation.RotationY *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationY.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.RotationZ"></a>

### *property* NodalRotation.RotationZ *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationZ.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.CoordinateSystem"></a>

### *property* NodalRotation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Location"></a>

### *property* NodalRotation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.DataModelObjectCategory"></a>

### *property* NodalRotation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Suppressed"></a>

### *property* NodalRotation.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.SharedRefBody"></a>

### *property* NodalRotation.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Children"></a>

### *property* NodalRotation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Comments"></a>

### *property* NodalRotation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Figures"></a>

### *property* NodalRotation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Images"></a>

### *property* NodalRotation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.ReadOnly"></a>

### *property* NodalRotation.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NodalRotation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Properties"></a>

### *property* NodalRotation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.VisibleProperties"></a>

### *property* NodalRotation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodalRotation.PromoteToNamedSelection"></a>

### NodalRotation.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Delete"></a>

### NodalRotation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GetChildren"></a>

### NodalRotation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### NodalRotation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.AddComment"></a>

### NodalRotation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.AddFigure"></a>

### NodalRotation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.AddImage"></a>

### NodalRotation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Activate"></a>

### NodalRotation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.CopyTo"></a>

### NodalRotation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Duplicate"></a>

### NodalRotation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GroupAllSimilarChildren"></a>

### NodalRotation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GroupSimilarObjects"></a>

### NodalRotation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.PropertyByName"></a>

### NodalRotation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.PropertyByAPIName"></a>

### NodalRotation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.CreateParameter"></a>

### NodalRotation.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GetParameter"></a>

### NodalRotation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.RemoveParameter"></a>

### NodalRotation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

