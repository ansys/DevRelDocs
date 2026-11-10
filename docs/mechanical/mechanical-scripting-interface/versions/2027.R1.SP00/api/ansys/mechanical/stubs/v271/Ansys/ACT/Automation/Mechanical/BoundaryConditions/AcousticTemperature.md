# `AcousticTemperature`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticTemperature"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticTemperature(internalObject: Any)

<a id="AcousticTemperature"></a>

### *class* AcousticTemperature(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticTemperature.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticTemperature.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#AcousticTemperature.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#AcousticTemperature.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticTemperature.AddImage)                                             | Creates a new child Image.                                                                  |
| [`Copy`](#AcousticTemperature.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticTemperature.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticTemperature.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticTemperature.CreateParameter)                               | CreateParameter method.                                                                     |
| [`Cut`](#AcousticTemperature.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticTemperature.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticTemperature.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticTemperature.Equals)                                                 | Equals method.                                                                              |
| [`GetAPIName`](#AcousticTemperature.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#AcousticTemperature.GetActivateAtLoadStep)                   | Gets whether the thermal condition is active at the specified load step.                    |
| [`GetAllProperties`](#AcousticTemperature.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticTemperature.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetComponentActivateAtLoadStep`](#AcousticTemperature.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                                      |
| [`GetDetailsView`](#AcousticTemperature.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticTemperature.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticTemperature.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticTemperature.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticTemperature.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticTemperature.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticTemperature.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticTemperature.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticTemperature.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticTemperature.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AcousticTemperature.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticTemperature.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticTemperature.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticTemperature.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticTemperature.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticTemperature.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticTemperature.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticTemperature.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticTemperature.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticTemperature.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticTemperature.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticTemperature.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticTemperature.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticTemperature.RemoveParameter)                               | RemoveParameter method.                                                                     |
| [`SetActivateAtLoadStep`](#AcousticTemperature.SetActivateAtLoadStep)                   | Sets whether the thermal condition is active at the specified load step.                    |
| [`SetComponentActivateAtLoadStep`](#AcousticTemperature.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                                      |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AcousticTemperature.AttachedRefs)                               | AttachedRefs property.                                        |
| [`Children`](#AcousticTemperature.Children)                                       | Gets the list of children.                                    |
| [`ClsId`](#AcousticTemperature.ClsId)                                             | ClsId property.                                               |
| [`Comments`](#AcousticTemperature.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticTemperature.DataModelObjectCategory)         | Gets the current DataModelObject's category.                  |
| [`DefineBy`](#AcousticTemperature.DefineBy)                                       | Gets the DefineBy.                                            |
| [`Figures`](#AcousticTemperature.Figures)                                         | Gets the list of associated figures.                          |
| [`GraphControlsXAxis`](#AcousticTemperature.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                          |
| [`GroupingFolder`](#AcousticTemperature.GroupingFolder)                           | GroupingFolder property.                                      |
| [`IconName`](#AcousticTemperature.IconName)                                       | IconName property.                                            |
| [`Images`](#AcousticTemperature.Images)                                           | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AcousticTemperature.ImportableObjectSourceId)       | ImportableObjectSourceId property.                            |
| [`IndependentVariable`](#AcousticTemperature.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#AcousticTemperature.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`LoadVectorAssignment`](#AcousticTemperature.LoadVectorAssignment)               | Gets or sets the LoadVectorAssignment.                        |
| [`LoadVectorNumber`](#AcousticTemperature.LoadVectorNumber)                       | Gets or sets the LoadVectorNumber.                            |
| [`Location`](#AcousticTemperature.Location)                                       | Gets or sets the Location.                                    |
| [`Magnitude`](#AcousticTemperature.Magnitude)                                     | Gets or sets the Magnitude.                                   |
| [`Name`](#AcousticTemperature.Name)                                               | Name property.                                                |
| [`NumberOfSegments`](#AcousticTemperature.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`ObjectId`](#AcousticTemperature.ObjectId)                                       | ObjectId property.                                            |
| [`ObjectState`](#AcousticTemperature.ObjectState)                                 | ObjectState property.                                         |
| [`ObjectTags`](#AcousticTemperature.ObjectTags)                                   | ObjectTags property.                                          |
| [`Parent`](#AcousticTemperature.Parent)                                           | Parent property.                                              |
| [`Properties`](#AcousticTemperature.Properties)                                   | Gets the list of properties for this object.                  |
| [`RangeMaximum`](#AcousticTemperature.RangeMaximum)                               | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#AcousticTemperature.RangeMinimum)                               | Gets or sets the RangeMinimum.                                |
| [`ReadOnly`](#AcousticTemperature.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticTemperature.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`ShellFace`](#AcousticTemperature.ShellFace)                                     | Gets or sets the ShellFace.                                   |
| [`State`](#AcousticTemperature.State)                                             | State property.                                               |
| [`Suppressed`](#AcousticTemperature.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`TableAssignment`](#AcousticTemperature.TableAssignment)                         | Gets or sets the TableAssignment.                             |
| [`TransferableObjectId`](#AcousticTemperature.TransferableObjectId)               | TransferableObjectId property.                                |
| [`VisibleProperties`](#AcousticTemperature.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XYZFunctionCoordinateSystem`](#AcousticTemperature.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |

<a id="property-detail"></a>

## Property detail

<a id="AcousticTemperature.AttachedRefs"></a>

### *property* AcousticTemperature.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Children"></a>

### *property* AcousticTemperature.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.ClsId"></a>

### *property* AcousticTemperature.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Comments"></a>

### *property* AcousticTemperature.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.DataModelObjectCategory"></a>

### *property* AcousticTemperature.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.DefineBy"></a>

### *property* AcousticTemperature.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Figures"></a>

### *property* AcousticTemperature.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GraphControlsXAxis"></a>

### *property* AcousticTemperature.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GroupingFolder"></a>

### *property* AcousticTemperature.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.IconName"></a>

### *property* AcousticTemperature.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Images"></a>

### *property* AcousticTemperature.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.ImportableObjectSourceId"></a>

### *property* AcousticTemperature.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.IndependentVariable"></a>

### *property* AcousticTemperature.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.InternalObject"></a>

### *property* AcousticTemperature.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.LoadVectorAssignment"></a>

### *property* AcousticTemperature.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.LoadVectorNumber"></a>

### *property* AcousticTemperature.LoadVectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadVectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Location"></a>

### *property* AcousticTemperature.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Magnitude"></a>

### *property* AcousticTemperature.Magnitude *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Name"></a>

### *property* AcousticTemperature.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.NumberOfSegments"></a>

### *property* AcousticTemperature.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.ObjectId"></a>

### *property* AcousticTemperature.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.ObjectState"></a>

### *property* AcousticTemperature.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.ObjectTags"></a>

### *property* AcousticTemperature.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Parent"></a>

### *property* AcousticTemperature.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Properties"></a>

### *property* AcousticTemperature.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.RangeMaximum"></a>

### *property* AcousticTemperature.RangeMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.RangeMinimum"></a>

### *property* AcousticTemperature.RangeMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.ReadOnly"></a>

### *property* AcousticTemperature.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.SharedRefBody"></a>

### *property* AcousticTemperature.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.ShellFace"></a>

### *property* AcousticTemperature.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShellFace.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.State"></a>

### *property* AcousticTemperature.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Suppressed"></a>

### *property* AcousticTemperature.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.TableAssignment"></a>

### *property* AcousticTemperature.TableAssignment *: [Ansys.ACT.Automation.Mechanical.Table](../Table.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Table) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TableAssignment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.TransferableObjectId"></a>

### *property* AcousticTemperature.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.VisibleProperties"></a>

### *property* AcousticTemperature.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.XYZFunctionCoordinateSystem"></a>

### *property* AcousticTemperature.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticTemperature.Activate"></a>

### AcousticTemperature.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.AddComment"></a>

### AcousticTemperature.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.AddFigure"></a>

### AcousticTemperature.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.AddImage"></a>

### AcousticTemperature.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Copy"></a>

### AcousticTemperature.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.CopyTo"></a>

### AcousticTemperature.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.CreateObjRef"></a>

### AcousticTemperature.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.CreateParameter"></a>

### AcousticTemperature.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Cut"></a>

### AcousticTemperature.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Delete"></a>

### AcousticTemperature.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Duplicate"></a>

### AcousticTemperature.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Equals"></a>

### AcousticTemperature.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetAPIName"></a>

### AcousticTemperature.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetActivateAtLoadStep"></a>

### AcousticTemperature.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the thermal condition is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetAllProperties"></a>

### AcousticTemperature.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetChildren"></a>

### AcousticTemperature.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticTemperature.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetComponentActivateAtLoadStep"></a>

### AcousticTemperature.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetDetailsView"></a>

### AcousticTemperature.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetEnumName"></a>

### AcousticTemperature.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetHashCode"></a>

### AcousticTemperature.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetIconFile"></a>

### AcousticTemperature.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetLifetimeService"></a>

### AcousticTemperature.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetObjectData"></a>

### AcousticTemperature.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetParameter"></a>

### AcousticTemperature.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetPath"></a>

### AcousticTemperature.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetPropertyName"></a>

### AcousticTemperature.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetPropertyValue"></a>

### AcousticTemperature.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetVisibleProperties"></a>

### AcousticTemperature.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetVisiblePropertyNames"></a>

### AcousticTemperature.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GroupAllSimilarChildren"></a>

### AcousticTemperature.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GroupSimilarObjects"></a>

### AcousticTemperature.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.InitializeLifetimeService"></a>

### AcousticTemperature.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.IsPropertyEditable"></a>

### AcousticTemperature.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticTemperature.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.IsPropertyVisible"></a>

### AcousticTemperature.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticTemperature.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Paste"></a>

### AcousticTemperature.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.PromoteToNamedSelection"></a>

### AcousticTemperature.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.PropertyByAPIName"></a>

### AcousticTemperature.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.PropertyById"></a>

### AcousticTemperature.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.PropertyByName"></a>

### AcousticTemperature.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.RemoveFromGroup"></a>

### AcousticTemperature.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.RemoveParameter"></a>

### AcousticTemperature.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

RemoveParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.SetActivateAtLoadStep"></a>

### AcousticTemperature.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the thermal condition is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.SetComponentActivateAtLoadStep"></a>

### AcousticTemperature.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

