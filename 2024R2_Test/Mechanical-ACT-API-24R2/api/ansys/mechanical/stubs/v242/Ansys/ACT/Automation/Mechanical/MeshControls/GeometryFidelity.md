# `GeometryFidelity`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.MeshControls.GeometryFidelity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.GeometryFidelity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GeometryFidelity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#GeometryFidelity.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#GeometryFidelity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GeometryFidelity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GeometryFidelity.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#GeometryFidelity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#GeometryFidelity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#GeometryFidelity.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#GeometryFidelity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#GeometryFidelity.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#GeometryFidelity.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#GeometryFidelity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#GeometryFidelity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GeometryFidelity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#GeometryFidelity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#GeometryFidelity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#GeometryFidelity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#GeometryFidelity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#GeometryFidelity.Children)                               | Gets the list of children.                                    |
| [`Comments`](#GeometryFidelity.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#GeometryFidelity.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#GeometryFidelity.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#GeometryFidelity.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#GeometryFidelity.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#GeometryFidelity.Location)                               | Gets or sets the Location.                                    |
| [`NamedSelection`](#GeometryFidelity.NamedSelection)                   | Gets or sets the NamedSelection.                              |
| [`Properties`](#GeometryFidelity.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#GeometryFidelity.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#GeometryFidelity.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#GeometryFidelity.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GeometryFidelity.Children"></a>

### *property* GeometryFidelity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Comments"></a>

### *property* GeometryFidelity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.DataModelObjectCategory"></a>

### *property* GeometryFidelity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Figures"></a>

### *property* GeometryFidelity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Images"></a>

### *property* GeometryFidelity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.InternalObject"></a>

### *property* GeometryFidelity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Location"></a>

### *property* GeometryFidelity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.NamedSelection"></a>

### *property* GeometryFidelity.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Properties"></a>

### *property* GeometryFidelity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.ScopingMethod"></a>

### *property* GeometryFidelity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Suppressed"></a>

### *property* GeometryFidelity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.VisibleProperties"></a>

### *property* GeometryFidelity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeometryFidelity.Activate"></a>

### GeometryFidelity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.AddComment"></a>

### GeometryFidelity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.AddFigure"></a>

### GeometryFidelity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.AddImage"></a>

### GeometryFidelity.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.CopyTo"></a>

### GeometryFidelity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.CreateParameter"></a>

### GeometryFidelity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Delete"></a>

### GeometryFidelity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Duplicate"></a>

### GeometryFidelity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GenerateMesh"></a>

### GeometryFidelity.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetChildren"></a>

### GeometryFidelity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetParameter"></a>

### GeometryFidelity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GroupAllSimilarChildren"></a>

### GeometryFidelity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GroupSimilarObjects"></a>

### GeometryFidelity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.PropertyByAPIName"></a>

### GeometryFidelity.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.PropertyByName"></a>

### GeometryFidelity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.RemoveParameter"></a>

### GeometryFidelity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.RenameBasedOnDefinition"></a>

### GeometryFidelity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

