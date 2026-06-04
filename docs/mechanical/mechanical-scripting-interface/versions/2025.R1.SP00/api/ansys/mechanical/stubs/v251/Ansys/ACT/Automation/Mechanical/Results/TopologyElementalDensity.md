# `TopologyElementalDensity`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.TopologyElementalDensity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.TopologyElementalDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TopologyElementalDensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#TopologyElementalDensity.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#TopologyElementalDensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#TopologyElementalDensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TopologyElementalDensity.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#TopologyElementalDensity.ClearGeneratedData)           | Clears the result.                                                                |
| [`CopyTo`](#TopologyElementalDensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#TopologyElementalDensity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#TopologyElementalDensity.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#TopologyElementalDensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#TopologyElementalDensity.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#TopologyElementalDensity.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#TopologyElementalDensity.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#TopologyElementalDensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#TopologyElementalDensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TopologyElementalDensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#TopologyElementalDensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#TopologyElementalDensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#TopologyElementalDensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#TopologyElementalDensity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`CalculateTimeHistory`](#TopologyElementalDensity.CalculateTimeHistory)       | Gets or sets the CalculateTimeHistory.                        |
| [`Children`](#TopologyElementalDensity.Children)                               | Gets the list of children.                                    |
| [`Comments`](#TopologyElementalDensity.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#TopologyElementalDensity.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ExclusionsParticipation`](#TopologyElementalDensity.ExclusionsParticipation) | Gets or sets the ExclusionsParticipation.                     |
| [`Figures`](#TopologyElementalDensity.Figures)                                 | Gets the list of associated figures.                          |
| [`FinalMass`](#TopologyElementalDensity.FinalMass)                             | Gets the FinalMass.                                           |
| [`FinalVolume`](#TopologyElementalDensity.FinalVolume)                         | Gets the FinalVolume.                                         |
| [`Images`](#TopologyElementalDensity.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#TopologyElementalDensity.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`IterationNumber`](#TopologyElementalDensity.IterationNumber)                 | Gets the IterationNumber.                                     |
| [`IterationStep`](#TopologyElementalDensity.IterationStep)                     | Gets or sets the IterationStep.                               |
| [`Location`](#TopologyElementalDensity.Location)                               | Gets or sets the Location.                                    |
| [`Maximum`](#TopologyElementalDensity.Maximum)                                 | Gets the Maximum.                                             |
| [`Minimum`](#TopologyElementalDensity.Minimum)                                 | Gets the Minimum.                                             |
| [`OriginalMass`](#TopologyElementalDensity.OriginalMass)                       | Gets the OriginalMass.                                        |
| [`OriginalVolume`](#TopologyElementalDensity.OriginalVolume)                   | Gets the OriginalVolume.                                      |
| [`PercentMassOfOriginal`](#TopologyElementalDensity.PercentMassOfOriginal)     | Gets the PercentMassOfOriginal.                               |
| [`PercentVolumeOfOriginal`](#TopologyElementalDensity.PercentVolumeOfOriginal) | Gets the PercentVolumeOfOriginal.                             |
| [`Properties`](#TopologyElementalDensity.Properties)                           | Gets the list of properties for this object.                  |
| [`RetainedThreshold`](#TopologyElementalDensity.RetainedThreshold)             | Gets or sets the RetainedThreshold.                           |
| [`ScopingMethod`](#TopologyElementalDensity.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Selection`](#TopologyElementalDensity.Selection)                             | Gets or sets the Selection.                                   |
| [`ShowOptimizedRegion`](#TopologyElementalDensity.ShowOptimizedRegion)         | Gets or sets the ShowOptimizedRegion.                         |
| [`Suppressed`](#TopologyElementalDensity.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#TopologyElementalDensity.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TopologyElementalDensity.CalculateTimeHistory"></a>

### *property* TopologyElementalDensity.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Children"></a>

### *property* TopologyElementalDensity.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Comments"></a>

### *property* TopologyElementalDensity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.DataModelObjectCategory"></a>

### *property* TopologyElementalDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.ExclusionsParticipation"></a>

### *property* TopologyElementalDensity.ExclusionsParticipation *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionsParticipation.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Figures"></a>

### *property* TopologyElementalDensity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.FinalMass"></a>

### *property* TopologyElementalDensity.FinalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FinalMass.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.FinalVolume"></a>

### *property* TopologyElementalDensity.FinalVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FinalVolume.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Images"></a>

### *property* TopologyElementalDensity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.InternalObject"></a>

### *property* TopologyElementalDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.IterationNumber"></a>

### *property* TopologyElementalDensity.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.IterationStep"></a>

### *property* TopologyElementalDensity.IterationStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Location"></a>

### *property* TopologyElementalDensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Maximum"></a>

### *property* TopologyElementalDensity.Maximum *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Minimum"></a>

### *property* TopologyElementalDensity.Minimum *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.OriginalMass"></a>

### *property* TopologyElementalDensity.OriginalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginalMass.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.OriginalVolume"></a>

### *property* TopologyElementalDensity.OriginalVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginalVolume.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.PercentMassOfOriginal"></a>

### *property* TopologyElementalDensity.PercentMassOfOriginal *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PercentMassOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.PercentVolumeOfOriginal"></a>

### *property* TopologyElementalDensity.PercentVolumeOfOriginal *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PercentVolumeOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Properties"></a>

### *property* TopologyElementalDensity.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.RetainedThreshold"></a>

### *property* TopologyElementalDensity.RetainedThreshold *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RetainedThreshold.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.ScopingMethod"></a>

### *property* TopologyElementalDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Selection"></a>

### *property* TopologyElementalDensity.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](../OptimizationRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.ShowOptimizedRegion"></a>

### *property* TopologyElementalDensity.ShowOptimizedRegion *: [Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType](../../../../Mechanical/DataModel/Enums/TopologyOptimizationResultShowType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowOptimizedRegion.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Suppressed"></a>

### *property* TopologyElementalDensity.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.VisibleProperties"></a>

### *property* TopologyElementalDensity.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TopologyElementalDensity.Activate"></a>

### TopologyElementalDensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.AddComment"></a>

### TopologyElementalDensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.AddFigure"></a>

### TopologyElementalDensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.AddImage"></a>

### TopologyElementalDensity.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.ClearGeneratedData"></a>

### TopologyElementalDensity.ClearGeneratedData()

Clears the result.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.CopyTo"></a>

### TopologyElementalDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.CreateParameter"></a>

### TopologyElementalDensity.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Delete"></a>

### TopologyElementalDensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Duplicate"></a>

### TopologyElementalDensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.EvaluateAllResults"></a>

### TopologyElementalDensity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.ExportAnimation"></a>

### TopologyElementalDensity.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GetChildren"></a>

### TopologyElementalDensity.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GetParameter"></a>

### TopologyElementalDensity.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GroupAllSimilarChildren"></a>

### TopologyElementalDensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GroupSimilarObjects"></a>

### TopologyElementalDensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.PropertyByAPIName"></a>

### TopologyElementalDensity.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.PropertyByName"></a>

### TopologyElementalDensity.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.RemoveParameter"></a>

### TopologyElementalDensity.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.RenameBasedOnDefinition"></a>

### TopologyElementalDensity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

