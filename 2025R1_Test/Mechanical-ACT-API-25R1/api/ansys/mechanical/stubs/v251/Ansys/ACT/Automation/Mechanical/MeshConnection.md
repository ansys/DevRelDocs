# `MeshConnection`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshConnection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshConnection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MeshConnection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MeshConnection.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#MeshConnection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MeshConnection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshConnection.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#MeshConnection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateNamedSelection`](#MeshConnection.CreateNamedSelection)       | CreateNamedSelection method.                                                      |
| [`CreateParameter`](#MeshConnection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MeshConnection.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MeshConnection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`FlipMasterSlave`](#MeshConnection.FlipMasterSlave)                 | FlipMasterSlave method.                                                           |
| [`Generate`](#MeshConnection.Generate)                               | Run the Generate action.                                                          |
| [`GetChildren`](#MeshConnection.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MeshConnection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MeshConnection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshConnection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MeshConnection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MeshConnection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MeshConnection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#MeshConnection.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#MeshConnection.Children)                               | Gets the list of children.                                    |
| [`Comments`](#MeshConnection.Comments)                               | Gets the list of associated comments.                         |
| [`ContactRegion`](#MeshConnection.ContactRegion)                     | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](#MeshConnection.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#MeshConnection.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#MeshConnection.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#MeshConnection.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`MasterBodies`](#MeshConnection.MasterBodies)                       | Gets the MasterBodies.                                        |
| [`MasterElementSizeFactor`](#MeshConnection.MasterElementSizeFactor) | Gets or sets the MasterElementSizeFactor.                     |
| [`MasterLocation`](#MeshConnection.MasterLocation)                   | Gets or sets the MasterLocation.                              |
| [`Properties`](#MeshConnection.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopeMode`](#MeshConnection.ScopeMode)                             | Gets the ScopeMode.                                           |
| [`ScopingMethod`](#MeshConnection.ScopingMethod)                     | ScopingMethod property.                                       |
| [`SlaveBodies`](#MeshConnection.SlaveBodies)                         | Gets the SlaveBodies.                                         |
| [`SlaveLocation`](#MeshConnection.SlaveLocation)                     | Gets or sets the SlaveLocation.                               |
| [`SnapToBoundary`](#MeshConnection.SnapToBoundary)                   | Gets or sets the SnapToBoundary.                              |
| [`SnapTolerance`](#MeshConnection.SnapTolerance)                     | Gets or sets the SnapTolerance.                               |
| [`SnapType`](#MeshConnection.SnapType)                               | Gets or sets the SnapType.                                    |
| [`Suppressed`](#MeshConnection.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`ThicknessScaleFactor`](#MeshConnection.ThicknessScaleFactor)       | Gets or sets the ThicknessScaleFactor.                        |
| [`ToleranceSlider`](#MeshConnection.ToleranceSlider)                 | Gets or sets the ToleranceSlider.                             |
| [`ToleranceType`](#MeshConnection.ToleranceType)                     | Gets or sets the ToleranceType.                               |
| [`ToleranceValue`](#MeshConnection.ToleranceValue)                   | Gets or sets the ToleranceValue.                              |
| [`VisibleProperties`](#MeshConnection.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshConnection.Children"></a>

### *property* MeshConnection.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.Comments"></a>

### *property* MeshConnection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.ContactRegion"></a>

### *property* MeshConnection.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](Connections/ContactRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.DataModelObjectCategory"></a>

### *property* MeshConnection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.Figures"></a>

### *property* MeshConnection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.Images"></a>

### *property* MeshConnection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.InternalObject"></a>

### *property* MeshConnection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.MasterBodies"></a>

### *property* MeshConnection.MasterBodies *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MasterBodies.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.MasterElementSizeFactor"></a>

### *property* MeshConnection.MasterElementSizeFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MasterElementSizeFactor.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.MasterLocation"></a>

### *property* MeshConnection.MasterLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MasterLocation.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.Properties"></a>

### *property* MeshConnection.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.ScopeMode"></a>

### *property* MeshConnection.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.ScopingMethod"></a>

### *property* MeshConnection.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

ScopingMethod property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.SlaveBodies"></a>

### *property* MeshConnection.SlaveBodies *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SlaveBodies.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.SlaveLocation"></a>

### *property* MeshConnection.SlaveLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlaveLocation.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.SnapToBoundary"></a>

### *property* MeshConnection.SnapToBoundary *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapToBoundary.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.SnapTolerance"></a>

### *property* MeshConnection.SnapTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.SnapType"></a>

### *property* MeshConnection.SnapType *: [Ansys.Mechanical.DataModel.Enums.SnapType](../../../Mechanical/DataModel/Enums/SnapType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SnapType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapType.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.Suppressed"></a>

### *property* MeshConnection.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.ThicknessScaleFactor"></a>

### *property* MeshConnection.ThicknessScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThicknessScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.ToleranceSlider"></a>

### *property* MeshConnection.ToleranceSlider *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.ToleranceType"></a>

### *property* MeshConnection.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.ToleranceValue"></a>

### *property* MeshConnection.ToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.VisibleProperties"></a>

### *property* MeshConnection.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshConnection.Activate"></a>

### MeshConnection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.AddComment"></a>

### MeshConnection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.AddFigure"></a>

### MeshConnection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.AddImage"></a>

### MeshConnection.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.CopyTo"></a>

### MeshConnection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.CreateNamedSelection"></a>

### MeshConnection.CreateNamedSelection()

CreateNamedSelection method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.CreateParameter"></a>

### MeshConnection.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.Delete"></a>

### MeshConnection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.Duplicate"></a>

### MeshConnection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.FlipMasterSlave"></a>

### MeshConnection.FlipMasterSlave()

FlipMasterSlave method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.Generate"></a>

### MeshConnection.Generate()

Run the Generate action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.GetChildren"></a>

### MeshConnection.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.GetParameter"></a>

### MeshConnection.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.GroupAllSimilarChildren"></a>

### MeshConnection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.GroupSimilarObjects"></a>

### MeshConnection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.PropertyByAPIName"></a>

### MeshConnection.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.PropertyByName"></a>

### MeshConnection.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.RemoveParameter"></a>

### MeshConnection.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.RenameBasedOnDefinition"></a>

### MeshConnection.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

