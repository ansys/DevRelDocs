# `AMBondConnection`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.AMBondConnection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.AMBondConnection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AMBondConnection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AMBondConnection.Activate)                                                     | Activate the current object.                                                      |
| [`AddCommandSnippet`](#AMBondConnection.AddCommandSnippet)                                   | Creates a new CommandSnippet                                                      |
| [`AddComment`](#AMBondConnection.AddComment)                                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](#AMBondConnection.AddFigure)                                                   | Creates a new child Figure.                                                       |
| [`AddImage`](#AMBondConnection.AddImage)                                                     | Creates a new child Image.                                                        |
| [`CopyTo`](#AMBondConnection.CopyTo)                                                         | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AMBondConnection.CreateParameter)                                       | Creates a new parameter for a Property.                                           |
| [`Delete`](#AMBondConnection.Delete)                                                         | Run the Delete action.                                                            |
| [`Duplicate`](#AMBondConnection.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                    |
| [`FlipContactTarget`](#AMBondConnection.FlipContactTarget)                                   | Run the FlipContactTarget action.                                                 |
| [`GetChildren`](#AMBondConnection.GetChildren)                                               | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AMBondConnection.GetParameter)                                             | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AMBondConnection.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AMBondConnection.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#AMBondConnection.PropertyByAPIName)                                   | Get a property by its API name.                                                   |
| [`PropertyByName`](#AMBondConnection.PropertyByName)                                         | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AMBondConnection.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#AMBondConnection.RenameBasedOnDefinition)                       | Run the RenameBasedOnDefinition action.                                           |
| [`SearchConnectionsForDuplicatePairs`](#AMBondConnection.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#AMBondConnection.Children)                               | Gets the list of children.                                    |
| [`Comments`](#AMBondConnection.Comments)                               | Gets the list of associated comments.                         |
| [`ContactBodies`](#AMBondConnection.ContactBodies)                     | Gets the ContactBodies.                                       |
| [`ContactType`](#AMBondConnection.ContactType)                         | Gets or sets the ContactType.                                 |
| [`DataModelObjectCategory`](#AMBondConnection.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#AMBondConnection.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#AMBondConnection.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#AMBondConnection.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AMBondConnection.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AMBondConnection.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SourceLocation`](#AMBondConnection.SourceLocation)                   | Gets or sets the SourceLocation.                              |
| [`Suppressed`](#AMBondConnection.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`TargetBodies`](#AMBondConnection.TargetBodies)                       | Gets the TargetBodies.                                        |
| [`TargetLocation`](#AMBondConnection.TargetLocation)                   | Gets or sets the TargetLocation.                              |
| [`VisibleProperties`](#AMBondConnection.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AMBondConnection.Children"></a>

### *property* AMBondConnection.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Comments"></a>

### *property* AMBondConnection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.ContactBodies"></a>

### *property* AMBondConnection.ContactBodies *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ContactBodies.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.ContactType"></a>

### *property* AMBondConnection.ContactType *: [Ansys.Mechanical.DataModel.Enums.ContactType](../../../../Mechanical/DataModel/Enums/ContactType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactType.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.DataModelObjectCategory"></a>

### *property* AMBondConnection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Figures"></a>

### *property* AMBondConnection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Images"></a>

### *property* AMBondConnection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.InternalObject"></a>

### *property* AMBondConnection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMBondConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Properties"></a>

### *property* AMBondConnection.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.ReadOnly"></a>

### *property* AMBondConnection.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.SourceLocation"></a>

### *property* AMBondConnection.SourceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceLocation.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Suppressed"></a>

### *property* AMBondConnection.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.TargetBodies"></a>

### *property* AMBondConnection.TargetBodies *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TargetBodies.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.TargetLocation"></a>

### *property* AMBondConnection.TargetLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetLocation.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.VisibleProperties"></a>

### *property* AMBondConnection.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMBondConnection.Activate"></a>

### AMBondConnection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.AddCommandSnippet"></a>

### AMBondConnection.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.AddComment"></a>

### AMBondConnection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.AddFigure"></a>

### AMBondConnection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.AddImage"></a>

### AMBondConnection.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.CopyTo"></a>

### AMBondConnection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.CreateParameter"></a>

### AMBondConnection.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Delete"></a>

### AMBondConnection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Duplicate"></a>

### AMBondConnection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.FlipContactTarget"></a>

### AMBondConnection.FlipContactTarget()

Run the FlipContactTarget action.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetChildren"></a>

### AMBondConnection.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetParameter"></a>

### AMBondConnection.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GroupAllSimilarChildren"></a>

### AMBondConnection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GroupSimilarObjects"></a>

### AMBondConnection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.PropertyByAPIName"></a>

### AMBondConnection.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.PropertyByName"></a>

### AMBondConnection.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.RemoveParameter"></a>

### AMBondConnection.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.RenameBasedOnDefinition"></a>

### AMBondConnection.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.SearchConnectionsForDuplicatePairs"></a>

### AMBondConnection.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

