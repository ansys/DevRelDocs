<!-- vale off -->

<a id="coordinatesystems"></a>

# `CoordinateSystems`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystems"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystems

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CoordinateSystems.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCoordinateSystemAtCenterOfMass`](#CoordinateSystems.AddCoordinateSystemAtCenterOfMass)   | AddCoordinateSystemAtCenterOfMass method.                                         |
| [`AddCoordinateSystem`](#CoordinateSystems.AddCoordinateSystem)                               | Creates a new CoordinateSystem                                                    |
| [`GetChildren`](#id1)                                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CoordinateSystems.AddComment)                                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](#CoordinateSystems.AddFigure)                                                   | Creates a new child Figure.                                                       |
| [`AddImage`](#CoordinateSystems.AddImage)                                                     | Creates a new child Image.                                                        |
| [`Activate`](#CoordinateSystems.Activate)                                                     | Activate the current object.                                                      |
| [`CopyTo`](#CoordinateSystems.CopyTo)                                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CoordinateSystems.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CoordinateSystems.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CoordinateSystems.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CoordinateSystems.PropertyByName)                                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CoordinateSystems.PropertyByAPIName)                                   | Get a property by its API name.                                                   |
| [`CreateParameter`](#CoordinateSystems.CreateParameter)                                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CoordinateSystems.GetParameter)                                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CoordinateSystems.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#CoordinateSystems.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#CoordinateSystems.Children)                               | Gets the list of children.                                    |
| [`Comments`](#CoordinateSystems.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#CoordinateSystems.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#CoordinateSystems.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CoordinateSystems.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CoordinateSystems.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CoordinateSystems.InternalObject"></a>

### *property* CoordinateSystems.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCoordinateSystemGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.DataModelObjectCategory"></a>

### *property* CoordinateSystems.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.Children"></a>

### *property* CoordinateSystems.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.Comments"></a>

### *property* CoordinateSystems.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.Figures"></a>

### *property* CoordinateSystems.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.Images"></a>

### *property* CoordinateSystems.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CoordinateSystems.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.Properties"></a>

### *property* CoordinateSystems.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.VisibleProperties"></a>

### *property* CoordinateSystems.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CoordinateSystems.AddCoordinateSystemAtCenterOfMass"></a>

### CoordinateSystems.AddCoordinateSystemAtCenterOfMass(geoBodies: System.Collections.Generic.IList[Ansys.ACT.Interfaces.Geometry.IBaseGeoBody], pointMasses: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.PointMass](PointMass.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.PointMass)], distributedMasses: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.DistributedMass](DistributedMass.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.DistributedMass)])

AddCoordinateSystemAtCenterOfMass method.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.AddCoordinateSystem"></a>

### CoordinateSystems.AddCoordinateSystem()

Creates a new CoordinateSystem

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.GetChildren"></a>

### CoordinateSystems.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CoordinateSystems.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.AddComment"></a>

### CoordinateSystems.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.AddFigure"></a>

### CoordinateSystems.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.AddImage"></a>

### CoordinateSystems.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.Activate"></a>

### CoordinateSystems.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.CopyTo"></a>

### CoordinateSystems.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.Duplicate"></a>

### CoordinateSystems.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.GroupAllSimilarChildren"></a>

### CoordinateSystems.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.GroupSimilarObjects"></a>

### CoordinateSystems.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.PropertyByName"></a>

### CoordinateSystems.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.PropertyByAPIName"></a>

### CoordinateSystems.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.CreateParameter"></a>

### CoordinateSystems.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.GetParameter"></a>

### CoordinateSystems.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystems.RemoveParameter"></a>

### CoordinateSystems.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
