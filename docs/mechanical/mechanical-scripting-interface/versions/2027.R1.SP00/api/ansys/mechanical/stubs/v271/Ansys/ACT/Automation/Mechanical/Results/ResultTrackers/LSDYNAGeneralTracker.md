# `LSDYNAGeneralTracker`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.LSDYNAGeneralTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.LSDYNAGeneralTracker(internalObject: Any)

<a id="LSDYNAGeneralTracker"></a>

### *class* LSDYNAGeneralTracker(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a LSDYNAGeneralTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------|
| [`ConvertToUserLoadFromId`](#LSDYNAGeneralTracker.ConvertToUserLoadFromId)   | ConvertToUserLoadFromId method.   |

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#LSDYNAGeneralTracker.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#LSDYNAGeneralTracker.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#LSDYNAGeneralTracker.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#LSDYNAGeneralTracker.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#LSDYNAGeneralTracker.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#LSDYNAGeneralTracker.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#LSDYNAGeneralTracker.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#LSDYNAGeneralTracker.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#LSDYNAGeneralTracker.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#LSDYNAGeneralTracker.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#LSDYNAGeneralTracker.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#LSDYNAGeneralTracker.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#LSDYNAGeneralTracker.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#LSDYNAGeneralTracker.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#LSDYNAGeneralTracker.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#LSDYNAGeneralTracker.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetBranches`](#LSDYNAGeneralTracker.GetBranches)                             | GetBranches method.                                                                         |
| [`GetChildren`](#LSDYNAGeneralTracker.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetComponents`](#LSDYNAGeneralTracker.GetComponents)                         | GetComponents method.                                                                       |
| [`GetDetailsView`](#LSDYNAGeneralTracker.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#LSDYNAGeneralTracker.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#LSDYNAGeneralTracker.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#LSDYNAGeneralTracker.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#LSDYNAGeneralTracker.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#LSDYNAGeneralTracker.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#LSDYNAGeneralTracker.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#LSDYNAGeneralTracker.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#LSDYNAGeneralTracker.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#LSDYNAGeneralTracker.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#LSDYNAGeneralTracker.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#LSDYNAGeneralTracker.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetSubBranches`](#LSDYNAGeneralTracker.GetSubBranches)                       | GetSubBranches method.                                                                      |
| [`GetVisibleProperties`](#LSDYNAGeneralTracker.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#LSDYNAGeneralTracker.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#LSDYNAGeneralTracker.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#LSDYNAGeneralTracker.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#LSDYNAGeneralTracker.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#LSDYNAGeneralTracker.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#LSDYNAGeneralTracker.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#LSDYNAGeneralTracker.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#LSDYNAGeneralTracker.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#LSDYNAGeneralTracker.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#LSDYNAGeneralTracker.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#LSDYNAGeneralTracker.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#LSDYNAGeneralTracker.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#LSDYNAGeneralTracker.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`ACTLoad`](#LSDYNAGeneralTracker.ACTLoad)                                         | Gets or sets the ACT Load.                                                                         |
| [`AccelerationType`](#LSDYNAGeneralTracker.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#LSDYNAGeneralTracker.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#LSDYNAGeneralTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#LSDYNAGeneralTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#LSDYNAGeneralTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#LSDYNAGeneralTracker.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#LSDYNAGeneralTracker.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#LSDYNAGeneralTracker.Comments)                                       | Gets the list of associated comments.                                                              |
| [`ContactRegion`](#ContactRegion)                | Gets or sets the ContactRegion.                                                                    |
| [`ContactSide`](#LSDYNAGeneralTracker.ContactSide)                                 | Gets or sets the ContactSide.                                                                      |
| [`CoordinateSystem`](#CoordinateSystem)                   | Gets or sets the CoordinateSystem.                                                                 |
| [`CurvesAppearanceDisplay`](#LSDYNAGeneralTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#LSDYNAGeneralTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#LSDYNAGeneralTracker.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#LSDYNAGeneralTracker.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#LSDYNAGeneralTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#LSDYNAGeneralTracker.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#LSDYNAGeneralTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#LSDYNAGeneralTracker.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#LSDYNAGeneralTracker.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#LSDYNAGeneralTracker.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#LSDYNAGeneralTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#LSDYNAGeneralTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#LSDYNAGeneralTracker.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#LSDYNAGeneralTracker.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#LSDYNAGeneralTracker.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#LSDYNAGeneralTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#LSDYNAGeneralTracker.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#LSDYNAGeneralTracker.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`Joint`](#Joint)                                        | Gets or sets the Joint.                                                                            |
| [`LSDYNABranchName`](#LSDYNAGeneralTracker.LSDYNABranchName)                       | Gets or sets the LSDYNA BranchName.                                                                |
| [`LSDYNAComponentName`](#LSDYNAGeneralTracker.LSDYNAComponentName)                 | Gets or sets the LSDYNA ComponentName.                                                             |
| [`LSDYNASubBranchName`](#LSDYNAGeneralTracker.LSDYNASubBranchName)                 | Gets or sets the LSDYNA SubBranchName.                                                             |
| [`LoadStepNumber`](#LSDYNAGeneralTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#LSDYNAGeneralTracker.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#LSDYNAGeneralTracker.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#LSDYNAGeneralTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#LSDYNAGeneralTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`Minimum`](#LSDYNAGeneralTracker.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#LSDYNAGeneralTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`Name`](#LSDYNAGeneralTracker.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                      | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#LSDYNAGeneralTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#LSDYNAGeneralTracker.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#LSDYNAGeneralTracker.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#LSDYNAGeneralTracker.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#LSDYNAGeneralTracker.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#LSDYNAGeneralTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#LSDYNAGeneralTracker.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#LSDYNAGeneralTracker.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#LSDYNAGeneralTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`ReportedFrequency`](#LSDYNAGeneralTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#LSDYNAGeneralTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#LSDYNAGeneralTracker.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#LSDYNAGeneralTracker.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#LSDYNAGeneralTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#LSDYNAGeneralTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#LSDYNAGeneralTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                     | Gets or sets the Spring.                                                                           |
| [`State`](#LSDYNAGeneralTracker.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#LSDYNAGeneralTracker.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#LSDYNAGeneralTracker.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#LSDYNAGeneralTracker.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#LSDYNAGeneralTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#LSDYNAGeneralTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#LSDYNAGeneralTracker.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#LSDYNAGeneralTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#LSDYNAGeneralTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="LSDYNAGeneralTracker.ACTLoad"></a>

### *property* LSDYNAGeneralTracker.ACTLoad *: Ansys.ACT.Interfaces.DataModel.IDataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ACT Load.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.AccelerationType"></a>

### *property* LSDYNAGeneralTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.AttachedRefs"></a>

### *property* LSDYNAGeneralTracker.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.BoundaryCondition"></a>

### *property* LSDYNAGeneralTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.ChartDimensions"></a>

### *property* LSDYNAGeneralTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.ChartViewingStyle"></a>

### *property* LSDYNAGeneralTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Children"></a>

### *property* LSDYNAGeneralTracker.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.ClsId"></a>

### *property* LSDYNAGeneralTracker.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Comments"></a>

### *property* LSDYNAGeneralTracker.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.ContactRegion"></a>

### *property* LSDYNAGeneralTracker.ContactRegion *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.ContactSide"></a>

### *property* LSDYNAGeneralTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](../../../../../Mechanical/DataModel/Enums/ContactScopingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactScopingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.CoordinateSystem"></a>

### *property* LSDYNAGeneralTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.CurvesAppearanceDisplay"></a>

### *property* LSDYNAGeneralTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.CutFrequency"></a>

### *property* LSDYNAGeneralTracker.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.DataModelObjectCategory"></a>

### *property* LSDYNAGeneralTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.DeformationType"></a>

### *property* LSDYNAGeneralTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.DpfEvaluation"></a>

### *property* LSDYNAGeneralTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Duration"></a>

### *property* LSDYNAGeneralTracker.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.EnhancedTracking"></a>

### *property* LSDYNAGeneralTracker.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.FilterMaximum"></a>

### *property* LSDYNAGeneralTracker.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.FilterMinimum"></a>

### *property* LSDYNAGeneralTracker.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.FilterType"></a>

### *property* LSDYNAGeneralTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.FrequencyAtMaximumAmplitude"></a>

### *property* LSDYNAGeneralTracker.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GeometrySelectionString"></a>

### *property* LSDYNAGeneralTracker.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GroupingFolder"></a>

### *property* LSDYNAGeneralTracker.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.IconName"></a>

### *property* LSDYNAGeneralTracker.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Images"></a>

### *property* LSDYNAGeneralTracker.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* LSDYNAGeneralTracker.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.InternalObject"></a>

### *property* LSDYNAGeneralTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.IsSolved"></a>

### *property* LSDYNAGeneralTracker.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Joint"></a>

### *property* LSDYNAGeneralTracker.Joint *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Joint.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.LSDYNABranchName"></a>

### *property* LSDYNAGeneralTracker.LSDYNABranchName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LSDYNA BranchName.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.LSDYNAComponentName"></a>

### *property* LSDYNAGeneralTracker.LSDYNAComponentName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LSDYNA ComponentName.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.LSDYNASubBranchName"></a>

### *property* LSDYNAGeneralTracker.LSDYNASubBranchName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LSDYNA SubBranchName.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.LoadStepNumber"></a>

### *property* LSDYNAGeneralTracker.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Location"></a>

### *property* LSDYNAGeneralTracker.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Maximum"></a>

### *property* LSDYNAGeneralTracker.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.MaximumAmplitude"></a>

### *property* LSDYNAGeneralTracker.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.MaximumFrequency"></a>

### *property* LSDYNAGeneralTracker.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Minimum"></a>

### *property* LSDYNAGeneralTracker.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.MinimumFrequency"></a>

### *property* LSDYNAGeneralTracker.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Name"></a>

### *property* LSDYNAGeneralTracker.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.NamedSelections"></a>

### *property* LSDYNAGeneralTracker.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.NormalOrientation"></a>

### *property* LSDYNAGeneralTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.ObjectId"></a>

### *property* LSDYNAGeneralTracker.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.ObjectState"></a>

### *property* LSDYNAGeneralTracker.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.ObjectTags"></a>

### *property* LSDYNAGeneralTracker.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Parent"></a>

### *property* LSDYNAGeneralTracker.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.PhaseAngle"></a>

### *property* LSDYNAGeneralTracker.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Properties"></a>

### *property* LSDYNAGeneralTracker.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.RPMSelection"></a>

### *property* LSDYNAGeneralTracker.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.RealAtMaximumAmplitude"></a>

### *property* LSDYNAGeneralTracker.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.ReportedFrequency"></a>

### *property* LSDYNAGeneralTracker.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.RequestedFrequency"></a>

### *property* LSDYNAGeneralTracker.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.ResultChartType"></a>

### *property* LSDYNAGeneralTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.RpmSetNumber"></a>

### *property* LSDYNAGeneralTracker.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.SectorNumber"></a>

### *property* LSDYNAGeneralTracker.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.ShearOrientation"></a>

### *property* LSDYNAGeneralTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.SpatialResolution"></a>

### *property* LSDYNAGeneralTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Spring"></a>

### *property* LSDYNAGeneralTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.State"></a>

### *property* LSDYNAGeneralTracker.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.StressStrainType"></a>

### *property* LSDYNAGeneralTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Suppressed"></a>

### *property* LSDYNAGeneralTracker.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.TabularData"></a>

### *property* LSDYNAGeneralTracker.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.TimeHistoryDisplay"></a>

### *property* LSDYNAGeneralTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.UseParentFrequencyRange"></a>

### *property* LSDYNAGeneralTracker.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.VelocityType"></a>

### *property* LSDYNAGeneralTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.VisibleProperties"></a>

### *property* LSDYNAGeneralTracker.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.XAxisValues"></a>

### *property* LSDYNAGeneralTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LSDYNAGeneralTracker.Activate"></a>

### LSDYNAGeneralTracker.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.AddComment"></a>

### LSDYNAGeneralTracker.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.AddImage"></a>

### LSDYNAGeneralTracker.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.ClearGeneratedData"></a>

### LSDYNAGeneralTracker.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.ConvertToUserLoadFromId"></a>

### *classmethod* LSDYNAGeneralTracker.ConvertToUserLoadFromId(propValue: Any) → Ansys.ACT.Interfaces.DataModel.IDataModelObject

ConvertToUserLoadFromId method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Copy"></a>

### LSDYNAGeneralTracker.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.CopyTo"></a>

### LSDYNAGeneralTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.CreateObjRef"></a>

### LSDYNAGeneralTracker.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.CreateParameter"></a>

### LSDYNAGeneralTracker.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Cut"></a>

### LSDYNAGeneralTracker.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Delete"></a>

### LSDYNAGeneralTracker.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Duplicate"></a>

### LSDYNAGeneralTracker.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Equals"></a>

### LSDYNAGeneralTracker.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.EvaluateAllResults"></a>

### LSDYNAGeneralTracker.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.ExportAnimation"></a>

### LSDYNAGeneralTracker.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetAPIName"></a>

### LSDYNAGeneralTracker.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetAllProperties"></a>

### LSDYNAGeneralTracker.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetBranches"></a>

### LSDYNAGeneralTracker.GetBranches() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetBranches method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetChildren"></a>

### LSDYNAGeneralTracker.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### LSDYNAGeneralTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetComponents"></a>

### LSDYNAGeneralTracker.GetComponents(branch: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetComponents method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetDetailsView"></a>

### LSDYNAGeneralTracker.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetEnumName"></a>

### LSDYNAGeneralTracker.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetHashCode"></a>

### LSDYNAGeneralTracker.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetIconFile"></a>

### LSDYNAGeneralTracker.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetLifetimeService"></a>

### LSDYNAGeneralTracker.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetObjectData"></a>

### LSDYNAGeneralTracker.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetParameter"></a>

### LSDYNAGeneralTracker.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetPath"></a>

### LSDYNAGeneralTracker.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetPropertyName"></a>

### LSDYNAGeneralTracker.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetPropertyValue"></a>

### LSDYNAGeneralTracker.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetQuantityName"></a>

### LSDYNAGeneralTracker.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetQuantityNameFromType"></a>

### LSDYNAGeneralTracker.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetSubBranches"></a>

### LSDYNAGeneralTracker.GetSubBranches(branch: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetSubBranches method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetVisibleProperties"></a>

### LSDYNAGeneralTracker.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GetVisiblePropertyNames"></a>

### LSDYNAGeneralTracker.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GroupAllSimilarChildren"></a>

### LSDYNAGeneralTracker.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.GroupSimilarObjects"></a>

### LSDYNAGeneralTracker.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.InitializeLifetimeService"></a>

### LSDYNAGeneralTracker.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.IsPropertyEditable"></a>

### LSDYNAGeneralTracker.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LSDYNAGeneralTracker.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.IsPropertyVisible"></a>

### LSDYNAGeneralTracker.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LSDYNAGeneralTracker.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.Paste"></a>

### LSDYNAGeneralTracker.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.PropertyByAPIName"></a>

### LSDYNAGeneralTracker.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.PropertyById"></a>

### LSDYNAGeneralTracker.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.PropertyByName"></a>

### LSDYNAGeneralTracker.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.RemoveFromGroup"></a>

### LSDYNAGeneralTracker.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.RemoveParameter"></a>

### LSDYNAGeneralTracker.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LSDYNAGeneralTracker.RenameBasedOnDefinition"></a>

### LSDYNAGeneralTracker.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

