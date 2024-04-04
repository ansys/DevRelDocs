# LatticeDensity

### *class* LatticeDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LatticeDensity.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#LatticeDensity.ClearGeneratedData)           | Clears the result.                                                                |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#LatticeDensity.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#LatticeDensity.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`RenameBasedOnDefinition`](#LatticeDensity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#LatticeDensity.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#LatticeDensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#LatticeDensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#LatticeDensity.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#LatticeDensity.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#LatticeDensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#LatticeDensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#LatticeDensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LatticeDensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#LatticeDensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#LatticeDensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#LatticeDensity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#LatticeDensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#LatticeDensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Location`](#LatticeDensity.Location)                                                                                 | Gets or sets the Location.                                    |
| [`IterationNumber`](#LatticeDensity.IterationNumber)                                                                   | Gets the IterationNumber.                                     |
| [`IterationStep`](#LatticeDensity.IterationStep)                                                                       | Gets or sets the IterationStep.                               |
| [`Maximum`](#LatticeDensity.Maximum)                                                                                   | Gets the Maximum.                                             |
| [`Minimum`](#LatticeDensity.Minimum)                                                                                   | Gets the Minimum.                                             |
| [`PercentMassOfOriginal`](#LatticeDensity.PercentMassOfOriginal)                                                       | Gets the PercentMassOfOriginal.                               |
| [`PercentVolumeOfOriginal`](#LatticeDensity.PercentVolumeOfOriginal)                                                   | Gets the PercentVolumeOfOriginal.                             |
| [`FinalMass`](#LatticeDensity.FinalMass)                                                                               | Gets the FinalMass.                                           |
| [`FinalVolume`](#LatticeDensity.FinalVolume)                                                                           | Gets the FinalVolume.                                         |
| [`OriginalMass`](#LatticeDensity.OriginalMass)                                                                         | Gets the OriginalMass.                                        |
| [`OriginalVolume`](#LatticeDensity.OriginalVolume)                                                                     | Gets the OriginalVolume.                                      |
| [`ScopingMethod`](#LatticeDensity.ScopingMethod)                                                                       | Gets or sets the ScopingMethod.                               |
| [`ShowOptimizedRegion`](#LatticeDensity.ShowOptimizedRegion)                                                           | Gets or sets the ShowOptimizedRegion.                         |
| [`CalculateTimeHistory`](#LatticeDensity.CalculateTimeHistory)                                                         | Gets or sets the CalculateTimeHistory.                        |
| [`ExclusionsParticipation`](#LatticeDensity.ExclusionsParticipation)                                                   | Gets or sets the ExclusionsParticipation.                     |
| [`Suppressed`](#LatticeDensity.Suppressed)                                                                             | Gets or sets the Suppressed.                                  |
| [`Selection`](#LatticeDensity.Selection)                                                                               | Gets or sets the Selection.                                   |
| [`Children`](#LatticeDensity.Children)                                                                                 | Gets the list of children.                                    |
| [`Comments`](#LatticeDensity.Comments)                                                                                 | Gets the list of associated comments.                         |
| [`Figures`](#LatticeDensity.Figures)                                                                                   | Gets the list of associated figures.                          |
| [`Images`](#LatticeDensity.Images)                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#LatticeDensity.Properties)                                                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#LatticeDensity.VisibleProperties)                                                               | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results import LatticeDensity
```

## Property detail

### *property* LatticeDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.Maximum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.Minimum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.PercentMassOfOriginal *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PercentMassOfOriginal.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.PercentVolumeOfOriginal *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PercentVolumeOfOriginal.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.FinalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FinalMass.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.FinalVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FinalVolume.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.OriginalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginalMass.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.OriginalVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginalVolume.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.ShowOptimizedRegion *: [Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType](../../../../Mechanical/DataModel/Enums/TopologyOptimizationResultShowType.md#TopologyOptimizationResultShowType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowOptimizedRegion.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.ExclusionsParticipation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionsParticipation.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](../OptimizationRegion.md#OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* LatticeDensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### LatticeDensity.ClearGeneratedData()

Clears the result.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### LatticeDensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
