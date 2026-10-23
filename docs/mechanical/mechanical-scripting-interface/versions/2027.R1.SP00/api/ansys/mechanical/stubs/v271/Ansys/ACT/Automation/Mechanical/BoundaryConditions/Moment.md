# `Moment`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Moment"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Moment(internalObject: Any)

<a id="Moment"></a>

### *class* Moment(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Moment.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Moment.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#Moment.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#Moment.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#Moment.AddImage)                                             | Creates a new child Image.                                                                  |
| [`Copy`](#Moment.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Moment.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Moment.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Moment.CreateParameter)                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Moment.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Moment.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#Moment.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Moment.Equals)                                                 | Equals method.                                                                              |
| [`GetAPIName`](#Moment.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#Moment.GetActivateAtLoadStep)                   | Gets whether the moment is active at the specified load step.                               |
| [`GetAllProperties`](#Moment.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#Moment.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetComponentActivateAtLoadStep`](#Moment.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                                      |
| [`GetDetailsView`](#Moment.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Moment.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#Moment.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#Moment.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Moment.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Moment.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#Moment.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Moment.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#Moment.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Moment.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Moment.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Moment.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Moment.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Moment.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Moment.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Moment.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Moment.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#Moment.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#Moment.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                                     |
| [`PromoteToRemotePoint`](#Moment.PromoteToRemotePoint)                     | Run the PromoteToRemotePoint action.                                                        |
| [`PropertyByAPIName`](#Moment.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#Moment.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#Moment.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Moment.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Moment.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#Moment.SetActivateAtLoadStep)                   | Sets whether the moment is active at the specified load step.                               |
| [`SetComponentActivateAtLoadStep`](#Moment.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                                      |

### Properties

| Name | Description |
|----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| [`ApplyToRigidBodyPilotNode`](#Moment.ApplyToRigidBodyPilotNode)     | Gets or sets the ApplyToRigidBodyPilotNode.                                                                             |
| [`AttachedRefs`](#Moment.AttachedRefs)                               | AttachedRefs property.                                                                                                  |
| [`BeamMaterial`](#Moment.BeamMaterial)                               | Gets or sets the BeamMaterial.                                                                                          |
| [`BeamRadius`](#Moment.BeamRadius)                                   | Gets or sets the BeamRadius.                                                                                            |
| [`Behavior`](#Moment.Behavior)                                       | Gets or sets the Behavior.                                                                                              |
| [`Children`](#Moment.Children)                                       | Gets the list of children.                                                                                              |
| [`ClsId`](#Moment.ClsId)                                             | ClsId property.                                                                                                         |
| [`Comments`](#Moment.Comments)                                       | Gets the list of associated comments.                                                                                   |
| [`CoordinateSystem`](#CoordinateSystem)        | Gets or sets the CoordinateSystem.                                                                                      |
| [`DataModelObjectCategory`](#Moment.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                                            |
| [`DefineBy`](#Moment.DefineBy)                                       | Gets or sets the DefineBy.                                                                                              |
| [`Direction`](#Moment.Direction)                                     | Gets or sets the Direction.                                                                                             |
| [`Figures`](#Moment.Figures)                                         | Gets the list of associated figures.                                                                                    |
| [`GroupingFolder`](#Moment.GroupingFolder)                           | GroupingFolder property.                                                                                                |
| [`HarmonicIndex`](#Moment.HarmonicIndex)                             | Gets or sets the HarmonicIndex.                                                                                         |
| [`IconName`](#Moment.IconName)                                       | IconName property.                                                                                                      |
| [`Images`](#Moment.Images)                                           | Gets the list of associated images.                                                                                     |
| [`ImportableObjectSourceId`](#Moment.ImportableObjectSourceId)       | ImportableObjectSourceId property.                                                                                      |
| [`IndependentVariable`](#Moment.IndependentVariable)                 | Gets or sets the IndependentVariable.                                                                                   |
| [`InternalObject`](#Moment.InternalObject)                           | Gets the internal object. For advanced usage only.                                                                      |
| [`LoadStepVarying`](#Moment.LoadStepVarying)                         | Gets or sets the LoadStepVarying.                                                                                       |
| [`LoadVectorAssignment`](#Moment.LoadVectorAssignment)               | Gets or sets whether the LoadVectorAssignment is LoadVectorAssignment_ProgramControlled or LoadVectorAssignment_Manual. |
| [`LoadVectorNumber`](#Moment.LoadVectorNumber)                       | Gets or sets the load vector number for the real part of the moment.                                                    |
| [`LoadVectorNumberImaginary`](#Moment.LoadVectorNumberImaginary)     | Gets or sets the load vector number for the imaginary part of the moment.                                               |
| [`LoadVectorNumberX`](#Moment.LoadVectorNumberX)                     | Gets or sets the load vector number for the real part of the moment in the X direction.                                 |
| [`LoadVectorNumberXImaginary`](#Moment.LoadVectorNumberXImaginary)   | Gets or sets the load vector number for the imaginary part of the moment in the X direction.                            |
| [`LoadVectorNumberY`](#Moment.LoadVectorNumberY)                     | Gets or sets the load vector number for the real part of the moment in the Y direction.                                 |
| [`LoadVectorNumberYImaginary`](#Moment.LoadVectorNumberYImaginary)   | Gets or sets the load vector number for the imaginary part of the moment in the Y direction.                            |
| [`LoadVectorNumberZ`](#Moment.LoadVectorNumberZ)                     | Gets or sets the load vector number for the real part of the moment in the Z direction.                                 |
| [`LoadVectorNumberZImaginary`](#Moment.LoadVectorNumberZImaginary)   | Gets or sets the load vector number for the imaginary part of the moment in the Z direction.                            |
| [`LoadingApplicationType`](#Moment.LoadingApplicationType)           | Gets or sets the LoadingApplicationType.                                                                                |
| [`Location`](#Moment.Location)                                       | Gets or sets the Location.                                                                                              |
| [`Magnitude`](#Moment.Magnitude)                                     | Gets the Magnitude.                                                                                                     |
| [`MagnitudeImag`](#Moment.MagnitudeImag)                             | Gets the MagnitudeImag.                                                                                                 |
| [`Name`](#Moment.Name)                                               | Name property.                                                                                                          |
| [`NonCyclicLoadingType`](#Moment.NonCyclicLoadingType)               | Gets or sets the NonCyclicLoadingType.                                                                                  |
| [`NumberOfSegments`](#Moment.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                                                                                      |
| [`ObjectId`](#Moment.ObjectId)                                       | ObjectId property.                                                                                                      |
| [`ObjectState`](#Moment.ObjectState)                                 | ObjectState property.                                                                                                   |
| [`ObjectTags`](#Moment.ObjectTags)                                   | ObjectTags property.                                                                                                    |
| [`Parent`](#Moment.Parent)                                           | Parent property.                                                                                                        |
| [`PhaseAngle`](#Moment.PhaseAngle)                                   | Gets the PhaseAngle.                                                                                                    |
| [`PinballRegion`](#Moment.PinballRegion)                             | Gets or sets the PinballRegion.                                                                                         |
| [`Properties`](#Moment.Properties)                                   | Gets the list of properties for this object.                                                                            |
| [`ReadOnly`](#Moment.ReadOnly)                                       | Gets or sets the ReadOnly.                                                                                              |
| [`RemotePoint`](#RemotePoint)                       | Gets the remote point associated with the moment.                                                                       |
| [`RpmSelection`](#Moment.RpmSelection)                               | Gets or sets the RPM value at which the load is applied.                                                                |
| [`RpmVarying`](#Moment.RpmVarying)                                   | Gets or sets the RpmVarying.                                                                                            |
| [`ScopingMethod`](#Moment.ScopingMethod)                             | Gets or sets the ScopingMethod.                                                                                         |
| [`SectorNumber`](#Moment.SectorNumber)                               | Gets or sets the SectorNumber.                                                                                          |
| [`SharedRefBody`](#Moment.SharedRefBody)                             | Gets or sets the SharedRefBody.                                                                                         |
| [`State`](#Moment.State)                                             | State property.                                                                                                         |
| [`StepSelection`](#Moment.StepSelection)                             | Gets or sets the StepSelection.                                                                                         |
| [`StepSelectionRepresentation`](#Moment.StepSelectionRepresentation) | Gets or sets the string representation of the step numbers at which the load is applied.                                |
| [`StepVarying`](#Moment.StepVarying)                                 | Gets or sets the StepVarying.                                                                                           |
| [`Suppressed`](#Moment.Suppressed)                                   | Gets or sets the Suppressed.                                                                                            |
| [`TransferableObjectId`](#Moment.TransferableObjectId)               | TransferableObjectId property.                                                                                          |
| [`VisibleProperties`](#Moment.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                                           |
| [`XComponent`](#Moment.XComponent)                                   | Gets the XComponent.                                                                                                    |
| [`XComponentImag`](#Moment.XComponentImag)                           | Gets the XComponentImag.                                                                                                |
| [`XPhaseAngle`](#Moment.XPhaseAngle)                                 | Gets the XPhaseAngle.                                                                                                   |
| [`YComponent`](#Moment.YComponent)                                   | Gets the YComponent.                                                                                                    |
| [`YComponentImag`](#Moment.YComponentImag)                           | Gets the YComponentImag.                                                                                                |
| [`YPhaseAngle`](#Moment.YPhaseAngle)                                 | Gets the YPhaseAngle.                                                                                                   |
| [`ZComponent`](#Moment.ZComponent)                                   | Gets the ZComponent.                                                                                                    |
| [`ZComponentImag`](#Moment.ZComponentImag)                           | Gets the ZComponentImag.                                                                                                |
| [`ZPhaseAngle`](#Moment.ZPhaseAngle)                                 | Gets the ZPhaseAngle.                                                                                                   |

<a id="property-detail"></a>

## Property detail

<a id="Moment.ApplyToRigidBodyPilotNode"></a>

### *property* Moment.ApplyToRigidBodyPilotNode *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ApplyToRigidBodyPilotNode.

<!-- !! processed by numpydoc !! -->

<a id="Moment.AttachedRefs"></a>

### *property* Moment.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.BeamMaterial"></a>

### *property* Moment.BeamMaterial *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Moment.BeamRadius"></a>

### *property* Moment.BeamRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Behavior"></a>

### *property* Moment.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Children"></a>

### *property* Moment.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Moment.ClsId"></a>

### *property* Moment.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Comments"></a>

### *property* Moment.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Moment.CoordinateSystem"></a>

### *property* Moment.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Moment.DataModelObjectCategory"></a>

### *property* Moment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Moment.DefineBy"></a>

### *property* Moment.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Direction"></a>

### *property* Moment.Direction *: [Ansys.ACT.Math.Vector3D](../../../Math/Vector3D.md#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Figures"></a>

### *property* Moment.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GroupingFolder"></a>

### *property* Moment.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.HarmonicIndex"></a>

### *property* Moment.HarmonicIndex *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="Moment.IconName"></a>

### *property* Moment.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Images"></a>

### *property* Moment.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Moment.ImportableObjectSourceId"></a>

### *property* Moment.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.IndependentVariable"></a>

### *property* Moment.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Moment.InternalObject"></a>

### *property* Moment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Moment.LoadStepVarying"></a>

### *property* Moment.LoadStepVarying *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepVarying.

<!-- !! processed by numpydoc !! -->

<a id="Moment.LoadVectorAssignment"></a>

### *property* Moment.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the LoadVectorAssignment is LoadVectorAssignment_ProgramControlled or LoadVectorAssignment_Manual.
: Default: LoadVectorAssignment_ProgramControlled.

<!-- !! processed by numpydoc !! -->

<a id="Moment.LoadVectorNumber"></a>

### *property* Moment.LoadVectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the moment.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Moment.LoadVectorNumberImaginary"></a>

### *property* Moment.LoadVectorNumberImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the moment.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Moment.LoadVectorNumberX"></a>

### *property* Moment.LoadVectorNumberX *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the moment in the X direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Moment.LoadVectorNumberXImaginary"></a>

### *property* Moment.LoadVectorNumberXImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the moment in the X direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Moment.LoadVectorNumberY"></a>

### *property* Moment.LoadVectorNumberY *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the moment in the Y direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Moment.LoadVectorNumberYImaginary"></a>

### *property* Moment.LoadVectorNumberYImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the moment in the Y direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Moment.LoadVectorNumberZ"></a>

### *property* Moment.LoadVectorNumberZ *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the moment in the Z direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Moment.LoadVectorNumberZImaginary"></a>

### *property* Moment.LoadVectorNumberZImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the moment in the Z direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="Moment.LoadingApplicationType"></a>

### *property* Moment.LoadingApplicationType *: [Ansys.Mechanical.DataModel.Enums.LoadingApplicationType](../../../../Mechanical/DataModel/Enums/LoadingApplicationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadingApplicationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadingApplicationType.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Location"></a>

### *property* Moment.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Magnitude"></a>

### *property* Moment.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Moment.MagnitudeImag"></a>

### *property* Moment.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Name"></a>

### *property* Moment.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.NonCyclicLoadingType"></a>

### *property* Moment.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonCyclicLoadingType.

<!-- !! processed by numpydoc !! -->

<a id="Moment.NumberOfSegments"></a>

### *property* Moment.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Moment.ObjectId"></a>

### *property* Moment.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.ObjectState"></a>

### *property* Moment.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.ObjectTags"></a>

### *property* Moment.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Parent"></a>

### *property* Moment.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.PhaseAngle"></a>

### *property* Moment.PhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Moment.PinballRegion"></a>

### *property* Moment.PinballRegion *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Properties"></a>

### *property* Moment.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Moment.ReadOnly"></a>

### *property* Moment.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Moment.RemotePoint"></a>

### *property* Moment.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the remote point associated with the moment.

<!-- !! processed by numpydoc !! -->

<a id="Moment.RpmSelection"></a>

### *property* Moment.RpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM value at which the load is applied.
: An exception is thrown if MultiStep is not True, StepVarying is not Yes, or HarmonicMultiStepType is not RPM.

<!-- !! processed by numpydoc !! -->

<a id="Moment.RpmVarying"></a>

### *property* Moment.RpmVarying *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmVarying.

<!-- !! processed by numpydoc !! -->

<a id="Moment.ScopingMethod"></a>

### *property* Moment.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Moment.SectorNumber"></a>

### *property* Moment.SectorNumber *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="Moment.SharedRefBody"></a>

### *property* Moment.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Moment.State"></a>

### *property* Moment.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.StepSelection"></a>

### *property* Moment.StepSelection *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StepSelection.

<!-- !! processed by numpydoc !! -->

<a id="Moment.StepSelectionRepresentation"></a>

### *property* Moment.StepSelectionRepresentation *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the string representation of the step numbers at which the load is applied.
An exception is thrown if any of the below conditions are met:
1. Object is an Imported Remote Load.
2. MultiStep is not True.
3. StepVarying is not Yes.
4. HarmonicMultiStepType is not Load_Step.
5. The input format is invalid.

<!-- !! processed by numpydoc !! -->

<a id="Moment.StepVarying"></a>

### *property* Moment.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StepVarying.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Suppressed"></a>

### *property* Moment.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Moment.TransferableObjectId"></a>

### *property* Moment.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.VisibleProperties"></a>

### *property* Moment.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Moment.XComponent"></a>

### *property* Moment.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="Moment.XComponentImag"></a>

### *property* Moment.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Moment.XPhaseAngle"></a>

### *property* Moment.XPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Moment.YComponent"></a>

### *property* Moment.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="Moment.YComponentImag"></a>

### *property* Moment.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Moment.YPhaseAngle"></a>

### *property* Moment.YPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Moment.ZComponent"></a>

### *property* Moment.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="Moment.ZComponentImag"></a>

### *property* Moment.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Moment.ZPhaseAngle"></a>

### *property* Moment.ZPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Moment.Activate"></a>

### Moment.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Moment.AddComment"></a>

### Moment.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Moment.AddFigure"></a>

### Moment.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Moment.AddImage"></a>

### Moment.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Moment.Copy"></a>

### Moment.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Moment.CopyTo"></a>

### Moment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Moment.CreateObjRef"></a>

### Moment.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.CreateParameter"></a>

### Moment.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Cut"></a>

### Moment.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Delete"></a>

### Moment.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Duplicate"></a>

### Moment.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Equals"></a>

### Moment.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetAPIName"></a>

### Moment.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetActivateAtLoadStep"></a>

### Moment.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the moment is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetAllProperties"></a>

### Moment.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetChildren"></a>

### Moment.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Moment.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetComponentActivateAtLoadStep"></a>

### Moment.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetDetailsView"></a>

### Moment.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetEnumName"></a>

### Moment.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetHashCode"></a>

### Moment.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetIconFile"></a>

### Moment.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetLifetimeService"></a>

### Moment.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetObjectData"></a>

### Moment.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetParameter"></a>

### Moment.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetPath"></a>

### Moment.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetPropertyName"></a>

### Moment.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetPropertyValue"></a>

### Moment.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetVisibleProperties"></a>

### Moment.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetVisiblePropertyNames"></a>

### Moment.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GroupAllSimilarChildren"></a>

### Moment.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GroupSimilarObjects"></a>

### Moment.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Moment.InitializeLifetimeService"></a>

### Moment.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.IsPropertyEditable"></a>

### Moment.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Moment.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.IsPropertyVisible"></a>

### Moment.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Moment.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Paste"></a>

### Moment.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Moment.PromoteToNamedSelection"></a>

### Moment.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Moment.PromoteToRemotePoint"></a>

### Moment.PromoteToRemotePoint() → Iterable[[Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint)]

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="Moment.PropertyByAPIName"></a>

### Moment.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Moment.PropertyById"></a>

### Moment.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.PropertyByName"></a>

### Moment.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Moment.RemoveFromGroup"></a>

### Moment.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Moment.RemoveParameter"></a>

### Moment.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.SetActivateAtLoadStep"></a>

### Moment.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the moment is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Moment.SetComponentActivateAtLoadStep"></a>

### Moment.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

