# TopologyOptimizationResult

### *class* TopologyOptimizationResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TopologyOptimizationResult.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#TopologyOptimizationResult.ClearGeneratedData)           | Clears the result.                                                                |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#TopologyOptimizationResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#TopologyOptimizationResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`RenameBasedOnDefinition`](#TopologyOptimizationResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#TopologyOptimizationResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#TopologyOptimizationResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#TopologyOptimizationResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TopologyOptimizationResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#TopologyOptimizationResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#TopologyOptimizationResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#TopologyOptimizationResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#TopologyOptimizationResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TopologyOptimizationResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#TopologyOptimizationResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#TopologyOptimizationResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#TopologyOptimizationResult.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#TopologyOptimizationResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#TopologyOptimizationResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Location`](#TopologyOptimizationResult.Location)                                                                     | Gets or sets the Location.                                    |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`IterationNumber`](#TopologyOptimizationResult.IterationNumber)                                                       | Gets the IterationNumber.                                     |
| [`IterationStep`](#TopologyOptimizationResult.IterationStep)                                                           | Gets or sets the IterationStep.                               |
| [`Maximum`](#TopologyOptimizationResult.Maximum)                                                                       | Gets the Maximum.                                             |
| [`Minimum`](#TopologyOptimizationResult.Minimum)                                                                       | Gets the Minimum.                                             |
| [`PercentMassOfOriginal`](#TopologyOptimizationResult.PercentMassOfOriginal)                                           | Gets the PercentMassOfOriginal.                               |
| [`PercentVolumeOfOriginal`](#TopologyOptimizationResult.PercentVolumeOfOriginal)                                       | Gets the PercentVolumeOfOriginal.                             |
| [`FinalMass`](#TopologyOptimizationResult.FinalMass)                                                                   | Gets the FinalMass.                                           |
| [`FinalVolume`](#TopologyOptimizationResult.FinalVolume)                                                               | Gets the FinalVolume.                                         |
| [`OriginalMass`](#TopologyOptimizationResult.OriginalMass)                                                             | Gets the OriginalMass.                                        |
| [`OriginalVolume`](#TopologyOptimizationResult.OriginalVolume)                                                         | Gets the OriginalVolume.                                      |
| [`ScopingMethod`](#TopologyOptimizationResult.ScopingMethod)                                                           | Gets or sets the ScopingMethod.                               |
| [`ShowOptimizedRegion`](#TopologyOptimizationResult.ShowOptimizedRegion)                                               | Gets or sets the ShowOptimizedRegion.                         |
| [`CalculateTimeHistory`](#TopologyOptimizationResult.CalculateTimeHistory)                                             | Gets or sets the CalculateTimeHistory.                        |
| [`ExclusionsParticipation`](#TopologyOptimizationResult.ExclusionsParticipation)                                       | Gets or sets the ExclusionsParticipation.                     |
| [`Suppressed`](#TopologyOptimizationResult.Suppressed)                                                                 | Gets or sets the Suppressed.                                  |
| [`Selection`](#TopologyOptimizationResult.Selection)                                                                   | Gets or sets the Selection.                                   |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#TopologyOptimizationResult.Children)                                                                     | Gets the list of children.                                    |
| [`Comments`](#TopologyOptimizationResult.Comments)                                                                     | Gets the list of associated comments.                         |
| [`Figures`](#TopologyOptimizationResult.Figures)                                                                       | Gets the list of associated figures.                          |
| [`Images`](#TopologyOptimizationResult.Images)                                                                         | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#TopologyOptimizationResult.Properties)                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#TopologyOptimizationResult.VisibleProperties)                                                   | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results import TopologyOptimizationResult
```

## Property detail

### *property* TopologyOptimizationResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.Maximum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.Minimum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.PercentMassOfOriginal *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PercentMassOfOriginal.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.PercentVolumeOfOriginal *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PercentVolumeOfOriginal.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.FinalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FinalMass.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.FinalVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FinalVolume.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.OriginalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginalMass.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.OriginalVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginalVolume.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.ShowOptimizedRegion *: [Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType](../../../../Mechanical/DataModel/Enums/TopologyOptimizationResultShowType.md#TopologyOptimizationResultShowType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowOptimizedRegion.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.ExclusionsParticipation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionsParticipation.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](../OptimizationRegion.md#OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* TopologyOptimizationResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### TopologyOptimizationResult.ClearGeneratedData()

Clears the result.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### TopologyOptimizationResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
