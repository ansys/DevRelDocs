# `Force`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Force"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Force(internalObject: Any)

<a id="Force"></a>

### *class* Force(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Force.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Force.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#Force.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#Force.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#Force.AddImage)                                             | Creates a new child Image.                                                                  |
| [`Copy`](#Force.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Force.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Force.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Force.CreateParameter)                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Force.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Force.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#Force.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Force.Equals)                                                 | Equals method.                                                                              |
| [`GetAPIName`](#Force.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#Force.GetActivateAtLoadStep)                   | Gets whether the force is active at the specified load step.                                |
| [`GetAllProperties`](#Force.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#Force.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetComponentActivateAtLoadStep`](#Force.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                                      |
| [`GetDetailsView`](#Force.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Force.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#Force.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#Force.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Force.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Force.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#Force.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Force.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#Force.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Force.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Force.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Force.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Force.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Force.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Force.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Force.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Force.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#Force.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#Force.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#Force.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#Force.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#Force.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Force.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Force.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#Force.SetActivateAtLoadStep)                   | Sets whether the force is active at the specified load step.                                |
| [`SetComponentActivateAtLoadStep`](#Force.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                                      |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`AppliedBy`](#Force.AppliedBy)                                     | Gets or sets the AppliedBy.                                                                 |
| [`AttachedRefs`](#Force.AttachedRefs)                               | AttachedRefs property.                                                                      |
| [`Children`](#Force.Children)                                       | Gets the list of children.                                                                  |
| [`ClsId`](#Force.ClsId)                                             | ClsId property.                                                                             |
| [`Comments`](#Force.Comments)                                       | Gets the list of associated comments.                                                       |
| [`CoordinateSystem`](#CoordinateSystem)       | Gets or sets the CoordinateSystem.                                                          |
| [`DataModelObjectCategory`](#Force.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                |
| [`DefineBy`](#Force.DefineBy)                                       | Gets or sets the DefineBy.                                                                  |
| [`Direction`](#Force.Direction)                                     | Gets or sets the Direction.                                                                 |
| [`DivideLoadByNodes`](#Force.DivideLoadByNodes)                     | Gets or sets the DivideLoadByNodes.                                                         |
| [`DynamicRelaxationBehavior`](#Force.DynamicRelaxationBehavior)     | Gets or sets the DynamicRelaxationBehavior.                                                 |
| [`Figures`](#Force.Figures)                                         | Gets the list of associated figures.                                                        |
| [`GraphControlsXAxis`](#Force.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                                                        |
| [`GroupingFolder`](#Force.GroupingFolder)                           | GroupingFolder property.                                                                    |
| [`HarmonicIndex`](#Force.HarmonicIndex)                             | Gets or sets the HarmonicIndex.                                                             |
| [`IconName`](#Force.IconName)                                       | IconName property.                                                                          |
| [`Images`](#Force.Images)                                           | Gets the list of associated images.                                                         |
| [`ImportableObjectSourceId`](#Force.ImportableObjectSourceId)       | ImportableObjectSourceId property.                                                          |
| [`IndependentVariable`](#Force.IndependentVariable)                 | Gets or sets the IndependentVariable.                                                       |
| [`InternalObject`](#Force.InternalObject)                           | Gets the internal object. For advanced usage only.                                          |
| [`LoadStepVarying`](#Force.LoadStepVarying)                         | Gets or sets the LoadStepVarying.                                                           |
| [`LoadVectorAssignment`](#Force.LoadVectorAssignment)               | Gets or sets the LoadVectorAssignment.                                                      |
| [`LoadVectorNumber`](#Force.LoadVectorNumber)                       | Gets or sets the load vector number for the force.                                          |
| [`LoadVectorNumberImaginary`](#Force.LoadVectorNumberImaginary)     | Gets or sets the load vector number for the imaginary part of the force.                    |
| [`LoadVectorNumberX`](#Force.LoadVectorNumberX)                     | Gets or sets the load vector number for the real part of the force in the X direction.      |
| [`LoadVectorNumberXImaginary`](#Force.LoadVectorNumberXImaginary)   | Gets or sets the load vector number for the imaginary part of the force in the X direction. |
| [`LoadVectorNumberY`](#Force.LoadVectorNumberY)                     | Gets or sets the load vector number for the real part of the force in the Y direction.      |
| [`LoadVectorNumberYImaginary`](#Force.LoadVectorNumberYImaginary)   | Gets or sets the load vector number for the imaginary part of the force in the Y direction. |
| [`LoadVectorNumberZ`](#Force.LoadVectorNumberZ)                     | Gets or sets the load vector number for the real part of the force in the Z direction.      |
| [`LoadVectorNumberZImaginary`](#Force.LoadVectorNumberZImaginary)   | Gets or sets the load vector number for the imaginary part of the force in the Z direction. |
| [`Location`](#Force.Location)                                       | Gets or sets the Location.                                                                  |
| [`Magnitude`](#Force.Magnitude)                                     | Gets the Magnitude.                                                                         |
| [`MagnitudeImag`](#Force.MagnitudeImag)                             | Gets the MagnitudeImag.                                                                     |
| [`Name`](#Force.Name)                                               | Name property.                                                                              |
| [`NonCyclicLoadingType`](#Force.NonCyclicLoadingType)               | Gets or sets the NonCyclicLoadingType.                                                      |
| [`NumberOfSegments`](#Force.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                                                          |
| [`ObjectId`](#Force.ObjectId)                                       | ObjectId property.                                                                          |
| [`ObjectState`](#Force.ObjectState)                                 | ObjectState property.                                                                       |
| [`ObjectTags`](#Force.ObjectTags)                                   | ObjectTags property.                                                                        |
| [`Parent`](#Force.Parent)                                           | Parent property.                                                                            |
| [`PhaseAngle`](#Force.PhaseAngle)                                   | Gets the PhaseAngle.                                                                        |
| [`Properties`](#Force.Properties)                                   | Gets the list of properties for this object.                                                |
| [`RangeMaximum`](#Force.RangeMaximum)                               | Gets or sets the RangeMaximum.                                                              |
| [`RangeMinimum`](#Force.RangeMinimum)                               | Gets or sets the RangeMinimum.                                                              |
| [`ReadOnly`](#Force.ReadOnly)                                       | Gets or sets the ReadOnly.                                                                  |
| [`RpmSelection`](#Force.RpmSelection)                               | Gets or sets the RPM value at which the load is applied.                                    |
| [`RpmVarying`](#Force.RpmVarying)                                   | Gets or sets the RpmVarying.                                                                |
| [`SectorNumber`](#Force.SectorNumber)                               | Gets or sets the SectorNumber.                                                              |
| [`SharedRefBody`](#Force.SharedRefBody)                             | Gets or sets the SharedRefBody.                                                             |
| [`State`](#Force.State)                                             | State property.                                                                             |
| [`StepSelection`](#Force.StepSelection)                             | Gets or sets the StepSelection.                                                             |
| [`StepSelectionRepresentation`](#Force.StepSelectionRepresentation) | Gets or sets the string representation of the step numbers at which the load is applied.    |
| [`StepVarying`](#Force.StepVarying)                                 | Gets or sets the StepVarying.                                                               |
| [`Suppressed`](#Force.Suppressed)                                   | Gets or sets the Suppressed.                                                                |
| [`TransferableObjectId`](#Force.TransferableObjectId)               | TransferableObjectId property.                                                              |
| [`VisibleProperties`](#Force.VisibleProperties)                     | Gets the list of properties that are visible for this object.                               |
| [`XComponent`](#Force.XComponent)                                   | Gets the XComponent.                                                                        |
| [`XComponentImag`](#Force.XComponentImag)                           | Gets the XComponentImag.                                                                    |
| [`XPhaseAngle`](#Force.XPhaseAngle)                                 | Gets the XPhaseAngle.                                                                       |
| [`YComponent`](#Force.YComponent)                                   | Gets the YComponent.                                                                        |
| [`YComponentImag`](#Force.YComponentImag)                           | Gets or sets the YComponentImag.                                                            |
| [`YPhaseAngle`](#Force.YPhaseAngle)                                 | Gets the YPhaseAngle.                                                                       |
| [`ZComponent`](#Force.ZComponent)                                   | Gets the ZComponent.                                                                        |
| [`ZComponentImag`](#Force.ZComponentImag)                           | Gets or sets the ZComponentImag.                                                            |
| [`ZPhaseAngle`](#Force.ZPhaseAngle)                                 | Gets the ZPhaseAngle.                                                                       |

<a id="property-detail"></a>

## Property detail

<a id="Force.AppliedBy"></a>

### *property* Force.AppliedBy *: [Ansys.Mechanical.DataModel.Enums.LoadAppliedBy](../../../../Mechanical/DataModel/Enums/LoadAppliedBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadAppliedBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Force.AttachedRefs"></a>

### *property* Force.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Force.Children"></a>

### *property* Force.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Force.ClsId"></a>

### *property* Force.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Force.Comments"></a>

### *property* Force.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Force.CoordinateSystem"></a>

### *property* Force.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Force.DataModelObjectCategory"></a>

### *property* Force.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Force.DefineBy"></a>

### *property* Force.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="Force.Direction"></a>

### *property* Force.Direction *: [Ansys.ACT.Math.Vector3D](../../../Math/Vector3D.md#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="Force.DivideLoadByNodes"></a>

### *property* Force.DivideLoadByNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DivideLoadByNodes.

<!-- !! processed by numpydoc !! -->

<a id="Force.DynamicRelaxationBehavior"></a>

### *property* Force.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](../../../../Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Force.Figures"></a>

### *property* Force.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Force.GraphControlsXAxis"></a>

### *property* Force.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="Force.GroupingFolder"></a>

### *property* Force.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Force.HarmonicIndex"></a>

### *property* Force.HarmonicIndex *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="Force.IconName"></a>

### *property* Force.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Force.Images"></a>

### *property* Force.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Force.ImportableObjectSourceId"></a>

### *property* Force.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Force.IndependentVariable"></a>

### *property* Force.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Force.InternalObject"></a>

### *property* Force.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Force.LoadStepVarying"></a>

### *property* Force.LoadStepVarying *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepVarying.

<!-- !! processed by numpydoc !! -->

<a id="Force.LoadVectorAssignment"></a>

### *property* Force.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="Force.LoadVectorNumber"></a>

### *property* Force.LoadVectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the force.
When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

This property is unsupported when DefineBy is set to Components
or ComplexComponents;
the component-based properties LoadVectorNumberX, LoadVectorNumberY,
and LoadVectorNumberZ should be used instead.

<!-- !! processed by numpydoc !! -->

<a id="Force.LoadVectorNumberImaginary"></a>

### *property* Force.LoadVectorNumberImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the force.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Force.LoadVectorNumberX"></a>

### *property* Force.LoadVectorNumberX *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the force in the X direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Force.LoadVectorNumberXImaginary"></a>

### *property* Force.LoadVectorNumberXImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the force in the X direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Force.LoadVectorNumberY"></a>

### *property* Force.LoadVectorNumberY *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the force in the Y direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Force.LoadVectorNumberYImaginary"></a>

### *property* Force.LoadVectorNumberYImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the force in the Y direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Force.LoadVectorNumberZ"></a>

### *property* Force.LoadVectorNumberZ *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the force in the Z direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Force.LoadVectorNumberZImaginary"></a>

### *property* Force.LoadVectorNumberZImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the force in the Z direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Force.Location"></a>

### *property* Force.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Force.Magnitude"></a>

### *property* Force.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Force.MagnitudeImag"></a>

### *property* Force.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

<a id="Force.Name"></a>

### *property* Force.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Force.NonCyclicLoadingType"></a>

### *property* Force.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonCyclicLoadingType.

<!-- !! processed by numpydoc !! -->

<a id="Force.NumberOfSegments"></a>

### *property* Force.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Force.ObjectId"></a>

### *property* Force.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Force.ObjectState"></a>

### *property* Force.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Force.ObjectTags"></a>

### *property* Force.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Force.Parent"></a>

### *property* Force.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Force.PhaseAngle"></a>

### *property* Force.PhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Force.Properties"></a>

### *property* Force.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Force.RangeMaximum"></a>

### *property* Force.RangeMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Force.RangeMinimum"></a>

### *property* Force.RangeMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Force.ReadOnly"></a>

### *property* Force.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Force.RpmSelection"></a>

### *property* Force.RpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM value at which the load is applied.
: An exception is thrown if MultiStep is not True, StepVarying is not Yes, or HarmonicMultiStepType is not RPM.

<!-- !! processed by numpydoc !! -->

<a id="Force.RpmVarying"></a>

### *property* Force.RpmVarying *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmVarying.

<!-- !! processed by numpydoc !! -->

<a id="Force.SectorNumber"></a>

### *property* Force.SectorNumber *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="Force.SharedRefBody"></a>

### *property* Force.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Force.State"></a>

### *property* Force.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Force.StepSelection"></a>

### *property* Force.StepSelection *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StepSelection.

<!-- !! processed by numpydoc !! -->

<a id="Force.StepSelectionRepresentation"></a>

### *property* Force.StepSelectionRepresentation *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the string representation of the step numbers at which the load is applied.
An exception is thrown if any of the below conditions are met:
1. MultiStep is not True.
2. StepVarying is not Yes.
3. HarmonicMultiStepType is not Load_Step.
4. The input format is invalid.

<!-- !! processed by numpydoc !! -->

<a id="Force.StepVarying"></a>

### *property* Force.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StepVarying.

<!-- !! processed by numpydoc !! -->

<a id="Force.Suppressed"></a>

### *property* Force.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Force.TransferableObjectId"></a>

### *property* Force.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Force.VisibleProperties"></a>

### *property* Force.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Force.XComponent"></a>

### *property* Force.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="Force.XComponentImag"></a>

### *property* Force.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Force.XPhaseAngle"></a>

### *property* Force.XPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Force.YComponent"></a>

### *property* Force.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="Force.YComponentImag"></a>

### *property* Force.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Force.YPhaseAngle"></a>

### *property* Force.YPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Force.ZComponent"></a>

### *property* Force.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="Force.ZComponentImag"></a>

### *property* Force.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Force.ZPhaseAngle"></a>

### *property* Force.ZPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Force.Activate"></a>

### Force.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Force.AddComment"></a>

### Force.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Force.AddFigure"></a>

### Force.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Force.AddImage"></a>

### Force.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Force.Copy"></a>

### Force.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Force.CopyTo"></a>

### Force.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Force.CreateObjRef"></a>

### Force.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Force.CreateParameter"></a>

### Force.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Force.Cut"></a>

### Force.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Force.Delete"></a>

### Force.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Force.Duplicate"></a>

### Force.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Force.Equals"></a>

### Force.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetAPIName"></a>

### Force.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetActivateAtLoadStep"></a>

### Force.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the force is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetAllProperties"></a>

### Force.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetChildren"></a>

### Force.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Force.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetComponentActivateAtLoadStep"></a>

### Force.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetDetailsView"></a>

### Force.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetEnumName"></a>

### Force.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Force.GetHashCode"></a>

### Force.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetIconFile"></a>

### Force.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetLifetimeService"></a>

### Force.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetObjectData"></a>

### Force.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetParameter"></a>

### Force.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetPath"></a>

### Force.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetPropertyName"></a>

### Force.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetPropertyValue"></a>

### Force.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetVisibleProperties"></a>

### Force.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetVisiblePropertyNames"></a>

### Force.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Force.GroupAllSimilarChildren"></a>

### Force.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Force.GroupSimilarObjects"></a>

### Force.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Force.InitializeLifetimeService"></a>

### Force.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Force.IsPropertyEditable"></a>

### Force.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Force.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Force.IsPropertyVisible"></a>

### Force.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Force.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Force.Paste"></a>

### Force.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Force.PromoteToNamedSelection"></a>

### Force.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Force.PropertyByAPIName"></a>

### Force.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Force.PropertyById"></a>

### Force.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Force.PropertyByName"></a>

### Force.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Force.RemoveFromGroup"></a>

### Force.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Force.RemoveParameter"></a>

### Force.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Force.SetActivateAtLoadStep"></a>

### Force.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the force is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Force.SetComponentActivateAtLoadStep"></a>

### Force.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

