# `ResultMesh`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ResultMesh

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ResultMesh.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------|-----------------------------------------------------------------------------------|
| `Generate`                       | Generate the mesh data                                                            |
| `ClearGeneratedData`             | Clear the generated mesh data                                                     |
| `AddNamedSelection`              | Creates a new NamedSelection                                                      |
| `ImportComponentsFromResultFile` | Import solver components from result file                                         |
| `GetChildren`                    | Gets the list of children, filtered by type.                                      |
| `GetChildren`                    | Gets the list of children, filtered by type.                                      |
| `AddComment`                     | Creates a new child Comment.                                                      |
| `AddFigure`                      | Creates a new child Figure.                                                       |
| `AddImage`                       | Creates a new child Image.                                                        |
| `Activate`                       | Activate the current object.                                                      |
| `CopyTo`                         | Copies all visible properties from this object to another.                        |
| `Duplicate`                      | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`        | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`            | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`                 | Get a property by its unique name.                                                |
| `PropertyByAPIName`              | Get a property by its API name.                                                   |
| `CreateParameter`                | Creates a new parameter for a Property.                                           |
| `GetParameter`                   | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`                | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `FEBodies`                | Gets FE Bodies                                                |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `ConfigurationId`         | Gets the ConfigurationId.                                     |
| `Elements`                | Gets the Elements.                                            |
| `Nodes`                   | Gets the Nodes.                                               |
| `SourceFile`              | Gets the SourceFile.                                          |
| `Suppressed`              | Gets or sets the Suppressed.                                  |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Figures`                 | Gets the list of associated figures.                          |
| `Images`                  | Gets the list of associated images.                           |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* ResultMesh.FEBodies *: [Ansys.ACT.Automation.Mechanical.Part](../../../../../v241/Ansys/ACT/Automation/Mechanical/Part.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Part) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ResultMesh.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* ResultMesh.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ResultMesh.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ResultMesh.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ResultMesh.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

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

### ResultMesh.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ResultMesh.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ResultMesh.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ResultMesh.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

