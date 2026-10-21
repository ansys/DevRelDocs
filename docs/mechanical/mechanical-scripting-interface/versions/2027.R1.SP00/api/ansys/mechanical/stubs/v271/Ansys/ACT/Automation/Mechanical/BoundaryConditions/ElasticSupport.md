# `ElasticSupport`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElasticSupport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElasticSupport(internalObject: Any)

<a id="ElasticSupport"></a>

### *class* ElasticSupport(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ElasticSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ElasticSupport.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ElasticSupport.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ElasticSupport.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ElasticSupport.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ElasticSupport.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ElasticSupport.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ElasticSupport.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ElasticSupport.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ElasticSupport.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ElasticSupport.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ElasticSupport.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ElasticSupport.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ElasticSupport.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ElasticSupport.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ElasticSupport.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ElasticSupport.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ElasticSupport.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ElasticSupport.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ElasticSupport.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ElasticSupport.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ElasticSupport.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ElasticSupport.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ElasticSupport.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ElasticSupport.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ElasticSupport.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ElasticSupport.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ElasticSupport.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ElasticSupport.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ElasticSupport.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ElasticSupport.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ElasticSupport.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ElasticSupport.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ElasticSupport.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#ElasticSupport.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#ElasticSupport.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ElasticSupport.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ElasticSupport.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ElasticSupport.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ElasticSupport.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#ElasticSupport.AttachedRefs)                               | AttachedRefs property.                                                                   |
| [`Children`](#ElasticSupport.Children)                                       | Gets the list of children.                                                               |
| [`ClsId`](#ElasticSupport.ClsId)                                             | ClsId property.                                                                          |
| [`Comments`](#ElasticSupport.Comments)                                       | Gets the list of associated comments.                                                    |
| [`DataModelObjectCategory`](#ElasticSupport.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                             |
| [`Figures`](#ElasticSupport.Figures)                                         | Gets the list of associated figures.                                                     |
| [`FoundationStiffness`](#ElasticSupport.FoundationStiffness)                 | Gets or sets the FoundationStiffness.                                                    |
| [`GroupingFolder`](#ElasticSupport.GroupingFolder)                           | GroupingFolder property.                                                                 |
| [`IconName`](#ElasticSupport.IconName)                                       | IconName property.                                                                       |
| [`Images`](#ElasticSupport.Images)                                           | Gets the list of associated images.                                                      |
| [`ImportableObjectSourceId`](#ElasticSupport.ImportableObjectSourceId)       | ImportableObjectSourceId property.                                                       |
| [`InternalObject`](#ElasticSupport.InternalObject)                           | Gets the internal object. For advanced usage only.                                       |
| [`Location`](#ElasticSupport.Location)                                       | Gets or sets the Location.                                                               |
| [`Name`](#ElasticSupport.Name)                                               | Name property.                                                                           |
| [`ObjectId`](#ElasticSupport.ObjectId)                                       | ObjectId property.                                                                       |
| [`ObjectState`](#ElasticSupport.ObjectState)                                 | ObjectState property.                                                                    |
| [`ObjectTags`](#ElasticSupport.ObjectTags)                                   | ObjectTags property.                                                                     |
| [`Parent`](#ElasticSupport.Parent)                                           | Parent property.                                                                         |
| [`Properties`](#ElasticSupport.Properties)                                   | Gets the list of properties for this object.                                             |
| [`ReadOnly`](#ElasticSupport.ReadOnly)                                       | Gets or sets the ReadOnly.                                                               |
| [`RpmSelection`](#ElasticSupport.RpmSelection)                               | Gets or sets the RPM value at which the load is applied.                                 |
| [`SharedRefBody`](#ElasticSupport.SharedRefBody)                             | Gets or sets the SharedRefBody.                                                          |
| [`State`](#ElasticSupport.State)                                             | State property.                                                                          |
| [`StepSelection`](#ElasticSupport.StepSelection)                             | Gets or sets the step number at which the load is applied. Default: 1.                   |
| [`StepSelectionRepresentation`](#ElasticSupport.StepSelectionRepresentation) | Gets or sets the string representation of the step numbers at which the load is applied. |
| [`StepVarying`](#ElasticSupport.StepVarying)                                 | Gets or sets whether the load is applied to a specific RPM/step number. Default: No.     |
| [`Suppressed`](#ElasticSupport.Suppressed)                                   | Gets or sets the Suppressed.                                                             |
| [`TransferableObjectId`](#ElasticSupport.TransferableObjectId)               | TransferableObjectId property.                                                           |
| [`VisibleProperties`](#ElasticSupport.VisibleProperties)                     | Gets the list of properties that are visible for this object.                            |

<a id="property-detail"></a>

## Property detail

<a id="ElasticSupport.AttachedRefs"></a>

### *property* ElasticSupport.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Children"></a>

### *property* ElasticSupport.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.ClsId"></a>

### *property* ElasticSupport.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Comments"></a>

### *property* ElasticSupport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.DataModelObjectCategory"></a>

### *property* ElasticSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Figures"></a>

### *property* ElasticSupport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.FoundationStiffness"></a>

### *property* ElasticSupport.FoundationStiffness *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FoundationStiffness.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GroupingFolder"></a>

### *property* ElasticSupport.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.IconName"></a>

### *property* ElasticSupport.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Images"></a>

### *property* ElasticSupport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.ImportableObjectSourceId"></a>

### *property* ElasticSupport.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.InternalObject"></a>

### *property* ElasticSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Location"></a>

### *property* ElasticSupport.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Name"></a>

### *property* ElasticSupport.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.ObjectId"></a>

### *property* ElasticSupport.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.ObjectState"></a>

### *property* ElasticSupport.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.ObjectTags"></a>

### *property* ElasticSupport.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Parent"></a>

### *property* ElasticSupport.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Properties"></a>

### *property* ElasticSupport.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.ReadOnly"></a>

### *property* ElasticSupport.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.RpmSelection"></a>

### *property* ElasticSupport.RpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM value at which the load is applied.
: An exception is thrown if MultiStep is not True, StepVarying is not Yes, or HarmonicMultiStepType is not RPM.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.SharedRefBody"></a>

### *property* ElasticSupport.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.State"></a>

### *property* ElasticSupport.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.StepSelection"></a>

### *property* ElasticSupport.StepSelection *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the step number at which the load is applied. Default: 1.
: Each step number corresponds to an RPM value specified in the analysis settings.
  Setting this property also updates  to the corresponding RPM value for the specified step number.
  An exception is thrown if  is not True or  is not .
  Valid range is [1, N], where N is . An exception is thrown if the value is out-of-range.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.StepSelectionRepresentation"></a>

### *property* ElasticSupport.StepSelectionRepresentation *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the string representation of the step numbers at which the load is applied.
An exception is thrown if any of the below conditions are met:
1. MultiStep is not True.
2. StepVarying is not Yes.
3. HarmonicMultiStepType is not Load_Step.
4. The input format is invalid.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.StepVarying"></a>

### *property* ElasticSupport.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the load is applied to a specific RPM/step number. Default: No.
: An exception is thrown if  is not True.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Suppressed"></a>

### *property* ElasticSupport.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.TransferableObjectId"></a>

### *property* ElasticSupport.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.VisibleProperties"></a>

### *property* ElasticSupport.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElasticSupport.Activate"></a>

### ElasticSupport.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.AddComment"></a>

### ElasticSupport.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.AddFigure"></a>

### ElasticSupport.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.AddImage"></a>

### ElasticSupport.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Copy"></a>

### ElasticSupport.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.CopyTo"></a>

### ElasticSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.CreateObjRef"></a>

### ElasticSupport.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.CreateParameter"></a>

### ElasticSupport.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Cut"></a>

### ElasticSupport.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Delete"></a>

### ElasticSupport.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Duplicate"></a>

### ElasticSupport.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Equals"></a>

### ElasticSupport.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetAPIName"></a>

### ElasticSupport.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetAllProperties"></a>

### ElasticSupport.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetChildren"></a>

### ElasticSupport.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ElasticSupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetDetailsView"></a>

### ElasticSupport.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetEnumName"></a>

### ElasticSupport.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetHashCode"></a>

### ElasticSupport.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetIconFile"></a>

### ElasticSupport.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetLifetimeService"></a>

### ElasticSupport.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetObjectData"></a>

### ElasticSupport.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetParameter"></a>

### ElasticSupport.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetPath"></a>

### ElasticSupport.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetPropertyName"></a>

### ElasticSupport.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetPropertyValue"></a>

### ElasticSupport.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetVisibleProperties"></a>

### ElasticSupport.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetVisiblePropertyNames"></a>

### ElasticSupport.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GroupAllSimilarChildren"></a>

### ElasticSupport.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GroupSimilarObjects"></a>

### ElasticSupport.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.InitializeLifetimeService"></a>

### ElasticSupport.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.IsPropertyEditable"></a>

### ElasticSupport.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ElasticSupport.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.IsPropertyVisible"></a>

### ElasticSupport.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ElasticSupport.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Paste"></a>

### ElasticSupport.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.PromoteToNamedSelection"></a>

### ElasticSupport.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.PropertyByAPIName"></a>

### ElasticSupport.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.PropertyById"></a>

### ElasticSupport.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.PropertyByName"></a>

### ElasticSupport.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.RemoveFromGroup"></a>

### ElasticSupport.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.RemoveParameter"></a>

### ElasticSupport.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

