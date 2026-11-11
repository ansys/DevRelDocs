# `LatticeDensity`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.LatticeDensity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.LatticeDensity(internalObject: Any)

<a id="LatticeDensity"></a>

### *class* LatticeDensity(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a LatticeDensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#LatticeDensity.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#LatticeDensity.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#LatticeDensity.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#LatticeDensity.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#LatticeDensity.ClearGeneratedData)               | Clears the result.                                                                          |
| [`Copy`](#LatticeDensity.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#LatticeDensity.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#LatticeDensity.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#LatticeDensity.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#LatticeDensity.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#LatticeDensity.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#LatticeDensity.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#LatticeDensity.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#LatticeDensity.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#LatticeDensity.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#LatticeDensity.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#LatticeDensity.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#LatticeDensity.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#LatticeDensity.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#LatticeDensity.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#LatticeDensity.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#LatticeDensity.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#LatticeDensity.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#LatticeDensity.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#LatticeDensity.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#LatticeDensity.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#LatticeDensity.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#LatticeDensity.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#LatticeDensity.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#LatticeDensity.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#LatticeDensity.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#LatticeDensity.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#LatticeDensity.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#LatticeDensity.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#LatticeDensity.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#LatticeDensity.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#LatticeDensity.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#LatticeDensity.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#LatticeDensity.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#LatticeDensity.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#LatticeDensity.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#LatticeDensity.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#LatticeDensity.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveResult`](#LatticeDensity.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#LatticeDensity.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Average`](#LatticeDensity.Average)                                 | Gets the Average.                                             |
| [`CalculateTimeHistory`](#LatticeDensity.CalculateTimeHistory)       | Gets or sets the CalculateTimeHistory.                        |
| [`Children`](#LatticeDensity.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#LatticeDensity.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#LatticeDensity.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#LatticeDensity.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`ExclusionsParticipation`](#LatticeDensity.ExclusionsParticipation) | Gets or sets the ExclusionsParticipation.                     |
| [`Figures`](#LatticeDensity.Figures)                                 | Gets the list of associated figures.                          |
| [`FinalMass`](#LatticeDensity.FinalMass)                             | Gets the FinalMass.                                           |
| [`FinalVolume`](#LatticeDensity.FinalVolume)                         | Gets the FinalVolume.                                         |
| [`GroupingFolder`](#LatticeDensity.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#LatticeDensity.IconName)                               | IconName property.                                            |
| [`Images`](#LatticeDensity.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#LatticeDensity.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`IterationNumber`](#LatticeDensity.IterationNumber)                 | Gets the IterationNumber.                                     |
| [`IterationStep`](#LatticeDensity.IterationStep)                     | Gets or sets the IterationStep.                               |
| [`Location`](#LatticeDensity.Location)                               | Gets or sets the Location.                                    |
| [`Maximum`](#LatticeDensity.Maximum)                                 | Gets the Maximum.                                             |
| [`Minimum`](#LatticeDensity.Minimum)                                 | Gets the Minimum.                                             |
| [`Name`](#LatticeDensity.Name)                                       | Name property.                                                |
| [`ObjectId`](#LatticeDensity.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#LatticeDensity.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#LatticeDensity.ObjectTags)                           | ObjectTags property.                                          |
| [`OriginalMass`](#LatticeDensity.OriginalMass)                       | Gets the OriginalMass.                                        |
| [`OriginalVolume`](#LatticeDensity.OriginalVolume)                   | Gets the OriginalVolume.                                      |
| [`Parent`](#LatticeDensity.Parent)                                   | Parent property.                                              |
| [`PercentMassOfOriginal`](#LatticeDensity.PercentMassOfOriginal)     | Gets the PercentMassOfOriginal.                               |
| [`PercentVolumeOfOriginal`](#LatticeDensity.PercentVolumeOfOriginal) | Gets the PercentVolumeOfOriginal.                             |
| [`Properties`](#LatticeDensity.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#LatticeDensity.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Selection`](#LatticeDensity.Selection)                             | Gets or sets the Selection.                                   |
| [`ShowOptimizedRegion`](#LatticeDensity.ShowOptimizedRegion)         | Gets or sets the ShowOptimizedRegion.                         |
| [`State`](#LatticeDensity.State)                                     | State property.                                               |
| [`Suppressed`](#LatticeDensity.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#LatticeDensity.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="LatticeDensity.AttachedRefs"></a>

### *property* LatticeDensity.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Average"></a>

### *property* LatticeDensity.Average *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.CalculateTimeHistory"></a>

### *property* LatticeDensity.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Children"></a>

### *property* LatticeDensity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.ClsId"></a>

### *property* LatticeDensity.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Comments"></a>

### *property* LatticeDensity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.DataModelObjectCategory"></a>

### *property* LatticeDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.ExclusionsParticipation"></a>

### *property* LatticeDensity.ExclusionsParticipation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExclusionsParticipation.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Figures"></a>

### *property* LatticeDensity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.FinalMass"></a>

### *property* LatticeDensity.FinalMass *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FinalMass.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.FinalVolume"></a>

### *property* LatticeDensity.FinalVolume *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FinalVolume.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GroupingFolder"></a>

### *property* LatticeDensity.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.IconName"></a>

### *property* LatticeDensity.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Images"></a>

### *property* LatticeDensity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.InternalObject"></a>

### *property* LatticeDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.IterationNumber"></a>

### *property* LatticeDensity.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.IterationStep"></a>

### *property* LatticeDensity.IterationStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Location"></a>

### *property* LatticeDensity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Maximum"></a>

### *property* LatticeDensity.Maximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Minimum"></a>

### *property* LatticeDensity.Minimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Name"></a>

### *property* LatticeDensity.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.ObjectId"></a>

### *property* LatticeDensity.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.ObjectState"></a>

### *property* LatticeDensity.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.ObjectTags"></a>

### *property* LatticeDensity.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.OriginalMass"></a>

### *property* LatticeDensity.OriginalMass *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the OriginalMass.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.OriginalVolume"></a>

### *property* LatticeDensity.OriginalVolume *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the OriginalVolume.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Parent"></a>

### *property* LatticeDensity.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.PercentMassOfOriginal"></a>

### *property* LatticeDensity.PercentMassOfOriginal *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PercentMassOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.PercentVolumeOfOriginal"></a>

### *property* LatticeDensity.PercentVolumeOfOriginal *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PercentVolumeOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Properties"></a>

### *property* LatticeDensity.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.ScopingMethod"></a>

### *property* LatticeDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Selection"></a>

### *property* LatticeDensity.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](../OptimizationRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.ShowOptimizedRegion"></a>

### *property* LatticeDensity.ShowOptimizedRegion *: [Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType](../../../../Mechanical/DataModel/Enums/TopologyOptimizationResultShowType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowOptimizedRegion.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.State"></a>

### *property* LatticeDensity.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Suppressed"></a>

### *property* LatticeDensity.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.VisibleProperties"></a>

### *property* LatticeDensity.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LatticeDensity.Activate"></a>

### LatticeDensity.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.AddComment"></a>

### LatticeDensity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.AddFigure"></a>

### LatticeDensity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.AddImage"></a>

### LatticeDensity.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.ClearGeneratedData"></a>

### LatticeDensity.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clears the result.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Copy"></a>

### LatticeDensity.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.CopyTo"></a>

### LatticeDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.CreateObjRef"></a>

### LatticeDensity.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.CreateParameter"></a>

### LatticeDensity.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Cut"></a>

### LatticeDensity.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Delete"></a>

### LatticeDensity.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Duplicate"></a>

### LatticeDensity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Equals"></a>

### LatticeDensity.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.EvaluateAllResults"></a>

### LatticeDensity.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.ExportAnimation"></a>

### LatticeDensity.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GetAPIName"></a>

### LatticeDensity.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GetAllProperties"></a>

### LatticeDensity.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GetChildren"></a>

### LatticeDensity.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### LatticeDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GetDetailsView"></a>

### LatticeDensity.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GetEnumName"></a>

### LatticeDensity.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GetHashCode"></a>

### LatticeDensity.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GetIconFile"></a>

### LatticeDensity.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GetLifetimeService"></a>

### LatticeDensity.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GetObjectData"></a>

### LatticeDensity.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GetParameter"></a>

### LatticeDensity.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GetPath"></a>

### LatticeDensity.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GetPropertyName"></a>

### LatticeDensity.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GetPropertyValue"></a>

### LatticeDensity.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GetQuantityName"></a>

### LatticeDensity.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GetVisibleProperties"></a>

### LatticeDensity.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GetVisiblePropertyNames"></a>

### LatticeDensity.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GroupAllSimilarChildren"></a>

### LatticeDensity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.GroupSimilarObjects"></a>

### LatticeDensity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.InitializeLifetimeService"></a>

### LatticeDensity.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.IsPropertyEditable"></a>

### LatticeDensity.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LatticeDensity.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.IsPropertyVisible"></a>

### LatticeDensity.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LatticeDensity.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.Paste"></a>

### LatticeDensity.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.PropertyByAPIName"></a>

### LatticeDensity.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.PropertyById"></a>

### LatticeDensity.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.PropertyByName"></a>

### LatticeDensity.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.RemoveFromGroup"></a>

### LatticeDensity.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.RemoveParameter"></a>

### LatticeDensity.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.RenameBasedOnDefinition"></a>

### LatticeDensity.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeDensity.RetrieveResult"></a>

### LatticeDensity.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

