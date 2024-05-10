# LatticeElementalDensity

<a id="LatticeElementalDensity"></a>

### *class* LatticeElementalDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LatticeElementalDensity.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#LatticeElementalDensity.ClearGeneratedData)           | Clears the result.                                                                |
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

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
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

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results import LatticeElementalDensity
```

<a id="property-detail"></a>

## Property detail

<a id="LatticeElementalDensity.InternalObject"></a>

### *property* LatticeElementalDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.DataModelObjectCategory"></a>

### *property* LatticeElementalDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Location"></a>

### *property* LatticeElementalDensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.IterationNumber"></a>

### *property* LatticeElementalDensity.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.IterationStep"></a>

### *property* LatticeElementalDensity.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Maximum"></a>

### *property* LatticeElementalDensity.Maximum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Minimum"></a>

### *property* LatticeElementalDensity.Minimum *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.PercentMassOfOriginal"></a>

### *property* LatticeElementalDensity.PercentMassOfOriginal *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PercentMassOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.PercentVolumeOfOriginal"></a>

### *property* LatticeElementalDensity.PercentVolumeOfOriginal *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PercentVolumeOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.FinalMass"></a>

### *property* LatticeElementalDensity.FinalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FinalMass.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.FinalVolume"></a>

### *property* LatticeElementalDensity.FinalVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FinalVolume.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.OriginalMass"></a>

### *property* LatticeElementalDensity.OriginalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginalMass.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.OriginalVolume"></a>

### *property* LatticeElementalDensity.OriginalVolume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginalVolume.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.ScopingMethod"></a>

### *property* LatticeElementalDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](./../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.ShowOptimizedRegion"></a>

### *property* LatticeElementalDensity.ShowOptimizedRegion *: [Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType](./../../../../Mechanical/DataModel/Enums/TopologyOptimizationResultShowType.md#TopologyOptimizationResultShowType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowOptimizedRegion.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.CalculateTimeHistory"></a>

### *property* LatticeElementalDensity.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.ExclusionsParticipation"></a>

### *property* LatticeElementalDensity.ExclusionsParticipation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExclusionsParticipation.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Suppressed"></a>

### *property* LatticeElementalDensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Selection"></a>

### *property* LatticeElementalDensity.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](./../OptimizationRegion.md#OptimizationRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Children"></a>

### *property* LatticeElementalDensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Comments"></a>

### *property* LatticeElementalDensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Figures"></a>

### *property* LatticeElementalDensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Images"></a>

### *property* LatticeElementalDensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* LatticeElementalDensity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Properties"></a>

### *property* LatticeElementalDensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.VisibleProperties"></a>

### *property* LatticeElementalDensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LatticeElementalDensity.ClearGeneratedData"></a>

### LatticeElementalDensity.ClearGeneratedData()

Clears the result.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.EvaluateAllResults"></a>

### LatticeElementalDensity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.ExportAnimation"></a>

### LatticeElementalDensity.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.RenameBasedOnDefinition"></a>

### LatticeElementalDensity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Delete"></a>

### LatticeElementalDensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GetChildren"></a>

### LatticeElementalDensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### LatticeElementalDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.AddComment"></a>

### LatticeElementalDensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.AddFigure"></a>

### LatticeElementalDensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.AddImage"></a>

### LatticeElementalDensity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Activate"></a>

### LatticeElementalDensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.CopyTo"></a>

### LatticeElementalDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Duplicate"></a>

### LatticeElementalDensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GroupAllSimilarChildren"></a>

### LatticeElementalDensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GroupSimilarObjects"></a>

### LatticeElementalDensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.PropertyByName"></a>

### LatticeElementalDensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.PropertyByAPIName"></a>

### LatticeElementalDensity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.CreateParameter"></a>

### LatticeElementalDensity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GetParameter"></a>

### LatticeElementalDensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.RemoveParameter"></a>

### LatticeElementalDensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
