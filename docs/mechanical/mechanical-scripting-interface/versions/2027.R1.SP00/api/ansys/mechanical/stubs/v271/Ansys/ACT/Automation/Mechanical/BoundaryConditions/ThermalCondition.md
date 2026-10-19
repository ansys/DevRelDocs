# `ThermalCondition`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ThermalCondition"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ThermalCondition(internalObject: Any)

<a id="ThermalCondition"></a>

### *class* ThermalCondition(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ThermalCondition.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#ThermalCondition.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#ThermalCondition.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#ThermalCondition.AddImage)                                             | Creates a new child Image.                                                                  |
| [`Copy`](#ThermalCondition.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ThermalCondition.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ThermalCondition.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ThermalCondition.CreateParameter)                               | CreateParameter method.                                                                     |
| [`Cut`](#ThermalCondition.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ThermalCondition.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#ThermalCondition.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ThermalCondition.Equals)                                                 | Equals method.                                                                              |
| [`GetAPIName`](#ThermalCondition.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#ThermalCondition.GetActivateAtLoadStep)                   | Gets whether the thermal condition is active at the specified load step.                    |
| [`GetAllProperties`](#ThermalCondition.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#ThermalCondition.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetComponentActivateAtLoadStep`](#ThermalCondition.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                                      |
| [`GetDetailsView`](#ThermalCondition.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ThermalCondition.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#ThermalCondition.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#ThermalCondition.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ThermalCondition.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ThermalCondition.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#ThermalCondition.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ThermalCondition.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#ThermalCondition.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ThermalCondition.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ThermalCondition.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ThermalCondition.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ThermalCondition.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ThermalCondition.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ThermalCondition.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ThermalCondition.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ThermalCondition.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#ThermalCondition.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#ThermalCondition.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#ThermalCondition.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#ThermalCondition.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#ThermalCondition.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ThermalCondition.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ThermalCondition.RemoveParameter)                               | RemoveParameter method.                                                                     |
| [`SetActivateAtLoadStep`](#ThermalCondition.SetActivateAtLoadStep)                   | Sets whether the thermal condition is active at the specified load step.                    |
| [`SetComponentActivateAtLoadStep`](#ThermalCondition.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                                      |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ThermalCondition.AttachedRefs)                               | AttachedRefs property.                                        |
| [`Children`](#ThermalCondition.Children)                                       | Gets the list of children.                                    |
| [`ClsId`](#ThermalCondition.ClsId)                                             | ClsId property.                                               |
| [`Comments`](#ThermalCondition.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ThermalCondition.DataModelObjectCategory)         | Gets the current DataModelObject's category.                  |
| [`DefineBy`](#ThermalCondition.DefineBy)                                       | Gets the DefineBy.                                            |
| [`Figures`](#ThermalCondition.Figures)                                         | Gets the list of associated figures.                          |
| [`GraphControlsXAxis`](#ThermalCondition.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                          |
| [`GroupingFolder`](#ThermalCondition.GroupingFolder)                           | GroupingFolder property.                                      |
| [`IconName`](#ThermalCondition.IconName)                                       | IconName property.                                            |
| [`Images`](#ThermalCondition.Images)                                           | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#ThermalCondition.ImportableObjectSourceId)       | ImportableObjectSourceId property.                            |
| [`IndependentVariable`](#ThermalCondition.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#ThermalCondition.InternalObject)                           | InternalObject property.                                      |
| [`LoadVectorAssignment`](#ThermalCondition.LoadVectorAssignment)               | Gets or sets the LoadVectorAssignment.                        |
| [`LoadVectorNumber`](#ThermalCondition.LoadVectorNumber)                       | Gets or sets the LoadVectorNumber.                            |
| [`Location`](#ThermalCondition.Location)                                       | Gets or sets the Location.                                    |
| [`Magnitude`](#ThermalCondition.Magnitude)                                     | Gets or sets the Magnitude.                                   |
| [`Name`](#ThermalCondition.Name)                                               | Name property.                                                |
| [`NumberOfSegments`](#ThermalCondition.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`ObjectId`](#ThermalCondition.ObjectId)                                       | ObjectId property.                                            |
| [`ObjectState`](#ThermalCondition.ObjectState)                                 | ObjectState property.                                         |
| [`ObjectTags`](#ThermalCondition.ObjectTags)                                   | ObjectTags property.                                          |
| [`Parent`](#ThermalCondition.Parent)                                           | Parent property.                                              |
| [`Properties`](#ThermalCondition.Properties)                                   | Gets the list of properties for this object.                  |
| [`RangeMaximum`](#ThermalCondition.RangeMaximum)                               | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#ThermalCondition.RangeMinimum)                               | Gets or sets the RangeMinimum.                                |
| [`ReadOnly`](#ThermalCondition.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#ThermalCondition.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`ShellFace`](#ThermalCondition.ShellFace)                                     | Gets or sets the ShellFace.                                   |
| [`State`](#ThermalCondition.State)                                             | State property.                                               |
| [`Suppressed`](#ThermalCondition.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`TableAssignment`](#ThermalCondition.TableAssignment)                         | Gets or sets the TableAssignment.                             |
| [`TransferableObjectId`](#ThermalCondition.TransferableObjectId)               | TransferableObjectId property.                                |
| [`VisibleProperties`](#ThermalCondition.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XYZFunctionCoordinateSystem`](#ThermalCondition.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |

<a id="property-detail"></a>

## Property detail

<a id="ThermalCondition.AttachedRefs"></a>

### *property* ThermalCondition.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Children"></a>

### *property* ThermalCondition.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.ClsId"></a>

### *property* ThermalCondition.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Comments"></a>

### *property* ThermalCondition.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.DataModelObjectCategory"></a>

### *property* ThermalCondition.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.DefineBy"></a>

### *property* ThermalCondition.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Figures"></a>

### *property* ThermalCondition.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GraphControlsXAxis"></a>

### *property* ThermalCondition.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GroupingFolder"></a>

### *property* ThermalCondition.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.IconName"></a>

### *property* ThermalCondition.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Images"></a>

### *property* ThermalCondition.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.ImportableObjectSourceId"></a>

### *property* ThermalCondition.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.IndependentVariable"></a>

### *property* ThermalCondition.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.InternalObject"></a>

### *property* ThermalCondition.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

InternalObject property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.LoadVectorAssignment"></a>

### *property* ThermalCondition.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.LoadVectorNumber"></a>

### *property* ThermalCondition.LoadVectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadVectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Location"></a>

### *property* ThermalCondition.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Magnitude"></a>

### *property* ThermalCondition.Magnitude *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Name"></a>

### *property* ThermalCondition.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.NumberOfSegments"></a>

### *property* ThermalCondition.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.ObjectId"></a>

### *property* ThermalCondition.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.ObjectState"></a>

### *property* ThermalCondition.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.ObjectTags"></a>

### *property* ThermalCondition.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Parent"></a>

### *property* ThermalCondition.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Properties"></a>

### *property* ThermalCondition.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.RangeMaximum"></a>

### *property* ThermalCondition.RangeMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.RangeMinimum"></a>

### *property* ThermalCondition.RangeMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.ReadOnly"></a>

### *property* ThermalCondition.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.SharedRefBody"></a>

### *property* ThermalCondition.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.ShellFace"></a>

### *property* ThermalCondition.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShellFace.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.State"></a>

### *property* ThermalCondition.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Suppressed"></a>

### *property* ThermalCondition.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.TableAssignment"></a>

### *property* ThermalCondition.TableAssignment *: [Ansys.ACT.Automation.Mechanical.Table](../Table.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Table) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TableAssignment.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.TransferableObjectId"></a>

### *property* ThermalCondition.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.VisibleProperties"></a>

### *property* ThermalCondition.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.XYZFunctionCoordinateSystem"></a>

### *property* ThermalCondition.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ThermalCondition.Activate"></a>

### ThermalCondition.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.AddComment"></a>

### ThermalCondition.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.AddFigure"></a>

### ThermalCondition.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.AddImage"></a>

### ThermalCondition.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Copy"></a>

### ThermalCondition.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.CopyTo"></a>

### ThermalCondition.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.CreateObjRef"></a>

### ThermalCondition.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.CreateParameter"></a>

### ThermalCondition.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Cut"></a>

### ThermalCondition.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Delete"></a>

### ThermalCondition.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Duplicate"></a>

### ThermalCondition.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Equals"></a>

### ThermalCondition.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetAPIName"></a>

### ThermalCondition.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetActivateAtLoadStep"></a>

### ThermalCondition.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the thermal condition is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetAllProperties"></a>

### ThermalCondition.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetChildren"></a>

### ThermalCondition.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ThermalCondition.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetComponentActivateAtLoadStep"></a>

### ThermalCondition.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetDetailsView"></a>

### ThermalCondition.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetEnumName"></a>

### ThermalCondition.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetHashCode"></a>

### ThermalCondition.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetIconFile"></a>

### ThermalCondition.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetLifetimeService"></a>

### ThermalCondition.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetObjectData"></a>

### ThermalCondition.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetParameter"></a>

### ThermalCondition.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetPath"></a>

### ThermalCondition.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetPropertyName"></a>

### ThermalCondition.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetPropertyValue"></a>

### ThermalCondition.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetVisibleProperties"></a>

### ThermalCondition.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetVisiblePropertyNames"></a>

### ThermalCondition.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GroupAllSimilarChildren"></a>

### ThermalCondition.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GroupSimilarObjects"></a>

### ThermalCondition.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.InitializeLifetimeService"></a>

### ThermalCondition.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.IsPropertyEditable"></a>

### ThermalCondition.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ThermalCondition.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.IsPropertyVisible"></a>

### ThermalCondition.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ThermalCondition.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Paste"></a>

### ThermalCondition.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.PromoteToNamedSelection"></a>

### ThermalCondition.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.PropertyByAPIName"></a>

### ThermalCondition.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.PropertyById"></a>

### ThermalCondition.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.PropertyByName"></a>

### ThermalCondition.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.RemoveFromGroup"></a>

### ThermalCondition.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.RemoveParameter"></a>

### ThermalCondition.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

RemoveParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.SetActivateAtLoadStep"></a>

### ThermalCondition.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the thermal condition is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.SetComponentActivateAtLoadStep"></a>

### ThermalCondition.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

