# `PredefinedAMPowder`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.PredefinedAMPowder"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.PredefinedAMPowder(internalObject: Any)

<a id="PredefinedAMPowder"></a>

### *class* PredefinedAMPowder(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

This class represents a predefined powder object.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PredefinedAMPowder.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#PredefinedAMPowder.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#PredefinedAMPowder.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#PredefinedAMPowder.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#PredefinedAMPowder.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#PredefinedAMPowder.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PredefinedAMPowder.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PredefinedAMPowder.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PredefinedAMPowder.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PredefinedAMPowder.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PredefinedAMPowder.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#PredefinedAMPowder.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PredefinedAMPowder.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#PredefinedAMPowder.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PredefinedAMPowder.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#PredefinedAMPowder.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PredefinedAMPowder.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PredefinedAMPowder.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PredefinedAMPowder.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PredefinedAMPowder.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PredefinedAMPowder.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PredefinedAMPowder.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PredefinedAMPowder.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PredefinedAMPowder.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PredefinedAMPowder.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PredefinedAMPowder.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PredefinedAMPowder.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PredefinedAMPowder.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PredefinedAMPowder.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PredefinedAMPowder.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PredefinedAMPowder.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PredefinedAMPowder.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PredefinedAMPowder.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PredefinedAMPowder.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#PredefinedAMPowder.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PredefinedAMPowder.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PredefinedAMPowder.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PredefinedAMPowder.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PredefinedAMPowder.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#PredefinedAMPowder.AttachedRefs)                           | AttachedRefs property.                                                                                                                                                                                   |
| [`Children`](#PredefinedAMPowder.Children)                                   | Gets the list of children.                                                                                                                                                                               |
| [`ClsId`](#PredefinedAMPowder.ClsId)                                         | ClsId property.                                                                                                                                                                                          |
| [`Comments`](#PredefinedAMPowder.Comments)                                   | Gets the list of associated comments.                                                                                                                                                                    |
| [`ConductivityMultipleX`](#PredefinedAMPowder.ConductivityMultipleX)         | Specifies the material conductivity multiplier value in the X direction.                                                                                                                                 |
| [`ConductivityMultipleY`](#PredefinedAMPowder.ConductivityMultipleY)         | Specifies the material conductivity multiplier value in the Y direction.                                                                                                                                 |
| [`ConductivityMultipleZ`](#PredefinedAMPowder.ConductivityMultipleZ)         | Specifies the material conductivity multiplier value in the Z direction.                                                                                                                                 |
| [`DataModelObjectCategory`](#PredefinedAMPowder.DataModelObjectCategory)     | Gets the current DataModelObject's category.                                                                                                                                                             |
| [`ElasticModulusMultipleInX`](#PredefinedAMPowder.ElasticModulusMultipleInX) | Specifies the elastic modulus material multiplier in the X direction                                                                                                                                     |
| [`ElasticModulusMultipleInY`](#PredefinedAMPowder.ElasticModulusMultipleInY) | Specifies the elastic modulus material multiplier in the Y direction                                                                                                                                     |
| [`ElasticModulusMultipleInZ`](#PredefinedAMPowder.ElasticModulusMultipleInZ) | Specifies the elastic modulus material multiplier in the Z direction                                                                                                                                     |
| [`Figures`](#PredefinedAMPowder.Figures)                                     | Gets the list of associated figures.                                                                                                                                                                     |
| [`GroupingFolder`](#PredefinedAMPowder.GroupingFolder)                       | GroupingFolder property.                                                                                                                                                                                 |
| [`IconName`](#PredefinedAMPowder.IconName)                                   | IconName property.                                                                                                                                                                                       |
| [`Images`](#PredefinedAMPowder.Images)                                       | Gets the list of associated images.                                                                                                                                                                      |
| [`IncludeForStructuralSolve`](#PredefinedAMPowder.IncludeForStructuralSolve) | Specifies whether powder should be included in the static structural solve.                                                                                                                              |
| [`InternalObject`](#PredefinedAMPowder.InternalObject)                       | Gets the internal object. For advanced usage only.                                                                                                                                                       |
| [`KnockdownFactor`](#PredefinedAMPowder.KnockdownFactor)                     | Specifies the knockdown factor to use for all material properties.                                                                                                                                       |
| [`KnockdownType`](#PredefinedAMPowder.KnockdownType)                         | Gets or sets the material knockdown entry type. If Automatic, the knockdown factor is applied to all properties. If Manual, knockdown factors for each material property must be specified individually. |
| [`Location`](#PredefinedAMPowder.Location)                                   | Gets or sets the powder object's geometry.                                                                                                                                                               |
| [`Name`](#PredefinedAMPowder.Name)                                           | Name property.                                                                                                                                                                                           |
| [`NonlinearMaterialEffects`](#PredefinedAMPowder.NonlinearMaterialEffects)   | Specifies whether non-linear material effects are applied.                                                                                                                                               |
| [`ObjectId`](#PredefinedAMPowder.ObjectId)                                   | ObjectId property.                                                                                                                                                                                       |
| [`ObjectState`](#PredefinedAMPowder.ObjectState)                             | ObjectState property.                                                                                                                                                                                    |
| [`ObjectTags`](#PredefinedAMPowder.ObjectTags)                               | ObjectTags property.                                                                                                                                                                                     |
| [`Parent`](#PredefinedAMPowder.Parent)                                       | Parent property.                                                                                                                                                                                         |
| [`Properties`](#PredefinedAMPowder.Properties)                               | Gets the list of properties for this object.                                                                                                                                                             |
| [`RelativeDensity`](#PredefinedAMPowder.RelativeDensity)                     | Specifies the density material multiplier.                                                                                                                                                               |
| [`ShearModulusMultipleInXY`](#PredefinedAMPowder.ShearModulusMultipleInXY)   | Specifies the shear modulus material multiplier in the XY direction.                                                                                                                                     |
| [`ShearModulusMultipleInXZ`](#PredefinedAMPowder.ShearModulusMultipleInXZ)   | Specifies the shear modulus material multiplier in the XZ direction.                                                                                                                                     |
| [`ShearModulusMultipleInYZ`](#PredefinedAMPowder.ShearModulusMultipleInYZ)   | Specifies the shear modulus material multiplier in the YZ direction.                                                                                                                                     |
| [`State`](#PredefinedAMPowder.State)                                         | State property.                                                                                                                                                                                          |
| [`Suppressed`](#PredefinedAMPowder.Suppressed)                               | Gets or sets the Suppressed.                                                                                                                                                                             |
| [`VisibleProperties`](#PredefinedAMPowder.VisibleProperties)                 | Gets the list of properties that are visible for this object.                                                                                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="PredefinedAMPowder.AttachedRefs"></a>

### *property* PredefinedAMPowder.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.Children"></a>

### *property* PredefinedAMPowder.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.ClsId"></a>

### *property* PredefinedAMPowder.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.Comments"></a>

### *property* PredefinedAMPowder.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.ConductivityMultipleX"></a>

### *property* PredefinedAMPowder.ConductivityMultipleX *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the material conductivity multiplier value in the X direction.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.ConductivityMultipleY"></a>

### *property* PredefinedAMPowder.ConductivityMultipleY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the material conductivity multiplier value in the Y direction.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.ConductivityMultipleZ"></a>

### *property* PredefinedAMPowder.ConductivityMultipleZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the material conductivity multiplier value in the Z direction.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.DataModelObjectCategory"></a>

### *property* PredefinedAMPowder.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.ElasticModulusMultipleInX"></a>

### *property* PredefinedAMPowder.ElasticModulusMultipleInX *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the elastic modulus material multiplier in the X direction
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.ElasticModulusMultipleInY"></a>

### *property* PredefinedAMPowder.ElasticModulusMultipleInY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the elastic modulus material multiplier in the Y direction
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.ElasticModulusMultipleInZ"></a>

### *property* PredefinedAMPowder.ElasticModulusMultipleInZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the elastic modulus material multiplier in the Z direction
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.Figures"></a>

### *property* PredefinedAMPowder.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.GroupingFolder"></a>

### *property* PredefinedAMPowder.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.IconName"></a>

### *property* PredefinedAMPowder.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.Images"></a>

### *property* PredefinedAMPowder.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.IncludeForStructuralSolve"></a>

### *property* PredefinedAMPowder.IncludeForStructuralSolve *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies whether powder should be included in the static structural solve.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.InternalObject"></a>

### *property* PredefinedAMPowder.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMPowderAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.KnockdownFactor"></a>

### *property* PredefinedAMPowder.KnockdownFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the knockdown factor to use for all material properties.
An exception is thrown if the value equals 0.
An exception is thrown if  is not Automatic.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.KnockdownType"></a>

### *property* PredefinedAMPowder.KnockdownType *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the material knockdown entry type. If Automatic, the knockdown factor is applied to all properties. If Manual, knockdown factors for each material property must be specified individually.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.Location"></a>

### *property* PredefinedAMPowder.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the powder object's geometry.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.Name"></a>

### *property* PredefinedAMPowder.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.NonlinearMaterialEffects"></a>

### *property* PredefinedAMPowder.NonlinearMaterialEffects *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies whether non-linear material effects are applied.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.ObjectId"></a>

### *property* PredefinedAMPowder.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.ObjectState"></a>

### *property* PredefinedAMPowder.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.ObjectTags"></a>

### *property* PredefinedAMPowder.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.Parent"></a>

### *property* PredefinedAMPowder.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.Properties"></a>

### *property* PredefinedAMPowder.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.RelativeDensity"></a>

### *property* PredefinedAMPowder.RelativeDensity *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the density material multiplier.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.ShearModulusMultipleInXY"></a>

### *property* PredefinedAMPowder.ShearModulusMultipleInXY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the shear modulus material multiplier in the XY direction.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.ShearModulusMultipleInXZ"></a>

### *property* PredefinedAMPowder.ShearModulusMultipleInXZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the shear modulus material multiplier in the XZ direction.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.ShearModulusMultipleInYZ"></a>

### *property* PredefinedAMPowder.ShearModulusMultipleInYZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the shear modulus material multiplier in the YZ direction.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.State"></a>

### *property* PredefinedAMPowder.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.Suppressed"></a>

### *property* PredefinedAMPowder.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.VisibleProperties"></a>

### *property* PredefinedAMPowder.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PredefinedAMPowder.Activate"></a>

### PredefinedAMPowder.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.AddCommandSnippet"></a>

### PredefinedAMPowder.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](../CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.AddComment"></a>

### PredefinedAMPowder.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.AddFigure"></a>

### PredefinedAMPowder.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.AddImage"></a>

### PredefinedAMPowder.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.Copy"></a>

### PredefinedAMPowder.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.CopyTo"></a>

### PredefinedAMPowder.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.CreateObjRef"></a>

### PredefinedAMPowder.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.CreateParameter"></a>

### PredefinedAMPowder.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.Cut"></a>

### PredefinedAMPowder.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.Delete"></a>

### PredefinedAMPowder.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.Duplicate"></a>

### PredefinedAMPowder.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.Equals"></a>

### PredefinedAMPowder.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.GetAPIName"></a>

### PredefinedAMPowder.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.GetAllProperties"></a>

### PredefinedAMPowder.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.GetChildren"></a>

### PredefinedAMPowder.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PredefinedAMPowder.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.GetDetailsView"></a>

### PredefinedAMPowder.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.GetEnumName"></a>

### PredefinedAMPowder.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.GetHashCode"></a>

### PredefinedAMPowder.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.GetIconFile"></a>

### PredefinedAMPowder.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.GetLifetimeService"></a>

### PredefinedAMPowder.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.GetObjectData"></a>

### PredefinedAMPowder.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.GetParameter"></a>

### PredefinedAMPowder.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.GetPath"></a>

### PredefinedAMPowder.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.GetPropertyName"></a>

### PredefinedAMPowder.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.GetPropertyValue"></a>

### PredefinedAMPowder.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.GetVisibleProperties"></a>

### PredefinedAMPowder.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.GetVisiblePropertyNames"></a>

### PredefinedAMPowder.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.GroupAllSimilarChildren"></a>

### PredefinedAMPowder.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.GroupSimilarObjects"></a>

### PredefinedAMPowder.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.InitializeLifetimeService"></a>

### PredefinedAMPowder.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.IsPropertyEditable"></a>

### PredefinedAMPowder.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PredefinedAMPowder.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.IsPropertyVisible"></a>

### PredefinedAMPowder.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PredefinedAMPowder.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.Paste"></a>

### PredefinedAMPowder.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.PropertyByAPIName"></a>

### PredefinedAMPowder.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.PropertyById"></a>

### PredefinedAMPowder.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.PropertyByName"></a>

### PredefinedAMPowder.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.RemoveFromGroup"></a>

### PredefinedAMPowder.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PredefinedAMPowder.RemoveParameter"></a>

### PredefinedAMPowder.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

