# `FaceMeshing`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshControls.FaceMeshing

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FaceMeshing.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`ConstrainBoundary`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.ConstrainBoundary)                 | Gets or sets the ConstrainBoundary.                           |
| [`InternalNumberOfDivisions`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.InternalNumberOfDivisions) | Gets or sets the InternalNumberOfDivisions.                   |
| [`Method`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.Method)                                       | Gets or sets the Method.                                      |
| [`Active`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.Active)                                       | Gets the Active.                                              |
| [`MappedMesh`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.MappedMesh)                               | Gets or sets the MappedMesh.                                  |
| [`NamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.NamedSelection)                       | Gets or sets the NamedSelection.                              |
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.Location)                                   | Gets or sets the Location.                                    |
| [`SpecifiedCorners`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.SpecifiedCorners)                   | Gets or sets the SpecifiedCorners.                            |
| [`SpecifiedEnds`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.SpecifiedEnds)                         | Gets or sets the SpecifiedEnds.                               |
| [`SpecifiedSides`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.SpecifiedSides)                       | Gets or sets the SpecifiedSides.                              |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.DataModelObjectCategory)     | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.ScopingMethod)                         | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.Suppressed)                               | Gets or sets the Suppressed.                                  |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.Children)                                   | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.Comments)                                   | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.Figures)                                     | Gets the list of associated figures.                          |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.Images)                                       | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.Properties)                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/FaceMeshing.md#FaceMeshing.VisibleProperties)                 | Gets the list of properties that are visible for this object. |

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

### *property* FaceMeshing.Method *: [Ansys.Mechanical.DataModel.Enums.FaceMeshingMethod](../../../../Mechanical/DataModel/Enums/FaceMeshingMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FaceMeshingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* FaceMeshing.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* FaceMeshing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.ScopingMethod"></a>

### *property* FaceMeshing.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* FaceMeshing.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Figures"></a>

### *property* FaceMeshing.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Images"></a>

### *property* FaceMeshing.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### FaceMeshing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

