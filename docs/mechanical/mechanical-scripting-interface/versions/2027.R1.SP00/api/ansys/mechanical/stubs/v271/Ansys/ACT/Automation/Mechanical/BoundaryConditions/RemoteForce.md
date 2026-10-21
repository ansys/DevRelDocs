# `RemoteForce`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RemoteForce"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.RemoteForce(internalObject: Any)

<a id="RemoteForce"></a>

### *class* RemoteForce(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a RemoteForce.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#RemoteForce.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#RemoteForce.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#RemoteForce.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#RemoteForce.AddImage)                                             | Creates a new child Image.                                                                  |
| [`Copy`](#RemoteForce.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#RemoteForce.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#RemoteForce.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#RemoteForce.CreateParameter)                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#RemoteForce.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#RemoteForce.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#RemoteForce.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#RemoteForce.Equals)                                                 | Equals method.                                                                              |
| [`GetAPIName`](#RemoteForce.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#RemoteForce.GetActivateAtLoadStep)                   | Gets whether the remote force is active at the specified load step.                         |
| [`GetAllProperties`](#RemoteForce.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#RemoteForce.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetComponentActivateAtLoadStep`](#RemoteForce.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                                      |
| [`GetDetailsView`](#RemoteForce.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#RemoteForce.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#RemoteForce.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#RemoteForce.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#RemoteForce.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#RemoteForce.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#RemoteForce.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#RemoteForce.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#RemoteForce.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#RemoteForce.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#RemoteForce.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#RemoteForce.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#RemoteForce.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#RemoteForce.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#RemoteForce.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#RemoteForce.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#RemoteForce.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#RemoteForce.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#RemoteForce.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                                     |
| [`PromoteToRemotePoint`](#RemoteForce.PromoteToRemotePoint)                     | Run the PromoteToRemotePoint action.                                                        |
| [`PropertyByAPIName`](#RemoteForce.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#RemoteForce.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#RemoteForce.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#RemoteForce.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#RemoteForce.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#RemoteForce.SetActivateAtLoadStep)                   | Sets whether the remote force is active at the specified load step.                         |
| [`SetComponentActivateAtLoadStep`](#RemoteForce.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                                      |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| [`ApplyToRigidBodyPilotNode`](#RemoteForce.ApplyToRigidBodyPilotNode)     | Gets or sets the ApplyToRigidBodyPilotNode.                                                                             |
| [`AttachedRefs`](#RemoteForce.AttachedRefs)                               | AttachedRefs property.                                                                                                  |
| [`BeamMaterial`](#RemoteForce.BeamMaterial)                               | Gets or sets the BeamMaterial.                                                                                          |
| [`BeamRadius`](#RemoteForce.BeamRadius)                                   | Gets or sets the BeamRadius.                                                                                            |
| [`Behavior`](#RemoteForce.Behavior)                                       | Gets or sets the Behavior.                                                                                              |
| [`Children`](#RemoteForce.Children)                                       | Gets the list of children.                                                                                              |
| [`ClsId`](#RemoteForce.ClsId)                                             | ClsId property.                                                                                                         |
| [`Comments`](#RemoteForce.Comments)                                       | Gets the list of associated comments.                                                                                   |
| [`CoordinateSystem`](#CoordinateSystem)             | Gets or sets the CoordinateSystem.                                                                                      |
| [`DataModelObjectCategory`](#RemoteForce.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                                            |
| [`DefineBy`](#RemoteForce.DefineBy)                                       | Gets or sets the DefineBy.                                                                                              |
| [`Direction`](#RemoteForce.Direction)                                     | Gets or sets the Direction.                                                                                             |
| [`Figures`](#RemoteForce.Figures)                                         | Gets the list of associated figures.                                                                                    |
| [`FollowerLoad`](#RemoteForce.FollowerLoad)                               | Gets or sets the FollowerLoad.                                                                                          |
| [`GroupingFolder`](#RemoteForce.GroupingFolder)                           | GroupingFolder property.                                                                                                |
| [`HarmonicIndex`](#RemoteForce.HarmonicIndex)                             | Gets or sets the HarmonicIndex.                                                                                         |
| [`IconName`](#RemoteForce.IconName)                                       | IconName property.                                                                                                      |
| [`Images`](#RemoteForce.Images)                                           | Gets the list of associated images.                                                                                     |
| [`ImportableObjectSourceId`](#RemoteForce.ImportableObjectSourceId)       | ImportableObjectSourceId property.                                                                                      |
| [`IndependentVariable`](#RemoteForce.IndependentVariable)                 | Gets or sets the IndependentVariable.                                                                                   |
| [`InternalObject`](#RemoteForce.InternalObject)                           | Gets the internal object. For advanced usage only.                                                                      |
| [`LoadStepVarying`](#RemoteForce.LoadStepVarying)                         | Gets or sets the LoadStepVarying.                                                                                       |
| [`LoadVectorAssignment`](#RemoteForce.LoadVectorAssignment)               | Gets or sets whether the LoadVectorAssignment is LoadVectorAssignment_ProgramControlled or LoadVectorAssignment_Manual. |
| [`LoadVectorNumber`](#RemoteForce.LoadVectorNumber)                       | Gets or sets the load vector number for the real part of the remote force.                                              |
| [`LoadVectorNumberImaginary`](#RemoteForce.LoadVectorNumberImaginary)     | Gets or sets the load vector number for the imaginary part of the remote force.                                         |
| [`LoadVectorNumberX`](#RemoteForce.LoadVectorNumberX)                     | Gets or sets the load vector number for the real part of the remote force in the X direction.                           |
| [`LoadVectorNumberXImaginary`](#RemoteForce.LoadVectorNumberXImaginary)   | Gets or sets the load vector number for the imaginary part of the remote force in the X direction.                      |
| [`LoadVectorNumberY`](#RemoteForce.LoadVectorNumberY)                     | Gets or sets the load vector number for the real part of the remote force in the Y direction.                           |
| [`LoadVectorNumberYImaginary`](#RemoteForce.LoadVectorNumberYImaginary)   | Gets or sets the load vector number for the imaginary part of the remote force in the Y direction.                      |
| [`LoadVectorNumberZ`](#RemoteForce.LoadVectorNumberZ)                     | Gets or sets the load vector number for the real part of the remote force in the Z direction.                           |
| [`LoadVectorNumberZImaginary`](#RemoteForce.LoadVectorNumberZImaginary)   | Gets or sets the load vector number for the imaginary part of the remote force in the Z direction.                      |
| [`LoadingApplicationType`](#RemoteForce.LoadingApplicationType)           | Gets or sets the LoadingApplicationType.                                                                                |
| [`Location`](#RemoteForce.Location)                                       | Gets or sets the Location.                                                                                              |
| [`Magnitude`](#RemoteForce.Magnitude)                                     | Gets the Magnitude.                                                                                                     |
| [`MagnitudeImag`](#RemoteForce.MagnitudeImag)                             | Gets the MagnitudeImag.                                                                                                 |
| [`Name`](#RemoteForce.Name)                                               | Name property.                                                                                                          |
| [`NonCyclicLoadingType`](#RemoteForce.NonCyclicLoadingType)               | Gets or sets the NonCyclicLoadingType.                                                                                  |
| [`NumberOfSegments`](#RemoteForce.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                                                                                      |
| [`ObjectId`](#RemoteForce.ObjectId)                                       | ObjectId property.                                                                                                      |
| [`ObjectState`](#RemoteForce.ObjectState)                                 | ObjectState property.                                                                                                   |
| [`ObjectTags`](#RemoteForce.ObjectTags)                                   | ObjectTags property.                                                                                                    |
| [`Parent`](#RemoteForce.Parent)                                           | Parent property.                                                                                                        |
| [`PhaseAngle`](#RemoteForce.PhaseAngle)                                   | Gets the PhaseAngle.                                                                                                    |
| [`PinballRegion`](#RemoteForce.PinballRegion)                             | Gets or sets the PinballRegion.                                                                                         |
| [`Properties`](#RemoteForce.Properties)                                   | Gets the list of properties for this object.                                                                            |
| [`ReadOnly`](#RemoteForce.ReadOnly)                                       | Gets or sets the ReadOnly.                                                                                              |
| [`RemotePoint`](#RemotePoint)                            | Gets the remote point associated with the remote force.                                                                 |
| [`RpmSelection`](#RemoteForce.RpmSelection)                               | Gets or sets the RPM value at which the load is applied.                                                                |
| [`RpmVarying`](#RemoteForce.RpmVarying)                                   | Gets or sets the RpmVarying.                                                                                            |
| [`ScopingMethod`](#RemoteForce.ScopingMethod)                             | Gets or sets the ScopingMethod.                                                                                         |
| [`SectorNumber`](#RemoteForce.SectorNumber)                               | Gets or sets the SectorNumber.                                                                                          |
| [`SharedRefBody`](#RemoteForce.SharedRefBody)                             | Gets or sets the SharedRefBody.                                                                                         |
| [`State`](#RemoteForce.State)                                             | State property.                                                                                                         |
| [`StepSelection`](#RemoteForce.StepSelection)                             | Gets or sets the StepSelection.                                                                                         |
| [`StepSelectionRepresentation`](#RemoteForce.StepSelectionRepresentation) | Gets or sets the string representation of the step numbers at which the load is applied.                                |
| [`StepVarying`](#RemoteForce.StepVarying)                                 | Gets or sets the StepVarying.                                                                                           |
| [`Suppressed`](#RemoteForce.Suppressed)                                   | Gets or sets the Suppressed.                                                                                            |
| [`TransferableObjectId`](#RemoteForce.TransferableObjectId)               | TransferableObjectId property.                                                                                          |
| [`VisibleProperties`](#RemoteForce.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                                           |
| [`XComponent`](#RemoteForce.XComponent)                                   | Gets the XComponent.                                                                                                    |
| [`XComponentImag`](#RemoteForce.XComponentImag)                           | Gets the XComponentImag.                                                                                                |
| [`XCoordinate`](#RemoteForce.XCoordinate)                                 | Gets or sets the XCoordinate.                                                                                           |
| [`XPhaseAngle`](#RemoteForce.XPhaseAngle)                                 | Gets the XPhaseAngle.                                                                                                   |
| [`YComponent`](#RemoteForce.YComponent)                                   | Gets the YComponent.                                                                                                    |
| [`YComponentImag`](#RemoteForce.YComponentImag)                           | Gets the YComponentImag.                                                                                                |
| [`YCoordinate`](#RemoteForce.YCoordinate)                                 | Gets or sets the YCoordinate.                                                                                           |
| [`YPhaseAngle`](#RemoteForce.YPhaseAngle)                                 | Gets the YPhaseAngle.                                                                                                   |
| [`ZComponent`](#RemoteForce.ZComponent)                                   | Gets the ZComponent.                                                                                                    |
| [`ZComponentImag`](#RemoteForce.ZComponentImag)                           | Gets the ZComponentImag.                                                                                                |
| [`ZCoordinate`](#RemoteForce.ZCoordinate)                                 | Gets or sets the ZCoordinate.                                                                                           |
| [`ZPhaseAngle`](#RemoteForce.ZPhaseAngle)                                 | Gets the ZPhaseAngle.                                                                                                   |

<a id="property-detail"></a>

## Property detail

<a id="RemoteForce.ApplyToRigidBodyPilotNode"></a>

### *property* RemoteForce.ApplyToRigidBodyPilotNode *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ApplyToRigidBodyPilotNode.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.AttachedRefs"></a>

### *property* RemoteForce.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.BeamMaterial"></a>

### *property* RemoteForce.BeamMaterial *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.BeamRadius"></a>

### *property* RemoteForce.BeamRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Behavior"></a>

### *property* RemoteForce.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Children"></a>

### *property* RemoteForce.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.ClsId"></a>

### *property* RemoteForce.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Comments"></a>

### *property* RemoteForce.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.CoordinateSystem"></a>

### *property* RemoteForce.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.DataModelObjectCategory"></a>

### *property* RemoteForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.DefineBy"></a>

### *property* RemoteForce.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Direction"></a>

### *property* RemoteForce.Direction *: [Ansys.ACT.Math.Vector3D](../../../Math/Vector3D.md#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Figures"></a>

### *property* RemoteForce.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.FollowerLoad"></a>

### *property* RemoteForce.FollowerLoad *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FollowerLoad.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GroupingFolder"></a>

### *property* RemoteForce.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.HarmonicIndex"></a>

### *property* RemoteForce.HarmonicIndex *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.IconName"></a>

### *property* RemoteForce.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Images"></a>

### *property* RemoteForce.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.ImportableObjectSourceId"></a>

### *property* RemoteForce.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.IndependentVariable"></a>

### *property* RemoteForce.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.InternalObject"></a>

### *property* RemoteForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.LoadStepVarying"></a>

### *property* RemoteForce.LoadStepVarying *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepVarying.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.LoadVectorAssignment"></a>

### *property* RemoteForce.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the LoadVectorAssignment is LoadVectorAssignment_ProgramControlled or LoadVectorAssignment_Manual.
: Default: LoadVectorAssignment_ProgramControlled.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.LoadVectorNumber"></a>

### *property* RemoteForce.LoadVectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the remote force.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.LoadVectorNumberImaginary"></a>

### *property* RemoteForce.LoadVectorNumberImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the remote force.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.LoadVectorNumberX"></a>

### *property* RemoteForce.LoadVectorNumberX *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the remote force in the X direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.LoadVectorNumberXImaginary"></a>

### *property* RemoteForce.LoadVectorNumberXImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the remote force in the X direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.LoadVectorNumberY"></a>

### *property* RemoteForce.LoadVectorNumberY *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the remote force in the Y direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.LoadVectorNumberYImaginary"></a>

### *property* RemoteForce.LoadVectorNumberYImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the remote force in the Y direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.LoadVectorNumberZ"></a>

### *property* RemoteForce.LoadVectorNumberZ *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the remote force in the Z direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.LoadVectorNumberZImaginary"></a>

### *property* RemoteForce.LoadVectorNumberZImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the remote force in the Z direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.LoadingApplicationType"></a>

### *property* RemoteForce.LoadingApplicationType *: [Ansys.Mechanical.DataModel.Enums.LoadingApplicationType](../../../../Mechanical/DataModel/Enums/LoadingApplicationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadingApplicationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadingApplicationType.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Location"></a>

### *property* RemoteForce.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Magnitude"></a>

### *property* RemoteForce.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.MagnitudeImag"></a>

### *property* RemoteForce.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Name"></a>

### *property* RemoteForce.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.NonCyclicLoadingType"></a>

### *property* RemoteForce.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonCyclicLoadingType.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.NumberOfSegments"></a>

### *property* RemoteForce.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.ObjectId"></a>

### *property* RemoteForce.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.ObjectState"></a>

### *property* RemoteForce.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.ObjectTags"></a>

### *property* RemoteForce.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Parent"></a>

### *property* RemoteForce.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.PhaseAngle"></a>

### *property* RemoteForce.PhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.PinballRegion"></a>

### *property* RemoteForce.PinballRegion *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Properties"></a>

### *property* RemoteForce.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.ReadOnly"></a>

### *property* RemoteForce.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.RemotePoint"></a>

### *property* RemoteForce.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the remote point associated with the remote force.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.RpmSelection"></a>

### *property* RemoteForce.RpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM value at which the load is applied.
: An exception is thrown if MultiStep is not True, StepVarying is not Yes, or HarmonicMultiStepType is not RPM.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.RpmVarying"></a>

### *property* RemoteForce.RpmVarying *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmVarying.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.ScopingMethod"></a>

### *property* RemoteForce.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.SectorNumber"></a>

### *property* RemoteForce.SectorNumber *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.SharedRefBody"></a>

### *property* RemoteForce.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.State"></a>

### *property* RemoteForce.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.StepSelection"></a>

### *property* RemoteForce.StepSelection *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StepSelection.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.StepSelectionRepresentation"></a>

### *property* RemoteForce.StepSelectionRepresentation *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the string representation of the step numbers at which the load is applied.
An exception is thrown if any of the below conditions are met:
1. Object is an Imported Remote Load.
2. MultiStep is not True.
3. StepVarying is not Yes.
4. HarmonicMultiStepType is not Load_Step.
5. The input format is invalid.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.StepVarying"></a>

### *property* RemoteForce.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StepVarying.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Suppressed"></a>

### *property* RemoteForce.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.TransferableObjectId"></a>

### *property* RemoteForce.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.VisibleProperties"></a>

### *property* RemoteForce.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.XComponent"></a>

### *property* RemoteForce.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.XComponentImag"></a>

### *property* RemoteForce.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.XCoordinate"></a>

### *property* RemoteForce.XCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.XPhaseAngle"></a>

### *property* RemoteForce.XPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.YComponent"></a>

### *property* RemoteForce.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.YComponentImag"></a>

### *property* RemoteForce.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.YCoordinate"></a>

### *property* RemoteForce.YCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.YPhaseAngle"></a>

### *property* RemoteForce.YPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.ZComponent"></a>

### *property* RemoteForce.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.ZComponentImag"></a>

### *property* RemoteForce.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.ZCoordinate"></a>

### *property* RemoteForce.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.ZPhaseAngle"></a>

### *property* RemoteForce.ZPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RemoteForce.Activate"></a>

### RemoteForce.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.AddComment"></a>

### RemoteForce.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.AddFigure"></a>

### RemoteForce.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.AddImage"></a>

### RemoteForce.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Copy"></a>

### RemoteForce.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.CopyTo"></a>

### RemoteForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.CreateObjRef"></a>

### RemoteForce.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.CreateParameter"></a>

### RemoteForce.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Cut"></a>

### RemoteForce.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Delete"></a>

### RemoteForce.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Duplicate"></a>

### RemoteForce.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Equals"></a>

### RemoteForce.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetAPIName"></a>

### RemoteForce.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetActivateAtLoadStep"></a>

### RemoteForce.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the remote force is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetAllProperties"></a>

### RemoteForce.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetChildren"></a>

### RemoteForce.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### RemoteForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetComponentActivateAtLoadStep"></a>

### RemoteForce.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetDetailsView"></a>

### RemoteForce.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetEnumName"></a>

### RemoteForce.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetHashCode"></a>

### RemoteForce.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetIconFile"></a>

### RemoteForce.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetLifetimeService"></a>

### RemoteForce.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetObjectData"></a>

### RemoteForce.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetParameter"></a>

### RemoteForce.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetPath"></a>

### RemoteForce.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetPropertyName"></a>

### RemoteForce.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetPropertyValue"></a>

### RemoteForce.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetVisibleProperties"></a>

### RemoteForce.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetVisiblePropertyNames"></a>

### RemoteForce.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GroupAllSimilarChildren"></a>

### RemoteForce.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GroupSimilarObjects"></a>

### RemoteForce.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.InitializeLifetimeService"></a>

### RemoteForce.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.IsPropertyEditable"></a>

### RemoteForce.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RemoteForce.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.IsPropertyVisible"></a>

### RemoteForce.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RemoteForce.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Paste"></a>

### RemoteForce.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.PromoteToNamedSelection"></a>

### RemoteForce.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.PromoteToRemotePoint"></a>

### RemoteForce.PromoteToRemotePoint() → Iterable[[Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint)]

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.PropertyByAPIName"></a>

### RemoteForce.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.PropertyById"></a>

### RemoteForce.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.PropertyByName"></a>

### RemoteForce.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.RemoveFromGroup"></a>

### RemoteForce.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.RemoveParameter"></a>

### RemoteForce.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.SetActivateAtLoadStep"></a>

### RemoteForce.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the remote force is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.SetComponentActivateAtLoadStep"></a>

### RemoteForce.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

