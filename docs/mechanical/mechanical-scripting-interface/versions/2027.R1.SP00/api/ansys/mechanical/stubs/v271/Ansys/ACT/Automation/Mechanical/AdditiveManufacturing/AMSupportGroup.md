# `AMSupportGroup`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportGroup(internalObject: Any)

<a id="AMSupportGroup"></a>

### *class* AMSupportGroup(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AMSupportGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AMSupportGroup.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AMSupportGroup.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AMSupportGroup.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddGeneratedAMSupport`](#AMSupportGroup.AddGeneratedAMSupport)         | Creates a new GeneratedAMSupport                                                            |
| [`AddImage`](#AMSupportGroup.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddPredefinedAMSupport`](#AMSupportGroup.AddPredefinedAMSupport)       | Creates a new PredefinedAMSupport                                                           |
| [`AddSTLAMSupport`](#AMSupportGroup.AddSTLAMSupport)                     | Creates a new GeneratedAMSupport                                                            |
| [`Clean`](#AMSupportGroup.Clean)                                         | Clean method.                                                                               |
| [`Copy`](#AMSupportGroup.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AMSupportGroup.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AMSupportGroup.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AMSupportGroup.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AMSupportGroup.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AMSupportGroup.Delete)                                       | Run the Delete action.                                                                      |
| [`DetectSupportFaces`](#AMSupportGroup.DetectSupportFaces)               | Runs the Detect Support Faces action.                                                       |
| [`Duplicate`](#AMSupportGroup.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AMSupportGroup.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AMSupportGroup.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AMSupportGroup.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AMSupportGroup.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AMSupportGroup.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AMSupportGroup.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AMSupportGroup.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AMSupportGroup.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AMSupportGroup.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AMSupportGroup.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AMSupportGroup.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AMSupportGroup.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AMSupportGroup.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AMSupportGroup.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AMSupportGroup.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AMSupportGroup.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AMSupportGroup.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AMSupportGroup.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AMSupportGroup.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AMSupportGroup.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AMSupportGroup.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AMSupportGroup.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AMSupportGroup.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AMSupportGroup.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AMSupportGroup.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AMSupportGroup.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AMSupportGroup.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AMSupportGroup.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AMSupportGroup.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#AMSupportGroup.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#AMSupportGroup.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#AMSupportGroup.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AMSupportGroup.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`DetectAboveZLocation`](#AMSupportGroup.DetectAboveZLocation)       | Gets or sets the DetectAboveZLocation.                        |
| [`Figures`](#AMSupportGroup.Figures)                                 | Gets the list of associated figures.                          |
| [`GenerateOnRemesh`](#AMSupportGroup.GenerateOnRemesh)               | Gets or sets the GenerateOnRemesh.                            |
| [`GroupingFolder`](#AMSupportGroup.GroupingFolder)                   | GroupingFolder property.                                      |
| [`HangAngle`](#AMSupportGroup.HangAngle)                             | Gets or sets the HangAngle.                                   |
| [`IconName`](#AMSupportGroup.IconName)                               | IconName property.                                            |
| [`Images`](#AMSupportGroup.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#AMSupportGroup.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#AMSupportGroup.Location)                               | Gets or sets the Location.                                    |
| [`Name`](#AMSupportGroup.Name)                                       | Name property.                                                |
| [`ObjectId`](#AMSupportGroup.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#AMSupportGroup.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#AMSupportGroup.ObjectTags)                           | ObjectTags property.                                          |
| [`OutputType`](#AMSupportGroup.OutputType)                           | Gets or sets the OutputType.                                  |
| [`Parent`](#AMSupportGroup.Parent)                                   | Parent property.                                              |
| [`Properties`](#AMSupportGroup.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#AMSupportGroup.State)                                     | State property.                                               |
| [`VisibleProperties`](#AMSupportGroup.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AMSupportGroup.AttachedRefs"></a>

### *property* AMSupportGroup.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Children"></a>

### *property* AMSupportGroup.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.ClsId"></a>

### *property* AMSupportGroup.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Comments"></a>

### *property* AMSupportGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.DataModelObjectCategory"></a>

### *property* AMSupportGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.DetectAboveZLocation"></a>

### *property* AMSupportGroup.DetectAboveZLocation *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DetectAboveZLocation.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Figures"></a>

### *property* AMSupportGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GenerateOnRemesh"></a>

### *property* AMSupportGroup.GenerateOnRemesh *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GenerateOnRemesh.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GroupingFolder"></a>

### *property* AMSupportGroup.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.HangAngle"></a>

### *property* AMSupportGroup.HangAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HangAngle.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.IconName"></a>

### *property* AMSupportGroup.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Images"></a>

### *property* AMSupportGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.InternalObject"></a>

### *property* AMSupportGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Location"></a>

### *property* AMSupportGroup.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Name"></a>

### *property* AMSupportGroup.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.ObjectId"></a>

### *property* AMSupportGroup.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.ObjectState"></a>

### *property* AMSupportGroup.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.ObjectTags"></a>

### *property* AMSupportGroup.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.OutputType"></a>

### *property* AMSupportGroup.OutputType *: [Ansys.Mechanical.DataModel.Enums.AMSupportGroupOutputType](../../../../Mechanical/DataModel/Enums/AMSupportGroupOutputType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMSupportGroupOutputType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OutputType.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Parent"></a>

### *property* AMSupportGroup.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Properties"></a>

### *property* AMSupportGroup.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.State"></a>

### *property* AMSupportGroup.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.VisibleProperties"></a>

### *property* AMSupportGroup.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMSupportGroup.Activate"></a>

### AMSupportGroup.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.AddComment"></a>

### AMSupportGroup.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.AddFigure"></a>

### AMSupportGroup.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.AddGeneratedAMSupport"></a>

### AMSupportGroup.AddGeneratedAMSupport() → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.GeneratedAMSupport](GeneratedAMSupport.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.GeneratedAMSupport)

Creates a new GeneratedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.AddImage"></a>

### AMSupportGroup.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.AddPredefinedAMSupport"></a>

### AMSupportGroup.AddPredefinedAMSupport() → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.PredefinedAMSupport](PredefinedAMSupport.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.PredefinedAMSupport)

Creates a new PredefinedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.AddSTLAMSupport"></a>

### AMSupportGroup.AddSTLAMSupport() → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.STLAMSupport](STLAMSupport.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.STLAMSupport)

Creates a new GeneratedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Clean"></a>

### AMSupportGroup.Clean() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clean method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Copy"></a>

### AMSupportGroup.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.CopyTo"></a>

### AMSupportGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.CreateObjRef"></a>

### AMSupportGroup.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.CreateParameter"></a>

### AMSupportGroup.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Cut"></a>

### AMSupportGroup.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Delete"></a>

### AMSupportGroup.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.DetectSupportFaces"></a>

### AMSupportGroup.DetectSupportFaces() → Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Runs the Detect Support Faces action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Duplicate"></a>

### AMSupportGroup.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Equals"></a>

### AMSupportGroup.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetAPIName"></a>

### AMSupportGroup.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetAllProperties"></a>

### AMSupportGroup.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetChildren"></a>

### AMSupportGroup.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AMSupportGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetDetailsView"></a>

### AMSupportGroup.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetEnumName"></a>

### AMSupportGroup.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetHashCode"></a>

### AMSupportGroup.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetIconFile"></a>

### AMSupportGroup.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetLifetimeService"></a>

### AMSupportGroup.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetObjectData"></a>

### AMSupportGroup.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetParameter"></a>

### AMSupportGroup.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetPath"></a>

### AMSupportGroup.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetPropertyName"></a>

### AMSupportGroup.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetPropertyValue"></a>

### AMSupportGroup.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetVisibleProperties"></a>

### AMSupportGroup.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetVisiblePropertyNames"></a>

### AMSupportGroup.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GroupAllSimilarChildren"></a>

### AMSupportGroup.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GroupSimilarObjects"></a>

### AMSupportGroup.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.InitializeLifetimeService"></a>

### AMSupportGroup.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.IsPropertyEditable"></a>

### AMSupportGroup.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AMSupportGroup.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.IsPropertyVisible"></a>

### AMSupportGroup.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AMSupportGroup.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Paste"></a>

### AMSupportGroup.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.PromoteToNamedSelection"></a>

### AMSupportGroup.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.PropertyByAPIName"></a>

### AMSupportGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.PropertyById"></a>

### AMSupportGroup.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.PropertyByName"></a>

### AMSupportGroup.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.RemoveFromGroup"></a>

### AMSupportGroup.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.RemoveParameter"></a>

### AMSupportGroup.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

