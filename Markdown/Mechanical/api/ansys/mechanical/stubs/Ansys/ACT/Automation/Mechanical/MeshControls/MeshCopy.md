# MeshCopy

### *class* MeshCopy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MeshCopy.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GenerateMesh`](#MeshCopy.GenerateMesh)                       | Generate the Mesh.                                                                |
|----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#MeshCopy.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MeshCopy.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MeshCopy.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MeshCopy.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshCopy.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MeshCopy.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MeshCopy.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MeshCopy.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MeshCopy.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshCopy.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MeshCopy.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MeshCopy.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#MeshCopy.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MeshCopy.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MeshCopy.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`NodeMergeTolerance`](#MeshCopy.NodeMergeTolerance)                                                                   | Gets or sets the NodeMergeTolerance.                          |
| [`PercentageOfElementSize`](#MeshCopy.PercentageOfElementSize)                                                         | Gets or sets the PercentageOfElementSize.                     |
| [`NodeMergeToleranceOption`](#MeshCopy.NodeMergeToleranceOption)                                                       | Gets or sets the NodeMergeToleranceOption.                    |
| [`TargetScoping`](#MeshCopy.TargetScoping)                                                                             | Gets or sets the TargetScoping.                               |
| [`SourceAnchorsNamedSelection`](#MeshCopy.SourceAnchorsNamedSelection)                                                 | Gets or sets the SourceAnchorsNamedSelection.                 |
| [`TargetAnchorsNamedSelection`](#MeshCopy.TargetAnchorsNamedSelection)                                                 | Gets or sets the TargetAnchorsNamedSelection.                 |
| [`SourceAnchors`](#MeshCopy.SourceAnchors)                                                                             | Gets or sets the SourceAnchors.                               |
| [`TargetAnchors`](#MeshCopy.TargetAnchors)                                                                             | Gets or sets the TargetAnchors.                               |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#MeshCopy.ScopingMethod)                                                                             | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#MeshCopy.Suppressed)                                                                                   | Gets or sets the Suppressed.                                  |
| [`Children`](#MeshCopy.Children)                                                                                       | Gets the list of children.                                    |
| [`Comments`](#MeshCopy.Comments)                                                                                       | Gets the list of associated comments.                         |
| [`Figures`](#MeshCopy.Figures)                                                                                         | Gets the list of associated figures.                          |
| [`Images`](#MeshCopy.Images)                                                                                           | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MeshCopy.Properties)                                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MeshCopy.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import MeshCopy
```

## Property detail

### *property* MeshCopy.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.NodeMergeTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeMergeTolerance.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.PercentageOfElementSize *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PercentageOfElementSize.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.NodeMergeToleranceOption *: [Ansys.Mechanical.DataModel.Enums.NodeMergeToleranceMethod](../../../../Mechanical/DataModel/Enums/NodeMergeToleranceMethod.md#NodeMergeToleranceMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeMergeToleranceOption.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.TargetScoping *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetScoping.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.SourceAnchorsNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceAnchorsNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.TargetAnchorsNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetAnchorsNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.SourceAnchors *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceAnchors.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.TargetAnchors *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetAnchors.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MeshCopy.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

### MeshCopy.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### MeshCopy.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MeshCopy.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshCopy.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshCopy.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MeshCopy.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MeshCopy.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MeshCopy.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MeshCopy.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MeshCopy.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MeshCopy.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MeshCopy.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MeshCopy.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MeshCopy.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MeshCopy.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MeshCopy.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MeshCopy.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
