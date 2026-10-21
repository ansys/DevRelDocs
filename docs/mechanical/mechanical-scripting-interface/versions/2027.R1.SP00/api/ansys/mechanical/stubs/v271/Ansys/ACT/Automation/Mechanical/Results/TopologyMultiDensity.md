# `TopologyMultiDensity`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.TopologyMultiDensity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.TopologyMultiDensity(internalObject: Any)

<a id="TopologyMultiDensity"></a>

### *class* TopologyMultiDensity(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a TopologyMultiDensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#TopologyMultiDensity.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#TopologyMultiDensity.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#TopologyMultiDensity.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#TopologyMultiDensity.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddSmoothing`](#TopologyMultiDensity.AddSmoothing)                           | Insert Smoothing Object                                                                     |
| [`ClearGeneratedData`](#TopologyMultiDensity.ClearGeneratedData)               | Clears the result.                                                                          |
| [`Copy`](#TopologyMultiDensity.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#TopologyMultiDensity.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#TopologyMultiDensity.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#TopologyMultiDensity.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#TopologyMultiDensity.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#TopologyMultiDensity.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#TopologyMultiDensity.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#TopologyMultiDensity.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#TopologyMultiDensity.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#TopologyMultiDensity.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#TopologyMultiDensity.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#TopologyMultiDensity.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#TopologyMultiDensity.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#TopologyMultiDensity.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#TopologyMultiDensity.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#TopologyMultiDensity.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#TopologyMultiDensity.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#TopologyMultiDensity.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#TopologyMultiDensity.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#TopologyMultiDensity.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#TopologyMultiDensity.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#TopologyMultiDensity.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#TopologyMultiDensity.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#TopologyMultiDensity.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#TopologyMultiDensity.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#TopologyMultiDensity.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#TopologyMultiDensity.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#TopologyMultiDensity.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#TopologyMultiDensity.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#TopologyMultiDensity.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#TopologyMultiDensity.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#TopologyMultiDensity.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#TopologyMultiDensity.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#TopologyMultiDensity.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#TopologyMultiDensity.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#TopologyMultiDensity.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#TopologyMultiDensity.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#TopologyMultiDensity.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveResult`](#TopologyMultiDensity.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#TopologyMultiDensity.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Average`](#TopologyMultiDensity.Average)                                 | Gets the Average.                                             |
| [`CalculateTimeHistory`](#TopologyMultiDensity.CalculateTimeHistory)       | Gets or sets the CalculateTimeHistory.                        |
| [`Children`](#TopologyMultiDensity.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#TopologyMultiDensity.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#TopologyMultiDensity.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#TopologyMultiDensity.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`ExclusionsParticipation`](#TopologyMultiDensity.ExclusionsParticipation) | Gets or sets the ExclusionsParticipation.                     |
| [`Figures`](#TopologyMultiDensity.Figures)                                 | Gets the list of associated figures.                          |
| [`FinalMass`](#TopologyMultiDensity.FinalMass)                             | Gets the FinalMass.                                           |
| [`FinalVolume`](#TopologyMultiDensity.FinalVolume)                         | Gets the FinalVolume.                                         |
| [`GroupingFolder`](#TopologyMultiDensity.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#TopologyMultiDensity.IconName)                               | IconName property.                                            |
| [`Images`](#TopologyMultiDensity.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#TopologyMultiDensity.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`IterationNumber`](#TopologyMultiDensity.IterationNumber)                 | Gets the IterationNumber.                                     |
| [`IterationStep`](#TopologyMultiDensity.IterationStep)                     | Gets or sets the IterationStep.                               |
| [`Location`](#TopologyMultiDensity.Location)                               | Gets or sets the Location.                                    |
| [`Maximum`](#TopologyMultiDensity.Maximum)                                 | Gets the Maximum.                                             |
| [`Minimum`](#TopologyMultiDensity.Minimum)                                 | Gets the Minimum.                                             |
| [`Name`](#TopologyMultiDensity.Name)                                       | Name property.                                                |
| [`ObjectId`](#TopologyMultiDensity.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#TopologyMultiDensity.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#TopologyMultiDensity.ObjectTags)                           | ObjectTags property.                                          |
| [`OriginalMass`](#TopologyMultiDensity.OriginalMass)                       | Gets the OriginalMass.                                        |
| [`OriginalVolume`](#TopologyMultiDensity.OriginalVolume)                   | Gets the OriginalVolume.                                      |
| [`Parent`](#TopologyMultiDensity.Parent)                                   | Parent property.                                              |
| [`PercentMassOfOriginal`](#TopologyMultiDensity.PercentMassOfOriginal)     | Gets the PercentMassOfOriginal.                               |
| [`PercentVolumeOfOriginal`](#TopologyMultiDensity.PercentVolumeOfOriginal) | Gets the PercentVolumeOfOriginal.                             |
| [`Properties`](#TopologyMultiDensity.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#TopologyMultiDensity.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Selection`](#TopologyMultiDensity.Selection)                             | Gets or sets the Selection.                                   |
| [`ShowOptimizedRegion`](#TopologyMultiDensity.ShowOptimizedRegion)         | Gets or sets the ShowOptimizedRegion.                         |
| [`State`](#TopologyMultiDensity.State)                                     | State property.                                               |
| [`Suppressed`](#TopologyMultiDensity.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#TopologyMultiDensity.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TopologyMultiDensity.AttachedRefs"></a>

### *property* TopologyMultiDensity.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Average"></a>

### *property* TopologyMultiDensity.Average *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.CalculateTimeHistory"></a>

### *property* TopologyMultiDensity.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Children"></a>

### *property* TopologyMultiDensity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.ClsId"></a>

### *property* TopologyMultiDensity.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Comments"></a>

### *property* TopologyMultiDensity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.DataModelObjectCategory"></a>

### *property* TopologyMultiDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.ExclusionsParticipation"></a>

### *property* TopologyMultiDensity.ExclusionsParticipation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExclusionsParticipation.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Figures"></a>

### *property* TopologyMultiDensity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.FinalMass"></a>

### *property* TopologyMultiDensity.FinalMass *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FinalMass.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.FinalVolume"></a>

### *property* TopologyMultiDensity.FinalVolume *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FinalVolume.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GroupingFolder"></a>

### *property* TopologyMultiDensity.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.IconName"></a>

### *property* TopologyMultiDensity.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Images"></a>

### *property* TopologyMultiDensity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.InternalObject"></a>

### *property* TopologyMultiDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.IterationNumber"></a>

### *property* TopologyMultiDensity.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.IterationStep"></a>

### *property* TopologyMultiDensity.IterationStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Location"></a>

### *property* TopologyMultiDensity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Maximum"></a>

### *property* TopologyMultiDensity.Maximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Minimum"></a>

### *property* TopologyMultiDensity.Minimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Name"></a>

### *property* TopologyMultiDensity.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.ObjectId"></a>

### *property* TopologyMultiDensity.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.ObjectState"></a>

### *property* TopologyMultiDensity.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.ObjectTags"></a>

### *property* TopologyMultiDensity.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.OriginalMass"></a>

### *property* TopologyMultiDensity.OriginalMass *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the OriginalMass.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.OriginalVolume"></a>

### *property* TopologyMultiDensity.OriginalVolume *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the OriginalVolume.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Parent"></a>

### *property* TopologyMultiDensity.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.PercentMassOfOriginal"></a>

### *property* TopologyMultiDensity.PercentMassOfOriginal *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PercentMassOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.PercentVolumeOfOriginal"></a>

### *property* TopologyMultiDensity.PercentVolumeOfOriginal *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PercentVolumeOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Properties"></a>

### *property* TopologyMultiDensity.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.ScopingMethod"></a>

### *property* TopologyMultiDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Selection"></a>

### *property* TopologyMultiDensity.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](../OptimizationRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.ShowOptimizedRegion"></a>

### *property* TopologyMultiDensity.ShowOptimizedRegion *: [Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType](../../../../Mechanical/DataModel/Enums/TopologyOptimizationResultShowType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowOptimizedRegion.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.State"></a>

### *property* TopologyMultiDensity.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Suppressed"></a>

### *property* TopologyMultiDensity.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.VisibleProperties"></a>

### *property* TopologyMultiDensity.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TopologyMultiDensity.Activate"></a>

### TopologyMultiDensity.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.AddComment"></a>

### TopologyMultiDensity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.AddFigure"></a>

### TopologyMultiDensity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.AddImage"></a>

### TopologyMultiDensity.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.AddSmoothing"></a>

### TopologyMultiDensity.AddSmoothing() → [Ansys.ACT.Automation.Mechanical.Results.Smoothing](Smoothing.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Smoothing)

Insert Smoothing Object

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.ClearGeneratedData"></a>

### TopologyMultiDensity.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clears the result.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Copy"></a>

### TopologyMultiDensity.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.CopyTo"></a>

### TopologyMultiDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.CreateObjRef"></a>

### TopologyMultiDensity.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.CreateParameter"></a>

### TopologyMultiDensity.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Cut"></a>

### TopologyMultiDensity.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Delete"></a>

### TopologyMultiDensity.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Duplicate"></a>

### TopologyMultiDensity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Equals"></a>

### TopologyMultiDensity.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.EvaluateAllResults"></a>

### TopologyMultiDensity.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.ExportAnimation"></a>

### TopologyMultiDensity.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GetAPIName"></a>

### TopologyMultiDensity.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GetAllProperties"></a>

### TopologyMultiDensity.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GetChildren"></a>

### TopologyMultiDensity.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### TopologyMultiDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GetDetailsView"></a>

### TopologyMultiDensity.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GetEnumName"></a>

### TopologyMultiDensity.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GetHashCode"></a>

### TopologyMultiDensity.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GetIconFile"></a>

### TopologyMultiDensity.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GetLifetimeService"></a>

### TopologyMultiDensity.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GetObjectData"></a>

### TopologyMultiDensity.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GetParameter"></a>

### TopologyMultiDensity.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GetPath"></a>

### TopologyMultiDensity.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GetPropertyName"></a>

### TopologyMultiDensity.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GetPropertyValue"></a>

### TopologyMultiDensity.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GetQuantityName"></a>

### TopologyMultiDensity.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GetVisibleProperties"></a>

### TopologyMultiDensity.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GetVisiblePropertyNames"></a>

### TopologyMultiDensity.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GroupAllSimilarChildren"></a>

### TopologyMultiDensity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.GroupSimilarObjects"></a>

### TopologyMultiDensity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.InitializeLifetimeService"></a>

### TopologyMultiDensity.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.IsPropertyEditable"></a>

### TopologyMultiDensity.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TopologyMultiDensity.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.IsPropertyVisible"></a>

### TopologyMultiDensity.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TopologyMultiDensity.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.Paste"></a>

### TopologyMultiDensity.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.PropertyByAPIName"></a>

### TopologyMultiDensity.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.PropertyById"></a>

### TopologyMultiDensity.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.PropertyByName"></a>

### TopologyMultiDensity.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.RemoveFromGroup"></a>

### TopologyMultiDensity.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.RemoveParameter"></a>

### TopologyMultiDensity.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.RenameBasedOnDefinition"></a>

### TopologyMultiDensity.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="TopologyMultiDensity.RetrieveResult"></a>

### TopologyMultiDensity.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

