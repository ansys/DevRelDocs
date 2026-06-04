# `MaterialCombination`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MaterialCombination"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MaterialCombination

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MaterialCombination.Activate)                                 | Activate the current object.                                                      |
| [`AddComment`](#MaterialCombination.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#MaterialCombination.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#MaterialCombination.AddImage)                                 | Creates a new child Image.                                                        |
| [`AddMaterial`](#MaterialCombination.AddMaterial)                           | Add a material to the combination.                                                |
| [`AddMaterialAssignment`](#MaterialCombination.AddMaterialAssignment)       | Run the AddMaterialAssignment action.                                             |
| [`AddMaterialByName`](#MaterialCombination.AddMaterialByName)               | Add a material to the combination by name.                                        |
| [`CopyTo`](#MaterialCombination.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`CreateMaterialAssignment`](#MaterialCombination.CreateMaterialAssignment) | Run the CreateMaterialAssignment action.                                          |
| [`CreateParameter`](#MaterialCombination.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`Delete`](#MaterialCombination.Delete)                                     | Delete the MaterialCombination.                                                   |
| [`Duplicate`](#MaterialCombination.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GetAsDictionary`](#MaterialCombination.GetAsDictionary)                   | Returns material as a python dictionary                                           |
| [`GetChildren`](#MaterialCombination.GetChildren)                           | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MaterialCombination.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MaterialCombination.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MaterialCombination.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MaterialCombination.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`PropertyByName`](#MaterialCombination.PropertyByName)                     | Get a property by its unique name.                                                |
| [`RemoveMaterial`](#MaterialCombination.RemoveMaterial)                     | Remove material from the combination.                                             |
| [`RemoveMaterialByName`](#MaterialCombination.RemoveMaterialByName)         | Remove material from the combination by name.                                     |
| [`RemoveParameter`](#MaterialCombination.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [`AssignedBodies`](#MaterialCombination.AssignedBodies)                   | Gets the AssignedBodies.                                                      |
| [`Children`](#MaterialCombination.Children)                               | Gets the list of children.                                                    |
| [`Comments`](#MaterialCombination.Comments)                               | Gets the list of associated comments.                                         |
| [`DataModelObjectCategory`](#MaterialCombination.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                  |
| [`Figures`](#MaterialCombination.Figures)                                 | Gets the list of associated figures.                                          |
| [`Images`](#MaterialCombination.Images)                                   | Gets the list of associated images.                                           |
| [`InternalObject`](#MaterialCombination.InternalObject)                   | Gets the internal object. For advanced usage only.                            |
| [`MaterialModels`](#MaterialCombination.MaterialModels)                   | Returns a collection of the material models that this material is made up of. |
| [`Materials`](#MaterialCombination.Materials)                             | Dictionary of Material to Fraction in Combination.                            |
| [`Properties`](#MaterialCombination.Properties)                           | Gets the list of properties for this object.                                  |
| [`Suppressed`](#MaterialCombination.Suppressed)                           | Suppress or unsuppress the MaterialCombination.                               |
| [`VisibleProperties`](#MaterialCombination.VisibleProperties)             | Gets the list of properties that are visible for this object.                 |

<a id="property-detail"></a>

## Property detail

<a id="MaterialCombination.AssignedBodies"></a>

### *property* MaterialCombination.AssignedBodies *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AssignedBodies.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Children"></a>

### *property* MaterialCombination.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Comments"></a>

### *property* MaterialCombination.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.DataModelObjectCategory"></a>

### *property* MaterialCombination.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Figures"></a>

### *property* MaterialCombination.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Images"></a>

### *property* MaterialCombination.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.InternalObject"></a>

### *property* MaterialCombination.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialCombinationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.MaterialModels"></a>

### *property* MaterialCombination.MaterialModels *: List[Any] | [None](https://docs.python.org/3/library/constants.html#None)*

Returns a collection of the material models that this material is made up of.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Materials"></a>

### *property* MaterialCombination.Materials *: Ansys.ACT.Automation.Mechanical.MaterialFractionDictionary | [None](https://docs.python.org/3/library/constants.html#None)*

Dictionary of Material to Fraction in Combination.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Properties"></a>

### *property* MaterialCombination.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Suppressed"></a>

### *property* MaterialCombination.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Suppress or unsuppress the MaterialCombination.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.VisibleProperties"></a>

### *property* MaterialCombination.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MaterialCombination.Activate"></a>

### MaterialCombination.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.AddComment"></a>

### MaterialCombination.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.AddFigure"></a>

### MaterialCombination.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.AddImage"></a>

### MaterialCombination.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.AddMaterial"></a>

### MaterialCombination.AddMaterial(material: [Ansys.ACT.Automation.Mechanical.Material](Material.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Material)) → [None](https://docs.python.org/3/library/constants.html#None)

Add a material to the combination.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.AddMaterialAssignment"></a>

### MaterialCombination.AddMaterialAssignment() → [Ansys.ACT.Automation.Mechanical.MaterialAssignment](MaterialAssignment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MaterialAssignment)

Run the AddMaterialAssignment action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.AddMaterialByName"></a>

### MaterialCombination.AddMaterialByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Add a material to the combination by name.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.CopyTo"></a>

### MaterialCombination.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.CreateMaterialAssignment"></a>

### MaterialCombination.CreateMaterialAssignment() → [Ansys.ACT.Automation.Mechanical.MaterialAssignment](MaterialAssignment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MaterialAssignment)

Run the CreateMaterialAssignment action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.CreateParameter"></a>

### MaterialCombination.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Delete"></a>

### MaterialCombination.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Delete the MaterialCombination.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.Duplicate"></a>

### MaterialCombination.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetAsDictionary"></a>

### MaterialCombination.GetAsDictionary() → [dict](https://docs.python.org/3/library/stdtypes.html#dict)[Any, Any]

Returns material as a python dictionary

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetChildren"></a>

### MaterialCombination.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GetParameter"></a>

### MaterialCombination.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GroupAllSimilarChildren"></a>

### MaterialCombination.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.GroupSimilarObjects"></a>

### MaterialCombination.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.PropertyByAPIName"></a>

### MaterialCombination.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.PropertyByName"></a>

### MaterialCombination.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.RemoveMaterial"></a>

### MaterialCombination.RemoveMaterial(material: [Ansys.ACT.Automation.Mechanical.Material](Material.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Material)) → [None](https://docs.python.org/3/library/constants.html#None)

Remove material from the combination.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.RemoveMaterialByName"></a>

### MaterialCombination.RemoveMaterialByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Remove material from the combination by name.

<!-- !! processed by numpydoc !! -->

<a id="MaterialCombination.RemoveParameter"></a>

### MaterialCombination.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

