# `LatticeDensity`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.LatticeDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a LatticeDensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#LatticeDensity.ClearGeneratedData)           | Clears the result.                                                                |
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

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#LatticeDensity.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Location`](#LatticeDensity.Location)                               | Gets or sets the Location.                                    |
| [`IterationNumber`](#LatticeDensity.IterationNumber)                 | Gets the IterationNumber.                                     |
| [`IterationStep`](#LatticeDensity.IterationStep)                     | Gets or sets the IterationStep.                               |
| [`Maximum`](#LatticeDensity.Maximum)                                 | Gets the Maximum.                                             |
| [`Minimum`](#LatticeDensity.Minimum)                                 | Gets the Minimum.                                             |
| [`PercentMassOfOriginal`](#LatticeDensity.PercentMassOfOriginal)     | Gets the PercentMassOfOriginal.                               |
| [`PercentVolumeOfOriginal`](#LatticeDensity.PercentVolumeOfOriginal) | Gets the PercentVolumeOfOriginal.                             |
| [`FinalMass`](#LatticeDensity.FinalMass)                             | Gets the FinalMass.                                           |
| [`FinalVolume`](#LatticeDensity.FinalVolume)                         | Gets the FinalVolume.                                         |
| [`OriginalMass`](#LatticeDensity.OriginalMass)                       | Gets the OriginalMass.                                        |
| [`OriginalVolume`](#LatticeDensity.OriginalVolume)                   | Gets the OriginalVolume.                                      |
| [`ScopingMethod`](#LatticeDensity.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`ShowOptimizedRegion`](#LatticeDensity.ShowOptimizedRegion)         | Gets or sets the ShowOptimizedRegion.                         |
| [`CalculateTimeHistory`](#LatticeDensity.CalculateTimeHistory)       | Gets or sets the CalculateTimeHistory.                        |
| [`ExclusionsParticipation`](#LatticeDensity.ExclusionsParticipation) | Gets or sets the ExclusionsParticipation.                     |
| [`Suppressed`](#LatticeDensity.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Selection`](#LatticeDensity.Selection)                             | Gets or sets the Selection.                                   |
| [`Children`](#LatticeDensity.Children)                               | Gets the list of children.                                    |
| [`Comments`](#LatticeDensity.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#LatticeDensity.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#LatticeDensity.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#LatticeDensity.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#LatticeDensity.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="LatticeDensity.InternalObject"></a>

### *property* LatticeDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.DataModelObjectCategory"></a>

### *property* LatticeDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Location"></a>

### *property* LatticeDensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.IterationNumber"></a>

### *property* LatticeDensity.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.IterationStep"></a>

### *property* LatticeDensity.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Maximum"></a>

### *property* LatticeDensity.Maximum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Minimum"></a>

### *property* LatticeDensity.Minimum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.PercentMassOfOriginal"></a>

### *property* LatticeDensity.PercentMassOfOriginal *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PercentMassOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.PercentVolumeOfOriginal"></a>

### *property* LatticeDensity.PercentVolumeOfOriginal *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PercentVolumeOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.FinalMass"></a>

### *property* LatticeDensity.FinalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FinalMass.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.FinalVolume"></a>

### *property* LatticeDensity.FinalVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FinalVolume.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.OriginalMass"></a>

### *property* LatticeDensity.OriginalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginalMass.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.OriginalVolume"></a>

### *property* LatticeDensity.OriginalVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginalVolume.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.ScopingMethod"></a>

### *property* LatticeDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.ShowOptimizedRegion"></a>

### *property* LatticeDensity.ShowOptimizedRegion *: [Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TopologyOptimizationResultShowType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowOptimizedRegion.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.CalculateTimeHistory"></a>

### *property* LatticeDensity.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.ExclusionsParticipation"></a>

### *property* LatticeDensity.ExclusionsParticipation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionsParticipation.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Suppressed"></a>

### *property* LatticeDensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Selection"></a>

### *property* LatticeDensity.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](../../../../../../v241/Ansys/ACT/Automation/Mechanical/OptimizationRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Children"></a>

### *property* LatticeDensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Comments"></a>

### *property* LatticeDensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Figures"></a>

### *property* LatticeDensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Images"></a>

### *property* LatticeDensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* LatticeDensity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Properties"></a>

### *property* LatticeDensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.VisibleProperties"></a>

### *property* LatticeDensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LatticeDensity.ClearGeneratedData"></a>

### LatticeDensity.ClearGeneratedData()

Clears the result.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.EvaluateAllResults"></a>

### LatticeDensity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.ExportAnimation"></a>

### LatticeDensity.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.RenameBasedOnDefinition"></a>

### LatticeDensity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Delete"></a>

### LatticeDensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GetChildren"></a>

### LatticeDensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### LatticeDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.AddComment"></a>

### LatticeDensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.AddFigure"></a>

### LatticeDensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.AddImage"></a>

### LatticeDensity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Activate"></a>

### LatticeDensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.CopyTo"></a>

### LatticeDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Duplicate"></a>

### LatticeDensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GroupAllSimilarChildren"></a>

### LatticeDensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GroupSimilarObjects"></a>

### LatticeDensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.PropertyByName"></a>

### LatticeDensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.PropertyByAPIName"></a>

### LatticeDensity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.CreateParameter"></a>

### LatticeDensity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GetParameter"></a>

### LatticeDensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.RemoveParameter"></a>

### LatticeDensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

