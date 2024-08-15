# `MaterialCombination`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.MaterialCombination

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

MaterialCombination class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------|-----------------------------------------------------------------------------------|
| `Delete`                   | Delete the MaterialCombination.                                                   |
| `AddMaterial`              | Add a material to the combination.                                                |
| `AddMaterialByName`        | Add a material to the combination by name.                                        |
| `RemoveMaterial`           | Remove material from the combination.                                             |
| `RemoveMaterialByName`     | Remove material from the combination by name.                                     |
| `CreateMaterialAssignment` | Run the CreateMaterialAssignment action.                                          |
| `AddMaterialAssignment`    | Run the AddMaterialAssignment action.                                             |
| `GetAsDictionary`          | Returns material as a python dictionary                                           |
| `GetChildren`              | Gets the list of children, filtered by type.                                      |
| `GetChildren`              | Gets the list of children, filtered by type.                                      |
| `AddComment`               | Creates a new child Comment.                                                      |
| `AddFigure`                | Creates a new child Figure.                                                       |
| `AddImage`                 | Creates a new child Image.                                                        |
| `Activate`                 | Activate the current object.                                                      |
| `CopyTo`                   | Copies all visible properties from this object to another.                        |
| `Duplicate`                | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`  | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`      | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`           | Get a property by its unique name.                                                |
| `PropertyByAPIName`        | Get a property by its API name.                                                   |
| `CreateParameter`          | Creates a new parameter for a Property.                                           |
| `GetParameter`             | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`          | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Suppressed`              | Suppress or unsuppress the MaterialCombination.               |
| `Materials`               | Dictionary of Material to Fraction in Combination.            |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `AssignedBodies`          | Gets the AssignedBodies.                                      |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Figures`                 | Gets the list of associated figures.                          |
| `Images`                  | Gets the list of associated images.                           |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* MaterialCombination.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialCombinationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MaterialCombination.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Suppress or unsuppress the MaterialCombination.

<!-- !! processed by numpydoc !! -->

### *property* MaterialCombination.Materials *: Ansys.ACT.Automation.Mechanical.MaterialFractionDictionary | [None](https://docs.python.org/3/library/constants.html#None)*

Dictionary of Material to Fraction in Combination.

<!-- !! processed by numpydoc !! -->

### *property* MaterialCombination.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MaterialCombination.AssignedBodies *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AssignedBodies.

<!-- !! processed by numpydoc !! -->

### *property* MaterialCombination.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* MaterialCombination.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MaterialCombination.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MaterialCombination.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MaterialCombination.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MaterialCombination.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MaterialCombination.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MaterialCombination.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### MaterialCombination.Delete()

Delete the MaterialCombination.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.AddMaterial(material: [Ansys.ACT.Automation.Mechanical.Material](../../../../../v241/Ansys/ACT/Automation/Mechanical/Material.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Material))

Add a material to the combination.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.AddMaterialByName(name: System.String)

Add a material to the combination by name.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.RemoveMaterial(material: [Ansys.ACT.Automation.Mechanical.Material](../../../../../v241/Ansys/ACT/Automation/Mechanical/Material.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Material))

Remove material from the combination.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.RemoveMaterialByName(name: System.String)

Remove material from the combination by name.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.CreateMaterialAssignment()

Run the CreateMaterialAssignment action.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.AddMaterialAssignment()

Run the AddMaterialAssignment action.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.GetAsDictionary()

Returns material as a python dictionary

<!-- !! processed by numpydoc !! -->

### MaterialCombination.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### MaterialCombination.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### MaterialCombination.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MaterialCombination.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

