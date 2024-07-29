# `ResultMesh`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ResultMesh

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ResultMesh.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Generate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.Generate)                                             | Generate the mesh data                                                            |
| [`ClearGeneratedData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.ClearGeneratedData)                         | Clear the generated mesh data                                                     |
| [`AddNamedSelection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.AddNamedSelection)                           | Creates a new NamedSelection                                                      |
| [`ImportComponentsFromResultFile`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.ImportComponentsFromResultFile) | Import solver components from result file                                         |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`FEBodies`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.FEBodies)                               | Gets FE Bodies                                                |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#id0)                                         | Gets the internal object. For advanced usage only.            |
| [`ConfigurationId`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.ConfigurationId)                 | Gets the ConfigurationId.                                     |
| [`Elements`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.Elements)                               | Gets the Elements.                                            |
| [`Nodes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.Nodes)                                     | Gets the Nodes.                                               |
| [`SourceFile`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.SourceFile)                           | Gets the SourceFile.                                          |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#id0)                                         | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResultMesh.md#ResultMesh.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ResultMesh.FEBodies"></a>

### *property* ResultMesh.FEBodies *: [Ansys.ACT.Automation.Mechanical.Part](Part.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Part) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ResultMesh.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Children"></a>

### *property* ResultMesh.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Comments"></a>

### *property* ResultMesh.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Figures"></a>

### *property* ResultMesh.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Images"></a>

### *property* ResultMesh.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### ResultMesh.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

