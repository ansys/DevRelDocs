# `Convergence`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.Convergence

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Convergence.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#Convergence.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Convergence.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Convergence.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Convergence.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Convergence.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Convergence.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Convergence.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Convergence.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Convergence.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Convergence.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Convergence.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Convergence.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Convergence.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Convergence.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                          | Gets the internal object. For advanced usage only.            |
| [`LastChange`](#Convergence.LastChange)                           | Gets the LastChange.                                          |
| [`AllowableChange`](#Convergence.AllowableChange)                 | Gets or sets the AllowableChange.                             |
| [`Type`](#Convergence.Type)                                       | Gets or sets the Type.                                        |
| [`IsConverged`](#Convergence.IsConverged)                         | Gets the IsConverged.                                         |
| [`DataModelObjectCategory`](#Convergence.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Children`](#Convergence.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Convergence.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#Convergence.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Convergence.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                          | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Convergence.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Convergence.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Convergence.InternalObject"></a>

### *property* Convergence.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConvergenceAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.LastChange"></a>

### *property* Convergence.LastChange *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LastChange.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.AllowableChange"></a>

### *property* Convergence.AllowableChange *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowableChange.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Type"></a>

### *property* Convergence.Type *: [Ansys.Mechanical.DataModel.Enums.ConvergenceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.IsConverged"></a>

### *property* Convergence.IsConverged *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsConverged.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.DataModelObjectCategory"></a>

### *property* Convergence.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Children"></a>

### *property* Convergence.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Comments"></a>

### *property* Convergence.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Figures"></a>

### *property* Convergence.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Images"></a>

### *property* Convergence.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Convergence.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Properties"></a>

### *property* Convergence.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.VisibleProperties"></a>

### *property* Convergence.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Convergence.Delete"></a>

### Convergence.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetChildren"></a>

### Convergence.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Convergence.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.AddComment"></a>

### Convergence.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.AddFigure"></a>

### Convergence.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.AddImage"></a>

### Convergence.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Activate"></a>

### Convergence.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.CopyTo"></a>

### Convergence.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Duplicate"></a>

### Convergence.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GroupAllSimilarChildren"></a>

### Convergence.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GroupSimilarObjects"></a>

### Convergence.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.PropertyByName"></a>

### Convergence.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.PropertyByAPIName"></a>

### Convergence.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.CreateParameter"></a>

### Convergence.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetParameter"></a>

### Convergence.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.RemoveParameter"></a>

### Convergence.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

