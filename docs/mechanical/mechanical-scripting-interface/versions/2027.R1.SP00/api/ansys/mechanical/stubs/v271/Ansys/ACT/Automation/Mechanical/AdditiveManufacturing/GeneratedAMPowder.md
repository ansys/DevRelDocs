# `GeneratedAMPowder`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.GeneratedAMPowder"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.GeneratedAMPowder(internalObject: Any)

<a id="GeneratedAMPowder"></a>

### *class* GeneratedAMPowder(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

This class represents a generated powder object.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| [`Activate`](#GeneratedAMPowder.Activate)                                                               | Activate the current object.                                                                    |
| [`AddCommandSnippet`](#GeneratedAMPowder.AddCommandSnippet)                                             | Creates a new CommandSnippet                                                                    |
| [`AddComment`](#GeneratedAMPowder.AddComment)                                                           | Creates a new child Comment.                                                                    |
| [`AddFigure`](#GeneratedAMPowder.AddFigure)                                                             | Creates a new child Figure.                                                                     |
| [`AddImage`](#GeneratedAMPowder.AddImage)                                                               | Creates a new child Image.                                                                      |
| [`ClearGeneratedData`](#GeneratedAMPowder.ClearGeneratedData)                                           | Clear the generated powder padding surrounding the scoped geometry.                             |
| [`Copy`](#GeneratedAMPowder.Copy)                                                                       | Copies the current DataModelObject.                                                             |
| [`CopyTo`](#GeneratedAMPowder.CopyTo)                                                                   | Copies all visible properties from this object to another.                                      |
| [`CreateNamedSelectionOfGeneratedElements`](#GeneratedAMPowder.CreateNamedSelectionOfGeneratedElements) | Run the PromoteToNamedSelection action.                                                         |
| [`CreateObjRef`](#GeneratedAMPowder.CreateObjRef)                                                       | CreateObjRef method.                                                                            |
| [`CreateParameter`](#GeneratedAMPowder.CreateParameter)                                                 | Creates a new parameter for a Property.                                                         |
| [`Cut`](#GeneratedAMPowder.Cut)                                                                         | Cuts the current DataModelObject.                                                               |
| [`Delete`](#GeneratedAMPowder.Delete)                                                                   | Run the Delete action.                                                                          |
| [`Duplicate`](#GeneratedAMPowder.Duplicate)                                                             | Creates a copy of the current DataModelObject.                                                  |
| [`Equals`](#GeneratedAMPowder.Equals)                                                                   | Equals method.                                                                                  |
| [`GeneratePowderPadding`](#GeneratedAMPowder.GeneratePowderPadding)                                     | Generate the powder padding surrounding the scoped geometry based on the specified PaddingType. |
| [`GetAPIName`](#GeneratedAMPowder.GetAPIName)                                                           | Property name bound to dispId.                                                                  |
| [`GetAllProperties`](#GeneratedAMPowder.GetAllProperties)                                               | GetAllProperties method.                                                                        |
| [`GetChildren`](#GeneratedAMPowder.GetChildren)                                                         | Gets the list of children, filtered by type.                                                    |
| [`GetDetailsView`](#GeneratedAMPowder.GetDetailsView)                                                   | GetDetailsView method.                                                                          |
| [`GetEnumName`](#GeneratedAMPowder.GetEnumName)                                                         | Enum name bound to value                                                                        |
| [`GetHashCode`](#GeneratedAMPowder.GetHashCode)                                                         | GetHashCode method.                                                                             |
| [`GetIconFile`](#GeneratedAMPowder.GetIconFile)                                                         | GetIconFile method.                                                                             |
| [`GetLifetimeService`](#GeneratedAMPowder.GetLifetimeService)                                           | GetLifetimeService method.                                                                      |
| [`GetObjectData`](#GeneratedAMPowder.GetObjectData)                                                     | GetObjectData method.                                                                           |
| [`GetParameter`](#GeneratedAMPowder.GetParameter)                                                       | Gets the parameter corresponding to the given property.                                         |
| [`GetPath`](#GeneratedAMPowder.GetPath)                                                                 | GetPath method.                                                                                 |
| [`GetPropertyName`](#GeneratedAMPowder.GetPropertyName)                                                 | GetPropertyName method.                                                                         |
| [`GetPropertyValue`](#GeneratedAMPowder.GetPropertyValue)                                               | GetPropertyValue method.                                                                        |
| [`GetVisibleProperties`](#GeneratedAMPowder.GetVisibleProperties)                                       | GetVisibleProperties method.                                                                    |
| [`GetVisiblePropertyNames`](#GeneratedAMPowder.GetVisiblePropertyNames)                                 | GetVisiblePropertyNames method.                                                                 |
| [`GroupAllSimilarChildren`](#GeneratedAMPowder.GroupAllSimilarChildren)                                 | Run the GroupAllSimilarChildren action.                                                         |
| [`GroupSimilarObjects`](#GeneratedAMPowder.GroupSimilarObjects)                                         | Run the GroupSimilarObjects action.                                                             |
| [`InitializeLifetimeService`](#GeneratedAMPowder.InitializeLifetimeService)                             | InitializeLifetimeService method.                                                               |
| [`IsPropertyEditable`](#GeneratedAMPowder.IsPropertyEditable)                                           | IsPropertyEditable method.                                                                      |
| [`IsPropertyVisible`](#GeneratedAMPowder.IsPropertyVisible)                                             | IsPropertyVisible method.                                                                       |
| [`Paste`](#GeneratedAMPowder.Paste)                                                                     | Pastes to the current DataModelObject context.                                                  |
| [`PropertyByAPIName`](#GeneratedAMPowder.PropertyByAPIName)                                             | Get a property by its API name.                                                                 |
| [`PropertyById`](#GeneratedAMPowder.PropertyById)                                                       | PropertyById method.                                                                            |
| [`PropertyByName`](#GeneratedAMPowder.PropertyByName)                                                   | Get a property by its unique name.                                                              |
| [`RemoveFromGroup`](#GeneratedAMPowder.RemoveFromGroup)                                                 | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.     |
| [`RemoveParameter`](#GeneratedAMPowder.RemoveParameter)                                                 | Removes the parameter from the parameter set corresponding to the given property.               |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#GeneratedAMPowder.AttachedRefs)                           | AttachedRefs property.                                                                                                                                                                                   |
| [`Children`](#GeneratedAMPowder.Children)                                   | Gets the list of children.                                                                                                                                                                               |
| [`ClsId`](#GeneratedAMPowder.ClsId)                                         | ClsId property.                                                                                                                                                                                          |
| [`Comments`](#GeneratedAMPowder.Comments)                                   | Gets the list of associated comments.                                                                                                                                                                    |
| [`ConductivityMultipleX`](#GeneratedAMPowder.ConductivityMultipleX)         | Specifies the material conductivity multiplier value in the X direction.                                                                                                                                 |
| [`ConductivityMultipleY`](#GeneratedAMPowder.ConductivityMultipleY)         | Specifies the material conductivity multiplier value in the Y direction.                                                                                                                                 |
| [`ConductivityMultipleZ`](#GeneratedAMPowder.ConductivityMultipleZ)         | Specifies the material conductivity multiplier value in the Z direction.                                                                                                                                 |
| [`DataModelObjectCategory`](#GeneratedAMPowder.DataModelObjectCategory)     | Gets the current DataModelObject's category.                                                                                                                                                             |
| [`ElasticModulusMultipleInX`](#GeneratedAMPowder.ElasticModulusMultipleInX) | Specifies the elastic modulus material multiplier in the X direction                                                                                                                                     |
| [`ElasticModulusMultipleInY`](#GeneratedAMPowder.ElasticModulusMultipleInY) | Specifies the elastic modulus material multiplier in the Y direction                                                                                                                                     |
| [`ElasticModulusMultipleInZ`](#GeneratedAMPowder.ElasticModulusMultipleInZ) | Specifies the elastic modulus material multiplier in the Z direction                                                                                                                                     |
| [`Elements`](#GeneratedAMPowder.Elements)                                   | Specifies the number of elements to use for determining the thickness for generated powder.                                                                                                              |
| [`Figures`](#GeneratedAMPowder.Figures)                                     | Gets the list of associated figures.                                                                                                                                                                     |
| [`GroupingFolder`](#GeneratedAMPowder.GroupingFolder)                       | GroupingFolder property.                                                                                                                                                                                 |
| [`IconName`](#GeneratedAMPowder.IconName)                                   | IconName property.                                                                                                                                                                                       |
| [`Images`](#GeneratedAMPowder.Images)                                       | Gets the list of associated images.                                                                                                                                                                      |
| [`IncludeForStructuralSolve`](#GeneratedAMPowder.IncludeForStructuralSolve) | Specifies whether powder should be included in the static structural solve.                                                                                                                              |
| [`InternalObject`](#GeneratedAMPowder.InternalObject)                       | Gets the internal object. For advanced usage only.                                                                                                                                                       |
| [`KnockdownFactor`](#GeneratedAMPowder.KnockdownFactor)                     | Specifies the knockdown factor to use for all material properties.                                                                                                                                       |
| [`KnockdownType`](#GeneratedAMPowder.KnockdownType)                         | Gets or sets the material knockdown entry type. If Automatic, the knockdown factor is applied to all properties. If Manual, knockdown factors for each material property must be specified individually. |
| [`Location`](#GeneratedAMPowder.Location)                                   | Gets or sets the powder object's geometry.                                                                                                                                                               |
| [`Name`](#GeneratedAMPowder.Name)                                           | Name property.                                                                                                                                                                                           |
| [`NonlinearMaterialEffects`](#GeneratedAMPowder.NonlinearMaterialEffects)   | Specifies whether non-linear material effects are applied.                                                                                                                                               |
| [`ObjectId`](#GeneratedAMPowder.ObjectId)                                   | ObjectId property.                                                                                                                                                                                       |
| [`ObjectState`](#GeneratedAMPowder.ObjectState)                             | ObjectState property.                                                                                                                                                                                    |
| [`ObjectTags`](#GeneratedAMPowder.ObjectTags)                               | ObjectTags property.                                                                                                                                                                                     |
| [`PaddingType`](#GeneratedAMPowder.PaddingType)                             | Specifies whether the padding is generated using an absolute thickness or by an element count.                                                                                                           |
| [`Parent`](#GeneratedAMPowder.Parent)                                       | Parent property.                                                                                                                                                                                         |
| [`Properties`](#GeneratedAMPowder.Properties)                               | Gets the list of properties for this object.                                                                                                                                                             |
| [`RelativeDensity`](#GeneratedAMPowder.RelativeDensity)                     | Specifies the density material multiplier.                                                                                                                                                               |
| [`ShearModulusMultipleInXY`](#GeneratedAMPowder.ShearModulusMultipleInXY)   | Specifies the shear modulus material multiplier in the XY direction.                                                                                                                                     |
| [`ShearModulusMultipleInXZ`](#GeneratedAMPowder.ShearModulusMultipleInXZ)   | Specifies the shear modulus material multiplier in the XZ direction.                                                                                                                                     |
| [`ShearModulusMultipleInYZ`](#GeneratedAMPowder.ShearModulusMultipleInYZ)   | Specifies the shear modulus material multiplier in the YZ direction.                                                                                                                                     |
| [`State`](#GeneratedAMPowder.State)                                         | State property.                                                                                                                                                                                          |
| [`Suppressed`](#GeneratedAMPowder.Suppressed)                               | Gets or sets the Suppressed.                                                                                                                                                                             |
| [`Thickness`](#Thickness)                                    | Specifies the absolute thickness for generated powder padding.                                                                                                                                           |
| [`VisibleProperties`](#GeneratedAMPowder.VisibleProperties)                 | Gets the list of properties that are visible for this object.                                                                                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="GeneratedAMPowder.AttachedRefs"></a>

### *property* GeneratedAMPowder.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.Children"></a>

### *property* GeneratedAMPowder.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.ClsId"></a>

### *property* GeneratedAMPowder.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.Comments"></a>

### *property* GeneratedAMPowder.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.ConductivityMultipleX"></a>

### *property* GeneratedAMPowder.ConductivityMultipleX *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the material conductivity multiplier value in the X direction.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.ConductivityMultipleY"></a>

### *property* GeneratedAMPowder.ConductivityMultipleY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the material conductivity multiplier value in the Y direction.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.ConductivityMultipleZ"></a>

### *property* GeneratedAMPowder.ConductivityMultipleZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the material conductivity multiplier value in the Z direction.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.DataModelObjectCategory"></a>

### *property* GeneratedAMPowder.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.ElasticModulusMultipleInX"></a>

### *property* GeneratedAMPowder.ElasticModulusMultipleInX *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the elastic modulus material multiplier in the X direction
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.ElasticModulusMultipleInY"></a>

### *property* GeneratedAMPowder.ElasticModulusMultipleInY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the elastic modulus material multiplier in the Y direction
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.ElasticModulusMultipleInZ"></a>

### *property* GeneratedAMPowder.ElasticModulusMultipleInZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the elastic modulus material multiplier in the Z direction
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.Elements"></a>

### *property* GeneratedAMPowder.Elements *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the number of elements to use for determining the thickness for generated powder.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if  is not Elements.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.Figures"></a>

### *property* GeneratedAMPowder.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GroupingFolder"></a>

### *property* GeneratedAMPowder.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.IconName"></a>

### *property* GeneratedAMPowder.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.Images"></a>

### *property* GeneratedAMPowder.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.IncludeForStructuralSolve"></a>

### *property* GeneratedAMPowder.IncludeForStructuralSolve *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies whether powder should be included in the static structural solve.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.InternalObject"></a>

### *property* GeneratedAMPowder.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMPowderAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.KnockdownFactor"></a>

### *property* GeneratedAMPowder.KnockdownFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the knockdown factor to use for all material properties.
An exception is thrown if the value equals 0.
An exception is thrown if  is not Automatic.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.KnockdownType"></a>

### *property* GeneratedAMPowder.KnockdownType *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the material knockdown entry type. If Automatic, the knockdown factor is applied to all properties. If Manual, knockdown factors for each material property must be specified individually.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.Location"></a>

### *property* GeneratedAMPowder.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the powder object's geometry.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.Name"></a>

### *property* GeneratedAMPowder.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.NonlinearMaterialEffects"></a>

### *property* GeneratedAMPowder.NonlinearMaterialEffects *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies whether non-linear material effects are applied.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.ObjectId"></a>

### *property* GeneratedAMPowder.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.ObjectState"></a>

### *property* GeneratedAMPowder.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.ObjectTags"></a>

### *property* GeneratedAMPowder.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.PaddingType"></a>

### *property* GeneratedAMPowder.PaddingType *: [Ansys.Mechanical.DataModel.Enums.AMPaddingType](../../../../Mechanical/DataModel/Enums/AMPaddingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMPaddingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies whether the padding is generated using an absolute thickness or by an element count.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.Parent"></a>

### *property* GeneratedAMPowder.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.Properties"></a>

### *property* GeneratedAMPowder.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.RelativeDensity"></a>

### *property* GeneratedAMPowder.RelativeDensity *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the density material multiplier.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.ShearModulusMultipleInXY"></a>

### *property* GeneratedAMPowder.ShearModulusMultipleInXY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the shear modulus material multiplier in the XY direction.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.ShearModulusMultipleInXZ"></a>

### *property* GeneratedAMPowder.ShearModulusMultipleInXZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the shear modulus material multiplier in the XZ direction.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.ShearModulusMultipleInYZ"></a>

### *property* GeneratedAMPowder.ShearModulusMultipleInYZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the shear modulus material multiplier in the YZ direction.
An exception is thrown if the value is less than or equal to 0.
An exception is thrown if the  is not Manual.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.State"></a>

### *property* GeneratedAMPowder.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.Suppressed"></a>

### *property* GeneratedAMPowder.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.Thickness"></a>

### *property* GeneratedAMPowder.Thickness *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the absolute thickness for generated powder padding.
An exception is thrown if  is not Thickness.
An exception is thrown if the value is less than or equal to 0.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.VisibleProperties"></a>

### *property* GeneratedAMPowder.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeneratedAMPowder.Activate"></a>

### GeneratedAMPowder.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.AddCommandSnippet"></a>

### GeneratedAMPowder.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](../CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.AddComment"></a>

### GeneratedAMPowder.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.AddFigure"></a>

### GeneratedAMPowder.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.AddImage"></a>

### GeneratedAMPowder.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.ClearGeneratedData"></a>

### GeneratedAMPowder.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clear the generated powder padding surrounding the scoped geometry.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.Copy"></a>

### GeneratedAMPowder.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.CopyTo"></a>

### GeneratedAMPowder.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.CreateNamedSelectionOfGeneratedElements"></a>

### GeneratedAMPowder.CreateNamedSelectionOfGeneratedElements() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.CreateObjRef"></a>

### GeneratedAMPowder.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.CreateParameter"></a>

### GeneratedAMPowder.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.Cut"></a>

### GeneratedAMPowder.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.Delete"></a>

### GeneratedAMPowder.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.Duplicate"></a>

### GeneratedAMPowder.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.Equals"></a>

### GeneratedAMPowder.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GeneratePowderPadding"></a>

### GeneratedAMPowder.GeneratePowderPadding() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate the powder padding surrounding the scoped geometry based on the specified PaddingType.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GetAPIName"></a>

### GeneratedAMPowder.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GetAllProperties"></a>

### GeneratedAMPowder.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GetChildren"></a>

### GeneratedAMPowder.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### GeneratedAMPowder.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GetDetailsView"></a>

### GeneratedAMPowder.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GetEnumName"></a>

### GeneratedAMPowder.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GetHashCode"></a>

### GeneratedAMPowder.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GetIconFile"></a>

### GeneratedAMPowder.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GetLifetimeService"></a>

### GeneratedAMPowder.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GetObjectData"></a>

### GeneratedAMPowder.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GetParameter"></a>

### GeneratedAMPowder.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GetPath"></a>

### GeneratedAMPowder.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GetPropertyName"></a>

### GeneratedAMPowder.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GetPropertyValue"></a>

### GeneratedAMPowder.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GetVisibleProperties"></a>

### GeneratedAMPowder.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GetVisiblePropertyNames"></a>

### GeneratedAMPowder.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GroupAllSimilarChildren"></a>

### GeneratedAMPowder.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.GroupSimilarObjects"></a>

### GeneratedAMPowder.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.InitializeLifetimeService"></a>

### GeneratedAMPowder.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.IsPropertyEditable"></a>

### GeneratedAMPowder.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GeneratedAMPowder.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.IsPropertyVisible"></a>

### GeneratedAMPowder.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GeneratedAMPowder.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.Paste"></a>

### GeneratedAMPowder.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.PropertyByAPIName"></a>

### GeneratedAMPowder.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.PropertyById"></a>

### GeneratedAMPowder.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.PropertyByName"></a>

### GeneratedAMPowder.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.RemoveFromGroup"></a>

### GeneratedAMPowder.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="GeneratedAMPowder.RemoveParameter"></a>

### GeneratedAMPowder.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

