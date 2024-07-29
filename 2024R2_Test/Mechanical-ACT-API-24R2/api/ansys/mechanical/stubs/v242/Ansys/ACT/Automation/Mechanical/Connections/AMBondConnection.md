# `AMBondConnection`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Connections.AMBondConnection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AMBondConnection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SearchConnectionsForDuplicatePairs`](#AMBondConnection.SearchConnectionsForDuplicatePairs)   | Run the SearchConnectionsForDuplicatePairs action.                                |
| [`FlipContactTarget`](#AMBondConnection.FlipContactTarget)                                     | Run the FlipContactTarget action.                                                 |
| [`AddCommandSnippet`](#AMBondConnection.AddCommandSnippet)                                     | Creates a new CommandSnippet                                                      |
| [`RenameBasedOnDefinition`](#AMBondConnection.RenameBasedOnDefinition)                         | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AMBondConnection.Delete)                                                           | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AMBondConnection.AddComment)                                                   | Creates a new child Comment.                                                      |
| [`AddFigure`](#AMBondConnection.AddFigure)                                                     | Creates a new child Figure.                                                       |
| [`AddImage`](#AMBondConnection.AddImage)                                                       | Creates a new child Image.                                                        |
| [`Activate`](#AMBondConnection.Activate)                                                       | Activate the current object.                                                      |
| [`CopyTo`](#AMBondConnection.CopyTo)                                                           | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AMBondConnection.Duplicate)                                                     | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AMBondConnection.GroupAllSimilarChildren)                         | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AMBondConnection.GroupSimilarObjects)                                 | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AMBondConnection.PropertyByName)                                           | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AMBondConnection.PropertyByAPIName)                                     | Get a property by its API name.                                                   |
| [`CreateParameter`](#AMBondConnection.CreateParameter)                                         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AMBondConnection.GetParameter)                                               | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AMBondConnection.RemoveParameter)                                         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`SourceLocation`](#AMBondConnection.SourceLocation)                   | Gets or sets the SourceLocation.                              |
| [`TargetLocation`](#AMBondConnection.TargetLocation)                   | Gets or sets the TargetLocation.                              |
| [`InternalObject`](#id0)                                               | Gets the internal object. For advanced usage only.            |
| [`ContactBodies`](#AMBondConnection.ContactBodies)                     | Gets the ContactBodies.                                       |
| [`TargetBodies`](#AMBondConnection.TargetBodies)                       | Gets the TargetBodies.                                        |
| [`ContactType`](#AMBondConnection.ContactType)                         | Gets or sets the ContactType.                                 |
| [`Suppressed`](#AMBondConnection.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](#AMBondConnection.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#AMBondConnection.Children)                               | Gets the list of children.                                    |
| [`Comments`](#AMBondConnection.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#AMBondConnection.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#AMBondConnection.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#AMBondConnection.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AMBondConnection.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AMBondConnection.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AMBondConnection.SourceLocation"></a>

### *property* AMBondConnection.SourceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceLocation.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.TargetLocation"></a>

### *property* AMBondConnection.TargetLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetLocation.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.InternalObject"></a>

### *property* AMBondConnection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMBondConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.ContactBodies"></a>

### *property* AMBondConnection.ContactBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ContactBodies.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.TargetBodies"></a>

### *property* AMBondConnection.TargetBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TargetBodies.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.ContactType"></a>

### *property* AMBondConnection.ContactType *: [Ansys.Mechanical.DataModel.Enums.ContactType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactType.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Suppressed"></a>

### *property* AMBondConnection.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.DataModelObjectCategory"></a>

### *property* AMBondConnection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Children"></a>

### *property* AMBondConnection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Comments"></a>

### *property* AMBondConnection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Figures"></a>

### *property* AMBondConnection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Images"></a>

### *property* AMBondConnection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.ReadOnly"></a>

### *property* AMBondConnection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AMBondConnection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Properties"></a>

### *property* AMBondConnection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.VisibleProperties"></a>

### *property* AMBondConnection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMBondConnection.SearchConnectionsForDuplicatePairs"></a>

### AMBondConnection.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.FlipContactTarget"></a>

### AMBondConnection.FlipContactTarget()

Run the FlipContactTarget action.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.AddCommandSnippet"></a>

### AMBondConnection.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.RenameBasedOnDefinition"></a>

### AMBondConnection.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Delete"></a>

### AMBondConnection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetChildren"></a>

### AMBondConnection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AMBondConnection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### AMBondConnection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Activate"></a>

### AMBondConnection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.CopyTo"></a>

### AMBondConnection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Duplicate"></a>

### AMBondConnection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GroupAllSimilarChildren"></a>

### AMBondConnection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GroupSimilarObjects"></a>

### AMBondConnection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.PropertyByName"></a>

### AMBondConnection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.PropertyByAPIName"></a>

### AMBondConnection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.CreateParameter"></a>

### AMBondConnection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetParameter"></a>

### AMBondConnection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.RemoveParameter"></a>

### AMBondConnection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

