# `LatticeElementalDensity`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.LatticeElementalDensity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.LatticeElementalDensity(internalObject: Any)

<a id="LatticeElementalDensity"></a>

### *class* LatticeElementalDensity(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a LatticeElementalDensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#LatticeElementalDensity.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#LatticeElementalDensity.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#LatticeElementalDensity.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#LatticeElementalDensity.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#LatticeElementalDensity.ClearGeneratedData)               | Clears the result.                                                                          |
| [`Copy`](#LatticeElementalDensity.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#LatticeElementalDensity.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#LatticeElementalDensity.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#LatticeElementalDensity.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#LatticeElementalDensity.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#LatticeElementalDensity.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#LatticeElementalDensity.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#LatticeElementalDensity.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#LatticeElementalDensity.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#LatticeElementalDensity.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#LatticeElementalDensity.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#LatticeElementalDensity.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#LatticeElementalDensity.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#LatticeElementalDensity.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#LatticeElementalDensity.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#LatticeElementalDensity.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#LatticeElementalDensity.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#LatticeElementalDensity.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#LatticeElementalDensity.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#LatticeElementalDensity.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#LatticeElementalDensity.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#LatticeElementalDensity.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#LatticeElementalDensity.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#LatticeElementalDensity.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#LatticeElementalDensity.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#LatticeElementalDensity.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#LatticeElementalDensity.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#LatticeElementalDensity.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#LatticeElementalDensity.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#LatticeElementalDensity.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#LatticeElementalDensity.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#LatticeElementalDensity.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#LatticeElementalDensity.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#LatticeElementalDensity.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#LatticeElementalDensity.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#LatticeElementalDensity.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#LatticeElementalDensity.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#LatticeElementalDensity.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveResult`](#LatticeElementalDensity.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#LatticeElementalDensity.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Average`](#LatticeElementalDensity.Average)                                 | Gets the Average.                                             |
| [`CalculateTimeHistory`](#LatticeElementalDensity.CalculateTimeHistory)       | Gets or sets the CalculateTimeHistory.                        |
| [`Children`](#LatticeElementalDensity.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#LatticeElementalDensity.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#LatticeElementalDensity.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#LatticeElementalDensity.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`ExclusionsParticipation`](#LatticeElementalDensity.ExclusionsParticipation) | Gets or sets the ExclusionsParticipation.                     |
| [`Figures`](#LatticeElementalDensity.Figures)                                 | Gets the list of associated figures.                          |
| [`FinalMass`](#LatticeElementalDensity.FinalMass)                             | Gets the FinalMass.                                           |
| [`FinalVolume`](#LatticeElementalDensity.FinalVolume)                         | Gets the FinalVolume.                                         |
| [`GroupingFolder`](#LatticeElementalDensity.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#LatticeElementalDensity.IconName)                               | IconName property.                                            |
| [`Images`](#LatticeElementalDensity.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#LatticeElementalDensity.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`IterationNumber`](#LatticeElementalDensity.IterationNumber)                 | Gets the IterationNumber.                                     |
| [`IterationStep`](#LatticeElementalDensity.IterationStep)                     | Gets or sets the IterationStep.                               |
| [`Location`](#LatticeElementalDensity.Location)                               | Gets or sets the Location.                                    |
| [`Maximum`](#LatticeElementalDensity.Maximum)                                 | Gets the Maximum.                                             |
| [`Minimum`](#LatticeElementalDensity.Minimum)                                 | Gets the Minimum.                                             |
| [`Name`](#LatticeElementalDensity.Name)                                       | Name property.                                                |
| [`ObjectId`](#LatticeElementalDensity.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#LatticeElementalDensity.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#LatticeElementalDensity.ObjectTags)                           | ObjectTags property.                                          |
| [`OriginalMass`](#LatticeElementalDensity.OriginalMass)                       | Gets the OriginalMass.                                        |
| [`OriginalVolume`](#LatticeElementalDensity.OriginalVolume)                   | Gets the OriginalVolume.                                      |
| [`Parent`](#LatticeElementalDensity.Parent)                                   | Parent property.                                              |
| [`PercentMassOfOriginal`](#LatticeElementalDensity.PercentMassOfOriginal)     | Gets the PercentMassOfOriginal.                               |
| [`PercentVolumeOfOriginal`](#LatticeElementalDensity.PercentVolumeOfOriginal) | Gets the PercentVolumeOfOriginal.                             |
| [`Properties`](#LatticeElementalDensity.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#LatticeElementalDensity.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Selection`](#LatticeElementalDensity.Selection)                             | Gets or sets the Selection.                                   |
| [`ShowOptimizedRegion`](#LatticeElementalDensity.ShowOptimizedRegion)         | Gets or sets the ShowOptimizedRegion.                         |
| [`State`](#LatticeElementalDensity.State)                                     | State property.                                               |
| [`Suppressed`](#LatticeElementalDensity.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#LatticeElementalDensity.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="LatticeElementalDensity.AttachedRefs"></a>

### *property* LatticeElementalDensity.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Average"></a>

### *property* LatticeElementalDensity.Average *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.CalculateTimeHistory"></a>

### *property* LatticeElementalDensity.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Children"></a>

### *property* LatticeElementalDensity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.ClsId"></a>

### *property* LatticeElementalDensity.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Comments"></a>

### *property* LatticeElementalDensity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.DataModelObjectCategory"></a>

### *property* LatticeElementalDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.ExclusionsParticipation"></a>

### *property* LatticeElementalDensity.ExclusionsParticipation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExclusionsParticipation.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Figures"></a>

### *property* LatticeElementalDensity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.FinalMass"></a>

### *property* LatticeElementalDensity.FinalMass *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FinalMass.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.FinalVolume"></a>

### *property* LatticeElementalDensity.FinalVolume *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FinalVolume.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GroupingFolder"></a>

### *property* LatticeElementalDensity.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.IconName"></a>

### *property* LatticeElementalDensity.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Images"></a>

### *property* LatticeElementalDensity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.InternalObject"></a>

### *property* LatticeElementalDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.IterationNumber"></a>

### *property* LatticeElementalDensity.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.IterationStep"></a>

### *property* LatticeElementalDensity.IterationStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Location"></a>

### *property* LatticeElementalDensity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Maximum"></a>

### *property* LatticeElementalDensity.Maximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Minimum"></a>

### *property* LatticeElementalDensity.Minimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Name"></a>

### *property* LatticeElementalDensity.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.ObjectId"></a>

### *property* LatticeElementalDensity.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.ObjectState"></a>

### *property* LatticeElementalDensity.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.ObjectTags"></a>

### *property* LatticeElementalDensity.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.OriginalMass"></a>

### *property* LatticeElementalDensity.OriginalMass *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the OriginalMass.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.OriginalVolume"></a>

### *property* LatticeElementalDensity.OriginalVolume *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the OriginalVolume.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Parent"></a>

### *property* LatticeElementalDensity.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.PercentMassOfOriginal"></a>

### *property* LatticeElementalDensity.PercentMassOfOriginal *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PercentMassOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.PercentVolumeOfOriginal"></a>

### *property* LatticeElementalDensity.PercentVolumeOfOriginal *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PercentVolumeOfOriginal.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Properties"></a>

### *property* LatticeElementalDensity.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.ScopingMethod"></a>

### *property* LatticeElementalDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Selection"></a>

### *property* LatticeElementalDensity.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](../OptimizationRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.ShowOptimizedRegion"></a>

### *property* LatticeElementalDensity.ShowOptimizedRegion *: [Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType](../../../../Mechanical/DataModel/Enums/TopologyOptimizationResultShowType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopologyOptimizationResultShowType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowOptimizedRegion.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.State"></a>

### *property* LatticeElementalDensity.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Suppressed"></a>

### *property* LatticeElementalDensity.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.VisibleProperties"></a>

### *property* LatticeElementalDensity.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LatticeElementalDensity.Activate"></a>

### LatticeElementalDensity.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.AddComment"></a>

### LatticeElementalDensity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.AddFigure"></a>

### LatticeElementalDensity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.AddImage"></a>

### LatticeElementalDensity.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.ClearGeneratedData"></a>

### LatticeElementalDensity.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clears the result.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Copy"></a>

### LatticeElementalDensity.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.CopyTo"></a>

### LatticeElementalDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.CreateObjRef"></a>

### LatticeElementalDensity.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.CreateParameter"></a>

### LatticeElementalDensity.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Cut"></a>

### LatticeElementalDensity.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Delete"></a>

### LatticeElementalDensity.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Duplicate"></a>

### LatticeElementalDensity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Equals"></a>

### LatticeElementalDensity.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.EvaluateAllResults"></a>

### LatticeElementalDensity.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.ExportAnimation"></a>

### LatticeElementalDensity.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GetAPIName"></a>

### LatticeElementalDensity.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GetAllProperties"></a>

### LatticeElementalDensity.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GetChildren"></a>

### LatticeElementalDensity.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### LatticeElementalDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GetDetailsView"></a>

### LatticeElementalDensity.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GetEnumName"></a>

### LatticeElementalDensity.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GetHashCode"></a>

### LatticeElementalDensity.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GetIconFile"></a>

### LatticeElementalDensity.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GetLifetimeService"></a>

### LatticeElementalDensity.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GetObjectData"></a>

### LatticeElementalDensity.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GetParameter"></a>

### LatticeElementalDensity.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GetPath"></a>

### LatticeElementalDensity.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GetPropertyName"></a>

### LatticeElementalDensity.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GetPropertyValue"></a>

### LatticeElementalDensity.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GetQuantityName"></a>

### LatticeElementalDensity.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GetVisibleProperties"></a>

### LatticeElementalDensity.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GetVisiblePropertyNames"></a>

### LatticeElementalDensity.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GroupAllSimilarChildren"></a>

### LatticeElementalDensity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.GroupSimilarObjects"></a>

### LatticeElementalDensity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.InitializeLifetimeService"></a>

### LatticeElementalDensity.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.IsPropertyEditable"></a>

### LatticeElementalDensity.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LatticeElementalDensity.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.IsPropertyVisible"></a>

### LatticeElementalDensity.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LatticeElementalDensity.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.Paste"></a>

### LatticeElementalDensity.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.PropertyByAPIName"></a>

### LatticeElementalDensity.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.PropertyById"></a>

### LatticeElementalDensity.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.PropertyByName"></a>

### LatticeElementalDensity.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.RemoveFromGroup"></a>

### LatticeElementalDensity.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.RemoveParameter"></a>

### LatticeElementalDensity.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.RenameBasedOnDefinition"></a>

### LatticeElementalDensity.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="LatticeElementalDensity.RetrieveResult"></a>

### LatticeElementalDensity.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

