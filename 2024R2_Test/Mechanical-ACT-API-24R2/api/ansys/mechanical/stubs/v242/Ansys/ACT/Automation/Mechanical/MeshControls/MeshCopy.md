# `MeshCopy`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.MeshControls.MeshCopy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MeshCopy.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `GenerateMesh`            | Generate the Mesh.                                                                |
| `RenameBasedOnDefinition` | Run the RenameBasedOnDefinition action.                                           |
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------|---------------------------------------------------------------|
| `InternalObject`              | Gets the internal object. For advanced usage only.            |
| `NodeMergeTolerance`          | Gets or sets the NodeMergeTolerance.                          |
| `PercentageOfElementSize`     | Gets or sets the PercentageOfElementSize.                     |
| `NodeMergeToleranceOption`    | Gets or sets the NodeMergeToleranceOption.                    |
| `TargetScoping`               | Gets or sets the TargetScoping.                               |
| `SourceAnchorsNamedSelection` | Gets or sets the SourceAnchorsNamedSelection.                 |
| `TargetAnchorsNamedSelection` | Gets or sets the TargetAnchorsNamedSelection.                 |
| `SourceAnchors`               | Gets or sets the SourceAnchors.                               |
| `TargetAnchors`               | Gets or sets the TargetAnchors.                               |
| `DataModelObjectCategory`     | Gets the current DataModelObject's category.                  |
| `ScopingMethod`               | Gets or sets the ScopingMethod.                               |
| `Suppressed`                  | Gets or sets the Suppressed.                                  |
| `Children`                    | Gets the list of children.                                    |
| `Comments`                    | Gets the list of associated comments.                         |
| `Figures`                     | Gets the list of associated figures.                          |
| `Images`                      | Gets the list of associated images.                           |
| `InternalObject`              | Gets the internal object. For advanced usage only.            |
| `Properties`                  | Gets the list of properties for this object.                  |
| `VisibleProperties`           | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

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

### *property* MeshCopy.NodeMergeToleranceOption *: [Ansys.Mechanical.DataModel.Enums.NodeMergeToleranceMethod](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NodeMergeToleranceMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NodeMergeToleranceMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeMergeToleranceOption.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.TargetScoping *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetScoping.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.SourceAnchorsNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../../../../../../v241/Ansys/ACT/Automation/Mechanical/NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceAnchorsNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.TargetAnchorsNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../../../../../../v241/Ansys/ACT/Automation/Mechanical/NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetAnchorsNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.SourceAnchors *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceAnchors.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.TargetAnchors *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetAnchors.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MeshCopy.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

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

### MeshCopy.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshCopy.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MeshCopy.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MeshCopy.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

