# `TopologyOptimizationResult`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.TopologyOptimizationResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TopologyOptimizationResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.ClearGeneratedData)           | Clears the result.                                                                |
| [`EvaluateAllResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`RenameBasedOnDefinition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.Location)                               | Gets or sets the Location.                                    |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#id0)                                                         | Gets the internal object. For advanced usage only.            |
| [`IterationNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.IterationNumber)                 | Gets the IterationNumber.                                     |
| [`IterationStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.IterationStep)                     | Gets or sets the IterationStep.                               |
| [`Maximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.Maximum)                                 | Gets the Maximum.                                             |
| [`Minimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.Minimum)                                 | Gets the Minimum.                                             |
| [`PercentMassOfOriginal`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.PercentMassOfOriginal)     | Gets the PercentMassOfOriginal.                               |
| [`PercentVolumeOfOriginal`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.PercentVolumeOfOriginal) | Gets the PercentVolumeOfOriginal.                             |
| [`FinalMass`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.FinalMass)                             | Gets the FinalMass.                                           |
| [`FinalVolume`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.FinalVolume)                         | Gets the FinalVolume.                                         |
| [`OriginalMass`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.OriginalMass)                       | Gets the OriginalMass.                                        |
| [`OriginalVolume`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.OriginalVolume)                   | Gets the OriginalVolume.                                      |
| [`ScopingMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`ShowOptimizedRegion`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.ShowOptimizedRegion)         | Gets or sets the ShowOptimizedRegion.                         |
| [`CalculateTimeHistory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.CalculateTimeHistory)       | Gets or sets the CalculateTimeHistory.                        |
| [`ExclusionsParticipation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.ExclusionsParticipation) | Gets or sets the ExclusionsParticipation.                     |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Selection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.Selection)                             | Gets or sets the Selection.                                   |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#id0)                                                         | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/TopologyOptimizationResult.md#TopologyOptimizationResult.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TopologyOptimizationResult.Location"></a>

### *property* TopologyOptimizationResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.InternalObject"></a>

### *property* TopologyOptimizationResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.IterationNumber"></a>

### *property* TopologyOptimizationResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.IterationStep"></a>

### *property* TopologyOptimizationResult.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Maximum"></a>

### *property* TopologyOptimizationResult.Maximum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Minimum"></a>

### *property* TopologyOptimizationResult.Minimum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.PercentMassOfOriginal"></a>

### *property* TopologyOptimizationResult.PercentMassOfOriginal *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PercentMassOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.PercentVolumeOfOriginal"></a>

### *property* TopologyOptimizationResult.PercentVolumeOfOriginal *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PercentVolumeOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.FinalMass"></a>

### *property* TopologyOptimizationResult.FinalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FinalMass.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.FinalVolume"></a>

### *property* TopologyOptimizationResult.FinalVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FinalVolume.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.OriginalMass"></a>

### *property* TopologyOptimizationResult.OriginalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginalMass.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.OriginalVolume"></a>

### *property* TopologyOptimizationResult.OriginalVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginalVolume.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.ScopingMethod"></a>

### *property* TopologyOptimizationResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.ShowOptimizedRegion"></a>

### *property* TopologyOptimizationResult.ShowOptimizedRegion *: [Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType](../../../../Mechanical/DataModel/Enums/TopologyOptimizationResultShowType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowOptimizedRegion.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.CalculateTimeHistory"></a>

### *property* TopologyOptimizationResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.ExclusionsParticipation"></a>

### *property* TopologyOptimizationResult.ExclusionsParticipation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionsParticipation.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Suppressed"></a>

### *property* TopologyOptimizationResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Selection"></a>

### *property* TopologyOptimizationResult.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](../OptimizationRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.DataModelObjectCategory"></a>

### *property* TopologyOptimizationResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Children"></a>

### *property* TopologyOptimizationResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Comments"></a>

### *property* TopologyOptimizationResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Figures"></a>

### *property* TopologyOptimizationResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Images"></a>

### *property* TopologyOptimizationResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* TopologyOptimizationResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Properties"></a>

### *property* TopologyOptimizationResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.VisibleProperties"></a>

### *property* TopologyOptimizationResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TopologyOptimizationResult.ClearGeneratedData"></a>

### TopologyOptimizationResult.ClearGeneratedData()

Clears the result.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.EvaluateAllResults"></a>

### TopologyOptimizationResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.ExportAnimation"></a>

### TopologyOptimizationResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.RenameBasedOnDefinition"></a>

### TopologyOptimizationResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Delete"></a>

### TopologyOptimizationResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GetChildren"></a>

### TopologyOptimizationResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### TopologyOptimizationResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.AddComment"></a>

### TopologyOptimizationResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.AddFigure"></a>

### TopologyOptimizationResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.AddImage"></a>

### TopologyOptimizationResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Activate"></a>

### TopologyOptimizationResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.CopyTo"></a>

### TopologyOptimizationResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Duplicate"></a>

### TopologyOptimizationResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GroupAllSimilarChildren"></a>

### TopologyOptimizationResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GroupSimilarObjects"></a>

### TopologyOptimizationResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.PropertyByName"></a>

### TopologyOptimizationResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.PropertyByAPIName"></a>

### TopologyOptimizationResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.CreateParameter"></a>

### TopologyOptimizationResult.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GetParameter"></a>

### TopologyOptimizationResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.RemoveParameter"></a>

### TopologyOptimizationResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

