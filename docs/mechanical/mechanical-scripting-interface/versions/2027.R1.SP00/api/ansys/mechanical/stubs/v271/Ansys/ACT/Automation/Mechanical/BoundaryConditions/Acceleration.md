# `Acceleration`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Acceleration"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Acceleration(internalObject: Any)

<a id="Acceleration"></a>

### *class* Acceleration(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Acceleration.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Acceleration.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Acceleration.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Acceleration.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Acceleration.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Acceleration.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Acceleration.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Acceleration.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Acceleration.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Acceleration.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Acceleration.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Acceleration.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Acceleration.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#Acceleration.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#Acceleration.GetActivateAtLoadStep)         | Gets whether the acceleration is active at the specified load step.                         |
| [`GetAllProperties`](#Acceleration.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Acceleration.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Acceleration.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Acceleration.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Acceleration.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Acceleration.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Acceleration.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Acceleration.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Acceleration.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Acceleration.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Acceleration.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Acceleration.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Acceleration.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Acceleration.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Acceleration.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Acceleration.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Acceleration.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Acceleration.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Acceleration.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Acceleration.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Acceleration.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Acceleration.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Acceleration.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Acceleration.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Acceleration.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#Acceleration.SetActivateAtLoadStep)         | Sets whether the acceleration is active at the specified load step.                         |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`AbsoluteResult`](#Acceleration.AbsoluteResult)                           | Gets or sets the AbsoluteResult.                                                         |
| [`AppliedBy`](#Acceleration.AppliedBy)                                     | Gets or sets the AppliedBy.                                                              |
| [`AttachedRefs`](#Acceleration.AttachedRefs)                               | AttachedRefs property.                                                                   |
| [`BaseExcitation`](#Acceleration.BaseExcitation)                           | Gets or sets the BaseExcitation.                                                         |
| [`BoundaryCondition`](#Acceleration.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                      |
| [`Children`](#Acceleration.Children)                                       | Gets the list of children.                                                               |
| [`ClsId`](#Acceleration.ClsId)                                             | ClsId property.                                                                          |
| [`Comments`](#Acceleration.Comments)                                       | Gets the list of associated comments.                                                    |
| [`CoordinateSystem`](#CoordinateSystem)              | Gets or sets the CoordinateSystem.                                                       |
| [`DataModelObjectCategory`](#Acceleration.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                             |
| [`DefineBy`](#Acceleration.DefineBy)                                       | Gets or sets the DefineBy.                                                               |
| [`Direction`](#Acceleration.Direction)                                     | Gets or sets the Direction.                                                              |
| [`Figures`](#Acceleration.Figures)                                         | Gets the list of associated figures.                                                     |
| [`GroupingFolder`](#Acceleration.GroupingFolder)                           | GroupingFolder property.                                                                 |
| [`IconName`](#Acceleration.IconName)                                       | IconName property.                                                                       |
| [`Images`](#Acceleration.Images)                                           | Gets the list of associated images.                                                      |
| [`ImportableObjectSourceId`](#Acceleration.ImportableObjectSourceId)       | ImportableObjectSourceId property.                                                       |
| [`IndependentVariable`](#Acceleration.IndependentVariable)                 | Gets or sets the IndependentVariable.                                                    |
| [`InternalObject`](#Acceleration.InternalObject)                           | Gets the internal object. For advanced usage only.                                       |
| [`LoadVectorAssignment`](#Acceleration.LoadVectorAssignment)               | Gets or sets the LoadVectorAssignment.                                                   |
| [`LoadVectorNumber`](#Acceleration.LoadVectorNumber)                       | Gets or sets the load vector number for the acceleration.                                |
| [`LoadVectorNumberX`](#Acceleration.LoadVectorNumberX)                     | Gets or sets the load vector number for the acceleration component in the X direction.   |
| [`LoadVectorNumberY`](#Acceleration.LoadVectorNumberY)                     | Gets or sets the load vector number for the acceleration component in the Y direction.   |
| [`LoadVectorNumberZ`](#Acceleration.LoadVectorNumberZ)                     | Gets or sets the load vector number for the acceleration component in the Z direction.   |
| [`Location`](#Acceleration.Location)                                       | Gets the Location.                                                                       |
| [`Magnitude`](#Acceleration.Magnitude)                                     | Gets the Magnitude.                                                                      |
| [`MagnitudeImag`](#Acceleration.MagnitudeImag)                             | Gets the MagnitudeImag.                                                                  |
| [`Name`](#Acceleration.Name)                                               | Name property.                                                                           |
| [`NumberOfSegments`](#Acceleration.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                                                       |
| [`ObjectId`](#Acceleration.ObjectId)                                       | ObjectId property.                                                                       |
| [`ObjectState`](#Acceleration.ObjectState)                                 | ObjectState property.                                                                    |
| [`ObjectTags`](#Acceleration.ObjectTags)                                   | ObjectTags property.                                                                     |
| [`Parent`](#Acceleration.Parent)                                           | Parent property.                                                                         |
| [`PhaseAngle`](#Acceleration.PhaseAngle)                                   | Gets the PhaseAngle.                                                                     |
| [`Properties`](#Acceleration.Properties)                                   | Gets the list of properties for this object.                                             |
| [`ReadOnly`](#Acceleration.ReadOnly)                                       | Gets or sets the ReadOnly.                                                               |
| [`RpmSelection`](#Acceleration.RpmSelection)                               | Gets or sets the RPM value at which the load is applied.                                 |
| [`RpmVarying`](#Acceleration.RpmVarying)                                   | Gets or sets the RpmVarying.                                                             |
| [`State`](#Acceleration.State)                                             | State property.                                                                          |
| [`StepSelection`](#Acceleration.StepSelection)                             | Gets or sets the StepSelection.                                                          |
| [`StepSelectionRepresentation`](#Acceleration.StepSelectionRepresentation) | Gets or sets the string representation of the step numbers at which the load is applied. |
| [`StepVarying`](#Acceleration.StepVarying)                                 | Gets or sets the StepVarying.                                                            |
| [`Suppressed`](#Acceleration.Suppressed)                                   | Gets or sets the Suppressed.                                                             |
| [`TransferableObjectId`](#Acceleration.TransferableObjectId)               | TransferableObjectId property.                                                           |
| [`VisibleProperties`](#Acceleration.VisibleProperties)                     | Gets the list of properties that are visible for this object.                            |
| [`XComponent`](#Acceleration.XComponent)                                   | Gets the XComponent.                                                                     |
| [`YComponent`](#Acceleration.YComponent)                                   | Gets the YComponent.                                                                     |
| [`ZComponent`](#Acceleration.ZComponent)                                   | Gets the ZComponent.                                                                     |

<a id="property-detail"></a>

## Property detail

<a id="Acceleration.AbsoluteResult"></a>

### *property* Acceleration.AbsoluteResult *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AbsoluteResult.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.AppliedBy"></a>

### *property* Acceleration.AppliedBy *: Ansys.Mechanical.DataModel.Enums.AccelerationAppliedBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.AttachedRefs"></a>

### *property* Acceleration.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.BaseExcitation"></a>

### *property* Acceleration.BaseExcitation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BaseExcitation.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.BoundaryCondition"></a>

### *property* Acceleration.BoundaryCondition *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Children"></a>

### *property* Acceleration.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.ClsId"></a>

### *property* Acceleration.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Comments"></a>

### *property* Acceleration.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.CoordinateSystem"></a>

### *property* Acceleration.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.DataModelObjectCategory"></a>

### *property* Acceleration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.DefineBy"></a>

### *property* Acceleration.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Direction"></a>

### *property* Acceleration.Direction *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Figures"></a>

### *property* Acceleration.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GroupingFolder"></a>

### *property* Acceleration.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.IconName"></a>

### *property* Acceleration.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Images"></a>

### *property* Acceleration.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.ImportableObjectSourceId"></a>

### *property* Acceleration.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.IndependentVariable"></a>

### *property* Acceleration.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.InternalObject"></a>

### *property* Acceleration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAccelerationAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.LoadVectorAssignment"></a>

### *property* Acceleration.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.LoadVectorNumber"></a>

### *property* Acceleration.LoadVectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the acceleration.
When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

This property is unsupported when DefineBy is set to Components;
the component-based properties LoadVectorNumberX, LoadVectorNumberY,
and LoadVectorNumberZ should be used instead.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.LoadVectorNumberX"></a>

### *property* Acceleration.LoadVectorNumberX *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the acceleration component in the X direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.LoadVectorNumberY"></a>

### *property* Acceleration.LoadVectorNumberY *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the acceleration component in the Y direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.LoadVectorNumberZ"></a>

### *property* Acceleration.LoadVectorNumberZ *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the acceleration component in the Z direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Location"></a>

### *property* Acceleration.Location *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Magnitude"></a>

### *property* Acceleration.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.MagnitudeImag"></a>

### *property* Acceleration.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Name"></a>

### *property* Acceleration.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.NumberOfSegments"></a>

### *property* Acceleration.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.ObjectId"></a>

### *property* Acceleration.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.ObjectState"></a>

### *property* Acceleration.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.ObjectTags"></a>

### *property* Acceleration.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Parent"></a>

### *property* Acceleration.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.PhaseAngle"></a>

### *property* Acceleration.PhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Properties"></a>

### *property* Acceleration.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.ReadOnly"></a>

### *property* Acceleration.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.RpmSelection"></a>

### *property* Acceleration.RpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM value at which the load is applied.
: An exception is thrown if MultiStep is not True, StepVarying is not Yes, or HarmonicMultiStepType is not RPM.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.RpmVarying"></a>

### *property* Acceleration.RpmVarying *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmVarying.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.State"></a>

### *property* Acceleration.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.StepSelection"></a>

### *property* Acceleration.StepSelection *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StepSelection.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.StepSelectionRepresentation"></a>

### *property* Acceleration.StepSelectionRepresentation *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the string representation of the step numbers at which the load is applied.
An exception is thrown if any of the below conditions are met:
1. MultiStep is not True.
2. StepVarying is not Yes.
3. HarmonicMultiStepType is not Load_Step.
4. The input format is invalid.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.StepVarying"></a>

### *property* Acceleration.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StepVarying.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Suppressed"></a>

### *property* Acceleration.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.TransferableObjectId"></a>

### *property* Acceleration.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.VisibleProperties"></a>

### *property* Acceleration.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.XComponent"></a>

### *property* Acceleration.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.YComponent"></a>

### *property* Acceleration.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.ZComponent"></a>

### *property* Acceleration.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Acceleration.Activate"></a>

### Acceleration.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.AddComment"></a>

### Acceleration.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.AddFigure"></a>

### Acceleration.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.AddImage"></a>

### Acceleration.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Copy"></a>

### Acceleration.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.CopyTo"></a>

### Acceleration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.CreateObjRef"></a>

### Acceleration.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.CreateParameter"></a>

### Acceleration.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Cut"></a>

### Acceleration.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Delete"></a>

### Acceleration.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Duplicate"></a>

### Acceleration.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Equals"></a>

### Acceleration.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetAPIName"></a>

### Acceleration.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetActivateAtLoadStep"></a>

### Acceleration.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the acceleration is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetAllProperties"></a>

### Acceleration.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetChildren"></a>

### Acceleration.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Acceleration.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetDetailsView"></a>

### Acceleration.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetEnumName"></a>

### Acceleration.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetHashCode"></a>

### Acceleration.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetIconFile"></a>

### Acceleration.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetLifetimeService"></a>

### Acceleration.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetObjectData"></a>

### Acceleration.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetParameter"></a>

### Acceleration.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetPath"></a>

### Acceleration.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetPropertyName"></a>

### Acceleration.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetPropertyValue"></a>

### Acceleration.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetVisibleProperties"></a>

### Acceleration.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GetVisiblePropertyNames"></a>

### Acceleration.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GroupAllSimilarChildren"></a>

### Acceleration.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.GroupSimilarObjects"></a>

### Acceleration.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.InitializeLifetimeService"></a>

### Acceleration.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.IsPropertyEditable"></a>

### Acceleration.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Acceleration.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.IsPropertyVisible"></a>

### Acceleration.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Acceleration.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.Paste"></a>

### Acceleration.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.PropertyByAPIName"></a>

### Acceleration.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.PropertyById"></a>

### Acceleration.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.PropertyByName"></a>

### Acceleration.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.RemoveFromGroup"></a>

### Acceleration.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.RemoveParameter"></a>

### Acceleration.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Acceleration.SetActivateAtLoadStep"></a>

### Acceleration.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the acceleration is active at the specified load step.

<!-- !! processed by numpydoc !! -->

