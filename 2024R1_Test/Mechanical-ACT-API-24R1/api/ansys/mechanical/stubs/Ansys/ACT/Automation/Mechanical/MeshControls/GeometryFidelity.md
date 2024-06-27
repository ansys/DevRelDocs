# GeometryFidelity

<a id="GeometryFidelity"></a>

### *class* GeometryFidelity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a GeometryFidelity.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#GeometryFidelity.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#GeometryFidelity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#GeometryFidelity.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#GeometryFidelity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GeometryFidelity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GeometryFidelity.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#GeometryFidelity.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#GeometryFidelity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#GeometryFidelity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#GeometryFidelity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GeometryFidelity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#GeometryFidelity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#GeometryFidelity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#GeometryFidelity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#GeometryFidelity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#GeometryFidelity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                              |
| [`Location`](#GeometryFidelity.Location)                                                                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#GeometryFidelity.ScopingMethod)                                                                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#GeometryFidelity.Suppressed)                                                                           | Gets or sets the Suppressed.                                  |
| [`Children`](#GeometryFidelity.Children)                                                                               | Gets the list of children.                                    |
| [`Comments`](#GeometryFidelity.Comments)                                                                               | Gets the list of associated comments.                         |
| [`Figures`](#GeometryFidelity.Figures)                                                                                 | Gets the list of associated figures.                          |
| [`Images`](#GeometryFidelity.Images)                                                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#GeometryFidelity.Properties)                                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#GeometryFidelity.VisibleProperties)                                                             | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import GeometryFidelity
```

<a id="property-detail"></a>

## Property detail

<a id="GeometryFidelity.InternalObject"></a>

### *property* GeometryFidelity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.NamedSelection"></a>

### *property* GeometryFidelity.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Location"></a>

### *property* GeometryFidelity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.DataModelObjectCategory"></a>

### *property* GeometryFidelity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.ScopingMethod"></a>

### *property* GeometryFidelity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Suppressed"></a>

### *property* GeometryFidelity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Children"></a>

### *property* GeometryFidelity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Comments"></a>

### *property* GeometryFidelity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Figures"></a>

### *property* GeometryFidelity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Images"></a>

### *property* GeometryFidelity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* GeometryFidelity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Properties"></a>

### *property* GeometryFidelity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.VisibleProperties"></a>

### *property* GeometryFidelity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeometryFidelity.GenerateMesh"></a>

### GeometryFidelity.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.RenameBasedOnDefinition"></a>

### GeometryFidelity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Delete"></a>

### GeometryFidelity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetChildren"></a>

### GeometryFidelity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### GeometryFidelity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Activate"></a>

### GeometryFidelity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.CopyTo"></a>

### GeometryFidelity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.Duplicate"></a>

### GeometryFidelity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GroupAllSimilarChildren"></a>

### GeometryFidelity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GroupSimilarObjects"></a>

### GeometryFidelity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.PropertyByName"></a>

### GeometryFidelity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.PropertyByAPIName"></a>

### GeometryFidelity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.CreateParameter"></a>

### GeometryFidelity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.GetParameter"></a>

### GeometryFidelity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFidelity.RemoveParameter"></a>

### GeometryFidelity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
