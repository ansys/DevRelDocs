# `TopologyDensity`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.TopologyDensity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.TopologyDensity(internalObject: Any)

<a id="TopologyDensity"></a>

### *class* TopologyDensity(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a TopologyDensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#TopologyDensity.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#TopologyDensity.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#TopologyDensity.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#TopologyDensity.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddSmoothing`](#TopologyDensity.AddSmoothing)                           | Creates a new Smoothing                                                                     |
| [`ClearGeneratedData`](#TopologyDensity.ClearGeneratedData)               | Clears the result.                                                                          |
| [`Copy`](#TopologyDensity.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#TopologyDensity.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#TopologyDensity.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#TopologyDensity.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#TopologyDensity.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#TopologyDensity.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#TopologyDensity.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#TopologyDensity.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#TopologyDensity.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#TopologyDensity.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#TopologyDensity.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#TopologyDensity.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#TopologyDensity.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#TopologyDensity.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#TopologyDensity.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#TopologyDensity.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#TopologyDensity.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#TopologyDensity.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#TopologyDensity.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#TopologyDensity.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#TopologyDensity.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#TopologyDensity.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#TopologyDensity.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#TopologyDensity.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#TopologyDensity.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#TopologyDensity.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#TopologyDensity.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#TopologyDensity.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#TopologyDensity.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`InsertSmoothing`](#TopologyDensity.InsertSmoothing)                     | Insert Smoothing Object                                                                     |
| [`IsPropertyEditable`](#TopologyDensity.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#TopologyDensity.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#TopologyDensity.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#TopologyDensity.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#TopologyDensity.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#TopologyDensity.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#TopologyDensity.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#TopologyDensity.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#TopologyDensity.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveResult`](#TopologyDensity.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#TopologyDensity.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Average`](#TopologyDensity.Average)                                 | Gets the Average.                                             |
| [`CalculateTimeHistory`](#TopologyDensity.CalculateTimeHistory)       | Gets or sets the CalculateTimeHistory.                        |
| [`Children`](#TopologyDensity.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#TopologyDensity.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#TopologyDensity.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#TopologyDensity.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`ExclusionsParticipation`](#TopologyDensity.ExclusionsParticipation) | Gets or sets the ExclusionsParticipation.                     |
| [`Figures`](#TopologyDensity.Figures)                                 | Gets the list of associated figures.                          |
| [`FinalMass`](#TopologyDensity.FinalMass)                             | Gets the FinalMass.                                           |
| [`FinalVolume`](#TopologyDensity.FinalVolume)                         | Gets the FinalVolume.                                         |
| [`GroupingFolder`](#TopologyDensity.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#TopologyDensity.IconName)                               | IconName property.                                            |
| [`Images`](#TopologyDensity.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#TopologyDensity.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`IterationNumber`](#TopologyDensity.IterationNumber)                 | Gets the IterationNumber.                                     |
| [`IterationStep`](#TopologyDensity.IterationStep)                     | Gets or sets the IterationStep.                               |
| [`Location`](#TopologyDensity.Location)                               | Gets or sets the Location.                                    |
| [`Maximum`](#TopologyDensity.Maximum)                                 | Gets the Maximum.                                             |
| [`Minimum`](#TopologyDensity.Minimum)                                 | Gets the Minimum.                                             |
| [`Name`](#TopologyDensity.Name)                                       | Name property.                                                |
| [`ObjectId`](#TopologyDensity.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#TopologyDensity.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#TopologyDensity.ObjectTags)                           | ObjectTags property.                                          |
| [`OriginalMass`](#TopologyDensity.OriginalMass)                       | Gets the OriginalMass.                                        |
| [`OriginalVolume`](#TopologyDensity.OriginalVolume)                   | Gets the OriginalVolume.                                      |
| [`Parent`](#TopologyDensity.Parent)                                   | Parent property.                                              |
| [`PercentMassOfOriginal`](#TopologyDensity.PercentMassOfOriginal)     | Gets the PercentMassOfOriginal.                               |
| [`PercentVolumeOfOriginal`](#TopologyDensity.PercentVolumeOfOriginal) | Gets the PercentVolumeOfOriginal.                             |
| [`Properties`](#TopologyDensity.Properties)                           | Gets the list of properties for this object.                  |
| [`RetainedThreshold`](#TopologyDensity.RetainedThreshold)             | Gets or sets the RetainedThreshold.                           |
| [`ScopingMethod`](#TopologyDensity.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Selection`](#TopologyDensity.Selection)                             | Gets or sets the Selection.                                   |
| [`ShowOptimizedRegion`](#TopologyDensity.ShowOptimizedRegion)         | Gets or sets the ShowOptimizedRegion.                         |
| [`State`](#TopologyDensity.State)                                     | State property.                                               |
| [`Suppressed`](#TopologyDensity.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#TopologyDensity.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TopologyDensity.AttachedRefs"></a>

### *property* TopologyDensity.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Average"></a>

### *property* TopologyDensity.Average *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.CalculateTimeHistory"></a>

### *property* TopologyDensity.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Children"></a>

### *property* TopologyDensity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.ClsId"></a>

### *property* TopologyDensity.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Comments"></a>

### *property* TopologyDensity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.DataModelObjectCategory"></a>

### *property* TopologyDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.ExclusionsParticipation"></a>

### *property* TopologyDensity.ExclusionsParticipation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExclusionsParticipation.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Figures"></a>

### *property* TopologyDensity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.FinalMass"></a>

### *property* TopologyDensity.FinalMass *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FinalMass.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.FinalVolume"></a>

### *property* TopologyDensity.FinalVolume *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FinalVolume.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GroupingFolder"></a>

### *property* TopologyDensity.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.IconName"></a>

### *property* TopologyDensity.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Images"></a>

### *property* TopologyDensity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.InternalObject"></a>

### *property* TopologyDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.IterationNumber"></a>

### *property* TopologyDensity.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.IterationStep"></a>

### *property* TopologyDensity.IterationStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Location"></a>

### *property* TopologyDensity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Maximum"></a>

### *property* TopologyDensity.Maximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Minimum"></a>

### *property* TopologyDensity.Minimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Name"></a>

### *property* TopologyDensity.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.ObjectId"></a>

### *property* TopologyDensity.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.ObjectState"></a>

### *property* TopologyDensity.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.ObjectTags"></a>

### *property* TopologyDensity.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.OriginalMass"></a>

### *property* TopologyDensity.OriginalMass *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the OriginalMass.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.OriginalVolume"></a>

### *property* TopologyDensity.OriginalVolume *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the OriginalVolume.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Parent"></a>

### *property* TopologyDensity.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.PercentMassOfOriginal"></a>

### *property* TopologyDensity.PercentMassOfOriginal *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PercentMassOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.PercentVolumeOfOriginal"></a>

### *property* TopologyDensity.PercentVolumeOfOriginal *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PercentVolumeOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Properties"></a>

### *property* TopologyDensity.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.RetainedThreshold"></a>

### *property* TopologyDensity.RetainedThreshold *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RetainedThreshold.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.ScopingMethod"></a>

### *property* TopologyDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Selection"></a>

### *property* TopologyDensity.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](../OptimizationRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.ShowOptimizedRegion"></a>

### *property* TopologyDensity.ShowOptimizedRegion *: [Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType](../../../../Mechanical/DataModel/Enums/TopologyOptimizationResultShowType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowOptimizedRegion.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.State"></a>

### *property* TopologyDensity.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Suppressed"></a>

### *property* TopologyDensity.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.VisibleProperties"></a>

### *property* TopologyDensity.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TopologyDensity.Activate"></a>

### TopologyDensity.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.AddComment"></a>

### TopologyDensity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.AddFigure"></a>

### TopologyDensity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.AddImage"></a>

### TopologyDensity.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.AddSmoothing"></a>

### TopologyDensity.AddSmoothing() → [Ansys.ACT.Automation.Mechanical.Results.Smoothing](Smoothing.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Smoothing)

Creates a new Smoothing

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.ClearGeneratedData"></a>

### TopologyDensity.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clears the result.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Copy"></a>

### TopologyDensity.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.CopyTo"></a>

### TopologyDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.CreateObjRef"></a>

### TopologyDensity.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.CreateParameter"></a>

### TopologyDensity.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Cut"></a>

### TopologyDensity.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Delete"></a>

### TopologyDensity.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Duplicate"></a>

### TopologyDensity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Equals"></a>

### TopologyDensity.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.EvaluateAllResults"></a>

### TopologyDensity.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.ExportAnimation"></a>

### TopologyDensity.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GetAPIName"></a>

### TopologyDensity.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GetAllProperties"></a>

### TopologyDensity.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GetChildren"></a>

### TopologyDensity.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### TopologyDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GetDetailsView"></a>

### TopologyDensity.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GetEnumName"></a>

### TopologyDensity.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GetHashCode"></a>

### TopologyDensity.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GetIconFile"></a>

### TopologyDensity.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GetLifetimeService"></a>

### TopologyDensity.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GetObjectData"></a>

### TopologyDensity.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GetParameter"></a>

### TopologyDensity.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GetPath"></a>

### TopologyDensity.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GetPropertyName"></a>

### TopologyDensity.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GetPropertyValue"></a>

### TopologyDensity.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GetQuantityName"></a>

### TopologyDensity.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GetVisibleProperties"></a>

### TopologyDensity.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GetVisiblePropertyNames"></a>

### TopologyDensity.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GroupAllSimilarChildren"></a>

### TopologyDensity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.GroupSimilarObjects"></a>

### TopologyDensity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.InitializeLifetimeService"></a>

### TopologyDensity.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.InsertSmoothing"></a>

### TopologyDensity.InsertSmoothing() → [None](https://docs.python.org/3/builtins/constants.html#None)

Insert Smoothing Object

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.IsPropertyEditable"></a>

### TopologyDensity.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TopologyDensity.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.IsPropertyVisible"></a>

### TopologyDensity.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TopologyDensity.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.Paste"></a>

### TopologyDensity.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.PropertyByAPIName"></a>

### TopologyDensity.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.PropertyById"></a>

### TopologyDensity.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.PropertyByName"></a>

### TopologyDensity.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.RemoveFromGroup"></a>

### TopologyDensity.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.RemoveParameter"></a>

### TopologyDensity.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.RenameBasedOnDefinition"></a>

### TopologyDensity.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyDensity.RetrieveResult"></a>

### TopologyDensity.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

