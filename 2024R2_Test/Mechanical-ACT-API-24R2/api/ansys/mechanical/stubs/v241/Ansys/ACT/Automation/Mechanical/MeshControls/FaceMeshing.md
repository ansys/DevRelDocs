# `FaceMeshing`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshControls.FaceMeshing"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.FaceMeshing

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FaceMeshing.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FaceMeshing.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#FaceMeshing.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FaceMeshing.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FaceMeshing.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#FaceMeshing.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FaceMeshing.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#FaceMeshing.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FaceMeshing.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#FaceMeshing.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#FaceMeshing.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FaceMeshing.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FaceMeshing.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FaceMeshing.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#FaceMeshing.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FaceMeshing.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FaceMeshing.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#FaceMeshing.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Active`](#FaceMeshing.Active)                                       | Gets the Active.                                              |
| [`Children`](#FaceMeshing.Children)                                   | Gets the list of children.                                    |
| [`Comments`](#FaceMeshing.Comments)                                   | Gets the list of associated comments.                         |
| [`ConstrainBoundary`](#FaceMeshing.ConstrainBoundary)                 | Gets or sets the ConstrainBoundary.                           |
| [`DataModelObjectCategory`](#FaceMeshing.DataModelObjectCategory)     | Gets the current DataModelObject’s category.                  |
| [`Figures`](#FaceMeshing.Figures)                                     | Gets the list of associated figures.                          |
| [`Images`](#FaceMeshing.Images)                                       | Gets the list of associated images.                           |
| [`InternalNumberOfDivisions`](#FaceMeshing.InternalNumberOfDivisions) | Gets or sets the InternalNumberOfDivisions.                   |
| [`InternalObject`](#FaceMeshing.InternalObject)                       | Gets the internal object. For advanced usage only.            |
| [`Location`](#FaceMeshing.Location)                                   | Gets or sets the Location.                                    |
| [`MappedMesh`](#FaceMeshing.MappedMesh)                               | Gets or sets the MappedMesh.                                  |
| [`Method`](#FaceMeshing.Method)                                       | Gets or sets the Method.                                      |
| [`NamedSelection`](#FaceMeshing.NamedSelection)                       | Gets or sets the NamedSelection.                              |
| [`Properties`](#FaceMeshing.Properties)                               | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#FaceMeshing.ScopingMethod)                         | Gets or sets the ScopingMethod.                               |
| [`SpecifiedCorners`](#FaceMeshing.SpecifiedCorners)                   | Gets or sets the SpecifiedCorners.                            |
| [`SpecifiedEnds`](#FaceMeshing.SpecifiedEnds)                         | Gets or sets the SpecifiedEnds.                               |
| [`SpecifiedSides`](#FaceMeshing.SpecifiedSides)                       | Gets or sets the SpecifiedSides.                              |
| [`Suppressed`](#FaceMeshing.Suppressed)                               | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#FaceMeshing.VisibleProperties)                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FaceMeshing.Active"></a>

### *property* FaceMeshing.Active *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Active.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Children"></a>

### *property* FaceMeshing.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Comments"></a>

### *property* FaceMeshing.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.ConstrainBoundary"></a>

### *property* FaceMeshing.ConstrainBoundary *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstrainBoundary.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.DataModelObjectCategory"></a>

### *property* FaceMeshing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Figures"></a>

### *property* FaceMeshing.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Images"></a>

### *property* FaceMeshing.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.InternalNumberOfDivisions"></a>

### *property* FaceMeshing.InternalNumberOfDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InternalNumberOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.InternalObject"></a>

### *property* FaceMeshing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Location"></a>

### *property* FaceMeshing.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.MappedMesh"></a>

### *property* FaceMeshing.MappedMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MappedMesh.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Method"></a>

### *property* FaceMeshing.Method *: [Ansys.Mechanical.DataModel.Enums.FaceMeshingMethod](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/FaceMeshingMethod.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.FaceMeshingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.NamedSelection"></a>

### *property* FaceMeshing.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelection.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Properties"></a>

### *property* FaceMeshing.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.ScopingMethod"></a>

### *property* FaceMeshing.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

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

<a id="FaceMeshing.Suppressed"></a>

### *property* FaceMeshing.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.VisibleProperties"></a>

### *property* FaceMeshing.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FaceMeshing.Activate"></a>

### FaceMeshing.Activate()

Activate the current object.

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

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.CopyTo"></a>

### FaceMeshing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.CreateParameter"></a>

### FaceMeshing.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Delete"></a>

### FaceMeshing.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Duplicate"></a>

### FaceMeshing.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GenerateMesh"></a>

### FaceMeshing.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetChildren"></a>

### FaceMeshing.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetParameter"></a>

### FaceMeshing.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GroupAllSimilarChildren"></a>

### FaceMeshing.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GroupSimilarObjects"></a>

### FaceMeshing.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.PropertyByAPIName"></a>

### FaceMeshing.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.PropertyByName"></a>

### FaceMeshing.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.RemoveParameter"></a>

### FaceMeshing.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.RenameBasedOnDefinition"></a>

### FaceMeshing.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

