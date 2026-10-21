# `RemoteDisplacement`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RemoteDisplacement"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.RemoteDisplacement(internalObject: Any)

<a id="RemoteDisplacement"></a>

### *class* RemoteDisplacement(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a RemoteDisplacement.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#RemoteDisplacement.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#RemoteDisplacement.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#RemoteDisplacement.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#RemoteDisplacement.AddImage)                                             | Creates a new child Image.                                                                  |
| [`Copy`](#RemoteDisplacement.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#RemoteDisplacement.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#RemoteDisplacement.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#RemoteDisplacement.CreateParameter)                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#RemoteDisplacement.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#RemoteDisplacement.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#RemoteDisplacement.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#RemoteDisplacement.Equals)                                                 | Equals method.                                                                              |
| [`GetAPIName`](#RemoteDisplacement.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#RemoteDisplacement.GetActivateAtLoadStep)                   | Gets whether the remote displacement is active at the specified load step.                  |
| [`GetAllProperties`](#RemoteDisplacement.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#RemoteDisplacement.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetComponentActivateAtLoadStep`](#RemoteDisplacement.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                                      |
| [`GetDetailsView`](#RemoteDisplacement.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#RemoteDisplacement.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#RemoteDisplacement.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#RemoteDisplacement.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#RemoteDisplacement.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#RemoteDisplacement.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#RemoteDisplacement.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#RemoteDisplacement.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#RemoteDisplacement.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#RemoteDisplacement.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#RemoteDisplacement.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#RemoteDisplacement.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#RemoteDisplacement.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#RemoteDisplacement.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#RemoteDisplacement.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#RemoteDisplacement.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#RemoteDisplacement.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#RemoteDisplacement.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#RemoteDisplacement.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                                     |
| [`PromoteToRemotePoint`](#RemoteDisplacement.PromoteToRemotePoint)                     | Run the PromoteToRemotePoint action.                                                        |
| [`PropertyByAPIName`](#RemoteDisplacement.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#RemoteDisplacement.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#RemoteDisplacement.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#RemoteDisplacement.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#RemoteDisplacement.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#RemoteDisplacement.SetActivateAtLoadStep)                   | Sets whether the remote displacement is active at the specified load step.                  |
| [`SetComponentActivateAtLoadStep`](#RemoteDisplacement.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                                      |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`ApplyToRigidBodyPilotNode`](#RemoteDisplacement.ApplyToRigidBodyPilotNode)             | Gets or sets the ApplyToRigidBodyPilotNode.                                              |
| [`AttachedRefs`](#RemoteDisplacement.AttachedRefs)                                       | AttachedRefs property.                                                                   |
| [`BeamMaterial`](#RemoteDisplacement.BeamMaterial)                                       | Gets or sets the BeamMaterial.                                                           |
| [`BeamRadius`](#RemoteDisplacement.BeamRadius)                                           | Gets or sets the BeamRadius.                                                             |
| [`Behavior`](#RemoteDisplacement.Behavior)                                               | Gets or sets the Behavior.                                                               |
| [`Children`](#RemoteDisplacement.Children)                                               | Gets the list of children.                                                               |
| [`ClsId`](#RemoteDisplacement.ClsId)                                                     | ClsId property.                                                                          |
| [`Comments`](#RemoteDisplacement.Comments)                                               | Gets the list of associated comments.                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                            | Gets or sets the CoordinateSystem.                                                       |
| [`DataModelObjectCategory`](#RemoteDisplacement.DataModelObjectCategory)                 | Gets the current DataModelObject's category.                                             |
| [`DynamicRelaxationBehavior`](#RemoteDisplacement.DynamicRelaxationBehavior)             | Gets or sets the DynamicRelaxationBehavior.                                              |
| [`Figures`](#RemoteDisplacement.Figures)                                                 | Gets the list of associated figures.                                                     |
| [`GroupingFolder`](#RemoteDisplacement.GroupingFolder)                                   | GroupingFolder property.                                                                 |
| [`IconName`](#RemoteDisplacement.IconName)                                               | IconName property.                                                                       |
| [`Images`](#RemoteDisplacement.Images)                                                   | Gets the list of associated images.                                                      |
| [`ImportableObjectSourceId`](#RemoteDisplacement.ImportableObjectSourceId)               | ImportableObjectSourceId property.                                                       |
| [`InternalObject`](#RemoteDisplacement.InternalObject)                                   | Gets the internal object. For advanced usage only.                                       |
| [`Location`](#RemoteDisplacement.Location)                                               | Gets or sets the Location.                                                               |
| [`Name`](#RemoteDisplacement.Name)                                                       | Name property.                                                                           |
| [`NumberOfSegments`](#RemoteDisplacement.NumberOfSegments)                               | Gets or sets the NumberOfSegments.                                                       |
| [`ObjectId`](#RemoteDisplacement.ObjectId)                                               | ObjectId property.                                                                       |
| [`ObjectState`](#RemoteDisplacement.ObjectState)                                         | ObjectState property.                                                                    |
| [`ObjectTags`](#RemoteDisplacement.ObjectTags)                                           | ObjectTags property.                                                                     |
| [`Parent`](#RemoteDisplacement.Parent)                                                   | Parent property.                                                                         |
| [`PinballRegion`](#RemoteDisplacement.PinballRegion)                                     | Gets or sets the PinballRegion.                                                          |
| [`Properties`](#RemoteDisplacement.Properties)                                           | Gets the list of properties for this object.                                             |
| [`ReadOnly`](#RemoteDisplacement.ReadOnly)                                               | Gets or sets the ReadOnly.                                                               |
| [`RemotePoint`](#RemotePoint)                                           | Gets the remote point associated with the remote displacement.                           |
| [`ReverseDirectionForInverseSteps`](#RemoteDisplacement.ReverseDirectionForInverseSteps) | Gets or sets the ReverseDirectionForInverseSteps.                                        |
| [`RotationX`](#RemoteDisplacement.RotationX)                                             | Gets the RotationX.                                                                      |
| [`RotationY`](#RemoteDisplacement.RotationY)                                             | Gets the RotationY.                                                                      |
| [`RotationZ`](#RemoteDisplacement.RotationZ)                                             | Gets the RotationZ.                                                                      |
| [`RpmSelection`](#RemoteDisplacement.RpmSelection)                                       | Gets or sets the RPM value at which the load is applied.                                 |
| [`ScopingMethod`](#RemoteDisplacement.ScopingMethod)                                     | Gets or sets the ScopingMethod.                                                          |
| [`SharedRefBody`](#RemoteDisplacement.SharedRefBody)                                     | Gets or sets the SharedRefBody.                                                          |
| [`State`](#RemoteDisplacement.State)                                                     | State property.                                                                          |
| [`StepSelection`](#RemoteDisplacement.StepSelection)                                     | Gets or sets the step number at which the load is applied. Default: 1.                   |
| [`StepSelectionRepresentation`](#RemoteDisplacement.StepSelectionRepresentation)         | Gets or sets the string representation of the step numbers at which the load is applied. |
| [`StepVarying`](#RemoteDisplacement.StepVarying)                                         | Gets or sets whether the load is applied to a specific RPM/step number. Default: No.     |
| [`Suppressed`](#RemoteDisplacement.Suppressed)                                           | Gets or sets the Suppressed.                                                             |
| [`TransferableObjectId`](#RemoteDisplacement.TransferableObjectId)                       | TransferableObjectId property.                                                           |
| [`VisibleProperties`](#RemoteDisplacement.VisibleProperties)                             | Gets the list of properties that are visible for this object.                            |
| [`XComponent`](#RemoteDisplacement.XComponent)                                           | Gets the XComponent.                                                                     |
| [`XCoordinate`](#RemoteDisplacement.XCoordinate)                                         | Gets or sets the XCoordinate.                                                            |
| [`YComponent`](#RemoteDisplacement.YComponent)                                           | Gets the YComponent.                                                                     |
| [`YCoordinate`](#RemoteDisplacement.YCoordinate)                                         | Gets or sets the YCoordinate.                                                            |
| [`ZComponent`](#RemoteDisplacement.ZComponent)                                           | Gets the ZComponent.                                                                     |
| [`ZCoordinate`](#RemoteDisplacement.ZCoordinate)                                         | Gets or sets the ZCoordinate.                                                            |

<a id="property-detail"></a>

## Property detail

<a id="RemoteDisplacement.ApplyToRigidBodyPilotNode"></a>

### *property* RemoteDisplacement.ApplyToRigidBodyPilotNode *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ApplyToRigidBodyPilotNode.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.AttachedRefs"></a>

### *property* RemoteDisplacement.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.BeamMaterial"></a>

### *property* RemoteDisplacement.BeamMaterial *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.BeamRadius"></a>

### *property* RemoteDisplacement.BeamRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Behavior"></a>

### *property* RemoteDisplacement.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Children"></a>

### *property* RemoteDisplacement.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.ClsId"></a>

### *property* RemoteDisplacement.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Comments"></a>

### *property* RemoteDisplacement.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.CoordinateSystem"></a>

### *property* RemoteDisplacement.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.DataModelObjectCategory"></a>

### *property* RemoteDisplacement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.DynamicRelaxationBehavior"></a>

### *property* RemoteDisplacement.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](../../../../Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Figures"></a>

### *property* RemoteDisplacement.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GroupingFolder"></a>

### *property* RemoteDisplacement.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.IconName"></a>

### *property* RemoteDisplacement.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Images"></a>

### *property* RemoteDisplacement.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.ImportableObjectSourceId"></a>

### *property* RemoteDisplacement.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.InternalObject"></a>

### *property* RemoteDisplacement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Location"></a>

### *property* RemoteDisplacement.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Name"></a>

### *property* RemoteDisplacement.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.NumberOfSegments"></a>

### *property* RemoteDisplacement.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.ObjectId"></a>

### *property* RemoteDisplacement.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.ObjectState"></a>

### *property* RemoteDisplacement.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.ObjectTags"></a>

### *property* RemoteDisplacement.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Parent"></a>

### *property* RemoteDisplacement.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.PinballRegion"></a>

### *property* RemoteDisplacement.PinballRegion *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Properties"></a>

### *property* RemoteDisplacement.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.ReadOnly"></a>

### *property* RemoteDisplacement.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.RemotePoint"></a>

### *property* RemoteDisplacement.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the remote point associated with the remote displacement.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.ReverseDirectionForInverseSteps"></a>

### *property* RemoteDisplacement.ReverseDirectionForInverseSteps *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReverseDirectionForInverseSteps.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.RotationX"></a>

### *property* RemoteDisplacement.RotationX *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RotationX.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.RotationY"></a>

### *property* RemoteDisplacement.RotationY *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RotationY.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.RotationZ"></a>

### *property* RemoteDisplacement.RotationZ *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RotationZ.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.RpmSelection"></a>

### *property* RemoteDisplacement.RpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM value at which the load is applied.
: An exception is thrown if MultiStep is not True, StepVarying is not Yes, or HarmonicMultiStepType is not RPM.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.ScopingMethod"></a>

### *property* RemoteDisplacement.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.SharedRefBody"></a>

### *property* RemoteDisplacement.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.State"></a>

### *property* RemoteDisplacement.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.StepSelection"></a>

### *property* RemoteDisplacement.StepSelection *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the step number at which the load is applied. Default: 1.
: Each step number corresponds to an RPM value specified in the analysis settings.
  Setting this property also updates  to the corresponding RPM value for the specified step number.
  An exception is thrown if  is not True or  is not .
  Valid range is [1, N], where N is . An exception is thrown if the value is out-of-range.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.StepSelectionRepresentation"></a>

### *property* RemoteDisplacement.StepSelectionRepresentation *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the string representation of the step numbers at which the load is applied.
An exception is thrown if any of the below conditions are met:
1. MultiStep is not True.
2. StepVarying is not Yes.
3. HarmonicMultiStepType is not Load_Step.
4. The input format is invalid.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.StepVarying"></a>

### *property* RemoteDisplacement.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the load is applied to a specific RPM/step number. Default: No.
: An exception is thrown if  is not True.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Suppressed"></a>

### *property* RemoteDisplacement.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.TransferableObjectId"></a>

### *property* RemoteDisplacement.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.VisibleProperties"></a>

### *property* RemoteDisplacement.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.XComponent"></a>

### *property* RemoteDisplacement.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.XCoordinate"></a>

### *property* RemoteDisplacement.XCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.YComponent"></a>

### *property* RemoteDisplacement.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.YCoordinate"></a>

### *property* RemoteDisplacement.YCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.ZComponent"></a>

### *property* RemoteDisplacement.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.ZCoordinate"></a>

### *property* RemoteDisplacement.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RemoteDisplacement.Activate"></a>

### RemoteDisplacement.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.AddComment"></a>

### RemoteDisplacement.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.AddFigure"></a>

### RemoteDisplacement.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.AddImage"></a>

### RemoteDisplacement.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Copy"></a>

### RemoteDisplacement.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.CopyTo"></a>

### RemoteDisplacement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.CreateObjRef"></a>

### RemoteDisplacement.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.CreateParameter"></a>

### RemoteDisplacement.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Cut"></a>

### RemoteDisplacement.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Delete"></a>

### RemoteDisplacement.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Duplicate"></a>

### RemoteDisplacement.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Equals"></a>

### RemoteDisplacement.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetAPIName"></a>

### RemoteDisplacement.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetActivateAtLoadStep"></a>

### RemoteDisplacement.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the remote displacement is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetAllProperties"></a>

### RemoteDisplacement.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetChildren"></a>

### RemoteDisplacement.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### RemoteDisplacement.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetComponentActivateAtLoadStep"></a>

### RemoteDisplacement.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetDetailsView"></a>

### RemoteDisplacement.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetEnumName"></a>

### RemoteDisplacement.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetHashCode"></a>

### RemoteDisplacement.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetIconFile"></a>

### RemoteDisplacement.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetLifetimeService"></a>

### RemoteDisplacement.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetObjectData"></a>

### RemoteDisplacement.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetParameter"></a>

### RemoteDisplacement.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetPath"></a>

### RemoteDisplacement.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetPropertyName"></a>

### RemoteDisplacement.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetPropertyValue"></a>

### RemoteDisplacement.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetVisibleProperties"></a>

### RemoteDisplacement.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetVisiblePropertyNames"></a>

### RemoteDisplacement.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GroupAllSimilarChildren"></a>

### RemoteDisplacement.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GroupSimilarObjects"></a>

### RemoteDisplacement.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.InitializeLifetimeService"></a>

### RemoteDisplacement.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.IsPropertyEditable"></a>

### RemoteDisplacement.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RemoteDisplacement.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.IsPropertyVisible"></a>

### RemoteDisplacement.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RemoteDisplacement.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Paste"></a>

### RemoteDisplacement.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.PromoteToNamedSelection"></a>

### RemoteDisplacement.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.PromoteToRemotePoint"></a>

### RemoteDisplacement.PromoteToRemotePoint() → Iterable[[Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint)]

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.PropertyByAPIName"></a>

### RemoteDisplacement.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.PropertyById"></a>

### RemoteDisplacement.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.PropertyByName"></a>

### RemoteDisplacement.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.RemoveFromGroup"></a>

### RemoteDisplacement.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.RemoveParameter"></a>

### RemoteDisplacement.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.SetActivateAtLoadStep"></a>

### RemoteDisplacement.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the remote displacement is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.SetComponentActivateAtLoadStep"></a>

### RemoteDisplacement.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

