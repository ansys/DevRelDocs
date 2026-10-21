# `AMPowder`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMPowder"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMPowder(internalObject: Any)

<a id="AMPowder"></a>

### *class* AMPowder(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

This class represents a powder object.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AMPowder.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#AMPowder.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#AMPowder.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AMPowder.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AMPowder.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AMPowder.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AMPowder.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AMPowder.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AMPowder.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AMPowder.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AMPowder.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AMPowder.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AMPowder.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AMPowder.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AMPowder.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AMPowder.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AMPowder.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AMPowder.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AMPowder.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AMPowder.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AMPowder.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AMPowder.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AMPowder.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AMPowder.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AMPowder.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AMPowder.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AMPowder.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AMPowder.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AMPowder.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AMPowder.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AMPowder.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AMPowder.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AMPowder.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AMPowder.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#AMPowder.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AMPowder.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AMPowder.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AMPowder.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AMPowder.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#AMPowder.AttachedRefs)                           | AttachedRefs property.                                                                                                                                                                                   |
| [`Children`](#AMPowder.Children)                                   | Gets the list of children.                                                                                                                                                                               |
| [`ClsId`](#AMPowder.ClsId)                                         | ClsId property.                                                                                                                                                                                          |
| [`Comments`](#AMPowder.Comments)                                   | Gets the list of associated comments.                                                                                                                                                                    |
| [`ConductivityMultipleX`](#AMPowder.ConductivityMultipleX)         | Specifies the material conductivity multiplier value in the X direction.                                                                                                                                 |
| [`ConductivityMultipleY`](#AMPowder.ConductivityMultipleY)         | Specifies the material conductivity multiplier value in the Y direction.                                                                                                                                 |
| [`ConductivityMultipleZ`](#AMPowder.ConductivityMultipleZ)         | Specifies the material conductivity multiplier value in the Z direction.                                                                                                                                 |
| [`DataModelObjectCategory`](#AMPowder.DataModelObjectCategory)     | Gets the current DataModelObject's category.                                                                                                                                                             |
| [`ElasticModulusMultipleInX`](#AMPowder.ElasticModulusMultipleInX) | Specifies the elastic modulus material multiplier in the X direction                                                                                                                                     |
| [`ElasticModulusMultipleInY`](#AMPowder.ElasticModulusMultipleInY) | Specifies the elastic modulus material multiplier in the Y direction                                                                                                                                     |
| [`ElasticModulusMultipleInZ`](#AMPowder.ElasticModulusMultipleInZ) | Specifies the elastic modulus material multiplier in the Z direction                                                                                                                                     |
| [`Figures`](#AMPowder.Figures)                                     | Gets the list of associated figures.                                                                                                                                                                     |
| [`GroupingFolder`](#AMPowder.GroupingFolder)                       | GroupingFolder property.                                                                                                                                                                                 |
| [`IconName`](#AMPowder.IconName)                                   | IconName property.                                                                                                                                                                                       |
| [`Images`](#AMPowder.Images)                                       | Gets the list of associated images.                                                                                                                                                                      |
| [`IncludeForStructuralSolve`](#AMPowder.IncludeForStructuralSolve) | Specifies whether powder should be included in the static structural solve.                                                                                                                              |
| [`InternalObject`](#AMPowder.InternalObject)                       | Gets the internal object. For advanced usage only.                                                                                                                                                       |
| [`KnockdownFactor`](#AMPowder.KnockdownFactor)                     | Specifies the knockdown factor to use for all material properties.                                                                                                                                       |
| [`KnockdownType`](#AMPowder.KnockdownType)                         | Gets or sets the material knockdown entry type. If Automatic, the knockdown factor is applied to all properties. If Manual, knockdown factors for each material property must be specified individually. |
| [`Name`](#AMPowder.Name)                                           | Name property.                                                                                                                                                                                           |
| [`NonlinearMaterialEffects`](#AMPowder.NonlinearMaterialEffects)   | Specifies whether non-linear material effects are applied.                                                                                                                                               |
| [`ObjectId`](#AMPowder.ObjectId)                                   | ObjectId property.                                                                                                                                                                                       |
| [`ObjectState`](#AMPowder.ObjectState)                             | ObjectState property.                                                                                                                                                                                    |
| [`ObjectTags`](#AMPowder.ObjectTags)                               | ObjectTags property.                                                                                                                                                                                     |
| [`Parent`](#AMPowder.Parent)                                       | Parent property.                                                                                                                                                                                         |
| [`Properties`](#AMPowder.Properties)                               | Gets the list of properties for this object.                                                                                                                                                             |
| [`RelativeDensity`](#AMPowder.RelativeDensity)                     | Specifies the density material multiplier.                                                                                                                                                               |
| [`ShearModulusMultipleInXY`](#AMPowder.ShearModulusMultipleInXY)   | Specifies the shear modulus material multiplier in the XY direction.                                                                                                                                     |
| [`ShearModulusMultipleInXZ`](#AMPowder.ShearModulusMultipleInXZ)   | Specifies the shear modulus material multiplier in the XZ direction.                                                                                                                                     |
| [`ShearModulusMultipleInYZ`](#AMPowder.ShearModulusMultipleInYZ)   | Specifies the shear modulus material multiplier in the YZ direction.                                                                                                                                     |
| [`State`](#AMPowder.State)                                         | State property.                                                                                                                                                                                          |
| [`VisibleProperties`](#AMPowder.VisibleProperties)                 | Gets the list of properties that are visible for this object.                                                                                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="AMPowder.AttachedRefs"></a>

### *property* AMPowder.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.Children"></a>

### *property* AMPowder.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.ClsId"></a>

### *property* AMPowder.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.Comments"></a>

### *property* AMPowder.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.ConductivityMultipleX"></a>

### *property* AMPowder.ConductivityMultipleX *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the material conductivity multiplier value in the X direction.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.ConductivityMultipleY"></a>

### *property* AMPowder.ConductivityMultipleY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the material conductivity multiplier value in the Y direction.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.ConductivityMultipleZ"></a>

### *property* AMPowder.ConductivityMultipleZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the material conductivity multiplier value in the Z direction.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.DataModelObjectCategory"></a>

### *property* AMPowder.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.ElasticModulusMultipleInX"></a>

### *property* AMPowder.ElasticModulusMultipleInX *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the elastic modulus material multiplier in the X direction
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.ElasticModulusMultipleInY"></a>

### *property* AMPowder.ElasticModulusMultipleInY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the elastic modulus material multiplier in the Y direction
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.ElasticModulusMultipleInZ"></a>

### *property* AMPowder.ElasticModulusMultipleInZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the elastic modulus material multiplier in the Z direction
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.Figures"></a>

### *property* AMPowder.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.GroupingFolder"></a>

### *property* AMPowder.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.IconName"></a>

### *property* AMPowder.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.Images"></a>

### *property* AMPowder.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.IncludeForStructuralSolve"></a>

### *property* AMPowder.IncludeForStructuralSolve *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies whether powder should be included in the static structural solve.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.InternalObject"></a>

### *property* AMPowder.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMPowderAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.KnockdownFactor"></a>

### *property* AMPowder.KnockdownFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the knockdown factor to use for all material properties.
An exception is thrown if the value equals 0.
An exception is thrown if  is not Automatic.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.KnockdownType"></a>

### *property* AMPowder.KnockdownType *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the material knockdown entry type. If Automatic, the knockdown factor is applied to all properties. If Manual, knockdown factors for each material property must be specified individually.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.Name"></a>

### *property* AMPowder.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.NonlinearMaterialEffects"></a>

### *property* AMPowder.NonlinearMaterialEffects *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies whether non-linear material effects are applied.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.ObjectId"></a>

### *property* AMPowder.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.ObjectState"></a>

### *property* AMPowder.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.ObjectTags"></a>

### *property* AMPowder.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.Parent"></a>

### *property* AMPowder.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.Properties"></a>

### *property* AMPowder.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.RelativeDensity"></a>

### *property* AMPowder.RelativeDensity *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the density material multiplier.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.ShearModulusMultipleInXY"></a>

### *property* AMPowder.ShearModulusMultipleInXY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the shear modulus material multiplier in the XY direction.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.ShearModulusMultipleInXZ"></a>

### *property* AMPowder.ShearModulusMultipleInXZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the shear modulus material multiplier in the XZ direction.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.ShearModulusMultipleInYZ"></a>

### *property* AMPowder.ShearModulusMultipleInYZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the shear modulus material multiplier in the YZ direction.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.State"></a>

### *property* AMPowder.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.VisibleProperties"></a>

### *property* AMPowder.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMPowder.Activate"></a>

### AMPowder.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.AddCommandSnippet"></a>

### AMPowder.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](../CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.AddComment"></a>

### AMPowder.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.AddFigure"></a>

### AMPowder.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.AddImage"></a>

### AMPowder.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.Copy"></a>

### AMPowder.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.CopyTo"></a>

### AMPowder.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.CreateObjRef"></a>

### AMPowder.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.CreateParameter"></a>

### AMPowder.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.Cut"></a>

### AMPowder.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.Delete"></a>

### AMPowder.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.Duplicate"></a>

### AMPowder.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.Equals"></a>

### AMPowder.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.GetAPIName"></a>

### AMPowder.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.GetAllProperties"></a>

### AMPowder.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.GetChildren"></a>

### AMPowder.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AMPowder.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.GetDetailsView"></a>

### AMPowder.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.GetEnumName"></a>

### AMPowder.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.GetHashCode"></a>

### AMPowder.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.GetIconFile"></a>

### AMPowder.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.GetLifetimeService"></a>

### AMPowder.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.GetObjectData"></a>

### AMPowder.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.GetParameter"></a>

### AMPowder.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.GetPath"></a>

### AMPowder.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.GetPropertyName"></a>

### AMPowder.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.GetPropertyValue"></a>

### AMPowder.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.GetVisibleProperties"></a>

### AMPowder.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.GetVisiblePropertyNames"></a>

### AMPowder.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.GroupAllSimilarChildren"></a>

### AMPowder.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.GroupSimilarObjects"></a>

### AMPowder.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.InitializeLifetimeService"></a>

### AMPowder.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.IsPropertyEditable"></a>

### AMPowder.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AMPowder.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.IsPropertyVisible"></a>

### AMPowder.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AMPowder.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.Paste"></a>

### AMPowder.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.PropertyByAPIName"></a>

### AMPowder.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.PropertyById"></a>

### AMPowder.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.PropertyByName"></a>

### AMPowder.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.RemoveFromGroup"></a>

### AMPowder.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AMPowder.RemoveParameter"></a>

### AMPowder.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

