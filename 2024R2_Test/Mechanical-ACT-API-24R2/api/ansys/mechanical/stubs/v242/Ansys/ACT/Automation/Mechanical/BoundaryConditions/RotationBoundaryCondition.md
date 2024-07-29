# `RotationBoundaryCondition`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotationBoundaryCondition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a RotationBoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#RotationBoundaryCondition.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RotationBoundaryCondition.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RotationBoundaryCondition.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RotationBoundaryCondition.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#RotationBoundaryCondition.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#RotationBoundaryCondition.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RotationBoundaryCondition.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RotationBoundaryCondition.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RotationBoundaryCondition.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RotationBoundaryCondition.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RotationBoundaryCondition.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#RotationBoundaryCondition.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RotationBoundaryCondition.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RotationBoundaryCondition.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Axis`](#RotationBoundaryCondition.Axis)                                       | Gets or sets the Axis.                                        |
| [`InternalObject`](#id0)                                                        | Gets the internal object. For advanced usage only.            |
| [`NumberOfSegments`](#RotationBoundaryCondition.NumberOfSegments)               | Gets or sets the NumberOfSegments.                            |
| [`Suppressed`](#RotationBoundaryCondition.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](#RotationBoundaryCondition.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#RotationBoundaryCondition.Children)                               | Gets the list of children.                                    |
| [`Comments`](#RotationBoundaryCondition.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#RotationBoundaryCondition.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#RotationBoundaryCondition.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#RotationBoundaryCondition.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                        | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RotationBoundaryCondition.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RotationBoundaryCondition.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="RotationBoundaryCondition.Axis"></a>

### *property* RotationBoundaryCondition.Axis *: [Ansys.Mechanical.Math.BoundVector](../../../../../../v241/Ansys/Mechanical/Math/BoundVector.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Math.BoundVector) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.InternalObject"></a>

### *property* RotationBoundaryCondition.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRotationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.NumberOfSegments"></a>

### *property* RotationBoundaryCondition.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Suppressed"></a>

### *property* RotationBoundaryCondition.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.DataModelObjectCategory"></a>

### *property* RotationBoundaryCondition.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Children"></a>

### *property* RotationBoundaryCondition.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Comments"></a>

### *property* RotationBoundaryCondition.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Figures"></a>

### *property* RotationBoundaryCondition.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Images"></a>

### *property* RotationBoundaryCondition.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.ReadOnly"></a>

### *property* RotationBoundaryCondition.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* RotationBoundaryCondition.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Properties"></a>

### *property* RotationBoundaryCondition.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.VisibleProperties"></a>

### *property* RotationBoundaryCondition.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RotationBoundaryCondition.Delete"></a>

### RotationBoundaryCondition.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GetChildren"></a>

### RotationBoundaryCondition.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### RotationBoundaryCondition.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.AddComment"></a>

### RotationBoundaryCondition.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.AddFigure"></a>

### RotationBoundaryCondition.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.AddImage"></a>

### RotationBoundaryCondition.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Activate"></a>

### RotationBoundaryCondition.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.CopyTo"></a>

### RotationBoundaryCondition.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Duplicate"></a>

### RotationBoundaryCondition.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GroupAllSimilarChildren"></a>

### RotationBoundaryCondition.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GroupSimilarObjects"></a>

### RotationBoundaryCondition.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.PropertyByName"></a>

### RotationBoundaryCondition.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.PropertyByAPIName"></a>

### RotationBoundaryCondition.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.CreateParameter"></a>

### RotationBoundaryCondition.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GetParameter"></a>

### RotationBoundaryCondition.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.RemoveParameter"></a>

### RotationBoundaryCondition.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

