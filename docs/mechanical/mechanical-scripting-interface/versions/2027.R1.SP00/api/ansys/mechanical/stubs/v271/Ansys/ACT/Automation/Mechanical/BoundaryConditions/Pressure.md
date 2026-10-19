# `Pressure`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Pressure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Pressure(internalObject: Any)

<a id="Pressure"></a>

### *class* Pressure(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Pressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Pressure.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#Pressure.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#Pressure.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#Pressure.AddImage)                                             | Creates a new child Image.                                                                  |
| [`Copy`](#Pressure.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Pressure.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Pressure.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Pressure.CreateParameter)                               | CreateParameter method.                                                                     |
| [`Cut`](#Pressure.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Pressure.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#Pressure.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Pressure.Equals)                                                 | Equals method.                                                                              |
| [`GetAPIName`](#Pressure.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#Pressure.GetActivateAtLoadStep)                   | Gets whether the pressure is active at the specified load step.                             |
| [`GetAllProperties`](#Pressure.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#Pressure.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetComponentActivateAtLoadStep`](#Pressure.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                                      |
| [`GetDetailsView`](#Pressure.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Pressure.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#Pressure.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#Pressure.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Pressure.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Pressure.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#Pressure.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Pressure.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#Pressure.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Pressure.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#Pressure.GetQuantityName)                               | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#Pressure.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Pressure.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Pressure.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Pressure.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Pressure.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Pressure.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Pressure.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#Pressure.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#Pressure.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#Pressure.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#Pressure.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#Pressure.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Pressure.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Pressure.RemoveParameter)                               | RemoveParameter method.                                                                     |
| [`SetActivateAtLoadStep`](#Pressure.SetActivateAtLoadStep)                   | Sets whether the pressure is active at the specified load step.                             |
| [`SetComponentActivateAtLoadStep`](#Pressure.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                                      |

### Properties

| Name | Description |
|------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`AppliedBy`](#Pressure.AppliedBy)                                     | Gets or sets the AppliedBy.                                                                    |
| [`ApplyTo`](#Pressure.ApplyTo)                                         | Gets or Sets the Pressure ApplyTo type.                                                        |
| [`AttachedRefs`](#Pressure.AttachedRefs)                               | AttachedRefs property.                                                                         |
| [`Children`](#Pressure.Children)                                       | Gets the list of children.                                                                     |
| [`ClsId`](#Pressure.ClsId)                                             | ClsId property.                                                                                |
| [`Comments`](#Pressure.Comments)                                       | Gets the list of associated comments.                                                          |
| [`CoordinateSystem`](#CoordinateSystem)          | Gets or sets the CoordinateSystem.                                                             |
| [`CrackGrowth`](#Pressure.CrackGrowth)                                 | Gets or Sets the SMART CrackGrowthSelection.                                                   |
| [`DataModelObjectCategory`](#Pressure.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                   |
| [`DefineBy`](#Pressure.DefineBy)                                       | Gets or sets the DefineBy.                                                                     |
| [`Direction`](#Pressure.Direction)                                     | Gets or sets the Direction.                                                                    |
| [`DynamicRelaxationBehavior`](#Pressure.DynamicRelaxationBehavior)     | Gets or sets the DynamicRelaxationBehavior.                                                    |
| [`Figures`](#Pressure.Figures)                                         | Gets the list of associated figures.                                                           |
| [`GraphControlsXAxis`](#Pressure.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                                                           |
| [`GroupingFolder`](#Pressure.GroupingFolder)                           | GroupingFolder property.                                                                       |
| [`HarmonicIndex`](#Pressure.HarmonicIndex)                             | Gets or sets the HarmonicIndex.                                                                |
| [`IconName`](#Pressure.IconName)                                       | IconName property.                                                                             |
| [`Images`](#Pressure.Images)                                           | Gets the list of associated images.                                                            |
| [`ImportableObjectSourceId`](#Pressure.ImportableObjectSourceId)       | ImportableObjectSourceId property.                                                             |
| [`IndependentVariable`](#Pressure.IndependentVariable)                 | Gets or sets the IndependentVariable.                                                          |
| [`InternalObject`](#Pressure.InternalObject)                           | InternalObject property.                                                                       |
| [`LoadVectorAssignment`](#Pressure.LoadVectorAssignment)               | Gets or sets the LoadVectorAssignment.                                                         |
| [`LoadVectorNumber`](#Pressure.LoadVectorNumber)                       | Gets or sets the load vector number for the pressure.                                          |
| [`LoadVectorNumberImaginary`](#Pressure.LoadVectorNumberImaginary)     | Gets or sets the load vector number for the imaginary part of the pressure.                    |
| [`LoadVectorNumberX`](#Pressure.LoadVectorNumberX)                     | Gets or sets the load vector number for the real part of the pressure in the X direction.      |
| [`LoadVectorNumberXImaginary`](#Pressure.LoadVectorNumberXImaginary)   | Gets or sets the load vector number for the imaginary part of the pressure in the X direction. |
| [`LoadVectorNumberY`](#Pressure.LoadVectorNumberY)                     | Gets or sets the load vector number for the real part of the pressure in the Y direction.      |
| [`LoadVectorNumberYImaginary`](#Pressure.LoadVectorNumberYImaginary)   | Gets or sets the load vector number for the imaginary part of the pressure in the Y direction. |
| [`LoadVectorNumberZ`](#Pressure.LoadVectorNumberZ)                     | Gets or sets the load vector number for the real part of the pressure in the Z direction.      |
| [`LoadVectorNumberZImaginary`](#Pressure.LoadVectorNumberZImaginary)   | Gets or sets the load vector number for the imaginary part of the pressure in the Z direction. |
| [`LoadedArea`](#Pressure.LoadedArea)                                   | Gets or sets the LoadedArea.                                                                   |
| [`Location`](#Pressure.Location)                                       | Gets or sets the Location.                                                                     |
| [`Magnitude`](#Pressure.Magnitude)                                     | Gets or sets the Magnitude.                                                                    |
| [`MagnitudeImag`](#Pressure.MagnitudeImag)                             | Gets the MagnitudeImag.                                                                        |
| [`Name`](#Pressure.Name)                                               | Name property.                                                                                 |
| [`NonCyclicLoadingType`](#Pressure.NonCyclicLoadingType)               | Gets or sets the NonCyclicLoadingType.                                                         |
| [`NumberOfSegments`](#Pressure.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                                                             |
| [`ObjectId`](#Pressure.ObjectId)                                       | ObjectId property.                                                                             |
| [`ObjectState`](#Pressure.ObjectState)                                 | ObjectState property.                                                                          |
| [`ObjectTags`](#Pressure.ObjectTags)                                   | ObjectTags property.                                                                           |
| [`Parent`](#Pressure.Parent)                                           | Parent property.                                                                               |
| [`PhaseAngle`](#Pressure.PhaseAngle)                                   | Gets the PhaseAngle.                                                                           |
| [`Properties`](#Pressure.Properties)                                   | Gets the list of properties for this object.                                                   |
| [`RangeMaximum`](#Pressure.RangeMaximum)                               | Gets or sets the RangeMaximum.                                                                 |
| [`RangeMinimum`](#Pressure.RangeMinimum)                               | Gets or sets the RangeMinimum.                                                                 |
| [`ReadOnly`](#Pressure.ReadOnly)                                       | Gets or sets the ReadOnly.                                                                     |
| [`RpmSelection`](#Pressure.RpmSelection)                               | Gets or sets the RPM value at which the load is applied.                                       |
| [`ScopingMethod`](#Pressure.ScopingMethod)                             | Gets or sets the ScopingMethod.                                                                |
| [`SectorNumber`](#Pressure.SectorNumber)                               | Gets or sets the SectorNumber.                                                                 |
| [`SharedRefBody`](#Pressure.SharedRefBody)                             | Gets or sets the SharedRefBody.                                                                |
| [`State`](#Pressure.State)                                             | State property.                                                                                |
| [`StepSelection`](#Pressure.StepSelection)                             | Gets or sets the step number at which the load is applied. Default: 1.                         |
| [`StepSelectionRepresentation`](#Pressure.StepSelectionRepresentation) | Gets or sets the string representation of the step numbers at which the load is applied.       |
| [`StepVarying`](#Pressure.StepVarying)                                 | Gets or sets whether the load is applied to a specific RPM/step number. Default: No.           |
| [`Suppressed`](#Pressure.Suppressed)                                   | Gets or sets the Suppressed.                                                                   |
| [`TableAssignment`](#Pressure.TableAssignment)                         | Gets or sets the TableAssignment.                                                              |
| [`TransferableObjectId`](#Pressure.TransferableObjectId)               | TransferableObjectId property.                                                                 |
| [`VisibleProperties`](#Pressure.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                  |
| [`XComponent`](#Pressure.XComponent)                                   | Gets the XComponent.                                                                           |
| [`XComponentImag`](#Pressure.XComponentImag)                           | Gets the XComponentImag.                                                                       |
| [`XPhaseAngle`](#Pressure.XPhaseAngle)                                 | Gets the XPhaseAngle.                                                                          |
| [`XYZFunctionCoordinateSystem`](#Pressure.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                                                  |
| [`YComponent`](#Pressure.YComponent)                                   | Gets the YComponent.                                                                           |
| [`YComponentImag`](#Pressure.YComponentImag)                           | Gets the YComponentImag.                                                                       |
| [`YPhaseAngle`](#Pressure.YPhaseAngle)                                 | Gets the YPhaseAngle.                                                                          |
| [`ZComponent`](#Pressure.ZComponent)                                   | Gets the ZComponent.                                                                           |
| [`ZComponentImag`](#Pressure.ZComponentImag)                           | Gets the ZComponentImag.                                                                       |
| [`ZPhaseAngle`](#Pressure.ZPhaseAngle)                                 | Gets the ZPhaseAngle.                                                                          |

<a id="property-detail"></a>

## Property detail

<a id="Pressure.AppliedBy"></a>

### *property* Pressure.AppliedBy *: [Ansys.Mechanical.DataModel.Enums.LoadAppliedBy](../../../../Mechanical/DataModel/Enums/LoadAppliedBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadAppliedBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ApplyTo"></a>

### *property* Pressure.ApplyTo *: [Ansys.Mechanical.DataModel.Enums.CrackSurfaceLoadApplyTo](../../../../Mechanical/DataModel/Enums/CrackSurfaceLoadApplyTo.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackSurfaceLoadApplyTo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or Sets the Pressure ApplyTo type.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.AttachedRefs"></a>

### *property* Pressure.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Children"></a>

### *property* Pressure.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ClsId"></a>

### *property* Pressure.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Comments"></a>

### *property* Pressure.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.CoordinateSystem"></a>

### *property* Pressure.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.CrackGrowth"></a>

### *property* Pressure.CrackGrowth *: [Ansys.ACT.Automation.Mechanical.SMARTCrackGrowth](../SMARTCrackGrowth.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SMARTCrackGrowth) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or Sets the SMART CrackGrowthSelection.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.DataModelObjectCategory"></a>

### *property* Pressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.DefineBy"></a>

### *property* Pressure.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Direction"></a>

### *property* Pressure.Direction *: [Ansys.ACT.Math.Vector3D](../../../Math/Vector3D.md#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.DynamicRelaxationBehavior"></a>

### *property* Pressure.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](../../../../Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Figures"></a>

### *property* Pressure.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GraphControlsXAxis"></a>

### *property* Pressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GroupingFolder"></a>

### *property* Pressure.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.HarmonicIndex"></a>

### *property* Pressure.HarmonicIndex *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.IconName"></a>

### *property* Pressure.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Images"></a>

### *property* Pressure.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ImportableObjectSourceId"></a>

### *property* Pressure.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.IndependentVariable"></a>

### *property* Pressure.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.InternalObject"></a>

### *property* Pressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

InternalObject property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.LoadVectorAssignment"></a>

### *property* Pressure.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.LoadVectorNumber"></a>

### *property* Pressure.LoadVectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the pressure.
When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

This property is unsupported when DefineBy is set to Components
or ComplexComponents;
the component-based properties LoadVectorNumberX, LoadVectorNumberY,
and LoadVectorNumberZ should be used instead.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.LoadVectorNumberImaginary"></a>

### *property* Pressure.LoadVectorNumberImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the pressure.
When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.LoadVectorNumberX"></a>

### *property* Pressure.LoadVectorNumberX *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the pressure in the X direction.
When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.LoadVectorNumberXImaginary"></a>

### *property* Pressure.LoadVectorNumberXImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the pressure in the X direction.
When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.LoadVectorNumberY"></a>

### *property* Pressure.LoadVectorNumberY *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the pressure in the Y direction.
When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.LoadVectorNumberYImaginary"></a>

### *property* Pressure.LoadVectorNumberYImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the pressure in the Y direction.
When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.LoadVectorNumberZ"></a>

### *property* Pressure.LoadVectorNumberZ *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the pressure in the Z direction.
When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.LoadVectorNumberZImaginary"></a>

### *property* Pressure.LoadVectorNumberZImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the pressure in the Z direction.
When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.LoadedArea"></a>

### *property* Pressure.LoadedArea *: [Ansys.Mechanical.DataModel.Enums.LoadedArea](../../../../Mechanical/DataModel/Enums/LoadedArea.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadedArea) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadedArea.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Location"></a>

### *property* Pressure.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Magnitude"></a>

### *property* Pressure.Magnitude *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.MagnitudeImag"></a>

### *property* Pressure.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Name"></a>

### *property* Pressure.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.NonCyclicLoadingType"></a>

### *property* Pressure.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonCyclicLoadingType.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.NumberOfSegments"></a>

### *property* Pressure.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ObjectId"></a>

### *property* Pressure.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ObjectState"></a>

### *property* Pressure.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ObjectTags"></a>

### *property* Pressure.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Parent"></a>

### *property* Pressure.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.PhaseAngle"></a>

### *property* Pressure.PhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Properties"></a>

### *property* Pressure.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.RangeMaximum"></a>

### *property* Pressure.RangeMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.RangeMinimum"></a>

### *property* Pressure.RangeMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ReadOnly"></a>

### *property* Pressure.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.RpmSelection"></a>

### *property* Pressure.RpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM value at which the load is applied.
: An exception is thrown if MultiStep is not True, StepVarying is not Yes, or HarmonicMultiStepType is not RPM.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ScopingMethod"></a>

### *property* Pressure.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.SectorNumber"></a>

### *property* Pressure.SectorNumber *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.SharedRefBody"></a>

### *property* Pressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.State"></a>

### *property* Pressure.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.StepSelection"></a>

### *property* Pressure.StepSelection *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the step number at which the load is applied. Default: 1.
: Each step number corresponds to an RPM value specified in the analysis settings.
  Setting this property also updates  to the corresponding RPM value for the specified step number.
  An exception is thrown if  is not True or  is not .
  Valid range is [1, N], where N is . An exception is thrown if the value is out-of-range.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.StepSelectionRepresentation"></a>

### *property* Pressure.StepSelectionRepresentation *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the string representation of the step numbers at which the load is applied.
An exception is thrown if any of the below conditions are met:
1. MultiStep is not True.
2. StepVarying is not Yes.
3. HarmonicMultiStepType is not Load_Step.
4. The input format is invalid.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.StepVarying"></a>

### *property* Pressure.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the load is applied to a specific RPM/step number. Default: No.
: An exception is thrown if  is not True.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Suppressed"></a>

### *property* Pressure.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.TableAssignment"></a>

### *property* Pressure.TableAssignment *: [Ansys.ACT.Automation.Mechanical.Table](../Table.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Table) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TableAssignment.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.TransferableObjectId"></a>

### *property* Pressure.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.VisibleProperties"></a>

### *property* Pressure.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.XComponent"></a>

### *property* Pressure.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.XComponentImag"></a>

### *property* Pressure.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.XPhaseAngle"></a>

### *property* Pressure.XPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.XYZFunctionCoordinateSystem"></a>

### *property* Pressure.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.YComponent"></a>

### *property* Pressure.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.YComponentImag"></a>

### *property* Pressure.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.YPhaseAngle"></a>

### *property* Pressure.YPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ZComponent"></a>

### *property* Pressure.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ZComponentImag"></a>

### *property* Pressure.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ZPhaseAngle"></a>

### *property* Pressure.ZPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Pressure.Activate"></a>

### Pressure.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.AddComment"></a>

### Pressure.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.AddFigure"></a>

### Pressure.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.AddImage"></a>

### Pressure.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Copy"></a>

### Pressure.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.CopyTo"></a>

### Pressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.CreateObjRef"></a>

### Pressure.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.CreateParameter"></a>

### Pressure.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Cut"></a>

### Pressure.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Delete"></a>

### Pressure.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Duplicate"></a>

### Pressure.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Equals"></a>

### Pressure.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetAPIName"></a>

### Pressure.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetActivateAtLoadStep"></a>

### Pressure.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetAllProperties"></a>

### Pressure.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetChildren"></a>

### Pressure.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Pressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetComponentActivateAtLoadStep"></a>

### Pressure.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetDetailsView"></a>

### Pressure.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetEnumName"></a>

### Pressure.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetHashCode"></a>

### Pressure.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetIconFile"></a>

### Pressure.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetLifetimeService"></a>

### Pressure.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetObjectData"></a>

### Pressure.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetParameter"></a>

### Pressure.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetPath"></a>

### Pressure.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetPropertyName"></a>

### Pressure.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetPropertyValue"></a>

### Pressure.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetQuantityName"></a>

### Pressure.GetQuantityName() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetVisibleProperties"></a>

### Pressure.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetVisiblePropertyNames"></a>

### Pressure.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GroupAllSimilarChildren"></a>

### Pressure.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GroupSimilarObjects"></a>

### Pressure.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.InitializeLifetimeService"></a>

### Pressure.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.IsPropertyEditable"></a>

### Pressure.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Pressure.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.IsPropertyVisible"></a>

### Pressure.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Pressure.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Paste"></a>

### Pressure.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.PromoteToNamedSelection"></a>

### Pressure.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.PropertyByAPIName"></a>

### Pressure.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Pressure.PropertyById"></a>

### Pressure.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.PropertyByName"></a>

### Pressure.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.RemoveFromGroup"></a>

### Pressure.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.RemoveParameter"></a>

### Pressure.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

RemoveParameter method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.SetActivateAtLoadStep"></a>

### Pressure.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.SetComponentActivateAtLoadStep"></a>

### Pressure.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

