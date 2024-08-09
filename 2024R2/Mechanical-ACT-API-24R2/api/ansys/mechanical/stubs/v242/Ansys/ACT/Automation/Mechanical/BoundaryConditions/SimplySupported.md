# `SimplySupported`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.SimplySupported

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SimplySupported.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#SimplySupported.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#SimplySupported.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#SimplySupported.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#SimplySupported.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#SimplySupported.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#SimplySupported.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#SimplySupported.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#SimplySupported.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#SimplySupported.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SimplySupported.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#SimplySupported.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#SimplySupported.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#SimplySupported.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#SimplySupported.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#SimplySupported.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`Location`](#SimplySupported.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#SimplySupported.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Suppressed`](#SimplySupported.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#SimplySupported.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Children`](#SimplySupported.Children)                               | Gets the list of children.                                    |
| [`Comments`](#SimplySupported.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#SimplySupported.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#SimplySupported.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#SimplySupported.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`Properties`](#SimplySupported.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#SimplySupported.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SimplySupported.InternalObject"></a>

### *property* SimplySupported.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Location"></a>

### *property* SimplySupported.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.DataModelObjectCategory"></a>

### *property* SimplySupported.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Suppressed"></a>

### *property* SimplySupported.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.SharedRefBody"></a>

### *property* SimplySupported.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Children"></a>

### *property* SimplySupported.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Comments"></a>

### *property* SimplySupported.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Figures"></a>

### *property* SimplySupported.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Images"></a>

### *property* SimplySupported.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.ReadOnly"></a>

### *property* SimplySupported.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* SimplySupported.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Properties"></a>

### *property* SimplySupported.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.VisibleProperties"></a>

### *property* SimplySupported.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SimplySupported.PromoteToNamedSelection"></a>

### SimplySupported.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Delete"></a>

### SimplySupported.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetChildren"></a>

### SimplySupported.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### SimplySupported.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.AddComment"></a>

### SimplySupported.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.AddFigure"></a>

### SimplySupported.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.AddImage"></a>

### SimplySupported.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Activate"></a>

### SimplySupported.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.CopyTo"></a>

### SimplySupported.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Duplicate"></a>

### SimplySupported.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GroupAllSimilarChildren"></a>

### SimplySupported.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GroupSimilarObjects"></a>

### SimplySupported.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.PropertyByName"></a>

### SimplySupported.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.PropertyByAPIName"></a>

### SimplySupported.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.CreateParameter"></a>

### SimplySupported.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetParameter"></a>

### SimplySupported.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.RemoveParameter"></a>

### SimplySupported.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

