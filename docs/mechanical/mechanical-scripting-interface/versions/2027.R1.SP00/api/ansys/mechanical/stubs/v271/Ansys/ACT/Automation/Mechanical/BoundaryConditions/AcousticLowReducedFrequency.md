# `AcousticLowReducedFrequency`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticLowReducedFrequency"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticLowReducedFrequency(internalObject: Any)

<a id="AcousticLowReducedFrequency"></a>

### *class* AcousticLowReducedFrequency(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticLowReducedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticLowReducedFrequency.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticLowReducedFrequency.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AcousticLowReducedFrequency.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticLowReducedFrequency.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AcousticLowReducedFrequency.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticLowReducedFrequency.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticLowReducedFrequency.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticLowReducedFrequency.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticLowReducedFrequency.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticLowReducedFrequency.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticLowReducedFrequency.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticLowReducedFrequency.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AcousticLowReducedFrequency.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticLowReducedFrequency.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticLowReducedFrequency.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticLowReducedFrequency.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticLowReducedFrequency.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticLowReducedFrequency.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticLowReducedFrequency.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticLowReducedFrequency.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticLowReducedFrequency.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticLowReducedFrequency.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticLowReducedFrequency.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticLowReducedFrequency.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticLowReducedFrequency.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AcousticLowReducedFrequency.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticLowReducedFrequency.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticLowReducedFrequency.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticLowReducedFrequency.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticLowReducedFrequency.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticLowReducedFrequency.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticLowReducedFrequency.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticLowReducedFrequency.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticLowReducedFrequency.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticLowReducedFrequency.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticLowReducedFrequency.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticLowReducedFrequency.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticLowReducedFrequency.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticLowReducedFrequency.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AcousticLowReducedFrequency.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#AcousticLowReducedFrequency.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#AcousticLowReducedFrequency.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#AcousticLowReducedFrequency.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticLowReducedFrequency.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#AcousticLowReducedFrequency.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#AcousticLowReducedFrequency.GroupingFolder)                     | GroupingFolder property.                                      |
| [`HeightOfRectangle`](#AcousticLowReducedFrequency.HeightOfRectangle)               | Gets or sets the HeightOfRectangle.                           |
| [`IconName`](#AcousticLowReducedFrequency.IconName)                                 | IconName property.                                            |
| [`Images`](#AcousticLowReducedFrequency.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AcousticLowReducedFrequency.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#AcousticLowReducedFrequency.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticLowReducedFrequency.Location)                                 | Gets or sets the Location.                                    |
| [`LowReducedFrequencyModel`](#AcousticLowReducedFrequency.LowReducedFrequencyModel) | Gets or sets the LowReducedFrequencyModel.                    |
| [`Name`](#AcousticLowReducedFrequency.Name)                                         | Name property.                                                |
| [`ObjectId`](#AcousticLowReducedFrequency.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#AcousticLowReducedFrequency.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#AcousticLowReducedFrequency.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#AcousticLowReducedFrequency.Parent)                                     | Parent property.                                              |
| [`Properties`](#AcousticLowReducedFrequency.Properties)                             | Gets the list of properties for this object.                  |
| [`RadiusOfCircle`](#AcousticLowReducedFrequency.RadiusOfCircle)                     | Gets or sets the RadiusOfCircle.                              |
| [`ReadOnly`](#AcousticLowReducedFrequency.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticLowReducedFrequency.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#AcousticLowReducedFrequency.State)                                       | State property.                                               |
| [`Suppressed`](#AcousticLowReducedFrequency.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`ThicknessOfLayer`](#AcousticLowReducedFrequency.ThicknessOfLayer)                 | Gets or sets the ThicknessOfLayer.                            |
| [`TransferableObjectId`](#AcousticLowReducedFrequency.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#AcousticLowReducedFrequency.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`WidthOfRectangle`](#AcousticLowReducedFrequency.WidthOfRectangle)                 | Gets or sets the WidthOfRectangle.                            |

<a id="property-detail"></a>

## Property detail

<a id="AcousticLowReducedFrequency.AttachedRefs"></a>

### *property* AcousticLowReducedFrequency.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.Children"></a>

### *property* AcousticLowReducedFrequency.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.ClsId"></a>

### *property* AcousticLowReducedFrequency.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.Comments"></a>

### *property* AcousticLowReducedFrequency.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.DataModelObjectCategory"></a>

### *property* AcousticLowReducedFrequency.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.Figures"></a>

### *property* AcousticLowReducedFrequency.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.GroupingFolder"></a>

### *property* AcousticLowReducedFrequency.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.HeightOfRectangle"></a>

### *property* AcousticLowReducedFrequency.HeightOfRectangle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HeightOfRectangle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.IconName"></a>

### *property* AcousticLowReducedFrequency.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.Images"></a>

### *property* AcousticLowReducedFrequency.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.ImportableObjectSourceId"></a>

### *property* AcousticLowReducedFrequency.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.InternalObject"></a>

### *property* AcousticLowReducedFrequency.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.Location"></a>

### *property* AcousticLowReducedFrequency.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.LowReducedFrequencyModel"></a>

### *property* AcousticLowReducedFrequency.LowReducedFrequencyModel *: [Ansys.Mechanical.DataModel.Enums.LowReducedFrequencyModelType](../../../../Mechanical/DataModel/Enums/LowReducedFrequencyModelType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LowReducedFrequencyModelType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LowReducedFrequencyModel.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.Name"></a>

### *property* AcousticLowReducedFrequency.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.ObjectId"></a>

### *property* AcousticLowReducedFrequency.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.ObjectState"></a>

### *property* AcousticLowReducedFrequency.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.ObjectTags"></a>

### *property* AcousticLowReducedFrequency.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.Parent"></a>

### *property* AcousticLowReducedFrequency.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.Properties"></a>

### *property* AcousticLowReducedFrequency.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.RadiusOfCircle"></a>

### *property* AcousticLowReducedFrequency.RadiusOfCircle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RadiusOfCircle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.ReadOnly"></a>

### *property* AcousticLowReducedFrequency.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.SharedRefBody"></a>

### *property* AcousticLowReducedFrequency.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.State"></a>

### *property* AcousticLowReducedFrequency.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.Suppressed"></a>

### *property* AcousticLowReducedFrequency.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.ThicknessOfLayer"></a>

### *property* AcousticLowReducedFrequency.ThicknessOfLayer *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThicknessOfLayer.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.TransferableObjectId"></a>

### *property* AcousticLowReducedFrequency.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.VisibleProperties"></a>

### *property* AcousticLowReducedFrequency.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.WidthOfRectangle"></a>

### *property* AcousticLowReducedFrequency.WidthOfRectangle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the WidthOfRectangle.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticLowReducedFrequency.Activate"></a>

### AcousticLowReducedFrequency.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.AddComment"></a>

### AcousticLowReducedFrequency.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.AddFigure"></a>

### AcousticLowReducedFrequency.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.AddImage"></a>

### AcousticLowReducedFrequency.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.Copy"></a>

### AcousticLowReducedFrequency.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.CopyTo"></a>

### AcousticLowReducedFrequency.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.CreateObjRef"></a>

### AcousticLowReducedFrequency.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.CreateParameter"></a>

### AcousticLowReducedFrequency.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.Cut"></a>

### AcousticLowReducedFrequency.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.Delete"></a>

### AcousticLowReducedFrequency.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.Duplicate"></a>

### AcousticLowReducedFrequency.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.Equals"></a>

### AcousticLowReducedFrequency.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.GetAPIName"></a>

### AcousticLowReducedFrequency.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.GetAllProperties"></a>

### AcousticLowReducedFrequency.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.GetChildren"></a>

### AcousticLowReducedFrequency.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticLowReducedFrequency.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.GetDetailsView"></a>

### AcousticLowReducedFrequency.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.GetEnumName"></a>

### AcousticLowReducedFrequency.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.GetHashCode"></a>

### AcousticLowReducedFrequency.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.GetIconFile"></a>

### AcousticLowReducedFrequency.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.GetLifetimeService"></a>

### AcousticLowReducedFrequency.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.GetObjectData"></a>

### AcousticLowReducedFrequency.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.GetParameter"></a>

### AcousticLowReducedFrequency.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.GetPath"></a>

### AcousticLowReducedFrequency.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.GetPropertyName"></a>

### AcousticLowReducedFrequency.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.GetPropertyValue"></a>

### AcousticLowReducedFrequency.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.GetVisibleProperties"></a>

### AcousticLowReducedFrequency.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.GetVisiblePropertyNames"></a>

### AcousticLowReducedFrequency.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.GroupAllSimilarChildren"></a>

### AcousticLowReducedFrequency.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.GroupSimilarObjects"></a>

### AcousticLowReducedFrequency.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.InitializeLifetimeService"></a>

### AcousticLowReducedFrequency.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.IsPropertyEditable"></a>

### AcousticLowReducedFrequency.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticLowReducedFrequency.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.IsPropertyVisible"></a>

### AcousticLowReducedFrequency.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticLowReducedFrequency.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.Paste"></a>

### AcousticLowReducedFrequency.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.PromoteToNamedSelection"></a>

### AcousticLowReducedFrequency.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.PropertyByAPIName"></a>

### AcousticLowReducedFrequency.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.PropertyById"></a>

### AcousticLowReducedFrequency.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.PropertyByName"></a>

### AcousticLowReducedFrequency.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.RemoveFromGroup"></a>

### AcousticLowReducedFrequency.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticLowReducedFrequency.RemoveParameter"></a>

### AcousticLowReducedFrequency.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

