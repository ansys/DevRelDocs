# TopologyDensity

### *class* TopologyDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TopologyDensity.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddSmoothing`](#TopologyDensity.AddSmoothing)                       | Creates a new Smoothing                                                           |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`InsertSmoothing`](#TopologyDensity.InsertSmoothing)                 | Run the InsertSmoothing action.                                                   |
| [`ClearGeneratedData`](#TopologyDensity.ClearGeneratedData)           | Clears the result.                                                                |
| [`EvaluateAllResults`](#TopologyDensity.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#TopologyDensity.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`RenameBasedOnDefinition`](#TopologyDensity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#TopologyDensity.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#TopologyDensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#TopologyDensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TopologyDensity.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#TopologyDensity.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#TopologyDensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#TopologyDensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#TopologyDensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TopologyDensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#TopologyDensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#TopologyDensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#TopologyDensity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#TopologyDensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#TopologyDensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`RetainedThreshold`](#TopologyDensity.RetainedThreshold)                                                              | Gets or sets the RetainedThreshold.                           |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Location`](#TopologyDensity.Location)                                                                                | Gets or sets the Location.                                    |
| [`IterationNumber`](#TopologyDensity.IterationNumber)                                                                  | Gets the IterationNumber.                                     |
| [`IterationStep`](#TopologyDensity.IterationStep)                                                                      | Gets or sets the IterationStep.                               |
| [`Maximum`](#TopologyDensity.Maximum)                                                                                  | Gets the Maximum.                                             |
| [`Minimum`](#TopologyDensity.Minimum)                                                                                  | Gets the Minimum.                                             |
| [`PercentMassOfOriginal`](#TopologyDensity.PercentMassOfOriginal)                                                      | Gets the PercentMassOfOriginal.                               |
| [`PercentVolumeOfOriginal`](#TopologyDensity.PercentVolumeOfOriginal)                                                  | Gets the PercentVolumeOfOriginal.                             |
| [`FinalMass`](#TopologyDensity.FinalMass)                                                                              | Gets the FinalMass.                                           |
| [`FinalVolume`](#TopologyDensity.FinalVolume)                                                                          | Gets the FinalVolume.                                         |
| [`OriginalMass`](#TopologyDensity.OriginalMass)                                                                        | Gets the OriginalMass.                                        |
| [`OriginalVolume`](#TopologyDensity.OriginalVolume)                                                                    | Gets the OriginalVolume.                                      |
| [`ScopingMethod`](#TopologyDensity.ScopingMethod)                                                                      | Gets or sets the ScopingMethod.                               |
| [`ShowOptimizedRegion`](#TopologyDensity.ShowOptimizedRegion)                                                          | Gets or sets the ShowOptimizedRegion.                         |
| [`CalculateTimeHistory`](#TopologyDensity.CalculateTimeHistory)                                                        | Gets or sets the CalculateTimeHistory.                        |
| [`ExclusionsParticipation`](#TopologyDensity.ExclusionsParticipation)                                                  | Gets or sets the ExclusionsParticipation.                     |
| [`Suppressed`](#TopologyDensity.Suppressed)                                                                            | Gets or sets the Suppressed.                                  |
| [`Selection`](#TopologyDensity.Selection)                                                                              | Gets or sets the Selection.                                   |
| [`Children`](#TopologyDensity.Children)                                                                                | Gets the list of children.                                    |
| [`Comments`](#TopologyDensity.Comments)                                                                                | Gets the list of associated comments.                         |
| [`Figures`](#TopologyDensity.Figures)                                                                                  | Gets the list of associated figures.                          |
| [`Images`](#TopologyDensity.Images)                                                                                    | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#TopologyDensity.Properties)                                                                            | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#TopologyDensity.VisibleProperties)                                                              | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results import TopologyDensity
```

## Property detail

### *property* TopologyDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.RetainedThreshold *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RetainedThreshold.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.Maximum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.Minimum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.PercentMassOfOriginal *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PercentMassOfOriginal.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.PercentVolumeOfOriginal *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PercentVolumeOfOriginal.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.FinalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FinalMass.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.FinalVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FinalVolume.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.OriginalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginalMass.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.OriginalVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginalVolume.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.ShowOptimizedRegion *: [Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType](../../../../Mechanical/DataModel/Enums/TopologyOptimizationResultShowType.md#TopologyOptimizationResultShowType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowOptimizedRegion.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.ExclusionsParticipation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionsParticipation.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](../OptimizationRegion.md#OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* TopologyDensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### TopologyDensity.AddSmoothing()

Creates a new Smoothing

<!-- !! processed by numpydoc !! -->

### TopologyDensity.InsertSmoothing()

Run the InsertSmoothing action.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.ClearGeneratedData()

Clears the result.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### TopologyDensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
