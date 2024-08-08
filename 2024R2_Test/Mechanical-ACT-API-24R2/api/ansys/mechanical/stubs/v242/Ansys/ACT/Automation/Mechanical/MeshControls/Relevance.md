# `Relevance`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.MeshControls.Relevance

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Relevance.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#Relevance.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#Relevance.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#Relevance.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Relevance.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Relevance.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Relevance.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Relevance.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Relevance.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Relevance.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Relevance.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Relevance.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Relevance.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Relevance.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Relevance.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Relevance.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Relevance.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                        | Gets the internal object. For advanced usage only.            |
| [`PartRelavance`](#Relevance.PartRelavance)                     | Gets the PartRelavance.                                       |
| [`NamedSelection`](#Relevance.NamedSelection)                   | Gets or sets the NamedSelection.                              |
| [`Location`](#Relevance.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#Relevance.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`ScopingMethod`](#Relevance.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#Relevance.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Children`](#Relevance.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Relevance.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#Relevance.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Relevance.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                        | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Relevance.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Relevance.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Relevance.InternalObject"></a>

### *property* Relevance.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.PartRelavance"></a>

### *property* Relevance.PartRelavance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PartRelavance.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.NamedSelection"></a>

### *property* Relevance.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../../../../../../v241/Ansys/ACT/Automation/Mechanical/NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.Location"></a>

### *property* Relevance.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.DataModelObjectCategory"></a>

### *property* Relevance.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.ScopingMethod"></a>

### *property* Relevance.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.Suppressed"></a>

### *property* Relevance.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.Children"></a>

### *property* Relevance.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.Comments"></a>

### *property* Relevance.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.Figures"></a>

### *property* Relevance.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.Images"></a>

### *property* Relevance.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Relevance.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.Properties"></a>

### *property* Relevance.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.VisibleProperties"></a>

### *property* Relevance.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Relevance.GenerateMesh"></a>

### Relevance.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.RenameBasedOnDefinition"></a>

### Relevance.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.Delete"></a>

### Relevance.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.GetChildren"></a>

### Relevance.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Relevance.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.AddComment"></a>

### Relevance.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.AddFigure"></a>

### Relevance.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.AddImage"></a>

### Relevance.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.Activate"></a>

### Relevance.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.CopyTo"></a>

### Relevance.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.Duplicate"></a>

### Relevance.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.GroupAllSimilarChildren"></a>

### Relevance.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.GroupSimilarObjects"></a>

### Relevance.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.PropertyByName"></a>

### Relevance.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.PropertyByAPIName"></a>

### Relevance.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.CreateParameter"></a>

### Relevance.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.GetParameter"></a>

### Relevance.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Relevance.RemoveParameter"></a>

### Relevance.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

