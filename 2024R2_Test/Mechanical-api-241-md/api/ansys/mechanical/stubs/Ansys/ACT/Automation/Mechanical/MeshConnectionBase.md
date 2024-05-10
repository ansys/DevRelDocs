<a id="meshconnectionbase"></a>

# MeshConnectionBase

<a id="MeshConnectionBase"></a>

### *class* MeshConnectionBase

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MeshConnectionBase.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`Generate`](#MeshConnectionBase.Generate)                               | Run the Generate action.                                                          |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#MeshConnectionBase.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MeshConnectionBase.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MeshConnectionBase.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MeshConnectionBase.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshConnectionBase.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MeshConnectionBase.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MeshConnectionBase.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MeshConnectionBase.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MeshConnectionBase.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshConnectionBase.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MeshConnectionBase.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MeshConnectionBase.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#MeshConnectionBase.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MeshConnectionBase.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MeshConnectionBase.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ScopingMethod`](#MeshConnectionBase.ScopingMethod)                                                                | ScopingMethod property.                                       |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`ToleranceSlider`](#MeshConnectionBase.ToleranceSlider)                                                            | Gets or sets the ToleranceSlider.                             |
| [`MasterBodies`](#MeshConnectionBase.MasterBodies)                                                                  | Gets the MasterBodies.                                        |
| [`SlaveBodies`](#MeshConnectionBase.SlaveBodies)                                                                    | Gets the SlaveBodies.                                         |
| [`SnapTolerance`](#MeshConnectionBase.SnapTolerance)                                                                | Gets or sets the SnapTolerance.                               |
| [`ScopeMode`](#MeshConnectionBase.ScopeMode)                                                                        | Gets the ScopeMode.                                           |
| [`SnapType`](../../../Mechanical/DataModel/Enums/SnapType.md#SnapType)                                              | Gets or sets the SnapType.                                    |
| [`ToleranceType`](../../../Mechanical/DataModel/Enums/ToleranceType.md#ToleranceType)                               | Gets or sets the ToleranceType.                               |
| [`SnapToBoundary`](#MeshConnectionBase.SnapToBoundary)                                                              | Gets or sets the SnapToBoundary.                              |
| [`Suppressed`](#MeshConnectionBase.Suppressed)                                                                      | Gets or sets the Suppressed.                                  |
| [`MasterLocation`](#MeshConnectionBase.MasterLocation)                                                              | Gets or sets the MasterLocation.                              |
| [`SlaveLocation`](#MeshConnectionBase.SlaveLocation)                                                                | Gets or sets the SlaveLocation.                               |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#MeshConnectionBase.Children)                                                                          | Gets the list of children.                                    |
| [`Comments`](#MeshConnectionBase.Comments)                                                                          | Gets the list of associated comments.                         |
| [`Figures`](#MeshConnectionBase.Figures)                                                                            | Gets the list of associated figures.                          |
| [`Images`](#MeshConnectionBase.Images)                                                                              | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MeshConnectionBase.Properties)                                                                      | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MeshConnectionBase.VisibleProperties)                                                        | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import MeshConnectionBase
```

<a id="property-detail"></a>

## Property detail

<a id="MeshConnectionBase.ScopingMethod"></a>

### *property* MeshConnectionBase.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

ScopingMethod property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.InternalObject"></a>

### *property* MeshConnectionBase.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.ToleranceSlider"></a>

### *property* MeshConnectionBase.ToleranceSlider *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.MasterBodies"></a>

### *property* MeshConnectionBase.MasterBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MasterBodies.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.SlaveBodies"></a>

### *property* MeshConnectionBase.SlaveBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SlaveBodies.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.SnapTolerance"></a>

### *property* MeshConnectionBase.SnapTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.ScopeMode"></a>

### *property* MeshConnectionBase.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.SnapType"></a>

### *property* MeshConnectionBase.SnapType *: [Ansys.Mechanical.DataModel.Enums.SnapType](../../../Mechanical/DataModel/Enums/SnapType.md#SnapType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapType.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.ToleranceType"></a>

### *property* MeshConnectionBase.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.SnapToBoundary"></a>

### *property* MeshConnectionBase.SnapToBoundary *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapToBoundary.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Suppressed"></a>

### *property* MeshConnectionBase.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.MasterLocation"></a>

### *property* MeshConnectionBase.MasterLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MasterLocation.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.SlaveLocation"></a>

### *property* MeshConnectionBase.SlaveLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlaveLocation.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.DataModelObjectCategory"></a>

### *property* MeshConnectionBase.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Children"></a>

### *property* MeshConnectionBase.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Comments"></a>

### *property* MeshConnectionBase.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Figures"></a>

### *property* MeshConnectionBase.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Images"></a>

### *property* MeshConnectionBase.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MeshConnectionBase.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Properties"></a>

### *property* MeshConnectionBase.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.VisibleProperties"></a>

### *property* MeshConnectionBase.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshConnectionBase.Generate"></a>

### MeshConnectionBase.Generate()

Run the Generate action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.RenameBasedOnDefinition"></a>

### MeshConnectionBase.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Delete"></a>

### MeshConnectionBase.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GetChildren"></a>

### MeshConnectionBase.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshConnectionBase.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.AddComment"></a>

### MeshConnectionBase.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.AddFigure"></a>

### MeshConnectionBase.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.AddImage"></a>

### MeshConnectionBase.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Activate"></a>

### MeshConnectionBase.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.CopyTo"></a>

### MeshConnectionBase.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.Duplicate"></a>

### MeshConnectionBase.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GroupAllSimilarChildren"></a>

### MeshConnectionBase.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GroupSimilarObjects"></a>

### MeshConnectionBase.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.PropertyByName"></a>

### MeshConnectionBase.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.PropertyByAPIName"></a>

### MeshConnectionBase.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.CreateParameter"></a>

### MeshConnectionBase.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.GetParameter"></a>

### MeshConnectionBase.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionBase.RemoveParameter"></a>

### MeshConnectionBase.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
