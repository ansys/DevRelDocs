# `ResultMesh`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ResultMesh

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ResultMesh.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Generate`](#ResultMesh.Generate)                                             | Generate the mesh data                                                            |
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

| Name | Description |
|------------------------------------------------------------------|---------------------------------------------------------------|
| [`FEBodies`](#ResultMesh.FEBodies)                               | Gets FE Bodies                                                |
| [`InternalObject`](#id0)                                         | Gets the internal object. For advanced usage only.            |
| [`ConfigurationId`](#ResultMesh.ConfigurationId)                 | Gets the ConfigurationId.                                     |
| [`Elements`](#ResultMesh.Elements)                               | Gets the Elements.                                            |
| [`Nodes`](#ResultMesh.Nodes)                                     | Gets the Nodes.                                               |
| [`SourceFile`](#ResultMesh.SourceFile)                           | Gets the SourceFile.                                          |
| [`Suppressed`](#ResultMesh.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](#ResultMesh.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ResultMesh.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ResultMesh.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#ResultMesh.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ResultMesh.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                         | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ResultMesh.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ResultMesh.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ResultMesh.FEBodies"></a>

### *property* ResultMesh.FEBodies *: [Ansys.ACT.Automation.Mechanical.Part](../../../../../v241/Ansys/ACT/Automation/Mechanical/Part.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Part) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets FE Bodies

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.InternalObject"></a>

### *property* ResultMesh.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExtraMeshAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.ConfigurationId"></a>

### *property* ResultMesh.ConfigurationId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ConfigurationId.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Elements"></a>

### *property* ResultMesh.Elements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elements.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Nodes"></a>

### *property* ResultMesh.Nodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Nodes.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.SourceFile"></a>

### *property* ResultMesh.SourceFile *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SourceFile.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Suppressed"></a>

### *property* ResultMesh.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.DataModelObjectCategory"></a>

### *property* ResultMesh.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Children"></a>

### *property* ResultMesh.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Comments"></a>

### *property* ResultMesh.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Figures"></a>

### *property* ResultMesh.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Images"></a>

### *property* ResultMesh.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ResultMesh.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Properties"></a>

### *property* ResultMesh.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.VisibleProperties"></a>

### *property* ResultMesh.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ResultMesh.Generate"></a>

### ResultMesh.Generate()

Generate the mesh data

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.ClearGeneratedData"></a>

### ResultMesh.ClearGeneratedData()

Clear the generated mesh data

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.AddNamedSelection"></a>

### ResultMesh.AddNamedSelection()

Creates a new NamedSelection

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.ImportComponentsFromResultFile"></a>

### ResultMesh.ImportComponentsFromResultFile()

Import solver components from result file

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetChildren"></a>

### ResultMesh.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ResultMesh.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.AddComment"></a>

### ResultMesh.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.AddFigure"></a>

### ResultMesh.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.AddImage"></a>

### ResultMesh.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Activate"></a>

### ResultMesh.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.CopyTo"></a>

### ResultMesh.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Duplicate"></a>

### ResultMesh.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GroupAllSimilarChildren"></a>

### ResultMesh.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GroupSimilarObjects"></a>

### ResultMesh.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.PropertyByName"></a>

### ResultMesh.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.PropertyByAPIName"></a>

### ResultMesh.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.CreateParameter"></a>

### ResultMesh.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetParameter"></a>

### ResultMesh.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.RemoveParameter"></a>

### ResultMesh.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

