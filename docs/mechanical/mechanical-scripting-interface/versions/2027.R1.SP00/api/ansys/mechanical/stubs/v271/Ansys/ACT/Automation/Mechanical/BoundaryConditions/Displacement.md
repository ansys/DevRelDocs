# `Displacement`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Displacement"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Displacement(internalObject: Any)

<a id="Displacement"></a>

### *class* Displacement(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Displacement.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Displacement.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#Displacement.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#Displacement.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#Displacement.AddImage)                                             | Creates a new child Image.                                                                  |
| [`Copy`](#Displacement.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Displacement.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Displacement.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Displacement.CreateParameter)                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Displacement.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Displacement.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#Displacement.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Displacement.Equals)                                                 | Equals method.                                                                              |
| [`GetAPIName`](#Displacement.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#Displacement.GetActivateAtLoadStep)                   | Gets whether the displacement is active at the specified load step.                         |
| [`GetAllProperties`](#Displacement.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#Displacement.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetComponentActivateAtLoadStep`](#Displacement.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                                      |
| [`GetDetailsView`](#Displacement.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Displacement.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#Displacement.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#Displacement.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Displacement.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Displacement.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#Displacement.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Displacement.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#Displacement.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Displacement.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Displacement.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Displacement.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Displacement.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Displacement.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Displacement.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Displacement.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Displacement.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#Displacement.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#Displacement.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#Displacement.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#Displacement.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#Displacement.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Displacement.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Displacement.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#Displacement.SetActivateAtLoadStep)                   | Sets whether the displacement is active at the specified load step.                         |
| [`SetComponentActivateAtLoadStep`](#Displacement.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                                      |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`AbsoluteResult`](#Displacement.AbsoluteResult)                                   | Gets or sets the AbsoluteResult.                                                         |
| [`AttachedRefs`](#Displacement.AttachedRefs)                                       | AttachedRefs property.                                                                   |
| [`BaseExcitation`](#Displacement.BaseExcitation)                                   | Gets or sets the BaseExcitation.                                                         |
| [`BoundaryCondition`](#Displacement.BoundaryCondition)                             | Gets or sets the BoundaryCondition.                                                      |
| [`Children`](#Displacement.Children)                                               | Gets the list of children.                                                               |
| [`ClsId`](#Displacement.ClsId)                                                     | ClsId property.                                                                          |
| [`Comments`](#Displacement.Comments)                                               | Gets the list of associated comments.                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                      | Gets or sets the CoordinateSystem.                                                       |
| [`DataModelObjectCategory`](#Displacement.DataModelObjectCategory)                 | Gets the current DataModelObject's category.                                             |
| [`DefineBy`](#Displacement.DefineBy)                                               | Gets or sets the DefineBy.                                                               |
| [`Direction`](#Displacement.Direction)                                             | Gets or sets the Direction.                                                              |
| [`Distance`](#Displacement.Distance)                                               | Gets the Distance.                                                                       |
| [`DynamicRelaxationBehavior`](#Displacement.DynamicRelaxationBehavior)             | Gets or sets the DynamicRelaxationBehavior.                                              |
| [`Figures`](#Displacement.Figures)                                                 | Gets the list of associated figures.                                                     |
| [`GraphControlsXAxis`](#Displacement.GraphControlsXAxis)                           | Gets or sets the GraphControlsXAxis.                                                     |
| [`GroupingFolder`](#Displacement.GroupingFolder)                                   | GroupingFolder property.                                                                 |
| [`IconName`](#Displacement.IconName)                                               | IconName property.                                                                       |
| [`Images`](#Displacement.Images)                                                   | Gets the list of associated images.                                                      |
| [`ImportableObjectSourceId`](#Displacement.ImportableObjectSourceId)               | ImportableObjectSourceId property.                                                       |
| [`IndependentVariable`](#Displacement.IndependentVariable)                         | Gets or sets the IndependentVariable.                                                    |
| [`InternalObject`](#Displacement.InternalObject)                                   | Gets the internal object. For advanced usage only.                                       |
| [`LoadStepVarying`](#Displacement.LoadStepVarying)                                 | Gets or sets the LoadStepVarying.                                                        |
| [`Location`](#Displacement.Location)                                               | Gets or sets the Location.                                                               |
| [`MagnitudeImag`](#Displacement.MagnitudeImag)                                     | Gets the MagnitudeImag.                                                                  |
| [`Name`](#Displacement.Name)                                                       | Name property.                                                                           |
| [`NumberOfSegments`](#Displacement.NumberOfSegments)                               | Gets or sets the NumberOfSegments.                                                       |
| [`ObjectId`](#Displacement.ObjectId)                                               | ObjectId property.                                                                       |
| [`ObjectState`](#Displacement.ObjectState)                                         | ObjectState property.                                                                    |
| [`ObjectTags`](#Displacement.ObjectTags)                                           | ObjectTags property.                                                                     |
| [`Parent`](#Displacement.Parent)                                                   | Parent property.                                                                         |
| [`PhaseAngle`](#Displacement.PhaseAngle)                                           | Gets the PhaseAngle.                                                                     |
| [`Properties`](#Displacement.Properties)                                           | Gets the list of properties for this object.                                             |
| [`RangeMaximum`](#Displacement.RangeMaximum)                                       | Gets or sets the RangeMaximum.                                                           |
| [`RangeMinimum`](#Displacement.RangeMinimum)                                       | Gets or sets the RangeMinimum.                                                           |
| [`ReadOnly`](#Displacement.ReadOnly)                                               | Gets or sets the ReadOnly.                                                               |
| [`ReverseDirectionForInverseSteps`](#Displacement.ReverseDirectionForInverseSteps) | Gets or sets the ReverseDirectionForInverseSteps.                                        |
| [`RpmSelection`](#Displacement.RpmSelection)                                       | Gets or sets the RPM value at which the load is applied.                                 |
| [`RpmVarying`](#Displacement.RpmVarying)                                           | Gets or sets the RpmVarying.                                                             |
| [`SharedRefBody`](#Displacement.SharedRefBody)                                     | Gets or sets the SharedRefBody.                                                          |
| [`State`](#Displacement.State)                                                     | State property.                                                                          |
| [`StepSelection`](#Displacement.StepSelection)                                     | Gets or sets the StepSelection.                                                          |
| [`StepSelectionRepresentation`](#Displacement.StepSelectionRepresentation)         | Gets or sets the string representation of the step numbers at which the load is applied. |
| [`StepVarying`](#Displacement.StepVarying)                                         | Gets or sets the StepVarying.                                                            |
| [`Suppressed`](#Displacement.Suppressed)                                           | Gets or sets the Suppressed.                                                             |
| [`TransferableObjectId`](#Displacement.TransferableObjectId)                       | TransferableObjectId property.                                                           |
| [`VisibleProperties`](#Displacement.VisibleProperties)                             | Gets the list of properties that are visible for this object.                            |
| [`XComponent`](#Displacement.XComponent)                                           | Gets the XComponent.                                                                     |
| [`XComponentImag`](#Displacement.XComponentImag)                                   | Gets the XComponentImag.                                                                 |
| [`XPhaseAngle`](#Displacement.XPhaseAngle)                                         | Gets the XPhaseAngle.                                                                    |
| [`XYZFunctionCoordinateSystem`](#Displacement.XYZFunctionCoordinateSystem)         | Gets or sets the XYZFunctionCoordinateSystem.                                            |
| [`YComponent`](#Displacement.YComponent)                                           | Gets the YComponent.                                                                     |
| [`YComponentImag`](#Displacement.YComponentImag)                                   | Gets the YComponentImag.                                                                 |
| [`YPhaseAngle`](#Displacement.YPhaseAngle)                                         | Gets the YPhaseAngle.                                                                    |
| [`ZComponent`](#Displacement.ZComponent)                                           | Gets the ZComponent.                                                                     |
| [`ZComponentImag`](#Displacement.ZComponentImag)                                   | Gets the ZComponentImag.                                                                 |
| [`ZPhaseAngle`](#Displacement.ZPhaseAngle)                                         | Gets the ZPhaseAngle.                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="Displacement.AbsoluteResult"></a>

### *property* Displacement.AbsoluteResult *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AbsoluteResult.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.AttachedRefs"></a>

### *property* Displacement.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.BaseExcitation"></a>

### *property* Displacement.BaseExcitation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BaseExcitation.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.BoundaryCondition"></a>

### *property* Displacement.BoundaryCondition *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Children"></a>

### *property* Displacement.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.ClsId"></a>

### *property* Displacement.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Comments"></a>

### *property* Displacement.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.CoordinateSystem"></a>

### *property* Displacement.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.DataModelObjectCategory"></a>

### *property* Displacement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.DefineBy"></a>

### *property* Displacement.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Direction"></a>

### *property* Displacement.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Distance"></a>

### *property* Displacement.Distance *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Distance.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.DynamicRelaxationBehavior"></a>

### *property* Displacement.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](../../../../Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Figures"></a>

### *property* Displacement.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GraphControlsXAxis"></a>

### *property* Displacement.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GroupingFolder"></a>

### *property* Displacement.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.IconName"></a>

### *property* Displacement.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Images"></a>

### *property* Displacement.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.ImportableObjectSourceId"></a>

### *property* Displacement.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.IndependentVariable"></a>

### *property* Displacement.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.InternalObject"></a>

### *property* Displacement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.LoadStepVarying"></a>

### *property* Displacement.LoadStepVarying *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepVarying.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Location"></a>

### *property* Displacement.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.MagnitudeImag"></a>

### *property* Displacement.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Name"></a>

### *property* Displacement.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.NumberOfSegments"></a>

### *property* Displacement.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.ObjectId"></a>

### *property* Displacement.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.ObjectState"></a>

### *property* Displacement.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.ObjectTags"></a>

### *property* Displacement.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Parent"></a>

### *property* Displacement.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.PhaseAngle"></a>

### *property* Displacement.PhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Properties"></a>

### *property* Displacement.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.RangeMaximum"></a>

### *property* Displacement.RangeMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.RangeMinimum"></a>

### *property* Displacement.RangeMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.ReadOnly"></a>

### *property* Displacement.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.ReverseDirectionForInverseSteps"></a>

### *property* Displacement.ReverseDirectionForInverseSteps *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReverseDirectionForInverseSteps.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.RpmSelection"></a>

### *property* Displacement.RpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM value at which the load is applied.
: An exception is thrown if MultiStep is not True, StepVarying is not Yes, or HarmonicMultiStepType is not RPM.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.RpmVarying"></a>

### *property* Displacement.RpmVarying *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmVarying.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.SharedRefBody"></a>

### *property* Displacement.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.State"></a>

### *property* Displacement.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.StepSelection"></a>

### *property* Displacement.StepSelection *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StepSelection.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.StepSelectionRepresentation"></a>

### *property* Displacement.StepSelectionRepresentation *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the string representation of the step numbers at which the load is applied.
An exception is thrown if any of the below conditions are met:
1. MultiStep is not True.
2. StepVarying is not Yes.
3. HarmonicMultiStepType is not Load_Step.
4. The input format is invalid.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.StepVarying"></a>

### *property* Displacement.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StepVarying.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Suppressed"></a>

### *property* Displacement.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.TransferableObjectId"></a>

### *property* Displacement.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.VisibleProperties"></a>

### *property* Displacement.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.XComponent"></a>

### *property* Displacement.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.XComponentImag"></a>

### *property* Displacement.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.XPhaseAngle"></a>

### *property* Displacement.XPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.XYZFunctionCoordinateSystem"></a>

### *property* Displacement.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.YComponent"></a>

### *property* Displacement.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.YComponentImag"></a>

### *property* Displacement.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.YPhaseAngle"></a>

### *property* Displacement.YPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.ZComponent"></a>

### *property* Displacement.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.ZComponentImag"></a>

### *property* Displacement.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.ZPhaseAngle"></a>

### *property* Displacement.ZPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Displacement.Activate"></a>

### Displacement.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.AddComment"></a>

### Displacement.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.AddFigure"></a>

### Displacement.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.AddImage"></a>

### Displacement.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Copy"></a>

### Displacement.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.CopyTo"></a>

### Displacement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.CreateObjRef"></a>

### Displacement.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.CreateParameter"></a>

### Displacement.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Cut"></a>

### Displacement.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Delete"></a>

### Displacement.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Duplicate"></a>

### Displacement.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Equals"></a>

### Displacement.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetAPIName"></a>

### Displacement.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetActivateAtLoadStep"></a>

### Displacement.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the displacement is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetAllProperties"></a>

### Displacement.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetChildren"></a>

### Displacement.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Displacement.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetComponentActivateAtLoadStep"></a>

### Displacement.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetDetailsView"></a>

### Displacement.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetEnumName"></a>

### Displacement.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetHashCode"></a>

### Displacement.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetIconFile"></a>

### Displacement.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetLifetimeService"></a>

### Displacement.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetObjectData"></a>

### Displacement.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetParameter"></a>

### Displacement.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetPath"></a>

### Displacement.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetPropertyName"></a>

### Displacement.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetPropertyValue"></a>

### Displacement.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetVisibleProperties"></a>

### Displacement.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GetVisiblePropertyNames"></a>

### Displacement.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GroupAllSimilarChildren"></a>

### Displacement.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.GroupSimilarObjects"></a>

### Displacement.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.InitializeLifetimeService"></a>

### Displacement.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.IsPropertyEditable"></a>

### Displacement.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Displacement.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.IsPropertyVisible"></a>

### Displacement.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Displacement.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.Paste"></a>

### Displacement.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.PromoteToNamedSelection"></a>

### Displacement.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.PropertyByAPIName"></a>

### Displacement.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Displacement.PropertyById"></a>

### Displacement.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.PropertyByName"></a>

### Displacement.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.RemoveFromGroup"></a>

### Displacement.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.RemoveParameter"></a>

### Displacement.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.SetActivateAtLoadStep"></a>

### Displacement.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the displacement is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Displacement.SetComponentActivateAtLoadStep"></a>

### Displacement.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

