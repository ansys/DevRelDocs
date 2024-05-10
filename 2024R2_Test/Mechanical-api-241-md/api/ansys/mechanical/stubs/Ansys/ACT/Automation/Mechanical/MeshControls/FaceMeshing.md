<a id="facemeshing"></a>

# FaceMeshing

<a id="FaceMeshing"></a>

### *class* FaceMeshing

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FaceMeshing.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`GenerateMesh`](#FaceMeshing.GenerateMesh)                       | Generate the Mesh.                                                                |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#FaceMeshing.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FaceMeshing.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FaceMeshing.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FaceMeshing.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FaceMeshing.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FaceMeshing.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FaceMeshing.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FaceMeshing.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FaceMeshing.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FaceMeshing.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FaceMeshing.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FaceMeshing.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#FaceMeshing.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FaceMeshing.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FaceMeshing.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ConstrainBoundary`](#FaceMeshing.ConstrainBoundary)                                                                  | Gets or sets the ConstrainBoundary.                           |
| [`InternalNumberOfDivisions`](#FaceMeshing.InternalNumberOfDivisions)                                                  | Gets or sets the InternalNumberOfDivisions.                   |
| [`Method`](#FaceMeshing.Method)                                                                                        | Gets or sets the Method.                                      |
| [`Active`](#FaceMeshing.Active)                                                                                        | Gets the Active.                                              |
| [`MappedMesh`](#FaceMeshing.MappedMesh)                                                                                | Gets or sets the MappedMesh.                                  |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                              |
| [`Location`](#FaceMeshing.Location)                                                                                    | Gets or sets the Location.                                    |
| [`SpecifiedCorners`](#FaceMeshing.SpecifiedCorners)                                                                    | Gets or sets the SpecifiedCorners.                            |
| [`SpecifiedEnds`](#FaceMeshing.SpecifiedEnds)                                                                          | Gets or sets the SpecifiedEnds.                               |
| [`SpecifiedSides`](#FaceMeshing.SpecifiedSides)                                                                        | Gets or sets the SpecifiedSides.                              |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#FaceMeshing.ScopingMethod)                                                                          | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#FaceMeshing.Suppressed)                                                                                | Gets or sets the Suppressed.                                  |
| [`Children`](#FaceMeshing.Children)                                                                                    | Gets the list of children.                                    |
| [`Comments`](#FaceMeshing.Comments)                                                                                    | Gets the list of associated comments.                         |
| [`Figures`](#FaceMeshing.Figures)                                                                                      | Gets the list of associated figures.                          |
| [`Images`](#FaceMeshing.Images)                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#FaceMeshing.Properties)                                                                                | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#FaceMeshing.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import FaceMeshing
```

<a id="property-detail"></a>

## Property detail

<a id="FaceMeshing.InternalObject"></a>

### *property* FaceMeshing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.ConstrainBoundary"></a>

### *property* FaceMeshing.ConstrainBoundary *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstrainBoundary.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.InternalNumberOfDivisions"></a>

### *property* FaceMeshing.InternalNumberOfDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InternalNumberOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Method"></a>

### *property* FaceMeshing.Method *: [Ansys.Mechanical.DataModel.Enums.FaceMeshingMethod](../../../../Mechanical/DataModel/Enums/FaceMeshingMethod.md#FaceMeshingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Active"></a>

### *property* FaceMeshing.Active *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Active.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.MappedMesh"></a>

### *property* FaceMeshing.MappedMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MappedMesh.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.NamedSelection"></a>

### *property* FaceMeshing.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Location"></a>

### *property* FaceMeshing.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.SpecifiedCorners"></a>

### *property* FaceMeshing.SpecifiedCorners *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpecifiedCorners.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.SpecifiedEnds"></a>

### *property* FaceMeshing.SpecifiedEnds *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpecifiedEnds.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.SpecifiedSides"></a>

### *property* FaceMeshing.SpecifiedSides *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpecifiedSides.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.DataModelObjectCategory"></a>

### *property* FaceMeshing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.ScopingMethod"></a>

### *property* FaceMeshing.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Suppressed"></a>

### *property* FaceMeshing.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Children"></a>

### *property* FaceMeshing.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Comments"></a>

### *property* FaceMeshing.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Figures"></a>

### *property* FaceMeshing.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Images"></a>

### *property* FaceMeshing.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FaceMeshing.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Properties"></a>

### *property* FaceMeshing.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.VisibleProperties"></a>

### *property* FaceMeshing.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FaceMeshing.GenerateMesh"></a>

### FaceMeshing.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.RenameBasedOnDefinition"></a>

### FaceMeshing.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Delete"></a>

### FaceMeshing.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetChildren"></a>

### FaceMeshing.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FaceMeshing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.AddComment"></a>

### FaceMeshing.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.AddFigure"></a>

### FaceMeshing.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.AddImage"></a>

### FaceMeshing.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Activate"></a>

### FaceMeshing.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.CopyTo"></a>

### FaceMeshing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Duplicate"></a>

### FaceMeshing.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GroupAllSimilarChildren"></a>

### FaceMeshing.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GroupSimilarObjects"></a>

### FaceMeshing.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.PropertyByName"></a>

### FaceMeshing.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.PropertyByAPIName"></a>

### FaceMeshing.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.CreateParameter"></a>

### FaceMeshing.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetParameter"></a>

### FaceMeshing.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.RemoveParameter"></a>

### FaceMeshing.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
