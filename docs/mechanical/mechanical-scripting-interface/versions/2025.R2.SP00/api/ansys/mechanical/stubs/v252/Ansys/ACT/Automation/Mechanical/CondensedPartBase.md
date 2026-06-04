# `CondensedPartBase`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CondensedPartBase"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CondensedPartBase

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CondensedPartBase.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CondensedPartBase.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#CondensedPartBase.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#CondensedPartBase.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CondensedPartBase.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CondensedPartBase.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#CondensedPartBase.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#CondensedPartBase.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CondensedPartBase.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CondensedPartBase.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CondensedPartBase.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#CondensedPartBase.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CondensedPartBase.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CondensedPartBase.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CondensedPartBase.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#CondensedPartBase.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CondensedPartBase.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CondensedPartBase.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#CondensedPartBase.Children)                               | Gets the list of children.                                    |
| [`Comments`](#CondensedPartBase.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CondensedPartBase.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#CondensedPartBase.Figures)                                 | Gets the list of associated figures.                          |
| [`GeometrySelection`](#CondensedPartBase.GeometrySelection)             | Gets or sets the GeometrySelection.                           |
| [`Images`](#CondensedPartBase.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#CondensedPartBase.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`NumberInterfaceEntries`](#CondensedPartBase.NumberInterfaceEntries)   | Gets the NumberInterfaceEntries.                              |
| [`NumberMasterNodes`](#CondensedPartBase.NumberMasterNodes)             | Gets the NumberMasterNodes.                                   |
| [`Physics`](#CondensedPartBase.Physics)                                 | Gets the Physics.                                             |
| [`Properties`](#CondensedPartBase.Properties)                           | Gets the list of properties for this object.                  |
| [`ReferenceTemperature`](#CondensedPartBase.ReferenceTemperature)       | Gets or sets the ReferenceTemperature.                        |
| [`SolutionName`](#CondensedPartBase.SolutionName)                       | Gets or sets the SolutionName.                                |
| [`SolutionNameMode`](#CondensedPartBase.SolutionNameMode)               | Gets or sets the SolutionNameMode.                            |
| [`SolverFilesDirectory`](#CondensedPartBase.SolverFilesDirectory)       | Gets the SolverFilesDirectory.                                |
| [`SolverUnitSystem`](#CondensedPartBase.SolverUnitSystem)               | Gets or sets the SolverUnitSystem.                            |
| [`SolverUnits`](#CondensedPartBase.SolverUnits)                         | Gets or sets the SolverUnits.                                 |
| [`Suppressed`](#CondensedPartBase.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`TemperatureUnits`](#CondensedPartBase.TemperatureUnits)               | Gets the TemperatureUnits.                                    |
| [`VisibleProperties`](#CondensedPartBase.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CondensedPartBase.Children"></a>

### *property* CondensedPartBase.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Comments"></a>

### *property* CondensedPartBase.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.DataModelObjectCategory"></a>

### *property* CondensedPartBase.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Figures"></a>

### *property* CondensedPartBase.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GeometrySelection"></a>

### *property* CondensedPartBase.GeometrySelection *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Images"></a>

### *property* CondensedPartBase.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.InternalObject"></a>

### *property* CondensedPartBase.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedPartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.NumberInterfaceEntries"></a>

### *property* CondensedPartBase.NumberInterfaceEntries *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberInterfaceEntries.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.NumberMasterNodes"></a>

### *property* CondensedPartBase.NumberMasterNodes *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberMasterNodes.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Physics"></a>

### *property* CondensedPartBase.Physics *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics](../../../Mechanical/DataModel/Enums/CondensedPartPhysics.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Physics.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Properties"></a>

### *property* CondensedPartBase.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.ReferenceTemperature"></a>

### *property* CondensedPartBase.ReferenceTemperature *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperature.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.SolutionName"></a>

### *property* CondensedPartBase.SolutionName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionName.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.SolutionNameMode"></a>

### *property* CondensedPartBase.SolutionNameMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionNameMode.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.SolverFilesDirectory"></a>

### *property* CondensedPartBase.SolverFilesDirectory *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.SolverUnitSystem"></a>

### *property* CondensedPartBase.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.SolverUnits"></a>

### *property* CondensedPartBase.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Suppressed"></a>

### *property* CondensedPartBase.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.TemperatureUnits"></a>

### *property* CondensedPartBase.TemperatureUnits *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TemperatureUnits.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.VisibleProperties"></a>

### *property* CondensedPartBase.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CondensedPartBase.Activate"></a>

### CondensedPartBase.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.AddCommandSnippet"></a>

### CondensedPartBase.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.AddComment"></a>

### CondensedPartBase.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.AddFigure"></a>

### CondensedPartBase.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.AddImage"></a>

### CondensedPartBase.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.ClearGeneratedData"></a>

### CondensedPartBase.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.CopyTo"></a>

### CondensedPartBase.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.CreateParameter"></a>

### CondensedPartBase.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Delete"></a>

### CondensedPartBase.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Duplicate"></a>

### CondensedPartBase.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetChildren"></a>

### CondensedPartBase.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetParameter"></a>

### CondensedPartBase.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GroupAllSimilarChildren"></a>

### CondensedPartBase.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GroupSimilarObjects"></a>

### CondensedPartBase.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.PropertyByAPIName"></a>

### CondensedPartBase.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.PropertyByName"></a>

### CondensedPartBase.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.RemoveParameter"></a>

### CondensedPartBase.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

