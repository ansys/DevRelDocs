# `CompositeFailureCriteria`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureCriteria"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureCriteria(internalObject: Any)

<a id="CompositeFailureCriteria"></a>

### *class* CompositeFailureCriteria(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CompositeFailureCriteria.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CompositeFailureCriteria.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#CompositeFailureCriteria.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#CompositeFailureCriteria.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#CompositeFailureCriteria.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#CompositeFailureCriteria.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CompositeFailureCriteria.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CompositeFailureCriteria.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CompositeFailureCriteria.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CompositeFailureCriteria.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CompositeFailureCriteria.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#CompositeFailureCriteria.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CompositeFailureCriteria.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#CompositeFailureCriteria.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CompositeFailureCriteria.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#CompositeFailureCriteria.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CompositeFailureCriteria.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CompositeFailureCriteria.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#CompositeFailureCriteria.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#CompositeFailureCriteria.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CompositeFailureCriteria.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CompositeFailureCriteria.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#CompositeFailureCriteria.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CompositeFailureCriteria.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#CompositeFailureCriteria.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CompositeFailureCriteria.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CompositeFailureCriteria.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CompositeFailureCriteria.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CompositeFailureCriteria.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CompositeFailureCriteria.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CompositeFailureCriteria.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CompositeFailureCriteria.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CompositeFailureCriteria.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#CompositeFailureCriteria.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CompositeFailureCriteria.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#CompositeFailureCriteria.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#CompositeFailureCriteria.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CompositeFailureCriteria.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CompositeFailureCriteria.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#CompositeFailureCriteria.AttachedRefs)                       | AttachedRefs property.                                                                                   |
| [`Children`](#CompositeFailureCriteria.Children)                               | Gets the list of children.                                                                               |
| [`ClsId`](#CompositeFailureCriteria.ClsId)                                     | ClsId property.                                                                                          |
| [`Comments`](#CompositeFailureCriteria.Comments)                               | Gets the list of associated comments.                                                                    |
| [`CoreFailure`](#CompositeFailureCriteria.CoreFailure)                         | Gets the configuration of the Core Failure sandwich failure criterion                                    |
| [`Cuntze`](#CompositeFailureCriteria.Cuntze)                                   | Gets the configuration of the Cuntze failure criterion for reinforced materials.                         |
| [`DataModelObjectCategory`](#CompositeFailureCriteria.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                             |
| [`FaceSheetWrinkling`](#CompositeFailureCriteria.FaceSheetWrinkling)           | Gets the configuration of the Face Sheet Wrinkling sandwich failure criterion.                           |
| [`Figures`](#CompositeFailureCriteria.Figures)                                 | Gets the list of associated figures.                                                                     |
| [`GroupingFolder`](#CompositeFailureCriteria.GroupingFolder)                   | GroupingFolder property.                                                                                 |
| [`Hashin`](#CompositeFailureCriteria.Hashin)                                   | Gets the configuration of the Hashin failure criterion for reinforced materials.                         |
| [`Hoffman`](#CompositeFailureCriteria.Hoffman)                                 | Gets the configuration of the Hoffman failure criterion for reinforced materials.                        |
| [`IconName`](#CompositeFailureCriteria.IconName)                               | IconName property.                                                                                       |
| [`Images`](#CompositeFailureCriteria.Images)                                   | Gets the list of associated images.                                                                      |
| [`InternalObject`](#CompositeFailureCriteria.InternalObject)                   | Gets the internal object. For advanced usage only.                                                       |
| [`LaRC`](#CompositeFailureCriteria.LaRC)                                       | Gets the configuration of the LaRC (Langley Research Center) failure criterion for reinforced materials. |
| [`MaximumStrain`](#CompositeFailureCriteria.MaximumStrain)                     | Gets the configuration of the maximum strain criterion for reinforced materials.                         |
| [`MaximumStress`](#CompositeFailureCriteria.MaximumStress)                     | Gets the configuration of the maximum stress criterion for reinforced materials.                         |
| [`Name`](#CompositeFailureCriteria.Name)                                       | Name property.                                                                                           |
| [`ObjectId`](#CompositeFailureCriteria.ObjectId)                               | ObjectId property.                                                                                       |
| [`ObjectState`](#CompositeFailureCriteria.ObjectState)                         | ObjectState property.                                                                                    |
| [`ObjectTags`](#CompositeFailureCriteria.ObjectTags)                           | ObjectTags property.                                                                                     |
| [`Parent`](#CompositeFailureCriteria.Parent)                                   | Parent property.                                                                                         |
| [`Properties`](#CompositeFailureCriteria.Properties)                           | Gets the list of properties for this object.                                                             |
| [`Puck`](#CompositeFailureCriteria.Puck)                                       | Gets the configuration of the Puck failure criterion for reinforced materials.                           |
| [`ShearCrimping`](#CompositeFailureCriteria.ShearCrimping)                     | Gets the configuration of the Shear Crimping sandwich failure criterion                                  |
| [`State`](#CompositeFailureCriteria.State)                                     | State property.                                                                                          |
| [`TsaiHill`](#CompositeFailureCriteria.TsaiHill)                               | Gets the configuration of the Tsai-Hill failure criterion for reinforced materials.                      |
| [`TsaiWu`](#CompositeFailureCriteria.TsaiWu)                                   | Gets the configuration of the Tsai-Wu failure criterion for reinforced materials.                        |
| [`VisibleProperties`](#CompositeFailureCriteria.VisibleProperties)             | Gets the list of properties that are visible for this object.                                            |
| [`VonMises`](#CompositeFailureCriteria.VonMises)                               | Gets the configuration of the Von Mises failure criterion for isotropic materials.                       |

<a id="property-detail"></a>

## Property detail

<a id="CompositeFailureCriteria.AttachedRefs"></a>

### *property* CompositeFailureCriteria.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Children"></a>

### *property* CompositeFailureCriteria.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.ClsId"></a>

### *property* CompositeFailureCriteria.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Comments"></a>

### *property* CompositeFailureCriteria.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.CoreFailure"></a>

### *property* CompositeFailureCriteria.CoreFailure *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CoreFailureSettings](CoreFailureSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CoreFailureSettings) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the configuration of the Core Failure sandwich failure criterion

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Cuntze"></a>

### *property* CompositeFailureCriteria.Cuntze *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CuntzeSettings](CuntzeSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CuntzeSettings) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the configuration of the Cuntze failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.DataModelObjectCategory"></a>

### *property* CompositeFailureCriteria.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.FaceSheetWrinkling"></a>

### *property* CompositeFailureCriteria.FaceSheetWrinkling *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.FaceSheetWrinklingSettings](FaceSheetWrinklingSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.FaceSheetWrinklingSettings) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the configuration of the Face Sheet Wrinkling sandwich failure criterion.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Figures"></a>

### *property* CompositeFailureCriteria.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GroupingFolder"></a>

### *property* CompositeFailureCriteria.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Hashin"></a>

### *property* CompositeFailureCriteria.Hashin *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.HashinSettings](HashinSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.HashinSettings) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the configuration of the Hashin failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Hoffman"></a>

### *property* CompositeFailureCriteria.Hoffman *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.HoffmanSettings](HoffmanSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.HoffmanSettings) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the configuration of the Hoffman failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.IconName"></a>

### *property* CompositeFailureCriteria.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Images"></a>

### *property* CompositeFailureCriteria.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.InternalObject"></a>

### *property* CompositeFailureCriteria.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCompositeFailureCriteriaAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.LaRC"></a>

### *property* CompositeFailureCriteria.LaRC *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.LaRCSettings](LaRCSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.LaRCSettings) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the configuration of the LaRC (Langley Research Center) failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.MaximumStrain"></a>

### *property* CompositeFailureCriteria.MaximumStrain *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.MaximumStrainSettings](MaximumStrainSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.MaximumStrainSettings) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the configuration of the maximum strain criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.MaximumStress"></a>

### *property* CompositeFailureCriteria.MaximumStress *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.MaximumStressSettings](MaximumStressSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.MaximumStressSettings) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the configuration of the maximum stress criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Name"></a>

### *property* CompositeFailureCriteria.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.ObjectId"></a>

### *property* CompositeFailureCriteria.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.ObjectState"></a>

### *property* CompositeFailureCriteria.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.ObjectTags"></a>

### *property* CompositeFailureCriteria.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Parent"></a>

### *property* CompositeFailureCriteria.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Properties"></a>

### *property* CompositeFailureCriteria.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Puck"></a>

### *property* CompositeFailureCriteria.Puck *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.PuckSettings](PuckSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.PuckSettings) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the configuration of the Puck failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.ShearCrimping"></a>

### *property* CompositeFailureCriteria.ShearCrimping *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.ShearCrimpingSettings](ShearCrimpingSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.ShearCrimpingSettings) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the configuration of the Shear Crimping sandwich failure criterion

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.State"></a>

### *property* CompositeFailureCriteria.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.TsaiHill"></a>

### *property* CompositeFailureCriteria.TsaiHill *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.TsaiHillSettings](TsaiHillSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.TsaiHillSettings) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the configuration of the Tsai-Hill failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.TsaiWu"></a>

### *property* CompositeFailureCriteria.TsaiWu *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.TsaiWuSettings](TsaiWuSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.TsaiWuSettings) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the configuration of the Tsai-Wu failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.VisibleProperties"></a>

### *property* CompositeFailureCriteria.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.VonMises"></a>

### *property* CompositeFailureCriteria.VonMises *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.VonMisesSettings](VonMisesSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.VonMisesSettings) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the configuration of the Von Mises failure criterion for isotropic materials.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompositeFailureCriteria.Activate"></a>

### CompositeFailureCriteria.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.AddComment"></a>

### CompositeFailureCriteria.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.AddFigure"></a>

### CompositeFailureCriteria.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.AddImage"></a>

### CompositeFailureCriteria.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Copy"></a>

### CompositeFailureCriteria.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.CopyTo"></a>

### CompositeFailureCriteria.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.CreateObjRef"></a>

### CompositeFailureCriteria.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.CreateParameter"></a>

### CompositeFailureCriteria.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Cut"></a>

### CompositeFailureCriteria.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Delete"></a>

### CompositeFailureCriteria.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Duplicate"></a>

### CompositeFailureCriteria.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Equals"></a>

### CompositeFailureCriteria.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GetAPIName"></a>

### CompositeFailureCriteria.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GetAllProperties"></a>

### CompositeFailureCriteria.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GetChildren"></a>

### CompositeFailureCriteria.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CompositeFailureCriteria.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GetDetailsView"></a>

### CompositeFailureCriteria.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GetEnumName"></a>

### CompositeFailureCriteria.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GetHashCode"></a>

### CompositeFailureCriteria.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GetIconFile"></a>

### CompositeFailureCriteria.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GetLifetimeService"></a>

### CompositeFailureCriteria.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GetObjectData"></a>

### CompositeFailureCriteria.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GetParameter"></a>

### CompositeFailureCriteria.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GetPath"></a>

### CompositeFailureCriteria.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GetPropertyName"></a>

### CompositeFailureCriteria.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GetPropertyValue"></a>

### CompositeFailureCriteria.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GetVisibleProperties"></a>

### CompositeFailureCriteria.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GetVisiblePropertyNames"></a>

### CompositeFailureCriteria.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GroupAllSimilarChildren"></a>

### CompositeFailureCriteria.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GroupSimilarObjects"></a>

### CompositeFailureCriteria.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.InitializeLifetimeService"></a>

### CompositeFailureCriteria.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.IsPropertyEditable"></a>

### CompositeFailureCriteria.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CompositeFailureCriteria.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.IsPropertyVisible"></a>

### CompositeFailureCriteria.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CompositeFailureCriteria.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Paste"></a>

### CompositeFailureCriteria.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.PropertyByAPIName"></a>

### CompositeFailureCriteria.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.PropertyById"></a>

### CompositeFailureCriteria.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.PropertyByName"></a>

### CompositeFailureCriteria.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.RemoveFromGroup"></a>

### CompositeFailureCriteria.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.RemoveParameter"></a>

### CompositeFailureCriteria.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

