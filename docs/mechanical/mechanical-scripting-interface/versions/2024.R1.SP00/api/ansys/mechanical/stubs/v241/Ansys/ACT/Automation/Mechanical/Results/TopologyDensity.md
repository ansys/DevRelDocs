# `TopologyDensity`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.TopologyDensity"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.TopologyDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TopologyDensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddSmoothing`](#TopologyDensity.AddSmoothing)                       | Creates a new Smoothing                                                           |
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

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`RetainedThreshold`](#TopologyDensity.RetainedThreshold)             | Gets or sets the RetainedThreshold.                           |
| [`DataModelObjectCategory`](#TopologyDensity.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Location`](#TopologyDensity.Location)                               | Gets or sets the Location.                                    |
| [`IterationNumber`](#TopologyDensity.IterationNumber)                 | Gets the IterationNumber.                                     |
| [`IterationStep`](#TopologyDensity.IterationStep)                     | Gets or sets the IterationStep.                               |
| [`Maximum`](#TopologyDensity.Maximum)                                 | Gets the Maximum.                                             |
| [`Minimum`](#TopologyDensity.Minimum)                                 | Gets the Minimum.                                             |
| [`PercentMassOfOriginal`](#TopologyDensity.PercentMassOfOriginal)     | Gets the PercentMassOfOriginal.                               |
| [`PercentVolumeOfOriginal`](#TopologyDensity.PercentVolumeOfOriginal) | Gets the PercentVolumeOfOriginal.                             |
| [`FinalMass`](#TopologyDensity.FinalMass)                             | Gets the FinalMass.                                           |
| [`FinalVolume`](#TopologyDensity.FinalVolume)                         | Gets the FinalVolume.                                         |
| [`OriginalMass`](#TopologyDensity.OriginalMass)                       | Gets the OriginalMass.                                        |
| [`OriginalVolume`](#TopologyDensity.OriginalVolume)                   | Gets the OriginalVolume.                                      |
| [`ScopingMethod`](#TopologyDensity.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`ShowOptimizedRegion`](#TopologyDensity.ShowOptimizedRegion)         | Gets or sets the ShowOptimizedRegion.                         |
| [`CalculateTimeHistory`](#TopologyDensity.CalculateTimeHistory)       | Gets or sets the CalculateTimeHistory.                        |
| [`ExclusionsParticipation`](#TopologyDensity.ExclusionsParticipation) | Gets or sets the ExclusionsParticipation.                     |
| [`Suppressed`](#TopologyDensity.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Selection`](#TopologyDensity.Selection)                             | Gets or sets the Selection.                                   |
| [`Children`](#TopologyDensity.Children)                               | Gets the list of children.                                    |
| [`Comments`](#TopologyDensity.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#TopologyDensity.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#TopologyDensity.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`Properties`](#TopologyDensity.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#TopologyDensity.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TopologyDensity.InternalObject"></a>

### *property* TopologyDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.RetainedThreshold"></a>

### *property* TopologyDensity.RetainedThreshold *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RetainedThreshold.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.DataModelObjectCategory"></a>

### *property* TopologyDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Location"></a>

### *property* TopologyDensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.IterationNumber"></a>

### *property* TopologyDensity.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.IterationStep"></a>

### *property* TopologyDensity.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Maximum"></a>

### *property* TopologyDensity.Maximum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Minimum"></a>

### *property* TopologyDensity.Minimum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.PercentMassOfOriginal"></a>

### *property* TopologyDensity.PercentMassOfOriginal *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PercentMassOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.PercentVolumeOfOriginal"></a>

### *property* TopologyDensity.PercentVolumeOfOriginal *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PercentVolumeOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.FinalMass"></a>

### *property* TopologyDensity.FinalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FinalMass.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.FinalVolume"></a>

### *property* TopologyDensity.FinalVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FinalVolume.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.OriginalMass"></a>

### *property* TopologyDensity.OriginalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginalMass.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.OriginalVolume"></a>

### *property* TopologyDensity.OriginalVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginalVolume.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.ScopingMethod"></a>

### *property* TopologyDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.ShowOptimizedRegion"></a>

### *property* TopologyDensity.ShowOptimizedRegion *: [Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType](../../../../Mechanical/DataModel/Enums/TopologyOptimizationResultShowType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowOptimizedRegion.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.CalculateTimeHistory"></a>

### *property* TopologyDensity.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.ExclusionsParticipation"></a>

### *property* TopologyDensity.ExclusionsParticipation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionsParticipation.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Suppressed"></a>

### *property* TopologyDensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Selection"></a>

### *property* TopologyDensity.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](../OptimizationRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Children"></a>

### *property* TopologyDensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Comments"></a>

### *property* TopologyDensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Figures"></a>

### *property* TopologyDensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Images"></a>

### *property* TopologyDensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* TopologyDensity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Properties"></a>

### *property* TopologyDensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.VisibleProperties"></a>

### *property* TopologyDensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TopologyDensity.AddSmoothing"></a>

### TopologyDensity.AddSmoothing()

Creates a new Smoothing

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.InsertSmoothing"></a>

### TopologyDensity.InsertSmoothing()

Run the InsertSmoothing action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.ClearGeneratedData"></a>

### TopologyDensity.ClearGeneratedData()

Clears the result.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.EvaluateAllResults"></a>

### TopologyDensity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.ExportAnimation"></a>

### TopologyDensity.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.RenameBasedOnDefinition"></a>

### TopologyDensity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Delete"></a>

### TopologyDensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GetChildren"></a>

### TopologyDensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### TopologyDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.AddComment"></a>

### TopologyDensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.AddFigure"></a>

### TopologyDensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.AddImage"></a>

### TopologyDensity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Activate"></a>

### TopologyDensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.CopyTo"></a>

### TopologyDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Duplicate"></a>

### TopologyDensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GroupAllSimilarChildren"></a>

### TopologyDensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GroupSimilarObjects"></a>

### TopologyDensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.PropertyByName"></a>

### TopologyDensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.PropertyByAPIName"></a>

### TopologyDensity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.CreateParameter"></a>

### TopologyDensity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GetParameter"></a>

### TopologyDensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.RemoveParameter"></a>

### TopologyDensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

