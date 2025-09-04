# `CompositeFailureCriteria`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureCriteria"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureCriteria

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CompositeFailureCriteria.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CompositeFailureCriteria.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#CompositeFailureCriteria.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CompositeFailureCriteria.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CompositeFailureCriteria.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#CompositeFailureCriteria.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CompositeFailureCriteria.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CompositeFailureCriteria.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CompositeFailureCriteria.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#CompositeFailureCriteria.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CompositeFailureCriteria.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CompositeFailureCriteria.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CompositeFailureCriteria.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#CompositeFailureCriteria.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CompositeFailureCriteria.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CompositeFailureCriteria.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`Children`](#CompositeFailureCriteria.Children)                               | Gets the list of children.                                                                               |
| [`Comments`](#CompositeFailureCriteria.Comments)                               | Gets the list of associated comments.                                                                    |
| [`CoreFailure`](#CompositeFailureCriteria.CoreFailure)                         | Gets the configuration of the Core Failure sandwich failure criterion                                    |
| [`Cuntze`](#CompositeFailureCriteria.Cuntze)                                   | Gets the configuration of the Cuntze failure criterion for reinforced materials.                         |
| [`DataModelObjectCategory`](#CompositeFailureCriteria.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                             |
| [`FaceSheetWrinkling`](#CompositeFailureCriteria.FaceSheetWrinkling)           | Gets the configuration of the Face Sheet Wrinkling sandwich failure criterion.                           |
| [`Figures`](#CompositeFailureCriteria.Figures)                                 | Gets the list of associated figures.                                                                     |
| [`Hashin`](#CompositeFailureCriteria.Hashin)                                   | Gets the configuration of the Hashin failure criterion for reinforced materials.                         |
| [`Hoffman`](#CompositeFailureCriteria.Hoffman)                                 | Gets the configuration of the Hoffman failure criterion for reinforced materials.                        |
| [`Images`](#CompositeFailureCriteria.Images)                                   | Gets the list of associated images.                                                                      |
| [`InternalObject`](#CompositeFailureCriteria.InternalObject)                   | Gets the internal object. For advanced usage only.                                                       |
| [`LaRC`](#CompositeFailureCriteria.LaRC)                                       | Gets the configuration of the LaRC (Langley Research Center) failure criterion for reinforced materials. |
| [`MaximumStrain`](#CompositeFailureCriteria.MaximumStrain)                     | Gets the configuration of the maximum strain criterion for reinforced materials.                         |
| [`MaximumStress`](#CompositeFailureCriteria.MaximumStress)                     | Gets the configuration of the maximum stress criterion for reinforced materials.                         |
| [`Properties`](#CompositeFailureCriteria.Properties)                           | Gets the list of properties for this object.                                                             |
| [`Puck`](#CompositeFailureCriteria.Puck)                                       | Gets the configuration of the Puck failure criterion for reinforced materials.                           |
| [`ShearCrimping`](#CompositeFailureCriteria.ShearCrimping)                     | Gets the configuration of the Shear Crimping sandwich failure criterion                                  |
| [`TsaiHill`](#CompositeFailureCriteria.TsaiHill)                               | Gets the configuration of the Tsai-Hill failure criterion for reinforced materials.                      |
| [`TsaiWu`](#CompositeFailureCriteria.TsaiWu)                                   | Gets the configuration of the Tsai-Wu failure criterion for reinforced materials.                        |
| [`VisibleProperties`](#CompositeFailureCriteria.VisibleProperties)             | Gets the list of properties that are visible for this object.                                            |
| [`VonMises`](#CompositeFailureCriteria.VonMises)                               | Gets the configuration of the Von Mises failure criterion for isotropic materials.                       |

<a id="property-detail"></a>

## Property detail

<a id="CompositeFailureCriteria.Children"></a>

### *property* CompositeFailureCriteria.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Comments"></a>

### *property* CompositeFailureCriteria.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.CoreFailure"></a>

### *property* CompositeFailureCriteria.CoreFailure *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CoreFailureSettings](CoreFailureSettings.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CoreFailureSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Core Failure sandwich failure criterion

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Cuntze"></a>

### *property* CompositeFailureCriteria.Cuntze *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CuntzeSettings](CuntzeSettings.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CuntzeSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Cuntze failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.DataModelObjectCategory"></a>

### *property* CompositeFailureCriteria.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.FaceSheetWrinkling"></a>

### *property* CompositeFailureCriteria.FaceSheetWrinkling *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.FaceSheetWrinklingSettings](FaceSheetWrinklingSettings.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.FaceSheetWrinklingSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Face Sheet Wrinkling sandwich failure criterion.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Figures"></a>

### *property* CompositeFailureCriteria.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Hashin"></a>

### *property* CompositeFailureCriteria.Hashin *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.HashinSettings](HashinSettings.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.HashinSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Hashin failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Hoffman"></a>

### *property* CompositeFailureCriteria.Hoffman *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.HoffmanSettings](HoffmanSettings.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.HoffmanSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Hoffman failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Images"></a>

### *property* CompositeFailureCriteria.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.InternalObject"></a>

### *property* CompositeFailureCriteria.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCompositeFailureCriteriaAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.LaRC"></a>

### *property* CompositeFailureCriteria.LaRC *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.LaRCSettings](LaRCSettings.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.LaRCSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the LaRC (Langley Research Center) failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.MaximumStrain"></a>

### *property* CompositeFailureCriteria.MaximumStrain *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.MaximumStrainSettings](MaximumStrainSettings.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.MaximumStrainSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the maximum strain criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.MaximumStress"></a>

### *property* CompositeFailureCriteria.MaximumStress *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.MaximumStressSettings](MaximumStressSettings.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.MaximumStressSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the maximum stress criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Properties"></a>

### *property* CompositeFailureCriteria.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Puck"></a>

### *property* CompositeFailureCriteria.Puck *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.PuckSettings](PuckSettings.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.PuckSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Puck failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.ShearCrimping"></a>

### *property* CompositeFailureCriteria.ShearCrimping *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.ShearCrimpingSettings](ShearCrimpingSettings.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.ShearCrimpingSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Shear Crimping sandwich failure criterion

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.TsaiHill"></a>

### *property* CompositeFailureCriteria.TsaiHill *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.TsaiHillSettings](TsaiHillSettings.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.TsaiHillSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Tsai-Hill failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.TsaiWu"></a>

### *property* CompositeFailureCriteria.TsaiWu *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.TsaiWuSettings](TsaiWuSettings.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.TsaiWuSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Tsai-Wu failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.VisibleProperties"></a>

### *property* CompositeFailureCriteria.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.VonMises"></a>

### *property* CompositeFailureCriteria.VonMises *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.VonMisesSettings](VonMisesSettings.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.VonMisesSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Von Mises failure criterion for isotropic materials.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompositeFailureCriteria.Activate"></a>

### CompositeFailureCriteria.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.AddComment"></a>

### CompositeFailureCriteria.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.AddFigure"></a>

### CompositeFailureCriteria.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.AddImage"></a>

### CompositeFailureCriteria.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.CopyTo"></a>

### CompositeFailureCriteria.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.CreateParameter"></a>

### CompositeFailureCriteria.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Delete"></a>

### CompositeFailureCriteria.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.Duplicate"></a>

### CompositeFailureCriteria.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GetChildren"></a>

### CompositeFailureCriteria.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GetParameter"></a>

### CompositeFailureCriteria.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GroupAllSimilarChildren"></a>

### CompositeFailureCriteria.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.GroupSimilarObjects"></a>

### CompositeFailureCriteria.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.PropertyByAPIName"></a>

### CompositeFailureCriteria.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.PropertyByName"></a>

### CompositeFailureCriteria.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureCriteria.RemoveParameter"></a>

### CompositeFailureCriteria.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

