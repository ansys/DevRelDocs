# `AMBondConnection`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.AMBondConnection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AMBondConnection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SearchConnectionsForDuplicatePairs`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.SearchConnectionsForDuplicatePairs)   | Run the SearchConnectionsForDuplicatePairs action.                                |
| [`FlipContactTarget`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.FlipContactTarget)                                     | Run the FlipContactTarget action.                                                 |
| [`AddCommandSnippet`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.AddCommandSnippet)                                     | Creates a new CommandSnippet                                                      |
| [`RenameBasedOnDefinition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.RenameBasedOnDefinition)                         | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.Delete)                                                           | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#id1)                                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#id1)                                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.AddComment)                                                   | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.AddFigure)                                                     | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.AddImage)                                                       | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.Activate)                                                       | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.CopyTo)                                                           | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.Duplicate)                                                     | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.GroupAllSimilarChildren)                         | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.GroupSimilarObjects)                                 | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.PropertyByName)                                           | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.PropertyByAPIName)                                     | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.CreateParameter)                                         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.GetParameter)                                               | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.RemoveParameter)                                         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`SourceLocation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.SourceLocation)                   | Gets or sets the SourceLocation.                              |
| [`TargetLocation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.TargetLocation)                   | Gets or sets the TargetLocation.                              |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#id0)                                               | Gets the internal object. For advanced usage only.            |
| [`ContactBodies`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.ContactBodies)                     | Gets the ContactBodies.                                       |
| [`TargetBodies`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.TargetBodies)                       | Gets the TargetBodies.                                        |
| [`ContactType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.ContactType)                         | Gets or sets the ContactType.                                 |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#id0)                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/AMBondConnection.md#AMBondConnection.VisibleProperties)             | Gets the list of properties that are visible for this object. |

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

### *property* AMBondConnection.ContactType *: [Ansys.Mechanical.DataModel.Enums.ContactType](../../../../Mechanical/DataModel/Enums/ContactType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactType.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Suppressed"></a>

### *property* AMBondConnection.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.DataModelObjectCategory"></a>

### *property* AMBondConnection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Children"></a>

### *property* AMBondConnection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Comments"></a>

### *property* AMBondConnection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Figures"></a>

### *property* AMBondConnection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Images"></a>

### *property* AMBondConnection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### AMBondConnection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

