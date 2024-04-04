# LatticeElementalDensity

### *class* LatticeElementalDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LatticeElementalDensity.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#LatticeElementalDensity.ClearGeneratedData)           | Clears the result.                                                                |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#LatticeElementalDensity.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#LatticeElementalDensity.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`RenameBasedOnDefinition`](#LatticeElementalDensity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#LatticeElementalDensity.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#LatticeElementalDensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#LatticeElementalDensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#LatticeElementalDensity.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#LatticeElementalDensity.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#LatticeElementalDensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#LatticeElementalDensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#LatticeElementalDensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LatticeElementalDensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#LatticeElementalDensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#LatticeElementalDensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#LatticeElementalDensity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#LatticeElementalDensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#LatticeElementalDensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Location`](#LatticeElementalDensity.Location)                                                                        | Gets or sets the Location.                                    |
| [`IterationNumber`](#LatticeElementalDensity.IterationNumber)                                                          | Gets the IterationNumber.                                     |
| [`IterationStep`](#LatticeElementalDensity.IterationStep)                                                              | Gets or sets the IterationStep.                               |
| [`Maximum`](#LatticeElementalDensity.Maximum)                                                                          | Gets the Maximum.                                             |
| [`Minimum`](#LatticeElementalDensity.Minimum)                                                                          | Gets the Minimum.                                             |
| [`PercentMassOfOriginal`](#LatticeElementalDensity.PercentMassOfOriginal)                                              | Gets the PercentMassOfOriginal.                               |
| [`PercentVolumeOfOriginal`](#LatticeElementalDensity.PercentVolumeOfOriginal)                                          | Gets the PercentVolumeOfOriginal.                             |
| [`FinalMass`](#LatticeElementalDensity.FinalMass)                                                                      | Gets the FinalMass.                                           |
| [`FinalVolume`](#LatticeElementalDensity.FinalVolume)                                                                  | Gets the FinalVolume.                                         |
| [`OriginalMass`](#LatticeElementalDensity.OriginalMass)                                                                | Gets the OriginalMass.                                        |
| [`OriginalVolume`](#LatticeElementalDensity.OriginalVolume)                                                            | Gets the OriginalVolume.                                      |
| [`ScopingMethod`](#LatticeElementalDensity.ScopingMethod)                                                              | Gets or sets the ScopingMethod.                               |
| [`ShowOptimizedRegion`](#LatticeElementalDensity.ShowOptimizedRegion)                                                  | Gets or sets the ShowOptimizedRegion.                         |
| [`CalculateTimeHistory`](#LatticeElementalDensity.CalculateTimeHistory)                                                | Gets or sets the CalculateTimeHistory.                        |
| [`ExclusionsParticipation`](#LatticeElementalDensity.ExclusionsParticipation)                                          | Gets or sets the ExclusionsParticipation.                     |
| [`Suppressed`](#LatticeElementalDensity.Suppressed)                                                                    | Gets or sets the Suppressed.                                  |
| [`Selection`](#LatticeElementalDensity.Selection)                                                                      | Gets or sets the Selection.                                   |
| [`Children`](#LatticeElementalDensity.Children)                                                                        | Gets the list of children.                                    |
| [`Comments`](#LatticeElementalDensity.Comments)                                                                        | Gets the list of associated comments.                         |
| [`Figures`](#LatticeElementalDensity.Figures)                                                                          | Gets the list of associated figures.                          |
| [`Images`](#LatticeElementalDensity.Images)                                                                            | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#LatticeElementalDensity.Properties)                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#LatticeElementalDensity.VisibleProperties)                                                      | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results import LatticeElementalDensity
```

## Property detail

### *property* LatticeElementalDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.Maximum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.Minimum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.PercentMassOfOriginal *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PercentMassOfOriginal.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.PercentVolumeOfOriginal *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PercentVolumeOfOriginal.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.FinalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FinalMass.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.FinalVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FinalVolume.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.OriginalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginalMass.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.OriginalVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginalVolume.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.ShowOptimizedRegion *: [Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType](../../../../Mechanical/DataModel/Enums/TopologyOptimizationResultShowType.md#TopologyOptimizationResultShowType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowOptimizedRegion.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.ExclusionsParticipation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionsParticipation.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](../OptimizationRegion.md#OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* LatticeElementalDensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### LatticeElementalDensity.ClearGeneratedData()

Clears the result.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### LatticeElementalDensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
