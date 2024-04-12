<a id="matchcontrol"></a>

# MatchControl

<a id="MatchControl"></a>

### *class* MatchControl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MatchControl.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#MatchControl.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#MatchControl.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MatchControl.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MatchControl.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MatchControl.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MatchControl.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MatchControl.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MatchControl.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MatchControl.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MatchControl.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MatchControl.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MatchControl.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MatchControl.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#MatchControl.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MatchControl.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MatchControl.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Transformation`](#MatchControl.Transformation)                                                                       | Gets or sets the Transformation.                              |
| [`ControlMessages`](#MatchControl.ControlMessages)                                                                     | Gets the ControlMessages.                                     |
| [`HighNamedSelection`](#MatchControl.HighNamedSelection)                                                               | Gets or sets the HighNamedSelection.                          |
| [`LowNamedSelection`](#MatchControl.LowNamedSelection)                                                                 | Gets or sets the LowNamedSelection.                           |
| [`RotationAxis`](#MatchControl.RotationAxis)                                                                           | Gets or sets the RotationAxis.                                |
| [`HighCoordinateSystem`](#MatchControl.HighCoordinateSystem)                                                           | Gets or sets the HighCoordinateSystem.                        |
| [`LowCoordinateSystem`](#MatchControl.LowCoordinateSystem)                                                             | Gets or sets the LowCoordinateSystem.                         |
| [`HighGeometrySelection`](#MatchControl.HighGeometrySelection)                                                         | Gets or sets the HighGeometrySelection.                       |
| [`LowGeometrySelection`](#MatchControl.LowGeometrySelection)                                                           | Gets or sets the LowGeometrySelection.                        |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#MatchControl.ScopingMethod)                                                                         | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#MatchControl.Suppressed)                                                                               | Gets or sets the Suppressed.                                  |
| [`Children`](#MatchControl.Children)                                                                                   | Gets the list of children.                                    |
| [`Comments`](#MatchControl.Comments)                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#MatchControl.Figures)                                                                                     | Gets the list of associated figures.                          |
| [`Images`](#MatchControl.Images)                                                                                       | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MatchControl.Properties)                                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MatchControl.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import MatchControl
```

<a id="property-detail"></a>

## Property detail

<a id="MatchControl.InternalObject"></a>

### *property* MatchControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Transformation"></a>

### *property* MatchControl.Transformation *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Transformation.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.ControlMessages"></a>

### *property* MatchControl.ControlMessages *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ControlMessages.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.HighNamedSelection"></a>

### *property* MatchControl.HighNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.LowNamedSelection"></a>

### *property* MatchControl.LowNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.RotationAxis"></a>

### *property* MatchControl.RotationAxis *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationAxis.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.HighCoordinateSystem"></a>

### *property* MatchControl.HighCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.LowCoordinateSystem"></a>

### *property* MatchControl.LowCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.HighGeometrySelection"></a>

### *property* MatchControl.HighGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.LowGeometrySelection"></a>

### *property* MatchControl.LowGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.DataModelObjectCategory"></a>

### *property* MatchControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.ScopingMethod"></a>

### *property* MatchControl.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Suppressed"></a>

### *property* MatchControl.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Children"></a>

### *property* MatchControl.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Comments"></a>

### *property* MatchControl.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Figures"></a>

### *property* MatchControl.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Images"></a>

### *property* MatchControl.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MatchControl.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Properties"></a>

### *property* MatchControl.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.VisibleProperties"></a>

### *property* MatchControl.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MatchControl.GenerateMesh"></a>

### MatchControl.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.RenameBasedOnDefinition"></a>

### MatchControl.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Delete"></a>

### MatchControl.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetChildren"></a>

### MatchControl.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MatchControl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.AddComment"></a>

### MatchControl.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.AddFigure"></a>

### MatchControl.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.AddImage"></a>

### MatchControl.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Activate"></a>

### MatchControl.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.CopyTo"></a>

### MatchControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.Duplicate"></a>

### MatchControl.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GroupAllSimilarChildren"></a>

### MatchControl.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GroupSimilarObjects"></a>

### MatchControl.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.PropertyByName"></a>

### MatchControl.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.PropertyByAPIName"></a>

### MatchControl.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.CreateParameter"></a>

### MatchControl.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.GetParameter"></a>

### MatchControl.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MatchControl.RemoveParameter"></a>

### MatchControl.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
