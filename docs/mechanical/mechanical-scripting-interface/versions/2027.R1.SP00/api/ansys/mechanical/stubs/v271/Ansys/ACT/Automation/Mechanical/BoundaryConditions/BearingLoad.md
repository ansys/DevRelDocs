# `BearingLoad`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.BearingLoad"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.BearingLoad(internalObject: Any)

<a id="BearingLoad"></a>

### *class* BearingLoad(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a BearingLoad.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#BearingLoad.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#BearingLoad.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#BearingLoad.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#BearingLoad.AddImage)                                             | Creates a new child Image.                                                                  |
| [`Copy`](#BearingLoad.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#BearingLoad.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#BearingLoad.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#BearingLoad.CreateParameter)                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#BearingLoad.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#BearingLoad.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#BearingLoad.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#BearingLoad.Equals)                                                 | Equals method.                                                                              |
| [`GetAPIName`](#BearingLoad.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#BearingLoad.GetActivateAtLoadStep)                   | Gets whether the bearing load is active at the specified load step.                         |
| [`GetAllProperties`](#BearingLoad.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#BearingLoad.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetComponentActivateAtLoadStep`](#BearingLoad.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                                      |
| [`GetDetailsView`](#BearingLoad.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#BearingLoad.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#BearingLoad.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#BearingLoad.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#BearingLoad.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#BearingLoad.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#BearingLoad.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#BearingLoad.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#BearingLoad.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#BearingLoad.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#BearingLoad.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#BearingLoad.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#BearingLoad.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#BearingLoad.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#BearingLoad.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#BearingLoad.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#BearingLoad.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#BearingLoad.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#BearingLoad.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#BearingLoad.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#BearingLoad.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#BearingLoad.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#BearingLoad.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#BearingLoad.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#BearingLoad.SetActivateAtLoadStep)                   | Sets whether the bearing load is active at the specified load step.                         |
| [`SetComponentActivateAtLoadStep`](#BearingLoad.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                                      |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#BearingLoad.AttachedRefs)                               | AttachedRefs property.                                                                                                  |
| [`Children`](#BearingLoad.Children)                                       | Gets the list of children.                                                                                              |
| [`ClsId`](#BearingLoad.ClsId)                                             | ClsId property.                                                                                                         |
| [`Comments`](#BearingLoad.Comments)                                       | Gets the list of associated comments.                                                                                   |
| [`CoordinateSystem`](#CoordinateSystem)             | Gets or sets the CoordinateSystem.                                                                                      |
| [`DataModelObjectCategory`](#BearingLoad.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                                            |
| [`DefineBy`](#BearingLoad.DefineBy)                                       | Gets or sets the DefineBy.                                                                                              |
| [`Direction`](#BearingLoad.Direction)                                     | Gets or sets the Direction.                                                                                             |
| [`Figures`](#BearingLoad.Figures)                                         | Gets the list of associated figures.                                                                                    |
| [`GroupingFolder`](#BearingLoad.GroupingFolder)                           | GroupingFolder property.                                                                                                |
| [`IconName`](#BearingLoad.IconName)                                       | IconName property.                                                                                                      |
| [`Images`](#BearingLoad.Images)                                           | Gets the list of associated images.                                                                                     |
| [`ImportableObjectSourceId`](#BearingLoad.ImportableObjectSourceId)       | ImportableObjectSourceId property.                                                                                      |
| [`InternalObject`](#BearingLoad.InternalObject)                           | Gets the internal object. For advanced usage only.                                                                      |
| [`LoadVectorAssignment`](#BearingLoad.LoadVectorAssignment)               | Gets or sets whether the LoadVectorAssignment is LoadVectorAssignment_ProgramControlled or LoadVectorAssignment_Manual. |
| [`LoadVectorNumber`](#BearingLoad.LoadVectorNumber)                       | Gets or sets the load vector number for the bearing load.                                                               |
| [`Location`](#BearingLoad.Location)                                       | Gets or sets the Location.                                                                                              |
| [`Magnitude`](#BearingLoad.Magnitude)                                     | Gets the Magnitude.                                                                                                     |
| [`Name`](#BearingLoad.Name)                                               | Name property.                                                                                                          |
| [`ObjectId`](#BearingLoad.ObjectId)                                       | ObjectId property.                                                                                                      |
| [`ObjectState`](#BearingLoad.ObjectState)                                 | ObjectState property.                                                                                                   |
| [`ObjectTags`](#BearingLoad.ObjectTags)                                   | ObjectTags property.                                                                                                    |
| [`Parent`](#BearingLoad.Parent)                                           | Parent property.                                                                                                        |
| [`Properties`](#BearingLoad.Properties)                                   | Gets the list of properties for this object.                                                                            |
| [`ReadOnly`](#BearingLoad.ReadOnly)                                       | Gets or sets the ReadOnly.                                                                                              |
| [`RpmSelection`](#BearingLoad.RpmSelection)                               | Gets or sets the RPM value at which the load is applied.                                                                |
| [`SharedRefBody`](#BearingLoad.SharedRefBody)                             | Gets or sets the SharedRefBody.                                                                                         |
| [`State`](#BearingLoad.State)                                             | State property.                                                                                                         |
| [`StepSelection`](#BearingLoad.StepSelection)                             | Gets or sets the step number at which the load is applied. Default: 1.                                                  |
| [`StepSelectionRepresentation`](#BearingLoad.StepSelectionRepresentation) | Gets or sets the string representation of the step numbers at which the load is applied.                                |
| [`StepVarying`](#BearingLoad.StepVarying)                                 | Gets or sets whether the load is applied to a specific RPM/step number. Default: No.                                    |
| [`Suppressed`](#BearingLoad.Suppressed)                                   | Gets or sets the Suppressed.                                                                                            |
| [`TransferableObjectId`](#BearingLoad.TransferableObjectId)               | TransferableObjectId property.                                                                                          |
| [`VisibleProperties`](#BearingLoad.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                                           |
| [`XComponent`](#BearingLoad.XComponent)                                   | Gets the XComponent.                                                                                                    |
| [`YComponent`](#BearingLoad.YComponent)                                   | Gets the YComponent.                                                                                                    |
| [`ZComponent`](#BearingLoad.ZComponent)                                   | Gets the ZComponent.                                                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="BearingLoad.AttachedRefs"></a>

### *property* BearingLoad.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Children"></a>

### *property* BearingLoad.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.ClsId"></a>

### *property* BearingLoad.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Comments"></a>

### *property* BearingLoad.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.CoordinateSystem"></a>

### *property* BearingLoad.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.DataModelObjectCategory"></a>

### *property* BearingLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.DefineBy"></a>

### *property* BearingLoad.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Direction"></a>

### *property* BearingLoad.Direction *: [Ansys.ACT.Math.Vector3D](../../../Math/Vector3D.md#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Figures"></a>

### *property* BearingLoad.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GroupingFolder"></a>

### *property* BearingLoad.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.IconName"></a>

### *property* BearingLoad.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Images"></a>

### *property* BearingLoad.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.ImportableObjectSourceId"></a>

### *property* BearingLoad.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.InternalObject"></a>

### *property* BearingLoad.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.LoadVectorAssignment"></a>

### *property* BearingLoad.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the LoadVectorAssignment is LoadVectorAssignment_ProgramControlled or LoadVectorAssignment_Manual.
: Default: LoadVectorAssignment_ProgramControlled.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.LoadVectorNumber"></a>

### *property* BearingLoad.LoadVectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the bearing load.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Location"></a>

### *property* BearingLoad.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Magnitude"></a>

### *property* BearingLoad.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Name"></a>

### *property* BearingLoad.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.ObjectId"></a>

### *property* BearingLoad.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.ObjectState"></a>

### *property* BearingLoad.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.ObjectTags"></a>

### *property* BearingLoad.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Parent"></a>

### *property* BearingLoad.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Properties"></a>

### *property* BearingLoad.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.ReadOnly"></a>

### *property* BearingLoad.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.RpmSelection"></a>

### *property* BearingLoad.RpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM value at which the load is applied.
: An exception is thrown if MultiStep is not True, StepVarying is not Yes, or HarmonicMultiStepType is not RPM.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.SharedRefBody"></a>

### *property* BearingLoad.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.State"></a>

### *property* BearingLoad.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.StepSelection"></a>

### *property* BearingLoad.StepSelection *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the step number at which the load is applied. Default: 1.
: Each step number corresponds to an RPM value specified in the analysis settings.
  Setting this property also updates  to the corresponding RPM value for the specified step number.
  An exception is thrown if  is not True or  is not .
  Valid range is [1, N], where N is . An exception is thrown if the value is out-of-range.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.StepSelectionRepresentation"></a>

### *property* BearingLoad.StepSelectionRepresentation *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the string representation of the step numbers at which the load is applied.
An exception is thrown if any of the below conditions are met:
1. MultiStep is not True.
2. StepVarying is not Yes.
3. HarmonicMultiStepType is not Load_Step.
4. The input format is invalid.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.StepVarying"></a>

### *property* BearingLoad.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the load is applied to a specific RPM/step number. Default: No.
: An exception is thrown if  is not True.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Suppressed"></a>

### *property* BearingLoad.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.TransferableObjectId"></a>

### *property* BearingLoad.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.VisibleProperties"></a>

### *property* BearingLoad.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.XComponent"></a>

### *property* BearingLoad.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.YComponent"></a>

### *property* BearingLoad.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.ZComponent"></a>

### *property* BearingLoad.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BearingLoad.Activate"></a>

### BearingLoad.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.AddComment"></a>

### BearingLoad.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.AddFigure"></a>

### BearingLoad.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.AddImage"></a>

### BearingLoad.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Copy"></a>

### BearingLoad.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.CopyTo"></a>

### BearingLoad.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.CreateObjRef"></a>

### BearingLoad.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.CreateParameter"></a>

### BearingLoad.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Cut"></a>

### BearingLoad.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Delete"></a>

### BearingLoad.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Duplicate"></a>

### BearingLoad.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Equals"></a>

### BearingLoad.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetAPIName"></a>

### BearingLoad.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetActivateAtLoadStep"></a>

### BearingLoad.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the bearing load is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetAllProperties"></a>

### BearingLoad.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetChildren"></a>

### BearingLoad.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### BearingLoad.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetComponentActivateAtLoadStep"></a>

### BearingLoad.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetDetailsView"></a>

### BearingLoad.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetEnumName"></a>

### BearingLoad.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetHashCode"></a>

### BearingLoad.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetIconFile"></a>

### BearingLoad.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetLifetimeService"></a>

### BearingLoad.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetObjectData"></a>

### BearingLoad.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetParameter"></a>

### BearingLoad.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetPath"></a>

### BearingLoad.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetPropertyName"></a>

### BearingLoad.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetPropertyValue"></a>

### BearingLoad.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetVisibleProperties"></a>

### BearingLoad.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetVisiblePropertyNames"></a>

### BearingLoad.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GroupAllSimilarChildren"></a>

### BearingLoad.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GroupSimilarObjects"></a>

### BearingLoad.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.InitializeLifetimeService"></a>

### BearingLoad.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.IsPropertyEditable"></a>

### BearingLoad.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BearingLoad.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.IsPropertyVisible"></a>

### BearingLoad.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BearingLoad.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Paste"></a>

### BearingLoad.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.PromoteToNamedSelection"></a>

### BearingLoad.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.PropertyByAPIName"></a>

### BearingLoad.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.PropertyById"></a>

### BearingLoad.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.PropertyByName"></a>

### BearingLoad.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.RemoveFromGroup"></a>

### BearingLoad.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.RemoveParameter"></a>

### BearingLoad.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.SetActivateAtLoadStep"></a>

### BearingLoad.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the bearing load is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.SetComponentActivateAtLoadStep"></a>

### BearingLoad.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

