# AMBondConnection

### *class* AMBondConnection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AMBondConnection.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`SearchConnectionsForDuplicatePairs`](#AMBondConnection.SearchConnectionsForDuplicatePairs)   | Run the SearchConnectionsForDuplicatePairs action.                                |
|------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`SourceLocation`](#AMBondConnection.SourceLocation)                                                                   | Gets or sets the SourceLocation.                              |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`TargetLocation`](#AMBondConnection.TargetLocation)                                                                   | Gets or sets the TargetLocation.                              |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`ContactBodies`](#AMBondConnection.ContactBodies)                                                                     | Gets the ContactBodies.                                       |
| [`TargetBodies`](#AMBondConnection.TargetBodies)                                                                       | Gets the TargetBodies.                                        |
| [`ContactType`](../../../../Mechanical/DataModel/Enums/ContactType.md#ContactType)                                     | Gets or sets the ContactType.                                 |
| [`Suppressed`](#AMBondConnection.Suppressed)                                                                           | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#AMBondConnection.Children)                                                                               | Gets the list of children.                                    |
| [`Comments`](#AMBondConnection.Comments)                                                                               | Gets the list of associated comments.                         |
| [`Figures`](#AMBondConnection.Figures)                                                                                 | Gets the list of associated figures.                          |
| [`Images`](#AMBondConnection.Images)                                                                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#AMBondConnection.ReadOnly)                                                                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AMBondConnection.Properties)                                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AMBondConnection.VisibleProperties)                                                             | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import AMBondConnection
```

## Property detail

### *property* AMBondConnection.SourceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceLocation.

<!-- !! processed by numpydoc !! -->

### *property* AMBondConnection.TargetLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetLocation.

<!-- !! processed by numpydoc !! -->

### *property* AMBondConnection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMBondConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AMBondConnection.ContactBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ContactBodies.

<!-- !! processed by numpydoc !! -->

### *property* AMBondConnection.TargetBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TargetBodies.

<!-- !! processed by numpydoc !! -->

### *property* AMBondConnection.ContactType *: [Ansys.Mechanical.DataModel.Enums.ContactType](../../../../Mechanical/DataModel/Enums/ContactType.md#ContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactType.

<!-- !! processed by numpydoc !! -->

### *property* AMBondConnection.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AMBondConnection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AMBondConnection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AMBondConnection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AMBondConnection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AMBondConnection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AMBondConnection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* AMBondConnection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AMBondConnection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AMBondConnection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AMBondConnection.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

### AMBondConnection.FlipContactTarget()

Run the FlipContactTarget action.

<!-- !! processed by numpydoc !! -->

### AMBondConnection.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### AMBondConnection.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AMBondConnection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AMBondConnection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AMBondConnection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AMBondConnection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AMBondConnection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AMBondConnection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AMBondConnection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AMBondConnection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AMBondConnection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AMBondConnection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AMBondConnection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AMBondConnection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AMBondConnection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AMBondConnection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### AMBondConnection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AMBondConnection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
