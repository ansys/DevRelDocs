# `NodalForce`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalForce"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalForce(internalObject: Any)

<a id="NodalForce"></a>

### *class* NodalForce(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a NodalDisplacement.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#NodalForce.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#NodalForce.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#NodalForce.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#NodalForce.AddImage)                                             | Creates a new child Image.                                                                  |
| [`Copy`](#NodalForce.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#NodalForce.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#NodalForce.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#NodalForce.CreateParameter)                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#NodalForce.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#NodalForce.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#NodalForce.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#NodalForce.Equals)                                                 | Equals method.                                                                              |
| [`GetAPIName`](#NodalForce.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#NodalForce.GetActivateAtLoadStep)                   | Gets whether the nodal force is active at the specified load step.                          |
| [`GetAllProperties`](#NodalForce.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#NodalForce.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetComponentActivateAtLoadStep`](#NodalForce.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                                      |
| [`GetDetailsView`](#NodalForce.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#NodalForce.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#NodalForce.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#NodalForce.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#NodalForce.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#NodalForce.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#NodalForce.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#NodalForce.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#NodalForce.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#NodalForce.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#NodalForce.GetQuantityName)                               | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#NodalForce.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#NodalForce.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#NodalForce.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#NodalForce.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#NodalForce.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#NodalForce.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#NodalForce.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#NodalForce.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#NodalForce.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#NodalForce.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#NodalForce.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#NodalForce.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#NodalForce.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#NodalForce.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#NodalForce.SetActivateAtLoadStep)                   | Sets whether the nodal force is active at the specified load step.                          |
| [`SetComponentActivateAtLoadStep`](#NodalForce.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                                      |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#NodalForce.AttachedRefs)                               | AttachedRefs property.                                                                                                  |
| [`Children`](#NodalForce.Children)                                       | Gets the list of children.                                                                                              |
| [`ClsId`](#NodalForce.ClsId)                                             | ClsId property.                                                                                                         |
| [`Comments`](#NodalForce.Comments)                                       | Gets the list of associated comments.                                                                                   |
| [`CoordinateSystem`](#CoordinateSystem)            | Gets the CoordinateSystem.                                                                                              |
| [`DataModelObjectCategory`](#NodalForce.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                                            |
| [`DefineBy`](#NodalForce.DefineBy)                                       | Gets or sets the Define By property of the load. Default: Components.                                                   |
| [`DivideLoadByNodes`](#NodalForce.DivideLoadByNodes)                     | Gets or sets the DivideLoadByNodes.                                                                                     |
| [`DynamicRelaxationBehavior`](#NodalForce.DynamicRelaxationBehavior)     | Gets or sets the DynamicRelaxationBehavior.                                                                             |
| [`Figures`](#NodalForce.Figures)                                         | Gets the list of associated figures.                                                                                    |
| [`GraphControlsXAxis`](#NodalForce.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                                                                                    |
| [`GroupingFolder`](#NodalForce.GroupingFolder)                           | GroupingFolder property.                                                                                                |
| [`HarmonicIndex`](#NodalForce.HarmonicIndex)                             | Gets or sets the HarmonicIndex.                                                                                         |
| [`IconName`](#NodalForce.IconName)                                       | IconName property.                                                                                                      |
| [`Images`](#NodalForce.Images)                                           | Gets the list of associated images.                                                                                     |
| [`ImportableObjectSourceId`](#NodalForce.ImportableObjectSourceId)       | ImportableObjectSourceId property.                                                                                      |
| [`IndependentVariable`](#NodalForce.IndependentVariable)                 | Gets or sets the IndependentVariable.                                                                                   |
| [`InternalObject`](#NodalForce.InternalObject)                           | Gets the internal object. For advanced usage only.                                                                      |
| [`LoadVectorAssignment`](#NodalForce.LoadVectorAssignment)               | Gets or sets whether the LoadVectorAssignment is LoadVectorAssignment_ProgramControlled or LoadVectorAssignment_Manual. |
| [`LoadVectorNumber`](#NodalForce.LoadVectorNumber)                       | LoadVectorNumber property.                                                                                              |
| [`LoadVectorNumberX`](#NodalForce.LoadVectorNumberX)                     | Gets or sets the load vector number for the real part of the nodal force in the X direction.                            |
| [`LoadVectorNumberXImaginary`](#NodalForce.LoadVectorNumberXImaginary)   | Gets or sets the load vector number for the imaginary part of the nodal force in the X direction.                       |
| [`LoadVectorNumberY`](#NodalForce.LoadVectorNumberY)                     | Gets or sets the load vector number for the real part of the nodal force in the Y direction.                            |
| [`LoadVectorNumberYImaginary`](#NodalForce.LoadVectorNumberYImaginary)   | Gets or sets the load vector number for the imaginary part of the nodal force in the Y direction.                       |
| [`LoadVectorNumberZ`](#NodalForce.LoadVectorNumberZ)                     | Gets or sets the load vector number for the real part of the nodal force in the Z direction.                            |
| [`LoadVectorNumberZImaginary`](#NodalForce.LoadVectorNumberZImaginary)   | Gets or sets the load vector number for the imaginary part of the nodal force in the Z direction.                       |
| [`Location`](#NodalForce.Location)                                       | Gets or sets the Location.                                                                                              |
| [`Name`](#NodalForce.Name)                                               | Name property.                                                                                                          |
| [`NonCyclicLoadingType`](#NodalForce.NonCyclicLoadingType)               | Gets or sets the NonCyclicLoadingType.                                                                                  |
| [`NumberOfSegments`](#NodalForce.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                                                                                      |
| [`ObjectId`](#NodalForce.ObjectId)                                       | ObjectId property.                                                                                                      |
| [`ObjectState`](#NodalForce.ObjectState)                                 | ObjectState property.                                                                                                   |
| [`ObjectTags`](#NodalForce.ObjectTags)                                   | ObjectTags property.                                                                                                    |
| [`Parent`](#NodalForce.Parent)                                           | Parent property.                                                                                                        |
| [`PhaseAngle`](#NodalForce.PhaseAngle)                                   | Gets or sets the PhaseAngle.                                                                                            |
| [`Properties`](#NodalForce.Properties)                                   | Gets the list of properties for this object.                                                                            |
| [`RangeMaximum`](#NodalForce.RangeMaximum)                               | Gets or sets the RangeMaximum.                                                                                          |
| [`RangeMinimum`](#NodalForce.RangeMinimum)                               | Gets or sets the RangeMinimum.                                                                                          |
| [`ReadOnly`](#NodalForce.ReadOnly)                                       | Gets or sets the ReadOnly.                                                                                              |
| [`RpmSelection`](#NodalForce.RpmSelection)                               | Gets or sets the RPM value at which the load is applied.                                                                |
| [`SectorNumber`](#NodalForce.SectorNumber)                               | Gets or sets the SectorNumber.                                                                                          |
| [`SharedRefBody`](#NodalForce.SharedRefBody)                             | Gets or sets the SharedRefBody.                                                                                         |
| [`State`](#NodalForce.State)                                             | State property.                                                                                                         |
| [`StepSelection`](#NodalForce.StepSelection)                             | Gets or sets the step number at which the load is applied. Default: 1.                                                  |
| [`StepSelectionRepresentation`](#NodalForce.StepSelectionRepresentation) | Gets or sets the string representation of the step numbers at which the load is applied.                                |
| [`StepVarying`](#NodalForce.StepVarying)                                 | Gets or sets whether the load is applied to a specific RPM/step number. Default: No.                                    |
| [`Suppressed`](#NodalForce.Suppressed)                                   | Gets or sets the Suppressed.                                                                                            |
| [`TransferableObjectId`](#NodalForce.TransferableObjectId)               | TransferableObjectId property.                                                                                          |
| [`VisibleProperties`](#NodalForce.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                                           |
| [`XComponent`](#NodalForce.XComponent)                                   | Gets the XComponent.                                                                                                    |
| [`XComponentImag`](#NodalForce.XComponentImag)                           | Returns the Field to get or set the value of the X Component – Imag property. Default: [0 [N]].                         |
| [`XYZFunctionCoordinateSystem`](#NodalForce.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                                                                           |
| [`YComponent`](#NodalForce.YComponent)                                   | Gets the YComponent.                                                                                                    |
| [`YComponentImag`](#NodalForce.YComponentImag)                           | Returns the Field to get or set the value of the Y Component – Imag property. Default: [0 [N]].                         |
| [`ZComponent`](#NodalForce.ZComponent)                                   | Gets the ZComponent.                                                                                                    |
| [`ZComponentImag`](#NodalForce.ZComponentImag)                           | Returns the Field to get or set the value of the Z Component – Imag property. Default: [0 [N]].                         |

<a id="property-detail"></a>

## Property detail

<a id="NodalForce.AttachedRefs"></a>

### *property* NodalForce.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Children"></a>

### *property* NodalForce.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.ClsId"></a>

### *property* NodalForce.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Comments"></a>

### *property* NodalForce.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.CoordinateSystem"></a>

### *property* NodalForce.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.DataModelObjectCategory"></a>

### *property* NodalForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.DefineBy"></a>

### *property* NodalForce.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Define By property of the load. Default: Components.
: Only Components and ComplexComponents are valid options for NodalForce, an exception is thrown otherwise.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.DivideLoadByNodes"></a>

### *property* NodalForce.DivideLoadByNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DivideLoadByNodes.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.DynamicRelaxationBehavior"></a>

### *property* NodalForce.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](../../../../Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Figures"></a>

### *property* NodalForce.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GraphControlsXAxis"></a>

### *property* NodalForce.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GroupingFolder"></a>

### *property* NodalForce.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.HarmonicIndex"></a>

### *property* NodalForce.HarmonicIndex *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.IconName"></a>

### *property* NodalForce.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Images"></a>

### *property* NodalForce.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.ImportableObjectSourceId"></a>

### *property* NodalForce.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.IndependentVariable"></a>

### *property* NodalForce.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.InternalObject"></a>

### *property* NodalForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.LoadVectorAssignment"></a>

### *property* NodalForce.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the LoadVectorAssignment is LoadVectorAssignment_ProgramControlled or LoadVectorAssignment_Manual.
: Default: LoadVectorAssignment_ProgramControlled.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.LoadVectorNumber"></a>

### *property* NodalForce.LoadVectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LoadVectorNumber property.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.LoadVectorNumberX"></a>

### *property* NodalForce.LoadVectorNumberX *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the nodal force in the X direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.LoadVectorNumberXImaginary"></a>

### *property* NodalForce.LoadVectorNumberXImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the nodal force in the X direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.LoadVectorNumberY"></a>

### *property* NodalForce.LoadVectorNumberY *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the nodal force in the Y direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.LoadVectorNumberYImaginary"></a>

### *property* NodalForce.LoadVectorNumberYImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the nodal force in the Y direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.LoadVectorNumberZ"></a>

### *property* NodalForce.LoadVectorNumberZ *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the nodal force in the Z direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.LoadVectorNumberZImaginary"></a>

### *property* NodalForce.LoadVectorNumberZImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the nodal force in the Z direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Location"></a>

### *property* NodalForce.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Name"></a>

### *property* NodalForce.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.NonCyclicLoadingType"></a>

### *property* NodalForce.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonCyclicLoadingType.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.NumberOfSegments"></a>

### *property* NodalForce.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.ObjectId"></a>

### *property* NodalForce.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.ObjectState"></a>

### *property* NodalForce.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.ObjectTags"></a>

### *property* NodalForce.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Parent"></a>

### *property* NodalForce.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.PhaseAngle"></a>

### *property* NodalForce.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Properties"></a>

### *property* NodalForce.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.RangeMaximum"></a>

### *property* NodalForce.RangeMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.RangeMinimum"></a>

### *property* NodalForce.RangeMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.ReadOnly"></a>

### *property* NodalForce.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.RpmSelection"></a>

### *property* NodalForce.RpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM value at which the load is applied.
: An exception is thrown if MultiStep is not True, StepVarying is not Yes, or HarmonicMultiStepType is not RPM.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.SectorNumber"></a>

### *property* NodalForce.SectorNumber *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.SharedRefBody"></a>

### *property* NodalForce.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.State"></a>

### *property* NodalForce.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.StepSelection"></a>

### *property* NodalForce.StepSelection *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the step number at which the load is applied. Default: 1.
: Each step number corresponds to an RPM value specified in the analysis settings.
  Setting this property also updates  to the corresponding RPM value for the specified step number.
  An exception is thrown if  is not True or  is not .
  Valid range is [1, N], where N is . An exception is thrown if the value is out-of-range.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.StepSelectionRepresentation"></a>

### *property* NodalForce.StepSelectionRepresentation *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the string representation of the step numbers at which the load is applied.
An exception is thrown if any of the below conditions are met:
1. MultiStep is not True.
2. StepVarying is not Yes.
3. HarmonicMultiStepType is not Load_Step.
4. The input format is invalid.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.StepVarying"></a>

### *property* NodalForce.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the load is applied to a specific RPM/step number. Default: No.
: An exception is thrown if  is not True.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Suppressed"></a>

### *property* NodalForce.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.TransferableObjectId"></a>

### *property* NodalForce.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.VisibleProperties"></a>

### *property* NodalForce.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.XComponent"></a>

### *property* NodalForce.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.XComponentImag"></a>

### *property* NodalForce.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the Field to get or set the value of the X Component – Imag property. Default: [0 [N]].

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.XYZFunctionCoordinateSystem"></a>

### *property* NodalForce.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.YComponent"></a>

### *property* NodalForce.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.YComponentImag"></a>

### *property* NodalForce.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the Field to get or set the value of the Y Component – Imag property. Default: [0 [N]].

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.ZComponent"></a>

### *property* NodalForce.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.ZComponentImag"></a>

### *property* NodalForce.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the Field to get or set the value of the Z Component – Imag property. Default: [0 [N]].

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodalForce.Activate"></a>

### NodalForce.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.AddComment"></a>

### NodalForce.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.AddFigure"></a>

### NodalForce.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.AddImage"></a>

### NodalForce.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Copy"></a>

### NodalForce.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.CopyTo"></a>

### NodalForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.CreateObjRef"></a>

### NodalForce.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.CreateParameter"></a>

### NodalForce.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Cut"></a>

### NodalForce.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Delete"></a>

### NodalForce.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Duplicate"></a>

### NodalForce.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Equals"></a>

### NodalForce.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetAPIName"></a>

### NodalForce.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetActivateAtLoadStep"></a>

### NodalForce.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the nodal force is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetAllProperties"></a>

### NodalForce.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetChildren"></a>

### NodalForce.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### NodalForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetComponentActivateAtLoadStep"></a>

### NodalForce.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetDetailsView"></a>

### NodalForce.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetEnumName"></a>

### NodalForce.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetHashCode"></a>

### NodalForce.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetIconFile"></a>

### NodalForce.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetLifetimeService"></a>

### NodalForce.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetObjectData"></a>

### NodalForce.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetParameter"></a>

### NodalForce.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetPath"></a>

### NodalForce.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetPropertyName"></a>

### NodalForce.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetPropertyValue"></a>

### NodalForce.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetQuantityName"></a>

### NodalForce.GetQuantityName() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetVisibleProperties"></a>

### NodalForce.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetVisiblePropertyNames"></a>

### NodalForce.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GroupAllSimilarChildren"></a>

### NodalForce.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GroupSimilarObjects"></a>

### NodalForce.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.InitializeLifetimeService"></a>

### NodalForce.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.IsPropertyEditable"></a>

### NodalForce.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NodalForce.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.IsPropertyVisible"></a>

### NodalForce.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NodalForce.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Paste"></a>

### NodalForce.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.PromoteToNamedSelection"></a>

### NodalForce.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.PropertyByAPIName"></a>

### NodalForce.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.PropertyById"></a>

### NodalForce.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.PropertyByName"></a>

### NodalForce.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.RemoveFromGroup"></a>

### NodalForce.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.RemoveParameter"></a>

### NodalForce.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.SetActivateAtLoadStep"></a>

### NodalForce.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the nodal force is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.SetComponentActivateAtLoadStep"></a>

### NodalForce.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

