# `AMSupport`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupport(internalObject: Any)

<a id="AMSupport"></a>

### *class* AMSupport(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AMSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AMSupport.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#AMSupport.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#AMSupport.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AMSupport.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AMSupport.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AMSupport.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AMSupport.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AMSupport.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AMSupport.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AMSupport.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AMSupport.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AMSupport.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AMSupport.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AMSupport.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AMSupport.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AMSupport.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AMSupport.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AMSupport.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AMSupport.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AMSupport.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AMSupport.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AMSupport.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AMSupport.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AMSupport.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AMSupport.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AMSupport.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AMSupport.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AMSupport.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AMSupport.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AMSupport.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AMSupport.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AMSupport.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AMSupport.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AMSupport.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#AMSupport.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AMSupport.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AMSupport.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AMSupport.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AMSupport.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AMSupport.AttachedRefs)                                     | AttachedRefs property.                                        |
| [`Children`](#AMSupport.Children)                                             | Gets the list of children.                                    |
| [`ClsId`](#AMSupport.ClsId)                                                   | ClsId property.                                               |
| [`Comments`](#AMSupport.Comments)                                             | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AMSupport.DataModelObjectCategory)               | Gets the current DataModelObject's category.                  |
| [`DensityMultiple`](#AMSupport.DensityMultiple)                               | Gets or sets the DensityMultiple.                             |
| [`ElasticModulusMultipleInX`](#AMSupport.ElasticModulusMultipleInX)           | Gets or sets the ElasticModulusMultipleInX.                   |
| [`ElasticModulusMultipleInY`](#AMSupport.ElasticModulusMultipleInY)           | Gets or sets the ElasticModulusMultipleInY.                   |
| [`ElasticModulusMultipleInZ`](#AMSupport.ElasticModulusMultipleInZ)           | Gets or sets the ElasticModulusMultipleInZ.                   |
| [`Figures`](#AMSupport.Figures)                                               | Gets the list of associated figures.                          |
| [`GroupingFolder`](#AMSupport.GroupingFolder)                                 | GroupingFolder property.                                      |
| [`IconName`](#AMSupport.IconName)                                             | IconName property.                                            |
| [`Images`](#AMSupport.Images)                                                 | Gets the list of associated images.                           |
| [`InternalObject`](#AMSupport.InternalObject)                                 | Gets the internal object. For advanced usage only.            |
| [`MaterialMultiplier`](#AMSupport.MaterialMultiplier)                         | Gets or sets the MaterialMultiplier.                          |
| [`MultiplierEntry`](#AMSupport.MultiplierEntry)                               | Gets or sets the MultiplierEntry.                             |
| [`Name`](#AMSupport.Name)                                                     | Name property.                                                |
| [`ObjectId`](#AMSupport.ObjectId)                                             | ObjectId property.                                            |
| [`ObjectState`](#AMSupport.ObjectState)                                       | ObjectState property.                                         |
| [`ObjectTags`](#AMSupport.ObjectTags)                                         | ObjectTags property.                                          |
| [`Parent`](#AMSupport.Parent)                                                 | Parent property.                                              |
| [`Properties`](#AMSupport.Properties)                                         | Gets the list of properties for this object.                  |
| [`ShearModulusMultipleInXY`](#AMSupport.ShearModulusMultipleInXY)             | Gets or sets the ShearModulusMultipleInXY.                    |
| [`ShearModulusMultipleInXZ`](#AMSupport.ShearModulusMultipleInXZ)             | Gets or sets the ShearModulusMultipleInXZ.                    |
| [`ShearModulusMultipleInYZ`](#AMSupport.ShearModulusMultipleInYZ)             | Gets or sets the ShearModulusMultipleInYZ.                    |
| [`State`](#AMSupport.State)                                                   | State property.                                               |
| [`SupportType`](#AMSupport.SupportType)                                       | Gets or sets the SupportType.                                 |
| [`ThermalConductivityMultipleInX`](#AMSupport.ThermalConductivityMultipleInX) | Gets or sets the ThermalConductivityMultipleInX.              |
| [`ThermalConductivityMultipleInY`](#AMSupport.ThermalConductivityMultipleInY) | Gets or sets the ThermalConductivityMultipleInY.              |
| [`ThermalConductivityMultipleInZ`](#AMSupport.ThermalConductivityMultipleInZ) | Gets or sets the ThermalConductivityMultipleInZ.              |
| [`VisibleProperties`](#AMSupport.VisibleProperties)                           | Gets the list of properties that are visible for this object. |
| [`Volume`](#Volume)                                       | Gets or sets the Volume.                                      |
| [`WallSpacing`](#AMSupport.WallSpacing)                                       | Gets or sets the WallSpacing.                                 |
| [`WallThickness`](#AMSupport.WallThickness)                                   | Gets or sets the WallThickness.                               |

<a id="property-detail"></a>

## Property detail

<a id="AMSupport.AttachedRefs"></a>

### *property* AMSupport.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Children"></a>

### *property* AMSupport.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ClsId"></a>

### *property* AMSupport.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Comments"></a>

### *property* AMSupport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.DataModelObjectCategory"></a>

### *property* AMSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.DensityMultiple"></a>

### *property* AMSupport.DensityMultiple *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DensityMultiple.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ElasticModulusMultipleInX"></a>

### *property* AMSupport.ElasticModulusMultipleInX *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElasticModulusMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ElasticModulusMultipleInY"></a>

### *property* AMSupport.ElasticModulusMultipleInY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElasticModulusMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ElasticModulusMultipleInZ"></a>

### *property* AMSupport.ElasticModulusMultipleInZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElasticModulusMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Figures"></a>

### *property* AMSupport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GroupingFolder"></a>

### *property* AMSupport.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.IconName"></a>

### *property* AMSupport.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Images"></a>

### *property* AMSupport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.InternalObject"></a>

### *property* AMSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.MaterialMultiplier"></a>

### *property* AMSupport.MaterialMultiplier *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaterialMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.MultiplierEntry"></a>

### *property* AMSupport.MultiplierEntry *: [Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType](../../../../Mechanical/DataModel/Enums/AMMultiplierEntryType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MultiplierEntry.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Name"></a>

### *property* AMSupport.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ObjectId"></a>

### *property* AMSupport.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ObjectState"></a>

### *property* AMSupport.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ObjectTags"></a>

### *property* AMSupport.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Parent"></a>

### *property* AMSupport.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Properties"></a>

### *property* AMSupport.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ShearModulusMultipleInXY"></a>

### *property* AMSupport.ShearModulusMultipleInXY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearModulusMultipleInXY.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ShearModulusMultipleInXZ"></a>

### *property* AMSupport.ShearModulusMultipleInXZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearModulusMultipleInXZ.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ShearModulusMultipleInYZ"></a>

### *property* AMSupport.ShearModulusMultipleInYZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearModulusMultipleInYZ.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.State"></a>

### *property* AMSupport.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.SupportType"></a>

### *property* AMSupport.SupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportType](../../../../Mechanical/DataModel/Enums/AMSupportType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMSupportType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SupportType.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ThermalConductivityMultipleInX"></a>

### *property* AMSupport.ThermalConductivityMultipleInX *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ThermalConductivityMultipleInY"></a>

### *property* AMSupport.ThermalConductivityMultipleInY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.ThermalConductivityMultipleInZ"></a>

### *property* AMSupport.ThermalConductivityMultipleInZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.VisibleProperties"></a>

### *property* AMSupport.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Volume"></a>

### *property* AMSupport.Volume *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.WallSpacing"></a>

### *property* AMSupport.WallSpacing *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the WallSpacing.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.WallThickness"></a>

### *property* AMSupport.WallThickness *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMSupport.Activate"></a>

### AMSupport.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.AddCommandSnippet"></a>

### AMSupport.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](../CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.AddComment"></a>

### AMSupport.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.AddFigure"></a>

### AMSupport.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.AddImage"></a>

### AMSupport.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Copy"></a>

### AMSupport.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.CopyTo"></a>

### AMSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.CreateObjRef"></a>

### AMSupport.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.CreateParameter"></a>

### AMSupport.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Cut"></a>

### AMSupport.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Delete"></a>

### AMSupport.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Duplicate"></a>

### AMSupport.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Equals"></a>

### AMSupport.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetAPIName"></a>

### AMSupport.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetAllProperties"></a>

### AMSupport.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetChildren"></a>

### AMSupport.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AMSupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetDetailsView"></a>

### AMSupport.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetEnumName"></a>

### AMSupport.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetHashCode"></a>

### AMSupport.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetIconFile"></a>

### AMSupport.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetLifetimeService"></a>

### AMSupport.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetObjectData"></a>

### AMSupport.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetParameter"></a>

### AMSupport.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetPath"></a>

### AMSupport.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetPropertyName"></a>

### AMSupport.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetPropertyValue"></a>

### AMSupport.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetVisibleProperties"></a>

### AMSupport.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GetVisiblePropertyNames"></a>

### AMSupport.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GroupAllSimilarChildren"></a>

### AMSupport.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.GroupSimilarObjects"></a>

### AMSupport.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.InitializeLifetimeService"></a>

### AMSupport.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.IsPropertyEditable"></a>

### AMSupport.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AMSupport.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.IsPropertyVisible"></a>

### AMSupport.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AMSupport.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.Paste"></a>

### AMSupport.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.PropertyByAPIName"></a>

### AMSupport.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.PropertyById"></a>

### AMSupport.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.PropertyByName"></a>

### AMSupport.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.RemoveFromGroup"></a>

### AMSupport.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AMSupport.RemoveParameter"></a>

### AMSupport.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

