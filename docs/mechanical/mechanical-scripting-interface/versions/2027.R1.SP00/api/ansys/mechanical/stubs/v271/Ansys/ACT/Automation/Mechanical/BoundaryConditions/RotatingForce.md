# `RotatingForce`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotatingForce"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotatingForce(internalObject: Any)

<a id="RotatingForce"></a>

### *class* RotatingForce(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a RotatingForce.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#RotatingForce.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#RotatingForce.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#RotatingForce.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#RotatingForce.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#RotatingForce.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#RotatingForce.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#RotatingForce.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#RotatingForce.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#RotatingForce.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#RotatingForce.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#RotatingForce.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#RotatingForce.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#RotatingForce.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#RotatingForce.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#RotatingForce.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#RotatingForce.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#RotatingForce.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#RotatingForce.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#RotatingForce.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#RotatingForce.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#RotatingForce.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#RotatingForce.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#RotatingForce.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#RotatingForce.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#RotatingForce.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#RotatingForce.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#RotatingForce.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#RotatingForce.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#RotatingForce.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#RotatingForce.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#RotatingForce.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#RotatingForce.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#RotatingForce.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#RotatingForce.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#RotatingForce.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#RotatingForce.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#RotatingForce.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#RotatingForce.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#RotatingForce.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#RotatingForce.AttachedRefs)                                 | AttachedRefs property.                                                                   |
| [`Axis`](#RotatingForce.Axis)                                                 | Gets or sets the Axis.                                                                   |
| [`AxisComponentX`](#RotatingForce.AxisComponentX)                             | Gets the AxisComponentX.                                                                 |
| [`AxisComponentY`](#RotatingForce.AxisComponentY)                             | Gets the AxisComponentY.                                                                 |
| [`AxisComponentZ`](#RotatingForce.AxisComponentZ)                             | Gets the AxisComponentZ.                                                                 |
| [`AxisLocationX`](#RotatingForce.AxisLocationX)                               | Gets the AxisLocationX.                                                                  |
| [`AxisLocationY`](#RotatingForce.AxisLocationY)                               | Gets the AxisLocationY.                                                                  |
| [`AxisLocationZ`](#RotatingForce.AxisLocationZ)                               | Gets the AxisLocationZ.                                                                  |
| [`CalculatedFromUnbalancedMass`](#RotatingForce.CalculatedFromUnbalancedMass) | Gets or sets the CalculatedFromUnbalancedMass.                                           |
| [`Children`](#RotatingForce.Children)                                         | Gets the list of children.                                                               |
| [`ClsId`](#RotatingForce.ClsId)                                               | ClsId property.                                                                          |
| [`Comments`](#RotatingForce.Comments)                                         | Gets the list of associated comments.                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                 | Gets or sets the CoordinateSystem.                                                       |
| [`DataModelObjectCategory`](#RotatingForce.DataModelObjectCategory)           | Gets the current DataModelObject's category.                                             |
| [`DefineBy`](#RotatingForce.DefineBy)                                         | Gets or sets the DefineBy.                                                               |
| [`Figures`](#RotatingForce.Figures)                                           | Gets the list of associated figures.                                                     |
| [`GroupingFolder`](#RotatingForce.GroupingFolder)                             | GroupingFolder property.                                                                 |
| [`HitPointLocationX`](#RotatingForce.HitPointLocationX)                       | Gets the HitPointLocationX.                                                              |
| [`HitPointLocationY`](#RotatingForce.HitPointLocationY)                       | Gets the HitPointLocationY.                                                              |
| [`HitPointLocationZ`](#RotatingForce.HitPointLocationZ)                       | Gets the HitPointLocationZ.                                                              |
| [`HitPointNodeId`](#RotatingForce.HitPointNodeId)                             | Gets the HitPointNodeId.                                                                 |
| [`HitPointRemotePointSelection`](#RotatingForce.HitPointRemotePointSelection) | Gets or sets the HitPointRemotePointSelection.                                           |
| [`HitPointSelection`](#RotatingForce.HitPointSelection)                       | Gets or sets the HitPointSelection.                                                      |
| [`IconName`](#RotatingForce.IconName)                                         | IconName property.                                                                       |
| [`Images`](#RotatingForce.Images)                                             | Gets the list of associated images.                                                      |
| [`ImportableObjectSourceId`](#RotatingForce.ImportableObjectSourceId)         | ImportableObjectSourceId property.                                                       |
| [`InternalObject`](#RotatingForce.InternalObject)                             | Gets the internal object. For advanced usage only.                                       |
| [`Location`](#RotatingForce.Location)                                         | Gets or sets the Location.                                                               |
| [`Mass`](#RotatingForce.Mass)                                                 | Gets or sets the Mass.                                                                   |
| [`Name`](#RotatingForce.Name)                                                 | Name property.                                                                           |
| [`ObjectId`](#RotatingForce.ObjectId)                                         | ObjectId property.                                                                       |
| [`ObjectState`](#RotatingForce.ObjectState)                                   | ObjectState property.                                                                    |
| [`ObjectTags`](#RotatingForce.ObjectTags)                                     | ObjectTags property.                                                                     |
| [`Parent`](#RotatingForce.Parent)                                             | Parent property.                                                                         |
| [`PhaseAngle`](#RotatingForce.PhaseAngle)                                     | Gets or sets the PhaseAngle.                                                             |
| [`Properties`](#RotatingForce.Properties)                                     | Gets the list of properties for this object.                                             |
| [`ReadOnly`](#RotatingForce.ReadOnly)                                         | Gets or sets the ReadOnly.                                                               |
| [`RemotePointSelection`](#RotatingForce.RemotePointSelection)                 | Gets or sets the RemotePointSelection.                                                   |
| [`RotatingRadius`](#RotatingForce.RotatingRadius)                             | Gets or sets the RotatingRadius.                                                         |
| [`RpmSelection`](#RotatingForce.RpmSelection)                                 | Gets or sets the RPM value at which the load is applied.                                 |
| [`SharedRefBody`](#RotatingForce.SharedRefBody)                               | Gets or sets the SharedRefBody.                                                          |
| [`State`](#RotatingForce.State)                                               | State property.                                                                          |
| [`StepSelection`](#RotatingForce.StepSelection)                               | Gets or sets the step number at which the load is applied. Default: 1.                   |
| [`StepSelectionRepresentation`](#RotatingForce.StepSelectionRepresentation)   | Gets or sets the string representation of the step numbers at which the load is applied. |
| [`StepVarying`](#RotatingForce.StepVarying)                                   | Gets or sets whether the load is applied to a specific RPM/step number. Default: No.     |
| [`Suppressed`](#RotatingForce.Suppressed)                                     | Gets or sets the Suppressed.                                                             |
| [`SynchronousRatio`](#RotatingForce.SynchronousRatio)                         | Gets or sets the SynchronousRatio.                                                       |
| [`TransferableObjectId`](#RotatingForce.TransferableObjectId)                 | TransferableObjectId property.                                                           |
| [`UnbalancedForceMagnitude`](#RotatingForce.UnbalancedForceMagnitude)         | Gets or sets the UnbalancedForceMagnitude.                                               |
| [`VisibleProperties`](#RotatingForce.VisibleProperties)                       | Gets the list of properties that are visible for this object.                            |
| [`XCoordinate`](#RotatingForce.XCoordinate)                                   | Gets or sets the XCoordinate.                                                            |
| [`YCoordinate`](#RotatingForce.YCoordinate)                                   | Gets or sets the YCoordinate.                                                            |
| [`ZCoordinate`](#RotatingForce.ZCoordinate)                                   | Gets or sets the ZCoordinate.                                                            |

<a id="property-detail"></a>

## Property detail

<a id="RotatingForce.AttachedRefs"></a>

### *property* RotatingForce.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Axis"></a>

### *property* RotatingForce.Axis *: [Ansys.Mechanical.Math.BoundVector](../../../../Mechanical/Math/BoundVector.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Math.BoundVector) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.AxisComponentX"></a>

### *property* RotatingForce.AxisComponentX *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the AxisComponentX.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.AxisComponentY"></a>

### *property* RotatingForce.AxisComponentY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the AxisComponentY.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.AxisComponentZ"></a>

### *property* RotatingForce.AxisComponentZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the AxisComponentZ.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.AxisLocationX"></a>

### *property* RotatingForce.AxisLocationX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the AxisLocationX.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.AxisLocationY"></a>

### *property* RotatingForce.AxisLocationY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the AxisLocationY.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.AxisLocationZ"></a>

### *property* RotatingForce.AxisLocationZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the AxisLocationZ.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.CalculatedFromUnbalancedMass"></a>

### *property* RotatingForce.CalculatedFromUnbalancedMass *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculatedFromUnbalancedMass.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Children"></a>

### *property* RotatingForce.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.ClsId"></a>

### *property* RotatingForce.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Comments"></a>

### *property* RotatingForce.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.CoordinateSystem"></a>

### *property* RotatingForce.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.DataModelObjectCategory"></a>

### *property* RotatingForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.DefineBy"></a>

### *property* RotatingForce.DefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Figures"></a>

### *property* RotatingForce.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GroupingFolder"></a>

### *property* RotatingForce.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.HitPointLocationX"></a>

### *property* RotatingForce.HitPointLocationX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the HitPointLocationX.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.HitPointLocationY"></a>

### *property* RotatingForce.HitPointLocationY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the HitPointLocationY.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.HitPointLocationZ"></a>

### *property* RotatingForce.HitPointLocationZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the HitPointLocationZ.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.HitPointNodeId"></a>

### *property* RotatingForce.HitPointNodeId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the HitPointNodeId.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.HitPointRemotePointSelection"></a>

### *property* RotatingForce.HitPointRemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HitPointRemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.HitPointSelection"></a>

### *property* RotatingForce.HitPointSelection *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HitPointSelection.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.IconName"></a>

### *property* RotatingForce.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Images"></a>

### *property* RotatingForce.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.ImportableObjectSourceId"></a>

### *property* RotatingForce.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.InternalObject"></a>

### *property* RotatingForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Location"></a>

### *property* RotatingForce.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Mass"></a>

### *property* RotatingForce.Mass *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mass.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Name"></a>

### *property* RotatingForce.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.ObjectId"></a>

### *property* RotatingForce.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.ObjectState"></a>

### *property* RotatingForce.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.ObjectTags"></a>

### *property* RotatingForce.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Parent"></a>

### *property* RotatingForce.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.PhaseAngle"></a>

### *property* RotatingForce.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Properties"></a>

### *property* RotatingForce.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.ReadOnly"></a>

### *property* RotatingForce.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.RemotePointSelection"></a>

### *property* RotatingForce.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.RotatingRadius"></a>

### *property* RotatingForce.RotatingRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RotatingRadius.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.RpmSelection"></a>

### *property* RotatingForce.RpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM value at which the load is applied.
: An exception is thrown if MultiStep is not True, StepVarying is not Yes, or HarmonicMultiStepType is not RPM.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.SharedRefBody"></a>

### *property* RotatingForce.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.State"></a>

### *property* RotatingForce.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.StepSelection"></a>

### *property* RotatingForce.StepSelection *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the step number at which the load is applied. Default: 1.
: Each step number corresponds to an RPM value specified in the analysis settings.
  Setting this property also updates  to the corresponding RPM value for the specified step number.
  An exception is thrown if  is not True or  is not .
  Valid range is [1, N], where N is . An exception is thrown if the value is out-of-range.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.StepSelectionRepresentation"></a>

### *property* RotatingForce.StepSelectionRepresentation *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the string representation of the step numbers at which the load is applied.
An exception is thrown if any of the below conditions are met:
1. MultiStep is not True.
2. StepVarying is not Yes.
3. HarmonicMultiStepType is not Load_Step.
4. The input format is invalid.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.StepVarying"></a>

### *property* RotatingForce.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the load is applied to a specific RPM/step number. Default: No.
: An exception is thrown if  is not True.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Suppressed"></a>

### *property* RotatingForce.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.SynchronousRatio"></a>

### *property* RotatingForce.SynchronousRatio *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SynchronousRatio.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.TransferableObjectId"></a>

### *property* RotatingForce.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.UnbalancedForceMagnitude"></a>

### *property* RotatingForce.UnbalancedForceMagnitude *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UnbalancedForceMagnitude.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.VisibleProperties"></a>

### *property* RotatingForce.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.XCoordinate"></a>

### *property* RotatingForce.XCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.YCoordinate"></a>

### *property* RotatingForce.YCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.ZCoordinate"></a>

### *property* RotatingForce.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RotatingForce.Activate"></a>

### RotatingForce.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.AddComment"></a>

### RotatingForce.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.AddFigure"></a>

### RotatingForce.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.AddImage"></a>

### RotatingForce.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Copy"></a>

### RotatingForce.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.CopyTo"></a>

### RotatingForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.CreateObjRef"></a>

### RotatingForce.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.CreateParameter"></a>

### RotatingForce.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Cut"></a>

### RotatingForce.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Delete"></a>

### RotatingForce.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Duplicate"></a>

### RotatingForce.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Equals"></a>

### RotatingForce.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GetAPIName"></a>

### RotatingForce.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GetAllProperties"></a>

### RotatingForce.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GetChildren"></a>

### RotatingForce.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### RotatingForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GetDetailsView"></a>

### RotatingForce.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GetEnumName"></a>

### RotatingForce.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GetHashCode"></a>

### RotatingForce.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GetIconFile"></a>

### RotatingForce.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GetLifetimeService"></a>

### RotatingForce.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GetObjectData"></a>

### RotatingForce.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GetParameter"></a>

### RotatingForce.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GetPath"></a>

### RotatingForce.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GetPropertyName"></a>

### RotatingForce.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GetPropertyValue"></a>

### RotatingForce.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GetVisibleProperties"></a>

### RotatingForce.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GetVisiblePropertyNames"></a>

### RotatingForce.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GroupAllSimilarChildren"></a>

### RotatingForce.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GroupSimilarObjects"></a>

### RotatingForce.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.InitializeLifetimeService"></a>

### RotatingForce.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.IsPropertyEditable"></a>

### RotatingForce.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RotatingForce.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.IsPropertyVisible"></a>

### RotatingForce.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RotatingForce.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Paste"></a>

### RotatingForce.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.PromoteToNamedSelection"></a>

### RotatingForce.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.PropertyByAPIName"></a>

### RotatingForce.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.PropertyById"></a>

### RotatingForce.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.PropertyByName"></a>

### RotatingForce.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.RemoveFromGroup"></a>

### RotatingForce.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.RemoveParameter"></a>

### RotatingForce.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

