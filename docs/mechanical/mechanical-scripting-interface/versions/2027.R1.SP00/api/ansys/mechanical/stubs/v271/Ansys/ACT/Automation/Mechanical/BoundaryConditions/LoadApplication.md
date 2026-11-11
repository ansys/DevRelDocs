# `LoadApplication`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.LoadApplication"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.LoadApplication(internalObject: Any)

<a id="LoadApplication"></a>

### *class* LoadApplication(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a LoadApplication.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#LoadApplication.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#LoadApplication.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#LoadApplication.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#LoadApplication.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#LoadApplication.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#LoadApplication.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#LoadApplication.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#LoadApplication.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#LoadApplication.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#LoadApplication.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#LoadApplication.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#LoadApplication.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#LoadApplication.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#LoadApplication.GetActivateAtLoadStep)         | Gets whether the load application is active at the specified load step.                     |
| [`GetAllProperties`](#LoadApplication.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#LoadApplication.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#LoadApplication.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#LoadApplication.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#LoadApplication.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#LoadApplication.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#LoadApplication.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#LoadApplication.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#LoadApplication.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#LoadApplication.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#LoadApplication.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#LoadApplication.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#LoadApplication.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#LoadApplication.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#LoadApplication.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#LoadApplication.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`ImportFromFile`](#LoadApplication.ImportFromFile)                       | ImportFromFile method.                                                                      |
| [`InitializeLifetimeService`](#LoadApplication.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#LoadApplication.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#LoadApplication.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#LoadApplication.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#LoadApplication.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#LoadApplication.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#LoadApplication.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#LoadApplication.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#LoadApplication.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#LoadApplication.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#LoadApplication.SetActivateAtLoadStep)         | Sets whether the load application is active at the specified load step.                     |
| [`SetWorksheetRow`](#LoadApplication.SetWorksheetRow)                     | SetWorksheetRow method.                                                                     |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`AbsoluteResult`](#LoadApplication.AbsoluteResult)                           |                                                                                          |
| [`AttachedRefs`](#LoadApplication.AttachedRefs)                               | AttachedRefs property.                                                                   |
| [`Children`](#LoadApplication.Children)                                       | Gets the list of children.                                                               |
| [`ClsId`](#LoadApplication.ClsId)                                             | ClsId property.                                                                          |
| [`Comments`](#LoadApplication.Comments)                                       | Gets the list of associated comments.                                                    |
| [`DataModelObjectCategory`](#LoadApplication.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                             |
| [`Figures`](#LoadApplication.Figures)                                         | Gets the list of associated figures.                                                     |
| [`GroupingFolder`](#LoadApplication.GroupingFolder)                           | GroupingFolder property.                                                                 |
| [`IconName`](#LoadApplication.IconName)                                       | IconName property.                                                                       |
| [`Images`](#LoadApplication.Images)                                           | Gets the list of associated images.                                                      |
| [`ImportableObjectSourceId`](#LoadApplication.ImportableObjectSourceId)       | ImportableObjectSourceId property.                                                       |
| [`InternalObject`](#LoadApplication.InternalObject)                           | Gets the internal object. For advanced usage only.                                       |
| [`LoadVectorDataFile`](#LoadApplication.LoadVectorDataFile)                   | Gets or sets the LoadVectorDataFile.                                                     |
| [`LoadVectorNumber`](#LoadApplication.LoadVectorNumber)                       |                                                                                          |
| [`Magnitude`](#LoadApplication.Magnitude)                                     | Gets the Magnitude.                                                                      |
| [`MagnitudeImag`](#LoadApplication.MagnitudeImag)                             | Gets the MagnitudeImag.                                                                  |
| [`Name`](#LoadApplication.Name)                                               | Name property.                                                                           |
| [`ObjectId`](#LoadApplication.ObjectId)                                       | ObjectId property.                                                                       |
| [`ObjectState`](#LoadApplication.ObjectState)                                 | ObjectState property.                                                                    |
| [`ObjectTags`](#LoadApplication.ObjectTags)                                   | ObjectTags property.                                                                     |
| [`Parent`](#LoadApplication.Parent)                                           | Parent property.                                                                         |
| [`Properties`](#LoadApplication.Properties)                                   | Gets the list of properties for this object.                                             |
| [`ReadOnly`](#LoadApplication.ReadOnly)                                       | Gets or sets the ReadOnly.                                                               |
| [`RpmSelection`](#LoadApplication.RpmSelection)                               | Gets or sets the RPM value at which the load is applied.                                 |
| [`ScopingMethod`](#LoadApplication.ScopingMethod)                             |                                                                                          |
| [`SharedRefBody`](#LoadApplication.SharedRefBody)                             | Gets or sets the SharedRefBody.                                                          |
| [`Source`](#LoadApplication.Source)                                           |                                                                                          |
| [`State`](#LoadApplication.State)                                             | State property.                                                                          |
| [`StepSelection`](#LoadApplication.StepSelection)                             |                                                                                          |
| [`StepSelectionRepresentation`](#LoadApplication.StepSelectionRepresentation) | Gets or sets the string representation of the step numbers at which the load is applied. |
| [`StepVarying`](#LoadApplication.StepVarying)                                 |                                                                                          |
| [`Suppressed`](#LoadApplication.Suppressed)                                   | Gets or sets the Suppressed.                                                             |
| [`TransferableObjectId`](#LoadApplication.TransferableObjectId)               | TransferableObjectId property.                                                           |
| [`VisibleProperties`](#LoadApplication.VisibleProperties)                     | Gets the list of properties that are visible for this object.                            |
| [`XComponent`](#LoadApplication.XComponent)                                   | Gets the XComponent.                                                                     |
| [`XComponentImag`](#LoadApplication.XComponentImag)                           | Gets the XComponentImag.                                                                 |
| [`YComponent`](#LoadApplication.YComponent)                                   | Gets the YComponent.                                                                     |
| [`YComponentImag`](#LoadApplication.YComponentImag)                           | Gets the YComponentImag.                                                                 |
| [`ZComponent`](#LoadApplication.ZComponent)                                   | Gets the ZComponent.                                                                     |
| [`ZComponentImag`](#LoadApplication.ZComponentImag)                           | Gets the ZComponentImag.                                                                 |

<a id="property-detail"></a>

## Property detail

<a id="LoadApplication.AbsoluteResult"></a>

### *property* LoadApplication.AbsoluteResult *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="LoadApplication.AttachedRefs"></a>

### *property* LoadApplication.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Children"></a>

### *property* LoadApplication.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.ClsId"></a>

### *property* LoadApplication.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Comments"></a>

### *property* LoadApplication.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.DataModelObjectCategory"></a>

### *property* LoadApplication.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Figures"></a>

### *property* LoadApplication.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GroupingFolder"></a>

### *property* LoadApplication.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.IconName"></a>

### *property* LoadApplication.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Images"></a>

### *property* LoadApplication.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.ImportableObjectSourceId"></a>

### *property* LoadApplication.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.InternalObject"></a>

### *property* LoadApplication.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.LoadVectorDataFile"></a>

### *property* LoadApplication.LoadVectorDataFile *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadVectorDataFile.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.LoadVectorNumber"></a>

### *property* LoadApplication.LoadVectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="LoadApplication.Magnitude"></a>

### *property* LoadApplication.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.MagnitudeImag"></a>

### *property* LoadApplication.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Name"></a>

### *property* LoadApplication.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.ObjectId"></a>

### *property* LoadApplication.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.ObjectState"></a>

### *property* LoadApplication.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.ObjectTags"></a>

### *property* LoadApplication.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Parent"></a>

### *property* LoadApplication.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Properties"></a>

### *property* LoadApplication.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.ReadOnly"></a>

### *property* LoadApplication.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.RpmSelection"></a>

### *property* LoadApplication.RpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM value at which the load is applied.
: An exception is thrown if MultiStep is not True, StepVarying is not Yes, or HarmonicMultiStepType is not RPM.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.ScopingMethod"></a>

### *property* LoadApplication.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="LoadApplication.SharedRefBody"></a>

### *property* LoadApplication.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Source"></a>

### *property* LoadApplication.Source *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="LoadApplication.State"></a>

### *property* LoadApplication.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.StepSelection"></a>

### *property* LoadApplication.StepSelection *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="LoadApplication.StepSelectionRepresentation"></a>

### *property* LoadApplication.StepSelectionRepresentation *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the string representation of the step numbers at which the load is applied.
An exception is thrown if any of the below conditions are met:
1. MultiStep is not True.
2. StepVarying is not Yes.
3. HarmonicMultiStepType is not Load_Step.
4. The input format is invalid.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.StepVarying"></a>

### *property* LoadApplication.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="LoadApplication.Suppressed"></a>

### *property* LoadApplication.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.TransferableObjectId"></a>

### *property* LoadApplication.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.VisibleProperties"></a>

### *property* LoadApplication.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.XComponent"></a>

### *property* LoadApplication.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.XComponentImag"></a>

### *property* LoadApplication.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.YComponent"></a>

### *property* LoadApplication.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.YComponentImag"></a>

### *property* LoadApplication.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.ZComponent"></a>

### *property* LoadApplication.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.ZComponentImag"></a>

### *property* LoadApplication.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LoadApplication.Activate"></a>

### LoadApplication.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.AddComment"></a>

### LoadApplication.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.AddFigure"></a>

### LoadApplication.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.AddImage"></a>

### LoadApplication.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Copy"></a>

### LoadApplication.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.CopyTo"></a>

### LoadApplication.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.CreateObjRef"></a>

### LoadApplication.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.CreateParameter"></a>

### LoadApplication.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Cut"></a>

### LoadApplication.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Delete"></a>

### LoadApplication.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Duplicate"></a>

### LoadApplication.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Equals"></a>

### LoadApplication.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GetAPIName"></a>

### LoadApplication.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GetActivateAtLoadStep"></a>

### LoadApplication.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the load application is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GetAllProperties"></a>

### LoadApplication.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GetChildren"></a>

### LoadApplication.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### LoadApplication.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GetDetailsView"></a>

### LoadApplication.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GetEnumName"></a>

### LoadApplication.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GetHashCode"></a>

### LoadApplication.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GetIconFile"></a>

### LoadApplication.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GetLifetimeService"></a>

### LoadApplication.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GetObjectData"></a>

### LoadApplication.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GetParameter"></a>

### LoadApplication.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GetPath"></a>

### LoadApplication.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GetPropertyName"></a>

### LoadApplication.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GetPropertyValue"></a>

### LoadApplication.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GetVisibleProperties"></a>

### LoadApplication.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GetVisiblePropertyNames"></a>

### LoadApplication.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GroupAllSimilarChildren"></a>

### LoadApplication.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GroupSimilarObjects"></a>

### LoadApplication.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.ImportFromFile"></a>

### LoadApplication.ImportFromFile() → [None](https://docs.python.org/3/builtins/constants.html#None)

ImportFromFile method.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.InitializeLifetimeService"></a>

### LoadApplication.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.IsPropertyEditable"></a>

### LoadApplication.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LoadApplication.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.IsPropertyVisible"></a>

### LoadApplication.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LoadApplication.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Paste"></a>

### LoadApplication.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.PromoteToNamedSelection"></a>

### LoadApplication.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.PropertyByAPIName"></a>

### LoadApplication.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.PropertyById"></a>

### LoadApplication.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.PropertyByName"></a>

### LoadApplication.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.RemoveFromGroup"></a>

### LoadApplication.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.RemoveParameter"></a>

### LoadApplication.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.SetActivateAtLoadStep"></a>

### LoadApplication.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the load application is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.SetWorksheetRow"></a>

### LoadApplication.SetWorksheetRow(rowNumber: [int](https://docs.python.org/3/builtins/functions.html#int), loadVectorNumber: [int](https://docs.python.org/3/builtins/functions.html#int), columnHeader: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetWorksheetRow method.

<!-- !! processed by numpydoc !! -->

