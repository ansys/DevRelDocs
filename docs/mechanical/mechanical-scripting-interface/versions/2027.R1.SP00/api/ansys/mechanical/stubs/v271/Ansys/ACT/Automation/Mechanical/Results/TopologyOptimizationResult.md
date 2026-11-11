# `TopologyOptimizationResult`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.TopologyOptimizationResult"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.TopologyOptimizationResult(internalObject: Any)

<a id="TopologyOptimizationResult"></a>

### *class* TopologyOptimizationResult(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a TopologyOptimizationResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#TopologyOptimizationResult.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#TopologyOptimizationResult.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#TopologyOptimizationResult.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#TopologyOptimizationResult.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#TopologyOptimizationResult.ClearGeneratedData)               | Clears the result.                                                                          |
| [`Copy`](#TopologyOptimizationResult.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#TopologyOptimizationResult.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#TopologyOptimizationResult.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#TopologyOptimizationResult.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#TopologyOptimizationResult.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#TopologyOptimizationResult.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#TopologyOptimizationResult.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#TopologyOptimizationResult.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#TopologyOptimizationResult.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#TopologyOptimizationResult.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#TopologyOptimizationResult.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#TopologyOptimizationResult.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#TopologyOptimizationResult.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#TopologyOptimizationResult.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#TopologyOptimizationResult.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#TopologyOptimizationResult.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#TopologyOptimizationResult.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#TopologyOptimizationResult.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#TopologyOptimizationResult.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#TopologyOptimizationResult.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#TopologyOptimizationResult.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#TopologyOptimizationResult.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#TopologyOptimizationResult.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#TopologyOptimizationResult.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#TopologyOptimizationResult.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#TopologyOptimizationResult.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#TopologyOptimizationResult.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#TopologyOptimizationResult.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#TopologyOptimizationResult.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#TopologyOptimizationResult.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#TopologyOptimizationResult.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#TopologyOptimizationResult.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#TopologyOptimizationResult.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#TopologyOptimizationResult.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#TopologyOptimizationResult.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#TopologyOptimizationResult.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#TopologyOptimizationResult.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#TopologyOptimizationResult.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveResult`](#TopologyOptimizationResult.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#TopologyOptimizationResult.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Average`](#TopologyOptimizationResult.Average)                                 | Gets the Average.                                             |
| [`CalculateTimeHistory`](#TopologyOptimizationResult.CalculateTimeHistory)       | Gets or sets the CalculateTimeHistory.                        |
| [`Children`](#TopologyOptimizationResult.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#TopologyOptimizationResult.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#TopologyOptimizationResult.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#TopologyOptimizationResult.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`ExclusionsParticipation`](#TopologyOptimizationResult.ExclusionsParticipation) | Gets or sets the ExclusionsParticipation.                     |
| [`Figures`](#TopologyOptimizationResult.Figures)                                 | Gets the list of associated figures.                          |
| [`FinalMass`](#TopologyOptimizationResult.FinalMass)                             | Gets the FinalMass.                                           |
| [`FinalVolume`](#TopologyOptimizationResult.FinalVolume)                         | Gets the FinalVolume.                                         |
| [`GroupingFolder`](#TopologyOptimizationResult.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#TopologyOptimizationResult.IconName)                               | IconName property.                                            |
| [`Images`](#TopologyOptimizationResult.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#TopologyOptimizationResult.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`IterationNumber`](#TopologyOptimizationResult.IterationNumber)                 | Gets the IterationNumber.                                     |
| [`IterationStep`](#TopologyOptimizationResult.IterationStep)                     | Gets or sets the IterationStep.                               |
| [`Location`](#TopologyOptimizationResult.Location)                               | Gets or sets the Location.                                    |
| [`Maximum`](#TopologyOptimizationResult.Maximum)                                 | Gets the Maximum.                                             |
| [`Minimum`](#TopologyOptimizationResult.Minimum)                                 | Gets the Minimum.                                             |
| [`Name`](#TopologyOptimizationResult.Name)                                       | Name property.                                                |
| [`ObjectId`](#TopologyOptimizationResult.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#TopologyOptimizationResult.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#TopologyOptimizationResult.ObjectTags)                           | ObjectTags property.                                          |
| [`OriginalMass`](#TopologyOptimizationResult.OriginalMass)                       | Gets the OriginalMass.                                        |
| [`OriginalVolume`](#TopologyOptimizationResult.OriginalVolume)                   | Gets the OriginalVolume.                                      |
| [`Parent`](#TopologyOptimizationResult.Parent)                                   | Parent property.                                              |
| [`PercentMassOfOriginal`](#TopologyOptimizationResult.PercentMassOfOriginal)     | Gets the PercentMassOfOriginal.                               |
| [`PercentVolumeOfOriginal`](#TopologyOptimizationResult.PercentVolumeOfOriginal) | Gets the PercentVolumeOfOriginal.                             |
| [`Properties`](#TopologyOptimizationResult.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#TopologyOptimizationResult.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Selection`](#TopologyOptimizationResult.Selection)                             | Gets or sets the Selection.                                   |
| [`ShowOptimizedRegion`](#TopologyOptimizationResult.ShowOptimizedRegion)         | Gets or sets the ShowOptimizedRegion.                         |
| [`State`](#TopologyOptimizationResult.State)                                     | State property.                                               |
| [`Suppressed`](#TopologyOptimizationResult.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#TopologyOptimizationResult.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TopologyOptimizationResult.AttachedRefs"></a>

### *property* TopologyOptimizationResult.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Average"></a>

### *property* TopologyOptimizationResult.Average *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.CalculateTimeHistory"></a>

### *property* TopologyOptimizationResult.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Children"></a>

### *property* TopologyOptimizationResult.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.ClsId"></a>

### *property* TopologyOptimizationResult.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Comments"></a>

### *property* TopologyOptimizationResult.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.DataModelObjectCategory"></a>

### *property* TopologyOptimizationResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.ExclusionsParticipation"></a>

### *property* TopologyOptimizationResult.ExclusionsParticipation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExclusionsParticipation.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Figures"></a>

### *property* TopologyOptimizationResult.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.FinalMass"></a>

### *property* TopologyOptimizationResult.FinalMass *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FinalMass.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.FinalVolume"></a>

### *property* TopologyOptimizationResult.FinalVolume *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FinalVolume.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GroupingFolder"></a>

### *property* TopologyOptimizationResult.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.IconName"></a>

### *property* TopologyOptimizationResult.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Images"></a>

### *property* TopologyOptimizationResult.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.InternalObject"></a>

### *property* TopologyOptimizationResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.IterationNumber"></a>

### *property* TopologyOptimizationResult.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.IterationStep"></a>

### *property* TopologyOptimizationResult.IterationStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Location"></a>

### *property* TopologyOptimizationResult.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Maximum"></a>

### *property* TopologyOptimizationResult.Maximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Minimum"></a>

### *property* TopologyOptimizationResult.Minimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Name"></a>

### *property* TopologyOptimizationResult.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.ObjectId"></a>

### *property* TopologyOptimizationResult.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.ObjectState"></a>

### *property* TopologyOptimizationResult.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.ObjectTags"></a>

### *property* TopologyOptimizationResult.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.OriginalMass"></a>

### *property* TopologyOptimizationResult.OriginalMass *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the OriginalMass.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.OriginalVolume"></a>

### *property* TopologyOptimizationResult.OriginalVolume *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the OriginalVolume.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Parent"></a>

### *property* TopologyOptimizationResult.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.PercentMassOfOriginal"></a>

### *property* TopologyOptimizationResult.PercentMassOfOriginal *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PercentMassOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.PercentVolumeOfOriginal"></a>

### *property* TopologyOptimizationResult.PercentVolumeOfOriginal *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PercentVolumeOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Properties"></a>

### *property* TopologyOptimizationResult.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.ScopingMethod"></a>

### *property* TopologyOptimizationResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Selection"></a>

### *property* TopologyOptimizationResult.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](../OptimizationRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.ShowOptimizedRegion"></a>

### *property* TopologyOptimizationResult.ShowOptimizedRegion *: [Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType](../../../../Mechanical/DataModel/Enums/TopologyOptimizationResultShowType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowOptimizedRegion.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.State"></a>

### *property* TopologyOptimizationResult.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Suppressed"></a>

### *property* TopologyOptimizationResult.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.VisibleProperties"></a>

### *property* TopologyOptimizationResult.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TopologyOptimizationResult.Activate"></a>

### TopologyOptimizationResult.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.AddComment"></a>

### TopologyOptimizationResult.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.AddFigure"></a>

### TopologyOptimizationResult.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.AddImage"></a>

### TopologyOptimizationResult.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.ClearGeneratedData"></a>

### TopologyOptimizationResult.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clears the result.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Copy"></a>

### TopologyOptimizationResult.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.CopyTo"></a>

### TopologyOptimizationResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.CreateObjRef"></a>

### TopologyOptimizationResult.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.CreateParameter"></a>

### TopologyOptimizationResult.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Cut"></a>

### TopologyOptimizationResult.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Delete"></a>

### TopologyOptimizationResult.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Duplicate"></a>

### TopologyOptimizationResult.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Equals"></a>

### TopologyOptimizationResult.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.EvaluateAllResults"></a>

### TopologyOptimizationResult.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.ExportAnimation"></a>

### TopologyOptimizationResult.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GetAPIName"></a>

### TopologyOptimizationResult.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GetAllProperties"></a>

### TopologyOptimizationResult.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GetChildren"></a>

### TopologyOptimizationResult.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### TopologyOptimizationResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GetDetailsView"></a>

### TopologyOptimizationResult.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GetEnumName"></a>

### TopologyOptimizationResult.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GetHashCode"></a>

### TopologyOptimizationResult.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GetIconFile"></a>

### TopologyOptimizationResult.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GetLifetimeService"></a>

### TopologyOptimizationResult.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GetObjectData"></a>

### TopologyOptimizationResult.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GetParameter"></a>

### TopologyOptimizationResult.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GetPath"></a>

### TopologyOptimizationResult.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GetPropertyName"></a>

### TopologyOptimizationResult.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GetPropertyValue"></a>

### TopologyOptimizationResult.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GetQuantityName"></a>

### TopologyOptimizationResult.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GetVisibleProperties"></a>

### TopologyOptimizationResult.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GetVisiblePropertyNames"></a>

### TopologyOptimizationResult.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GroupAllSimilarChildren"></a>

### TopologyOptimizationResult.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.GroupSimilarObjects"></a>

### TopologyOptimizationResult.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.InitializeLifetimeService"></a>

### TopologyOptimizationResult.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.IsPropertyEditable"></a>

### TopologyOptimizationResult.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TopologyOptimizationResult.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.IsPropertyVisible"></a>

### TopologyOptimizationResult.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TopologyOptimizationResult.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.Paste"></a>

### TopologyOptimizationResult.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.PropertyByAPIName"></a>

### TopologyOptimizationResult.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.PropertyById"></a>

### TopologyOptimizationResult.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.PropertyByName"></a>

### TopologyOptimizationResult.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.RemoveFromGroup"></a>

### TopologyOptimizationResult.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.RemoveParameter"></a>

### TopologyOptimizationResult.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.RenameBasedOnDefinition"></a>

### TopologyOptimizationResult.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyOptimizationResult.RetrieveResult"></a>

### TopologyOptimizationResult.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

