# `InitialConditions`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.InitialConditions

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a InitialConditions.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`InsertVelocity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.InsertVelocity)                   | Creates a new Velocity                                                            |
| [`InsertAngularVelocity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.InsertAngularVelocity)     | Creates a new Angular Velocity                                                    |
| [`InsertDropHeight`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.InsertDropHeight)               | Creates a new Drop Height                                                         |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/InitialConditions.md#InitialConditions.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="InitialConditions.InternalObject"></a>

### *property* InitialConditions.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSInitialConditionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.DataModelObjectCategory"></a>

### *property* InitialConditions.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Children"></a>

### *property* InitialConditions.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Comments"></a>

### *property* InitialConditions.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Figures"></a>

### *property* InitialConditions.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Images"></a>

### *property* InitialConditions.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### InitialConditions.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

