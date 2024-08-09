# `InitialConditions`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.InitialConditions

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a InitialConditions.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`InsertVelocity`](#InitialConditions.InsertVelocity)                   | Creates a new Velocity                                                            |
| [`InsertAngularVelocity`](#InitialConditions.InsertAngularVelocity)     | Creates a new Angular Velocity                                                    |
| [`InsertDropHeight`](#InitialConditions.InsertDropHeight)               | Creates a new Drop Height                                                         |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#InitialConditions.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#InitialConditions.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#InitialConditions.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#InitialConditions.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#InitialConditions.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#InitialConditions.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#InitialConditions.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#InitialConditions.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#InitialConditions.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#InitialConditions.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#InitialConditions.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#InitialConditions.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#InitialConditions.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#InitialConditions.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Children`](#InitialConditions.Children)                               | Gets the list of children.                                    |
| [`Comments`](#InitialConditions.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#InitialConditions.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#InitialConditions.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#InitialConditions.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#InitialConditions.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="InitialConditions.InternalObject"></a>

### *property* InitialConditions.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSInitialConditionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.DataModelObjectCategory"></a>

### *property* InitialConditions.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Children"></a>

### *property* InitialConditions.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Comments"></a>

### *property* InitialConditions.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Figures"></a>

### *property* InitialConditions.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Images"></a>

### *property* InitialConditions.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* InitialConditions.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Properties"></a>

### *property* InitialConditions.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.VisibleProperties"></a>

### *property* InitialConditions.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="InitialConditions.InsertVelocity"></a>

### InitialConditions.InsertVelocity()

Creates a new Velocity

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.InsertAngularVelocity"></a>

### InitialConditions.InsertAngularVelocity()

Creates a new Angular Velocity

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.InsertDropHeight"></a>

### InitialConditions.InsertDropHeight()

Creates a new Drop Height

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetChildren"></a>

### InitialConditions.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### InitialConditions.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.AddComment"></a>

### InitialConditions.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.AddFigure"></a>

### InitialConditions.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.AddImage"></a>

### InitialConditions.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Activate"></a>

### InitialConditions.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.CopyTo"></a>

### InitialConditions.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Duplicate"></a>

### InitialConditions.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GroupAllSimilarChildren"></a>

### InitialConditions.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GroupSimilarObjects"></a>

### InitialConditions.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.PropertyByName"></a>

### InitialConditions.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.PropertyByAPIName"></a>

### InitialConditions.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.CreateParameter"></a>

### InitialConditions.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetParameter"></a>

### InitialConditions.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.RemoveParameter"></a>

### InitialConditions.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

