# FeatureSuppress

### *class* FeatureSuppress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FeatureSuppress.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GenerateMesh`](#FeatureSuppress.GenerateMesh)                       | Generate the Mesh.                                                                |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#FeatureSuppress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FeatureSuppress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FeatureSuppress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FeatureSuppress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FeatureSuppress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FeatureSuppress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FeatureSuppress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FeatureSuppress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FeatureSuppress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FeatureSuppress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FeatureSuppress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FeatureSuppress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#FeatureSuppress.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FeatureSuppress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FeatureSuppress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                              |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`FeatureHeight`](#FeatureSuppress.FeatureHeight)                                                                      | To specify the Feature Height.                                                  |
| [`SourceSelection`](#FeatureSuppress.SourceSelection)                                                                  | To select the FeatureSuppress method.                                           |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                                                |
| [`SourceNamedSelection`](#FeatureSuppress.SourceNamedSelection)                                                        | Gets or sets the SourceNamedSelection.                                          |
| [`SourceLocation`](#FeatureSuppress.SourceLocation)                                                                    | To specify the face selections for the method: Defeature Faces or Parent Faces. |
| [`Location`](#FeatureSuppress.Location)                                                                                | Gets or sets the Location.                                                      |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                    |
| [`ScopingMethod`](#FeatureSuppress.ScopingMethod)                                                                      | Gets or sets the ScopingMethod.                                                 |
| [`Suppressed`](#FeatureSuppress.Suppressed)                                                                            | Gets or sets the Suppressed.                                                    |
| [`Children`](#FeatureSuppress.Children)                                                                                | Gets the list of children.                                                      |
| [`Comments`](#FeatureSuppress.Comments)                                                                                | Gets the list of associated comments.                                           |
| [`Figures`](#FeatureSuppress.Figures)                                                                                  | Gets the list of associated figures.                                            |
| [`Images`](#FeatureSuppress.Images)                                                                                    | Gets the list of associated images.                                             |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                              |
| [`Properties`](#FeatureSuppress.Properties)                                                                            | Gets the list of properties for this object.                                    |
| [`VisibleProperties`](#FeatureSuppress.VisibleProperties)                                                              | Gets the list of properties that are visible for this object.                   |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import FeatureSuppress
```

## Property detail

### *property* FeatureSuppress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FeatureSuppress.FeatureHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

To specify the Feature Height.

<!-- !! processed by numpydoc !! -->

### *property* FeatureSuppress.SourceSelection *: [Ansys.Mechanical.DataModel.Enums.FeatureSuppressMethod](../../../../Mechanical/DataModel/Enums/FeatureSuppressMethod.md#FeatureSuppressMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

To select the FeatureSuppress method.

<!-- !! processed by numpydoc !! -->

### *property* FeatureSuppress.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* FeatureSuppress.SourceNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* FeatureSuppress.SourceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

To specify the face selections for the method: Defeature Faces or Parent Faces.

<!-- !! processed by numpydoc !! -->

### *property* FeatureSuppress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* FeatureSuppress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FeatureSuppress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* FeatureSuppress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FeatureSuppress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FeatureSuppress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FeatureSuppress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FeatureSuppress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FeatureSuppress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FeatureSuppress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FeatureSuppress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FeatureSuppress.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

### FeatureSuppress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### FeatureSuppress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FeatureSuppress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FeatureSuppress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FeatureSuppress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FeatureSuppress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FeatureSuppress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FeatureSuppress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FeatureSuppress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FeatureSuppress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FeatureSuppress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FeatureSuppress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FeatureSuppress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FeatureSuppress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FeatureSuppress.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### FeatureSuppress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FeatureSuppress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
