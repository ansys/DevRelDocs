<a id="refinement"></a>

# Refinement

<a id="Refinement"></a>

### *class* Refinement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Refinement.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#Refinement.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#Refinement.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#Refinement.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Refinement.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Refinement.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Refinement.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Refinement.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Refinement.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Refinement.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Refinement.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Refinement.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Refinement.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Refinement.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Refinement.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Refinement.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Refinement.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`NumberOfRefinements`](#Refinement.NumberOfRefinements)                                                               | Gets or sets the NumberOfRefinements.                         |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                              |
| [`Location`](#Refinement.Location)                                                                                     | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#Refinement.ScopingMethod)                                                                           | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#Refinement.Suppressed)                                                                                 | Gets or sets the Suppressed.                                  |
| [`Children`](#Refinement.Children)                                                                                     | Gets the list of children.                                    |
| [`Comments`](#Refinement.Comments)                                                                                     | Gets the list of associated comments.                         |
| [`Figures`](#Refinement.Figures)                                                                                       | Gets the list of associated figures.                          |
| [`Images`](#Refinement.Images)                                                                                         | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Refinement.Properties)                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Refinement.VisibleProperties)                                                                   | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Refinement
```

<a id="property-detail"></a>

## Property detail

<a id="Refinement.InternalObject"></a>

### *property* Refinement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.NumberOfRefinements"></a>

### *property* Refinement.NumberOfRefinements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfRefinements.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.NamedSelection"></a>

### *property* Refinement.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.Location"></a>

### *property* Refinement.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.DataModelObjectCategory"></a>

### *property* Refinement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.ScopingMethod"></a>

### *property* Refinement.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.Suppressed"></a>

### *property* Refinement.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.Children"></a>

### *property* Refinement.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.Comments"></a>

### *property* Refinement.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.Figures"></a>

### *property* Refinement.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.Images"></a>

### *property* Refinement.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Refinement.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.Properties"></a>

### *property* Refinement.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.VisibleProperties"></a>

### *property* Refinement.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Refinement.GenerateMesh"></a>

### Refinement.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.RenameBasedOnDefinition"></a>

### Refinement.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.Delete"></a>

### Refinement.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.GetChildren"></a>

### Refinement.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Refinement.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.AddComment"></a>

### Refinement.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.AddFigure"></a>

### Refinement.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.AddImage"></a>

### Refinement.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.Activate"></a>

### Refinement.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.CopyTo"></a>

### Refinement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.Duplicate"></a>

### Refinement.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.GroupAllSimilarChildren"></a>

### Refinement.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.GroupSimilarObjects"></a>

### Refinement.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.PropertyByName"></a>

### Refinement.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.PropertyByAPIName"></a>

### Refinement.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.CreateParameter"></a>

### Refinement.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.GetParameter"></a>

### Refinement.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Refinement.RemoveParameter"></a>

### Refinement.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
