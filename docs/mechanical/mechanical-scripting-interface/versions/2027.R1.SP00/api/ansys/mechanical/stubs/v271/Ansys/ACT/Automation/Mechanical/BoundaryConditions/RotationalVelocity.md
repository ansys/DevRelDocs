# `RotationalVelocity`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotationalVelocity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotationalVelocity(internalObject: Any)

<a id="RotationalVelocity"></a>

### *class* RotationalVelocity(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a RotationalVelocity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#RotationalVelocity.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#RotationalVelocity.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#RotationalVelocity.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#RotationalVelocity.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#RotationalVelocity.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#RotationalVelocity.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#RotationalVelocity.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#RotationalVelocity.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#RotationalVelocity.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#RotationalVelocity.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#RotationalVelocity.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#RotationalVelocity.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#RotationalVelocity.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#RotationalVelocity.GetActivateAtLoadStep)         | Gets whether the rotational velocity is active at the specified load step.                  |
| [`GetAllProperties`](#RotationalVelocity.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#RotationalVelocity.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#RotationalVelocity.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#RotationalVelocity.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#RotationalVelocity.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#RotationalVelocity.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#RotationalVelocity.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#RotationalVelocity.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#RotationalVelocity.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#RotationalVelocity.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#RotationalVelocity.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#RotationalVelocity.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#RotationalVelocity.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#RotationalVelocity.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#RotationalVelocity.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#RotationalVelocity.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#RotationalVelocity.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#RotationalVelocity.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#RotationalVelocity.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#RotationalVelocity.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#RotationalVelocity.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#RotationalVelocity.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#RotationalVelocity.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#RotationalVelocity.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#RotationalVelocity.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#RotationalVelocity.SetActivateAtLoadStep)         | Sets whether the rotational velocity is active at the specified load step.                  |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#RotationalVelocity.AttachedRefs)                         | AttachedRefs property.                                                                                                                                                                        |
| [`Axis`](#RotationalVelocity.Axis)                                         | Gets or sets the Axis.                                                                                                                                                                        |
| [`Children`](#RotationalVelocity.Children)                                 | Gets the list of children.                                                                                                                                                                    |
| [`ClsId`](#RotationalVelocity.ClsId)                                       | ClsId property.                                                                                                                                                                               |
| [`Comments`](#RotationalVelocity.Comments)                                 | Gets the list of associated comments.                                                                                                                                                         |
| [`CoordinateSystem`](#CoordinateSystem)              | Gets or sets the CoordinateSystem.                                                                                                                                                            |
| [`DataModelObjectCategory`](#RotationalVelocity.DataModelObjectCategory)   | Gets the current DataModelObject's category.                                                                                                                                                  |
| [`DefineBy`](#RotationalVelocity.DefineBy)                                 | Gets or sets the DefineBy.                                                                                                                                                                    |
| [`Figures`](#RotationalVelocity.Figures)                                   | Gets the list of associated figures.                                                                                                                                                          |
| [`GroupingFolder`](#RotationalVelocity.GroupingFolder)                     | GroupingFolder property.                                                                                                                                                                      |
| [`HarmonicIndex`](#RotationalVelocity.HarmonicIndex)                       | Gets or sets the harmonic index in which to apply the rotational velocity in a multistage analysis.                                                                                           |
| [`IconName`](#RotationalVelocity.IconName)                                 | IconName property.                                                                                                                                                                            |
| [`Images`](#RotationalVelocity.Images)                                     | Gets the list of associated images.                                                                                                                                                           |
| [`ImportableObjectSourceId`](#RotationalVelocity.ImportableObjectSourceId) | ImportableObjectSourceId property.                                                                                                                                                            |
| [`IndependentVariable`](#RotationalVelocity.IndependentVariable)           | Gets or sets the IndependentVariable.                                                                                                                                                         |
| [`InternalObject`](#RotationalVelocity.InternalObject)                     | Gets the internal object. For advanced usage only.                                                                                                                                            |
| [`Location`](#RotationalVelocity.Location)                                 | Gets or sets the Location.                                                                                                                                                                    |
| [`Magnitude`](#RotationalVelocity.Magnitude)                               | Gets the Magnitude.                                                                                                                                                                           |
| [`Name`](#RotationalVelocity.Name)                                         | Name property.                                                                                                                                                                                |
| [`NonCyclicLoadingType`](#RotationalVelocity.NonCyclicLoadingType)         | Gets or sets the NonCyclicLoadingType. This property is used to control the visibility of the harmonic index property when set to HarmonicIndex. Only No and HarmonicIndex are valid entries. |
| [`NumberOfSegments`](#RotationalVelocity.NumberOfSegments)                 | Gets or sets the NumberOfSegments.                                                                                                                                                            |
| [`ObjectId`](#RotationalVelocity.ObjectId)                                 | ObjectId property.                                                                                                                                                                            |
| [`ObjectState`](#RotationalVelocity.ObjectState)                           | ObjectState property.                                                                                                                                                                         |
| [`ObjectTags`](#RotationalVelocity.ObjectTags)                             | ObjectTags property.                                                                                                                                                                          |
| [`Parent`](#RotationalVelocity.Parent)                                     | Parent property.                                                                                                                                                                              |
| [`Properties`](#RotationalVelocity.Properties)                             | Gets the list of properties for this object.                                                                                                                                                  |
| [`ReadOnly`](#RotationalVelocity.ReadOnly)                                 | Gets or sets the ReadOnly.                                                                                                                                                                    |
| [`State`](#RotationalVelocity.State)                                       | State property.                                                                                                                                                                               |
| [`Suppressed`](#RotationalVelocity.Suppressed)                             | Gets or sets the Suppressed.                                                                                                                                                                  |
| [`TransferableObjectId`](#RotationalVelocity.TransferableObjectId)         | TransferableObjectId property.                                                                                                                                                                |
| [`VisibleProperties`](#RotationalVelocity.VisibleProperties)               | Gets the list of properties that are visible for this object.                                                                                                                                 |
| [`XComponent`](#RotationalVelocity.XComponent)                             | Gets the XComponent.                                                                                                                                                                          |
| [`XCoordinate`](#RotationalVelocity.XCoordinate)                           | Gets or sets the XCoordinate.                                                                                                                                                                 |
| [`YComponent`](#RotationalVelocity.YComponent)                             | Gets the YComponent.                                                                                                                                                                          |
| [`YCoordinate`](#RotationalVelocity.YCoordinate)                           | Gets or sets the YCoordinate.                                                                                                                                                                 |
| [`ZComponent`](#RotationalVelocity.ZComponent)                             | Gets the ZComponent.                                                                                                                                                                          |
| [`ZCoordinate`](#RotationalVelocity.ZCoordinate)                           | Gets or sets the ZCoordinate.                                                                                                                                                                 |

<a id="property-detail"></a>

## Property detail

<a id="RotationalVelocity.AttachedRefs"></a>

### *property* RotationalVelocity.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Axis"></a>

### *property* RotationalVelocity.Axis *: [Ansys.Mechanical.Math.BoundVector](../../../../Mechanical/Math/BoundVector.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Math.BoundVector) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Children"></a>

### *property* RotationalVelocity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.ClsId"></a>

### *property* RotationalVelocity.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Comments"></a>

### *property* RotationalVelocity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.CoordinateSystem"></a>

### *property* RotationalVelocity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.DataModelObjectCategory"></a>

### *property* RotationalVelocity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.DefineBy"></a>

### *property* RotationalVelocity.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Figures"></a>

### *property* RotationalVelocity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GroupingFolder"></a>

### *property* RotationalVelocity.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.HarmonicIndex"></a>

### *property* RotationalVelocity.HarmonicIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the harmonic index in which to apply the rotational velocity in a multistage analysis.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.IconName"></a>

### *property* RotationalVelocity.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Images"></a>

### *property* RotationalVelocity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.ImportableObjectSourceId"></a>

### *property* RotationalVelocity.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.IndependentVariable"></a>

### *property* RotationalVelocity.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.InternalObject"></a>

### *property* RotationalVelocity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRotationAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Location"></a>

### *property* RotationalVelocity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Magnitude"></a>

### *property* RotationalVelocity.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Name"></a>

### *property* RotationalVelocity.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.NonCyclicLoadingType"></a>

### *property* RotationalVelocity.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonCyclicLoadingType. This property is used to control the visibility of the harmonic index property when set to HarmonicIndex. Only No and HarmonicIndex are valid entries.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.NumberOfSegments"></a>

### *property* RotationalVelocity.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.ObjectId"></a>

### *property* RotationalVelocity.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.ObjectState"></a>

### *property* RotationalVelocity.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.ObjectTags"></a>

### *property* RotationalVelocity.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Parent"></a>

### *property* RotationalVelocity.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Properties"></a>

### *property* RotationalVelocity.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.ReadOnly"></a>

### *property* RotationalVelocity.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.State"></a>

### *property* RotationalVelocity.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Suppressed"></a>

### *property* RotationalVelocity.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.TransferableObjectId"></a>

### *property* RotationalVelocity.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.VisibleProperties"></a>

### *property* RotationalVelocity.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.XComponent"></a>

### *property* RotationalVelocity.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.XCoordinate"></a>

### *property* RotationalVelocity.XCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.YComponent"></a>

### *property* RotationalVelocity.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.YCoordinate"></a>

### *property* RotationalVelocity.YCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.ZComponent"></a>

### *property* RotationalVelocity.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.ZCoordinate"></a>

### *property* RotationalVelocity.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RotationalVelocity.Activate"></a>

### RotationalVelocity.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.AddComment"></a>

### RotationalVelocity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.AddFigure"></a>

### RotationalVelocity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.AddImage"></a>

### RotationalVelocity.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Copy"></a>

### RotationalVelocity.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.CopyTo"></a>

### RotationalVelocity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.CreateObjRef"></a>

### RotationalVelocity.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.CreateParameter"></a>

### RotationalVelocity.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Cut"></a>

### RotationalVelocity.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Delete"></a>

### RotationalVelocity.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Duplicate"></a>

### RotationalVelocity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Equals"></a>

### RotationalVelocity.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetAPIName"></a>

### RotationalVelocity.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetActivateAtLoadStep"></a>

### RotationalVelocity.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the rotational velocity is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetAllProperties"></a>

### RotationalVelocity.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetChildren"></a>

### RotationalVelocity.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### RotationalVelocity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetDetailsView"></a>

### RotationalVelocity.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetEnumName"></a>

### RotationalVelocity.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetHashCode"></a>

### RotationalVelocity.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetIconFile"></a>

### RotationalVelocity.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetLifetimeService"></a>

### RotationalVelocity.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetObjectData"></a>

### RotationalVelocity.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetParameter"></a>

### RotationalVelocity.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetPath"></a>

### RotationalVelocity.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetPropertyName"></a>

### RotationalVelocity.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetPropertyValue"></a>

### RotationalVelocity.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetVisibleProperties"></a>

### RotationalVelocity.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetVisiblePropertyNames"></a>

### RotationalVelocity.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GroupAllSimilarChildren"></a>

### RotationalVelocity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GroupSimilarObjects"></a>

### RotationalVelocity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.InitializeLifetimeService"></a>

### RotationalVelocity.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.IsPropertyEditable"></a>

### RotationalVelocity.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RotationalVelocity.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.IsPropertyVisible"></a>

### RotationalVelocity.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RotationalVelocity.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Paste"></a>

### RotationalVelocity.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.PropertyByAPIName"></a>

### RotationalVelocity.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.PropertyById"></a>

### RotationalVelocity.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.PropertyByName"></a>

### RotationalVelocity.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.RemoveFromGroup"></a>

### RotationalVelocity.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.RemoveParameter"></a>

### RotationalVelocity.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.SetActivateAtLoadStep"></a>

### RotationalVelocity.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the rotational velocity is active at the specified load step.

<!-- !! processed by numpydoc !! -->

