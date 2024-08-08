# `MeshControl`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.MeshControls.MeshControl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MeshControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#MeshControl.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#MeshControl.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MeshControl.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MeshControl.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MeshControl.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshControl.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MeshControl.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MeshControl.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MeshControl.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MeshControl.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshControl.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MeshControl.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MeshControl.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#MeshControl.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MeshControl.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MeshControl.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`ScopingMethod`](#MeshControl.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`InternalObject`](#id0)                                          | Gets the internal object. For advanced usage only.            |
| [`Suppressed`](#MeshControl.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](#MeshControl.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Children`](#MeshControl.Children)                               | Gets the list of children.                                    |
| [`Comments`](#MeshControl.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#MeshControl.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#MeshControl.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                          | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MeshControl.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MeshControl.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshControl.ScopingMethod"></a>

### *property* MeshControl.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.InternalObject"></a>

### *property* MeshControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Suppressed"></a>

### *property* MeshControl.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.DataModelObjectCategory"></a>

### *property* MeshControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Children"></a>

### *property* MeshControl.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Comments"></a>

### *property* MeshControl.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Figures"></a>

### *property* MeshControl.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Images"></a>

### *property* MeshControl.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MeshControl.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Properties"></a>

### *property* MeshControl.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.VisibleProperties"></a>

### *property* MeshControl.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshControl.GenerateMesh"></a>

### MeshControl.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.RenameBasedOnDefinition"></a>

### MeshControl.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Delete"></a>

### MeshControl.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetChildren"></a>

### MeshControl.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshControl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.AddComment"></a>

### MeshControl.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.AddFigure"></a>

### MeshControl.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.AddImage"></a>

### MeshControl.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Activate"></a>

### MeshControl.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.CopyTo"></a>

### MeshControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Duplicate"></a>

### MeshControl.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GroupAllSimilarChildren"></a>

### MeshControl.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GroupSimilarObjects"></a>

### MeshControl.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.PropertyByName"></a>

### MeshControl.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.PropertyByAPIName"></a>

### MeshControl.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.CreateParameter"></a>

### MeshControl.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetParameter"></a>

### MeshControl.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.RemoveParameter"></a>

### MeshControl.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

