# `PredefinedAMSupport`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.PredefinedAMSupport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.PredefinedAMSupport(internalObject: Any)

<a id="PredefinedAMSupport"></a>

### *class* PredefinedAMSupport(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PredefinedAMSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PredefinedAMSupport.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#PredefinedAMSupport.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#PredefinedAMSupport.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#PredefinedAMSupport.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#PredefinedAMSupport.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#PredefinedAMSupport.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PredefinedAMSupport.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PredefinedAMSupport.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PredefinedAMSupport.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PredefinedAMSupport.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PredefinedAMSupport.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#PredefinedAMSupport.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PredefinedAMSupport.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#PredefinedAMSupport.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PredefinedAMSupport.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#PredefinedAMSupport.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PredefinedAMSupport.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PredefinedAMSupport.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PredefinedAMSupport.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PredefinedAMSupport.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PredefinedAMSupport.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PredefinedAMSupport.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PredefinedAMSupport.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PredefinedAMSupport.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PredefinedAMSupport.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PredefinedAMSupport.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PredefinedAMSupport.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PredefinedAMSupport.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PredefinedAMSupport.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PredefinedAMSupport.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PredefinedAMSupport.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PredefinedAMSupport.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PredefinedAMSupport.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PredefinedAMSupport.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#PredefinedAMSupport.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PredefinedAMSupport.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PredefinedAMSupport.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PredefinedAMSupport.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PredefinedAMSupport.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#PredefinedAMSupport.AttachedRefs)                                     | AttachedRefs property.                                        |
| [`Children`](#PredefinedAMSupport.Children)                                             | Gets the list of children.                                    |
| [`ClsId`](#PredefinedAMSupport.ClsId)                                                   | ClsId property.                                               |
| [`Comments`](#PredefinedAMSupport.Comments)                                             | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PredefinedAMSupport.DataModelObjectCategory)               | Gets the current DataModelObject's category.                  |
| [`DensityMultiple`](#PredefinedAMSupport.DensityMultiple)                               | Gets or sets the DensityMultiple.                             |
| [`ElasticModulusMultipleInX`](#PredefinedAMSupport.ElasticModulusMultipleInX)           | Gets or sets the ElasticModulusMultipleInX.                   |
| [`ElasticModulusMultipleInY`](#PredefinedAMSupport.ElasticModulusMultipleInY)           | Gets or sets the ElasticModulusMultipleInY.                   |
| [`ElasticModulusMultipleInZ`](#PredefinedAMSupport.ElasticModulusMultipleInZ)           | Gets or sets the ElasticModulusMultipleInZ.                   |
| [`Figures`](#PredefinedAMSupport.Figures)                                               | Gets the list of associated figures.                          |
| [`GroupingFolder`](#PredefinedAMSupport.GroupingFolder)                                 | GroupingFolder property.                                      |
| [`IconName`](#PredefinedAMSupport.IconName)                                             | IconName property.                                            |
| [`Images`](#PredefinedAMSupport.Images)                                                 | Gets the list of associated images.                           |
| [`InternalObject`](#PredefinedAMSupport.InternalObject)                                 | Gets the internal object. For advanced usage only.            |
| [`Location`](#PredefinedAMSupport.Location)                                             | Gets or sets the Location.                                    |
| [`MaterialMultiplier`](#PredefinedAMSupport.MaterialMultiplier)                         | Gets or sets the MaterialMultiplier.                          |
| [`MultiplierEntry`](#PredefinedAMSupport.MultiplierEntry)                               | Gets or sets the MultiplierEntry.                             |
| [`Name`](#PredefinedAMSupport.Name)                                                     | Name property.                                                |
| [`ObjectId`](#PredefinedAMSupport.ObjectId)                                             | ObjectId property.                                            |
| [`ObjectState`](#PredefinedAMSupport.ObjectState)                                       | ObjectState property.                                         |
| [`ObjectTags`](#PredefinedAMSupport.ObjectTags)                                         | ObjectTags property.                                          |
| [`Parent`](#PredefinedAMSupport.Parent)                                                 | Parent property.                                              |
| [`Properties`](#PredefinedAMSupport.Properties)                                         | Gets the list of properties for this object.                  |
| [`ShearModulusMultipleInXY`](#PredefinedAMSupport.ShearModulusMultipleInXY)             | Gets or sets the ShearModulusMultipleInXY.                    |
| [`ShearModulusMultipleInXZ`](#PredefinedAMSupport.ShearModulusMultipleInXZ)             | Gets or sets the ShearModulusMultipleInXZ.                    |
| [`ShearModulusMultipleInYZ`](#PredefinedAMSupport.ShearModulusMultipleInYZ)             | Gets or sets the ShearModulusMultipleInYZ.                    |
| [`State`](#PredefinedAMSupport.State)                                                   | State property.                                               |
| [`SupportType`](#PredefinedAMSupport.SupportType)                                       | Gets or sets the SupportType.                                 |
| [`Suppressed`](#PredefinedAMSupport.Suppressed)                                         | Gets or sets the Suppressed.                                  |
| [`ThermalConductivityMultipleInX`](#PredefinedAMSupport.ThermalConductivityMultipleInX) | Gets or sets the ThermalConductivityMultipleInX.              |
| [`ThermalConductivityMultipleInY`](#PredefinedAMSupport.ThermalConductivityMultipleInY) | Gets or sets the ThermalConductivityMultipleInY.              |
| [`ThermalConductivityMultipleInZ`](#PredefinedAMSupport.ThermalConductivityMultipleInZ) | Gets or sets the ThermalConductivityMultipleInZ.              |
| [`VisibleProperties`](#PredefinedAMSupport.VisibleProperties)                           | Gets the list of properties that are visible for this object. |
| [`Volume`](#Volume)                                                 | Gets or sets the Volume.                                      |
| [`WallSpacing`](#PredefinedAMSupport.WallSpacing)                                       | Gets or sets the WallSpacing.                                 |
| [`WallThickness`](#PredefinedAMSupport.WallThickness)                                   | Gets or sets the WallThickness.                               |

<a id="property-detail"></a>

## Property detail

<a id="PredefinedAMSupport.AttachedRefs"></a>

### *property* PredefinedAMSupport.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Children"></a>

### *property* PredefinedAMSupport.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ClsId"></a>

### *property* PredefinedAMSupport.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Comments"></a>

### *property* PredefinedAMSupport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.DataModelObjectCategory"></a>

### *property* PredefinedAMSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.DensityMultiple"></a>

### *property* PredefinedAMSupport.DensityMultiple *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DensityMultiple.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ElasticModulusMultipleInX"></a>

### *property* PredefinedAMSupport.ElasticModulusMultipleInX *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElasticModulusMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ElasticModulusMultipleInY"></a>

### *property* PredefinedAMSupport.ElasticModulusMultipleInY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElasticModulusMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ElasticModulusMultipleInZ"></a>

### *property* PredefinedAMSupport.ElasticModulusMultipleInZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElasticModulusMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Figures"></a>

### *property* PredefinedAMSupport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GroupingFolder"></a>

### *property* PredefinedAMSupport.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.IconName"></a>

### *property* PredefinedAMSupport.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Images"></a>

### *property* PredefinedAMSupport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.InternalObject"></a>

### *property* PredefinedAMSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Location"></a>

### *property* PredefinedAMSupport.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.MaterialMultiplier"></a>

### *property* PredefinedAMSupport.MaterialMultiplier *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaterialMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.MultiplierEntry"></a>

### *property* PredefinedAMSupport.MultiplierEntry *: [Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType](../../../../Mechanical/DataModel/Enums/AMMultiplierEntryType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MultiplierEntry.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Name"></a>

### *property* PredefinedAMSupport.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ObjectId"></a>

### *property* PredefinedAMSupport.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ObjectState"></a>

### *property* PredefinedAMSupport.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ObjectTags"></a>

### *property* PredefinedAMSupport.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Parent"></a>

### *property* PredefinedAMSupport.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Properties"></a>

### *property* PredefinedAMSupport.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ShearModulusMultipleInXY"></a>

### *property* PredefinedAMSupport.ShearModulusMultipleInXY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearModulusMultipleInXY.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ShearModulusMultipleInXZ"></a>

### *property* PredefinedAMSupport.ShearModulusMultipleInXZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearModulusMultipleInXZ.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ShearModulusMultipleInYZ"></a>

### *property* PredefinedAMSupport.ShearModulusMultipleInYZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearModulusMultipleInYZ.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.State"></a>

### *property* PredefinedAMSupport.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.SupportType"></a>

### *property* PredefinedAMSupport.SupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportType](../../../../Mechanical/DataModel/Enums/AMSupportType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMSupportType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SupportType.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Suppressed"></a>

### *property* PredefinedAMSupport.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ThermalConductivityMultipleInX"></a>

### *property* PredefinedAMSupport.ThermalConductivityMultipleInX *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ThermalConductivityMultipleInY"></a>

### *property* PredefinedAMSupport.ThermalConductivityMultipleInY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.ThermalConductivityMultipleInZ"></a>

### *property* PredefinedAMSupport.ThermalConductivityMultipleInZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.VisibleProperties"></a>

### *property* PredefinedAMSupport.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Volume"></a>

### *property* PredefinedAMSupport.Volume *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.WallSpacing"></a>

### *property* PredefinedAMSupport.WallSpacing *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the WallSpacing.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.WallThickness"></a>

### *property* PredefinedAMSupport.WallThickness *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PredefinedAMSupport.Activate"></a>

### PredefinedAMSupport.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.AddCommandSnippet"></a>

### PredefinedAMSupport.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](../CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.AddComment"></a>

### PredefinedAMSupport.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.AddFigure"></a>

### PredefinedAMSupport.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.AddImage"></a>

### PredefinedAMSupport.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Copy"></a>

### PredefinedAMSupport.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.CopyTo"></a>

### PredefinedAMSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.CreateObjRef"></a>

### PredefinedAMSupport.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.CreateParameter"></a>

### PredefinedAMSupport.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Cut"></a>

### PredefinedAMSupport.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Delete"></a>

### PredefinedAMSupport.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Duplicate"></a>

### PredefinedAMSupport.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Equals"></a>

### PredefinedAMSupport.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetAPIName"></a>

### PredefinedAMSupport.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetAllProperties"></a>

### PredefinedAMSupport.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetChildren"></a>

### PredefinedAMSupport.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PredefinedAMSupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetDetailsView"></a>

### PredefinedAMSupport.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetEnumName"></a>

### PredefinedAMSupport.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetHashCode"></a>

### PredefinedAMSupport.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetIconFile"></a>

### PredefinedAMSupport.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetLifetimeService"></a>

### PredefinedAMSupport.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetObjectData"></a>

### PredefinedAMSupport.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetParameter"></a>

### PredefinedAMSupport.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetPath"></a>

### PredefinedAMSupport.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetPropertyName"></a>

### PredefinedAMSupport.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetPropertyValue"></a>

### PredefinedAMSupport.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetVisibleProperties"></a>

### PredefinedAMSupport.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GetVisiblePropertyNames"></a>

### PredefinedAMSupport.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GroupAllSimilarChildren"></a>

### PredefinedAMSupport.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.GroupSimilarObjects"></a>

### PredefinedAMSupport.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.InitializeLifetimeService"></a>

### PredefinedAMSupport.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.IsPropertyEditable"></a>

### PredefinedAMSupport.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PredefinedAMSupport.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.IsPropertyVisible"></a>

### PredefinedAMSupport.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PredefinedAMSupport.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.Paste"></a>

### PredefinedAMSupport.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.PropertyByAPIName"></a>

### PredefinedAMSupport.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.PropertyById"></a>

### PredefinedAMSupport.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.PropertyByName"></a>

### PredefinedAMSupport.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.RemoveFromGroup"></a>

### PredefinedAMSupport.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMSupport.RemoveParameter"></a>

### PredefinedAMSupport.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

