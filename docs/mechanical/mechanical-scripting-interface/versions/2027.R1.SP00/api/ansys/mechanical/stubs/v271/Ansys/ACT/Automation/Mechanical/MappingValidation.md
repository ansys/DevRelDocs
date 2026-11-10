# `MappingValidation`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MappingValidation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MappingValidation(internalObject: Any)

<a id="MappingValidation"></a>

### *class* MappingValidation(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MappingValidation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MappingValidation.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#MappingValidation.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#MappingValidation.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#MappingValidation.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Analyze`](#MappingValidation.Analyze)                                     | Analyze method.                                                                             |
| [`ClearGeneratedData`](#MappingValidation.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#MappingValidation.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MappingValidation.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MappingValidation.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MappingValidation.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MappingValidation.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MappingValidation.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MappingValidation.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MappingValidation.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#MappingValidation.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MappingValidation.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MappingValidation.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MappingValidation.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MappingValidation.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MappingValidation.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MappingValidation.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MappingValidation.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MappingValidation.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MappingValidation.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MappingValidation.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MappingValidation.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MappingValidation.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#MappingValidation.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MappingValidation.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MappingValidation.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MappingValidation.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MappingValidation.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MappingValidation.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MappingValidation.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MappingValidation.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#MappingValidation.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MappingValidation.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MappingValidation.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MappingValidation.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MappingValidation.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| [`ActiveSequence`](#MappingValidation.ActiveSequence)                   | Gets or sets the ActiveSequence.                                                           |
| [`ActiveSequenceByValue`](#MappingValidation.ActiveSequenceByValue)     | Gets or sets the ActiveSequenceByValue.                                                    |
| [`AttachedRefs`](#MappingValidation.AttachedRefs)                       | AttachedRefs property.                                                                     |
| [`BoundingTolerance`](#MappingValidation.BoundingTolerance)             | Gets or sets the BoundingTolerance.                                                        |
| [`Children`](#MappingValidation.Children)                               | Gets the list of children.                                                                 |
| [`ClsId`](#MappingValidation.ClsId)                                     | ClsId property.                                                                            |
| [`Comments`](#MappingValidation.Comments)                               | Gets the list of associated comments.                                                      |
| [`ComplexComponent`](#MappingValidation.ComplexComponent)               | Gets or sets the ComplexComponent.                                                         |
| [`Component`](#MappingValidation.Component)                             | Gets or sets the Component.                                                                |
| [`DataModelObjectCategory`](#MappingValidation.DataModelObjectCategory) | Gets the current DataModelObject's category.                                               |
| [`DefineActiveSequenceBy`](#MappingValidation.DefineActiveSequenceBy)   | Control whether the active sequenced is defined by row or by value.                        |
| [`Display`](#MappingValidation.Display)                                 | Display property.                                                                          |
| [`DisplayDataType`](#MappingValidation.DisplayDataType)                 | Gets or sets the DisplayDataType.                                                          |
| [`Figures`](#MappingValidation.Figures)                                 | Gets the list of associated figures.                                                       |
| [`FileIdentifierIndex`](#MappingValidation.FileIdentifierIndex)         | Gets or sets the FileIdentifierIndex.                                                      |
| [`GroupingFolder`](#MappingValidation.GroupingFolder)                   | GroupingFolder property.                                                                   |
| [`IconName`](#MappingValidation.IconName)                               | IconName property.                                                                         |
| [`Images`](#MappingValidation.Images)                                   | Gets the list of associated images.                                                        |
| [`InternalObject`](#MappingValidation.InternalObject)                   | Gets the internal object. For advanced usage only.                                         |
| [`IsolineThickness`](#MappingValidation.IsolineThickness)               | IsolineThickness property.                                                                 |
| [`IsolineType`](#MappingValidation.IsolineType)                         | IsolineType property.                                                                      |
| [`Layer`](#MappingValidation.Layer)                                     | Gets or sets the Layer.                                                                    |
| [`LegendDivisions`](#MappingValidation.LegendDivisions)                 | LegendDivisions property.                                                                  |
| [`Name`](#MappingValidation.Name)                                       | Name property.                                                                             |
| [`ObjectId`](#MappingValidation.ObjectId)                               | ObjectId property.                                                                         |
| [`ObjectState`](#MappingValidation.ObjectState)                         | ObjectState property.                                                                      |
| [`ObjectTags`](#MappingValidation.ObjectTags)                           | ObjectTags property.                                                                       |
| [`Parent`](#MappingValidation.Parent)                                   | Parent property.                                                                           |
| [`Properties`](#MappingValidation.Properties)                           | Gets the list of properties for this object.                                               |
| [`Scale`](#MappingValidation.Scale)                                     | Scale property.                                                                            |
| [`ShellFace`](#MappingValidation.ShellFace)                             | Controls whether the displayed shell face lies on the bottom, middle, or top of the shell. |
| [`State`](#MappingValidation.State)                                     | State property.                                                                            |
| [`Type`](#MappingValidation.Type)                                       | Type property.                                                                             |
| [`VisibleProperties`](#MappingValidation.VisibleProperties)             | Gets the list of properties that are visible for this object.                              |

<a id="property-detail"></a>

## Property detail

<a id="MappingValidation.ActiveSequence"></a>

### *property* MappingValidation.ActiveSequence *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ActiveSequence.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.ActiveSequenceByValue"></a>

### *property* MappingValidation.ActiveSequenceByValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ActiveSequenceByValue.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.AttachedRefs"></a>

### *property* MappingValidation.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.BoundingTolerance"></a>

### *property* MappingValidation.BoundingTolerance *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundingTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Children"></a>

### *property* MappingValidation.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.ClsId"></a>

### *property* MappingValidation.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Comments"></a>

### *property* MappingValidation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.ComplexComponent"></a>

### *property* MappingValidation.ComplexComponent *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ComplexComponent.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Component"></a>

### *property* MappingValidation.Component *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplayComponentType](../../../Mechanical/DataModel/Enums/ExternalLoadDisplayComponentType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplayComponentType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Component.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.DataModelObjectCategory"></a>

### *property* MappingValidation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.DefineActiveSequenceBy"></a>

### *property* MappingValidation.DefineActiveSequenceBy *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDefineActiveSequenceBy](../../../Mechanical/DataModel/Enums/ExternalLoadDefineActiveSequenceBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExternalLoadDefineActiveSequenceBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Control whether the active sequenced is defined by row or by value.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Display"></a>

### *property* MappingValidation.Display *: [Ansys.Mechanical.DataModel.Enums.MappingValidationDisplayOption](../../../Mechanical/DataModel/Enums/MappingValidationDisplayOption.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingValidationDisplayOption) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Display property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.DisplayDataType"></a>

### *property* MappingValidation.DisplayDataType *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplayDataType](../../../Mechanical/DataModel/Enums/ExternalLoadDisplayDataType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplayDataType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayDataType.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Figures"></a>

### *property* MappingValidation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.FileIdentifierIndex"></a>

### *property* MappingValidation.FileIdentifierIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FileIdentifierIndex.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GroupingFolder"></a>

### *property* MappingValidation.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.IconName"></a>

### *property* MappingValidation.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Images"></a>

### *property* MappingValidation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.InternalObject"></a>

### *property* MappingValidation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMappingValidationAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.IsolineThickness"></a>

### *property* MappingValidation.IsolineThickness *: [Ansys.Mechanical.DataModel.Enums.MappingIsolineThicknessType](../../../Mechanical/DataModel/Enums/MappingIsolineThicknessType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingIsolineThicknessType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsolineThickness property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.IsolineType"></a>

### *property* MappingValidation.IsolineType *: [Ansys.Mechanical.DataModel.Enums.MappingIsolineLineType](../../../Mechanical/DataModel/Enums/MappingIsolineLineType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingIsolineLineType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsolineType property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Layer"></a>

### *property* MappingValidation.Layer *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.LegendDivisions"></a>

### *property* MappingValidation.LegendDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LegendDivisions property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Name"></a>

### *property* MappingValidation.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.ObjectId"></a>

### *property* MappingValidation.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.ObjectState"></a>

### *property* MappingValidation.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.ObjectTags"></a>

### *property* MappingValidation.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Parent"></a>

### *property* MappingValidation.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Properties"></a>

### *property* MappingValidation.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Scale"></a>

### *property* MappingValidation.Scale *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Scale property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.ShellFace"></a>

### *property* MappingValidation.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Controls whether the displayed shell face lies on the bottom, middle, or top of the shell.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.State"></a>

### *property* MappingValidation.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Type"></a>

### *property* MappingValidation.Type *: [Ansys.Mechanical.DataModel.Enums.MappingValidationType](../../../Mechanical/DataModel/Enums/MappingValidationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MappingValidationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Type property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.VisibleProperties"></a>

### *property* MappingValidation.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MappingValidation.Activate"></a>

### MappingValidation.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.AddComment"></a>

### MappingValidation.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.AddFigure"></a>

### MappingValidation.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.AddImage"></a>

### MappingValidation.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Analyze"></a>

### MappingValidation.Analyze() → [None](https://docs.python.org/3/builtins/constants.html#None)

Analyze method.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.ClearGeneratedData"></a>

### MappingValidation.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Copy"></a>

### MappingValidation.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.CopyTo"></a>

### MappingValidation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.CreateObjRef"></a>

### MappingValidation.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.CreateParameter"></a>

### MappingValidation.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Cut"></a>

### MappingValidation.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Delete"></a>

### MappingValidation.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Duplicate"></a>

### MappingValidation.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Equals"></a>

### MappingValidation.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetAPIName"></a>

### MappingValidation.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetAllProperties"></a>

### MappingValidation.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetChildren"></a>

### MappingValidation.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MappingValidation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetDetailsView"></a>

### MappingValidation.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetEnumName"></a>

### MappingValidation.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetHashCode"></a>

### MappingValidation.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetIconFile"></a>

### MappingValidation.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetLifetimeService"></a>

### MappingValidation.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetObjectData"></a>

### MappingValidation.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetParameter"></a>

### MappingValidation.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetPath"></a>

### MappingValidation.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetPropertyName"></a>

### MappingValidation.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetPropertyValue"></a>

### MappingValidation.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetVisibleProperties"></a>

### MappingValidation.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetVisiblePropertyNames"></a>

### MappingValidation.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GroupAllSimilarChildren"></a>

### MappingValidation.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GroupSimilarObjects"></a>

### MappingValidation.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.InitializeLifetimeService"></a>

### MappingValidation.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.IsPropertyEditable"></a>

### MappingValidation.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MappingValidation.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.IsPropertyVisible"></a>

### MappingValidation.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MappingValidation.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Paste"></a>

### MappingValidation.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.PropertyByAPIName"></a>

### MappingValidation.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.PropertyById"></a>

### MappingValidation.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.PropertyByName"></a>

### MappingValidation.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.RemoveFromGroup"></a>

### MappingValidation.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.RemoveParameter"></a>

### MappingValidation.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

