# `HydrostaticPressure`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.HydrostaticPressure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.HydrostaticPressure(internalObject: Any)

<a id="HydrostaticPressure"></a>

### *class* HydrostaticPressure(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a HydrostaticPressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#HydrostaticPressure.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#HydrostaticPressure.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#HydrostaticPressure.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#HydrostaticPressure.AddImage)                                             | Creates a new child Image.                                                                  |
| [`Copy`](#HydrostaticPressure.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#HydrostaticPressure.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#HydrostaticPressure.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#HydrostaticPressure.CreateParameter)                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#HydrostaticPressure.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#HydrostaticPressure.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#HydrostaticPressure.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#HydrostaticPressure.Equals)                                                 | Equals method.                                                                              |
| [`GetAPIName`](#HydrostaticPressure.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#HydrostaticPressure.GetActivateAtLoadStep)                   | Gets whether the hydrostatic pressure is active at the specified load step.                 |
| [`GetAllProperties`](#HydrostaticPressure.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#HydrostaticPressure.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetComponentActivateAtLoadStep`](#HydrostaticPressure.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                                      |
| [`GetDetailsView`](#HydrostaticPressure.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#HydrostaticPressure.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#HydrostaticPressure.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#HydrostaticPressure.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#HydrostaticPressure.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#HydrostaticPressure.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#HydrostaticPressure.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#HydrostaticPressure.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#HydrostaticPressure.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#HydrostaticPressure.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#HydrostaticPressure.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#HydrostaticPressure.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#HydrostaticPressure.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#HydrostaticPressure.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#HydrostaticPressure.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#HydrostaticPressure.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#HydrostaticPressure.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#HydrostaticPressure.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#HydrostaticPressure.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#HydrostaticPressure.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#HydrostaticPressure.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#HydrostaticPressure.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#HydrostaticPressure.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#HydrostaticPressure.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#HydrostaticPressure.SetActivateAtLoadStep)                   | Sets whether the hydrostatic pressure is active at the specified load step.                 |
| [`SetComponentActivateAtLoadStep`](#HydrostaticPressure.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                                      |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AppliedBy`](#HydrostaticPressure.AppliedBy)                               | Gets or sets the AppliedBy.                                   |
| [`AttachedRefs`](#HydrostaticPressure.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#HydrostaticPressure.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#HydrostaticPressure.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#HydrostaticPressure.Comments)                                 | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#HydrostaticPressure.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`DefineBy`](#HydrostaticPressure.DefineBy)                                 | Gets or sets the DefineBy.                                    |
| [`Direction`](#HydrostaticPressure.Direction)                               | Gets or sets the Direction.                                   |
| [`Figures`](#HydrostaticPressure.Figures)                                   | Gets the list of associated figures.                          |
| [`FluidDensity`](#HydrostaticPressure.FluidDensity)                         | Gets or sets the FluidDensity.                                |
| [`GroupingFolder`](#HydrostaticPressure.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#HydrostaticPressure.IconName)                                 | IconName property.                                            |
| [`Images`](#HydrostaticPressure.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#HydrostaticPressure.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#HydrostaticPressure.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#HydrostaticPressure.Location)                                 | Gets or sets the Location.                                    |
| [`Magnitude`](#HydrostaticPressure.Magnitude)                               | Gets the Magnitude.                                           |
| [`Name`](#HydrostaticPressure.Name)                                         | Name property.                                                |
| [`ObjectId`](#HydrostaticPressure.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#HydrostaticPressure.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#HydrostaticPressure.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#HydrostaticPressure.Parent)                                     | Parent property.                                              |
| [`Properties`](#HydrostaticPressure.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#HydrostaticPressure.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#HydrostaticPressure.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`ShellFace`](#HydrostaticPressure.ShellFace)                               | Gets or sets the ShellFace.                                   |
| [`State`](#HydrostaticPressure.State)                                       | State property.                                               |
| [`Suppressed`](#HydrostaticPressure.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#HydrostaticPressure.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#HydrostaticPressure.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`XComponent`](#HydrostaticPressure.XComponent)                             | Gets the XComponent.                                          |
| [`XCoordinate`](#HydrostaticPressure.XCoordinate)                           | Gets or sets the XCoordinate.                                 |
| [`YComponent`](#HydrostaticPressure.YComponent)                             | Gets the YComponent.                                          |
| [`YCoordinate`](#HydrostaticPressure.YCoordinate)                           | Gets or sets the YCoordinate.                                 |
| [`ZComponent`](#HydrostaticPressure.ZComponent)                             | Gets the ZComponent.                                          |
| [`ZCoordinate`](#HydrostaticPressure.ZCoordinate)                           | Gets or sets the ZCoordinate.                                 |

<a id="property-detail"></a>

## Property detail

<a id="HydrostaticPressure.AppliedBy"></a>

### *property* HydrostaticPressure.AppliedBy *: [Ansys.Mechanical.DataModel.Enums.LoadAppliedBy](../../../../Mechanical/DataModel/Enums/LoadAppliedBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadAppliedBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.AttachedRefs"></a>

### *property* HydrostaticPressure.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Children"></a>

### *property* HydrostaticPressure.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.ClsId"></a>

### *property* HydrostaticPressure.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Comments"></a>

### *property* HydrostaticPressure.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.CoordinateSystem"></a>

### *property* HydrostaticPressure.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.DataModelObjectCategory"></a>

### *property* HydrostaticPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.DefineBy"></a>

### *property* HydrostaticPressure.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Direction"></a>

### *property* HydrostaticPressure.Direction *: [Ansys.ACT.Math.Vector3D](../../../Math/Vector3D.md#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Figures"></a>

### *property* HydrostaticPressure.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.FluidDensity"></a>

### *property* HydrostaticPressure.FluidDensity *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FluidDensity.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GroupingFolder"></a>

### *property* HydrostaticPressure.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.IconName"></a>

### *property* HydrostaticPressure.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Images"></a>

### *property* HydrostaticPressure.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.ImportableObjectSourceId"></a>

### *property* HydrostaticPressure.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.InternalObject"></a>

### *property* HydrostaticPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Location"></a>

### *property* HydrostaticPressure.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Magnitude"></a>

### *property* HydrostaticPressure.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Name"></a>

### *property* HydrostaticPressure.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.ObjectId"></a>

### *property* HydrostaticPressure.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.ObjectState"></a>

### *property* HydrostaticPressure.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.ObjectTags"></a>

### *property* HydrostaticPressure.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Parent"></a>

### *property* HydrostaticPressure.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Properties"></a>

### *property* HydrostaticPressure.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.ReadOnly"></a>

### *property* HydrostaticPressure.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.SharedRefBody"></a>

### *property* HydrostaticPressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.ShellFace"></a>

### *property* HydrostaticPressure.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShellFace.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.State"></a>

### *property* HydrostaticPressure.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Suppressed"></a>

### *property* HydrostaticPressure.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.TransferableObjectId"></a>

### *property* HydrostaticPressure.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.VisibleProperties"></a>

### *property* HydrostaticPressure.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.XComponent"></a>

### *property* HydrostaticPressure.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.XCoordinate"></a>

### *property* HydrostaticPressure.XCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.YComponent"></a>

### *property* HydrostaticPressure.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.YCoordinate"></a>

### *property* HydrostaticPressure.YCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.ZComponent"></a>

### *property* HydrostaticPressure.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.ZCoordinate"></a>

### *property* HydrostaticPressure.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="HydrostaticPressure.Activate"></a>

### HydrostaticPressure.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.AddComment"></a>

### HydrostaticPressure.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.AddFigure"></a>

### HydrostaticPressure.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.AddImage"></a>

### HydrostaticPressure.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Copy"></a>

### HydrostaticPressure.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.CopyTo"></a>

### HydrostaticPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.CreateObjRef"></a>

### HydrostaticPressure.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.CreateParameter"></a>

### HydrostaticPressure.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Cut"></a>

### HydrostaticPressure.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Delete"></a>

### HydrostaticPressure.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Duplicate"></a>

### HydrostaticPressure.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Equals"></a>

### HydrostaticPressure.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetAPIName"></a>

### HydrostaticPressure.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetActivateAtLoadStep"></a>

### HydrostaticPressure.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the hydrostatic pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetAllProperties"></a>

### HydrostaticPressure.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetChildren"></a>

### HydrostaticPressure.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### HydrostaticPressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetComponentActivateAtLoadStep"></a>

### HydrostaticPressure.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetDetailsView"></a>

### HydrostaticPressure.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetEnumName"></a>

### HydrostaticPressure.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetHashCode"></a>

### HydrostaticPressure.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetIconFile"></a>

### HydrostaticPressure.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetLifetimeService"></a>

### HydrostaticPressure.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetObjectData"></a>

### HydrostaticPressure.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetParameter"></a>

### HydrostaticPressure.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetPath"></a>

### HydrostaticPressure.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetPropertyName"></a>

### HydrostaticPressure.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetPropertyValue"></a>

### HydrostaticPressure.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetVisibleProperties"></a>

### HydrostaticPressure.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetVisiblePropertyNames"></a>

### HydrostaticPressure.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GroupAllSimilarChildren"></a>

### HydrostaticPressure.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GroupSimilarObjects"></a>

### HydrostaticPressure.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.InitializeLifetimeService"></a>

### HydrostaticPressure.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.IsPropertyEditable"></a>

### HydrostaticPressure.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### HydrostaticPressure.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.IsPropertyVisible"></a>

### HydrostaticPressure.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### HydrostaticPressure.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Paste"></a>

### HydrostaticPressure.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.PromoteToNamedSelection"></a>

### HydrostaticPressure.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.PropertyByAPIName"></a>

### HydrostaticPressure.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.PropertyById"></a>

### HydrostaticPressure.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.PropertyByName"></a>

### HydrostaticPressure.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.RemoveFromGroup"></a>

### HydrostaticPressure.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.RemoveParameter"></a>

### HydrostaticPressure.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.SetActivateAtLoadStep"></a>

### HydrostaticPressure.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the hydrostatic pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.SetComponentActivateAtLoadStep"></a>

### HydrostaticPressure.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

