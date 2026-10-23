# `NonlinearAdaptiveRegion`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NonlinearAdaptiveRegion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.NonlinearAdaptiveRegion(internalObject: Any)

<a id="NonlinearAdaptiveRegion"></a>

### *class* NonlinearAdaptiveRegion(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a NonlinearAdaptiveRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#NonlinearAdaptiveRegion.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#NonlinearAdaptiveRegion.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#NonlinearAdaptiveRegion.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#NonlinearAdaptiveRegion.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#NonlinearAdaptiveRegion.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#NonlinearAdaptiveRegion.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#NonlinearAdaptiveRegion.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#NonlinearAdaptiveRegion.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#NonlinearAdaptiveRegion.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#NonlinearAdaptiveRegion.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#NonlinearAdaptiveRegion.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#NonlinearAdaptiveRegion.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#NonlinearAdaptiveRegion.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#NonlinearAdaptiveRegion.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#NonlinearAdaptiveRegion.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#NonlinearAdaptiveRegion.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#NonlinearAdaptiveRegion.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#NonlinearAdaptiveRegion.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#NonlinearAdaptiveRegion.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#NonlinearAdaptiveRegion.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#NonlinearAdaptiveRegion.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#NonlinearAdaptiveRegion.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#NonlinearAdaptiveRegion.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#NonlinearAdaptiveRegion.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#NonlinearAdaptiveRegion.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#NonlinearAdaptiveRegion.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#NonlinearAdaptiveRegion.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#NonlinearAdaptiveRegion.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#NonlinearAdaptiveRegion.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#NonlinearAdaptiveRegion.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#NonlinearAdaptiveRegion.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#NonlinearAdaptiveRegion.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#NonlinearAdaptiveRegion.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#NonlinearAdaptiveRegion.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#NonlinearAdaptiveRegion.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#NonlinearAdaptiveRegion.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#NonlinearAdaptiveRegion.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#NonlinearAdaptiveRegion.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#NonlinearAdaptiveRegion.AttachedRefs)                       | AttachedRefs property.                                                                                                                              |
| [`BufferElements`](#NonlinearAdaptiveRegion.BufferElements)                   | Gets or sets the BufferElements.                                                                                                                    |
| [`BufferLayers`](#NonlinearAdaptiveRegion.BufferLayers)                       | Gets or sets the BufferLayers.                                                                                                                      |
| [`CheckAt`](#NonlinearAdaptiveRegion.CheckAt)                                 | Gets or sets the CheckAt.                                                                                                                           |
| [`CheckAtValue`](#NonlinearAdaptiveRegion.CheckAtValue)                       | Gets or sets the CheckAtValue.                                                                                                                      |
| [`Children`](#NonlinearAdaptiveRegion.Children)                               | Gets the list of children.                                                                                                                          |
| [`ClsId`](#NonlinearAdaptiveRegion.ClsId)                                     | ClsId property.                                                                                                                                     |
| [`Comments`](#NonlinearAdaptiveRegion.Comments)                               | Gets the list of associated comments.                                                                                                               |
| [`CoordinateSystem`](#CoordinateSystem)                 | Gets or sets the CoordinateSystem.                                                                                                                  |
| [`Criterion`](#Criterion)                                      | Gets or sets the Criterion.                                                                                                                         |
| [`DamageThreshold`](#NonlinearAdaptiveRegion.DamageThreshold)                 | Gets or sets the Damage Threshold for Cohesive Zone Material. Default: 0. Valid range is between 0 and 1, exclusive of 1.                           |
| [`DataModelObjectCategory`](#NonlinearAdaptiveRegion.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                                        |
| [`EndTime`](#NonlinearAdaptiveRegion.EndTime)                                 | Gets or sets the EndTime.                                                                                                                           |
| [`EnergyCoefficient`](#NonlinearAdaptiveRegion.EnergyCoefficient)             | Gets or sets the EnergyCoefficient.                                                                                                                 |
| [`EnergyThreshold`](#NonlinearAdaptiveRegion.EnergyThreshold)                 | Gets or sets the Energy Threshold for Cohesive Zone Material. Default: 0. Valid range is greater than equal to 0.                                   |
| [`Figures`](#NonlinearAdaptiveRegion.Figures)                                 | Gets the list of associated figures.                                                                                                                |
| [`GroupingFolder`](#NonlinearAdaptiveRegion.GroupingFolder)                   | GroupingFolder property.                                                                                                                            |
| [`HexDomCheckAt`](#NonlinearAdaptiveRegion.HexDomCheckAt)                     | Gets or sets the HexDomCheckAt.                                                                                                                     |
| [`HexDomCheckAtValue`](#NonlinearAdaptiveRegion.HexDomCheckAtValue)           | Gets or sets the HexDomCheckAtValue.                                                                                                                |
| [`HexDomEndTime`](#NonlinearAdaptiveRegion.HexDomEndTime)                     | Gets or sets the HexDomEndTime.                                                                                                                     |
| [`HexDomStartTime`](#NonlinearAdaptiveRegion.HexDomStartTime)                 | Gets or sets the HexDomStartTime.                                                                                                                   |
| [`HexDomTimeRange`](#NonlinearAdaptiveRegion.HexDomTimeRange)                 | Gets or sets the HexDomTimeRange.                                                                                                                   |
| [`IconName`](#NonlinearAdaptiveRegion.IconName)                               | IconName property.                                                                                                                                  |
| [`Images`](#NonlinearAdaptiveRegion.Images)                                   | Gets the list of associated images.                                                                                                                 |
| [`InternalObject`](#NonlinearAdaptiveRegion.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                                  |
| [`JacobianRatioValue`](#NonlinearAdaptiveRegion.JacobianRatioValue)           | Gets or sets the JacobianRatioValue.                                                                                                                |
| [`LengthX`](#NonlinearAdaptiveRegion.LengthX)                                 | Gets or sets the LengthX.                                                                                                                           |
| [`LengthY`](#NonlinearAdaptiveRegion.LengthY)                                 | Gets or sets the LengthY.                                                                                                                           |
| [`LengthZ`](#NonlinearAdaptiveRegion.LengthZ)                                 | Gets or sets the LengthZ.                                                                                                                           |
| [`Location`](#NonlinearAdaptiveRegion.Location)                               | Gets or sets the Location.                                                                                                                          |
| [`MaximumCornerAngle`](#NonlinearAdaptiveRegion.MaximumCornerAngle)           | Gets or sets the MaximumCornerAngle.                                                                                                                |
| [`MaximumValue`](#NonlinearAdaptiveRegion.MaximumValue)                       | Gets or sets the Maximum Value for Maximum Equivalent Strain and Maximum Principal Strain. Default: -1. Valid range is greater than or equal to -1. |
| [`MinimumNumberOfElements`](#NonlinearAdaptiveRegion.MinimumNumberOfElements) | Gets or sets the Minimum Number Of Elements for Contact Elements. Default: 0. Valid range is greater than 0.                                        |
| [`MinimumValue`](#NonlinearAdaptiveRegion.MinimumValue)                       | Gets or sets the Minimum Value for Maximum Equivalent Strain and Maximum Principal Strain. Default: -1. Valid range is greater than or equal to -1. |
| [`Name`](#NonlinearAdaptiveRegion.Name)                                       | Name property.                                                                                                                                      |
| [`ObjectId`](#NonlinearAdaptiveRegion.ObjectId)                               | ObjectId property.                                                                                                                                  |
| [`ObjectState`](#NonlinearAdaptiveRegion.ObjectState)                         | ObjectState property.                                                                                                                               |
| [`ObjectTags`](#NonlinearAdaptiveRegion.ObjectTags)                           | ObjectTags property.                                                                                                                                |
| [`Option`](#NonlinearAdaptiveRegion.Option)                                   | Gets or sets the Option.                                                                                                                            |
| [`Parent`](#NonlinearAdaptiveRegion.Parent)                                   | Parent property.                                                                                                                                    |
| [`Properties`](#NonlinearAdaptiveRegion.Properties)                           | Gets the list of properties for this object.                                                                                                        |
| [`RemeshLayerEnd`](#NonlinearAdaptiveRegion.RemeshLayerEnd)                   | Gets or sets the RemeshLayerEnd.                                                                                                                    |
| [`RemeshLayerFrequency`](#NonlinearAdaptiveRegion.RemeshLayerFrequency)       | Gets or sets the RemeshLayerFrequency.                                                                                                              |
| [`RemeshLayerStart`](#NonlinearAdaptiveRegion.RemeshLayerStart)               | Gets or sets the RemeshLayerStart.                                                                                                                  |
| [`SkewnessValue`](#NonlinearAdaptiveRegion.SkewnessValue)                     | Gets or sets the SkewnessValue.                                                                                                                     |
| [`StartTime`](#NonlinearAdaptiveRegion.StartTime)                             | Gets or sets the StartTime.                                                                                                                         |
| [`State`](#NonlinearAdaptiveRegion.State)                                     | State property.                                                                                                                                     |
| [`Suppressed`](#NonlinearAdaptiveRegion.Suppressed)                           | Gets or sets the Suppressed.                                                                                                                        |
| [`TimeRange`](#NonlinearAdaptiveRegion.TimeRange)                             | Gets or sets the TimeRange.                                                                                                                         |
| [`VisibleProperties`](#NonlinearAdaptiveRegion.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                                       |

<a id="property-detail"></a>

## Property detail

<a id="NonlinearAdaptiveRegion.AttachedRefs"></a>

### *property* NonlinearAdaptiveRegion.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.BufferElements"></a>

### *property* NonlinearAdaptiveRegion.BufferElements *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BufferElements.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.BufferLayers"></a>

### *property* NonlinearAdaptiveRegion.BufferLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BufferLayers.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.CheckAt"></a>

### *property* NonlinearAdaptiveRegion.CheckAt *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityUpdateType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CheckAt.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.CheckAtValue"></a>

### *property* NonlinearAdaptiveRegion.CheckAtValue *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CheckAtValue.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Children"></a>

### *property* NonlinearAdaptiveRegion.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.ClsId"></a>

### *property* NonlinearAdaptiveRegion.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Comments"></a>

### *property* NonlinearAdaptiveRegion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.CoordinateSystem"></a>

### *property* NonlinearAdaptiveRegion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Criterion"></a>

### *property* NonlinearAdaptiveRegion.Criterion *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityCriterionType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityCriterionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityCriterionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Criterion.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.DamageThreshold"></a>

### *property* NonlinearAdaptiveRegion.DamageThreshold *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Damage Threshold for Cohesive Zone Material. Default: 0. Valid range is between 0 and 1, exclusive of 1.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.DataModelObjectCategory"></a>

### *property* NonlinearAdaptiveRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.EndTime"></a>

### *property* NonlinearAdaptiveRegion.EndTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EndTime.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.EnergyCoefficient"></a>

### *property* NonlinearAdaptiveRegion.EnergyCoefficient *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EnergyCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.EnergyThreshold"></a>

### *property* NonlinearAdaptiveRegion.EnergyThreshold *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Energy Threshold for Cohesive Zone Material. Default: 0. Valid range is greater than equal to 0.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Figures"></a>

### *property* NonlinearAdaptiveRegion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GroupingFolder"></a>

### *property* NonlinearAdaptiveRegion.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.HexDomCheckAt"></a>

### *property* NonlinearAdaptiveRegion.HexDomCheckAt *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityUpdateType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HexDomCheckAt.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.HexDomCheckAtValue"></a>

### *property* NonlinearAdaptiveRegion.HexDomCheckAtValue *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HexDomCheckAtValue.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.HexDomEndTime"></a>

### *property* NonlinearAdaptiveRegion.HexDomEndTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HexDomEndTime.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.HexDomStartTime"></a>

### *property* NonlinearAdaptiveRegion.HexDomStartTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HexDomStartTime.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.HexDomTimeRange"></a>

### *property* NonlinearAdaptiveRegion.HexDomTimeRange *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityTimeRange.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HexDomTimeRange.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.IconName"></a>

### *property* NonlinearAdaptiveRegion.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Images"></a>

### *property* NonlinearAdaptiveRegion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.InternalObject"></a>

### *property* NonlinearAdaptiveRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSNonlinearAdaptivityAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.JacobianRatioValue"></a>

### *property* NonlinearAdaptiveRegion.JacobianRatioValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the JacobianRatioValue.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.LengthX"></a>

### *property* NonlinearAdaptiveRegion.LengthX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LengthX.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.LengthY"></a>

### *property* NonlinearAdaptiveRegion.LengthY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LengthY.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.LengthZ"></a>

### *property* NonlinearAdaptiveRegion.LengthZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LengthZ.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Location"></a>

### *property* NonlinearAdaptiveRegion.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.MaximumCornerAngle"></a>

### *property* NonlinearAdaptiveRegion.MaximumCornerAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumCornerAngle.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.MaximumValue"></a>

### *property* NonlinearAdaptiveRegion.MaximumValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Value for Maximum Equivalent Strain and Maximum Principal Strain. Default: -1. Valid range is greater than or equal to -1.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.MinimumNumberOfElements"></a>

### *property* NonlinearAdaptiveRegion.MinimumNumberOfElements *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Number Of Elements for Contact Elements. Default: 0. Valid range is greater than 0.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.MinimumValue"></a>

### *property* NonlinearAdaptiveRegion.MinimumValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Value for Maximum Equivalent Strain and Maximum Principal Strain. Default: -1. Valid range is greater than or equal to -1.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Name"></a>

### *property* NonlinearAdaptiveRegion.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.ObjectId"></a>

### *property* NonlinearAdaptiveRegion.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.ObjectState"></a>

### *property* NonlinearAdaptiveRegion.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.ObjectTags"></a>

### *property* NonlinearAdaptiveRegion.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Option"></a>

### *property* NonlinearAdaptiveRegion.Option *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityOptionType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityOptionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityOptionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Option.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Parent"></a>

### *property* NonlinearAdaptiveRegion.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Properties"></a>

### *property* NonlinearAdaptiveRegion.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.RemeshLayerEnd"></a>

### *property* NonlinearAdaptiveRegion.RemeshLayerEnd *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemeshLayerEnd.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.RemeshLayerFrequency"></a>

### *property* NonlinearAdaptiveRegion.RemeshLayerFrequency *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemeshLayerFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.RemeshLayerStart"></a>

### *property* NonlinearAdaptiveRegion.RemeshLayerStart *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemeshLayerStart.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.SkewnessValue"></a>

### *property* NonlinearAdaptiveRegion.SkewnessValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SkewnessValue.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.StartTime"></a>

### *property* NonlinearAdaptiveRegion.StartTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StartTime.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.State"></a>

### *property* NonlinearAdaptiveRegion.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Suppressed"></a>

### *property* NonlinearAdaptiveRegion.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.TimeRange"></a>

### *property* NonlinearAdaptiveRegion.TimeRange *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityTimeRange.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeRange.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.VisibleProperties"></a>

### *property* NonlinearAdaptiveRegion.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NonlinearAdaptiveRegion.Activate"></a>

### NonlinearAdaptiveRegion.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.AddComment"></a>

### NonlinearAdaptiveRegion.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.AddFigure"></a>

### NonlinearAdaptiveRegion.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.AddImage"></a>

### NonlinearAdaptiveRegion.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Copy"></a>

### NonlinearAdaptiveRegion.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.CopyTo"></a>

### NonlinearAdaptiveRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.CreateObjRef"></a>

### NonlinearAdaptiveRegion.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.CreateParameter"></a>

### NonlinearAdaptiveRegion.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Cut"></a>

### NonlinearAdaptiveRegion.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Delete"></a>

### NonlinearAdaptiveRegion.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Duplicate"></a>

### NonlinearAdaptiveRegion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Equals"></a>

### NonlinearAdaptiveRegion.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GetAPIName"></a>

### NonlinearAdaptiveRegion.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GetAllProperties"></a>

### NonlinearAdaptiveRegion.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GetChildren"></a>

### NonlinearAdaptiveRegion.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### NonlinearAdaptiveRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GetDetailsView"></a>

### NonlinearAdaptiveRegion.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GetEnumName"></a>

### NonlinearAdaptiveRegion.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GetHashCode"></a>

### NonlinearAdaptiveRegion.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GetIconFile"></a>

### NonlinearAdaptiveRegion.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GetLifetimeService"></a>

### NonlinearAdaptiveRegion.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GetObjectData"></a>

### NonlinearAdaptiveRegion.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GetParameter"></a>

### NonlinearAdaptiveRegion.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GetPath"></a>

### NonlinearAdaptiveRegion.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GetPropertyName"></a>

### NonlinearAdaptiveRegion.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GetPropertyValue"></a>

### NonlinearAdaptiveRegion.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GetVisibleProperties"></a>

### NonlinearAdaptiveRegion.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GetVisiblePropertyNames"></a>

### NonlinearAdaptiveRegion.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GroupAllSimilarChildren"></a>

### NonlinearAdaptiveRegion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.GroupSimilarObjects"></a>

### NonlinearAdaptiveRegion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.InitializeLifetimeService"></a>

### NonlinearAdaptiveRegion.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.IsPropertyEditable"></a>

### NonlinearAdaptiveRegion.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NonlinearAdaptiveRegion.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.IsPropertyVisible"></a>

### NonlinearAdaptiveRegion.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NonlinearAdaptiveRegion.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.Paste"></a>

### NonlinearAdaptiveRegion.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.PropertyByAPIName"></a>

### NonlinearAdaptiveRegion.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.PropertyById"></a>

### NonlinearAdaptiveRegion.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.PropertyByName"></a>

### NonlinearAdaptiveRegion.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.RemoveFromGroup"></a>

### NonlinearAdaptiveRegion.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="NonlinearAdaptiveRegion.RemoveParameter"></a>

### NonlinearAdaptiveRegion.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

