# `Symmetry`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Symmetry"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Symmetry

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Symmetry.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Symmetry.Activate)                                 | Activate the current object.                                                      |
| [`AddComment`](#Symmetry.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddCyclicRegion`](#Symmetry.AddCyclicRegion)                   | Creates a new CyclicRegion                                                        |
| [`AddFigure`](#Symmetry.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddGeneralAxisymmetric`](#Symmetry.AddGeneralAxisymmetric)     | Creates a new GeneralAxisymmetric                                                 |
| [`AddImage`](#Symmetry.AddImage)                                 | Creates a new child Image.                                                        |
| [`AddLinearPeriodicRegion`](#Symmetry.AddLinearPeriodicRegion)   | Creates a new SymmetryRegion                                                      |
| [`AddPeriodicRegion`](#Symmetry.AddPeriodicRegion)               | Creates a new PeriodicRegion                                                      |
| [`AddPreMeshedCyclicRegion`](#Symmetry.AddPreMeshedCyclicRegion) | Creates a new PreMeshedCyclicRegion                                               |
| [`AddStage`](#Symmetry.AddStage)                                 | Creates a new Stage                                                               |
| [`AddSymmetryRegion`](#Symmetry.AddSymmetryRegion)               | Creates a new SymmetryRegion                                                      |
| [`CopyTo`](#Symmetry.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Symmetry.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`Delete`](#Symmetry.Delete)                                     | Run the Delete action.                                                            |
| [`Duplicate`](#Symmetry.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Symmetry.GetChildren)                           | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Symmetry.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Symmetry.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Symmetry.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Symmetry.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`PropertyByName`](#Symmetry.PropertyByName)                     | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Symmetry.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Symmetry.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Symmetry.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Symmetry.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#Symmetry.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Symmetry.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Symmetry.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Symmetry.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Symmetry.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`VisibleProperties`](#Symmetry.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Symmetry.Children"></a>

### *property* Symmetry.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Comments"></a>

### *property* Symmetry.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.DataModelObjectCategory"></a>

### *property* Symmetry.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Figures"></a>

### *property* Symmetry.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Images"></a>

### *property* Symmetry.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.InternalObject"></a>

### *property* Symmetry.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Properties"></a>

### *property* Symmetry.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.ReadOnly"></a>

### *property* Symmetry.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.VisibleProperties"></a>

### *property* Symmetry.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Symmetry.Activate"></a>

### Symmetry.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddComment"></a>

### Symmetry.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddCyclicRegion"></a>

### Symmetry.AddCyclicRegion() → [Ansys.ACT.Automation.Mechanical.CyclicRegion](CyclicRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CyclicRegion)

Creates a new CyclicRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddFigure"></a>

### Symmetry.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddGeneralAxisymmetric"></a>

### Symmetry.AddGeneralAxisymmetric() → [Ansys.ACT.Automation.Mechanical.GeneralAxisymmetric](GeneralAxisymmetric.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.GeneralAxisymmetric)

Creates a new GeneralAxisymmetric

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddImage"></a>

### Symmetry.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddLinearPeriodicRegion"></a>

### Symmetry.AddLinearPeriodicRegion() → [Ansys.ACT.Automation.Mechanical.SymmetryRegion](SymmetryRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SymmetryRegion)

Creates a new SymmetryRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddPeriodicRegion"></a>

### Symmetry.AddPeriodicRegion() → [Ansys.ACT.Automation.Mechanical.PeriodicRegion](PeriodicRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.PeriodicRegion)

Creates a new PeriodicRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddPreMeshedCyclicRegion"></a>

### Symmetry.AddPreMeshedCyclicRegion() → [Ansys.ACT.Automation.Mechanical.PreMeshedCyclicRegion](PreMeshedCyclicRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.PreMeshedCyclicRegion)

Creates a new PreMeshedCyclicRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddStage"></a>

### Symmetry.AddStage() → [Ansys.ACT.Automation.Mechanical.Stage](Stage.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Stage)

Creates a new Stage

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddSymmetryRegion"></a>

### Symmetry.AddSymmetryRegion() → [Ansys.ACT.Automation.Mechanical.SymmetryRegion](SymmetryRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SymmetryRegion)

Creates a new SymmetryRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.CopyTo"></a>

### Symmetry.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.CreateParameter"></a>

### Symmetry.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Delete"></a>

### Symmetry.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Duplicate"></a>

### Symmetry.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetChildren"></a>

### Symmetry.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetParameter"></a>

### Symmetry.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GroupAllSimilarChildren"></a>

### Symmetry.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GroupSimilarObjects"></a>

### Symmetry.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.PropertyByAPIName"></a>

### Symmetry.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.PropertyByName"></a>

### Symmetry.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.RemoveParameter"></a>

### Symmetry.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

