# `GeometryBasedAdaptivity`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GeometryBasedAdaptivity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.GeometryBasedAdaptivity(internalObject: Any)

<a id="GeometryBasedAdaptivity"></a>

### *class* GeometryBasedAdaptivity(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a GeometryBasedAdaptivity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#GeometryBasedAdaptivity.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#GeometryBasedAdaptivity.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#GeometryBasedAdaptivity.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#GeometryBasedAdaptivity.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#GeometryBasedAdaptivity.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#GeometryBasedAdaptivity.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#GeometryBasedAdaptivity.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#GeometryBasedAdaptivity.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#GeometryBasedAdaptivity.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#GeometryBasedAdaptivity.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#GeometryBasedAdaptivity.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#GeometryBasedAdaptivity.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#GeometryBasedAdaptivity.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#GeometryBasedAdaptivity.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#GeometryBasedAdaptivity.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#GeometryBasedAdaptivity.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#GeometryBasedAdaptivity.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#GeometryBasedAdaptivity.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#GeometryBasedAdaptivity.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#GeometryBasedAdaptivity.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#GeometryBasedAdaptivity.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#GeometryBasedAdaptivity.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#GeometryBasedAdaptivity.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#GeometryBasedAdaptivity.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#GeometryBasedAdaptivity.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#GeometryBasedAdaptivity.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#GeometryBasedAdaptivity.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#GeometryBasedAdaptivity.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#GeometryBasedAdaptivity.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#GeometryBasedAdaptivity.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#GeometryBasedAdaptivity.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#GeometryBasedAdaptivity.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#GeometryBasedAdaptivity.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#GeometryBasedAdaptivity.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#GeometryBasedAdaptivity.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#GeometryBasedAdaptivity.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#GeometryBasedAdaptivity.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#GeometryBasedAdaptivity.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#GeometryBasedAdaptivity.AttachedRefs)                       | AttachedRefs property.                                                                                                                              |
| [`BufferElements`](#GeometryBasedAdaptivity.BufferElements)                   | Gets or sets the BufferElements.                                                                                                                    |
| [`BufferLayers`](#GeometryBasedAdaptivity.BufferLayers)                       | Gets or sets the BufferLayers.                                                                                                                      |
| [`CheckAt`](#GeometryBasedAdaptivity.CheckAt)                                 | Gets or sets the CheckAt.                                                                                                                           |
| [`CheckAtValue`](#GeometryBasedAdaptivity.CheckAtValue)                       | Gets or sets the CheckAtValue.                                                                                                                      |
| [`Children`](#GeometryBasedAdaptivity.Children)                               | Gets the list of children.                                                                                                                          |
| [`ClsId`](#GeometryBasedAdaptivity.ClsId)                                     | ClsId property.                                                                                                                                     |
| [`Comments`](#GeometryBasedAdaptivity.Comments)                               | Gets the list of associated comments.                                                                                                               |
| [`CoordinateSystem`](#CoordinateSystem)                 | Gets or sets the CoordinateSystem.                                                                                                                  |
| [`Criterion`](#Criterion)                                      | Gets or sets the Criterion.                                                                                                                         |
| [`DamageThreshold`](#GeometryBasedAdaptivity.DamageThreshold)                 | Gets or sets the Damage Threshold for Cohesive Zone Material. Default: 0. Valid range is between 0 and 1, exclusive of 1.                           |
| [`DataModelObjectCategory`](#GeometryBasedAdaptivity.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                                        |
| [`EndTime`](#GeometryBasedAdaptivity.EndTime)                                 | Gets or sets the EndTime.                                                                                                                           |
| [`EnergyCoefficient`](#GeometryBasedAdaptivity.EnergyCoefficient)             | Gets or sets the EnergyCoefficient.                                                                                                                 |
| [`EnergyThreshold`](#GeometryBasedAdaptivity.EnergyThreshold)                 | Gets or sets the Energy Threshold for Cohesive Zone Material. Default: 0. Valid range is greater than equal to 0.                                   |
| [`Figures`](#GeometryBasedAdaptivity.Figures)                                 | Gets the list of associated figures.                                                                                                                |
| [`GroupingFolder`](#GeometryBasedAdaptivity.GroupingFolder)                   | GroupingFolder property.                                                                                                                            |
| [`HexDomCheckAt`](#GeometryBasedAdaptivity.HexDomCheckAt)                     | Gets or sets the HexDomCheckAt.                                                                                                                     |
| [`HexDomCheckAtValue`](#GeometryBasedAdaptivity.HexDomCheckAtValue)           | Gets or sets the HexDomCheckAtValue.                                                                                                                |
| [`HexDomEndTime`](#GeometryBasedAdaptivity.HexDomEndTime)                     | Gets or sets the HexDomEndTime.                                                                                                                     |
| [`HexDomStartTime`](#GeometryBasedAdaptivity.HexDomStartTime)                 | Gets or sets the HexDomStartTime.                                                                                                                   |
| [`HexDomTimeRange`](#GeometryBasedAdaptivity.HexDomTimeRange)                 | Gets or sets the HexDomTimeRange.                                                                                                                   |
| [`IconName`](#GeometryBasedAdaptivity.IconName)                               | IconName property.                                                                                                                                  |
| [`Images`](#GeometryBasedAdaptivity.Images)                                   | Gets the list of associated images.                                                                                                                 |
| [`InternalObject`](#GeometryBasedAdaptivity.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                                  |
| [`JacobianRatioValue`](#GeometryBasedAdaptivity.JacobianRatioValue)           | Gets or sets the JacobianRatioValue.                                                                                                                |
| [`LengthX`](#GeometryBasedAdaptivity.LengthX)                                 | Gets or sets the LengthX.                                                                                                                           |
| [`LengthY`](#GeometryBasedAdaptivity.LengthY)                                 | Gets or sets the LengthY.                                                                                                                           |
| [`LengthZ`](#GeometryBasedAdaptivity.LengthZ)                                 | Gets or sets the LengthZ.                                                                                                                           |
| [`Location`](#GeometryBasedAdaptivity.Location)                               | Gets or sets the Location.                                                                                                                          |
| [`MaximumCornerAngle`](#GeometryBasedAdaptivity.MaximumCornerAngle)           | Gets or sets the MaximumCornerAngle.                                                                                                                |
| [`MaximumValue`](#GeometryBasedAdaptivity.MaximumValue)                       | Gets or sets the Maximum Value for Maximum Equivalent Strain and Maximum Principal Strain. Default: -1. Valid range is greater than or equal to -1. |
| [`MinimumNumberOfElements`](#GeometryBasedAdaptivity.MinimumNumberOfElements) | Gets or sets the Minimum Number Of Elements for Contact Elements. Default: 0. Valid range is greater than 0.                                        |
| [`MinimumValue`](#GeometryBasedAdaptivity.MinimumValue)                       | Gets or sets the Minimum Value for Maximum Equivalent Strain and Maximum Principal Strain. Default: -1. Valid range is greater than or equal to -1. |
| [`Name`](#GeometryBasedAdaptivity.Name)                                       | Name property.                                                                                                                                      |
| [`ObjectId`](#GeometryBasedAdaptivity.ObjectId)                               | ObjectId property.                                                                                                                                  |
| [`ObjectState`](#GeometryBasedAdaptivity.ObjectState)                         | ObjectState property.                                                                                                                               |
| [`ObjectTags`](#GeometryBasedAdaptivity.ObjectTags)                           | ObjectTags property.                                                                                                                                |
| [`Option`](#GeometryBasedAdaptivity.Option)                                   | Gets or sets the Option.                                                                                                                            |
| [`Parent`](#GeometryBasedAdaptivity.Parent)                                   | Parent property.                                                                                                                                    |
| [`Properties`](#GeometryBasedAdaptivity.Properties)                           | Gets the list of properties for this object.                                                                                                        |
| [`RemeshLayerEnd`](#GeometryBasedAdaptivity.RemeshLayerEnd)                   | Gets or sets the RemeshLayerEnd.                                                                                                                    |
| [`RemeshLayerFrequency`](#GeometryBasedAdaptivity.RemeshLayerFrequency)       | Gets or sets the RemeshLayerFrequency.                                                                                                              |
| [`RemeshLayerStart`](#GeometryBasedAdaptivity.RemeshLayerStart)               | Gets or sets the RemeshLayerStart.                                                                                                                  |
| [`SkewnessValue`](#GeometryBasedAdaptivity.SkewnessValue)                     | Gets or sets the SkewnessValue.                                                                                                                     |
| [`StartTime`](#GeometryBasedAdaptivity.StartTime)                             | Gets or sets the StartTime.                                                                                                                         |
| [`State`](#GeometryBasedAdaptivity.State)                                     | State property.                                                                                                                                     |
| [`Suppressed`](#GeometryBasedAdaptivity.Suppressed)                           | Gets or sets the Suppressed.                                                                                                                        |
| [`TimeRange`](#GeometryBasedAdaptivity.TimeRange)                             | Gets or sets the TimeRange.                                                                                                                         |
| [`VisibleProperties`](#GeometryBasedAdaptivity.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                                       |

<a id="property-detail"></a>

## Property detail

<a id="GeometryBasedAdaptivity.AttachedRefs"></a>

### *property* GeometryBasedAdaptivity.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.BufferElements"></a>

### *property* GeometryBasedAdaptivity.BufferElements *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BufferElements.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.BufferLayers"></a>

### *property* GeometryBasedAdaptivity.BufferLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BufferLayers.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.CheckAt"></a>

### *property* GeometryBasedAdaptivity.CheckAt *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityUpdateType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CheckAt.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.CheckAtValue"></a>

### *property* GeometryBasedAdaptivity.CheckAtValue *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CheckAtValue.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Children"></a>

### *property* GeometryBasedAdaptivity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.ClsId"></a>

### *property* GeometryBasedAdaptivity.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Comments"></a>

### *property* GeometryBasedAdaptivity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.CoordinateSystem"></a>

### *property* GeometryBasedAdaptivity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Criterion"></a>

### *property* GeometryBasedAdaptivity.Criterion *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityCriterionType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityCriterionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityCriterionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Criterion.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.DamageThreshold"></a>

### *property* GeometryBasedAdaptivity.DamageThreshold *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Damage Threshold for Cohesive Zone Material. Default: 0. Valid range is between 0 and 1, exclusive of 1.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.DataModelObjectCategory"></a>

### *property* GeometryBasedAdaptivity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.EndTime"></a>

### *property* GeometryBasedAdaptivity.EndTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EndTime.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.EnergyCoefficient"></a>

### *property* GeometryBasedAdaptivity.EnergyCoefficient *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EnergyCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.EnergyThreshold"></a>

### *property* GeometryBasedAdaptivity.EnergyThreshold *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Energy Threshold for Cohesive Zone Material. Default: 0. Valid range is greater than equal to 0.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Figures"></a>

### *property* GeometryBasedAdaptivity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GroupingFolder"></a>

### *property* GeometryBasedAdaptivity.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.HexDomCheckAt"></a>

### *property* GeometryBasedAdaptivity.HexDomCheckAt *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityUpdateType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HexDomCheckAt.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.HexDomCheckAtValue"></a>

### *property* GeometryBasedAdaptivity.HexDomCheckAtValue *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HexDomCheckAtValue.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.HexDomEndTime"></a>

### *property* GeometryBasedAdaptivity.HexDomEndTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HexDomEndTime.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.HexDomStartTime"></a>

### *property* GeometryBasedAdaptivity.HexDomStartTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HexDomStartTime.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.HexDomTimeRange"></a>

### *property* GeometryBasedAdaptivity.HexDomTimeRange *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityTimeRange.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HexDomTimeRange.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.IconName"></a>

### *property* GeometryBasedAdaptivity.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Images"></a>

### *property* GeometryBasedAdaptivity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.InternalObject"></a>

### *property* GeometryBasedAdaptivity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSNonlinearAdaptivityAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.JacobianRatioValue"></a>

### *property* GeometryBasedAdaptivity.JacobianRatioValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the JacobianRatioValue.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.LengthX"></a>

### *property* GeometryBasedAdaptivity.LengthX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LengthX.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.LengthY"></a>

### *property* GeometryBasedAdaptivity.LengthY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LengthY.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.LengthZ"></a>

### *property* GeometryBasedAdaptivity.LengthZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LengthZ.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Location"></a>

### *property* GeometryBasedAdaptivity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.MaximumCornerAngle"></a>

### *property* GeometryBasedAdaptivity.MaximumCornerAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumCornerAngle.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.MaximumValue"></a>

### *property* GeometryBasedAdaptivity.MaximumValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Value for Maximum Equivalent Strain and Maximum Principal Strain. Default: -1. Valid range is greater than or equal to -1.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.MinimumNumberOfElements"></a>

### *property* GeometryBasedAdaptivity.MinimumNumberOfElements *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Number Of Elements for Contact Elements. Default: 0. Valid range is greater than 0.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.MinimumValue"></a>

### *property* GeometryBasedAdaptivity.MinimumValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Value for Maximum Equivalent Strain and Maximum Principal Strain. Default: -1. Valid range is greater than or equal to -1.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Name"></a>

### *property* GeometryBasedAdaptivity.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.ObjectId"></a>

### *property* GeometryBasedAdaptivity.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.ObjectState"></a>

### *property* GeometryBasedAdaptivity.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.ObjectTags"></a>

### *property* GeometryBasedAdaptivity.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Option"></a>

### *property* GeometryBasedAdaptivity.Option *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityOptionType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityOptionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityOptionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Option.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Parent"></a>

### *property* GeometryBasedAdaptivity.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Properties"></a>

### *property* GeometryBasedAdaptivity.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.RemeshLayerEnd"></a>

### *property* GeometryBasedAdaptivity.RemeshLayerEnd *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemeshLayerEnd.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.RemeshLayerFrequency"></a>

### *property* GeometryBasedAdaptivity.RemeshLayerFrequency *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemeshLayerFrequency.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.RemeshLayerStart"></a>

### *property* GeometryBasedAdaptivity.RemeshLayerStart *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemeshLayerStart.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.SkewnessValue"></a>

### *property* GeometryBasedAdaptivity.SkewnessValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SkewnessValue.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.StartTime"></a>

### *property* GeometryBasedAdaptivity.StartTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StartTime.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.State"></a>

### *property* GeometryBasedAdaptivity.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Suppressed"></a>

### *property* GeometryBasedAdaptivity.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.TimeRange"></a>

### *property* GeometryBasedAdaptivity.TimeRange *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityTimeRange.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeRange.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.VisibleProperties"></a>

### *property* GeometryBasedAdaptivity.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeometryBasedAdaptivity.Activate"></a>

### GeometryBasedAdaptivity.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.AddComment"></a>

### GeometryBasedAdaptivity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.AddFigure"></a>

### GeometryBasedAdaptivity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.AddImage"></a>

### GeometryBasedAdaptivity.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Copy"></a>

### GeometryBasedAdaptivity.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.CopyTo"></a>

### GeometryBasedAdaptivity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.CreateObjRef"></a>

### GeometryBasedAdaptivity.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.CreateParameter"></a>

### GeometryBasedAdaptivity.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Cut"></a>

### GeometryBasedAdaptivity.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Delete"></a>

### GeometryBasedAdaptivity.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Duplicate"></a>

### GeometryBasedAdaptivity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Equals"></a>

### GeometryBasedAdaptivity.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GetAPIName"></a>

### GeometryBasedAdaptivity.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GetAllProperties"></a>

### GeometryBasedAdaptivity.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GetChildren"></a>

### GeometryBasedAdaptivity.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### GeometryBasedAdaptivity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GetDetailsView"></a>

### GeometryBasedAdaptivity.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GetEnumName"></a>

### GeometryBasedAdaptivity.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GetHashCode"></a>

### GeometryBasedAdaptivity.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GetIconFile"></a>

### GeometryBasedAdaptivity.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GetLifetimeService"></a>

### GeometryBasedAdaptivity.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GetObjectData"></a>

### GeometryBasedAdaptivity.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GetParameter"></a>

### GeometryBasedAdaptivity.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GetPath"></a>

### GeometryBasedAdaptivity.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GetPropertyName"></a>

### GeometryBasedAdaptivity.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GetPropertyValue"></a>

### GeometryBasedAdaptivity.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GetVisibleProperties"></a>

### GeometryBasedAdaptivity.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GetVisiblePropertyNames"></a>

### GeometryBasedAdaptivity.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GroupAllSimilarChildren"></a>

### GeometryBasedAdaptivity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.GroupSimilarObjects"></a>

### GeometryBasedAdaptivity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.InitializeLifetimeService"></a>

### GeometryBasedAdaptivity.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.IsPropertyEditable"></a>

### GeometryBasedAdaptivity.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GeometryBasedAdaptivity.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.IsPropertyVisible"></a>

### GeometryBasedAdaptivity.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GeometryBasedAdaptivity.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.Paste"></a>

### GeometryBasedAdaptivity.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.PropertyByAPIName"></a>

### GeometryBasedAdaptivity.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.PropertyById"></a>

### GeometryBasedAdaptivity.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.PropertyByName"></a>

### GeometryBasedAdaptivity.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.RemoveFromGroup"></a>

### GeometryBasedAdaptivity.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="GeometryBasedAdaptivity.RemoveParameter"></a>

### GeometryBasedAdaptivity.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

