# `MeshCopy`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshControls.MeshCopy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MeshCopy.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#id1)                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#id1)                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#id0)                                               | Gets the internal object. For advanced usage only.            |
| [`NodeMergeTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.NodeMergeTolerance)                   | Gets or sets the NodeMergeTolerance.                          |
| [`PercentageOfElementSize`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.PercentageOfElementSize)         | Gets or sets the PercentageOfElementSize.                     |
| [`NodeMergeToleranceOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.NodeMergeToleranceOption)       | Gets or sets the NodeMergeToleranceOption.                    |
| [`TargetScoping`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.TargetScoping)                             | Gets or sets the TargetScoping.                               |
| [`SourceAnchorsNamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.SourceAnchorsNamedSelection) | Gets or sets the SourceAnchorsNamedSelection.                 |
| [`TargetAnchorsNamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.TargetAnchorsNamedSelection) | Gets or sets the TargetAnchorsNamedSelection.                 |
| [`SourceAnchors`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.SourceAnchors)                             | Gets or sets the SourceAnchors.                               |
| [`TargetAnchors`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.TargetAnchors)                             | Gets or sets the TargetAnchors.                               |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.DataModelObjectCategory)         | Gets the current DataModelObject's category.                  |
| [`ScopingMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.ScopingMethod)                             | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.Children)                                       | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.Comments)                                       | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.Figures)                                         | Gets the list of associated figures.                          |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#id0)                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.Properties)                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshControls/MeshCopy.md#MeshCopy.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshCopy.InternalObject"></a>

### *property* MeshCopy.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.NodeMergeTolerance"></a>

### *property* MeshCopy.NodeMergeTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeMergeTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.PercentageOfElementSize"></a>

### *property* MeshCopy.PercentageOfElementSize *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PercentageOfElementSize.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.NodeMergeToleranceOption"></a>

### *property* MeshCopy.NodeMergeToleranceOption *: [Ansys.Mechanical.DataModel.Enums.NodeMergeToleranceMethod](../../../../Mechanical/DataModel/Enums/NodeMergeToleranceMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NodeMergeToleranceMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeMergeToleranceOption.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.TargetScoping"></a>

### *property* MeshCopy.TargetScoping *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetScoping.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.SourceAnchorsNamedSelection"></a>

### *property* MeshCopy.SourceAnchorsNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceAnchorsNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.TargetAnchorsNamedSelection"></a>

### *property* MeshCopy.TargetAnchorsNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetAnchorsNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.SourceAnchors"></a>

### *property* MeshCopy.SourceAnchors *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceAnchors.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.TargetAnchors"></a>

### *property* MeshCopy.TargetAnchors *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetAnchors.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.DataModelObjectCategory"></a>

### *property* MeshCopy.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.ScopingMethod"></a>

### *property* MeshCopy.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Suppressed"></a>

### *property* MeshCopy.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Children"></a>

### *property* MeshCopy.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Comments"></a>

### *property* MeshCopy.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Figures"></a>

### *property* MeshCopy.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Images"></a>

### *property* MeshCopy.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MeshCopy.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Properties"></a>

### *property* MeshCopy.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.VisibleProperties"></a>

### *property* MeshCopy.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshCopy.GenerateMesh"></a>

### MeshCopy.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.RenameBasedOnDefinition"></a>

### MeshCopy.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Delete"></a>

### MeshCopy.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetChildren"></a>

### MeshCopy.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshCopy.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.AddComment"></a>

### MeshCopy.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.AddFigure"></a>

### MeshCopy.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.AddImage"></a>

### MeshCopy.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Activate"></a>

### MeshCopy.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.CopyTo"></a>

### MeshCopy.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Duplicate"></a>

### MeshCopy.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GroupAllSimilarChildren"></a>

### MeshCopy.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GroupSimilarObjects"></a>

### MeshCopy.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.PropertyByName"></a>

### MeshCopy.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.PropertyByAPIName"></a>

### MeshCopy.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.CreateParameter"></a>

### MeshCopy.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetParameter"></a>

### MeshCopy.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.RemoveParameter"></a>

### MeshCopy.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

