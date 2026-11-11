# `TopologyElementalDensity`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.TopologyElementalDensity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.TopologyElementalDensity(internalObject: Any)

<a id="TopologyElementalDensity"></a>

### *class* TopologyElementalDensity(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a TopologyElementalDensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#TopologyElementalDensity.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#TopologyElementalDensity.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#TopologyElementalDensity.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#TopologyElementalDensity.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#TopologyElementalDensity.ClearGeneratedData)               | Clears the result.                                                                          |
| [`Copy`](#TopologyElementalDensity.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#TopologyElementalDensity.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#TopologyElementalDensity.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#TopologyElementalDensity.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#TopologyElementalDensity.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#TopologyElementalDensity.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#TopologyElementalDensity.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#TopologyElementalDensity.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#TopologyElementalDensity.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#TopologyElementalDensity.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#TopologyElementalDensity.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#TopologyElementalDensity.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#TopologyElementalDensity.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#TopologyElementalDensity.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#TopologyElementalDensity.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#TopologyElementalDensity.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#TopologyElementalDensity.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#TopologyElementalDensity.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#TopologyElementalDensity.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#TopologyElementalDensity.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#TopologyElementalDensity.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#TopologyElementalDensity.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#TopologyElementalDensity.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#TopologyElementalDensity.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#TopologyElementalDensity.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#TopologyElementalDensity.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#TopologyElementalDensity.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#TopologyElementalDensity.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#TopologyElementalDensity.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#TopologyElementalDensity.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#TopologyElementalDensity.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#TopologyElementalDensity.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#TopologyElementalDensity.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#TopologyElementalDensity.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#TopologyElementalDensity.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#TopologyElementalDensity.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#TopologyElementalDensity.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#TopologyElementalDensity.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveResult`](#TopologyElementalDensity.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#TopologyElementalDensity.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Average`](#TopologyElementalDensity.Average)                                 | Gets the Average.                                             |
| [`CalculateTimeHistory`](#TopologyElementalDensity.CalculateTimeHistory)       | Gets or sets the CalculateTimeHistory.                        |
| [`Children`](#TopologyElementalDensity.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#TopologyElementalDensity.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#TopologyElementalDensity.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#TopologyElementalDensity.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`ExclusionsParticipation`](#TopologyElementalDensity.ExclusionsParticipation) | Gets or sets the ExclusionsParticipation.                     |
| [`Figures`](#TopologyElementalDensity.Figures)                                 | Gets the list of associated figures.                          |
| [`FinalMass`](#TopologyElementalDensity.FinalMass)                             | Gets the FinalMass.                                           |
| [`FinalVolume`](#TopologyElementalDensity.FinalVolume)                         | Gets the FinalVolume.                                         |
| [`GroupingFolder`](#TopologyElementalDensity.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#TopologyElementalDensity.IconName)                               | IconName property.                                            |
| [`Images`](#TopologyElementalDensity.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#TopologyElementalDensity.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`IterationNumber`](#TopologyElementalDensity.IterationNumber)                 | Gets the IterationNumber.                                     |
| [`IterationStep`](#TopologyElementalDensity.IterationStep)                     | Gets or sets the IterationStep.                               |
| [`Location`](#TopologyElementalDensity.Location)                               | Gets or sets the Location.                                    |
| [`Maximum`](#TopologyElementalDensity.Maximum)                                 | Gets the Maximum.                                             |
| [`Minimum`](#TopologyElementalDensity.Minimum)                                 | Gets the Minimum.                                             |
| [`Name`](#TopologyElementalDensity.Name)                                       | Name property.                                                |
| [`ObjectId`](#TopologyElementalDensity.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#TopologyElementalDensity.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#TopologyElementalDensity.ObjectTags)                           | ObjectTags property.                                          |
| [`OriginalMass`](#TopologyElementalDensity.OriginalMass)                       | Gets the OriginalMass.                                        |
| [`OriginalVolume`](#TopologyElementalDensity.OriginalVolume)                   | Gets the OriginalVolume.                                      |
| [`Parent`](#TopologyElementalDensity.Parent)                                   | Parent property.                                              |
| [`PercentMassOfOriginal`](#TopologyElementalDensity.PercentMassOfOriginal)     | Gets the PercentMassOfOriginal.                               |
| [`PercentVolumeOfOriginal`](#TopologyElementalDensity.PercentVolumeOfOriginal) | Gets the PercentVolumeOfOriginal.                             |
| [`Properties`](#TopologyElementalDensity.Properties)                           | Gets the list of properties for this object.                  |
| [`RetainedThreshold`](#TopologyElementalDensity.RetainedThreshold)             | Gets or sets the RetainedThreshold.                           |
| [`ScopingMethod`](#TopologyElementalDensity.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Selection`](#TopologyElementalDensity.Selection)                             | Gets or sets the Selection.                                   |
| [`ShowOptimizedRegion`](#TopologyElementalDensity.ShowOptimizedRegion)         | Gets or sets the ShowOptimizedRegion.                         |
| [`State`](#TopologyElementalDensity.State)                                     | State property.                                               |
| [`Suppressed`](#TopologyElementalDensity.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#TopologyElementalDensity.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TopologyElementalDensity.AttachedRefs"></a>

### *property* TopologyElementalDensity.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Average"></a>

### *property* TopologyElementalDensity.Average *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.CalculateTimeHistory"></a>

### *property* TopologyElementalDensity.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Children"></a>

### *property* TopologyElementalDensity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.ClsId"></a>

### *property* TopologyElementalDensity.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Comments"></a>

### *property* TopologyElementalDensity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.DataModelObjectCategory"></a>

### *property* TopologyElementalDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.ExclusionsParticipation"></a>

### *property* TopologyElementalDensity.ExclusionsParticipation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExclusionsParticipation.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Figures"></a>

### *property* TopologyElementalDensity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.FinalMass"></a>

### *property* TopologyElementalDensity.FinalMass *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FinalMass.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.FinalVolume"></a>

### *property* TopologyElementalDensity.FinalVolume *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FinalVolume.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GroupingFolder"></a>

### *property* TopologyElementalDensity.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.IconName"></a>

### *property* TopologyElementalDensity.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Images"></a>

### *property* TopologyElementalDensity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.InternalObject"></a>

### *property* TopologyElementalDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.IterationNumber"></a>

### *property* TopologyElementalDensity.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.IterationStep"></a>

### *property* TopologyElementalDensity.IterationStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Location"></a>

### *property* TopologyElementalDensity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Maximum"></a>

### *property* TopologyElementalDensity.Maximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Minimum"></a>

### *property* TopologyElementalDensity.Minimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Name"></a>

### *property* TopologyElementalDensity.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.ObjectId"></a>

### *property* TopologyElementalDensity.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.ObjectState"></a>

### *property* TopologyElementalDensity.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.ObjectTags"></a>

### *property* TopologyElementalDensity.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.OriginalMass"></a>

### *property* TopologyElementalDensity.OriginalMass *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the OriginalMass.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.OriginalVolume"></a>

### *property* TopologyElementalDensity.OriginalVolume *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the OriginalVolume.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Parent"></a>

### *property* TopologyElementalDensity.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.PercentMassOfOriginal"></a>

### *property* TopologyElementalDensity.PercentMassOfOriginal *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PercentMassOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.PercentVolumeOfOriginal"></a>

### *property* TopologyElementalDensity.PercentVolumeOfOriginal *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PercentVolumeOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Properties"></a>

### *property* TopologyElementalDensity.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.RetainedThreshold"></a>

### *property* TopologyElementalDensity.RetainedThreshold *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RetainedThreshold.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.ScopingMethod"></a>

### *property* TopologyElementalDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Selection"></a>

### *property* TopologyElementalDensity.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](../OptimizationRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.ShowOptimizedRegion"></a>

### *property* TopologyElementalDensity.ShowOptimizedRegion *: [Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType](../../../../Mechanical/DataModel/Enums/TopologyOptimizationResultShowType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowOptimizedRegion.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.State"></a>

### *property* TopologyElementalDensity.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Suppressed"></a>

### *property* TopologyElementalDensity.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.VisibleProperties"></a>

### *property* TopologyElementalDensity.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TopologyElementalDensity.Activate"></a>

### TopologyElementalDensity.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.AddComment"></a>

### TopologyElementalDensity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.AddFigure"></a>

### TopologyElementalDensity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.AddImage"></a>

### TopologyElementalDensity.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.ClearGeneratedData"></a>

### TopologyElementalDensity.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clears the result.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Copy"></a>

### TopologyElementalDensity.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.CopyTo"></a>

### TopologyElementalDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.CreateObjRef"></a>

### TopologyElementalDensity.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.CreateParameter"></a>

### TopologyElementalDensity.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Cut"></a>

### TopologyElementalDensity.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Delete"></a>

### TopologyElementalDensity.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Duplicate"></a>

### TopologyElementalDensity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Equals"></a>

### TopologyElementalDensity.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.EvaluateAllResults"></a>

### TopologyElementalDensity.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.ExportAnimation"></a>

### TopologyElementalDensity.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GetAPIName"></a>

### TopologyElementalDensity.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GetAllProperties"></a>

### TopologyElementalDensity.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GetChildren"></a>

### TopologyElementalDensity.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### TopologyElementalDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GetDetailsView"></a>

### TopologyElementalDensity.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GetEnumName"></a>

### TopologyElementalDensity.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GetHashCode"></a>

### TopologyElementalDensity.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GetIconFile"></a>

### TopologyElementalDensity.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GetLifetimeService"></a>

### TopologyElementalDensity.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GetObjectData"></a>

### TopologyElementalDensity.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GetParameter"></a>

### TopologyElementalDensity.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GetPath"></a>

### TopologyElementalDensity.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GetPropertyName"></a>

### TopologyElementalDensity.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GetPropertyValue"></a>

### TopologyElementalDensity.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GetQuantityName"></a>

### TopologyElementalDensity.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GetVisibleProperties"></a>

### TopologyElementalDensity.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GetVisiblePropertyNames"></a>

### TopologyElementalDensity.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GroupAllSimilarChildren"></a>

### TopologyElementalDensity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.GroupSimilarObjects"></a>

### TopologyElementalDensity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.InitializeLifetimeService"></a>

### TopologyElementalDensity.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.IsPropertyEditable"></a>

### TopologyElementalDensity.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TopologyElementalDensity.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.IsPropertyVisible"></a>

### TopologyElementalDensity.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TopologyElementalDensity.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.Paste"></a>

### TopologyElementalDensity.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.PropertyByAPIName"></a>

### TopologyElementalDensity.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.PropertyById"></a>

### TopologyElementalDensity.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.PropertyByName"></a>

### TopologyElementalDensity.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.RemoveFromGroup"></a>

### TopologyElementalDensity.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.RemoveParameter"></a>

### TopologyElementalDensity.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.RenameBasedOnDefinition"></a>

### TopologyElementalDensity.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyElementalDensity.RetrieveResult"></a>

### TopologyElementalDensity.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

