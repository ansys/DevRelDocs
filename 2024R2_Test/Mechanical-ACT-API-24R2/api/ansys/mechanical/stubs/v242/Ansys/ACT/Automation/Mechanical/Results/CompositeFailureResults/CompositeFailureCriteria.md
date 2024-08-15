# `CompositeFailureCriteria`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureCriteria

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CompositeFailureCriteria.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|----------------------------------------------------------------------------------------------------------|
| `MaximumStrain`           | Gets the configuration of the maximum strain criterion for reinforced materials.                         |
| `MaximumStress`           | Gets the configuration of the maximum stress criterion for reinforced materials.                         |
| `TsaiWu`                  | Gets the configuration of the Tsai-Wu failure criterion for reinforced materials.                        |
| `TsaiHill`                | Gets the configuration of the Tsai-Hill failure criterion for reinforced materials.                      |
| `Hoffman`                 | Gets the configuration of the Hoffman failure criterion for reinforced materials.                        |
| `Hashin`                  | Gets the configuration of the Hashin failure criterion for reinforced materials.                         |
| `Puck`                    | Gets the configuration of the Puck failure criterion for reinforced materials.                           |
| `LaRC`                    | Gets the configuration of the LaRC (Langley Research Center) failure criterion for reinforced materials. |
| `Cuntze`                  | Gets the configuration of the Cuntze failure criterion for reinforced materials.                         |
| `FaceSheetWrinkling`      | Gets the configuration of the Face Sheet Wrinkling sandwich failure criterion.                           |
| `CoreFailure`             | Gets the configuration of the Core Failure sandwich failure criterion                                    |
| `ShearCrimping`           | Gets the configuration of the Shear Crimping sandwich failure criterion                                  |
| `VonMises`                | Gets the configuration of the Von Mises failure criterion for isotropic materials.                       |
| `InternalObject`          | Gets the internal object. For advanced usage only.                                                       |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                                                             |
| `Children`                | Gets the list of children.                                                                               |
| `Comments`                | Gets the list of associated comments.                                                                    |
| `Figures`                 | Gets the list of associated figures.                                                                     |
| `Images`                  | Gets the list of associated images.                                                                      |
| `InternalObject`          | Gets the internal object. For advanced usage only.                                                       |
| `Properties`              | Gets the list of properties for this object.                                                             |
| `VisibleProperties`       | Gets the list of properties that are visible for this object.                                            |

<a id="property-detail"></a>

## Property detail

### *property* CompositeFailureCriteria.MaximumStrain *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.MaximumStrainSettings](MaximumStrainSettings.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.MaximumStrainSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the maximum strain criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.MaximumStress *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.MaximumStressSettings](MaximumStressSettings.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.MaximumStressSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the maximum stress criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.TsaiWu *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.TsaiWuSettings](TsaiWuSettings.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.TsaiWuSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Tsai-Wu failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.TsaiHill *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.TsaiHillSettings](TsaiHillSettings.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.TsaiHillSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Tsai-Hill failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.Hoffman *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.HoffmanSettings](HoffmanSettings.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.HoffmanSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Hoffman failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.Hashin *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.HashinSettings](HashinSettings.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.HashinSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Hashin failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.Puck *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.PuckSettings](PuckSettings.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.PuckSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Puck failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.LaRC *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.LaRCSettings](LaRCSettings.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.LaRCSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the LaRC (Langley Research Center) failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.Cuntze *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CuntzeSettings](CuntzeSettings.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CuntzeSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Cuntze failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.FaceSheetWrinkling *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.FaceSheetWrinklingSettings](FaceSheetWrinklingSettings.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.FaceSheetWrinklingSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Face Sheet Wrinkling sandwich failure criterion.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.CoreFailure *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CoreFailureSettings](CoreFailureSettings.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CoreFailureSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Core Failure sandwich failure criterion

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.ShearCrimping *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.ShearCrimpingSettings](ShearCrimpingSettings.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.ShearCrimpingSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Shear Crimping sandwich failure criterion

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.VonMises *: [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.VonMisesSettings](VonMisesSettings.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.VonMisesSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the configuration of the Von Mises failure criterion for isotropic materials.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCompositeFailureCriteriaAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* CompositeFailureCriteria.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### CompositeFailureCriteria.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### CompositeFailureCriteria.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CompositeFailureCriteria.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CompositeFailureCriteria.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### CompositeFailureCriteria.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### CompositeFailureCriteria.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### CompositeFailureCriteria.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### CompositeFailureCriteria.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### CompositeFailureCriteria.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### CompositeFailureCriteria.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### CompositeFailureCriteria.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### CompositeFailureCriteria.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### CompositeFailureCriteria.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### CompositeFailureCriteria.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### CompositeFailureCriteria.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### CompositeFailureCriteria.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

