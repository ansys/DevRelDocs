# ResultMesh

### *class* ResultMesh

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ResultMesh.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Generate`](#ResultMesh.Generate)                                             | Generate the mesh data                                                            |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#ResultMesh.ClearGeneratedData)                         | Clear the generated mesh data                                                     |
| [`AddNamedSelection`](#ResultMesh.AddNamedSelection)                           | Creates a new NamedSelection                                                      |
| [`ImportComponentsFromResultFile`](#ResultMesh.ImportComponentsFromResultFile) | Import solver components from result file                                         |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ResultMesh.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#ResultMesh.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#ResultMesh.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#ResultMesh.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#ResultMesh.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ResultMesh.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ResultMesh.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ResultMesh.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ResultMesh.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ResultMesh.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#ResultMesh.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ResultMesh.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ResultMesh.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`FEBodies`](#ResultMesh.FEBodies)                                                                                  | Gets FE Bodies                                                |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`ConfigurationId`](#ResultMesh.ConfigurationId)                                                                    | Gets the ConfigurationId.                                     |
| [`Elements`](#ResultMesh.Elements)                                                                                  | Gets the Elements.                                            |
| [`Nodes`](#ResultMesh.Nodes)                                                                                        | Gets the Nodes.                                               |
| [`SourceFile`](#ResultMesh.SourceFile)                                                                              | Gets the SourceFile.                                          |
| [`Suppressed`](#ResultMesh.Suppressed)                                                                              | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ResultMesh.Children)                                                                                  | Gets the list of children.                                    |
| [`Comments`](#ResultMesh.Comments)                                                                                  | Gets the list of associated comments.                         |
| [`Figures`](#ResultMesh.Figures)                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#ResultMesh.Images)                                                                                      | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ResultMesh.Properties)                                                                              | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ResultMesh.VisibleProperties)                                                                | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ResultMesh
```

## Property detail

### *property* ResultMesh.FEBodies *: [Ansys.ACT.Automation.Mechanical.Part](Part.md#Part) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets FE Bodies

<!-- !! processed by numpydoc !! -->

### *property* ResultMesh.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExtraMeshAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ResultMesh.ConfigurationId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ConfigurationId.

<!-- !! processed by numpydoc !! -->

### *property* ResultMesh.Elements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elements.

<!-- !! processed by numpydoc !! -->

### *property* ResultMesh.Nodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Nodes.

<!-- !! processed by numpydoc !! -->

### *property* ResultMesh.SourceFile *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SourceFile.

<!-- !! processed by numpydoc !! -->

### *property* ResultMesh.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ResultMesh.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ResultMesh.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ResultMesh.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ResultMesh.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ResultMesh.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ResultMesh.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ResultMesh.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ResultMesh.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ResultMesh.Generate()

Generate the mesh data

<!-- !! processed by numpydoc !! -->

### ResultMesh.ClearGeneratedData()

Clear the generated mesh data

<!-- !! processed by numpydoc !! -->

### ResultMesh.AddNamedSelection()

Creates a new NamedSelection

<!-- !! processed by numpydoc !! -->

### ResultMesh.ImportComponentsFromResultFile()

Import solver components from result file

<!-- !! processed by numpydoc !! -->

### ResultMesh.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ResultMesh.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ResultMesh.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ResultMesh.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ResultMesh.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ResultMesh.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ResultMesh.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ResultMesh.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ResultMesh.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ResultMesh.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ResultMesh.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ResultMesh.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ResultMesh.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ResultMesh.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ResultMesh.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
